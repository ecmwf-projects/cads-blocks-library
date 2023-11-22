import React from "react"

import { GenerateBlocks } from "../GenerateBlocks";
import { LayoutSectionBlock } from "../../models";

const MOCK: LayoutSectionBlock = {
  "blocks": [ {
    "collapsed": true,
    "blocks": [ {
      "id": "qa_general_accuracy_and_consistency",
      "href": "?tab=quality-assessment#qa_general_accuracy_and_consistency",
      "type": "checkitem",
      "title": "Accuracy and Consistency",
      "status": "OK"
    }, {
      "id": "qa_general_reliable_access",
      "href": "?tab=quality-assessment#qa_general_reliable_access",
      "type": "checkitem",
      "title": "Reliable Access",
      "status": "WARNING"
    }, {
      "id": "qa_general_versioning_and_archiving",
      "href": "?tab=quality-assessment#qa_general_versioning_and_archiving",
      "type": "checkitem",
      "title": "Versioning and Archiving",
      "status": "WARNING"
    } ],
    "id": "qa_aside_general",
    "href": "?tab=quality-assessment#qa_general",
    "type": "checkitem",
    "title": "General",
    "status": "OK"
  }, {
    "collapsed": true,
    "blocks": [ {
      "id": "qa_data_records_consistency",
      "href": "?tab=quality-assessment#qa_data_records_consistency",
      "type": "checkitem",
      "title": "Consistency",
      "status": "NA"
    }, {
      "id": "qa_data_records_uncertainty",
      "href": "?tab=quality-assessment#qa_data_records_uncertainty",
      "type": "checkitem",
      "title": "Consistency",
      "status": "NA"
    }, {
      "id": "qa_data_records_updates",
      "href": "?tab=quality-assessment#qa_data_records_updates",
      "type": "checkitem",
      "title": "Updates",
      "status": "NA"
    } ],
    "id": "qa_data_records",
    "href": "?tab=quality-assessment#qa_data_records",
    "type": "checkitem",
    "title": "Data records",
    "status": "OK"
  }, {
    "collapsed": true,
    "blocks": [ {
      "id": "qa_metadata_discovery_and_use_qc",
      "href": "?tab=quality-assessment#qa_metadata_discovery_and_use_qc",
      "type": "checkitem",
      "title": "Discovery and Use",
      "status": "NA"
    }, {
      "id": "qa_metadata_interoperability_qc",
      "href": "?tab=quality-assessment#qa_metadata_interoperability_qc",
      "type": "checkitem",
      "title": "Interoperability",
      "status": "NA"
    } ],
    "id": "qa_metadata",
    "href": "?tab=quality-assessment#qa_metadata",
    "type": "checkitem",
    "title": "Metadata",
    "status": "OK"
  }, {
    "collapsed": true,
    "blocks": [ {
      "id": "qa_documentation_content",
      "href": "?tab=quality-assessment#qa_documentation_content",
      "type": "checkitem",
      "title": "Content",
      "status": "NA"
    }, {
      "id": "qa_documentation_scientific_basis",
      "href": "?tab=quality-assessment#qa_documentation_scientific_basis",
      "type": "checkitem",
      "title": "Scientific Basis",
      "status": "NA"
    }, {
      "id": "qa_documentation_quality_control",
      "href": "?tab=quality-assessment#qa_documentation_quality_control",
      "type": "checkitem",
      "title": "Quality Control",
      "status": "NA"
    }, {
      "id": "qa_documentation_user_guidance",
      "href": "?tab=quality-assessment#qa_documentation_user_guidance",
      "type": "checkitem",
      "title": "User Guidance",
      "status": "NA"
    } ],
    "id": "qa_documentation",
    "href": "?tab=quality-assessment#qa_documentation",
    "type": "checkitem",
    "title": "Documentation",
    "status": "OK"
  } ],
  "id": "quality_assurance_section",
  "type": "section",
  "title": "Quality Assurance"
};


export const CheckItemStory = () => (<div style={
  {
    width: '400px',
    backgroundColor: 'white',
    border: '1px solid #CCC',
    padding: '20px',
  }
}>
  <GenerateBlocks blocks={[MOCK]} />
</div>);
