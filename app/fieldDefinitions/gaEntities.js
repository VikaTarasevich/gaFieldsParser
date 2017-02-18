const gaFields = {
    "ga:userType": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_events_with_local_currency", "per_content_with_local_currency", "per_value_site_search", "phone_analytics", "all_metrics_for_audiences_overview", "per_product_with_local_currency", "per_content_with_gwo_id_and_outcomes"]
    },
    "ga:visitorType": {
        "type": "DIMENSION",
        "excludedGroups": []
    },
    "ga:sessionCount": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_events_with_local_currency", "per_content_with_local_currency", "per_value_site_search", "per_dimension_widening", "per_product_with_local_currency", "per_content_with_gwo_id_and_outcomes"]
    },
    "ga:visitCount": {
        "type": "DIMENSION",
        "excludedGroups": []
    },
    "ga:daysSinceLastSession": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_events_with_local_currency", "per_content_with_local_currency", "per_value_site_search", "per_content_with_gwo_id_and_outcomes"]
    },
    "ga:daysSinceLastVisit": {
        "type": "DIMENSION",
        "excludedGroups": []
    },
    "ga:userDefinedValue": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_events_with_local_currency", "per_content_with_local_currency", "per_value_site_search", "per_product_with_local_currency", "per_content_with_gwo_id_and_outcomes"]
    },
    "ga:userBucket": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_events_with_local_currency", "per_content_with_local_currency", "per_value_site_search", "per_product_with_local_currency", "per_content_with_gwo_id_and_outcomes"]
    },
    "ga:users": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_wmx_site", "per_absolute_unique_visitors", "per_campaign_segmented_with_local_currency", "per_wmx_query", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "session_quality_report", "per_events_with_local_currency", "gdn_targeting", "per_wmx_url", "per_content_with_local_currency", "per_value_site_search", "per_goal_funnel_request", "all_metrics_for_audiences_overview", "per_campaign_shasta_with_local_currency", "per_orphan", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_dfa_model", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes"]
    },
    "ga:visitors": {
        "type": "METRIC",
        "excludedGroups": []
    },
    "ga:newUsers": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_absolute_unique_visitors", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "session_quality_report", "per_events_with_local_currency", "gdn_targeting", "per_wmx_url", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_audiences_overview", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_dfa_floodlight_model", "smart_goals", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_dfa_model", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_exception", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:newVisits": {
        "type": "METRIC",
        "excludedGroups": []
    },
    "ga:percentNewSessions": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_absolute_unique_visitors", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "session_quality_report", "per_events_with_local_currency", "gdn_targeting", "per_wmx_url", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_audiences_overview", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_dfa_floodlight_model", "smart_goals", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_dfa_model", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_exception", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:percentNewVisits": {
        "type": "METRIC",
        "excludedGroups": []
    },
    "ga:1dayUsers": {
        "type": "METRIC",
        "excludedGroups": ["per_active_visitors_date_active_visitors_1", "per_active_visitors_day_active_visitors_1", "per_active_visitors_nthday_active_visitors_1"]
    },
    "ga:7dayUsers": {
        "type": "METRIC",
        "excludedGroups": ["per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_7", "per_active_visitors_nthday_active_visitors_7"]
    },
    "ga:14dayUsers": {
        "type": "METRIC",
        "excludedGroups": ["per_active_visitors_day_active_visitors_14", "per_active_visitors_date_active_visitors_14", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:30dayUsers": {
        "type": "METRIC",
        "excludedGroups": ["per_active_visitors_nthday_active_visitors_30", "per_active_visitors_day_active_visitors_30", "per_active_visitors_date_active_visitors_30"]
    },
    "ga:sessionDurationBucket": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_events_with_local_currency", "per_content_with_local_currency", "per_value_site_search", "per_product_with_local_currency", "per_content_with_gwo_id_and_outcomes"]
    },
    "ga:visitLength": {
        "type": "DIMENSION",
        "excludedGroups": []
    },
    "ga:sessions": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "cohorts_overview_nth_week", "per_absolute_unique_visitors", "individual_user_report", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "session_quality_report", "per_events_with_local_currency", "gdn_targeting", "all_metrics_for_cohorts_overview", "per_wmx_url", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "per_goal_funnel_request", "all_metrics_for_audiences_overview", "per_social_plus_site", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_dfa_floodlight_model", "smart_goals", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "cohorts_overview_nth_day", "per_goal_request_uri", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_dfa_model", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_exception", "channel_grouping_rule_key", "per_active_visitors_date_active_visitors_30", "cohorts_overview_nth_month", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:visits": {
        "type": "METRIC",
        "excludedGroups": []
    },
    "ga:bounces": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_absolute_unique_visitors", "individual_user_report", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "session_quality_report", "per_events_with_local_currency", "gdn_targeting", "per_wmx_url", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_audiences_overview", "per_social_plus_site", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_dfa_floodlight_model", "smart_goals", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_dfa_model", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:entranceBounceRate": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_absolute_unique_visitors", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "per_social_plus_site", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "smart_goals", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:bounceRate": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_absolute_unique_visitors", "individual_user_report", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "session_quality_report", "per_events_with_local_currency", "gdn_targeting", "per_wmx_url", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_audiences_overview", "per_social_plus_site", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_dfa_floodlight_model", "smart_goals", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_dfa_model", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:visitBounceRate": {
        "type": "METRIC",
        "excludedGroups": []
    },
    "ga:sessionDuration": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "cohorts_overview_nth_week", "per_absolute_unique_visitors", "individual_user_report", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "session_quality_report", "per_events_with_local_currency", "gdn_targeting", "all_metrics_for_cohorts_overview", "per_wmx_url", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_audiences_overview", "per_social_plus_site", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_dfa_floodlight_model", "smart_goals", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "cohorts_overview_nth_day", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_dfa_model", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_exception", "per_active_visitors_date_active_visitors_30", "cohorts_overview_nth_month", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:timeOnSite": {
        "type": "METRIC",
        "excludedGroups": []
    },
    "ga:avgSessionDuration": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "cohorts_overview_nth_week", "per_absolute_unique_visitors", "individual_user_report", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "session_quality_report", "per_events_with_local_currency", "gdn_targeting", "all_metrics_for_cohorts_overview", "per_wmx_url", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_audiences_overview", "per_social_plus_site", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_dfa_floodlight_model", "smart_goals", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "cohorts_overview_nth_day", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_dfa_model", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_exception", "per_active_visitors_date_active_visitors_30", "cohorts_overview_nth_month", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:avgTimeOnSite": {
        "type": "METRIC",
        "excludedGroups": []
    },
    "ga:referralPath": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_cost_data_import", "per_campaign_id_dimension_widening", "per_campaign_segmented_with_local_currency", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "per_value_site_search", "phone_analytics", "smart_goals", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_query_with_cost_metrics"]
    },
    "ga:fullReferrer": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_campaign_segmented_with_local_currency", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "per_value_site_search", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics"]
    },
    "ga:campaign": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_cost_data_import", "per_campaign_id_dimension_widening", "per_campaign_segmented_with_local_currency", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "per_value_site_search", "phone_analytics", "per_campaign_shasta_with_local_currency", "per_product_with_local_currency", "smart_goals", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_query_with_cost_metrics", "enhanced_campaign"]
    },
    "ga:source": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_cost_data_import", "per_campaign_id_dimension_widening", "per_wmx_site", "per_campaign_segmented_with_local_currency", "per_wmx_query", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "session_quality_report", "per_events_with_local_currency", "gdn_targeting", "per_wmx_url", "per_value_site_search", "phone_analytics", "per_campaign_shasta_with_local_currency", "per_product_with_local_currency", "smart_goals", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_query_with_cost_metrics", "enhanced_campaign"]
    },
    "ga:medium": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_cost_data_import", "per_campaign_id_dimension_widening", "per_wmx_site", "per_campaign_segmented_with_local_currency", "per_wmx_query", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "session_quality_report", "per_events_with_local_currency", "gdn_targeting", "per_wmx_url", "per_value_site_search", "phone_analytics", "per_campaign_shasta_with_local_currency", "per_product_with_local_currency", "smart_goals", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_query_with_cost_metrics", "enhanced_campaign"]
    },
    "ga:sourceMedium": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_wmx_site", "per_campaign_segmented_with_local_currency", "per_wmx_query", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "session_quality_report", "per_events_with_local_currency", "gdn_targeting", "per_wmx_url", "per_value_site_search", "phone_analytics", "per_campaign_shasta_with_local_currency", "per_product_with_local_currency", "smart_goals", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_query_with_cost_metrics", "enhanced_campaign"]
    },
    "ga:keyword": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_cost_data_import", "per_campaign_id_dimension_widening", "per_campaign_segmented_with_local_currency", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "per_value_site_search", "phone_analytics", "per_campaign_shasta_with_local_currency", "per_product_with_local_currency", "smart_goals", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_query_with_cost_metrics"]
    },
    "ga:adContent": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_cost_data_import", "per_campaign_id_dimension_widening", "per_campaign_segmented_with_local_currency", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "phone_analytics", "per_campaign_shasta_with_local_currency", "per_product_with_local_currency", "smart_goals", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_query_with_cost_metrics"]
    },
    "ga:socialNetwork": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_social", "per_campaign_segmented_with_local_currency", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "per_value_site_search", "phone_analytics", "per_social_plus_site", "per_campaign_shasta_with_local_currency", "per_product_with_local_currency", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_query_with_cost_metrics"]
    },
    "ga:hasSocialSourceReferral": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_events_with_local_currency", "per_social_plus_site", "per_product_with_local_currency"]
    },
    "ga:organicSearches": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:adGroup": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_cost_data_import", "per_campaign_id_dimension_widening", "per_campaign_segmented_with_local_currency", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "per_value_site_search", "phone_analytics", "per_campaign_shasta_with_local_currency", "smart_goals", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_query_with_cost_metrics", "enhanced_campaign"]
    },
    "ga:adSlot": {
        "type": "DIMENSION",
        "excludedGroups": ["per_cost_data_import", "per_campaign_segmented_with_local_currency", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics"]
    },
    "ga:adSlotPosition": {
        "type": "DIMENSION",
        "excludedGroups": ["per_cost_data_import", "per_campaign_segmented_with_local_currency", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics"]
    },
    "ga:adDistributionNetwork": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_events_with_local_currency", "gdn_targeting", "per_content_with_local_currency", "per_value_site_search", "per_campaign_shasta_with_local_currency", "smart_goals", "per_sitelink_extension", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes"]
    },
    "ga:adMatchType": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_events_with_local_currency", "per_content_with_local_currency", "per_value_site_search", "per_query_with_cost_metrics", "per_content_with_gwo_id_and_outcomes"]
    },
    "ga:adKeywordMatchType": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_events_with_local_currency", "gdn_targeting", "per_content_with_local_currency", "per_value_site_search", "per_campaign_shasta_with_local_currency", "smart_goals", "per_query_with_cost_metrics", "per_content_with_gwo_id_and_outcomes"]
    },
    "ga:adMatchedQuery": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_wmx_site", "per_wmx_query", "per_events_with_local_currency", "per_value_site_search", "per_query_with_cost_metrics"]
    },
    "ga:adPlacementDomain": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_campaign_segmented_with_local_currency", "per_content_with_local_currency", "per_value_site_search", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_content_with_gwo_id_and_outcomes"]
    },
    "ga:adPlacementUrl": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_campaign_segmented_with_local_currency", "per_content_with_local_currency", "per_value_site_search", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_content_with_gwo_id_and_outcomes"]
    },
    "ga:adFormat": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_events_with_local_currency", "per_content_with_local_currency", "per_value_site_search", "per_content_with_gwo_id_and_outcomes"]
    },
    "ga:adTargetingType": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_events_with_local_currency", "per_content_with_local_currency", "per_value_site_search", "per_content_with_gwo_id_and_outcomes"]
    },
    "ga:adTargetingOption": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_campaign_segmented_with_local_currency", "per_content_with_local_currency", "per_value_site_search", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_content_with_gwo_id_and_outcomes"]
    },
    "ga:adDisplayUrl": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_cost_data_import", "per_events_with_local_currency", "per_content_with_local_currency", "per_value_site_search", "per_sitelink_extension", "per_query_with_cost_metrics", "per_content_with_gwo_id_and_outcomes"]
    },
    "ga:adDestinationUrl": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_cost_data_import", "per_campaign_segmented_with_local_currency", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_content_with_local_currency", "per_value_site_search", "per_campaign_shasta_with_local_currency", "smart_goals", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_query_with_cost_metrics", "per_content_with_gwo_id_and_outcomes"]
    },
    "ga:adwordsCustomerID": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_events_with_local_currency", "gdn_targeting", "per_content_with_local_currency", "per_value_site_search", "per_campaign_shasta_with_local_currency", "smart_goals", "per_sitelink_extension", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes"]
    },
    "ga:adwordsCampaignID": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_cost_data_import", "per_events_with_local_currency", "gdn_targeting", "per_content_with_local_currency", "per_value_site_search", "phone_analytics", "per_campaign_shasta_with_local_currency", "smart_goals", "per_sitelink_extension", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes"]
    },
    "ga:adwordsAdGroupID": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_campaign_segmented_with_local_currency", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "per_content_with_local_currency", "per_value_site_search", "per_campaign_shasta_with_local_currency", "smart_goals", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes"]
    },
    "ga:adwordsCreativeID": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_events_with_local_currency", "gdn_targeting", "per_content_with_local_currency", "per_value_site_search", "per_campaign_shasta_with_local_currency", "smart_goals", "per_sitelink_extension", "per_query_with_cost_metrics", "per_content_with_gwo_id_and_outcomes"]
    },
    "ga:adwordsCriteriaID": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_cost_data_import", "per_events_with_local_currency", "gdn_targeting", "per_content_with_local_currency", "per_value_site_search", "per_campaign_shasta_with_local_currency", "smart_goals", "per_query_with_cost_metrics", "per_content_with_gwo_id_and_outcomes"]
    },
    "ga:impressions": {
        "type": "METRIC",
        "excludedGroups": ["per_cost_data_import", "per_active_visitors_day_active_visitors_14", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_query_with_cost_metrics", "enhanced_campaign", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:adClicks": {
        "type": "METRIC",
        "excludedGroups": ["per_cost_data_import", "per_active_visitors_day_active_visitors_14", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_query_with_cost_metrics", "enhanced_campaign", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:adCost": {
        "type": "METRIC",
        "excludedGroups": ["per_cost_data_import", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_campaign_shasta_with_local_currency", "per_web_property_query_RESTRICTED", "per_sitelink_extension", "per_query_with_cost_metrics", "enhanced_campaign"]
    },
    "ga:CPM": {
        "type": "METRIC",
        "excludedGroups": ["per_cost_data_import", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_campaign_shasta_with_local_currency", "per_web_property_query_RESTRICTED", "per_sitelink_extension", "per_query_with_cost_metrics", "enhanced_campaign"]
    },
    "ga:CPC": {
        "type": "METRIC",
        "excludedGroups": ["per_cost_data_import", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_campaign_shasta_with_local_currency", "per_web_property_query_RESTRICTED", "per_sitelink_extension", "per_query_with_cost_metrics", "enhanced_campaign"]
    },
    "ga:CTR": {
        "type": "METRIC",
        "excludedGroups": ["per_cost_data_import", "per_active_visitors_day_active_visitors_14", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_query_with_cost_metrics", "enhanced_campaign", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:costPerTransaction": {
        "type": "METRIC",
        "excludedGroups": ["Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_campaign_shasta_with_local_currency", "per_web_property_query_RESTRICTED", "per_sitelink_extension", "per_query_with_cost_metrics", "enhanced_campaign"]
    },
    "ga:costPerGoalConversion": {
        "type": "METRIC",
        "excludedGroups": ["Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_campaign_shasta_with_local_currency", "per_web_property_query_RESTRICTED", "per_sitelink_extension", "per_query_with_cost_metrics", "enhanced_campaign"]
    },
    "ga:costPerConversion": {
        "type": "METRIC",
        "excludedGroups": ["Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_campaign_shasta_with_local_currency", "per_web_property_query_RESTRICTED", "per_sitelink_extension", "per_query_with_cost_metrics", "enhanced_campaign"]
    },
    "ga:RPC": {
        "type": "METRIC",
        "excludedGroups": ["per_active_visitors_day_active_visitors_14", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_query_with_cost_metrics", "enhanced_campaign", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:ROI": {
        "type": "METRIC",
        "excludedGroups": ["Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_campaign_shasta_with_local_currency", "per_web_property_query_RESTRICTED", "per_sitelink_extension", "per_query_with_cost_metrics", "enhanced_campaign"]
    },
    "ga:margin": {
        "type": "METRIC",
        "excludedGroups": ["Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_campaign_shasta_with_local_currency", "per_web_property_query_RESTRICTED", "per_sitelink_extension", "per_query_with_cost_metrics", "enhanced_campaign"]
    },
    "ga:ROAS": {
        "type": "METRIC",
        "excludedGroups": ["Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_campaign_shasta_with_local_currency", "per_web_property_query_RESTRICTED", "per_sitelink_extension", "per_query_with_cost_metrics", "enhanced_campaign"]
    },
    "ga:adQueryWordCount": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_events_with_local_currency", "per_value_site_search", "per_query_with_cost_metrics"]
    },
    "ga:goalCompletionLocation": {
        "type": "DIMENSION",
        "excludedGroups": ["per_goal_request_uri"]
    },
    "ga:goalPreviousStep1": {
        "type": "DIMENSION",
        "excludedGroups": ["per_goal_request_uri"]
    },
    "ga:goalPreviousStep2": {
        "type": "DIMENSION",
        "excludedGroups": ["per_goal_request_uri"]
    },
    "ga:goalPreviousStep3": {
        "type": "DIMENSION",
        "excludedGroups": ["per_goal_request_uri"]
    },
    "ga:goalXXStarts": {
        "type": "METRIC",
        "excludedGroups": ["audience_size", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "per_wmx_url", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_audiences_overview", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_dfa_floodlight_model", "smart_goals", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_goal_request_uri", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_dfa_model", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:goalStartsAll": {
        "type": "METRIC",
        "excludedGroups": ["audience_size", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "per_wmx_url", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_audiences_overview", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_dfa_floodlight_model", "smart_goals", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_goal_request_uri", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_dfa_model", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:goalXXCompletions": {
        "type": "METRIC",
        "excludedGroups": ["audience_size", "individual_user_report", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "per_wmx_url", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_audiences_overview", "per_social_plus_site", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_dfa_floodlight_model", "smart_goals", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_goal_request_uri", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_dfa_model", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:goalCompletionsAll": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "cohorts_overview_nth_week", "per_absolute_unique_visitors", "individual_user_report", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "all_metrics_for_cohorts_overview", "per_wmx_url", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "per_goal_funnel_request", "all_metrics_for_audiences_overview", "per_social_plus_site", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_dfa_floodlight_model", "smart_goals", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "cohorts_overview_nth_day", "per_goal_request_uri", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_dfa_model", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "cohorts_overview_nth_month", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:goalXXValue": {
        "type": "METRIC",
        "excludedGroups": ["audience_size", "individual_user_report", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "per_wmx_url", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_audiences_overview", "per_social_plus_site", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_dfa_floodlight_model", "smart_goals", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_goal_request_uri", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_dfa_model", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:goalValueAll": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "individual_user_report", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "per_wmx_url", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_audiences_overview", "per_social_plus_site", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_dfa_floodlight_model", "smart_goals", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_goal_request_uri", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_dfa_model", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:goalValuePerSession": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "individual_user_report", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "per_wmx_url", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_audiences_overview", "per_social_plus_site", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_dfa_floodlight_model", "smart_goals", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_goal_request_uri", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_dfa_model", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:goalValuePerVisit": {
        "type": "METRIC",
        "excludedGroups": []
    },
    "ga:goalXXConversionRate": {
        "type": "METRIC",
        "excludedGroups": ["audience_size", "individual_user_report", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "per_wmx_url", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_audiences_overview", "per_social_plus_site", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_dfa_floodlight_model", "smart_goals", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_goal_request_uri", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_dfa_model", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:goalConversionRateAll": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "cohorts_overview_nth_week", "per_absolute_unique_visitors", "individual_user_report", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "all_metrics_for_cohorts_overview", "per_wmx_url", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "per_goal_funnel_request", "all_metrics_for_audiences_overview", "per_social_plus_site", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_dfa_floodlight_model", "smart_goals", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "cohorts_overview_nth_day", "per_goal_request_uri", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_dfa_model", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "cohorts_overview_nth_month", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:goalXXAbandons": {
        "type": "METRIC",
        "excludedGroups": ["audience_size", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "per_wmx_url", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_audiences_overview", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_dfa_floodlight_model", "smart_goals", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_goal_request_uri", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_dfa_model", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:goalAbandonsAll": {
        "type": "METRIC",
        "excludedGroups": ["audience_size", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "per_wmx_url", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_audiences_overview", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_dfa_floodlight_model", "smart_goals", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_goal_request_uri", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_dfa_model", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:goalXXAbandonRate": {
        "type": "METRIC",
        "excludedGroups": ["audience_size", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "per_wmx_url", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_audiences_overview", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_dfa_floodlight_model", "smart_goals", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_goal_request_uri", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_dfa_model", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:goalAbandonRateAll": {
        "type": "METRIC",
        "excludedGroups": ["audience_size", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "per_wmx_url", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_audiences_overview", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_dfa_floodlight_model", "smart_goals", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_goal_request_uri", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_dfa_model", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:browser": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_events_with_local_currency", "per_content_with_local_currency", "per_value_site_search", "per_dimension_widening", "all_metrics_for_audiences_overview", "per_dfa_floodlight_model", "per_product_with_local_currency", "smart_goals", "per_dfa_model", "per_campaign_dart_search", "per_content_with_gwo_id_and_outcomes", "per_exception"]
    },
    "ga:browserVersion": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_events_with_local_currency", "per_content_with_local_currency", "per_value_site_search", "per_dimension_widening", "all_metrics_for_audiences_overview", "per_dfa_floodlight_model", "per_product_with_local_currency", "smart_goals", "per_dfa_model", "per_campaign_dart_search", "per_content_with_gwo_id_and_outcomes", "per_exception"]
    },
    "ga:operatingSystem": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_events_with_local_currency", "per_content_with_local_currency", "per_value_site_search", "per_dimension_widening", "all_metrics_for_audiences_overview", "per_dfa_floodlight_model", "per_product_with_local_currency", "smart_goals", "per_dfa_model", "per_campaign_dart_search", "per_content_with_gwo_id_and_outcomes", "per_exception"]
    },
    "ga:operatingSystemVersion": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_events_with_local_currency", "per_content_with_local_currency", "per_value_site_search", "per_dimension_widening", "all_metrics_for_audiences_overview", "per_dfa_floodlight_model", "per_product_with_local_currency", "smart_goals", "per_dfa_model", "per_campaign_dart_search", "per_content_with_gwo_id_and_outcomes", "per_exception"]
    },
    "ga:isMobile": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "per_content_with_local_currency", "per_value_site_search", "phone_analytics", "per_dimension_widening", "per_campaign_shasta_with_local_currency", "per_dfa_floodlight_model", "per_product_with_local_currency", "smart_goals", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_dfa_model", "per_query_with_cost_metrics", "per_content_with_gwo_id_and_outcomes", "per_exception"]
    },
    "ga:isTablet": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "per_content_with_local_currency", "per_value_site_search", "phone_analytics", "per_dimension_widening", "per_campaign_shasta_with_local_currency", "per_dfa_floodlight_model", "per_product_with_local_currency", "smart_goals", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_dfa_model", "per_query_with_cost_metrics", "per_content_with_gwo_id_and_outcomes", "per_exception"]
    },
    "ga:mobileDeviceBranding": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_events_with_local_currency", "per_content_with_local_currency", "per_value_site_search", "per_dimension_widening", "per_content_with_gwo_id_and_outcomes", "per_exception"]
    },
    "ga:mobileDeviceModel": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_events_with_local_currency", "per_content_with_local_currency", "per_value_site_search", "per_dimension_widening", "per_content_with_gwo_id_and_outcomes", "per_exception"]
    },
    "ga:mobileInputSelector": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_events_with_local_currency", "per_content_with_local_currency", "per_value_site_search", "per_dimension_widening", "per_content_with_gwo_id_and_outcomes", "per_exception"]
    },
    "ga:mobileDeviceInfo": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_events_with_local_currency", "per_content_with_local_currency", "per_value_site_search", "per_content_with_gwo_id_and_outcomes", "per_exception"]
    },
    "ga:mobileDeviceMarketingName": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_events_with_local_currency", "per_content_with_local_currency", "per_value_site_search", "per_dimension_widening", "per_content_with_gwo_id_and_outcomes", "per_exception"]
    },
    "ga:deviceCategory": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_wmx_site", "individual_user_report", "per_wmx_query", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "per_wmx_url", "per_content_with_local_currency", "per_value_site_search", "phone_analytics", "per_campaign_shasta_with_local_currency", "per_dfa_floodlight_model", "per_product_with_local_currency", "smart_goals", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_dfa_model", "per_query_with_cost_metrics", "per_content_with_gwo_id_and_outcomes", "per_exception"]
    },
    "ga:continent": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "individual_user_report", "per_events_with_local_currency", "per_content_with_local_currency", "per_value_site_search", "phone_analytics", "all_metrics_for_audiences_overview", "per_dfa_floodlight_model", "per_product_with_local_currency", "smart_goals", "per_dfa_model", "per_content_with_gwo_id_and_outcomes"]
    },
    "ga:subContinent": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "individual_user_report", "per_events_with_local_currency", "per_content_with_local_currency", "per_value_site_search", "phone_analytics", "all_metrics_for_audiences_overview", "per_dfa_floodlight_model", "per_product_with_local_currency", "smart_goals", "per_dfa_model", "per_content_with_gwo_id_and_outcomes"]
    },
    "ga:country": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_wmx_site", "individual_user_report", "per_wmx_query", "per_events_with_local_currency", "per_wmx_url", "per_content_with_local_currency", "per_value_site_search", "phone_analytics", "all_metrics_for_audiences_overview", "per_dfa_floodlight_model", "per_product_with_local_currency", "smart_goals", "per_dfa_model", "per_content_with_gwo_id_and_outcomes"]
    },
    "ga:region": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "individual_user_report", "per_events_with_local_currency", "per_content_with_local_currency", "per_value_site_search", "phone_analytics", "all_metrics_for_audiences_overview", "per_dfa_floodlight_model", "per_product_with_local_currency", "smart_goals", "per_dfa_model", "per_content_with_gwo_id_and_outcomes"]
    },
    "ga:metro": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "individual_user_report", "per_events_with_local_currency", "per_content_with_local_currency", "per_value_site_search", "phone_analytics", "all_metrics_for_audiences_overview", "per_dfa_floodlight_model", "per_product_with_local_currency", "smart_goals", "per_dfa_model", "per_content_with_gwo_id_and_outcomes"]
    },
    "ga:city": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "individual_user_report", "per_events_with_local_currency", "per_content_with_local_currency", "per_value_site_search", "phone_analytics", "all_metrics_for_audiences_overview", "per_dfa_floodlight_model", "per_product_with_local_currency", "smart_goals", "per_dfa_model", "per_content_with_gwo_id_and_outcomes"]
    },
    "ga:latitude": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "individual_user_report", "per_events_with_local_currency", "per_content_with_local_currency", "per_value_site_search", "phone_analytics", "all_metrics_for_audiences_overview", "per_dfa_floodlight_model", "per_product_with_local_currency", "smart_goals", "per_dfa_model", "per_content_with_gwo_id_and_outcomes"]
    },
    "ga:longitude": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "individual_user_report", "per_events_with_local_currency", "per_content_with_local_currency", "per_value_site_search", "phone_analytics", "all_metrics_for_audiences_overview", "per_dfa_floodlight_model", "per_product_with_local_currency", "smart_goals", "per_dfa_model", "per_content_with_gwo_id_and_outcomes"]
    },
    "ga:networkDomain": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "individual_user_report", "per_events_with_local_currency", "per_content_with_local_currency", "per_value_site_search", "phone_analytics", "per_dimension_widening", "all_metrics_for_audiences_overview", "per_dfa_floodlight_model", "per_product_with_local_currency", "smart_goals", "per_dfa_model", "per_content_with_gwo_id_and_outcomes"]
    },
    "ga:networkLocation": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "individual_user_report", "per_events_with_local_currency", "per_content_with_local_currency", "per_value_site_search", "phone_analytics", "per_dimension_widening", "all_metrics_for_audiences_overview", "per_dfa_floodlight_model", "per_product_with_local_currency", "smart_goals", "per_dfa_model", "per_content_with_gwo_id_and_outcomes"]
    },
    "ga:flashVersion": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_events_with_local_currency", "per_content_with_local_currency", "per_value_site_search", "all_metrics_for_audiences_overview", "per_dfa_floodlight_model", "per_product_with_local_currency", "smart_goals", "per_dfa_model", "per_campaign_dart_search", "per_content_with_gwo_id_and_outcomes", "per_exception"]
    },
    "ga:javaEnabled": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_events_with_local_currency", "per_content_with_local_currency", "per_value_site_search", "per_dimension_widening", "all_metrics_for_audiences_overview", "per_dfa_floodlight_model", "per_product_with_local_currency", "smart_goals", "per_dfa_model", "per_campaign_dart_search", "per_content_with_gwo_id_and_outcomes", "per_exception"]
    },
    "ga:language": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_events_with_local_currency", "per_content_with_local_currency", "per_value_site_search", "per_dimension_widening", "all_metrics_for_audiences_overview", "per_dfa_floodlight_model", "per_product_with_local_currency", "smart_goals", "per_dfa_model", "per_campaign_dart_search", "per_content_with_gwo_id_and_outcomes", "per_exception"]
    },
    "ga:screenColors": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_events_with_local_currency", "per_content_with_local_currency", "per_value_site_search", "per_dimension_widening", "all_metrics_for_audiences_overview", "per_dfa_floodlight_model", "per_product_with_local_currency", "smart_goals", "per_dfa_model", "per_campaign_dart_search", "per_content_with_gwo_id_and_outcomes", "per_exception"]
    },
    "ga:sourcePropertyDisplayName": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_events_with_local_currency", "per_content_with_local_currency", "per_value_site_search", "per_content_with_gwo_id_and_outcomes"]
    },
    "ga:sourcePropertyTrackingId": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_events_with_local_currency", "per_content_with_local_currency", "per_value_site_search", "per_content_with_gwo_id_and_outcomes"]
    },
    "ga:screenResolution": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_events_with_local_currency", "per_content_with_local_currency", "per_value_site_search", "per_dimension_widening", "all_metrics_for_audiences_overview", "per_dfa_floodlight_model", "per_product_with_local_currency", "smart_goals", "per_dfa_model", "per_campaign_dart_search", "per_content_with_gwo_id_and_outcomes", "per_exception"]
    },
    "ga:socialActivityEndorsingUrl": {
        "type": "DIMENSION",
        "excludedGroups": ["per_social"]
    },
    "ga:socialActivityDisplayName": {
        "type": "DIMENSION",
        "excludedGroups": ["per_social"]
    },
    "ga:socialActivityPost": {
        "type": "DIMENSION",
        "excludedGroups": ["per_social"]
    },
    "ga:socialActivityTimestamp": {
        "type": "DIMENSION",
        "excludedGroups": ["per_social"]
    },
    "ga:socialActivityUserHandle": {
        "type": "DIMENSION",
        "excludedGroups": ["per_social"]
    },
    "ga:socialActivityUserPhotoUrl": {
        "type": "DIMENSION",
        "excludedGroups": ["per_social"]
    },
    "ga:socialActivityUserProfileUrl": {
        "type": "DIMENSION",
        "excludedGroups": ["per_social"]
    },
    "ga:socialActivityContentUrl": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_social", "per_events_with_local_currency", "per_social_plus_site", "per_product_with_local_currency"]
    },
    "ga:socialActivityTagsSummary": {
        "type": "DIMENSION",
        "excludedGroups": ["per_social"]
    },
    "ga:socialActivityAction": {
        "type": "DIMENSION",
        "excludedGroups": ["per_social"]
    },
    "ga:socialActivityNetworkAction": {
        "type": "DIMENSION",
        "excludedGroups": ["per_social"]
    },
    "ga:socialActivities": {
        "type": "METRIC",
        "excludedGroups": ["per_social", "per_active_visitors_day_active_visitors_14", "per_active_visitors_date_active_visitors_14", "per_active_visitors_date_active_visitors_1", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "per_social_plus_site", "all_metrics_for_active_visitors_cubes", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_active_visitors_nthday_active_visitors_1", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:hostname": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_wmx_query", "per_events_with_local_currency", "per_wmx_url", "per_content_with_local_currency", "per_value_site_search", "per_dimension_widening", "per_product_with_local_currency", "per_content_with_gwo_id_and_outcomes"]
    },
    "ga:pagePath": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_content_id_dimension_widening", "per_events_with_local_currency", "per_content_with_local_currency", "per_value_site_search", "per_dimension_widening", "per_product_with_local_currency", "per_content_with_gwo_id_and_outcomes", "per_exception"]
    },
    "ga:pagePathLevel1": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_events_with_local_currency", "per_content_with_local_currency", "per_content_with_gwo_id_and_outcomes"]
    },
    "ga:pagePathLevel2": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_events_with_local_currency", "per_content_with_local_currency", "per_content_with_gwo_id_and_outcomes"]
    },
    "ga:pagePathLevel3": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_events_with_local_currency", "per_content_with_local_currency", "per_content_with_gwo_id_and_outcomes"]
    },
    "ga:pagePathLevel4": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_events_with_local_currency", "per_content_with_local_currency", "per_content_with_gwo_id_and_outcomes"]
    },
    "ga:pageTitle": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_events_with_local_currency", "per_content_with_local_currency", "per_dimension_widening", "per_product_with_local_currency", "per_content_with_gwo_id_and_outcomes", "per_exception"]
    },
    "ga:landingPagePath": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_wmx_query", "per_events_with_local_currency", "per_wmx_url", "per_content_with_local_currency", "per_value_site_search", "phone_analytics", "per_product_with_local_currency", "per_content_with_gwo_id_and_outcomes"]
    },
    "ga:secondPagePath": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_events_with_local_currency", "per_content_with_local_currency", "per_value_site_search", "per_content_with_gwo_id_and_outcomes"]
    },
    "ga:exitPagePath": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_events_with_local_currency", "per_content_with_local_currency", "per_value_site_search", "phone_analytics", "per_content_with_gwo_id_and_outcomes"]
    },
    "ga:previousPagePath": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_content_with_local_currency", "per_value_site_search", "per_content_with_gwo_id_and_outcomes"]
    },
    "ga:nextPagePath": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_content_with_local_currency", "per_value_site_search", "per_content_with_gwo_id_and_outcomes"]
    },
    "ga:pageDepth": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_events_with_local_currency", "per_content_with_local_currency", "per_value_site_search", "per_content_with_gwo_id_and_outcomes"]
    },
    "ga:pageValue": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "per_social_plus_site", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:entrances": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_absolute_unique_visitors", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "per_social_plus_site", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "smart_goals", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:entranceRate": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_absolute_unique_visitors", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "per_social_plus_site", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "smart_goals", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:pageviews": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "cohorts_overview_nth_week", "per_absolute_unique_visitors", "individual_user_report", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "session_quality_report", "per_events_with_local_currency", "gdn_targeting", "all_metrics_for_cohorts_overview", "per_wmx_url", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_audiences_overview", "per_social_plus_site", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_dfa_floodlight_model", "smart_goals", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "cohorts_overview_nth_day", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_dfa_model", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_exception", "per_active_visitors_date_active_visitors_30", "cohorts_overview_nth_month", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:pageviewsPerSession": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "cohorts_overview_nth_week", "per_absolute_unique_visitors", "individual_user_report", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "session_quality_report", "per_events_with_local_currency", "gdn_targeting", "all_metrics_for_cohorts_overview", "per_wmx_url", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_audiences_overview", "per_social_plus_site", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_dfa_floodlight_model", "smart_goals", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "cohorts_overview_nth_day", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_dfa_model", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_exception", "per_active_visitors_date_active_visitors_30", "cohorts_overview_nth_month", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:pageviewsPerVisit": {
        "type": "METRIC",
        "excludedGroups": []
    },
    "ga:contentGroupUniqueViewsXX": {
        "type": "METRIC",
        "excludedGroups": []
    },
    "ga:uniquePageviews": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "per_social_plus_site", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "smart_goals", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_exception", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:timeOnPage": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_absolute_unique_visitors", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "smart_goals", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_exception", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:avgTimeOnPage": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_absolute_unique_visitors", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "smart_goals", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_exception", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:exits": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_absolute_unique_visitors", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "per_social_plus_site", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "smart_goals", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_exception", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:exitRate": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_absolute_unique_visitors", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "per_social_plus_site", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_exception", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:searchUsed": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_value_site_search"]
    },
    "ga:searchKeyword": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_events_with_local_currency", "per_value_site_search", "per_product_with_local_currency"]
    },
    "ga:searchKeywordRefinement": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_value_site_search"]
    },
    "ga:searchCategory": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_value_site_search"]
    },
    "ga:searchStartPage": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_value_site_search"]
    },
    "ga:searchDestinationPage": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_content_with_local_currency", "per_value_site_search", "per_content_with_gwo_id_and_outcomes"]
    },
    "ga:searchAfterDestinationPage": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_content_with_local_currency", "per_value_site_search", "per_content_with_gwo_id_and_outcomes"]
    },
    "ga:searchResultViews": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "smart_goals", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:searchUniques": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "smart_goals", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:avgSearchResultViews": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "smart_goals", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:searchSessions": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "smart_goals", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:searchVisits": {
        "type": "METRIC",
        "excludedGroups": []
    },
    "ga:percentSessionsWithSearch": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "smart_goals", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:percentVisitsWithSearch": {
        "type": "METRIC",
        "excludedGroups": []
    },
    "ga:searchDepth": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "smart_goals", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:avgSearchDepth": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "smart_goals", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:searchRefinements": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "smart_goals", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:percentSearchRefinements": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "smart_goals", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:searchDuration": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "smart_goals", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:avgSearchDuration": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "smart_goals", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:searchExits": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "smart_goals", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:searchExitRate": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "smart_goals", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:searchGoalXXConversionRate": {
        "type": "METRIC",
        "excludedGroups": ["audience_size", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "smart_goals", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:searchGoalConversionRateAll": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "smart_goals", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:goalValueAllPerSearch": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "smart_goals", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:pageLoadTime": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_active_visitors_day_active_visitors_14", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:pageLoadSample": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_active_visitors_day_active_visitors_14", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:avgPageLoadTime": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_active_visitors_day_active_visitors_14", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:domainLookupTime": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_active_visitors_day_active_visitors_14", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:avgDomainLookupTime": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_active_visitors_day_active_visitors_14", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:pageDownloadTime": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_active_visitors_day_active_visitors_14", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:avgPageDownloadTime": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_active_visitors_day_active_visitors_14", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:redirectionTime": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_active_visitors_day_active_visitors_14", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:avgRedirectionTime": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_active_visitors_day_active_visitors_14", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:serverConnectionTime": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_active_visitors_day_active_visitors_14", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:avgServerConnectionTime": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_active_visitors_day_active_visitors_14", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:serverResponseTime": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_active_visitors_day_active_visitors_14", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:avgServerResponseTime": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_active_visitors_day_active_visitors_14", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:speedMetricsSample": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_active_visitors_day_active_visitors_14", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:domInteractiveTime": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_active_visitors_day_active_visitors_14", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:avgDomInteractiveTime": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_active_visitors_day_active_visitors_14", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:domContentLoadedTime": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_active_visitors_day_active_visitors_14", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:avgDomContentLoadedTime": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_active_visitors_day_active_visitors_14", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:domLatencyMetricsSample": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_active_visitors_day_active_visitors_14", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:appInstallerId": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_absolute_unique_visitors", "per_campaign_segmented_with_local_currency", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "per_content_with_local_currency", "per_value_site_search", "per_dimension_widening", "per_orphan", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_content_with_gwo_id_and_outcomes", "per_exception"]
    },
    "ga:appVersion": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_absolute_unique_visitors", "per_campaign_segmented_with_local_currency", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "per_content_with_local_currency", "per_value_site_search", "per_dimension_widening", "per_orphan", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_content_with_gwo_id_and_outcomes", "per_exception"]
    },
    "ga:appName": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_absolute_unique_visitors", "per_campaign_segmented_with_local_currency", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "per_content_with_local_currency", "per_value_site_search", "per_dimension_widening", "per_orphan", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_content_with_gwo_id_and_outcomes", "per_exception"]
    },
    "ga:appId": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_absolute_unique_visitors", "per_campaign_segmented_with_local_currency", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "per_content_with_local_currency", "per_value_site_search", "per_dimension_widening", "per_orphan", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_content_with_gwo_id_and_outcomes", "per_exception"]
    },
    "ga:screenName": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_events_with_local_currency", "per_content_with_local_currency", "per_value_site_search", "per_product_with_local_currency", "per_orphan", "per_content_with_gwo_id_and_outcomes", "per_exception"]
    },
    "ga:screenDepth": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_events_with_local_currency", "per_content_with_local_currency", "per_value_site_search", "per_content_with_gwo_id_and_outcomes"]
    },
    "ga:landingScreenName": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_events_with_local_currency", "per_content_with_local_currency", "per_value_site_search", "per_product_with_local_currency", "per_content_with_gwo_id_and_outcomes"]
    },
    "ga:exitScreenName": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_events_with_local_currency", "per_content_with_local_currency", "per_value_site_search", "per_product_with_local_currency", "per_content_with_gwo_id_and_outcomes"]
    },
    "ga:screenviews": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "cohorts_overview_nth_week", "per_absolute_unique_visitors", "individual_user_report", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "all_metrics_for_cohorts_overview", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_audiences_overview", "per_social_plus_site", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "cohorts_overview_nth_day", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_exception", "per_active_visitors_date_active_visitors_30", "cohorts_overview_nth_month", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:appviews": {
        "type": "METRIC",
        "excludedGroups": []
    },
    "ga:uniqueScreenviews": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_active_visitors_day_active_visitors_14", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_exception", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:uniqueAppviews": {
        "type": "METRIC",
        "excludedGroups": []
    },
    "ga:screenviewsPerSession": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "cohorts_overview_nth_week", "per_absolute_unique_visitors", "individual_user_report", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "all_metrics_for_cohorts_overview", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_audiences_overview", "per_social_plus_site", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "cohorts_overview_nth_day", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_exception", "per_active_visitors_date_active_visitors_30", "cohorts_overview_nth_month", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:appviewsPerVisit": {
        "type": "METRIC",
        "excludedGroups": []
    },
    "ga:timeOnScreen": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_absolute_unique_visitors", "per_active_visitors_day_active_visitors_14", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_exception", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:avgScreenviewDuration": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_absolute_unique_visitors", "per_active_visitors_day_active_visitors_14", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_exception", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:eventCategory": {
        "type": "DIMENSION",
        "excludedGroups": ["per_events_with_local_currency", "per_product_with_local_currency"]
    },
    "ga:eventAction": {
        "type": "DIMENSION",
        "excludedGroups": ["per_events_with_local_currency", "per_product_with_local_currency"]
    },
    "ga:eventLabel": {
        "type": "DIMENSION",
        "excludedGroups": ["per_events_with_local_currency", "per_product_with_local_currency"]
    },
    "ga:totalEvents": {
        "type": "METRIC",
        "excludedGroups": ["per_active_visitors_day_active_visitors_14", "per_active_visitors_date_active_visitors_14", "per_events_with_local_currency", "per_active_visitors_date_active_visitors_1", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "per_active_visitors_nthday_active_visitors_1", "per_active_visitors_nthday_active_visitors_7", "per_exception", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:uniqueDimensionCombinations": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:uniqueEvents": {
        "type": "METRIC",
        "excludedGroups": ["per_events_with_local_currency", "per_value_site_search", "per_orphan"]
    },
    "ga:eventValue": {
        "type": "METRIC",
        "excludedGroups": ["per_active_visitors_day_active_visitors_14", "per_active_visitors_date_active_visitors_14", "per_events_with_local_currency", "per_active_visitors_date_active_visitors_1", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_active_visitors_nthday_active_visitors_1", "per_active_visitors_nthday_active_visitors_7", "per_exception", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:avgEventValue": {
        "type": "METRIC",
        "excludedGroups": ["per_active_visitors_day_active_visitors_14", "per_active_visitors_date_active_visitors_14", "per_events_with_local_currency", "per_active_visitors_date_active_visitors_1", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_active_visitors_nthday_active_visitors_1", "per_active_visitors_nthday_active_visitors_7", "per_exception", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:sessionsWithEvent": {
        "type": "METRIC",
        "excludedGroups": ["per_active_visitors_day_active_visitors_14", "per_active_visitors_date_active_visitors_14", "per_events_with_local_currency", "per_active_visitors_date_active_visitors_1", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "per_active_visitors_nthday_active_visitors_1", "per_active_visitors_nthday_active_visitors_7", "per_exception", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:visitsWithEvent": {
        "type": "METRIC",
        "excludedGroups": []
    },
    "ga:eventsPerSessionWithEvent": {
        "type": "METRIC",
        "excludedGroups": ["per_active_visitors_day_active_visitors_14", "per_active_visitors_date_active_visitors_14", "per_events_with_local_currency", "per_active_visitors_date_active_visitors_1", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "per_active_visitors_nthday_active_visitors_1", "per_active_visitors_nthday_active_visitors_7", "per_exception", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:eventsPerVisitWithEvent": {
        "type": "METRIC",
        "excludedGroups": []
    },
    "ga:transactionId": {
        "type": "DIMENSION",
        "excludedGroups": ["local_transaction", "per_value_site_search", "per_ecommerce_refund_import", "per_product_with_local_currency", "gwo_transaction_subcube"]
    },
    "ga:affiliation": {
        "type": "DIMENSION",
        "excludedGroups": ["per_value_site_search"]
    },
    "ga:sessionsToTransaction": {
        "type": "DIMENSION",
        "excludedGroups": ["per_value_site_search"]
    },
    "ga:visitsToTransaction": {
        "type": "DIMENSION",
        "excludedGroups": []
    },
    "ga:daysToTransaction": {
        "type": "DIMENSION",
        "excludedGroups": ["per_value_site_search"]
    },
    "ga:productSku": {
        "type": "DIMENSION",
        "excludedGroups": ["per_ecommerce_dimension_widening", "per_value_site_search", "per_ecommerce_refund_import", "per_product_with_local_currency"]
    },
    "ga:productName": {
        "type": "DIMENSION",
        "excludedGroups": ["per_ecommerce_dimension_widening", "per_value_site_search", "per_product_with_local_currency"]
    },
    "ga:productCategory": {
        "type": "DIMENSION",
        "excludedGroups": ["per_value_site_search"]
    },
    "ga:currencyCode": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_segmented_with_local_currency", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "local_transaction", "per_content_with_local_currency", "per_campaign_shasta_with_local_currency", "per_product_with_local_currency", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_query_with_cost_metrics"]
    },
    "ga:transactions": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "cohorts_overview_nth_week", "per_absolute_unique_visitors", "individual_user_report", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "session_quality_report", "per_events_with_local_currency", "gdn_targeting", "all_metrics_for_cohorts_overview", "per_wmx_url", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "per_goal_funnel_request", "all_metrics_for_audiences_overview", "per_social_plus_site", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_dfa_floodlight_model", "smart_goals", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "cohorts_overview_nth_day", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_dfa_model", "per_campaign_dart_search", "per_query_with_cost_metrics", "gwo_transaction_subcube", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "cohorts_overview_nth_month", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:transactionsPerSession": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "cohorts_overview_nth_week", "per_absolute_unique_visitors", "individual_user_report", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "session_quality_report", "per_events_with_local_currency", "gdn_targeting", "all_metrics_for_cohorts_overview", "per_wmx_url", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "per_goal_funnel_request", "all_metrics_for_audiences_overview", "per_social_plus_site", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_dfa_floodlight_model", "smart_goals", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "cohorts_overview_nth_day", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_dfa_model", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "cohorts_overview_nth_month", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:transactionsPerVisit": {
        "type": "METRIC",
        "excludedGroups": []
    },
    "ga:transactionRevenue": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "cohorts_overview_nth_week", "per_absolute_unique_visitors", "individual_user_report", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "session_quality_report", "per_events_with_local_currency", "gdn_targeting", "all_metrics_for_cohorts_overview", "per_wmx_url", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "per_goal_funnel_request", "per_ecommerce_refund_import", "all_metrics_for_audiences_overview", "per_social_plus_site", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_dfa_floodlight_model", "smart_goals", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "cohorts_overview_nth_day", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_dfa_model", "per_campaign_dart_search", "per_query_with_cost_metrics", "gwo_transaction_subcube", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "cohorts_overview_nth_month", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:revenuePerTransaction": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "cohorts_overview_nth_week", "per_absolute_unique_visitors", "individual_user_report", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "session_quality_report", "per_events_with_local_currency", "gdn_targeting", "all_metrics_for_cohorts_overview", "per_wmx_url", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "per_goal_funnel_request", "all_metrics_for_audiences_overview", "per_social_plus_site", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_dfa_floodlight_model", "smart_goals", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "cohorts_overview_nth_day", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_dfa_model", "per_campaign_dart_search", "per_query_with_cost_metrics", "gwo_transaction_subcube", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "cohorts_overview_nth_month", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:transactionRevenuePerSession": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "cohorts_overview_nth_week", "per_absolute_unique_visitors", "individual_user_report", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "session_quality_report", "per_events_with_local_currency", "gdn_targeting", "all_metrics_for_cohorts_overview", "per_wmx_url", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "per_goal_funnel_request", "all_metrics_for_audiences_overview", "per_social_plus_site", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_dfa_floodlight_model", "smart_goals", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "cohorts_overview_nth_day", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_dfa_model", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "cohorts_overview_nth_month", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:transactionRevenuePerVisit": {
        "type": "METRIC",
        "excludedGroups": []
    },
    "ga:transactionShipping": {
        "type": "METRIC",
        "excludedGroups": ["audience_size", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_campaign_dart_search", "per_query_with_cost_metrics", "gwo_transaction_subcube", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:transactionTax": {
        "type": "METRIC",
        "excludedGroups": ["audience_size", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_campaign_dart_search", "per_query_with_cost_metrics", "gwo_transaction_subcube", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:totalValue": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "individual_user_report", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "per_wmx_url", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_audiences_overview", "per_social_plus_site", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_dfa_floodlight_model", "smart_goals", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_dfa_model", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:itemQuantity": {
        "type": "METRIC",
        "excludedGroups": ["audience_size", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_product_with_local_currency", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_query_with_cost_metrics", "gwo_transaction_subcube", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:uniquePurchases": {
        "type": "METRIC",
        "excludedGroups": ["audience_size", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_product_with_local_currency", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_query_with_cost_metrics", "gwo_transaction_subcube", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:revenuePerItem": {
        "type": "METRIC",
        "excludedGroups": ["audience_size", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_product_with_local_currency", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_query_with_cost_metrics", "gwo_transaction_subcube", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:itemRevenue": {
        "type": "METRIC",
        "excludedGroups": ["audience_size", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_product_with_local_currency", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_query_with_cost_metrics", "gwo_transaction_subcube", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:itemsPerPurchase": {
        "type": "METRIC",
        "excludedGroups": ["audience_size", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_product_with_local_currency", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_query_with_cost_metrics", "gwo_transaction_subcube", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:localTransactionRevenue": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_segmented_with_local_currency", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "local_transaction", "per_content_with_local_currency", "per_campaign_shasta_with_local_currency", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_query_with_cost_metrics"]
    },
    "ga:localTransactionShipping": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_segmented_with_local_currency", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "local_transaction", "per_content_with_local_currency", "per_campaign_shasta_with_local_currency", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_query_with_cost_metrics"]
    },
    "ga:localTransactionTax": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_segmented_with_local_currency", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "local_transaction", "per_content_with_local_currency", "per_campaign_shasta_with_local_currency", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_query_with_cost_metrics"]
    },
    "ga:localItemRevenue": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_segmented_with_local_currency", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "local_transaction", "per_content_with_local_currency", "per_campaign_shasta_with_local_currency", "per_product_with_local_currency", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_query_with_cost_metrics"]
    },
    "ga:socialInteractionNetwork": {
        "type": "DIMENSION",
        "excludedGroups": ["audience_size", "per_events_with_local_currency", "gdn_targeting", "per_content_with_local_currency", "per_value_site_search", "per_content_with_gwo_id_and_outcomes"]
    },
    "ga:socialInteractionAction": {
        "type": "DIMENSION",
        "excludedGroups": ["audience_size", "per_events_with_local_currency", "per_content_with_local_currency", "per_value_site_search", "per_content_with_gwo_id_and_outcomes"]
    },
    "ga:socialInteractionNetworkAction": {
        "type": "DIMENSION",
        "excludedGroups": ["audience_size", "per_events_with_local_currency", "per_content_with_local_currency", "per_value_site_search", "per_content_with_gwo_id_and_outcomes"]
    },
    "ga:socialInteractionTarget": {
        "type": "DIMENSION",
        "excludedGroups": ["audience_size", "per_events_with_local_currency", "per_content_with_local_currency", "per_value_site_search", "per_content_with_gwo_id_and_outcomes"]
    },
    "ga:socialEngagementType": {
        "type": "DIMENSION",
        "excludedGroups": ["audience_size", "per_events_with_local_currency", "per_content_with_local_currency", "per_value_site_search", "per_content_with_gwo_id_and_outcomes"]
    },
    "ga:socialInteractions": {
        "type": "METRIC",
        "excludedGroups": ["audience_size", "per_absolute_unique_visitors", "per_active_visitors_day_active_visitors_14", "per_active_visitors_date_active_visitors_14", "per_events_with_local_currency", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "per_active_visitors_nthday_active_visitors_1", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:uniqueSocialInteractions": {
        "type": "METRIC",
        "excludedGroups": ["audience_size", "per_absolute_unique_visitors", "per_active_visitors_day_active_visitors_14", "per_active_visitors_date_active_visitors_14", "per_events_with_local_currency", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "per_active_visitors_nthday_active_visitors_1", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:socialInteractionsPerSession": {
        "type": "METRIC",
        "excludedGroups": ["audience_size", "per_absolute_unique_visitors", "per_active_visitors_day_active_visitors_14", "per_active_visitors_date_active_visitors_14", "per_events_with_local_currency", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "per_active_visitors_nthday_active_visitors_1", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:socialInteractionsPerVisit": {
        "type": "METRIC",
        "excludedGroups": []
    },
    "ga:userTimingCategory": {
        "type": "DIMENSION",
        "excludedGroups": ["audience_size", "per_content_with_local_currency", "per_content_with_gwo_id_and_outcomes"]
    },
    "ga:userTimingLabel": {
        "type": "DIMENSION",
        "excludedGroups": ["audience_size", "per_content_with_local_currency", "per_content_with_gwo_id_and_outcomes"]
    },
    "ga:userTimingVariable": {
        "type": "DIMENSION",
        "excludedGroups": ["audience_size", "per_content_with_local_currency", "per_content_with_gwo_id_and_outcomes"]
    },
    "ga:userTimingValue": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_active_visitors_day_active_visitors_14", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:userTimingSample": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_active_visitors_day_active_visitors_14", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:avgUserTimingValue": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_active_visitors_day_active_visitors_14", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:exceptionDescription": {
        "type": "DIMENSION",
        "excludedGroups": ["per_exception"]
    },
    "ga:exceptions": {
        "type": "METRIC",
        "excludedGroups": ["per_active_visitors_day_active_visitors_14", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "per_active_visitors_date_active_visitors_1", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "gwo_bandit_metrics", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_active_visitors_nthday_active_visitors_1", "per_active_visitors_nthday_active_visitors_7", "per_exception", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:exceptionsPerScreenview": {
        "type": "METRIC",
        "excludedGroups": ["per_active_visitors_day_active_visitors_14", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "per_active_visitors_date_active_visitors_1", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "gwo_bandit_metrics", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_active_visitors_nthday_active_visitors_1", "per_active_visitors_nthday_active_visitors_7", "per_exception", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:fatalExceptions": {
        "type": "METRIC",
        "excludedGroups": ["per_active_visitors_day_active_visitors_14", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "per_active_visitors_date_active_visitors_1", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "gwo_bandit_metrics", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_active_visitors_nthday_active_visitors_1", "per_active_visitors_nthday_active_visitors_7", "per_exception", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:fatalExceptionsPerScreenview": {
        "type": "METRIC",
        "excludedGroups": ["per_active_visitors_day_active_visitors_14", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "per_active_visitors_date_active_visitors_1", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "gwo_bandit_metrics", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_active_visitors_nthday_active_visitors_1", "per_active_visitors_nthday_active_visitors_7", "per_exception", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:experimentId": {
        "type": "DIMENSION",
        "excludedGroups": ["audience_size", "gwo_bandit_combination_metrics", "per_events_with_local_currency", "per_content_with_local_currency", "ga_experiment_results_metrics", "gwo_bandit_metrics", "gwo_transaction_subcube", "per_content_with_gwo_id_and_outcomes"]
    },
    "ga:experimentVariant": {
        "type": "DIMENSION",
        "excludedGroups": ["audience_size", "gwo_bandit_combination_metrics", "per_events_with_local_currency", "per_content_with_local_currency", "ga_experiment_results_metrics", "gwo_bandit_metrics", "gwo_transaction_subcube", "per_content_with_gwo_id_and_outcomes"]
    },
    "ga:dimensionXX": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_content_id_dimension_widening", "per_geo_dimension_widening", "per_campaign_id_dimension_widening", "per_ecommerce_dimension_widening", "per_absolute_unique_visitors", "individual_user_report", "per_campaign_segmented_with_local_currency", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "per_content_with_local_currency", "per_value_site_search", "per_geo_dimension_widening_country_iso_code", "per_geo_dimension_widening_region_id", "per_dimension_widening", "per_goal_funnel_request", "per_tv_campaign", "per_social_plus_site", "per_campaign_shasta_with_local_currency", "per_dfa_floodlight_model", "per_product_with_local_currency", "per_orphan", "per_goal_request_uri", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_dfa_model", "per_geo_dimension_widening_city_id", "per_campaign_dart_search", "per_query_with_cost_metrics", "per_content_with_gwo_id_and_outcomes", "per_user_id_dimension_widening", "per_geo_dimension_widening_sub_continent_code", "per_exception"]
    },
    "ga:customVarNameXX": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_events_with_local_currency", "per_content_with_local_currency", "per_value_site_search", "per_content_with_gwo_id_and_outcomes"]
    },
    "ga:metricXX": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_content_id_dimension_widening", "per_campaign_id_dimension_widening", "per_ecommerce_dimension_widening", "per_absolute_unique_visitors", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_dimension_widening", "per_active_visitors_day_active_visitors_1", "per_goal_funnel_request", "per_tv_campaign", "per_social_plus_site", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_dfa_floodlight_model", "per_product_with_local_currency", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_goal_request_uri", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_dfa_model", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_exception", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:customVarValueXX": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_events_with_local_currency", "per_content_with_local_currency", "per_value_site_search", "per_content_with_gwo_id_and_outcomes"]
    },
    "ga:date": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_social", "per_wmx_site", "per_absolute_unique_visitors", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "per_active_visitors_date_active_visitors_14", "per_wmx_query", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "per_wmx_url", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "phone_analytics", "per_active_visitors_day_active_visitors_1", "per_tv_campaign", "all_metrics_for_audiences_overview", "per_social_plus_site", "per_campaign_shasta_with_local_currency", "per_dfa_floodlight_model", "per_product_with_local_currency", "smart_goals", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_goal_request_uri", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_dfa_model", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_exception", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:year": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_social", "per_wmx_site", "per_absolute_unique_visitors", "per_campaign_segmented_with_local_currency", "per_wmx_query", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "per_wmx_url", "per_content_with_local_currency", "per_value_site_search", "phone_analytics", "per_tv_campaign", "all_metrics_for_audiences_overview", "per_social_plus_site", "per_campaign_shasta_with_local_currency", "per_dfa_floodlight_model", "per_product_with_local_currency", "smart_goals", "per_orphan", "per_goal_request_uri", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_dfa_model", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_exception"]
    },
    "ga:month": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_social", "per_wmx_site", "per_absolute_unique_visitors", "per_campaign_segmented_with_local_currency", "per_wmx_query", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "per_wmx_url", "per_content_with_local_currency", "per_value_site_search", "phone_analytics", "per_tv_campaign", "all_metrics_for_audiences_overview", "per_social_plus_site", "per_campaign_shasta_with_local_currency", "per_dfa_floodlight_model", "per_product_with_local_currency", "smart_goals", "per_orphan", "per_goal_request_uri", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_dfa_model", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_exception"]
    },
    "ga:week": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_social", "per_wmx_site", "per_absolute_unique_visitors", "per_campaign_segmented_with_local_currency", "per_wmx_query", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "per_wmx_url", "per_content_with_local_currency", "per_value_site_search", "phone_analytics", "per_tv_campaign", "all_metrics_for_audiences_overview", "per_social_plus_site", "per_campaign_shasta_with_local_currency", "per_dfa_floodlight_model", "per_product_with_local_currency", "smart_goals", "per_orphan", "per_goal_request_uri", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_dfa_model", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_exception"]
    },
    "ga:day": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_social", "per_wmx_site", "per_absolute_unique_visitors", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "per_active_visitors_date_active_visitors_14", "per_wmx_query", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "per_wmx_url", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "phone_analytics", "per_active_visitors_day_active_visitors_1", "per_tv_campaign", "all_metrics_for_audiences_overview", "per_social_plus_site", "per_campaign_shasta_with_local_currency", "per_dfa_floodlight_model", "per_product_with_local_currency", "smart_goals", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_goal_request_uri", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_dfa_model", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_exception", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:hour": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_social", "per_absolute_unique_visitors", "per_campaign_segmented_with_local_currency", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "per_content_with_local_currency", "per_value_site_search", "phone_analytics", "per_tv_campaign", "per_social_plus_site", "per_campaign_shasta_with_local_currency", "per_dfa_floodlight_model", "per_product_with_local_currency", "smart_goals", "per_orphan", "per_goal_request_uri", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_dfa_model", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_exception"]
    },
    "ga:minute": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_events_with_local_currency", "per_content_with_local_currency", "per_value_site_search", "per_tv_campaign", "per_goal_request_uri", "per_content_with_gwo_id_and_outcomes"]
    },
    "ga:nthMonth": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_social", "per_wmx_site", "per_absolute_unique_visitors", "per_campaign_segmented_with_local_currency", "per_wmx_query", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "per_wmx_url", "per_content_with_local_currency", "per_value_site_search", "phone_analytics", "per_tv_campaign", "all_metrics_for_audiences_overview", "per_social_plus_site", "per_campaign_shasta_with_local_currency", "per_dfa_floodlight_model", "per_product_with_local_currency", "smart_goals", "per_orphan", "per_goal_request_uri", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_dfa_model", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_exception"]
    },
    "ga:nthWeek": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_social", "per_wmx_site", "per_absolute_unique_visitors", "per_campaign_segmented_with_local_currency", "per_wmx_query", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "per_wmx_url", "per_content_with_local_currency", "per_value_site_search", "phone_analytics", "per_tv_campaign", "all_metrics_for_audiences_overview", "per_social_plus_site", "per_campaign_shasta_with_local_currency", "per_dfa_floodlight_model", "per_product_with_local_currency", "smart_goals", "per_orphan", "per_goal_request_uri", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_dfa_model", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_exception"]
    },
    "ga:nthDay": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_social", "per_wmx_site", "per_absolute_unique_visitors", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "per_active_visitors_date_active_visitors_14", "per_wmx_query", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "per_wmx_url", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "ga_experiment_results_metrics", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "phone_analytics", "per_active_visitors_day_active_visitors_1", "per_tv_campaign", "all_metrics_for_audiences_overview", "per_social_plus_site", "per_campaign_shasta_with_local_currency", "per_dfa_floodlight_model", "per_product_with_local_currency", "smart_goals", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_goal_request_uri", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_dfa_model", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_exception", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:nthMinute": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_events_with_local_currency", "per_content_with_local_currency", "per_value_site_search", "per_tv_campaign", "per_goal_request_uri", "per_content_with_gwo_id_and_outcomes"]
    },
    "ga:dayOfWeek": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_social", "per_wmx_site", "per_absolute_unique_visitors", "per_campaign_segmented_with_local_currency", "per_wmx_query", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "per_wmx_url", "per_content_with_local_currency", "per_value_site_search", "phone_analytics", "per_tv_campaign", "all_metrics_for_audiences_overview", "per_social_plus_site", "per_campaign_shasta_with_local_currency", "per_dfa_floodlight_model", "per_product_with_local_currency", "smart_goals", "per_orphan", "per_goal_request_uri", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_dfa_model", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_exception"]
    },
    "ga:dayOfWeekName": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_social", "per_wmx_site", "per_absolute_unique_visitors", "per_campaign_segmented_with_local_currency", "per_wmx_query", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "per_wmx_url", "per_content_with_local_currency", "per_value_site_search", "phone_analytics", "per_tv_campaign", "all_metrics_for_audiences_overview", "per_social_plus_site", "per_campaign_shasta_with_local_currency", "per_dfa_floodlight_model", "per_product_with_local_currency", "smart_goals", "per_orphan", "per_goal_request_uri", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_dfa_model", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_exception"]
    },
    "ga:dateHour": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_social", "per_absolute_unique_visitors", "per_campaign_segmented_with_local_currency", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "per_content_with_local_currency", "per_value_site_search", "phone_analytics", "per_tv_campaign", "per_social_plus_site", "per_campaign_shasta_with_local_currency", "per_dfa_floodlight_model", "per_product_with_local_currency", "smart_goals", "per_orphan", "per_goal_request_uri", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_dfa_model", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_exception"]
    },
    "ga:yearMonth": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_social", "per_wmx_site", "per_absolute_unique_visitors", "per_campaign_segmented_with_local_currency", "per_wmx_query", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "per_wmx_url", "per_content_with_local_currency", "per_value_site_search", "phone_analytics", "per_tv_campaign", "all_metrics_for_audiences_overview", "per_social_plus_site", "per_campaign_shasta_with_local_currency", "per_dfa_floodlight_model", "per_product_with_local_currency", "smart_goals", "per_orphan", "per_goal_request_uri", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_dfa_model", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_exception"]
    },
    "ga:yearWeek": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_social", "per_wmx_site", "per_absolute_unique_visitors", "per_campaign_segmented_with_local_currency", "per_wmx_query", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "per_wmx_url", "per_content_with_local_currency", "per_value_site_search", "phone_analytics", "per_tv_campaign", "all_metrics_for_audiences_overview", "per_social_plus_site", "per_campaign_shasta_with_local_currency", "per_dfa_floodlight_model", "per_product_with_local_currency", "smart_goals", "per_orphan", "per_goal_request_uri", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_dfa_model", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_exception"]
    },
    "ga:isoWeek": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_social", "per_absolute_unique_visitors", "per_campaign_segmented_with_local_currency", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "per_content_with_local_currency", "per_value_site_search", "per_tv_campaign", "per_social_plus_site", "per_campaign_shasta_with_local_currency", "per_dfa_floodlight_model", "per_product_with_local_currency", "per_orphan", "per_goal_request_uri", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_dfa_model", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_exception"]
    },
    "ga:isoYear": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_social", "per_absolute_unique_visitors", "per_campaign_segmented_with_local_currency", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "per_content_with_local_currency", "per_value_site_search", "per_tv_campaign", "per_social_plus_site", "per_campaign_shasta_with_local_currency", "per_dfa_floodlight_model", "per_product_with_local_currency", "per_orphan", "per_goal_request_uri", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_dfa_model", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_exception"]
    },
    "ga:isoYearIsoWeek": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_social", "per_absolute_unique_visitors", "per_campaign_segmented_with_local_currency", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "per_content_with_local_currency", "per_value_site_search", "per_tv_campaign", "per_social_plus_site", "per_campaign_shasta_with_local_currency", "per_dfa_floodlight_model", "per_product_with_local_currency", "per_orphan", "per_goal_request_uri", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_dfa_model", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_exception"]
    },
    "ga:dcmClickAd": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_events_with_local_currency", "per_value_site_search", "per_product_with_local_currency"]
    },
    "ga:dcmClickAdId": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_events_with_local_currency", "per_value_site_search", "per_product_with_local_currency"]
    },
    "ga:dcmClickAdType": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_events_with_local_currency", "per_value_site_search", "per_product_with_local_currency"]
    },
    "ga:dcmClickAdTypeId": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_events_with_local_currency", "per_value_site_search", "per_product_with_local_currency"]
    },
    "ga:dcmClickAdvertiser": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_events_with_local_currency", "per_value_site_search", "per_product_with_local_currency"]
    },
    "ga:dcmClickAdvertiserId": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_events_with_local_currency", "per_value_site_search", "per_product_with_local_currency"]
    },
    "ga:dcmClickCampaign": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_events_with_local_currency", "per_value_site_search", "per_product_with_local_currency"]
    },
    "ga:dcmClickCampaignId": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_events_with_local_currency", "per_value_site_search", "per_product_with_local_currency"]
    },
    "ga:dcmClickCreativeId": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_events_with_local_currency", "per_value_site_search", "per_product_with_local_currency"]
    },
    "ga:dcmClickCreative": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_events_with_local_currency", "per_value_site_search", "per_product_with_local_currency"]
    },
    "ga:dcmClickRenderingId": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_events_with_local_currency", "per_value_site_search", "per_product_with_local_currency"]
    },
    "ga:dcmClickCreativeType": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_events_with_local_currency", "per_value_site_search", "per_product_with_local_currency"]
    },
    "ga:dcmClickCreativeTypeId": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_events_with_local_currency", "per_value_site_search", "per_product_with_local_currency"]
    },
    "ga:dcmClickCreativeVersion": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_events_with_local_currency", "per_value_site_search", "per_product_with_local_currency"]
    },
    "ga:dcmClickSite": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_events_with_local_currency", "per_value_site_search", "per_product_with_local_currency"]
    },
    "ga:dcmClickSiteId": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_events_with_local_currency", "per_value_site_search", "per_product_with_local_currency"]
    },
    "ga:dcmClickSitePlacement": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_events_with_local_currency", "per_value_site_search", "per_product_with_local_currency"]
    },
    "ga:dcmClickSitePlacementId": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_events_with_local_currency", "per_value_site_search", "per_product_with_local_currency"]
    },
    "ga:dcmClickSpotId": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_events_with_local_currency", "per_value_site_search", "per_product_with_local_currency"]
    },
    "ga:dcmFloodlightActivity": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_events_with_local_currency", "per_value_site_search", "per_dfa_floodlight_model", "per_product_with_local_currency"]
    },
    "ga:dcmFloodlightActivityAndGroup": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_events_with_local_currency", "per_value_site_search", "per_dfa_floodlight_model", "per_product_with_local_currency"]
    },
    "ga:dcmFloodlightActivityGroup": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_events_with_local_currency", "per_value_site_search", "per_dfa_floodlight_model", "per_product_with_local_currency"]
    },
    "ga:dcmFloodlightActivityGroupId": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_events_with_local_currency", "per_value_site_search", "per_dfa_floodlight_model", "per_product_with_local_currency"]
    },
    "ga:dcmFloodlightActivityId": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_events_with_local_currency", "per_value_site_search", "per_dfa_floodlight_model", "per_product_with_local_currency"]
    },
    "ga:dcmFloodlightAdvertiserId": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_events_with_local_currency", "per_value_site_search", "per_dfa_floodlight_model", "per_product_with_local_currency"]
    },
    "ga:dcmFloodlightSpotId": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_events_with_local_currency", "per_value_site_search", "per_dfa_floodlight_model", "per_product_with_local_currency"]
    },
    "ga:dcmLastEventAd": {
        "type": "DIMENSION",
        "excludedGroups": ["per_dfa_model"]
    },
    "ga:dcmLastEventAdId": {
        "type": "DIMENSION",
        "excludedGroups": ["per_dfa_model"]
    },
    "ga:dcmLastEventAdType": {
        "type": "DIMENSION",
        "excludedGroups": ["per_dfa_model"]
    },
    "ga:dcmLastEventAdTypeId": {
        "type": "DIMENSION",
        "excludedGroups": ["per_dfa_model"]
    },
    "ga:dcmLastEventAdvertiser": {
        "type": "DIMENSION",
        "excludedGroups": ["per_dfa_model"]
    },
    "ga:dcmLastEventAdvertiserId": {
        "type": "DIMENSION",
        "excludedGroups": ["per_dfa_model"]
    },
    "ga:dcmLastEventAttributionType": {
        "type": "DIMENSION",
        "excludedGroups": ["per_dfa_model"]
    },
    "ga:dcmLastEventCampaign": {
        "type": "DIMENSION",
        "excludedGroups": ["per_dfa_model"]
    },
    "ga:dcmLastEventCampaignId": {
        "type": "DIMENSION",
        "excludedGroups": ["per_dfa_model"]
    },
    "ga:dcmLastEventCreativeId": {
        "type": "DIMENSION",
        "excludedGroups": ["per_dfa_model"]
    },
    "ga:dcmLastEventCreative": {
        "type": "DIMENSION",
        "excludedGroups": ["per_dfa_model"]
    },
    "ga:dcmLastEventRenderingId": {
        "type": "DIMENSION",
        "excludedGroups": ["per_dfa_model"]
    },
    "ga:dcmLastEventCreativeType": {
        "type": "DIMENSION",
        "excludedGroups": ["per_dfa_model"]
    },
    "ga:dcmLastEventCreativeTypeId": {
        "type": "DIMENSION",
        "excludedGroups": ["per_dfa_model"]
    },
    "ga:dcmLastEventCreativeVersion": {
        "type": "DIMENSION",
        "excludedGroups": ["per_dfa_model"]
    },
    "ga:dcmLastEventSite": {
        "type": "DIMENSION",
        "excludedGroups": ["per_dfa_model"]
    },
    "ga:dcmLastEventSiteId": {
        "type": "DIMENSION",
        "excludedGroups": ["per_dfa_model"]
    },
    "ga:dcmLastEventSitePlacement": {
        "type": "DIMENSION",
        "excludedGroups": ["per_dfa_model"]
    },
    "ga:dcmLastEventSitePlacementId": {
        "type": "DIMENSION",
        "excludedGroups": ["per_dfa_model"]
    },
    "ga:dcmLastEventSpotId": {
        "type": "DIMENSION",
        "excludedGroups": ["per_dfa_model"]
    },
    "ga:dcmFloodlightQuantity": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_dfa_floodlight_model", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_goal_request_uri", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_dfa_model", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:dcmFloodlightRevenue": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_dfa_floodlight_model", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_goal_request_uri", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_dfa_model", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:landingContentGroupXX": {
        "type": "DIMENSION",
        "excludedGroups": []
    },
    "ga:previousContentGroupXX": {
        "type": "DIMENSION",
        "excludedGroups": []
    },
    "ga:contentGroupXX": {
        "type": "DIMENSION",
        "excludedGroups": []
    },
    "ga:nextContentGroupXX": {
        "type": "DIMENSION",
        "excludedGroups": []
    },
    "ga:userAgeBracket": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_events_with_local_currency", "per_content_with_local_currency", "per_value_site_search", "phone_analytics", "all_metrics_for_audiences_overview", "per_product_with_local_currency", "per_content_with_gwo_id_and_outcomes"]
    },
    "ga:visitorAgeBracket": {
        "type": "DIMENSION",
        "excludedGroups": []
    },
    "ga:userGender": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_events_with_local_currency", "per_content_with_local_currency", "per_value_site_search", "phone_analytics", "all_metrics_for_audiences_overview", "per_product_with_local_currency", "per_content_with_gwo_id_and_outcomes"]
    },
    "ga:visitorGender": {
        "type": "DIMENSION",
        "excludedGroups": []
    },
    "ga:interestOtherCategory": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_events_with_local_currency", "per_content_with_local_currency", "per_value_site_search", "phone_analytics", "all_metrics_for_audiences_overview", "per_product_with_local_currency", "per_content_with_gwo_id_and_outcomes"]
    },
    "ga:interestAffinityCategory": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_events_with_local_currency", "per_content_with_local_currency", "per_value_site_search", "phone_analytics", "all_metrics_for_audiences_overview", "per_product_with_local_currency", "per_content_with_gwo_id_and_outcomes"]
    },
    "ga:interestInMarketCategory": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_events_with_local_currency", "per_content_with_local_currency", "per_value_site_search", "phone_analytics", "all_metrics_for_audiences_overview", "per_product_with_local_currency", "per_content_with_gwo_id_and_outcomes"]
    },
    "ga:adsenseRevenue": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_absolute_unique_visitors", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:adsenseAdUnitsViewed": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_absolute_unique_visitors", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:adsenseAdsViewed": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_absolute_unique_visitors", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:adsenseAdsClicks": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_absolute_unique_visitors", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:adsensePageImpressions": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_absolute_unique_visitors", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:adsenseCTR": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_absolute_unique_visitors", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:adsenseECPM": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_absolute_unique_visitors", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:adsenseExits": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_absolute_unique_visitors", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "per_content_with_local_currency", "per_value_site_search", "per_social_plus_site", "per_campaign_shasta_with_local_currency", "gwo_bandit_metrics", "per_orphan", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes"]
    },
    "ga:adsenseViewableImpressionPercent": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_absolute_unique_visitors", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:adsenseCoverage": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_absolute_unique_visitors", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:adxImpressions": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_absolute_unique_visitors", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:adxCoverage": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_absolute_unique_visitors", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:adxMonetizedPageviews": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_absolute_unique_visitors", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:adxImpressionsPerSession": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_absolute_unique_visitors", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:adxViewableImpressionsPercent": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_absolute_unique_visitors", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:adxClicks": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_absolute_unique_visitors", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:adxCTR": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_absolute_unique_visitors", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:adxRevenue": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_absolute_unique_visitors", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:adxRevenuePer1000Sessions": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_absolute_unique_visitors", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:adxECPM": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_absolute_unique_visitors", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:dfpImpressions": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_absolute_unique_visitors", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:dfpCoverage": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_absolute_unique_visitors", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:dfpMonetizedPageviews": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_absolute_unique_visitors", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:dfpImpressionsPerSession": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_absolute_unique_visitors", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:dfpViewableImpressionsPercent": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_absolute_unique_visitors", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:dfpClicks": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_absolute_unique_visitors", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:dfpCTR": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_absolute_unique_visitors", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:dfpRevenue": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_absolute_unique_visitors", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:dfpRevenuePer1000Sessions": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_absolute_unique_visitors", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:dfpECPM": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_absolute_unique_visitors", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:backfillImpressions": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_absolute_unique_visitors", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:backfillCoverage": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_absolute_unique_visitors", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:backfillMonetizedPageviews": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_absolute_unique_visitors", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:backfillImpressionsPerSession": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_absolute_unique_visitors", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:backfillViewableImpressionsPercent": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_absolute_unique_visitors", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:backfillClicks": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_absolute_unique_visitors", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:backfillCTR": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_absolute_unique_visitors", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:backfillRevenue": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_absolute_unique_visitors", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:backfillRevenuePer1000Sessions": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_absolute_unique_visitors", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:backfillECPM": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_absolute_unique_visitors", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:acquisitionCampaign": {
        "type": "DIMENSION",
        "excludedGroups": ["cohorts_overview_nth_week", "individual_user_report", "all_metrics_for_audiences_overview", "cohorts_overview_nth_day", "cohorts_overview_nth_month"]
    },
    "ga:acquisitionMedium": {
        "type": "DIMENSION",
        "excludedGroups": ["cohorts_overview_nth_week", "individual_user_report", "all_metrics_for_audiences_overview", "cohorts_overview_nth_day", "cohorts_overview_nth_month"]
    },
    "ga:acquisitionSource": {
        "type": "DIMENSION",
        "excludedGroups": ["cohorts_overview_nth_week", "individual_user_report", "all_metrics_for_audiences_overview", "cohorts_overview_nth_day", "cohorts_overview_nth_month"]
    },
    "ga:acquisitionSourceMedium": {
        "type": "DIMENSION",
        "excludedGroups": ["cohorts_overview_nth_week", "individual_user_report", "all_metrics_for_audiences_overview", "cohorts_overview_nth_day", "cohorts_overview_nth_month"]
    },
    "ga:acquisitionTrafficChannel": {
        "type": "DIMENSION",
        "excludedGroups": ["cohorts_overview_nth_week", "individual_user_report", "all_metrics_for_audiences_overview", "cohorts_overview_nth_day", "cohorts_overview_nth_month"]
    },
    "ga:browserSize": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_events_with_local_currency", "per_content_with_local_currency", "per_value_site_search", "all_metrics_for_audiences_overview", "per_dfa_floodlight_model", "per_product_with_local_currency", "smart_goals", "per_dfa_model", "per_campaign_dart_search", "per_content_with_gwo_id_and_outcomes", "per_exception"]
    },
    "ga:campaignCode": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_campaign_id_dimension_widening", "per_campaign_segmented_with_local_currency", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "per_value_site_search", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics"]
    },
    "ga:channelGrouping": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_campaign_segmented_with_local_currency", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "session_quality_report", "per_events_with_local_currency", "gdn_targeting", "per_value_site_search", "phone_analytics", "per_campaign_shasta_with_local_currency", "per_product_with_local_currency", "smart_goals", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_query_with_cost_metrics"]
    },
    "ga:checkoutOptions": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_events_with_local_currency", "per_content_with_local_currency", "per_value_site_search", "per_content_with_gwo_id_and_outcomes"]
    },
    "ga:cityId": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_geo_dimension_widening", "individual_user_report", "per_events_with_local_currency", "per_content_with_local_currency", "per_value_site_search", "phone_analytics", "all_metrics_for_audiences_overview", "per_dfa_floodlight_model", "per_product_with_local_currency", "smart_goals", "per_dfa_model", "per_geo_dimension_widening_city_id", "per_content_with_gwo_id_and_outcomes"]
    },
    "ga:cohort": {
        "type": "DIMENSION",
        "excludedGroups": ["cohorts_overview_nth_week", "cohorts_overview_nth_day", "cohorts_overview_nth_month"]
    },
    "ga:cohortNthDay": {
        "type": "DIMENSION",
        "excludedGroups": ["cohorts_overview_nth_day"]
    },
    "ga:cohortNthMonth": {
        "type": "DIMENSION",
        "excludedGroups": ["cohorts_overview_nth_month"]
    },
    "ga:cohortNthWeek": {
        "type": "DIMENSION",
        "excludedGroups": ["cohorts_overview_nth_week"]
    },
    "ga:continentId": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "individual_user_report", "per_events_with_local_currency", "per_content_with_local_currency", "per_value_site_search", "phone_analytics", "all_metrics_for_audiences_overview", "per_dfa_floodlight_model", "per_product_with_local_currency", "smart_goals", "per_dfa_model", "per_content_with_gwo_id_and_outcomes"]
    },
    "ga:correlationModelId": {
        "type": "DIMENSION",
        "excludedGroups": ["related_products_subcube"]
    },
    "ga:countryIsoCode": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_geo_dimension_widening", "per_wmx_site", "individual_user_report", "per_wmx_query", "per_events_with_local_currency", "per_wmx_url", "per_content_with_local_currency", "per_value_site_search", "per_geo_dimension_widening_country_iso_code", "phone_analytics", "all_metrics_for_audiences_overview", "per_dfa_floodlight_model", "per_product_with_local_currency", "smart_goals", "per_dfa_model", "per_content_with_gwo_id_and_outcomes"]
    },
    "ga:dataSource": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "per_content_with_local_currency", "per_value_site_search", "phone_analytics", "per_campaign_shasta_with_local_currency", "per_dfa_floodlight_model", "per_product_with_local_currency", "smart_goals", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_dfa_model", "per_query_with_cost_metrics", "per_content_with_gwo_id_and_outcomes", "per_exception"]
    },
    "ga:dbmClickAdvertiser": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_events_with_local_currency", "per_value_site_search", "per_product_with_local_currency"]
    },
    "ga:dbmClickAdvertiserId": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_events_with_local_currency", "per_value_site_search", "per_product_with_local_currency"]
    },
    "ga:dbmClickCreativeId": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_events_with_local_currency", "per_value_site_search", "per_product_with_local_currency"]
    },
    "ga:dbmClickExchange": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_events_with_local_currency", "per_value_site_search", "per_product_with_local_currency"]
    },
    "ga:dbmClickExchangeId": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_events_with_local_currency", "per_value_site_search", "per_product_with_local_currency"]
    },
    "ga:dbmClickInsertionOrder": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_events_with_local_currency", "per_value_site_search", "per_product_with_local_currency"]
    },
    "ga:dbmClickInsertionOrderId": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_events_with_local_currency", "per_value_site_search", "per_product_with_local_currency"]
    },
    "ga:dbmClickLineItem": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_events_with_local_currency", "per_value_site_search", "per_product_with_local_currency"]
    },
    "ga:dbmClickLineItemId": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_events_with_local_currency", "per_value_site_search", "per_product_with_local_currency"]
    },
    "ga:dbmClickSite": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_events_with_local_currency", "per_value_site_search", "per_product_with_local_currency"]
    },
    "ga:dbmClickSiteId": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_events_with_local_currency", "per_value_site_search", "per_product_with_local_currency"]
    },
    "ga:dbmLastEventAdvertiser": {
        "type": "DIMENSION",
        "excludedGroups": ["per_dfa_model"]
    },
    "ga:dbmLastEventAdvertiserId": {
        "type": "DIMENSION",
        "excludedGroups": ["per_dfa_model"]
    },
    "ga:dbmLastEventCreativeId": {
        "type": "DIMENSION",
        "excludedGroups": ["per_dfa_model"]
    },
    "ga:dbmLastEventExchange": {
        "type": "DIMENSION",
        "excludedGroups": ["per_dfa_model"]
    },
    "ga:dbmLastEventExchangeId": {
        "type": "DIMENSION",
        "excludedGroups": ["per_dfa_model"]
    },
    "ga:dbmLastEventInsertionOrder": {
        "type": "DIMENSION",
        "excludedGroups": ["per_dfa_model"]
    },
    "ga:dbmLastEventInsertionOrderId": {
        "type": "DIMENSION",
        "excludedGroups": ["per_dfa_model"]
    },
    "ga:dbmLastEventLineItem": {
        "type": "DIMENSION",
        "excludedGroups": ["per_dfa_model"]
    },
    "ga:dbmLastEventLineItemId": {
        "type": "DIMENSION",
        "excludedGroups": ["per_dfa_model"]
    },
    "ga:dbmLastEventSite": {
        "type": "DIMENSION",
        "excludedGroups": ["per_dfa_model"]
    },
    "ga:dbmLastEventSiteId": {
        "type": "DIMENSION",
        "excludedGroups": ["per_dfa_model"]
    },
    "ga:dsAdGroup": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_events_with_local_currency", "per_value_site_search", "per_product_with_local_currency", "per_campaign_dart_search"]
    },
    "ga:dsAdGroupId": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_events_with_local_currency", "per_value_site_search", "per_product_with_local_currency", "per_campaign_dart_search"]
    },
    "ga:dsAdvertiser": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_events_with_local_currency", "per_value_site_search", "per_product_with_local_currency", "per_campaign_dart_search"]
    },
    "ga:dsAdvertiserId": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_events_with_local_currency", "per_value_site_search", "per_product_with_local_currency", "per_campaign_dart_search"]
    },
    "ga:dsAgency": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_events_with_local_currency", "per_value_site_search", "per_product_with_local_currency", "per_campaign_dart_search"]
    },
    "ga:dsAgencyId": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_events_with_local_currency", "per_value_site_search", "per_product_with_local_currency", "per_campaign_dart_search"]
    },
    "ga:dsCampaign": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_events_with_local_currency", "per_value_site_search", "per_product_with_local_currency", "per_campaign_dart_search"]
    },
    "ga:dsCampaignId": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_events_with_local_currency", "per_value_site_search", "per_product_with_local_currency", "per_campaign_dart_search"]
    },
    "ga:dsEngineAccount": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_events_with_local_currency", "per_value_site_search", "per_product_with_local_currency", "per_campaign_dart_search"]
    },
    "ga:dsEngineAccountId": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_events_with_local_currency", "per_value_site_search", "per_product_with_local_currency", "per_campaign_dart_search"]
    },
    "ga:dsKeyword": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_events_with_local_currency", "per_value_site_search", "per_product_with_local_currency", "per_campaign_dart_search"]
    },
    "ga:dsKeywordId": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_events_with_local_currency", "per_value_site_search", "per_product_with_local_currency", "per_campaign_dart_search"]
    },
    "ga:internalPromotionCreative": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_events_with_local_currency", "per_content_with_local_currency", "per_value_site_search", "per_dfa_floodlight_model", "per_product_with_local_currency", "per_dfa_model", "per_content_with_gwo_id_and_outcomes"]
    },
    "ga:internalPromotionId": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_events_with_local_currency", "per_content_with_local_currency", "per_value_site_search", "per_dfa_floodlight_model", "per_product_with_local_currency", "per_dfa_model", "per_content_with_gwo_id_and_outcomes"]
    },
    "ga:internalPromotionName": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_events_with_local_currency", "per_content_with_local_currency", "per_value_site_search", "per_dfa_floodlight_model", "per_product_with_local_currency", "per_dfa_model", "per_content_with_gwo_id_and_outcomes"]
    },
    "ga:internalPromotionPosition": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_events_with_local_currency", "per_content_with_local_currency", "per_value_site_search", "per_dfa_floodlight_model", "per_product_with_local_currency", "per_dfa_model", "per_content_with_gwo_id_and_outcomes"]
    },
    "ga:isTrueViewVideoAd": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_campaign_segmented_with_local_currency", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "gdn_targeting", "per_campaign_shasta_with_local_currency", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_query_with_cost_metrics"]
    },
    "ga:metroId": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "individual_user_report", "per_events_with_local_currency", "per_content_with_local_currency", "per_value_site_search", "phone_analytics", "all_metrics_for_audiences_overview", "per_dfa_floodlight_model", "per_product_with_local_currency", "smart_goals", "per_dfa_model", "per_content_with_gwo_id_and_outcomes"]
    },
    "ga:nthHour": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "per_social", "per_absolute_unique_visitors", "per_campaign_segmented_with_local_currency", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "per_content_with_local_currency", "per_value_site_search", "phone_analytics", "per_tv_campaign", "per_social_plus_site", "per_campaign_shasta_with_local_currency", "per_dfa_floodlight_model", "per_product_with_local_currency", "smart_goals", "per_orphan", "per_goal_request_uri", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_dfa_model", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_exception"]
    },
    "ga:orderCouponCode": {
        "type": "DIMENSION",
        "excludedGroups": ["per_value_site_search"]
    },
    "ga:productBrand": {
        "type": "DIMENSION",
        "excludedGroups": ["per_ecommerce_dimension_widening", "per_product_with_local_currency"]
    },
    "ga:productCategoryHierarchy": {
        "type": "DIMENSION",
        "excludedGroups": ["per_ecommerce_dimension_widening", "per_product_with_local_currency"]
    },
    "ga:productCategoryLevelXX": {
        "type": "DIMENSION",
        "excludedGroups": []
    },
    "ga:productCouponCode": {
        "type": "DIMENSION",
        "excludedGroups": ["per_product_with_local_currency"]
    },
    "ga:productListName": {
        "type": "DIMENSION",
        "excludedGroups": ["per_product_with_local_currency"]
    },
    "ga:productListPosition": {
        "type": "DIMENSION",
        "excludedGroups": ["per_product_with_local_currency"]
    },
    "ga:productVariant": {
        "type": "DIMENSION",
        "excludedGroups": ["per_ecommerce_dimension_widening", "per_product_with_local_currency"]
    },
    "ga:queryProductId": {
        "type": "DIMENSION",
        "excludedGroups": ["related_products_subcube"]
    },
    "ga:queryProductName": {
        "type": "DIMENSION",
        "excludedGroups": ["related_products_subcube"]
    },
    "ga:queryProductVariation": {
        "type": "DIMENSION",
        "excludedGroups": ["related_products_subcube"]
    },
    "ga:regionId": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_geo_dimension_widening", "individual_user_report", "per_events_with_local_currency", "per_content_with_local_currency", "per_value_site_search", "per_geo_dimension_widening_region_id", "phone_analytics", "all_metrics_for_audiences_overview", "per_dfa_floodlight_model", "per_product_with_local_currency", "smart_goals", "per_dfa_model", "per_content_with_gwo_id_and_outcomes"]
    },
    "ga:regionIsoCode": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "individual_user_report", "per_events_with_local_currency", "per_content_with_local_currency", "per_value_site_search", "phone_analytics", "all_metrics_for_audiences_overview", "per_dfa_floodlight_model", "per_product_with_local_currency", "smart_goals", "per_dfa_model", "per_content_with_gwo_id_and_outcomes"]
    },
    "ga:relatedProductId": {
        "type": "DIMENSION",
        "excludedGroups": ["related_products_subcube"]
    },
    "ga:relatedProductName": {
        "type": "DIMENSION",
        "excludedGroups": ["related_products_subcube"]
    },
    "ga:relatedProductVariation": {
        "type": "DIMENSION",
        "excludedGroups": ["related_products_subcube"]
    },
    "ga:shoppingStage": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_events_with_local_currency", "per_content_with_local_currency", "per_value_site_search", "per_content_with_gwo_id_and_outcomes"]
    },
    "ga:subContinentCode": {
        "type": "DIMENSION",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_geo_dimension_widening", "individual_user_report", "per_events_with_local_currency", "per_content_with_local_currency", "per_value_site_search", "phone_analytics", "all_metrics_for_audiences_overview", "per_dfa_floodlight_model", "per_product_with_local_currency", "smart_goals", "per_dfa_model", "per_content_with_gwo_id_and_outcomes", "per_geo_dimension_widening_sub_continent_code"]
    },
    "ga:buyToDetailRate": {
        "type": "METRIC",
        "excludedGroups": ["audience_size", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_product_with_local_currency", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_query_with_cost_metrics", "gwo_transaction_subcube", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:calcMetric_<NAME>": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "cohorts_overview_nth_week", "per_absolute_unique_visitors", "individual_user_report", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "session_quality_report", "per_events_with_local_currency", "gdn_targeting", "all_metrics_for_cohorts_overview", "per_wmx_url", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "per_goal_funnel_request", "all_metrics_for_audiences_overview", "per_social_plus_site", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_dfa_floodlight_model", "smart_goals", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "cohorts_overview_nth_day", "per_goal_request_uri", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_dfa_model", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_exception", "channel_grouping_rule_key", "per_active_visitors_date_active_visitors_30", "cohorts_overview_nth_month", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:cartToDetailRate": {
        "type": "METRIC",
        "excludedGroups": ["audience_size", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_product_with_local_currency", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_query_with_cost_metrics", "gwo_transaction_subcube", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:cohortActiveUsers": {
        "type": "METRIC",
        "excludedGroups": ["cohorts_overview_nth_week", "cohorts_overview_nth_day", "cohorts_overview_nth_month"]
    },
    "ga:cohortAppviewsPerUser": {
        "type": "METRIC",
        "excludedGroups": ["cohorts_overview_nth_week", "cohorts_overview_nth_day", "cohorts_overview_nth_month"]
    },
    "ga:cohortAppviewsPerUserWithLifetimeCriteria": {
        "type": "METRIC",
        "excludedGroups": ["cohorts_overview_nth_week", "cohorts_overview_nth_day", "cohorts_overview_nth_month"]
    },
    "ga:cohortGoalCompletionsPerUser": {
        "type": "METRIC",
        "excludedGroups": ["cohorts_overview_nth_week", "cohorts_overview_nth_day", "cohorts_overview_nth_month"]
    },
    "ga:cohortGoalCompletionsPerUserWithLifetimeCriteria": {
        "type": "METRIC",
        "excludedGroups": ["cohorts_overview_nth_week", "cohorts_overview_nth_day", "cohorts_overview_nth_month"]
    },
    "ga:cohortPageviewsPerUser": {
        "type": "METRIC",
        "excludedGroups": ["cohorts_overview_nth_week", "cohorts_overview_nth_day", "cohorts_overview_nth_month"]
    },
    "ga:cohortPageviewsPerUserWithLifetimeCriteria": {
        "type": "METRIC",
        "excludedGroups": ["cohorts_overview_nth_week", "cohorts_overview_nth_day", "cohorts_overview_nth_month"]
    },
    "ga:cohortRetentionRate": {
        "type": "METRIC",
        "excludedGroups": ["cohorts_overview_nth_week", "cohorts_overview_nth_day", "cohorts_overview_nth_month"]
    },
    "ga:cohortRevenuePerUser": {
        "type": "METRIC",
        "excludedGroups": ["cohorts_overview_nth_week", "cohorts_overview_nth_day", "cohorts_overview_nth_month"]
    },
    "ga:cohortRevenuePerUserWithLifetimeCriteria": {
        "type": "METRIC",
        "excludedGroups": ["cohorts_overview_nth_week", "cohorts_overview_nth_day", "cohorts_overview_nth_month"]
    },
    "ga:cohortSessionDurationPerUser": {
        "type": "METRIC",
        "excludedGroups": ["cohorts_overview_nth_week", "cohorts_overview_nth_day", "cohorts_overview_nth_month"]
    },
    "ga:cohortSessionDurationPerUserWithLifetimeCriteria": {
        "type": "METRIC",
        "excludedGroups": ["cohorts_overview_nth_week", "cohorts_overview_nth_day", "cohorts_overview_nth_month"]
    },
    "ga:cohortSessionsPerUser": {
        "type": "METRIC",
        "excludedGroups": ["cohorts_overview_nth_week", "cohorts_overview_nth_day", "cohorts_overview_nth_month"]
    },
    "ga:cohortSessionsPerUserWithLifetimeCriteria": {
        "type": "METRIC",
        "excludedGroups": ["cohorts_overview_nth_week", "cohorts_overview_nth_day", "cohorts_overview_nth_month"]
    },
    "ga:cohortTotalUsers": {
        "type": "METRIC",
        "excludedGroups": ["cohorts_overview_nth_week", "cohorts_overview_nth_day", "cohorts_overview_nth_month"]
    },
    "ga:cohortTotalUsersWithLifetimeCriteria": {
        "type": "METRIC",
        "excludedGroups": ["cohorts_overview_nth_week", "cohorts_overview_nth_day", "cohorts_overview_nth_month"]
    },
    "ga:correlationScore": {
        "type": "METRIC",
        "excludedGroups": ["related_products_subcube"]
    },
    "ga:dbmCPA": {
        "type": "METRIC",
        "excludedGroups": ["per_active_visitors_day_active_visitors_14", "per_active_visitors_date_active_visitors_14", "per_active_visitors_date_active_visitors_1", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_dfa_floodlight_model", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_active_visitors_nthday_active_visitors_1", "per_dfa_model", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:dbmCPC": {
        "type": "METRIC",
        "excludedGroups": ["per_active_visitors_day_active_visitors_14", "per_active_visitors_date_active_visitors_14", "per_active_visitors_date_active_visitors_1", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_dfa_floodlight_model", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_active_visitors_nthday_active_visitors_1", "per_dfa_model", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:dbmCPM": {
        "type": "METRIC",
        "excludedGroups": ["per_active_visitors_day_active_visitors_14", "per_active_visitors_date_active_visitors_14", "per_active_visitors_date_active_visitors_1", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_dfa_floodlight_model", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_active_visitors_nthday_active_visitors_1", "per_dfa_model", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:dbmCTR": {
        "type": "METRIC",
        "excludedGroups": ["per_active_visitors_day_active_visitors_14", "per_active_visitors_date_active_visitors_14", "per_active_visitors_date_active_visitors_1", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_dfa_floodlight_model", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_active_visitors_nthday_active_visitors_1", "per_dfa_model", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:dbmClicks": {
        "type": "METRIC",
        "excludedGroups": ["per_active_visitors_day_active_visitors_14", "per_active_visitors_date_active_visitors_14", "per_active_visitors_date_active_visitors_1", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_dfa_floodlight_model", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_active_visitors_nthday_active_visitors_1", "per_dfa_model", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:dbmConversions": {
        "type": "METRIC",
        "excludedGroups": ["per_active_visitors_day_active_visitors_14", "per_active_visitors_date_active_visitors_14", "per_active_visitors_date_active_visitors_1", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_dfa_floodlight_model", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_active_visitors_nthday_active_visitors_1", "per_dfa_model", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:dbmCost": {
        "type": "METRIC",
        "excludedGroups": ["per_active_visitors_day_active_visitors_14", "per_active_visitors_date_active_visitors_14", "per_active_visitors_date_active_visitors_1", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_dfa_floodlight_model", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_active_visitors_nthday_active_visitors_1", "per_dfa_model", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:dbmImpressions": {
        "type": "METRIC",
        "excludedGroups": ["per_active_visitors_day_active_visitors_14", "per_active_visitors_date_active_visitors_14", "per_active_visitors_date_active_visitors_1", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_dfa_floodlight_model", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_active_visitors_nthday_active_visitors_1", "per_dfa_model", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:dbmROAS": {
        "type": "METRIC",
        "excludedGroups": ["per_active_visitors_day_active_visitors_14", "per_active_visitors_date_active_visitors_14", "per_active_visitors_date_active_visitors_1", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_dfa_floodlight_model", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_active_visitors_nthday_active_visitors_1", "per_dfa_model", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:dcmCPC": {
        "type": "METRIC",
        "excludedGroups": ["per_active_visitors_day_active_visitors_14", "per_active_visitors_date_active_visitors_14", "per_active_visitors_date_active_visitors_1", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_dfa_floodlight_model", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_active_visitors_nthday_active_visitors_1", "per_dfa_model", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:dcmCTR": {
        "type": "METRIC",
        "excludedGroups": ["per_active_visitors_day_active_visitors_14", "per_active_visitors_date_active_visitors_14", "per_active_visitors_date_active_visitors_1", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_dfa_floodlight_model", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_active_visitors_nthday_active_visitors_1", "per_dfa_model", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:dcmClicks": {
        "type": "METRIC",
        "excludedGroups": ["per_active_visitors_day_active_visitors_14", "per_active_visitors_date_active_visitors_14", "per_active_visitors_date_active_visitors_1", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_dfa_floodlight_model", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_active_visitors_nthday_active_visitors_1", "per_dfa_model", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:dcmCost": {
        "type": "METRIC",
        "excludedGroups": ["per_active_visitors_day_active_visitors_14", "per_active_visitors_date_active_visitors_14", "per_active_visitors_date_active_visitors_1", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_dfa_floodlight_model", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_active_visitors_nthday_active_visitors_1", "per_dfa_model", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:dcmImpressions": {
        "type": "METRIC",
        "excludedGroups": ["per_active_visitors_day_active_visitors_14", "per_active_visitors_date_active_visitors_14", "per_active_visitors_date_active_visitors_1", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_dfa_floodlight_model", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_active_visitors_nthday_active_visitors_1", "per_dfa_model", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:dcmMargin": {
        "type": "METRIC",
        "excludedGroups": ["per_active_visitors_day_active_visitors_14", "per_active_visitors_date_active_visitors_14", "per_active_visitors_date_active_visitors_1", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_dfa_floodlight_model", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_active_visitors_nthday_active_visitors_1", "per_dfa_model", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:dcmROAS": {
        "type": "METRIC",
        "excludedGroups": ["per_active_visitors_day_active_visitors_14", "per_active_visitors_date_active_visitors_14", "per_active_visitors_date_active_visitors_1", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_dfa_floodlight_model", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_active_visitors_nthday_active_visitors_1", "per_dfa_model", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:dcmROI": {
        "type": "METRIC",
        "excludedGroups": ["per_active_visitors_day_active_visitors_14", "per_active_visitors_date_active_visitors_14", "per_active_visitors_date_active_visitors_1", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_dfa_floodlight_model", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_active_visitors_nthday_active_visitors_1", "per_dfa_model", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:dcmRPC": {
        "type": "METRIC",
        "excludedGroups": ["per_active_visitors_day_active_visitors_14", "per_active_visitors_date_active_visitors_14", "per_active_visitors_date_active_visitors_1", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_dfa_floodlight_model", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_active_visitors_nthday_active_visitors_1", "per_dfa_model", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:dsCPC": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_dart_search"]
    },
    "ga:dsCTR": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_dart_search"]
    },
    "ga:dsClicks": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_dart_search"]
    },
    "ga:dsCost": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_dart_search"]
    },
    "ga:dsImpressions": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_dart_search"]
    },
    "ga:dsProfit": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_dart_search"]
    },
    "ga:dsReturnOnAdSpend": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_dart_search"]
    },
    "ga:dsRevenuePerClick": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_dart_search"]
    },
    "ga:hits": {
        "type": "METRIC",
        "excludedGroups": ["per_active_visitors_day_active_visitors_14", "per_active_visitors_date_active_visitors_14", "per_events_with_local_currency", "per_active_visitors_date_active_visitors_1", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "per_social_plus_site", "all_metrics_for_active_visitors_cubes", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_active_visitors_nthday_active_visitors_1", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:internalPromotionCTR": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_events_with_local_currency", "per_content_with_local_currency", "per_value_site_search", "per_content_with_gwo_id_and_outcomes"]
    },
    "ga:internalPromotionClicks": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_events_with_local_currency", "per_content_with_local_currency", "per_value_site_search", "per_content_with_gwo_id_and_outcomes"]
    },
    "ga:internalPromotionViews": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_events_with_local_currency", "per_content_with_local_currency", "per_value_site_search", "per_content_with_gwo_id_and_outcomes"]
    },
    "ga:localProductRefundAmount": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_segmented_with_local_currency", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "local_transaction", "per_content_with_local_currency", "per_campaign_shasta_with_local_currency", "per_product_with_local_currency", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_query_with_cost_metrics"]
    },
    "ga:localRefundAmount": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_segmented_with_local_currency", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "local_transaction", "per_content_with_local_currency", "per_campaign_shasta_with_local_currency", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_query_with_cost_metrics"]
    },
    "ga:productAddsToCart": {
        "type": "METRIC",
        "excludedGroups": ["audience_size", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_product_with_local_currency", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_query_with_cost_metrics", "gwo_transaction_subcube", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:productCheckouts": {
        "type": "METRIC",
        "excludedGroups": ["audience_size", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_product_with_local_currency", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_query_with_cost_metrics", "gwo_transaction_subcube", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:productDetailViews": {
        "type": "METRIC",
        "excludedGroups": ["audience_size", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_product_with_local_currency", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_query_with_cost_metrics", "gwo_transaction_subcube", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:productListCTR": {
        "type": "METRIC",
        "excludedGroups": ["audience_size", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_product_with_local_currency", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_query_with_cost_metrics", "gwo_transaction_subcube", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:productListClicks": {
        "type": "METRIC",
        "excludedGroups": ["audience_size", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_product_with_local_currency", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_query_with_cost_metrics", "gwo_transaction_subcube", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:productListViews": {
        "type": "METRIC",
        "excludedGroups": ["audience_size", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_product_with_local_currency", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_query_with_cost_metrics", "gwo_transaction_subcube", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:productRefundAmount": {
        "type": "METRIC",
        "excludedGroups": ["audience_size", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_product_with_local_currency", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_query_with_cost_metrics", "gwo_transaction_subcube", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:productRefunds": {
        "type": "METRIC",
        "excludedGroups": ["audience_size", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_product_with_local_currency", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_query_with_cost_metrics", "gwo_transaction_subcube", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:productRemovesFromCart": {
        "type": "METRIC",
        "excludedGroups": ["audience_size", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_product_with_local_currency", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_query_with_cost_metrics", "gwo_transaction_subcube", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:productRevenuePerPurchase": {
        "type": "METRIC",
        "excludedGroups": ["audience_size", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_product_with_local_currency", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_query_with_cost_metrics", "gwo_transaction_subcube", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:quantityAddedToCart": {
        "type": "METRIC",
        "excludedGroups": ["audience_size", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_product_with_local_currency", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_query_with_cost_metrics", "gwo_transaction_subcube", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:quantityCheckedOut": {
        "type": "METRIC",
        "excludedGroups": ["audience_size", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_product_with_local_currency", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_query_with_cost_metrics", "gwo_transaction_subcube", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:quantityRefunded": {
        "type": "METRIC",
        "excludedGroups": ["audience_size", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "per_ecommerce_refund_import", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_product_with_local_currency", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_query_with_cost_metrics", "gwo_transaction_subcube", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:quantityRemovedFromCart": {
        "type": "METRIC",
        "excludedGroups": ["audience_size", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_product_with_local_currency", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_query_with_cost_metrics", "gwo_transaction_subcube", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:queryProductQuantity": {
        "type": "METRIC",
        "excludedGroups": ["related_products_subcube"]
    },
    "ga:refundAmount": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_absolute_unique_visitors", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "per_wmx_url", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "per_goal_funnel_request", "per_social_plus_site", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_dfa_floodlight_model", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_dfa_model", "per_campaign_dart_search", "per_query_with_cost_metrics", "gwo_transaction_subcube", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:relatedProductQuantity": {
        "type": "METRIC",
        "excludedGroups": ["related_products_subcube"]
    },
    "ga:revenuePerUser": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_absolute_unique_visitors", "per_campaign_segmented_with_local_currency", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "session_quality_report", "per_events_with_local_currency", "gdn_targeting", "per_wmx_url", "per_content_with_local_currency", "per_value_site_search", "per_goal_funnel_request", "all_metrics_for_audiences_overview", "per_campaign_shasta_with_local_currency", "per_orphan", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_dfa_model", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes"]
    },
    "ga:sessionsPerUser": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_absolute_unique_visitors", "per_campaign_segmented_with_local_currency", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "session_quality_report", "per_events_with_local_currency", "gdn_targeting", "per_wmx_url", "per_content_with_local_currency", "per_value_site_search", "per_goal_funnel_request", "all_metrics_for_audiences_overview", "per_campaign_shasta_with_local_currency", "per_orphan", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_dfa_model", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes"]
    },
    "ga:totalRefunds": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_absolute_unique_visitors", "per_active_visitors_day_active_visitors_14", "per_campaign_segmented_with_local_currency", "gwo_bandit_combination_metrics", "per_active_visitors_date_active_visitors_14", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "per_events_with_local_currency", "gdn_targeting", "per_wmx_url", "per_active_visitors_date_active_visitors_1", "per_content_with_local_currency", "per_value_site_search", "per_active_visitors_nthday_active_visitors_30", "per_active_visitors_date_active_visitors_7", "per_active_visitors_day_active_visitors_1", "per_goal_funnel_request", "per_social_plus_site", "all_metrics_for_active_visitors_cubes", "per_campaign_shasta_with_local_currency", "per_dfa_floodlight_model", "gwo_bandit_metrics", "per_orphan", "per_active_visitors_day_active_visitors_30", "per_active_visitors_day_active_visitors_7", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_active_visitors_nthday_active_visitors_1", "per_dfa_model", "per_campaign_dart_search", "per_query_with_cost_metrics", "gwo_transaction_subcube", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes", "per_active_visitors_nthday_active_visitors_7", "per_active_visitors_date_active_visitors_30", "per_active_visitors_nthday_active_visitors_14"]
    },
    "ga:transactionsPerUser": {
        "type": "METRIC",
        "excludedGroups": ["per_campaign_content", "audience_size", "per_absolute_unique_visitors", "per_campaign_segmented_with_local_currency", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_dimensions", "session_quality_report", "per_events_with_local_currency", "gdn_targeting", "per_wmx_url", "per_content_with_local_currency", "per_value_site_search", "per_goal_funnel_request", "all_metrics_for_audiences_overview", "per_campaign_shasta_with_local_currency", "per_orphan", "per_web_property_query_RESTRICTED", "Cube:analytics/per_campaign_with_local_currency_without_content_cost_metrics", "per_sitelink_extension", "per_dfa_model", "per_campaign_dart_search", "per_query_with_cost_metrics", "enhanced_campaign", "per_content_with_gwo_id_and_outcomes"]
    }
}

module.exports = gaFields;