/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/* @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = { 
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
 
  tutorialSidebar: [
    'intro', 
	'basic_integration', 
    {
      type: 'category',
      label: 'Administration',
      items: ['administration/administration', 'administration/tenants'],
    },
	{
      type: 'category',
      label: 'Security',
      items: ['security/security', 'security/authorization', 'security/authorization_definition', 'security/authorization_clients', 'security/authorization_providers'],
    },
	{
      type: 'category',
      label: 'Gateway',
      items: ['gateway/gateway', 'gateway/connection', 'gateway/resources'],
    },	
	{
      type: 'category',
      label: 'Data',
      items: ['data/data', 'data/document_types', 'data/file_types'],
    },
	{
      type: 'category',
      label: 'Workflows',
      items: ['workflows/workflows', 'workflows/flows', 'workflows/observers', 'workflows/schedulers'],
    },	
	{
      type: 'category',
      label: 'Transformations',
      items: ['transformations/transformations', 'transformations/parsers', 'transformations/converters', 'transformations/templates', 'transformations/updaters'],
    },	
	{
      type: 'category',
      label: 'Generic Elements',
      items: ['generic/generic_action_form', 'generic/generic_menu_options_'],
    },		
  ],
   
   
};

module.exports = sidebars;
