-- HomeGen.co Database Schema
-- Run this in the Supabase SQL Editor to set up all tables

-- Table: installers (create first since leads references it)
CREATE TABLE installers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  company_name TEXT NOT NULL,
  contact_name TEXT,
  email TEXT NOT NULL,
  phone TEXT,
  website TEXT,
  states TEXT[] DEFAULT '{}',
  cities TEXT[] DEFAULT '{}',
  service_radius_miles INTEGER,
  brands TEXT[] DEFAULT '{}',
  is_certified_generac BOOLEAN DEFAULT FALSE,
  is_certified_kohler BOOLEAN DEFAULT FALSE,
  lead_price_usd DECIMAL(10,2) DEFAULT 40.00,
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'paused', 'inactive', 'trial')),
  total_leads_sent INTEGER DEFAULT 0,
  total_leads_accepted INTEGER DEFAULT 0,
  total_leads_converted INTEGER DEFAULT 0,
  admin_notes TEXT,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table: leads
CREATE TABLE leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  city TEXT NOT NULL,
  home_size_sqft INTEGER,
  generator_need TEXT NOT NULL DEFAULT 'New installation',
  coverage TEXT DEFAULT 'Whole house',
  fuel_type TEXT DEFAULT 'Natural Gas',
  timeline TEXT DEFAULT 'Within 1 month',
  notes TEXT,
  source TEXT DEFAULT 'direct',
  source_url TEXT,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'sent', 'accepted', 'rejected', 'converted', 'invalid')),
  installer_id UUID REFERENCES installers(id),
  sent_to_installer_at TIMESTAMP WITH TIME ZONE,
  installer_response TEXT,
  installer_response_at TIMESTAMP WITH TIME ZONE,
  lead_value_usd DECIMAL(10,2) DEFAULT 0,
  is_paid BOOLEAN DEFAULT FALSE,
  paid_at TIMESTAMP WITH TIME ZONE,
  admin_notes TEXT,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table: lead_assignments
CREATE TABLE lead_assignments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  lead_id UUID NOT NULL REFERENCES leads(id) ON DELETE CASCADE,
  installer_id UUID NOT NULL REFERENCES installers(id) ON DELETE CASCADE,
  sent_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  sent_method TEXT DEFAULT 'email',
  installer_response TEXT CHECK (installer_response IN ('pending', 'accepted', 'rejected', 'no_response')),
  responded_at TIMESTAMP WITH TIME ZONE,
  lead_price_usd DECIMAL(10,2),
  is_paid BOOLEAN DEFAULT FALSE,
  paid_at TIMESTAMP WITH TIME ZONE,
  notes TEXT
);

-- Indexes
CREATE INDEX idx_leads_status ON leads(status);
CREATE INDEX idx_leads_created_at ON leads(created_at);
CREATE INDEX idx_leads_city ON leads(city);
CREATE INDEX idx_leads_installer_id ON leads(installer_id);
CREATE INDEX idx_assignments_lead_id ON lead_assignments(lead_id);
CREATE INDEX idx_assignments_installer_id ON lead_assignments(installer_id);

-- RLS policies (service role has full access)
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE installers ENABLE ROW LEVEL SECURITY;
ALTER TABLE lead_assignments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service role full access leads" ON leads FOR ALL USING (true);
CREATE POLICY "Service role full access installers" ON installers FOR ALL USING (true);
CREATE POLICY "Service role full access assignments" ON lead_assignments FOR ALL USING (true);

-- Helper function for incrementing installer stats
CREATE OR REPLACE FUNCTION increment_installer_leads_sent(p_installer_id UUID)
RETURNS VOID AS $$
BEGIN
  UPDATE installers
  SET total_leads_sent = total_leads_sent + 1,
      updated_at = NOW()
  WHERE id = p_installer_id;
END;
$$ LANGUAGE plpgsql;
