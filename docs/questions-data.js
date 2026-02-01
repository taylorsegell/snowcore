// Auto-generated questions data
const QUESTIONS_DATA = [
    {
    "id": "Test 0_01",
    "number": 701,
    "question": "What is the minimum Snowflake edition required to offer data protection for sensitive data such as Protected Health Information (PHI)?",
    "options": [
      { "id": 1, "value": "Standard" },
      { "id": 2, "value": "Enterprise" },
      { "id": 3, "value": "Business Critical" },
      { "id": 4, "value": "Virtual Private Snowflake (VPS)" }
    ],
    "answers": [3],
    "explanation": "The Business Critical edition (formerly Enterprise for Business Critical) is the minimum version that provides the compliance standards (like HIPAA) required for PHI data.",
    "reference": "https://docs.snowflake.com/en/user-guide/intro-editions",
    "source": "Test 0",
    "testNumber": 0
  },
  {
    "id": "Test 0_02",
    "number": 702,
    "question": "Which Snowflake tool should be used specifically for troubleshooting and diagnosing network connectivity issues between a client and the Snowflake service?",
    "options": [
      { "id": 1, "value": "SnowSQL" },
      { "id": 2, "value": "SnowCD" },
      { "id": 3, "value": "Snowsight" },
      { "id": 4, "value": "Snowflake Connector" }
    ],
    "answers": [2],
    "explanation": "SnowCD (Snowflake Connectivity Diagnostic tool) helps users troubleshoot network connections to Snowflake by checking if the required URLs are accessible from the client network.",
    "reference": "https://docs.snowflake.com/en/user-guide/snowcd",
    "source": "Test 0",
    "testNumber": 0
  },
  {
    "id": "Test 0_03",
    "number": 703,
    "question": "Which semi-structured file format is best suited for preserving data values and precision for floating-point numbers during data loading?",
    "options": [
      { "id": 1, "value": "JSON" },
      { "id": 2, "value": "CSV" },
      { "id": 3, "value": "XML" },
      { "id": 4, "value": "Parquet" }
    ],
    "answers": [4],
    "explanation": "Parquet is a columnar storage format that preserves data types and precision effectively, particularly for numeric and floating-point values, compared to text-based formats like JSON or CSV.",
    "reference": "https://docs.snowflake.com/en/user-guide/script-data-load-transform-parquet",
    "source": "Test 0",
    "testNumber": 0
  },
  {
    "id": "Test 0_04",
    "number": 704,
    "question": "When enabling Schema Evolution (ENABLE_SCHEMA_EVOLUTION = TRUE), which of the following actions can Snowflake perform automatically during a COPY operation? (Choose two.)",
    "options": [
      { "id": 1, "value": "Drop existing columns" },
      { "id": 2, "value": "Add new columns to the table" },
      { "id": 3, "value": "Drop the NOT NULL constraint from existing columns" },
      { "id": 4, "value": "Change the data type of an existing column" }
    ],
    "answers": [2, 3],
    "explanation": "Schema evolution allows Snowflake to automatically add new columns found in the source files and drop NOT NULL constraints if the new data contains nulls for those columns.",
    "reference": "https://docs.snowflake.com/en/user-guide/data-load-schema-evolution",
    "source": "Test 0",
    "testNumber": 0
  },
  {
    "id": "Test 0_05",
    "number": 705,
    "question": "Which of the following database objects can be cloned in Snowflake using the CLONE keyword?",
    "options": [
      { "id": 1, "value": "Users and Roles" },
      { "id": 2, "value": "Databases, Schemas, and Tables" },
      { "id": 3, "value": "Virtual Warehouses" },
      { "id": 4, "value": "Storage Integrations" }
    ],
    "answers": [2],
    "explanation": "Snowflake supports zero-copy cloning for Databases, Schemas, and Tables (including Streams). Account-level objects like users and warehouses cannot be cloned.",
    "reference": "https://docs.snowflake.com/en/sql-reference/sql/create-clone",
    "source": "Test 0",
    "testNumber": 0
  },
  {
    "id": "Test 0_06",
    "number": 706,
    "question": "Which authentication method requires the user to have access to a secure private key file stored on their local device?",
    "options": [
      { "id": 1, "value": "Federated Authentication / SSO" },
      { "id": 2, "value": "Key-pair Authentication" },
      { "id": 3, "value": "OAuth" },
      { "id": 4, "value": "Multi-Factor Authentication (MFA)" }
    ],
    "answers": [2],
    "explanation": "Key-pair authentication uses a public key assigned to the Snowflake user and a private key file stored locally on the user's client machine to establish a secure connection.",
    "reference": "https://docs.snowflake.com/en/user-guide/key-pair-auth",
    "source": "Test 0",
    "testNumber": 0
  },
  {
    "id": "Test 0_07",
    "number": 707,
    "question": "How can a Snowflake user temporarily bypass Multi-Factor Authentication (MFA) if they lose access to their device?",
    "options": [
      { "id": 1, "value": "By contacting the Snowflake Support team" },
      { "id": 2, "value": "By using the MINS_TO_BYPASS_MFA property set by an account admin" },
      { "id": 3, "value": "By answering security questions in the UI" },
      { "id": 4, "value": "MFA cannot be bypassed once enabled" }
    ],
    "answers": [2],
    "explanation": "An administrator can set the MINS_TO_BYPASS_MFA parameter on a user profile to allow them to log in without MFA for a specified duration (e.g., 30 minutes).",
    "reference": "https://docs.snowflake.com/en/user-guide/security-mfa#label-mfa-bypass",
    "source": "Test 0",
    "testNumber": 0
  },
  {
    "id": "Test 0_08",
    "number": 708,
    "question": "Which specific table feature is used to enable the processing of unstructured data by maintaining a catalog of files in a stage?",
    "options": [
      { "id": 1, "value": "External Table" },
      { "id": 2, "value": "Transient Table" },
      { "id": 3, "value": "Directory Table" },
      { "id": 4, "value": "Standard Table" }
    ],
    "answers": [3],
    "explanation": "A Directory Table is built into a stage and provides a queryable catalog of the unstructured files stored in that stage (size, file URL, etc.).",
    "reference": "https://docs.snowflake.com/en/user-guide/data-load-dirtables-intro",
    "source": "Test 0",
    "testNumber": 0
  },
  {
    "id": "Test 0_09",
    "number": 709,
    "question": "Snowflake's Multi-Factor Authentication (MFA) is integrated with and powered by which third-party service?",
    "options": [
      { "id": 1, "value": "Okta" },
      { "id": 2, "value": "Microsoft Authenticator" },
      { "id": 3, "value": "Duo Security" },
      { "id": 4, "value": "Google Authenticator" }
    ],
    "answers": [3],
    "explanation": "Snowflake MFA is powered by the Duo Security service.",
    "reference": "https://docs.snowflake.com/en/user-guide/security-mfa",
    "source": "Test 0",
    "testNumber": 0
  },
  {
    "id": "Test 0_10",
    "number": 710,
    "question": "Which SQL command is used to execute a Stored Procedure in Snowflake?",
    "options": [
      { "id": 1, "value": "EXECUTE" },
      { "id": 2, "value": "RUN" },
      { "id": 3, "value": "CALL" },
      { "id": 4, "value": "SELECT" }
    ],
    "answers": [3],
    "explanation": "Stored Procedures are invoked using the CALL command, whereas User Defined Functions (UDFs) are typically used within a SELECT statement.",
    "reference": "https://docs.snowflake.com/en/sql-reference/sql/call",
    "source": "Test 0",
    "testNumber": 0
  },
  {
    "id": "Test 0_11",
    "number": 711,
    "question": "To unload data from a Snowflake table to a specific Table Stage, which location should be specified in the COPY INTO command?",
    "options": [
      { "id": 1, "value": "COPY INTO @~/filename FROM table_name" },
      { "id": 2, "value": "COPY INTO @%table_name FROM table_name" },
      { "id": 3, "value": "COPY INTO @stage_name FROM table_name" },
      { "id": 4, "value": "COPY INTO 's3://bucket/' FROM table_name" }
    ],
    "answers": [2],
    "explanation": "The syntax `@%table_name` refers to the internal stage automatically associated with a specific table.",
    "reference": "https://docs.snowflake.com/en/user-guide/data-unload-table",
    "source": "Test 0",
    "testNumber": 0
  },
  {
    "id": "Test 0_12",
    "number": 712,
    "question": "Which Snowflake role is responsible for managing grants and privileges on objects by default?",
    "options": [
      { "id": 1, "value": "SYSADMIN" },
      { "id": 2, "value": "USERADMIN" },
      { "id": 3, "value": "SECURITYADMIN" },
      { "id": 4, "value": "PUBLIC" }
    ],
    "answers": [3],
    "explanation": "The SECURITYADMIN role includes the global MANAGE GRANTS privilege, allowing it to modify privileges on any object in the account.",
    "reference": "https://docs.snowflake.com/en/user-guide/security-access-control-considerations",
    "source": "Test 0",
    "testNumber": 0
  },
  {
    "id": "Test 0_13",
    "number": 713,
    "question": "What happens to currently running queries if a Virtual Warehouse is resized while they are executing?",
    "options": [
      { "id": 1, "value": "The queries are canceled and restarted automatically" },
      { "id": 2, "value": "The queries continue to run on the original size/resources until completion" },
      { "id": 3, "value": "The queries immediately benefit from the increased compute resources" },
      { "id": 4, "value": "The queries are paused until the resize is finished" }
    ],
    "answers": [2],
    "explanation": "Resizing a warehouse does not affect queries that are already running. Only new queries submitted after the resize operation completes will use the new warehouse size.",
    "reference": "https://docs.snowflake.com/en/user-guide/warehouses-tasks#label-warehouses-resizing",
    "source": "Test 0",
    "testNumber": 0
  },
  {
    "id": "Test 0_14",
    "number": 714,
    "question": "Which Information Schema view provides details about bytes consumed by active storage, Time Travel, and Fail-safe for tables?",
    "options": [
      { "id": 1, "value": "TABLE_HISTORY" },
      { "id": 2, "value": "STORAGE_USAGE" },
      { "id": 3, "value": "TABLE_STORAGE_METRICS" },
      { "id": 4, "value": "DATABASE_STORAGE_USAGE_HISTORY" }
    ],
    "answers": [3],
    "explanation": "The TABLE_STORAGE_METRICS view in the Information Schema provides a breakdown of physical storage used by active data, Time Travel, and Fail-safe at the table level.",
    "reference": "https://docs.snowflake.com/en/sql-reference/info-schema/table_storage_metrics",
    "source": "Test 0",
    "testNumber": 0
  },
  {
    "id": "Test 0_15",
    "number": 715,
    "question": "Which of the following is NOT a column found in a Snowflake Stream to track metadata changes?",
    "options": [
      { "id": 1, "value": "METADATA$ACTION" },
      { "id": 2, "value": "METADATA$ISUPDATE" },
      { "id": 3, "value": "METADATA$ROW_ID" },
      { "id": 4, "value": "METADATA$TIMESTAMP" }
    ],
    "answers": [4],
    "explanation": "Streams include three metadata columns: METADATA$ACTION (INSERT/DELETE), METADATA$ISUPDATE (TRUE/FALSE), and METADATA$ROW_ID. There is no METADATA$TIMESTAMP column.",
    "reference": "https://docs.snowflake.com/en/user-guide/streams-intro#metadata-columns",
    "source": "Test 0",
    "testNumber": 0
  },
  {
    "id": "Test 0_16",
    "number": 716,
    "question": "Which command is used to manually synchronize or refresh a Directory Table to reflect changes in the underlying cloud storage stage?",
    "options": [
      { "id": 1, "value": "REFRESH STAGE stage_name" },
      { "id": 2, "value": "ALTER STAGE stage_name REFRESH" },
      { "id": 3, "value": "UPDATE DIRECTORY ON @stage_name" },
      { "id": 4, "value": "ALTER TABLE directory_table REFRESH" }
    ],
    "answers": [2],
    "explanation": "The `ALTER STAGE <name> REFRESH` command is used to manually sync the directory table with the files currently residing in the stage.",
    "reference": "https://docs.snowflake.com/en/sql-reference/sql/alter-stage",
    "source": "Test 0",
    "testNumber": 0
  },
  {
    "id": "Test 0_17",
    "number": 717,
    "question": "How can a user convert a Transient Table into a Permanent Table?",
    "options": [
      { "id": 1, "value": "Using ALTER TABLE ... SET TYPE = PERMANENT" },
      { "id": 2, "value": "It cannot be directly converted; it must be re-created as a Permanent table" },
      { "id": 3, "value": "By enabling Fail-safe on the Transient table" },
      { "id": 4, "value": "Transient tables automatically become Permanent after 24 hours" }
    ],
    "answers": [2],
    "explanation": "You cannot change the 'type' of a table (Transient vs Permanent) after it is created. You must use `CREATE TABLE ... AS SELECT` (CTAS) to move the data into a new table of the desired type.",
    "reference": "https://docs.snowflake.com/en/user-guide/tables-temp-transient",
    "source": "Test 0",
    "testNumber": 0
  },
  {
    "id": "Test 0_18",
    "number": 718,
    "question": "Which metadata column can be used in a query to identify the specific file name on a stage from which a record was loaded?",
    "options": [
      { "id": 1, "value": "METADATA$FILENAME" },
      { "id": 2, "value": "METADATA$FILE_URL" },
      { "id": 3, "value": "METADATA$SOURCE_FILE" },
      { "id": 4, "value": "FILE_NAME" }
    ],
    "answers": [1],
    "explanation": "Snowflake provides the METADATA$FILENAME pseudocolumn to retrieve the name of the staged file for each row in a query or load operation.",
    "reference": "https://docs.snowflake.com/en/user-guide/querying-metadata",
    "source": "Test 0",
    "testNumber": 0
  },
  {
    "id": "Test 0_19",
    "number": 719,
    "question": "What is the impact of dropping a column from a Snowflake table on the existing micro-partitions?",
    "options": [
      { "id": 1, "value": "All micro-partitions containing that column are deleted and rewritten" },
      { "id": 2, "value": "There is no immediate change to micro-partitions as they are immutable; the change is metadata-only" },
      { "id": 3, "value": "The table is locked while micro-partitions are reorganized" },
      { "id": 4, "value": "The dropped column data is immediately purged from cloud storage" }
    ],
    "answers": [2],
    "explanation": "Because micro-partitions are immutable, dropping a column is a metadata operation. The data remains in the physical micro-partitions until they are eventually removed by data retention or background processes, but it is no longer visible to the user.",
    "reference": "https://docs.snowflake.com/en/user-guide/tables-micro-partitions",
    "source": "Test 0",
    "testNumber": 0
  },
  {
    "id": "Test 0_20",
    "number": 720,
    "question": "Which of the following data types are used specifically to store semi-structured data in Snowflake?",
    "options": [
      { "id": 1, "value": "VARCHAR, NUMBER, BOOLEAN" },
      { "id": 2, "value": "VARIANT, ARRAY, OBJECT" },
      { "id": 3, "value": "LOB, CLOB, BLOB" },
      { "id": 4, "value": "GEOGRAPHY, GEOMETRY" }
    ],
    "answers": [2],
    "explanation": "Snowflake's native semi-structured types are VARIANT (generic), ARRAY (ordered lists), and OBJECT (key-value pairs).",
    "reference": "https://docs.snowflake.com/en/sql-reference/data-types-semistructured",
    "source": "Test 0",
    "testNumber": 0
  },
  {
    "id": "Test 0_21",
    "number": 721,
    "question": "Which of the following objects is executed using the CALL command?",
    "options": [
      { "id": 1, "value": "User Defined Function (UDF)" },
      { "id": 2, "value": "Stored Procedure" },
      { "id": 3, "value": "View" },
      { "id": 4, "value": "Task" }
    ],
    "answers": [2],
    "explanation": "Stored Procedures are invoked with the CALL command, while UDFs are invoked as part of a SELECT statement.",
    "reference": "https://docs.snowflake.com/en/sql-reference/sql/call",
    "source": "Test 0",
    "testNumber": 0
  },
  {
    "id": "Test 0_22",
    "number": 722,
    "question": "Which Snowflake feature enables the continuous loading of data from cloud storage as soon as the files are available?",
    "options": [
      { "id": 1, "value": "COPY INTO" },
      { "id": 2, "value": "Snowpipe" },
      { "id": 3, "value": "Bulk Loading" },
      { "id": 4, "value": "External Tables" }
    ],
    "answers": [2],
    "explanation": "Snowpipe is designed for continuous data ingestion, triggered by cloud storage notifications or REST API calls.",
    "reference": "https://docs.snowflake.com/en/user-guide/data-load-snowpipe-intro",
    "source": "Test 0",
    "testNumber": 0
  },
  {
    "id": "Test 0_23",
    "number": 723,
    "question": "To unload data from a table to its own 'table stage' for later retrieval, which syntax should be used in the COPY INTO <location> command?",
    "options": [
      { "id": 1, "value": "COPY INTO @~/filename FROM table_name" },
      { "id": 2, "value": "COPY INTO @%table_name FROM table_name" },
      { "id": 3, "value": "COPY INTO @mystage FROM table_name" },
      { "id": 4, "value": "COPY INTO @internal_stage FROM table_name" }
    ],
    "answers": [2],
    "explanation": "The @% prefix denotes the internal stage belonging to a specific table.",
    "reference": "https://docs.snowflake.com/en/user-guide/data-unload-table",
    "source": "Test 0",
    "testNumber": 0
  },
  {
    "id": "Test 0_24",
    "number": 724,
    "question": "Which Snowflake edition is the minimum required to support the periodic rekeying of micro-partitions?",
    "options": [
      { "id": 1, "value": "Standard" },
      { "id": 2, "value": "Enterprise" },
      { "id": 3, "value": "Business Critical" },
      { "id": 4, "value": "Virtual Private Snowflake (VPS)" }
    ],
    "answers": [3],
    "explanation": "Periodic rekeying is a feature of the Business Critical edition and higher, which handles high-level data security requirements.",
    "reference": "https://docs.snowflake.com/en/user-guide/intro-editions",
    "source": "Test 0",
    "testNumber": 0
  },
  {
    "id": "Test 0_25",
    "number": 725,
    "question": "Which Snowflake tool allows for governed data sharing with selected internal and external parties through a centralized, invited marketplace?",
    "options": [
      { "id": 1, "value": "Direct Sharing" },
      { "id": 2, "value": "Data Marketplace" },
      { "id": 3, "value": "Data Exchange" },
      { "id": 4, "value": "Reader Accounts" }
    ],
    "answers": [3],
    "explanation": "A Data Exchange is a private hub where you can securely share and consume data with a selected group of invited members.",
    "reference": "https://docs.snowflake.com/en/user-guide/data-exchange-intro",
    "source": "Test 0",
    "testNumber": 0
  },
  {
    "id": "Test 0_26",
    "number": 726,
    "question": "Which system-defined role is primarily responsible for managing object grants and access control in Snowflake?",
    "options": [
      { "id": 1, "value": "SYSADMIN" },
      { "id": 2, "value": "SECURITYADMIN" },
      { "id": 3, "value": "USERADMIN" },
      { "id": 4, "value": "ACCOUNTADMIN" }
    ],
    "answers": [2],
    "explanation": "SECURITYADMIN manages all account-level grants and is inherited by ACCOUNTADMIN.",
    "reference": "https://docs.snowflake.com/en/user-guide/security-access-control-overview",
    "source": "Test 0",
    "testNumber": 0
  },
  {
    "id": "Test 0_27",
    "number": 727,
    "question": "Why is it recommended to load JSON data into a VARIANT column instead of a standard VARCHAR column?",
    "options": [
      { "id": 1, "value": "VARIANT columns can store more data than VARCHAR" },
      { "id": 2, "value": "Snowflake optimizes storage and query performance for VARIANT data" },
      { "id": 3, "value": "VARCHAR columns do not support semi-structured data" },
      { "id": 4, "value": "VARIANT columns are the only ones that support encryption" }
    ],
    "answers": [2],
    "explanation": "Loading JSON into a VARIANT column allows Snowflake to apply internal optimizations, such as columnarizing common fields, which results in better query performance.",
    "reference": "https://docs.snowflake.com/en/user-guide/semistructured-concepts",
    "source": "Test 0",
    "testNumber": 0
  },
  {
    "id": "Test 0_28",
    "number": 728,
    "question": "When cloning a Schema, which of the following objects is NOT included in the clone?",
    "options": [
      { "id": 1, "value": "Tables" },
      { "id": 2, "value": "Views" },
      { "id": 3, "value": "External Stages" },
      { "id": 4, "value": "Stored Procedures" }
    ],
    "answers": [3],
    "explanation": "External stages are not cloned when cloning a schema or database; only internal stages and data objects are included.",
    "reference": "https://docs.snowflake.com/en/sql-reference/sql/create-clone#label-cloning-objects",
    "source": "Test 0",
    "testNumber": 0
  },
  {
    "id": "Test 0_29",
    "number": 729,
    "question": "What happens to queries that are already running if you resize a virtual warehouse while they are executing?",
    "options": [
      { "id": 1, "value": "They are killed and must be restarted" },
      { "id": 2, "value": "They benefit immediately from the increased compute resources" },
      { "id": 3, "value": "They continue to run on the resources that were assigned when they started" },
      { "id": 4, "value": "They are paused until the resize operation finishes" }
    ],
    "answers": [3],
    "explanation": "Resizing a warehouse only affects new queries. Existing queries run to completion on the original set of servers.",
    "reference": "https://docs.snowflake.com/en/user-guide/warehouses-tasks#resizing-a-warehouse",
    "source": "Test 0",
    "testNumber": 0
  },
  {
    "id": "Test 0_30",
    "number": 730,
    "question": "Which of the following provides granular details about bytes consumed by active data, Time Travel, and Fail-safe storage at the table level?",
    "options": [
      { "id": 1, "value": "The Query Profile" },
      { "id": 2, "value": "The TABLE_STORAGE_METRICS view" },
      { "id": 3, "value": "The STORAGE_USAGE account history view" },
      { "id": 4, "value": "The Resource Monitor" }
    ],
    "answers": [2],
    "explanation": "TABLE_STORAGE_METRICS in the Information Schema is the best source for table-level storage breakdowns.",
    "reference": "https://docs.snowflake.com/en/sql-reference/info-schema/table_storage_metrics",
    "source": "Test 0",
    "testNumber": 0
  },
  {
    "id": "Test 0_31",
    "number": 731,
    "question": "If you need to preserve floating-point numbers with high precision (e.g., 15,9), which file format is most recommended during loading?",
    "options": [
      { "id": 1, "value": "CSV" },
      { "id": 2, "value": "JSON" },
      { "id": 3, "value": "Parquet" },
      { "id": 4, "value": "Avro" }
    ],
    "answers": [3],
    "explanation": "Parquet is a binary format that maintains schema and data type precision better than text formats.",
    "reference": "https://docs.snowflake.com/en/user-guide/data-load-transform-parquet",
    "source": "Test 0",
    "testNumber": 0
  },
  {
    "id": "Test 0_32",
    "number": 732,
    "question": "Which column in a Snowflake Stream is used to track the specific type of change (e.g., INSERT or DELETE) made to a record?",
    "options": [
      { "id": 1, "value": "METADATA$ROW_ID" },
      { "id": 2, "value": "METADATA$ACTION" },
      { "id": 3, "value": "METADATA$ISUPDATE" },
      { "id": 4, "value": "METADATA$TIMESTAMP" }
    ],
    "answers": [2],
    "explanation": "METADATA$ACTION indicates whether a row was inserted or deleted in the stream.",
    "reference": "https://docs.snowflake.com/en/user-guide/streams-intro",
    "source": "Test 0",
    "testNumber": 0
  },
  {
    "id": "Test 0_33",
    "number": 733,
    "question": "Which function is used to aggregate values into an ARRAY in Snowflake?",
    "options": [
      { "id": 1, "value": "ARRAY_AGG" },
      { "id": 2, "value": "TO_ARRAY" },
      { "id": 3, "value": "FLATTEN" },
      { "id": 4, "value": "LIST_AGG" }
    ],
    "answers": [1],
    "explanation": "ARRAY_AGG takes multiple input values and returns them as a single ARRAY object.",
    "reference": "https://docs.snowflake.com/en/sql-reference/functions/array_agg",
    "source": "Test 0",
    "testNumber": 0
  },
  {
    "id": "Test 0_34",
    "number": 734,
    "question": "Which of the following are supported languages for writing User Defined Functions (UDFs) in Snowflake?",
    "options": [
      { "id": 1, "value": "SQL and JavaScript only" },
      { "id": 2, "value": "SQL, JavaScript, Java, and Python" },
      { "id": 3, "value": "SQL and C++" },
      { "id": 4, "value": "Java and Python only" }
    ],
    "answers": [2],
    "explanation": "Snowflake supports UDFs in SQL, JavaScript, Java, and Python (and Scala via Snowpark).",
    "reference": "https://docs.snowflake.com/en/developer-guide/udf/udf-overview",
    "source": "Test 0",
    "testNumber": 0
  },
  {
    "id": "Test 0_35",
    "number": 735,
    "question": "Which authentication method is typically used to enable Single Sign-On (SSO) in Snowflake?",
    "options": [
      { "id": 1, "value": "Key-pair Authentication" },
      { "id": 2, "value": "Federated Authentication (SAML 2.0)" },
      { "id": 3, "value": "OAuth 2.0" },
      { "id": 4, "value": "Multi-Factor Authentication" }
    ],
    "answers": [2],
    "explanation": "Federated authentication using SAML 2.0 is the standard for enabling SSO via Identity Providers like Okta or Azure AD.",
    "reference": "https://docs.snowflake.com/en/user-guide/admin-security-fed-auth",
    "source": "Test 0",
    "testNumber": 0
  },
  {
    "id": "Test 0_36",
    "number": 736,
    "question": "What privilege must a user have to view the definition (the underlying SQL) of a secure materialized view?",
    "options": [
      { "id": 1, "value": "SELECT" },
      { "id": 2, "value": "USAGE" },
      { "id": 3, "value": "OWNERSHIP" },
      { "id": 4, "value": "MONITOR" }
    ],
    "answers": [3],
    "explanation": "Definitions of secure views and materialized views are hidden from all users except the owner (the role with OWNERSHIP privilege).",
    "reference": "https://docs.snowflake.com/en/user-guide/views-secure",
    "source": "Test 0",
    "testNumber": 0
  },
  {
    "id": "Test 0_37",
    "number": 737,
    "question": "In Snowpark, what is the name of the primary object or function type used to perform data operations and transformations?",
    "options": [
      { "id": 1, "value": "Snowpipe" },
      { "id": 2, "value": "Stored Procedure" },
      { "id": 3, "value": "DataFrame" },
      { "id": 4, "value": "Stage" }
    ],
    "answers": [3],
    "explanation": "The DataFrame API is the core of Snowpark for performing operations in languages like Python and Java.",
    "reference": "https://docs.snowflake.com/en/developer-guide/snowpark/index",
    "source": "Test 0",
    "testNumber": 0
  },
  {
    "id": "Test 0_38",
    "number": 738,
    "question": "Which privilege is required for a role to resume or suspend a Task?",
    "options": [
      { "id": 1, "value": "USAGE" },
      { "id": 2, "value": "OPERATE" },
      { "id": 3, "value": "MONITOR" },
      { "id": 4, "value": "OWNERSHIP" }
    ],
    "answers": [2],
    "explanation": "The OPERATE privilege allows a user to control the status of a task (suspend/resume).",
    "reference": "https://docs.snowflake.com/en/user-guide/tasks-intro",
    "source": "Test 0",
    "testNumber": 0
  },
  {
    "id": "Test 0_39",
    "number": 739,
    "question": "Why would an administrator or developer use the EXPLAIN function in Snowflake?",
    "options": [
      { "id": 1, "value": "To see the results of a query without running it" },
      { "id": 2, "value": "To review the logical and physical execution plan for a query" },
      { "id": 3, "value": "To calculate the storage costs for a table" },
      { "id": 4, "value": "To find errors in SQL syntax" }
    ],
    "answers": [2],
    "explanation": "EXPLAIN shows how Snowflake will execute the query, helping with performance tuning and optimization.",
    "reference": "https://docs.snowflake.com/en/sql-reference/sql/explain",
    "source": "Test 0",
    "testNumber": 0
  },
  {
    "id": "Test 0_40",
    "number": 740,
    "question": "What is the immediate impact on a role if you remove (revoke) one of its assigned privileges?",
    "options": [
      { "id": 1, "value": "The role is automatically dropped" },
      { "id": 2, "value": "The role can no longer perform the action associated with that privilege" },
      { "id": 3, "value": "The role loses all its other privileges as well" },
      { "id": 4, "value": "No impact until the user starts a new session" }
    ],
    "answers": [2],
    "explanation": "Revoking a privilege takes effect immediately, preventing the role from performing the restricted action.",
    "reference": "https://docs.snowflake.com/en/sql-reference/sql/revoke-privilege",
    "source": "Test 0",
    "testNumber": 0
  },
  {
    "id": "Test 0_41",
    "number": 741,
    "question": "What happens to records that are deleted or modified while still within their Time Travel retention window?",
    "options": [
      { "id": 1, "value": "They are permanently lost" },
      { "id": 2, "value": "They move directly to Fail-safe" },
      { "id": 3, "value": "They are preserved and can be queried or restored" },
      { "id": 4, "value": "They are moved to a temporary system schema" }
    ],
    "answers": [3],
    "explanation": "Time Travel allows you to access data from any point in time within the retention period.",
    "reference": "https://docs.snowflake.com/en/user-guide/data-time-travel",
    "source": "Test 0",
    "testNumber": 0
  },
  {
    "id": "Test 0_42",
    "number": 742,
    "question": "Which command is used to manually refresh the metadata in a directory table?",
    "options": [
      { "id": 1, "value": "REFRESH TABLE name" },
      { "id": 2, "value": "ALTER STAGE name REFRESH" },
      { "id": 3, "value": "UPDATE STAGE name" },
      { "id": 4, "value": "ALTER TABLE name SYNC" }
    ],
    "answers": [2],
    "explanation": "Refreshing the stage updates the directory table metadata for unstructured data.",
    "reference": "https://docs.snowflake.com/en/sql-reference/sql/alter-stage",
    "source": "Test 0",
    "testNumber": 0
  },
  {
    "id": "Test 0_43",
    "number": 743,
    "question": "Which of the following actions helps reduce the cost of 'backing up' or duplicating a large table in Snowflake?",
    "options": [
      { "id": 1, "value": "Exporting to S3" },
      { "id": 2, "value": "Creating a Clone of the table" },
      { "id": 3, "value": "Running a full INSERT INTO ... SELECT" },
      { "id": 4, "value": "Converting the table to Transient" }
    ],
    "answers": [2],
    "explanation": "Cloning is a zero-copy operation that doesn't duplicate storage costs until the cloned data is modified.",
    "reference": "https://docs.snowflake.com/en/user-guide/tables-storage-cloning",
    "source": "Test 0",
    "testNumber": 0
  },
  {
    "id": "Test 0_44",
    "number": 744,
    "question": "Which data type is supported and commonly used when defining a clustering key for a table?",
    "options": [
      { "id": 1, "value": "VARCHAR" },
      { "id": 2, "value": "VARIANT" },
      { "id": 3, "value": "GEOGRAPHY" },
      { "id": 4, "value": "ARRAY" }
    ],
    "answers": [1],
    "explanation": "VARCHAR, along with Date/Time and fixed-point numbers, are typical types for clustering keys.",
    "reference": "https://docs.snowflake.com/en/user-guide/tables-clustering-keys",
    "source": "Test 0",
    "testNumber": 0
  },
  {
    "id": "Test 0_45",
    "number": 745,
    "question": "Which function is used to convert a VARIANT 'null' value into a standard SQL NULL?",
    "options": [
      { "id": 1, "value": "TRY_CAST" },
      { "id": 2, "value": "IS_NULL_VALUE" },
      { "id": 3, "value": "IFNULL" },
      { "id": 4, "value": "COALESCE" }
    ],
    "answers": [2],
    "explanation": "IS_NULL_VALUE detects the semi-structured VARIANT 'null' so it can be handled as a native SQL NULL.",
    "reference": "https://docs.snowflake.com/en/sql-reference/functions/is_null_value",
    "source": "Test 0",
    "testNumber": 0
  },
  {
    "id": "Test 0_46",
    "number": 746,
    "question": "Which function must be used to insert a semi-structured string (like a JSON string) into a VARIANT column?",
    "options": [
      { "id": 1, "value": "CAST" },
      { "id": 2, "value": "TO_VARIANT" },
      { "id": 3, "value": "PARSE_JSON" },
      { "id": 4, "value": "STRIP_NULLS" }
    ],
    "answers": [3],
    "explanation": "PARSE_JSON converts a string containing JSON into a VARIANT object.",
    "reference": "https://docs.snowflake.com/en/sql-reference/functions/parse_json",
    "source": "Test 0",
    "testNumber": 0
  },
  {
    "id": "Test 0_47",
    "number": 747,
    "question": "How can a user convert a transient table to a permanent table?",
    "options": [
      { "id": 1, "value": "Using the ALTER TABLE command" },
      { "id": 2, "value": "By cloning the transient table into a permanent table" },
      { "id": 3, "value": "By changing the Time Travel retention to 90 days" },
      { "id": 4, "value": "This conversion is not possible; the table must be re-created" }
    ],
    "answers": [4],
    "explanation": "You cannot alter a table's type after creation. You must use CTAS to move the data.",
    "reference": "https://docs.snowflake.com/en/user-guide/tables-temp-transient",
    "source": "Test 0",
    "testNumber": 0
  },
  {
    "id": "Test 0_48",
    "number": 748,
    "question": "Which SQL command is used to remove a stored procedure from a database?",
    "options": [
      { "id": 1, "value": "DELETE PROCEDURE name" },
      { "id": 2, "value": "DROP PROCEDURE name(...)" },
      { "id": 3, "value": "REMOVE PROCEDURE name" },
      { "id": 4, "value": "ALTER PROCEDURE name DROP" }
    ],
    "answers": [2],
    "explanation": "The DROP PROCEDURE command removes the procedure. Note that the signature (arguments) must usually be included.",
    "reference": "https://docs.snowflake.com/en/sql-reference/sql/drop-procedure",
    "source": "Test 0",
    "testNumber": 0
  },
  {
    "id": "Test 0_49",
    "number": 749,
    "question": "Which function do you use to retrieve the actual filename for a file stored on a Snowflake stage during a query?",
    "options": [
      { "id": 1, "value": "FILE_NAME()" },
      { "id": 2, "value": "GET_FILENAME()" },
      { "id": 3, "value": "METADATA$FILENAME" },
      { "id": 4, "value": "STAGE_FILENAME" }
    ],
    "answers": [3],
    "explanation": "METADATA$FILENAME is a pseudocolumn used to track the source file of records on a stage.",
    "reference": "https://docs.snowflake.com/en/user-guide/querying-metadata",
    "source": "Test 0",
    "testNumber": 0
  },
  {
    "id": "Test 0_50",
    "number": 750,
    "question": "What kind of table is best suited for low latency and high throughput requirements when processing streaming data?",
    "options": [
      { "id": 1, "value": "Transient Table" },
      { "id": 2, "value": "Dynamic Table" },
      { "id": 3, "value": "External Table" },
      { "id": 4, "value": "Standard Table" }
    ],
    "answers": [2],
    "explanation": "Dynamic Tables provide automated processing of streaming data with low latency.",
    "reference": "https://docs.snowflake.com/en/user-guide/dynamic-tables-intro",
    "source": "Test 0",
    "testNumber": 0
  },
  {
    "id": "Test 0_51",
    "number": 751,
    "question": "What information does the NULL_COUNT statistic provide about your data in Snowflake?",
    "options": [
      { "id": 1, "value": "The number of records with missing primary keys" },
      { "id": 2, "value": "The number of NULL values in a micro-partition for a specific column" },
      { "id": 3, "value": "The number of rows that failed to load" },
      { "id": 4, "value": "The number of dropped columns in a table" }
    ],
    "answers": [2],
    "explanation": "Snowflake stores NULL_COUNT as metadata for each micro-partition to assist with query pruning.",
    "reference": "https://docs.snowflake.com/en/user-guide/tables-micro-partitions",
    "source": "Test 0",
    "testNumber": 0
  },
  {
    "id": "Test 0_52",
    "number": 752,
    "question": "What is the impact of dropping a column on existing micro-partitions in Snowflake?",
    "options": [
      { "id": 1, "value": "The partitions are immediately rewritten to remove the data" },
      { "id": 2, "value": "Nothing, because micro-partitions are immutable" },
      { "id": 3, "value": "The partitions are compressed further" },
      { "id": 4, "value": "The table metadata is corrupted until a refresh" }
    ],
    "answers": [2],
    "explanation": "Micro-partitions are immutable. Dropping a column is a metadata-only change until the data is naturally cycled out.",
    "reference": "https://docs.snowflake.com/en/user-guide/tables-micro-partitions",
    "source": "Test 0",
    "testNumber": 0
  },
  {
    "id": "Test 0_53",
    "number": 753,
    "question": "The RECURSIVE argument is commonly used with which of the following features?",
    "options": [
      { "id": 1, "value": "Common Table Expressions (CTEs)" },
      { "id": 2, "value": "Stored Procedures" },
      { "id": 3, "value": "Window Functions" },
      { "id": 4, "value": "Materialized Views" }
    ],
    "answers": [1],
    "explanation": "RECURSIVE is used in WITH clauses to create recursive CTEs for hierarchical data.",
    "reference": "https://docs.snowflake.com/en/user-guide/queries-cte",
    "source": "Test 0",
    "testNumber": 0
  },
  {
    "id": "Test 0_54",
    "number": 754,
    "question": "Why would you choose to use UDFs (User Defined Functions) in Snowflake?",
    "options": [
      { "id": 1, "value": "To manage account security and grants" },
      { "id": 2, "value": "To extend SQL with custom logic that can be reused in queries" },
      { "id": 3, "value": "To speed up data ingestion from Snowpipe" },
      { "id": 4, "value": "To create new virtual warehouses" }
    ],
    "answers": [2],
    "explanation": "UDFs allow developers to encapsulate custom logic for use directly inside SQL statements.",
    "reference": "https://docs.snowflake.com/en/developer-guide/udf/udf-overview",
    "source": "Test 0",
    "testNumber": 0
  },
  {
    "id": "Test 0_55",
    "number": 755,
    "question": "Which data types are used to store semi-structured data in Snowflake?",
    "options": [
      { "id": 1, "value": "VARCHAR and NUMBER" },
      { "id": 2, "value": "VARIANT, ARRAY, and OBJECT" },
      { "id": 3, "value": "BLOB and CLOB" },
      { "id": 4, "value": "GEOGRAPHY and GEOMETRY" }
    ],
    "answers": [2],
    "explanation": "VARIANT, ARRAY, and OBJECT are the native semi-structured types in Snowflake.",
    "reference": "https://docs.snowflake.com/en/sql-reference/data-types-semistructured",
    "source": "Test 0",
    "testNumber": 0
  },
  {
    "id": "Test 0_56",
    "number": 756,
    "question": "True or False: It is best practice to define a clustering key on every table.",
    "options": [
      { "id": 1, "value": "True" },
      { "id": 2, "value": "False" }
    ],
    "answers": [2],
    "explanation": "It is not always best practice to define a clustering key on every table. Clustering keys are used to physically group related rows, which can improve query performance by minimizing scanned data. However, they should be chosen carefully based on access patterns; they may be unnecessary for small tables or those with no well-defined access patterns.",
    "reference": "",
    "source": "Test 0",
    "testNumber": 0
  },
  {
    "id": "Test 0_57",
    "number": 757,
    "question": "In which hierarchy is tag inheritance possible?",
    "options": [
      { "id": 1, "value": "Organization >> Account >> Role" },
      { "id": 2, "value": "Account >> User >> Schema" },
      { "id": 3, "value": "Database >> View >> Column" },
      { "id": 4, "value": "Schema >> Table >> Column" }
    ],
    "answers": [4],
    "explanation": "Tag inheritance follows the object hierarchy. A tag assigned to a schema is inherited by all tables and views in that schema, and from there to all columns. The complete path is Organization >> ACCOUNT >> Database >> Schema >> Table >> Column.",
    "reference": "https://docs.snowflake.com/en/user-guide/object-tagging",
    "source": "Test 0",
    "testNumber": 0
  },
  {
    "id": "Test 0_58",
    "number": 758,
    "question": "Which command removes a role from another role or a user in Snowflake?",
    "options": [
      { "id": 1, "value": "ALTER ROLE" },
      { "id": 2, "value": "REVOKE ROLE" },
      { "id": 3, "value": "USE ROLE" },
      { "id": 4, "value": "USE SECONDARY ROLES" }
    ],
    "answers": [2],
    "explanation": "The REVOKE ROLE command is used specifically to remove a role from a user or another role.",
    "reference": "https://docs.snowflake.com/en/sql-reference/sql/revoke-role",
    "source": "Test 0",
    "testNumber": 0
  },
  {
    "id": "Test 0_59",
    "number": 759,
    "question": "Which command is used to start configuring Snowflake for Single Sign-On (SSO)?",
    "options": [
      { "id": 1, "value": "CREATE SESSION POLICY" },
      { "id": 2, "value": "CREATE NETWORK RULE" },
      { "id": 3, "value": "CREATE SECURITY INTEGRATION" },
      { "id": 4, "value": "CREATE PASSWORD POLICY" }
    ],
    "answers": [3],
    "explanation": "To configure federated authentication or Single Sign-On (SSO), you must create a security integration object in Snowflake.",
    "reference": "https://docs.snowflake.com/en/user-guide/admin-security-fed-auth-security-integration",
    "source": "Test 0",
    "testNumber": 0
  },
  {
    "id": "Test 0_60",
    "number": 760,
    "question": "What information does the Query Profile provide?",
    "options": [
      { "id": 1, "value": "Graphical representation of the data model" },
      { "id": 2, "value": "Statistics for each component of the processing plan" },
      { "id": 3, "value": "Detailed information about the database schema" },
      { "id": 4, "value": "Real-time monitoring of the database operations" }
    ],
    "answers": [2],
    "explanation": "The Snowflake query profile provides execution details for a query, including a graphical representation of the processing plan's components and statistics for each individual component and the overall query.",
    "reference": "",
    "source": "Test 0",
    "testNumber": 0
  },
  {
    "id": "Test 0_61",
    "number": 761,
    "question": "What are the primary authentication methods that Snowflake supports for securing REST API interactions? (Choose two.)",
    "options": [
      { "id": 1, "value": "OAuth" },
      { "id": 2, "value": "Key pair authentication" },
      { "id": 3, "value": "Federated authentication" },
      { "id": 4, "value": "Multi-Factor Authentication (MFA)" },
      { "id": 5, "value": "Username and password authentication" }
    ],
    "answers": [1, 5],
    "explanation": "Snowflake supports basic authentication (username and password) in the API request header (Base64 encoded) and also supports OAuth 2.0 for REST API interactions.",
    "reference": "https://docs.snowflake.com/en/user-guide/api-authentication",
    "source": "Test 0",
    "testNumber": 0
  },
  {
    "id": "Test 0_62",
    "number": 762,
    "question": "By default, which role has access to the SYSTEM$GLOBAL_ACCOUNT_SET_PARAMETER function?",
    "options": [
      { "id": 1, "value": "ACCOUNTADMIN" },
      { "id": 2, "value": "SECURITYADMIN" },
      { "id": 3, "value": "SYSADMIN" },
      { "id": 4, "value": "ORGADMIN" }
    ],
    "answers": [4],
    "explanation": "This function enables replication and failover features for a specified account in an organization. By default, only users with the ORGADMIN role have the privilege to call this SQL function.",
    "reference": "https://docs.snowflake.com/en/sql-reference/functions/system_global_account_set_parameter",
    "source": "Test 0",
    "testNumber": 0
  },
  {
    "id": "Test 0_63",
    "number": 763,
    "question": "True or False: Snowflake's Global Services Layer gathers and maintains statistics on all columns in all micro-partitions.",
    "options": [
      { "id": 1, "value": "True" },
      { "id": 2, "value": "False" }
    ],
    "answers": [1],
    "explanation": "Snowflake automatically collects metadata and statistics (such as min/max values, counts of distinct values, and NULL counts) for all columns across all micro-partitions to optimize query performance. This process is handled continuously in the background by the Global Services Layer.",
    "reference": "",
    "source": "Test 0",
    "testNumber": 0
  },
  {
    "id": "Test 0_64",
    "number": 764,
    "question": "Which system-defined Snowflake role has permission to rename an account and specify whether the original URL can be used to access the renamed account?",
    "options": [
      { "id": 1, "value": "ACCOUNTADMIN" },
      { "id": 2, "value": "SECURITYADMIN" },
      { "id": 3, "value": "SYSADMIN" },
      { "id": 4, "value": "ORGADMIN" }
    ],
    "answers": [4],
    "explanation": "The ORGADMIN role allows organization administrators to modify core characteristics of an account, such as renaming it using the ALTER ACCOUNT command with the optional SAVE_OLD_URL parameter.",
    "reference": "https://docs.snowflake.com/en/sql-reference/sql/alter-account",
    "source": "Test 0",
    "testNumber": 0
  },
  {
    "id": "Test 0_65",
    "number": 765,
    "question": "How can a user get the MOST detailed information about individual table storage details in Snowflake?",
    "options": [
      { "id": 1, "value": "SHOW TABLES command" },
      { "id": 2, "value": "SHOW EXTERNAL TABLES command" },
      { "id": 3, "value": "TABLES view" },
      { "id": 4, "value": "TABLE_STORAGE_METRICS view" }
    ],
    "answers": [4],
    "explanation": "The TABLE_STORAGE_METRICS view in the ACCOUNT_USAGE schema provides the most comprehensive and detailed information regarding table storage.",
    "reference": "https://docs.snowflake.com/en/sql-reference/account-usage/table_storage_metrics",
    "source": "Test 0",
    "testNumber": 0
  },
  {
    "id": "Test 0_66",
    "number": 766,
    "question": "Which file formats support unloading semi-structured data? (Choose two.)",
    "options": [
      { "id": 1, "value": "Avro" },
      { "id": 2, "value": "JSON" },
      { "id": 3, "value": "ORC" },
      { "id": 4, "value": "Parquet" },
      { "id": 5, "value": "XML" }
    ],
    "answers": [2, 4],
    "explanation": "Snowflake supports unloading semi-structured data into the JSON and Parquet file formats.",
    "reference": "https://docs.snowflake.com/en/user-guide/data-unload-prepare",
    "source": "Test 0",
    "testNumber": 0
  },
  {
    "id": "Test 0_67",
    "number": 767,
    "question": "What type of function returns one value for each invocation?",
    "options": [
      { "id": 1, "value": "Aggregate" },
      { "id": 2, "value": "Scalar" },
      { "id": 3, "value": "Table" },
      { "id": 4, "value": "Window" }
    ],
    "answers": [2],
    "explanation": "A scalar function returns exactly one value for each invocation (typically one value per row). Aggregate functions differ by returning one value for a group of rows.",
    "reference": "https://docs.snowflake.com/en/sql-reference/functions",
    "source": "Test 0",
    "testNumber": 0
  },
  {
    "id": "Test 0_68",
    "number": 768,
    "question": "What is the purpose of collecting statistics on data in Snowflake?",
    "options": [
      { "id": 1, "value": "To identify data storage order correlations" },
      { "id": 2, "value": "To enable efficient pruning based on query filters" },
      { "id": 3, "value": "To reduce the total number of micro-partitions in a table" },
      { "id": 4, "value": "To optimize query performance by reading all data in a table" }
    ],
    "answers": [2],
    "explanation": "Collecting metadata and statistics allows the query optimizer to perform efficient partition pruning, skipping micro-partitions that don't match query filters.",
    "reference": "",
    "source": "Test 0",
    "testNumber": 0
  },
  {
    "id": "Test 0_69",
    "number": 769,
    "question": "Which function should be used to authorize users to access rows in a base table when using secure views with Secure Data Sharing?",
    "options": [
      { "id": 1, "value": "CURRENT_ACCOUNT()" },
      { "id": 2, "value": "CURRENT_ROLE()" },
      { "id": 3, "value": "CURRENT_SESSION()" },
      { "id": 4, "value": "CURRENT_USER()" }
    ],
    "answers": [1],
    "explanation": "For secure views used in Data Sharing, CURRENT_ACCOUNT() should be used for row-level security. Functions like CURRENT_USER() or CURRENT_ROLE() return NULL for shared accounts to maintain security.",
    "reference": "https://docs.snowflake.com/en/user-guide/views-secure#secure-views-and-data-sharing",
    "source": "Test 0",
    "testNumber": 0
  },
  {
    "id": "Test 0_70",
    "number": 770,
    "question": "Given the statement template below, which database objects can be added to a share? (Choose two.) GRANT [privilege] ON [object] [object_name] TO SHARE [share_name];",
    "options": [
      { "id": 1, "value": "Secure functions" },
      { "id": 2, "value": "Stored procedures" },
      { "id": 3, "value": "Streams" },
      { "id": 4, "value": "Tables" },
      { "id": 5, "value": "Tasks" }
    ],
    "answers": [1, 4],
    "explanation": "Objects that can be shared include Databases, Tables, Secure Views, Secure Materialized Views, and Secure UDFs (functions).",
    "reference": "",
    "source": "Test 0",
    "testNumber": 0
  },
  {
    "id": "Test 0_71",
    "number": 771,
    "question": "Which security feature is used to connect or log in to a Snowflake account?",
    "options": [
      { "id": 1, "value": "Network policy" },
      { "id": 2, "value": "SCIM" },
      { "id": 3, "value": "Role-Based Access Control (RBAC)" },
      { "id": 4, "value": "Key pair authentication" }
    ],
    "answers": [4],
    "explanation": "Key pair authentication is a supported method for connecting and logging into a Snowflake account, particularly for automated tools and connectors.",
    "reference": "https://docs.snowflake.com/en/user-guide/key-pair-auth",
    "source": "Test 0",
    "testNumber": 0
  },
  {
    "id": "Test 1_1",
    "number": 1,
    "question": "**Snowflake** Administrators should utilize resource monitors to help control costs and avoid unexpected credit usage. Which of the following actions can **Snowflake**‘s **Resource Monitor** triggers initiate automatically? (Check all that apply)",
    "options": [
      {
        "id": 1,
        "value": "Roll over query executions to under utilized warehouses"
      },
      {
        "id": 2,
        "value": "Impose limits on the number of credits that warehouses consume each month"
      },
      {
        "id": 3,
        "value": "Trigger alert notifications for high usage"
      },
      {
        "id": 4,
        "value": "Trigger **Warehouse** suspension for high usage"
      }
    ],
    "answers": [
      2,
      3,
      4
    ],
    "explanation": "Resource Monitor details for Snowflake:\n\n- Resource monitors can be set at **account** or **warehouse** level\n- They provide notifications when credit usage reaches thresholds\n- Can automatically **suspend** or **suspend immediately** warehouses\n\nSee the documentation for more details.",
    "reference": "https://docs.snowflake.com/en/user-guide/resource-monitors.html",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_2",
    "number": 2,
    "question": "**Snowflake** is what kind of offering?",
    "options": [
      {
        "id": 1,
        "value": "On Premise Application"
      },
      {
        "id": 2,
        "value": "Software as a service (SaaS)"
      },
      {
        "id": 3,
        "value": "Platform as a service (PaaS)"
      },
      {
        "id": 4,
        "value": "Infrastructure as a service (IaaS)"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "**Snowflake** is an analytic data **Warehouse** provided as Software-as-a-Service (SaaS). **Snowflake** provides a data **Warehouse** that is faster, easier to use, and far more flexible than traditional data **Warehouse** offerings.**Snowflake**s data **Warehouse** is not built on an existing **Database** or big data  software platform such as Hadoop. The **Snowflake** data **Warehouse** uses a new SQL **Database** engine with a unique architecture designed for the cloud. To the user, **Snowflake** has many similarities to other enterprise data warehouses, but also has additional functionality and unique capabilities.",
    "reference": "https://docs.snowflake.com/en/user-guide/intro-key-concepts.html",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_3",
    "number": 3,
    "question": "**Snowflake** account hosted on AWS cannot load data from a file that is staged on GCP or Azure",
    "options": [
      {
        "id": 1,
        "value": "TRUE"
      },
      {
        "id": 2,
        "value": "FALSE"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "Irrespective of which ever underlying cloud service provider is used for **Snowflake**, there is a provision to create an external **Stage** that can load data in **Snowflake** from AWS, Azure or Google Cloud.",
    "reference": "",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_49",
    "number": 49,
    "question": "Data from **Fail-safe** can only be accessed / restored by **Snowflake** Employees",
    "options": [
      {
        "id": 1,
        "value": "TRUE"
      },
      {
        "id": 2,
        "value": "FALSE"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "**Fail-safe** is not provided as a means for accessing historical data after the **Time Travel** retention period has ended. It is for use only by **Snowflake** to recover data that may have been lost or damaged due to extreme operational failures.",
    "reference": "https://docs.snowflake.com/en/user-guide/data-failsafe.html",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 2_43",
    "number": 43,
    "question": "Fail Safe period starts right after **Time Travel** retention period ends",
    "options": [
      {
        "id": 1,
        "value": "FALSE"
      },
      {
        "id": 2,
        "value": "TRUE"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "**Fail-safe** provides a (non-configurable) 7-day period during which historical data is recoverable by **Snowflake**. This period starts immediately after the **Time Travel** retention period ends. ",
    "reference": "https://docs.snowflake.com/en/user-guide/data-failsafe.html",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 1_6",
    "number": 6,
    "question": "**Snowflake** Instances in different regions require separate accounts",
    "options": [
      {
        "id": 1,
        "value": "FALSE"
      },
      {
        "id": 2,
        "value": "TRUE"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "Same account cannot be hosted on multiple regions. While setting up **Snowflake** account we get an option to select only one region.",
    "reference": "",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 10_27",
    "number": 27,
    "question": "**Time Travel** in **Snowflake** is useful for which of the following tasks",
    "options": [
      {
        "id": 1,
        "value": "Analyzing data usage/manipulation over specified periods of time"
      },
      {
        "id": 2,
        "value": "Restoring data-related objects (tables, schemas, and databases) that might have been accidentally or intentionally deleted"
      },
      {
        "id": 3,
        "value": "Restoring data in event of a system failure or other catastrophic event, e.g. a hardware failure or security breach."
      },
      {
        "id": 4,
        "value": "Duplicating and backing up data from key points in the past"
      }
    ],
    "answers": [
      1,
      2,
      4
    ],
    "explanation": "**Snowflake** **Time Travel** enables accessing historical data (i.e. data that has been changed or deleted) at any point within a defined period. It serves as a powerful tool for performing the following tasks:\n\n- Restoring data-related objects (tables, schemas, and databases) that might have been accidentally or intentionally deleted.\n- Duplicating and backing up data from key points in the past.\n- Analyzing data usage/manipulation over specified periods of time.",
    "reference": "https://docs.snowflake.com/en/user-guide/data-time-travel.html",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 1_18",
    "number": 18,
    "question": "How many number of shares can be created in a **Snowflake** Account?",
    "options": [
      {
        "id": 1,
        "value": "10"
      },
      {
        "id": 2,
        "value": "Unlimited"
      },
      {
        "id": 3,
        "value": "50"
      },
      {
        "id": 4,
        "value": "100"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "**Snowflake** does not place any hard limits on the number of shares you can create or the number of accounts you can add to a share.",
    "reference": "https://docs.snowflake.com/en/user-guide/data-sharing-intro.html",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_9",
    "number": 9,
    "question": "Which command is used to download the data from **Snowflake** **Stage**",
    "options": [
      {
        "id": 1,
        "value": "DOWNLOAD"
      },
      {
        "id": 2,
        "value": "`PUT`"
      },
      {
        "id": 3,
        "value": "`GET`"
      },
      {
        "id": 4,
        "value": "RETRIEVE"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "Get command is used to download data files from one of the following **Snowflake** stages to a local directory/folder on a client machine:Named internal **Stage**.Internal **Stage** for a specified **Table**.Internal **Stage** for the current user.",
    "reference": "https://docs.snowflake.com/en/sql-reference/sql/get.html",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_10",
    "number": 10,
    "question": "If you find a data-related tool that is not listed as part of the **Snowflake** ecosystem, what industry standard options could you check for as a way to easily connect to **Snowflake**?",
    "options": [
      {
        "id": 1,
        "value": "Check to see if the tool can connect to other solutions via ODBC"
      },
      {
        "id": 2,
        "value": "Check to see if the tool can connect to other solutions via JDBC"
      },
      {
        "id": 3,
        "value": "Check to see if you can develop a driver and put it on Github"
      },
      {
        "id": 4,
        "value": "Check to see if there is a petition in the community to create a driver"
      }
    ],
    "answers": [
      1,
      2
    ],
    "explanation": "**Snowflake** provides ODBC and JDBC drivers to connect, and hence any tools having a standard support for ODBC / JDBC can connect to **Snowflake**, without a need of explicit connectors.",
    "reference": "",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_11",
    "number": 11,
    "question": "External Stages require a cloud storage provider",
    "options": [
      {
        "id": 1,
        "value": "TRUE"
      },
      {
        "id": 2,
        "value": "FALSE"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "External stages are created where in they refer to a path on either AWS S3, Azure Blob Storage, or Google Cloud Storage. Hence they need an external storage provider which is either AWS, Azure or GCP.",
    "reference": "",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_12",
    "number": 12,
    "question": "A CAST command will force a value to be output as a certain datatype. Which of the following symbols will result in the “castcolumn“ being output using the VARCHAR datatype?",
    "options": [
      {
        "id": 1,
        "value": "`SELECT` VARCHAR(castcolumn)"
      },
      {
        "id": 2,
        "value": "`SELECT` castcolumn as VARCHAR"
      },
      {
        "id": 3,
        "value": "`SELECT` castcolumn||VARCHAR"
      },
      {
        "id": 4,
        "value": "`SELECT` castcolumn::VARCHAR"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "Just execute the options and you will get the required answer",
    "reference": "",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_13",
    "number": 13,
    "question": "Which SQL statements can work on a cloned **Table**?",
    "options": [
      {
        "id": 1,
        "value": "`SELECT` command"
      },
      {
        "id": 2,
        "value": "`SHOW` command"
      },
      {
        "id": 3,
        "value": "All of the above"
      },
      {
        "id": 4,
        "value": "`DROP` **Table** command"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "Clone object is a separate object, on which all types of **Database Table** operation can be performed. Just that once there are changes made to the clone it start incurring storage cost, which is not the case when it is first cloned, which is why it is called zero copy cloning.",
    "reference": "",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_14",
    "number": 14,
    "question": "Which of the following **Snowflake** Editions provides automatic encryption of all data?",
    "options": [
      {
        "id": 1,
        "value": "All Editions provide automatic encryption of all data"
      },
      {
        "id": 2,
        "value": "Standard"
      },
      {
        "id": 3,
        "value": "Business Critical"
      },
      {
        "id": 4,
        "value": "Enterprise"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "Refer to link",
    "reference": "https://docs.snowflake.com/en/user-guide/intro-editions.html#virtual-private-snowflake-vps",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_15",
    "number": 15,
    "question": "Scaling in is a manual process (e.g. Max Clusters to min clusters)",
    "options": [
      {
        "id": 1,
        "value": "TRUE"
      },
      {
        "id": 2,
        "value": "FALSE"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "Scale Out & Scale in is the change in the number of clusters serving the query workload on **Snowflake**. The process of scaling out / in is an automated process, and based on the scaling policy (Economy / Standard) that is defined and the workload on the **Warehouse**,  this change in the number of cluster happens automatically.",
    "reference": "",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_16",
    "number": 16,
    "question": "Which of the following are **Snowflake** **View** types?",
    "options": [
      {
        "id": 1,
        "value": "External"
      },
      {
        "id": 2,
        "value": "Permanent"
      },
      {
        "id": 3,
        "value": "Secure"
      },
      {
        "id": 4,
        "value": "Materialized"
      },
      {
        "id": 5,
        "value": "Standard"
      },
      {
        "id": 6,
        "value": "Transient"
      }
    ],
    "answers": [
      3,
      4,
      5
    ],
    "explanation": "Refer section for details about **Snowflake** views –https://docs.snowflake.com/en/user-guide/views-introduction.html",
    "reference": "https://docs.snowflake.com/en/user-guide/views-introduction.html",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_19",
    "number": 19,
    "question": "How many number of consumer accounts can be added to a single share?",
    "options": [
      {
        "id": 1,
        "value": "10"
      },
      {
        "id": 2,
        "value": "50"
      },
      {
        "id": 3,
        "value": "100"
      },
      {
        "id": 4,
        "value": "Unlimited"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "**Snowflake** does not place any hard limits on the number of shares you can create or the number of accounts you can add to a share.Refer Link for details –https://docs.snowflake.com/en/user-guide/data-sharing-intro.html",
    "reference": "https://docs.snowflake.com/en/user-guide/data-sharing-intro.html",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 2_24",
    "number": 24,
    "question": "**Snowflake** encrypts all customer data by default, using the latest security standards, and charges customer for this encryption",
    "options": [
      {
        "id": 1,
        "value": "TRUE"
      },
      {
        "id": 2,
        "value": "FALSE"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "**Snowflake** encrypts all customer data by default, using the latest security standards, at no additional cost. ",
    "reference": "https://docs.snowflake.com/en/user-guide/security-encryption.html#encryption-key-rotation",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 4_11",
    "number": 11,
    "question": "A **Warehouse** was started and it was up and running for 62 seconds. For how many seconds will the **Warehouse** be billed for?",
    "options": [
      {
        "id": 1,
        "value": "60 seconds"
      },
      {
        "id": 2,
        "value": "62 seconds"
      },
      {
        "id": 3,
        "value": "120 seconds"
      },
      {
        "id": 4,
        "value": "70 seconds"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "**Snowflake** utilizes per-second billing (with a 60-second minimum each time the **Warehouse** starts)",
    "reference": "https://docs.snowflake.com/en/user-guide/warehouses-overview.html",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 1_20",
    "number": 20,
    "question": "When a data is shared with an existing **Snowflake** customer, the compute is charged to",
    "options": [
      {
        "id": 1,
        "value": "Provider"
      },
      {
        "id": 2,
        "value": "Consumer"
      },
      {
        "id": 3,
        "value": "No Charges applied"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "Since the consumer is also a **Snowflake** customer they will use there own compute resources to execute the query on shared **Database**, and hence the charges will be applied to the consumer only.",
    "reference": "",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_21",
    "number": 21,
    "question": "When a data is shared with an non **Snowflake** customer, the compute is charged to",
    "options": [
      {
        "id": 1,
        "value": "Provider"
      },
      {
        "id": 2,
        "value": "Consumer"
      },
      {
        "id": 3,
        "value": "No Charges applied"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "Since the consumer is not a **Snowflake** customer, the provider himself needs to create a reader account for the consumer, and that reader account uses the **Warehouse** provided by provider only to execute the queries.",
    "reference": "",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_22",
    "number": 22,
    "question": "Which of the below is not a role available when **Snowflake** account is created initially",
    "options": [
      {
        "id": 1,
        "value": "`ACCOUNTADMIN`"
      },
      {
        "id": 2,
        "value": "`SYSADMIN`"
      },
      {
        "id": 3,
        "value": "`USERADMIN`"
      },
      {
        "id": 4,
        "value": "Developer"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "There is no default developer role available as such when **Snowflake** account is created. Only roles available are `PUBLIC`, `USERADMIN`, `SYSADMIN`, `SECURITYADMIN`, `ACCOUNTADMIN`",
    "reference": "",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_23",
    "number": 23,
    "question": "In the **Snowflake** container hierarchy, what container is represented as a URL (for example:https://AB12345.snowflakecomputing.com)?",
    "options": [
      {
        "id": 1,
        "value": "**Database**"
      },
      {
        "id": 2,
        "value": "**Schema**"
      },
      {
        "id": 3,
        "value": "Role"
      },
      {
        "id": 4,
        "value": "Account"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "The **Snowflake** URL points to the **Snowflake** account, in which a user can login and access **Database**, **Schema** and role",
    "reference": "",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_24",
    "number": 24,
    "question": "MFA can be used for connecting to **Snowflake** via the **Snowflake** JDBC driver",
    "options": [
      {
        "id": 1,
        "value": "TRUE"
      },
      {
        "id": 2,
        "value": "FALSE"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "Details available at link –https://docs.snowflake.com/en/user-guide/security-mfa.html#using-mfa-with-jdbc",
    "reference": "https://docs.snowflake.com/en/user-guide/security-mfa.html#using-mfa-with-jdbc",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_25",
    "number": 25,
    "question": "Which of the following **Snowflake** Editions automatically store data in an encrypted state?",
    "options": [
      {
        "id": 1,
        "value": "Standard"
      },
      {
        "id": 2,
        "value": "Enterprise"
      },
      {
        "id": 3,
        "value": "Business Critical"
      }
    ],
    "answers": [
      1,
      2,
      3
    ],
    "explanation": "**Snowflake** stores data in encrypted format in all editions.",
    "reference": "",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_26",
    "number": 26,
    "question": "What are the names of the three **Snowflake** Editions offered when signing up for a trial account?",
    "options": [
      {
        "id": 1,
        "value": "Free-Tier Basic"
      },
      {
        "id": 2,
        "value": "Standard"
      },
      {
        "id": 3,
        "value": "Ultra"
      },
      {
        "id": 4,
        "value": "Enterprise"
      },
      {
        "id": 5,
        "value": "Business Critical"
      }
    ],
    "answers": [
      2,
      4,
      5
    ],
    "explanation": "There is no option like Free Tier Basic or Ultra available for **Snowflake** editions.",
    "reference": "",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_27",
    "number": 27,
    "question": "Tri-secret requires that customers manage their own keys",
    "options": [
      {
        "id": 1,
        "value": "TRUE"
      },
      {
        "id": 2,
        "value": "FALSE"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "Details for tri-secret secure available at following link –https://docs.snowflake.com/en/user-guide/security-encryption.html#tri-secret-secure-and-customer-managed-keys",
    "reference": "https://docs.snowflake.com/en/user-guide/security-encryption.html#tri-secret-secure-and-customer-managed-keys",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 4_12",
    "number": 12,
    "question": "A **Warehouse** was started and it was up and running for 40 seconds. For how many seconds will the **Warehouse** be billed for?",
    "options": [
      {
        "id": 1,
        "value": "No charge would be applied as it was up for less than 1 minute"
      },
      {
        "id": 2,
        "value": "40 seconds"
      },
      {
        "id": 3,
        "value": "60 seconds"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "**Snowflake** utilizes per-second billing (with a 60-second minimum each time the **Warehouse** starts)",
    "reference": "https://docs.snowflake.com/en/user-guide/warehouses-overview.html",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 4_53",
    "number": 53,
    "question": "A **Warehouse** can be started at any time, excluding the initial creation time",
    "options": [
      {
        "id": 1,
        "value": "FALSE"
      },
      {
        "id": 2,
        "value": "TRUE"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "A **Warehouse** can be started at any time, including on initial creation.",
    "reference": "https://docs.snowflake.com/en/user-guide/warehouses-tasks.html",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 1_30",
    "number": 30,
    "question": "Query execution is performed by which layers of **Snowflake** architecture",
    "options": [
      {
        "id": 1,
        "value": "Storage Layer"
      },
      {
        "id": 2,
        "value": "Cloud Services Layer"
      },
      {
        "id": 3,
        "value": "Query Processing Layer"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "Correct",
    "reference": "",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 4_19",
    "number": 19,
    "question": "Which of the following stages cannot be altered or dropped?",
    "options": [
      {
        "id": 1,
        "value": "User"
      },
      {
        "id": 2,
        "value": "Table"
      },
      {
        "id": 3,
        "value": "Named External Stage"
      },
      {
        "id": 4,
        "value": "Named Internal Stage"
      }
    ],
    "answers": [
      1,
      2
    ],
    "explanation": "A user **Stage** is allocated to each user for storing files. This **Stage** type is designed to store files that are staged and managed by a single user but can be loaded into multiple tables. User stages cannot be altered or dropped. A **Table** **Stage** is available for each **Table** created in **Snowflake**. This **Stage** type is designed to store files that are staged and managed by one or more users but only loaded into a single **Table**. **Table** stages cannot be altered or dropped. Refer Link –https:\n\n- //docs.snowflake.com/en/user-guide/data-load-overview.html.\n- Refer Section “Internal Stages“",
    "reference": "https://docs.snowflake.com/en/user-guide/data-load-overview.html",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 1_32",
    "number": 32,
    "question": "To configure an External **Stage** you need to define the **Stage** object in **Snowflake**. You also need two additional components. What are they?",
    "options": [
      {
        "id": 1,
        "value": "**Stage** Admin Password"
      },
      {
        "id": 2,
        "value": "Cloud storage location (e.g. S3 Bucket)"
      },
      {
        "id": 3,
        "value": "**Stage** Admin Username"
      },
      {
        "id": 4,
        "value": "Cloud access credentials (e.g. IAM User and Policy)"
      },
      {
        "id": 5,
        "value": "**Snowflake** External **Stage** Password Authentication Certificate"
      }
    ],
    "answers": [
      2,
      4
    ],
    "explanation": "Below is sample command for creating an external **Stage** –create or replace **Stage** my_s3_stage url=‘s3://mybucket/encrypted_files/‘credentials=(aws_key_id=‘1a2b3c‘ aws_secret_key=‘4x5y6z‘)encryption=(master_key = ‘eSxX0jzYfIamtnBKOEOwq80Au6NbSgPH5r4BDDwOaO8=‘)file_format = my_csv_format;",
    "reference": "",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_33",
    "number": 33,
    "question": "Out of below four options, which options require a running **Warehouse** when retrieving data from them?",
    "options": [
      {
        "id": 1,
        "value": "Results Cache"
      },
      {
        "id": 2,
        "value": "**Local Disk Cache**"
      },
      {
        "id": 3,
        "value": "**Warehouse** Cache"
      },
      {
        "id": 4,
        "value": "Metadata Cache"
      }
    ],
    "answers": [
      2,
      3
    ],
    "explanation": "Metadata and **Result Cache** do not require a running **Warehouse** as the results are fetched from services layer itself, and hence the compute layer is not required.",
    "reference": "",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_34",
    "number": 34,
    "question": "Check all true statements about **Fail-safe**:",
    "options": [
      {
        "id": 1,
        "value": "The data stored as part of **Fail-safe** is part of storage costs charged to customers"
      },
      {
        "id": 2,
        "value": "**Fail-safe** is not available for tables that have **Time Travel**."
      },
      {
        "id": 3,
        "value": "**Fail-safe** is a reliable way to create Dev/Test/QA and other environments"
      },
      {
        "id": 4,
        "value": "Only a **Snowflake** employee can recover data from **Fail-safe** storage"
      }
    ],
    "answers": [
      1,
      4
    ],
    "explanation": "Refer Fail Safe section of **Snowflake** documentation –https://docs.snowflake.com/en/user-guide/data-failsafe.html",
    "reference": "https://docs.snowflake.com/en/user-guide/data-failsafe.html",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_35",
    "number": 35,
    "question": "With **Snowflake**, the customer needs to perform hardware maintenance, upgrades or regular patches",
    "options": [
      {
        "id": 1,
        "value": "TRUE"
      },
      {
        "id": 2,
        "value": "FALSE"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "**Snowflake** is a Saas (Software as a service) solution, and customer do not neet to worry about an hardware maintenance or upgrades",
    "reference": "",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_36",
    "number": 36,
    "question": "For databases, schemas, and tables, a clone does not contribute to the overall data storage until operations are performed on the clone that modify existing data or add new data",
    "options": [
      {
        "id": 1,
        "value": "TRUE"
      },
      {
        "id": 2,
        "value": "FALSE"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "Until the clone object is modified it refers to the same underlying partitions as that of orignial object and hence no additional storage is needed for it.",
    "reference": "",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_37",
    "number": 37,
    "question": "True or false: The Query Profiler **View** is only available for completed queries.",
    "options": [
      {
        "id": 1,
        "value": "FALSE"
      },
      {
        "id": 2,
        "value": "TRUE"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "This can be tried out. Execute one query and while the query is executing you can go to query history tab and click on query_id to get the query profiler **View** even of the executing query.",
    "reference": "",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_38",
    "number": 38,
    "question": "Which of the below is role is automatically granted to every user and role in the account",
    "options": [
      {
        "id": 1,
        "value": "`SYSADMIN`"
      },
      {
        "id": 2,
        "value": "Developer"
      },
      {
        "id": 3,
        "value": "`USERADMIN`"
      },
      {
        "id": 4,
        "value": "`PUBLIC`"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "`PUBLIC` is a default role for any new user that is created in **Snowflake**.",
    "reference": "",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_39",
    "number": 39,
    "question": "With **Time Travel**,  a **Snowflake** administrator can, analyze data manipulation over specified periods of time",
    "options": [
      {
        "id": 1,
        "value": "TRUE"
      },
      {
        "id": 2,
        "value": "FALSE"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "**Snowflake** **Time Travel** enables accessing historical data (i.e. data that has been changed or deleted) at any point within a defined period. It serves as a powerful tool for performing the following tasks:Restoring data-related objects (tables, schemas, and databases) that might have been accidentally or intentionally deleted.Duplicating and backing up data from key points in the past.Analyzing data manipulation over specified periods of time.",
    "reference": "",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_40",
    "number": 40,
    "question": "Scaling up is a manual process. (e.g. Small to Medium)",
    "options": [
      {
        "id": 1,
        "value": "FALSE"
      },
      {
        "id": 2,
        "value": "TRUE"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "Scale up and Scale down refers to changing the size of the **Warehouse**. The **Warehouse** size is changed to deal with the complexity of the queries being executed on the **Warehouse**. **Snowflake** do not provide any out of the box capability to increase or decrease the **Warehouse** size based on the type of queries, and hence it has to be done either manually through **Snowflake** Web UI, or by writing a command / script to manage the **Warehouse** sizes as per the workload.",
    "reference": "",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_41",
    "number": 41,
    "question": "True or false: **Snowflake** caches are automatically invalidated if the underlying data changes.",
    "options": [
      {
        "id": 1,
        "value": "FALSE"
      },
      {
        "id": 2,
        "value": "TRUE"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "This is true because if underlying data changes then the cache gets invalidated to ensure that the query returns the latest and most updated data always.",
    "reference": "",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_42",
    "number": 42,
    "question": "If a **Table** is cloned with `COPY` GRANTS option specified, then the clone object inherits any explicit access privileges granted on the original **Table**, but does not inherit any future grants defined for the **Table** in the **Schema**",
    "options": [
      {
        "id": 1,
        "value": "FALSE"
      },
      {
        "id": 2,
        "value": "TRUE"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "This can be tried out, by executing a create clone statement with `COPY` `GRANT` option.  When the statement is executed you can see that the clone **Table** will also have same access privilege as that of original object, other than the future grants. Future grants will need to be explicitly specified to the clone object.",
    "reference": "",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_43",
    "number": 43,
    "question": "What is the maximum number of consumer accounts that can be added to a Share object?",
    "options": [
      {
        "id": 1,
        "value": "One"
      },
      {
        "id": 2,
        "value": "Unlimited"
      },
      {
        "id": 3,
        "value": "100"
      },
      {
        "id": 4,
        "value": "10"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "There is a soft limit of 20 consumer accounts, but as such any number of consumer accounts can be added.",
    "reference": "",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_44",
    "number": 44,
    "question": "Data can be shared READ-ONLY across **Snowflake** accounts and Shared Data can also be cloned",
    "options": [
      {
        "id": 1,
        "value": "FALSE"
      },
      {
        "id": 2,
        "value": "TRUE"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "A shared data cannot be cloned by the consumer. It can only be queried.",
    "reference": "",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_45",
    "number": 45,
    "question": "**Snowflake** compute costs depend on which of the following?",
    "options": [
      {
        "id": 1,
        "value": "The number of rows returned in queries."
      },
      {
        "id": 2,
        "value": "The amount of time warehouses have run."
      },
      {
        "id": 3,
        "value": "The sizes of running warehouses."
      },
      {
        "id": 4,
        "value": "The total number of warehouses in the account"
      }
    ],
    "answers": [
      2,
      3
    ],
    "explanation": "**Snowflake** Compute cost depends only on the size of the **Warehouse**, number of clusters that are running and for the amount of time the **Warehouse** was up and running (i.e. not in suspended state). It doesnt matter how many queries are getting executed or total number of warehouses in the account.",
    "reference": "",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 2_18",
    "number": 18,
    "question": "After how many days account and **Table** master keys are automatically rotated by **Snowflake**?",
    "options": [
      {
        "id": 1,
        "value": "60"
      },
      {
        "id": 2,
        "value": "45"
      },
      {
        "id": 3,
        "value": "90"
      },
      {
        "id": 4,
        "value": "30"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "Account and **Table** master keys are automatically rotated by **Snowflake** when they are more than 30 days old. Active keys are retired, and new keys are created. ",
    "reference": "https://docs.snowflake.com/en/user-guide/security-encryption.html#encryption-key-rotation",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 2_4",
    "number": 4,
    "question": "When a **Table** which has time traveled enabled is dropped, and if a **Table** with same name is created after that, what happens?",
    "options": [
      {
        "id": 1,
        "value": "The **Table** with same name cannot be created till the time **Time Travel** retention period of dropped object is over"
      },
      {
        "id": 2,
        "value": "The **Table** with same name cannot be created till the time **Time Travel** retention period and fail safe period of dropped object is over"
      },
      {
        "id": 3,
        "value": "It restores the previous dropped version of the **Table**"
      },
      {
        "id": 4,
        "value": "It creates a new version of the **Table**"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "After dropping an object, creating an object with the same name does not restore the object. Instead, it creates a new version of the object. The original, dropped version is still available and can be restored. Restoring a dropped object restores the object in place (i.e. it does not create a new object). ",
    "reference": "https://docs.snowflake.com/en/user-guide/data-time-travel.html#data-retention-period",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 1_4",
    "number": 4,
    "question": "Which of the below two stages are automatically created and need not be configured explicitly by the user",
    "options": [
      {
        "id": 1,
        "value": "User Stage"
      },
      {
        "id": 2,
        "value": "Role Stage"
      },
      {
        "id": 3,
        "value": "S3 Stage"
      },
      {
        "id": 4,
        "value": "Internal Stage"
      },
      {
        "id": 5,
        "value": "Table Stage"
      },
      {
        "id": 6,
        "value": "External Stage"
      }
    ],
    "answers": [
      1,
      5
    ],
    "explanation": "By default, each user and **Table** in **Snowflake** is automatically allocated an internal **Stage** for staging data files to be loaded. In addition, you can.",
    "reference": "https://docs.snowflake.com/en/user-guide/data-load-local-file-system-create-stage.html",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 2_45",
    "number": 45,
    "question": "Federated authentication in **Snowflake** is compliant with SAML2.0",
    "options": [
      {
        "id": 1,
        "value": "FALSE"
      },
      {
        "id": 2,
        "value": "TRUE"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "Federated authentication enables your users to connect to **Snowflake** using secure SSO (single sign-on). With SSO enabled, your users authenticate through an external, SAML 2.0-compliant identity provider (IdP). ",
    "reference": "https://docs.snowflake.com/en/user-guide/admin-security-fed-auth.html#federated-authentication-sso",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 1_50",
    "number": 50,
    "question": "Cloud storage providers must be linked to internal **Stage** objects",
    "options": [
      {
        "id": 1,
        "value": "TRUE"
      },
      {
        "id": 2,
        "value": "FALSE"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "Cloud storage providers must be linked to external **Stage** objects. For internal **Stage**, there is no need to explicitly specify any cloud storage provider like AWS, Azure, GCP.",
    "reference": "",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 2_29",
    "number": 29,
    "question": "select * from my_table at(offset => -60*5) . This statement will return which period of historical data for the **Table**?",
    "options": [
      {
        "id": 1,
        "value": "60 minutes ago"
      },
      {
        "id": 2,
        "value": "10 minutes ago"
      },
      {
        "id": 3,
        "value": "5 hours ago"
      },
      {
        "id": 4,
        "value": "5 minutes ago"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "Here the 60 refers to seconds, and hence 60*5 = 300 seconds which is 5 minutes. ",
    "reference": "https://docs.snowflake.com/en/user-guide/data-time-travel.html#data-retention-period",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 1_52",
    "number": 52,
    "question": "The Cloning feature in **Snowflake** requires less storage because",
    "options": [
      {
        "id": 1,
        "value": "The cloned data is constantly updated to synchronize with original **Table** data"
      },
      {
        "id": 2,
        "value": "Only Metadata is copied; no physical data is copied"
      },
      {
        "id": 3,
        "value": "Data is replicated to ensure integrity of data in the original **Table** data"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "There is no data copy that happens while clone is created. Its just one more object that gets created which points to the same underlying data as that of original **Table**. Only when changes are made to clone then it starts incurring storage costs.",
    "reference": "",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_53",
    "number": 53,
    "question": "When data is loaded into **Snowflake**, **Snowflake** reorganizes that data into its internal optimized, compressed, columnar format",
    "options": [
      {
        "id": 1,
        "value": "TRUE"
      },
      {
        "id": 2,
        "value": "FALSE"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "When data is loaded into **Snowflake**, **Snowflake** reorganizes that data into its internal optimized, compressed, columnar format. **Snowflake** stores this optimized data in cloud storage.**Snowflake** manages all aspects of how this data is stored  the organization, file size, structure, compression, Metadata, statistics, and other aspects of data storage are handled by **Snowflake**. The data objects stored by **Snowflake** are not directly visible nor accessible by customers; they are only accessible through SQL query operations run using **Snowflake**.",
    "reference": "",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_54",
    "number": 54,
    "question": "**Snowflake** data **Warehouse** is built on top of Hadoop Big Data Software Platform",
    "options": [
      {
        "id": 1,
        "value": "TRUE"
      },
      {
        "id": 2,
        "value": "FALSE"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "**Snowflake**s data **Warehouse** is not built on an existing **Database** or big data  software platform such as Hadoop. The **Snowflake** data **Warehouse** uses a new SQL **Database** engine with a unique architecture designed for the cloud.",
    "reference": "",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_55",
    "number": 55,
    "question": "Cloning the **Table** does not include the load history of the source **Table**, and hence the data files that were loaded in source **Table** can be loaded again into its clone tables",
    "options": [
      {
        "id": 1,
        "value": "FALSE"
      },
      {
        "id": 2,
        "value": "TRUE"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "When a clone of **Table** is created the load history of the cloned **Table** is empty, and hence it will trea the already loaded data files as new files so it can be loaded again in clone **Table**.",
    "reference": "",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_56",
    "number": 56,
    "question": "Cloud Services layer of **Snowflake** provide which all functionalities",
    "options": [
      {
        "id": 1,
        "value": "Infra Management"
      },
      {
        "id": 2,
        "value": "Authentication"
      },
      {
        "id": 3,
        "value": "**Database** Storage"
      },
      {
        "id": 4,
        "value": "Metadata Management"
      },
      {
        "id": 5,
        "value": "Query Processing"
      }
    ],
    "answers": [
      1,
      2,
      4
    ],
    "explanation": "The cloud services layer is a collection of services that coordinate activities across **Snowflake**. These services tie together all of the different components of **Snowflake** in order to process user requests, from login to query dispatch. The cloud services layer also runs on compute instances provisioned by **Snowflake** from the cloud provider.Among the services in this layer:AuthenticationInfrastructure managementMetadata managementQuery parsing and optimizationAccess controlRefer Link for details –https://docs.snowflake.com/en/user-guide/intro-key-concepts.html#cloud-services",
    "reference": "https://docs.snowflake.com/en/user-guide/intro-key-concepts.html#cloud-services",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 2_22",
    "number": 22,
    "question": "If a transaction is running on a session and the session disconnects abruptly, the transaction will be in a detached state. It will not allow the transaction to commit or roll back. The locks on the resources will also not be released. If you do not do anything and let **Snowflake** abort the transaction, how long will you need to wait?",
    "options": [
      {
        "id": 1,
        "value": "2 Hours"
      },
      {
        "id": 2,
        "value": "4 Hours"
      },
      {
        "id": 3,
        "value": "15 Minutes"
      },
      {
        "id": 4,
        "value": "30 Minutes"
      },
      {
        "id": 5,
        "value": "1 Hour"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "If a transaction is running in a session and the session disconnects abruptly, preventing the transaction from committing or rolling back, the transaction is left in a detached state, including any locks that the transaction is holding on resources. If this happens, you might need to abort the transaction. To abort a running transaction, the user who started the transaction or an account administrator can call the system function, SYSTEM$ABORT_TRANSACTION. If the transaction is left open, **Snowflake** typically rolls back the transaction after it has been idle for four hours. ",
    "reference": "https://docs.snowflake.com/en/sql-reference/transactions.html#aborting-transactions",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 1_48",
    "number": 48,
    "question": "Which of the following techniques can be used in **Snowflake** to improve query performance?",
    "options": [
      {
        "id": 1,
        "value": "Index definition"
      },
      {
        "id": 2,
        "value": "Cluster Keys/Reclustering"
      },
      {
        "id": 3,
        "value": "Distribution keys"
      },
      {
        "id": 4,
        "value": "Query Hints"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "In **Snowflake** we can only define cluster keys for improving query performance on huge tables. Rest of the options are not available in **Snowflake**. For details of clustering ",
    "reference": "https://docs.snowflake.com/en/user-guide/tables-clustering-keys.html",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_59",
    "number": 59,
    "question": "The number of load operations that run in parallel cannot exceed the number of data files to be loaded",
    "options": [
      {
        "id": 1,
        "value": "FALSE"
      },
      {
        "id": 2,
        "value": "TRUE"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "The number of load operations that run in parallel cannot exceed the number of data files to be loaded. To optimize the number of parallel operations for a load, we recommend aiming to produce data files roughly 100-250 MB (or larger) in size compressed.Refer link for details –https://docs.snowflake.com/en/user-guide/data-load-considerations-prepare.html",
    "reference": "https://docs.snowflake.com/en/user-guide/data-load-considerations-prepare.html",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_60",
    "number": 60,
    "question": "Different editions of **Snowflake** Instances require separate accounts",
    "options": [
      {
        "id": 1,
        "value": "FALSE"
      },
      {
        "id": 2,
        "value": "TRUE"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "Same account cannot have different editions hosted. Will need to go for different accounts for different editions.",
    "reference": "",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 2_1",
    "number": 1,
    "question": "If retrieval of data from fail safe is required, you must",
    "options": [
      {
        "id": 1,
        "value": "Retrieval from Fail Safe is not possible"
      },
      {
        "id": 2,
        "value": "Contact **Snowflake** Support"
      },
      {
        "id": 3,
        "value": "Query the Fail Safe DB and retrive the data by yourself"
      },
      {
        "id": 4,
        "value": "Download it directly from the underlying cloud storage of **Snowflake**"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "Failsafe data can not be retrieved by **Snowflake** customer and support must be engaged to retrieve this data.",
    "reference": "",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 2_2",
    "number": 2,
    "question": "You have a virtual **Warehouse** named BI_warehouse which is sized as Medium. You need to resize it to X-LARGE for future queries. What is the best way to make this change.",
    "options": [
      {
        "id": 1,
        "value": "Drop and recreate the same **Warehouse** with X-LARGE size"
      },
      {
        "id": 2,
        "value": "It is not permitted to resize the **Warehouse** once its created"
      },
      {
        "id": 3,
        "value": "Alter the existing **Warehouse** either by using an `ALTER` command or through the **Snowflake** Web UI to change the size"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "Please see the below link for detailed syntaxhttps://docs.**Snowflake**.net/manuals/sql-reference/sql/alter-**Warehouse**.html",
    "reference": "https://docs.snowflake.net/manuals/sql-reference/sql/alter-warehouse.html",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 4_58",
    "number": 58,
    "question": "In a multi cluster **Warehouse**, for each cluster there is a way we can specify different **Warehouse** sizes",
    "options": [
      {
        "id": 1,
        "value": "TRUE"
      },
      {
        "id": 2,
        "value": "FALSE"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "In a multi cluster **Warehouse**, all clusters will have one size only.",
    "reference": "https://docs.snowflake.com/en/user-guide/warehouses-multicluster.html",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 2_3",
    "number": 3,
    "question": "Micro partitions are immutable which means once created they cannot be changed.",
    "options": [
      {
        "id": 1,
        "value": "TRUE"
      },
      {
        "id": 2,
        "value": "FALSE"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "Micro partitions are immutable which means once created they cannot be changed. If a row is updated in **Snowflake**, the micro partition holding the row is copied into a new micro partition and the updated row is inserted in that micro partition. The olde micro partition is marked for deletion.",
    "reference": "https://docs.snowflake.com/en/user-guide/tables-clustering-micropartitions.html",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 2_5",
    "number": 5,
    "question": "**Resource Monitor** notifications can be received by account administrators through the following ways",
    "options": [
      {
        "id": 1,
        "value": "Email"
      },
      {
        "id": 2,
        "value": "Web Interface"
      },
      {
        "id": 3,
        "value": "SMS"
      },
      {
        "id": 4,
        "value": "Push Notification"
      }
    ],
    "answers": [
      1,
      2
    ],
    "explanation": "Notifications can be received by account administrators through the web interface and/or email; however, by default, notifications are not enabled:\n\n- To receive notifications, each account administrator must explicitly enable notifications through their preferences in the web interface.\n- In addition, if an account administrator chooses to receive email notifications, they must provide a valid email address (and verify the address) before they will receive any emails.",
    "reference": "",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 2_6",
    "number": 6,
    "question": "There is no additional storage charges with rekeying of data in **Fail-safe**.",
    "options": [
      {
        "id": 1,
        "value": "TRUE"
      },
      {
        "id": 2,
        "value": "FALSE"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "**Snowflake** customers are charged with additional storage for **Fail-safe** protection of data files that were rekeyed. For these files, 7 days of **Fail-safe** protection is charged. That is, the data files with the old key on S3 are already protected by **Fail-safe**, and the data files with the new key on S3 are also added to **Fail-safe**, leading to a second charge, but only for the 7-day period.",
    "reference": "",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 2_8",
    "number": 8,
    "question": "Tri-Secret Secure option is available in which **Snowflake** Edition",
    "options": [
      {
        "id": 1,
        "value": "Enterprise & higher"
      },
      {
        "id": 2,
        "value": "Business Critical & higher"
      },
      {
        "id": 3,
        "value": "All editions"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "",
    "reference": "https://docs.snowflake.com/en/user-guide/security-encryption.html#encryption-key-rotation",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 1_58",
    "number": 58,
    "question": "**Snowflake** is supported on which cloud providers",
    "options": [
      {
        "id": 1,
        "value": "GCP"
      },
      {
        "id": 2,
        "value": "AWS"
      },
      {
        "id": 3,
        "value": "Alibaba Cloud"
      },
      {
        "id": 4,
        "value": "IBM Cloud"
      },
      {
        "id": 5,
        "value": "Azure"
      }
    ],
    "answers": [
      1,
      2,
      5
    ],
    "explanation": "Snowflake is provided as Software-as-a-Service (SaaS) that runs completely on cloud infrastructure.\n- This means that all three layers of **Snowflake**s architecture (storage, compute, and cloud services) are deployed and managed entirely on a selected cloud platform.A **Snowflake** account can be hosted on any of the following cloud platforms:Amazon Web Services (AWS)Google Cloud Platform (GCP)Microsoft Azure (Azure)On each platform, **Snowflake** provides one or more regions where the account is provisioned.",
    "reference": "https://docs.snowflake.com/en/user-guide/intro-cloud-platforms.html",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_31",
    "number": 31,
    "question": "Which file format option should be enabled while loading a JSON file to remove the outer most array structure and load the records in separate **Table** rows",
    "options": [
      {
        "id": 1,
        "value": "REMOVE_OUTER_ARRAY"
      },
      {
        "id": 2,
        "value": "ELIMINATE_OUTER_ARRAY"
      },
      {
        "id": 3,
        "value": "STRIP_OUTER_ARRAY"
      },
      {
        "id": 4,
        "value": "READ_INNER_ARRAY"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "In general, JSON and Avro data sets are a simple concatenation of multiple documents.\n- The JSON or Avro output from some software is composed of a single huge array containing multiple records.\n- There is no need to separate the documents with line breaks or commas, though both are supported.Instead, we recommend enabling the STRIP_OUTER_ARRAY file format option for the `COPY` INTO",
    "reference": "https://docs.snowflake.com/en/user-guide/semistructured-considerations.html",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 2_10",
    "number": 10,
    "question": "It is not possible to suspend a specific cluster in a multi-cluster virtual **Warehouse** but rather the whole virtual **Warehouse** is suspended.",
    "options": [
      {
        "id": 1,
        "value": "FALSE"
      },
      {
        "id": 2,
        "value": "TRUE"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "True. Individual clusters in a virtual **Warehouse** can not be controlled independently, but rather they appear logically as a virtual **Warehouse** together.",
    "reference": "",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 2_11",
    "number": 11,
    "question": "Which minimum **Snowflake** license allows Mulitcluster data virtual **Warehouse** capability?",
    "options": [
      {
        "id": 1,
        "value": "Standard"
      },
      {
        "id": 2,
        "value": "VPS"
      },
      {
        "id": 3,
        "value": "Enterprise"
      },
      {
        "id": 4,
        "value": "Business Critical"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "The multi cluster virtual **Warehouse** capability is available starting from the Enterprise Edition. The capability is not available in Standard or Premier",
    "reference": "",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 2_12",
    "number": 12,
    "question": "When a **Table** data changes (for e.g. few records are updated and few are deleted) and the **Table** is within the **Time Travel** retention period, which of the following statement is true?",
    "options": [
      {
        "id": 1,
        "value": "**Snowflake** maintains only the information pertaining to these changed records (i.e. updated & deleted ones)"
      },
      {
        "id": 2,
        "value": "**Snowflake** takes a full copy of the **Table** every time any change is made to the **Table**"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "**Snowflake** minimizes the amount of storage required for historical data by maintaining only the information required to restore the individual **Table** rows that were updated or deleted. As a result, storage usage is calculated as a percentage of the **Table** that changed. Full copies of tables are only maintained when tables are dropped or truncated.",
    "reference": "",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 2_25",
    "number": 25,
    "question": "You want to get the clustering information for a **Table** Tab1 that is clustered on column Col1. Which of the below queries will you run to get the details?",
    "options": [
      {
        "id": 1,
        "value": "show clustering (‘Tab1‘) from clustering_info;"
      },
      {
        "id": 2,
        "value": "select system$clustering_information(‘Tab1‘);"
      },
      {
        "id": 3,
        "value": "Show clustering information for Tab1.Col1;"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "",
    "reference": "https://docs.snowflake.com/en/sql-reference/functions/system_clustering_information.html#system-clustering-information",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 2_14",
    "number": 14,
    "question": "Multi cluster virtual warehouses are designed to handle –",
    "options": [
      {
        "id": 1,
        "value": "Queuing issues"
      },
      {
        "id": 2,
        "value": "Large Complex Queries"
      },
      {
        "id": 3,
        "value": "Large number of concurrent users (executing query at same time)"
      },
      {
        "id": 4,
        "value": "Large number of concurrent queries"
      }
    ],
    "answers": [
      1,
      3,
      4
    ],
    "explanation": "The primary purpose of Multi cluster virtual warehouses is to improve queueing and concurrency issues. Large Complex queries can be handled by increasing the size of the **Warehouse**.",
    "reference": "https://docs.snowflake.net/manuals/user-guide/warehouses-considerations.html#multi-cluster-warehouses-improve-concurrency",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 4_14",
    "number": 14,
    "question": "Replication operations use **Snowflake**-provided compute resources to copy data between accounts across regions.",
    "options": [
      {
        "id": 1,
        "value": "FALSE"
      },
      {
        "id": 2,
        "value": "TRUE"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "",
    "reference": "https://docs.snowflake.com/en/user-guide/database-replication-billing.html",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 2_7",
    "number": 7,
    "question": "**Fail-safe** is not provided as a means for accessing historical data after the **Time Travel** retention period has ended. It is for use only by **Snowflake** to recover data that may have been lost or damaged due to extreme operational failures",
    "options": [
      {
        "id": 1,
        "value": "TRUE"
      },
      {
        "id": 2,
        "value": "FALSE"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "",
    "reference": "https://docs.snowflake.com/en/user-guide/data-failsafe.html",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 2_17",
    "number": 17,
    "question": "**Time Travel** and Fail safe are one and the same thing?",
    "options": [
      {
        "id": 1,
        "value": "TRUE"
      },
      {
        "id": 2,
        "value": "FALSE"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "Both **Time Travel** and Fail safe are part of **Snowflake** Continous Data Protection lifecycle, however both are different. With **Time Travel** customer themselves can query the data within the retention period which is configurable, whereas **Fail-safe** provides a (non-configurable) 7-day period during which historical data is recoverable by **Snowflake**. This period starts immediately after the **Time Travel** retention period ends.",
    "reference": "",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 4_23",
    "number": 23,
    "question": "**Snowflake** maintains detailed Metadata for each **Table** into which data is loaded, including:",
    "options": [
      {
        "id": 1,
        "value": "Etag for the file"
      },
      {
        "id": 2,
        "value": "Name of each file from which data was loaded"
      },
      {
        "id": 3,
        "value": "Number of Columns"
      },
      {
        "id": 4,
        "value": "Column Names"
      },
      {
        "id": 5,
        "value": "Number of rows parsed in the file"
      },
      {
        "id": 6,
        "value": "File Size"
      }
    ],
    "answers": [
      1,
      2,
      5,
      6
    ],
    "explanation": "",
    "reference": "https://docs.snowflake.com/en/user-guide/data-load-considerations-load.html",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 2_19",
    "number": 19,
    "question": "What is the benefit of client-side encryption in **Snowflake**?",
    "options": [
      {
        "id": 1,
        "value": "It provides a secure system for managing data in cloud storage"
      },
      {
        "id": 2,
        "value": "Helps in decrypting data faster when needed"
      },
      {
        "id": 3,
        "value": "None"
      },
      {
        "id": 4,
        "value": "Saves the cloud encryption cost"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "Client-side encryption in general, is the most secure form of managing data on a cloud provider. With client-side encryption, the data is encrypted on the client before it is uploaded. That means, the cloud provider only stores the encrypted version of the data and never sees data in the clear.",
    "reference": "",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 1_51",
    "number": 51,
    "question": "**Snowflake** Stages can be defined as either External or Internal.",
    "options": [
      {
        "id": 1,
        "value": "TRUE"
      },
      {
        "id": 2,
        "value": "FALSE"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "",
    "reference": "https://docs.snowflake.com/en/user-guide/data-load-local-file-system-create-stage.html",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 2_21",
    "number": 21,
    "question": "**Snowflake** can load from data staged in which of the following?",
    "options": [
      {
        "id": 1,
        "value": "Azure Blob Storage"
      },
      {
        "id": 2,
        "value": "Oracle Cloud Storage"
      },
      {
        "id": 3,
        "value": "VMWare Storage"
      },
      {
        "id": 4,
        "value": "**Snowflake** Internal **Stage**"
      },
      {
        "id": 5,
        "value": "Google Cloud Storage"
      },
      {
        "id": 6,
        "value": "AWS S3"
      }
    ],
    "answers": [
      1,
      4,
      5,
      6
    ],
    "explanation": "**Snowflake** supports loading from Internal **Stage**, AWS S3, Azure Blob and Google Cloud Storage. Please see below link for more detailshttps://docs.**Snowflake**.net/manuals/user-guide/data-load-overview.html#loading-from-data-files-staged-on-other-cloud-platforms",
    "reference": "https://docs.snowflake.net/manuals/user-guide/data-load-overview.html#loading-from-data-files-staged-on-other-cloud-platforms",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 4_18",
    "number": 18,
    "question": "Resource monitors provide control over virtual **Warehouse** credit usage; however, you cannot use them to control credit usage for the **Snowflake**-provided warehouses, including the SNOWPIPE **Warehouse**",
    "options": [
      {
        "id": 1,
        "value": "FALSE"
      },
      {
        "id": 2,
        "value": "TRUE"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "",
    "reference": "https://docs.snowflake.com/en/user-guide/data-load-snowpipe-billing.html",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 2_23",
    "number": 23,
    "question": "Which of the following will not contribute to your account level storage usage?",
    "options": [
      {
        "id": 1,
        "value": "**Snowflake** Internal **Stage**"
      },
      {
        "id": 2,
        "value": "UDF"
      },
      {
        "id": 3,
        "value": "**Snowflake** External Stages"
      },
      {
        "id": 4,
        "value": "Databases (and tables in it)"
      },
      {
        "id": 5,
        "value": "Views (Normal Views & Not Materialized Views)"
      }
    ],
    "answers": [
      2,
      3,
      5
    ],
    "explanation": "Storage used by a **Database** (and its tables) and storage used by **Snowflake** internal stages contribute towards the over all storage usage along with storage used for data protection (i.e. **Time Travel** & Fail Safe) Views, UDF‘s are logical object referring to the tables or performing some function, and hence no storage cost is associated with them. Likewise External Stages are logical object referring to an external Cloud location and hence no storage cost is applicable as data is stored in external cloud",
    "reference": "",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 4_27",
    "number": 27,
    "question": "If the TIMESTAMP, OFFSET, or STATEMENT specified in the AT | BEFORE clause falls outside the data retention period for the **Table**, the query fails and returns an error.",
    "options": [
      {
        "id": 1,
        "value": "TRUE"
      },
      {
        "id": 2,
        "value": "FALSE"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "",
    "reference": "https://docs.snowflake.com/en/user-guide/data-time-travel.html",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 10_25",
    "number": 25,
    "question": "UNDROP command is applicable to which all objects",
    "options": [
      {
        "id": 1,
        "value": "DATABASES"
      },
      {
        "id": 2,
        "value": "**Schema**"
      },
      {
        "id": 3,
        "value": "TABLES"
      },
      {
        "id": 4,
        "value": "ROLES"
      },
      {
        "id": 5,
        "value": "USERS"
      }
    ],
    "answers": [
      1,
      2,
      3
    ],
    "explanation": "",
    "reference": "https://docs.snowflake.com/en/user-guide/data-time-travel.html",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_32",
    "number": 32,
    "question": "If you change the data retention period for a **Table**, the new retention period impacts all data that is active, as well as any data currently in **Time Travel**",
    "options": [
      {
        "id": 1,
        "value": "TRUE"
      },
      {
        "id": 2,
        "value": "FALSE"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "",
    "reference": "https://docs.snowflake.com/en/user-guide/data-time-travel.html",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_36",
    "number": 36,
    "question": "select * from my_table at(offset => -60*5); This query will select historical data from “my_table“ as of –",
    "options": [
      {
        "id": 1,
        "value": "5 days ago"
      },
      {
        "id": 2,
        "value": "5 seconds ago"
      },
      {
        "id": 3,
        "value": "5 minutes ago"
      },
      {
        "id": 4,
        "value": "5 hours ago"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "",
    "reference": "https://docs.snowflake.com/en/user-guide/data-time-travel.html",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 2_9",
    "number": 9,
    "question": "What happens to the data of a **Table** that is currently in **Time Travel**, when the retention period of a **Table** is increased? E.g. The retention period is increased from 10 days to 20 days.",
    "options": [
      {
        "id": 1,
        "value": "When data retention is changed, all the data in **Time Travel** moves to fail safe by default"
      },
      {
        "id": 2,
        "value": "The data in **Time Travel** will be retained as per previous retention period only i.e. for 10 days only"
      },
      {
        "id": 3,
        "value": "None is true"
      },
      {
        "id": 4,
        "value": "The data in **Time Travel** will be retained for the extended period of retention period i.e. for 20 days"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "",
    "reference": "https://docs.snowflake.com/en/user-guide/data-time-travel.html#data-retention-period",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 10_51",
    "number": 51,
    "question": "Which command can be executed to get the version history of **Table** “Test1“ in **Schema** “mytestdb.myschema“ within the **Time Travel** period in **Snowflake**?",
    "options": [
      {
        "id": 1,
        "value": "show history of **Table** like ‘Test1‘ in mytestdb.myschema;"
      },
      {
        "id": 2,
        "value": "show version of **Table** like ‘Test1‘ in mytestdb.myschema;"
      },
      {
        "id": 3,
        "value": "show tables version like ‘Test1‘ in mytestdb.myschema;"
      },
      {
        "id": 4,
        "value": "show tables history like ‘Test1‘ in mytestdb.myschema;"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "",
    "reference": "https://docs.snowflake.com/en/user-guide/data-time-travel.html#data-retention-period",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 2_30",
    "number": 30,
    "question": "What happens If the TIMESTAMP, OFFSET, or STATEMENT specified in the AT | BEFORE clause of a `SELECT` statement falls outside the data retention period for the **Table**?",
    "options": [
      {
        "id": 1,
        "value": "The query fetches data from fail safe"
      },
      {
        "id": 2,
        "value": "The query returns no data"
      },
      {
        "id": 3,
        "value": "The query returns the oldest timestamp data that is available"
      },
      {
        "id": 4,
        "value": "The query fails and returns an error"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "",
    "reference": "https://docs.snowflake.com/en/user-guide/data-time-travel.html#data-retention-period",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 2_31",
    "number": 31,
    "question": "What are the resources that a virtual **Warehouse** provides?",
    "options": [
      {
        "id": 1,
        "value": "Temporary Storage"
      },
      {
        "id": 2,
        "value": "CPU (Processing Power)"
      },
      {
        "id": 3,
        "value": "Memory"
      },
      {
        "id": 4,
        "value": "User & Role Management"
      },
      {
        "id": 5,
        "value": "Long term data storage"
      }
    ],
    "answers": [
      1,
      2,
      3
    ],
    "explanation": "Virtual **Warehouse** provide CPU, Memory & temporary storage to process queries",
    "reference": "",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 2_32",
    "number": 32,
    "question": "Compute can be scaled up, down, out, or in and there is no effect on storage used.",
    "options": [
      {
        "id": 1,
        "value": "TRUE"
      },
      {
        "id": 2,
        "value": "FALSE"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "As per **Snowflake** architecture, storage and compute are independent of each other and can be increased or decreased without any impact on each other.",
    "reference": "",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 2_33",
    "number": 33,
    "question": "Two Virtual Warehouses can access the same data at the same time without causing contention issues.",
    "options": [
      {
        "id": 1,
        "value": "TRUE"
      },
      {
        "id": 2,
        "value": "FALSE"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "Thats the beauty of **Snowflake**, and one of the key features, where in separate warehouses can access the same data without causing any contention issues.",
    "reference": "",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 4_20",
    "number": 20,
    "question": "Which **Snowflake** object records DML changes made to tables, including inserts, updates, deletes as well as Metadata about each change, so that actions can be taken using the changed data",
    "options": [
      {
        "id": 1,
        "value": "Snowpipe"
      },
      {
        "id": 2,
        "value": "Stream"
      },
      {
        "id": 3,
        "value": "Task"
      },
      {
        "id": 4,
        "value": "Kafka"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "",
    "reference": "https://docs.snowflake.com/en/user-guide/streams.html",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 2_35",
    "number": 35,
    "question": "Which installment option versions of **Snowflake** are available?",
    "options": [
      {
        "id": 1,
        "value": "Microsoft Cloud Native Accounts"
      },
      {
        "id": 2,
        "value": "**Snowflake**-Hosted Accounts (on Amazon cloud infrastructure)"
      },
      {
        "id": 3,
        "value": "Hybrid On-Premise + Cloud Installation"
      },
      {
        "id": 4,
        "value": "Enterprise In-House VPC Installation"
      },
      {
        "id": 5,
        "value": "On-Premise Custom Installation"
      },
      {
        "id": 6,
        "value": "**Snowflake**-Hosted Accounts (on Azure cloud infrastructure)"
      }
    ],
    "answers": [
      2,
      6
    ],
    "explanation": "A **Snowflake** account can be hosted on any of the following cloud platforms:Amazon Web Services (AWS)Google Cloud Platform (GCP)Microsoft Azure (Azure)Refer link –https://docs.snowflake.com/en/user-guide/intro-cloud-platforms.html",
    "reference": "https://docs.snowflake.com/en/user-guide/intro-cloud-platforms.html",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 2_36",
    "number": 36,
    "question": "Which role is most powerful role in a **Snowflake** system?",
    "options": [
      {
        "id": 1,
        "value": "`SYSADMIN`"
      },
      {
        "id": 2,
        "value": "`SECURITYADMIN`"
      },
      {
        "id": 3,
        "value": "`PUBLIC`"
      },
      {
        "id": 4,
        "value": "`ACCOUNTADMIN`"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "`ACCOUNTADMIN` is the highest privileged role in **Snowflake**",
    "reference": "",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 2_37",
    "number": 37,
    "question": "**Snowflake** uses a staged release process for new releases in which different account types are upgraded gradually.",
    "options": [
      {
        "id": 1,
        "value": "TRUE"
      },
      {
        "id": 2,
        "value": "FALSE"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "The staged release process through which **Snowflake** releases updates is first applied to early access account, then standard accounts and finally Enterprise & upwards",
    "reference": "",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 2_38",
    "number": 38,
    "question": "All security related information is stored in which layer of **Snowflake** architecture",
    "options": [
      {
        "id": 1,
        "value": "Storage"
      },
      {
        "id": 2,
        "value": "None"
      },
      {
        "id": 3,
        "value": "Cloud Service"
      },
      {
        "id": 4,
        "value": "Compute"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "Cloud service layer is the one which stores all security related information The services included in this layer are \n1. Authentication \n2. Infrastructure management \n3. Metadata management \n4. Query parsing and optimization \n5. Access control",
    "reference": "",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 2_39",
    "number": 39,
    "question": "When a network policy includes values in both the allowed and blocked IP address lists, **Snowflake** applies the blocked IP address list first",
    "options": [
      {
        "id": 1,
        "value": "FALSE"
      },
      {
        "id": 2,
        "value": "TRUE"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "- When a network policy includes values in both the allowed and blocked IP address lists, **Snowflake** applies the blocked IP address list first.\n- Do not add 0.0.0.0/0 to the blocked IP address list. 0.0.0.0/0 is interpreted to be all IPv4 addresses on the local machine .\n- Because **Snowflake** resolves this list first, this would block your own access.",
    "reference": "https://docs.snowflake.com/en/user-guide/network-policies.html",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 10_13",
    "number": 13,
    "question": "What are the additional Metadata columns available in Stream to track changes?",
    "options": [
      {
        "id": 1,
        "value": "Metadata$ISDELETE"
      },
      {
        "id": 2,
        "value": "Metadata$ISINSERT"
      },
      {
        "id": 3,
        "value": "Metadata$ACTION"
      },
      {
        "id": 4,
        "value": "Metadata$ISUPDATE"
      },
      {
        "id": 5,
        "value": "Metadata$ROW_ID"
      }
    ],
    "answers": [
      3,
      4,
      5
    ],
    "explanation": "",
    "reference": "https://docs.snowflake.com/en/user-guide/streams.html",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 2_41",
    "number": 41,
    "question": "To clone a **Table** your current role must have which privilege on the source **Table**?",
    "options": [
      {
        "id": 1,
        "value": "`DELETE`"
      },
      {
        "id": 2,
        "value": "`SELECT`"
      },
      {
        "id": 3,
        "value": "`UPDATE`"
      },
      {
        "id": 4,
        "value": "`INSERT`"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "To clone a **Table** you need a `SELECT` privileges on the source **Table** and for all other objects that can be cloned you need the USAGE privilege",
    "reference": "",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 10_16",
    "number": 16,
    "question": "What are the different types of streams available?",
    "options": [
      {
        "id": 1,
        "value": "Append-Only"
      },
      {
        "id": 2,
        "value": "Insert-Only"
      },
      {
        "id": 3,
        "value": "Standard"
      },
      {
        "id": 4,
        "value": "Update-Only"
      },
      {
        "id": 5,
        "value": "Native"
      }
    ],
    "answers": [
      1,
      2,
      3
    ],
    "explanation": "",
    "reference": "https://docs.snowflake.com/en/user-guide/streams.html",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 4_29",
    "number": 29,
    "question": "Which of the following roles can use SQL to **View** the task history within a specified date range",
    "options": [
      {
        "id": 1,
        "value": "`ACCOUNTADMIN`"
      },
      {
        "id": 2,
        "value": "Task owner (i.e. role that has the OWNERSHIP privilege on a task)"
      },
      {
        "id": 3,
        "value": "`PUBLIC`"
      },
      {
        "id": 4,
        "value": "Any role that has the global MONITOR EXECUTION privilege"
      },
      {
        "id": 5,
        "value": "Any role can **View**"
      }
    ],
    "answers": [
      1,
      2,
      4
    ],
    "explanation": "",
    "reference": "https://docs.snowflake.com/en/user-guide/tasks-intro.html",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 2_44",
    "number": 44,
    "question": "As an ETL developer you are developing jobs to load data into a **Snowflake** **Table**. You have an S3 **Stage** defined which contains a single file containing 1000 rows. You managed to load those 1000 rows using the copy command of **Snowflake**, but while performing further executions of those copy command, you notice that your `COPY` command is executing successfully but is loading zero rows into the target **Table**. What could be the reason?",
    "options": [
      {
        "id": 1,
        "value": "**Snowflake** Tracks the file that have been loaded and will not load the same file again"
      },
      {
        "id": 2,
        "value": "The file that was loaded on first run got deleted, as with every copy command the associated files are removed from S3"
      },
      {
        "id": 3,
        "value": "The file might have got corrupted"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "Since you have already loaded this file, **Snowflake** will track through Metadata which files have been loaded already and will not process them again. If you want to retest your copy command you must place a new file or clear the Metadata or use a specific parameter in `COPY` command that will force load the file, by ignoring the Metadata",
    "reference": "",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 2_16",
    "number": 16,
    "question": "Which scaling policy, conserves credits by favoring keeping running clusters fully-loaded rather than starting additional clusters, which may result in queries being queued and taking longer to complete?",
    "options": [
      {
        "id": 1,
        "value": "Standard"
      },
      {
        "id": 2,
        "value": "Legacy"
      },
      {
        "id": 3,
        "value": "None"
      },
      {
        "id": 4,
        "value": "Economy"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "",
    "reference": "https://docs.snowflake.com/en/user-guide/warehouses-multicluster.html",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 2_46",
    "number": 46,
    "question": "Storage can increase or decrease without any effect on virtual **Warehouse** sizes.",
    "options": [
      {
        "id": 1,
        "value": "TRUE"
      },
      {
        "id": 2,
        "value": "FALSE"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "**Snowflake** architecture is designed in such a way that storage and compute can be indenpendently increased or decreased without any impact on each other.",
    "reference": "",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 2_47",
    "number": 47,
    "question": "You can increase or decrease the size of a virtual **Warehouse** as your user base & query demand increase or decrease?",
    "options": [
      {
        "id": 1,
        "value": "TRUE"
      },
      {
        "id": 2,
        "value": "FALSE"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "Size of the **Warehouse** can be changed at any point in time either through UI or through `ALTER` command",
    "reference": "",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 2_48",
    "number": 48,
    "question": "Users created in a reader account can not do which of the following?",
    "options": [
      {
        "id": 1,
        "value": "`SELECT`"
      },
      {
        "id": 2,
        "value": "`DELETE`"
      },
      {
        "id": 3,
        "value": "`UPDATE`"
      },
      {
        "id": 4,
        "value": "`INSERT`"
      }
    ],
    "answers": [
      2,
      3,
      4
    ],
    "explanation": "Users in a reader account can query shared data but can not perform any DML.",
    "reference": "",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 2_49",
    "number": 49,
    "question": "Which encryption algorithm used by **Snowflake**?",
    "options": [
      {
        "id": 1,
        "value": "RSA"
      },
      {
        "id": 2,
        "value": "DES"
      },
      {
        "id": 3,
        "value": "AES 256 bit encryption"
      },
      {
        "id": 4,
        "value": "MD5"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "All **Snowflake** customer data is encrypted by default using the latest security standards and best practices. **Snowflake** uses strong AES 256-bit encryption with a hierarchical key model rooted in a hardware security module. Keys are automatically rotated on a regular basis by the **Snowflake** service, and data can be automatically re-encrypted ( rekeyed ) on a regular basis. Data encryption and key management is entirely transparent and requires no configuration or management.",
    "reference": "https://docs.snowflake.com/en/user-guide/security-encryption.html#encryption-key-management",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 4_47",
    "number": 47,
    "question": "Which scaling policy, starts additional cluster only if the system estimates there is enough query load to keep the cluster busy for at least 6 minutes.",
    "options": [
      {
        "id": 1,
        "value": "Legacy"
      },
      {
        "id": 2,
        "value": "None"
      },
      {
        "id": 3,
        "value": "Standard"
      },
      {
        "id": 4,
        "value": "Economy"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "",
    "reference": "https://docs.snowflake.com/en/user-guide/warehouses-multicluster.html",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 2_51",
    "number": 51,
    "question": "You are the solution architect for a large manufacturing company running a **Snowflake** data **Warehouse**. Your **Snowflake** implementation has just gone live with a single virtual **Warehouse** and has been opened up to all the users across the organization. One of your heaviest users are the marketing department, who have a large number of users and execute a large number of queries. Marketing users have complained that the queries take a long time to execute for them. What is the best immediate action should you take to improve their experience?",
    "options": [
      {
        "id": 1,
        "value": "Increase the size of your single **Warehouse** to the maximum size possible"
      },
      {
        "id": 2,
        "value": "Study each and every query of the marketing team and optimize them"
      },
      {
        "id": 3,
        "value": "Limit the number of queries that marketing team can execute"
      },
      {
        "id": 4,
        "value": "Have a dedicated **Warehouse** for marketing team, and set the capacity of this **Warehouse** as per the needs of marketing team"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "Increasing the size of existing **Warehouse** would improve performance of the queries running on that **Warehouse**, but it would not necessarily be just the marketing team who would see benefit out of it. Best option is to have a dedicated **Warehouse** for the marketing team for immediate improved user experience",
    "reference": "",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 2_52",
    "number": 52,
    "question": "Changing the retention period for your account or individual objects changes the value for all lower-level objects that do not have a retention period explicitly set. For example: If you change the retention period at the account level, all databases, schemas, and tables that do not have an explicit retention period automatically inherit the new retention period.",
    "options": [
      {
        "id": 1,
        "value": "TRUE"
      },
      {
        "id": 2,
        "value": "FALSE"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "",
    "reference": "https://docs.snowflake.com/en/user-guide/data-time-travel.html#data-retention-period",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 2_53",
    "number": 53,
    "question": "Both **Time Travel** & failsafe require extra storage which has cost associated with it",
    "options": [
      {
        "id": 1,
        "value": "FALSE"
      },
      {
        "id": 2,
        "value": "TRUE"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "",
    "reference": "https://docs.snowflake.net/manuals/user-guide/data-failsafe.html",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 2_54",
    "number": 54,
    "question": "When a **Table** which has time traveled enabled is dropped, and if a new **Table** with same name is created after that, then the undrop **Table** command is executed, what will happen?",
    "options": [
      {
        "id": 1,
        "value": "The **Table** will be restored with a different name"
      },
      {
        "id": 2,
        "value": "The newly created **Table** will be overwritten with the restored version of the **Table**"
      },
      {
        "id": 3,
        "value": "The undrop command fails"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "If an object with the same name already exists, UNDROP fails. You must rename the existing object, which then enables you to restore the previous version of the object.",
    "reference": "",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 2_55",
    "number": 55,
    "question": "Please look at the below two queries Option 1:\n\n- `SELECT` * `FROM` TABLE_NAME `WHERE` YEAR = 2015 AND UPPER(COL_NAME) = ‘VALUE1‘; Option 2: `SELECT` * `FROM` TABLE_NAME `WHERE` YEAR = 2015 AND COL_NAME =‘VALUE1‘; Which one of these will scan less partitions?\n- Note: COL_NAME stores values both in upper and lower case",
    "options": [
      {
        "id": 1,
        "value": "Option 2"
      },
      {
        "id": 2,
        "value": "Option 1"
      },
      {
        "id": 3,
        "value": "Both will scan same number of partitions"
      },
      {
        "id": 4,
        "value": "Scanning of partition is random, so no concrete logic can be applied on scanning logic"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "**Snowflake** stores Metadata for each column that includes the range of values of the columns in micro partitions. In this case the Metadata for COL_NAME is stored in its raw form which is mix of lower & upper case values. When any fuction in this case UPPER is applied to the COL_NAME, then this range value information cannot be used while scanning micro partitions and hence it will need to scan more partitions",
    "reference": "",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 2_56",
    "number": 56,
    "question": "Which access control privileges must be granted on specified resource monitors for roles other than account administrators to **View** and modify resource monitors as needed",
    "options": [
      {
        "id": 1,
        "value": "MODIFY"
      },
      {
        "id": 2,
        "value": "`CREATE`"
      },
      {
        "id": 3,
        "value": "`UPDATE`"
      },
      {
        "id": 4,
        "value": "MONITOR"
      }
    ],
    "answers": [
      1,
      4
    ],
    "explanation": "By default, resource monitors can only be created by account administrators and, therefore, can only be viewed and maintained by them. However, **Snowflake** supports enabling other users to **View** and modify resource monitors as needed. This functionality is implemented through the following access control privileges, which can be granted on specified resource monitors to specified roles:\n\n1. MONITOR\n2 MODIFY",
    "reference": "",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 4_48",
    "number": 48,
    "question": "Multi-cluster warehouses are best utilized for scaling resources to improve concurrency for users/queries",
    "options": [
      {
        "id": 1,
        "value": "TRUE"
      },
      {
        "id": 2,
        "value": "FALSE"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "",
    "reference": "https://docs.snowflake.com/en/user-guide/warehouses-multicluster.html",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 2_58",
    "number": 58,
    "question": "A user can upload one or more data files to an external **Stage**. If the **Stage** is a customer-managed container in a cloud storage service (like S3 in AWS), the user may or may not encrypt the data files using client-side encryption",
    "options": [
      {
        "id": 1,
        "value": "TRUE"
      },
      {
        "id": 2,
        "value": "FALSE"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "For external **Stage** encryption of data is optional, though **Snowflake** recommends to encrypt data using client side encryption for data stored outside **Snowflake**. ",
    "reference": "https://docs.snowflake.com/en/user-guide/security-encryption.html#encryption-key-rotation",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 2_59",
    "number": 59,
    "question": "What is correct about multi cluster virtual warehouses?",
    "options": [
      {
        "id": 1,
        "value": "Multi Cluster will remove the additional clusters as query demand decreases"
      },
      {
        "id": 2,
        "value": "Maximum of 5 multi cluster **Warehouse** can be created in one **Snowflake** account"
      },
      {
        "id": 3,
        "value": "Multi Cluster warehouses cannot be suspended"
      },
      {
        "id": 4,
        "value": "Multi Cluster **Warehouse** will spin up additional clusters when under high query workload which is beyond the current capacity"
      }
    ],
    "answers": [
      1,
      4
    ],
    "explanation": "A multi-cluster virtual **Warehouse** will scale up and scale down depending on the query & user demand",
    "reference": "",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 4_50",
    "number": 50,
    "question": "In maximized mode, what happens if the number of clusers are decreased? (e.g. previously min & max was 4, but now min & max cluster size is changed to 2)",
    "options": [
      {
        "id": 1,
        "value": "The number of clusters in maximized mode cannot be changed"
      },
      {
        "id": 2,
        "value": "Specified number of clusters shut down when they finish executing statements and the auto-suspend period elapses"
      },
      {
        "id": 3,
        "value": "Specified number of clusters shut down immediately, as soon as they finish executing statements"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "",
    "reference": "https://docs.snowflake.com/en/user-guide/warehouses-multicluster.html",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 3_1",
    "number": 1,
    "question": "If you have a **Table** with a 10-day retention period and increase the period to 20 days, then what happens to the data that is currently in **Time Travel** for past 2 days.",
    "options": [
      {
        "id": 1,
        "value": "The data will moved to fail safe immediately"
      },
      {
        "id": 2,
        "value": "The **Table** will lose all **Time Travel** data, and the new **Time Travel** retention period will be applied going forward"
      },
      {
        "id": 3,
        "value": "The data would moved to fail safe as per previous retention period only i.e. will move to fail safe after 10 days of **Time Travel**"
      },
      {
        "id": 4,
        "value": "The data would moved to fail safe as per new retention period i.e. will move to fail safe after 20 days of **Time Travel**"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "The correct answer is: The data would moved to fail safe as per new retention period i.e. will move to fail safe after 20 days of **Time Travel**.",
    "reference": "https://docs.snowflake.com/en/user-guide/data-time-travel.html",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_2",
    "number": 2,
    "question": "Secured **View** can be used to hide the definition but its performance can get degraded?",
    "options": [
      {
        "id": 1,
        "value": "TRUE"
      },
      {
        "id": 2,
        "value": "FALSE"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "TRUE.",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_3",
    "number": 3,
    "question": "Scaling out is an automated process (e.g. Min clusters to max clusters)",
    "options": [
      {
        "id": 1,
        "value": "TRUE"
      },
      {
        "id": 2,
        "value": "FALSE"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "Scale Out & Scale in is the change in the number of clusters serving the query workload on **Snowflake**. The process of scaling out / in is an automated process, and based on the scaling policy (Economy / Standard) that is defined and the workload on the **Warehouse**,  this change in the number of cluster happens automatically.",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_4",
    "number": 4,
    "question": "**Resource Monitor** notifications can be received only by account administrators",
    "options": [
      {
        "id": 1,
        "value": "FALSE"
      },
      {
        "id": 2,
        "value": "TRUE"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "FALSE.",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_5",
    "number": 5,
    "question": "Which command will help you the current permissions on a **Schema**?",
    "options": [
      {
        "id": 1,
        "value": "`SHOW` GRANTS ON **Schema**.;"
      },
      {
        "id": 2,
        "value": "`SHOW` ALL PREIVILEGE ON **Schema**.;"
      },
      {
        "id": 3,
        "value": "`SHOW` ROLES ON **Schema**.;"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_6",
    "number": 6,
    "question": "**Snowflake** has which type of architecture",
    "options": [
      {
        "id": 1,
        "value": "None of the above"
      },
      {
        "id": 2,
        "value": "Shared Disk"
      },
      {
        "id": 3,
        "value": "Hybrid of Shared disk & shared nothing"
      },
      {
        "id": 4,
        "value": "Shared Nothing"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "`ALTER` SHARE [ IF EXISTS ]{ ADD | `REMOVE` } ACCOUNTS =[ ,, … ] [ SHARE_RESTRICTIONS = { TRUE | FALSE } ]`ALTER` SHARE [ IFALTER SHARE [ IF EXISTS ]SET { [ ACCOUNTS =[ ,… ] ]",
    "reference": "https://docs.snowflake.com/en/user-guide/intro-key-concepts.html",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_7",
    "number": 7,
    "question": "Default Size of the **Warehouse** created using **Snowflake** Web UI is",
    "options": [
      {
        "id": 1,
        "value": "MEDIUM"
      },
      {
        "id": 2,
        "value": "SMALL"
      },
      {
        "id": 3,
        "value": "X-LARGE"
      },
      {
        "id": 4,
        "value": "X-SMALL"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "X-Smallis the default size for a **Snowflake** **Warehouse** created through the web UI. It’s a good starting point for most users, as it provides a balance of performance and cost-effectiveness. However, you can always adjust the size based on your specific workload requirements.",
    "reference": "https://docs.snowflake.com/en/user-guide/warehouses-overview.html",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_8",
    "number": 8,
    "question": "Which are the correct statements about TASKS?",
    "options": [
      {
        "id": 1,
        "value": "TASKS is used to scheduled SQL execution"
      },
      {
        "id": 2,
        "value": "Can not be triggered manually"
      },
      {
        "id": 3,
        "value": "TASKS is used to identify and act on changed **Table** records"
      },
      {
        "id": 4,
        "value": "It is used for Change Data Capture (CDC)"
      },
      {
        "id": 5,
        "value": "it can be used with STREAMS"
      }
    ],
    "answers": [
      1,
      5
    ],
    "explanation": "Here are the correct statements about TASKS in **Snowflake**:",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_9",
    "number": 9,
    "question": "In auto scale multi-cluster **Warehouse** same value is specified for both maximum & minimum clusters (except for the value 1)",
    "options": [
      {
        "id": 1,
        "value": "TRUE"
      },
      {
        "id": 2,
        "value": "FALSE"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "FALSE",
    "reference": "https://docs.snowflake.com/en/user-guide/warehouses-multicluster.html",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_10",
    "number": 10,
    "question": "Can you have a **Database** overlap across two **Snowflake** account?",
    "options": [
      {
        "id": 1,
        "value": "Yes"
      },
      {
        "id": 2,
        "value": "No"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "No, you cannot have a **Database** overlap across two **Snowflake** accounts.",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_11",
    "number": 11,
    "question": "MFA is automatically enabled for all the users. Please select the true statement.",
    "options": [
      {
        "id": 1,
        "value": "MFA is only enabled for `ACCOUNTADMIN` by default. `ACCOUNTADMIN` can enable it for other users."
      },
      {
        "id": 2,
        "value": "MFA is available for all the users by default."
      }
    ],
    "answers": [
      2
    ],
    "explanation": "",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_12",
    "number": 12,
    "question": "If a 3X-Large multi-cluster **Warehouse** runs 1 cluster for one full hour and then runs 2 clusters for the next full hour, the total number of credits billed would be",
    "options": [
      {
        "id": 1,
        "value": "128"
      },
      {
        "id": 2,
        "value": "256"
      },
      {
        "id": 3,
        "value": "192"
      },
      {
        "id": 4,
        "value": "64"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "",
    "reference": "https://docs.snowflake.com/en/user-guide/warehouses-overview.html",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_13",
    "number": 13,
    "question": "For how long are we billed if our **Warehouse** runs for 48 seconds?",
    "options": [
      {
        "id": 1,
        "value": "We are not going to be billed if the query scans less than 10 micro-partitions."
      },
      {
        "id": 2,
        "value": "1 minute."
      },
      {
        "id": 3,
        "value": "We are not going to be billed as the **Warehouse** hasn’t run for 1 minute."
      },
      {
        "id": 4,
        "value": "48 seconds."
      }
    ],
    "answers": [
      2
    ],
    "explanation": "You will be billed for 1 minute.",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_14",
    "number": 14,
    "question": "Scaling a **Warehouse** IN will decrease the number of clusters. (e.g. Max to Min)",
    "options": [
      {
        "id": 1,
        "value": "FALSE"
      },
      {
        "id": 2,
        "value": "TRUE"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "TRUE.",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_15",
    "number": 15,
    "question": "Which of these can access **Database** objects and issue SQL statements",
    "options": [
      {
        "id": 1,
        "value": "User-Defined Function"
      },
      {
        "id": 2,
        "value": "Both"
      },
      {
        "id": 3,
        "value": "Stored Procedure"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "Both User-Defined Functions (UDFs) and Stored Procedures can access **Database** objects and issue SQL statements.",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_16",
    "number": 16,
    "question": "Which is the correct syntax to disable fail safe on a **Table**?",
    "options": [
      {
        "id": 1,
        "value": "By default, fail safe is disabled on a **Table**."
      },
      {
        "id": 2,
        "value": "Fail safe can not be disabled on a **Table**."
      },
      {
        "id": 3,
        "value": "`ALTER` **Table** SET FAILSAFE_DAYS = 0;"
      },
      {
        "id": 4,
        "value": "`ALTER` **Table** `DROP` FAILSAFE;"
      },
      {
        "id": 5,
        "value": "`ALTER` **Table** SET ENABLE_FAILSAFE = FALSE;"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "The correct answer relates to how **Fail-safe** works within **Snowflake**. Here’s a breakdown:",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_17",
    "number": 17,
    "question": "Loading using SNOWPIPE is best useful for:",
    "options": [
      {
        "id": 1,
        "value": "Load large files with size of 500 MB"
      },
      {
        "id": 2,
        "value": "None of these"
      },
      {
        "id": 3,
        "value": "Data Files which takes at least 30 to 60 Minutes."
      },
      {
        "id": 4,
        "value": "Load small volumes of data incrementally"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_18",
    "number": 18,
    "question": "What can be the maximum credits consumed by a medium size **Warehouse** with 3 clusters in one hour?",
    "options": [
      {
        "id": 1,
        "value": "24"
      },
      {
        "id": 2,
        "value": "12"
      },
      {
        "id": 3,
        "value": "6"
      },
      {
        "id": 4,
        "value": "8"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "Here’s how to calculate the maximum credits consumed:",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_19",
    "number": 19,
    "question": "Scaling a **Warehouse** OUT will increase the number of servers. (e.g. Min to Max)",
    "options": [
      {
        "id": 1,
        "value": "FALSE"
      },
      {
        "id": 2,
        "value": "TRUE"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "TRUE",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_20",
    "number": 20,
    "question": "When using a LATERAL FLATTEN in a semi-structured data query, what does the LATERAL do?",
    "options": [
      {
        "id": 1,
        "value": "Causes the FLATTEN command to read an array in reverse order"
      },
      {
        "id": 2,
        "value": "Causes the FLATTEN command to be recursive and drill down into all levels of the record"
      },
      {
        "id": 3,
        "value": "Modifies the data in an array to a variant data type so it will work with the FLATTEN command"
      },
      {
        "id": 4,
        "value": "Breaks an array into multiple elements"
      },
      {
        "id": 5,
        "value": "Works as a self join to join the current record key / value pairs to an array in the same record"
      }
    ],
    "answers": [
      5
    ],
    "explanation": "Let’s break down the purpose ofLATERALin aFLATTENoperation:",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_21",
    "number": 21,
    "question": "If you are defining a multi-column **Clustering Key** of a **Table**, the order in which the columns are specified in the CLUSTER BY clause is important. As general rule, **Snowflake** recommends:",
    "options": [
      {
        "id": 1,
        "value": "Ordering the columns from highest cardinality to lowest cardinality"
      },
      {
        "id": 2,
        "value": "Ordering the columns from lowest cardinality to highest cardinality"
      },
      {
        "id": 3,
        "value": "Order doesn‘t matter"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_22",
    "number": 22,
    "question": "Which command should a **Snowflake** user execute to load data into a **Table**?",
    "options": [
      {
        "id": 1,
        "value": "copy into mytable file_format = (format_name);"
      },
      {
        "id": 2,
        "value": "copy into mytable purge_mode = TRUE;"
      },
      {
        "id": 3,
        "value": "copy into mytable validation = ‘RETURN_ERRORS’;"
      },
      {
        "id": 4,
        "value": "copy into mytable from @my_int_stage;"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "Correct Option: D. copy into mytable from @my_int_stage;",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_23",
    "number": 23,
    "question": "If auto-suspend is enabled for a Virtual **Warehouse**, the **Warehouse** is automatically suspended when:",
    "options": [
      {
        "id": 1,
        "value": "There are no users logged into **Snowflake**."
      },
      {
        "id": 2,
        "value": "The **Warehouse** is inactive for a specified period of time."
      },
      {
        "id": 3,
        "value": "The last query using the **Warehouse** completes."
      },
      {
        "id": 4,
        "value": "All Snowflakes sessions using the **Warehouse** are terminated."
      }
    ],
    "answers": [
      2
    ],
    "explanation": "The correct answer is:The **Warehouse** is inactive for a specified period of time.",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_24",
    "number": 24,
    "question": "Which statistic displayed in a Query Profile is specific to external functions?",
    "options": [
      {
        "id": 1,
        "value": "Total invocations"
      },
      {
        "id": 2,
        "value": "Bytes sent over the network"
      },
      {
        "id": 3,
        "value": "Partitions scanned"
      },
      {
        "id": 4,
        "value": "Bytes written"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "Total invocations — number of times that an external function was called. (This can be different from the number of external function calls in the text of the SQL statement due to the number of batches that rows are divided into, the number of retries (if there are transient network problems), etc.)",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_25",
    "number": 25,
    "question": "Which command will we use to download the files from the **Stage**/location loaded through the `COPY` INTOcommand?",
    "options": [
      {
        "id": 1,
        "value": "UNLOAD."
      },
      {
        "id": 2,
        "value": "`PUT`."
      },
      {
        "id": 3,
        "value": "`GET`."
      },
      {
        "id": 4,
        "value": "`INSERT` INTO."
      }
    ],
    "answers": [
      3
    ],
    "explanation": "We will use the `GET` command to DOWNLOAD files from a **Snowflake** internal **Stage** (named internal **Stage**, user **Stage**, or **Table** **Stage**) into a directory/folder on a client machine. You need to use SnowSQL to use this command.",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_26",
    "number": 26,
    "question": "Which of the following statements are true concerning the **Snowflake** release process? (Choose three.)",
    "options": [
      {
        "id": 1,
        "value": "It is possible for you as a user to request 24-hour early access to the upcoming releases so that you can do additional release testing before the release is rolled out."
      },
      {
        "id": 2,
        "value": "A customer is assigned a 30 minute window (that can be moved anytime within a week) during which the system will be unavailable and customer is upgraded"
      },
      {
        "id": 3,
        "value": "**Snowflake** deploys patch releases every week, but new feature releases happen once a month."
      },
      {
        "id": 4,
        "value": "There is usually some minimal downtime associated with **Snowflake** during the deployments."
      },
      {
        "id": 5,
        "value": "**Snowflake** deploys new feature releases and releases every week."
      },
      {
        "id": 6,
        "value": "**Snowflake** deploys new Behavior change releases every month."
      }
    ],
    "answers": [
      1,
      5,
      6
    ],
    "explanation": "The deployment processes happen transparently in the background; users experience no downtime or disruption of service. You can see the different release types at the following link.",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_27",
    "number": 27,
    "question": "Which of the following sizes is not a **Warehouse** Size?",
    "options": [
      {
        "id": 1,
        "value": "XXS"
      },
      {
        "id": 2,
        "value": "S"
      },
      {
        "id": 3,
        "value": "M"
      },
      {
        "id": 4,
        "value": "XS"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "The minimum configuration for a **Snowflake** **Warehouse** is X-Small (XS), which consumes one credit/hour. You can see the different sizes in the following image:",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_28",
    "number": 28,
    "question": "When can a Virtual **Warehouse** start running queries?",
    "options": [
      {
        "id": 1,
        "value": "When its provisioning is complete"
      },
      {
        "id": 2,
        "value": "Only during administrator defined time slots"
      },
      {
        "id": 3,
        "value": "After replication"
      },
      {
        "id": 4,
        "value": "12am-5am"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "Virtual warehouses can be configure to `AUTO_RESUME`=true/false, accordingly once it provision it start executing the queries.",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_29",
    "number": 29,
    "question": "Which file function provides a URL with access to a file on a **Stage** without the need for authentication and authorization?",
    "options": [
      {
        "id": 1,
        "value": "GET_RELATIVE_PATH"
      },
      {
        "id": 2,
        "value": "GET_PRESIGNED_URL"
      },
      {
        "id": 3,
        "value": "BUILD_SCOPED_FILE_URL"
      },
      {
        "id": 4,
        "value": "BUILD_STAGE_FILE_URL"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "The correct answer isGET_PRESIGNED_URL.",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_30",
    "number": 30,
    "question": "What is used to extract the content of PDF files stored in **Snowflake** stages?",
    "options": [
      {
        "id": 1,
        "value": "Window function"
      },
      {
        "id": 2,
        "value": "HyperLogLog (HLL) function"
      },
      {
        "id": 3,
        "value": "FLATTEN function"
      },
      {
        "id": 4,
        "value": "Java User-Defined Function (UDF)"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "Correct Option:\n\n- D.\n- Java User-Defined Function (UDF)",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_31",
    "number": 31,
    "question": "Which columns are part of the result set of the **Snowflake** LATERAL FLATTEN command? (Choose two.)",
    "options": [
      {
        "id": 1,
        "value": "INDEX"
      },
      {
        "id": 2,
        "value": "CONTENT"
      },
      {
        "id": 3,
        "value": "DATATYPE"
      },
      {
        "id": 4,
        "value": "PATH"
      },
      {
        "id": 5,
        "value": "BYTE_SIZE"
      }
    ],
    "answers": [
      1,
      4
    ],
    "explanation": "You are correct. The two columns that are part of the result set of the Snowflake `LATERAL FLATTEN` command are:",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_32",
    "number": 32,
    "question": "How does **Snowflake** store a **Table**‘s underlying data? (Choose two.)",
    "options": [
      {
        "id": 1,
        "value": "Columnar file format"
      },
      {
        "id": 2,
        "value": "Text file format"
      },
      {
        "id": 3,
        "value": "User-defined partitions"
      },
      {
        "id": 4,
        "value": "Micro-partitions"
      },
      {
        "id": 5,
        "value": "Uncompressed"
      }
    ],
    "answers": [
      1,
      4
    ],
    "explanation": "All data in **Snowflake** tables is automatically divided into micro-partitions, which are contiguous units of storage. Each **Micro-partition** contains between 50 MB and 500 MB of uncompressed data (note that the actual size in **Snowflake** is smaller because data is always stored compressed). Groups of rows in tables are mapped into individual micro-partitions, organized in a columnar fashion.",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_33",
    "number": 33,
    "question": "At which point is data encrypted when using a `PUT` command?",
    "options": [
      {
        "id": 1,
        "value": "Before it is sent from the user‘s machine"
      },
      {
        "id": 2,
        "value": "When it gets micro-partitioned"
      },
      {
        "id": 3,
        "value": "After it reaches the internal **Stage**"
      },
      {
        "id": 4,
        "value": "When it reaches the virtual **Warehouse**"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "The correct answer isBefore it is sent from the user’s machine.",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_34",
    "number": 34,
    "question": "What are the available **Snowflake** scaling modes for configuring multi-cluster virtual warehouses? (Choose two.)",
    "options": [
      {
        "id": 1,
        "value": "Standard"
      },
      {
        "id": 2,
        "value": "Economy"
      },
      {
        "id": 3,
        "value": "Auto-Scale"
      },
      {
        "id": 4,
        "value": "Maximized"
      },
      {
        "id": 5,
        "value": "Scale-Out"
      }
    ],
    "answers": [
      3,
      4
    ],
    "explanation": "The two available **Snowflake** scaling modes for configuring multi-cluster virtual warehouses are:",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_35",
    "number": 35,
    "question": "In which layer of **Snowflake** architecture is stored all security-related information?",
    "options": [
      {
        "id": 1,
        "value": "All of the above."
      },
      {
        "id": 2,
        "value": "Compute."
      },
      {
        "id": 3,
        "value": "Cloud Services."
      },
      {
        "id": 4,
        "value": "Storage."
      }
    ],
    "answers": [
      3
    ],
    "explanation": "The Cloud Services layer is a collection of services coordinating activities across **Snowflake**. It‘s in charge of Authentication, Infrastructure management, Metadata management, Query parsing and optimization, and Access control.",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_36",
    "number": 36,
    "question": "Which is the MINIMUM required **Snowflake** edition that a user must have if they want to use AWS/Azure Privatelink or Google Cloud Private Service Connect?",
    "options": [
      {
        "id": 1,
        "value": "Premium"
      },
      {
        "id": 2,
        "value": "Standard"
      },
      {
        "id": 3,
        "value": "Business Critical"
      },
      {
        "id": 4,
        "value": "Enterprise"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "Theminimum required **Snowflake** editionthat a user must have to utilize AWS PrivateLink, Azure Private Link, or Google Cloud Private Service Connect is theBusiness Criticaledition. This requirement ensures that users can take advantage of these private connectivity options for enhanced security and performance in their cloud environments",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_37",
    "number": 37,
    "question": "Which of the below APIs are NOT Snowpipe REST APIs? (Choose two.)",
    "options": [
      {
        "id": 1,
        "value": "insertFiles"
      },
      {
        "id": 2,
        "value": "insertHistoryScan"
      },
      {
        "id": 3,
        "value": "loadHistoryScan"
      },
      {
        "id": 4,
        "value": "insertReport"
      },
      {
        "id": 5,
        "value": "loadFiles"
      }
    ],
    "answers": [
      2,
      5
    ],
    "explanation": "You can make calls to REST endpoints to get information. For example, by calling the following `insertReport` endpoint, you can get a report of files submitted via insertFiles:`GET https://xxx.snowflakecomputing.com/v1/data/pipes/insertReport`",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_38",
    "number": 38,
    "question": "What is the storage hierarchy in **Snowflake**?",
    "options": [
      {
        "id": 1,
        "value": "Account → Schemas → Databases → Objects."
      },
      {
        "id": 2,
        "value": "Account → Databases → Objects → Schemas."
      },
      {
        "id": 3,
        "value": "Account → Databases → Schemas → Objects."
      },
      {
        "id": 4,
        "value": "Account → Databases → Warehouses → Objects."
      }
    ],
    "answers": [
      3
    ],
    "explanation": "The top-most container is the customer organization. All databases for your **Snowflake** account are contained in the account object. Securable objects such as tables, views, stages, and UDFs are contained in a **Schema** object, which is, in turn, contained in a **Database**. You can see the complete **Snowflake** hierarchy in the following image (via docs.snowflake.com):",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_39",
    "number": 39,
    "question": "What technique does **Snowflake** recommend for determining which virtual **Warehouse** size to select?",
    "options": [
      {
        "id": 1,
        "value": "Use the default size **Snowflake** chooses"
      },
      {
        "id": 2,
        "value": "Experiment by running the same queries against warehouses of different sizes"
      },
      {
        "id": 3,
        "value": "Always start with an X-Small and increase the size if the query does not complete in 2 minutes"
      },
      {
        "id": 4,
        "value": "Use X-Large or above for tables larger than 1 GB"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "Experimenting with different **Warehouse** sizesis the most effective way to determine the optimal size for your specific **Snowflake** workloads.",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_40",
    "number": 40,
    "question": "A **Snowflake** user wants to optimize performance for a query that queries only a small number of rows in a **Table**. The rows require significant processing. The data in the **Table** does not change frequently.What should the user do?",
    "options": [
      {
        "id": 1,
        "value": "Create a materialized **View** based on the query."
      },
      {
        "id": 2,
        "value": "Enable the query acceleration service for the virtual **Warehouse**."
      },
      {
        "id": 3,
        "value": "Add the search optimization service to the **Table**."
      },
      {
        "id": 4,
        "value": "Add a **Clustering Key** to the **Table**."
      }
    ],
    "answers": [
      1
    ],
    "explanation": "Materialized views are particularly useful when:Query results contain a small number of rows and/or columns relative to the base **Table** (the **Table** on which the **View** is defined).Query results contain results that require significant processing, including:Analysis of semi-structured data.Aggregates that take a long time to calculate.The query is on an external **Table** (i.e. data sets stored in files in an external **Stage**), which might have slower performance compared to querying native **Database** tables.The **View**’s base **Table** does not change frequently.",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_41",
    "number": 41,
    "question": "**Snowflake** provides two mechanisms to reduce data storage costs for short-lived tables. These mechanisms are: (Choose two.)",
    "options": [
      {
        "id": 1,
        "value": "Materialized views"
      },
      {
        "id": 2,
        "value": "Transient Tables"
      },
      {
        "id": 3,
        "value": "Provisional Tables"
      },
      {
        "id": 4,
        "value": "Temporary Tables"
      },
      {
        "id": 5,
        "value": "Permanent Tables"
      }
    ],
    "answers": [
      2,
      4
    ],
    "explanation": "",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_42",
    "number": 42,
    "question": "Which of these commands require a running **Warehouse**?",
    "options": [
      {
        "id": 1,
        "value": "`SELECT` MAX(AGE)`FROM` USERS_TABLE;"
      },
      {
        "id": 2,
        "value": "`SELECT` COUNT(*)`FROM` USERS_TABLE;EXPLAIN USING TABULAR"
      },
      {
        "id": 3,
        "value": "`SELECT` *`FROM` USERS_TABLEWHERE email=’test@test.com’;"
      },
      {
        "id": 4,
        "value": "`SELECT` COUNT(*) `FROM` USERS_TABLE"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "Out of the provided options, only one command requires a running **Warehouse**:",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_43",
    "number": 43,
    "question": "How is **Table** data compressed in **Snowflake**?",
    "options": [
      {
        "id": 1,
        "value": "The text data in a **Micro-partition** is compressed with GZIP but other types are not compressed."
      },
      {
        "id": 2,
        "value": "Each column is compressed as it is stored in a **Micro-partition**."
      },
      {
        "id": 3,
        "value": "The micro-partitions are stored in compressed cloud storage and the cloud storage handles compression."
      },
      {
        "id": 4,
        "value": "Each **Micro-partition** is compressed as it is written into cloud storage using GZIP."
      }
    ],
    "answers": [
      2
    ],
    "explanation": "**Snowflake** automatically determines the most efficient compression algorithm for the columns in each **Micro-partition**.",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_44",
    "number": 44,
    "question": "What should be the first option to restore data into a **Table**?",
    "options": [
      {
        "id": 1,
        "value": "Time-Travel."
      },
      {
        "id": 2,
        "value": "Zero-Copy Cloning."
      },
      {
        "id": 3,
        "value": "**Fail-safe**."
      },
      {
        "id": 4,
        "value": "Ask **Snowflake** Support"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "Time-Travel enables accessing historical data (i.e., data that has been changed or deleted) at any point within a defined period. If we drop a **Table**, we can restore it with **Time Travel**. You can use it with Databases, Schemas & Tables. The following diagram explains how Time-Travel works:",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_45",
    "number": 45,
    "question": "What property from the Resource Monitors lets you specify whether you want to control the credit usage of your entire account or a specific set of warehouses?",
    "options": [
      {
        "id": 1,
        "value": "Credit Quota."
      },
      {
        "id": 2,
        "value": "Schedule."
      },
      {
        "id": 3,
        "value": "Notification."
      },
      {
        "id": 4,
        "value": "Monitor Level."
      }
    ],
    "answers": [
      4
    ],
    "explanation": "The monitor level is a property that specifies whether the **Resource Monitor** is used to monitor the credit usage for your entire account or individual warehouses.",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_46",
    "number": 46,
    "question": "How many children tasks can a task have?",
    "options": [
      {
        "id": 1,
        "value": "1000"
      },
      {
        "id": 2,
        "value": "10"
      },
      {
        "id": 3,
        "value": "1"
      },
      {
        "id": 4,
        "value": "100"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "**Snowflake** tasks are schedulable scripts that are run inside your **Snowflake** environment. Users can define a simple tree-like structure of tasks that starts with a root task and is linked together by task dependencies. The children‘s tasks only run after the parent‘s task finishes. A single task can have a maximum of 100 predecessor tasks and 100 child tasks.",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_47",
    "number": 47,
    "question": "While loading data through the `COPY` command, you can transform the data.Which of the below transformations is not allowed?",
    "options": [
      {
        "id": 1,
        "value": "Omit columns."
      },
      {
        "id": 2,
        "value": "Cast."
      },
      {
        "id": 3,
        "value": "Truncate columns."
      },
      {
        "id": 4,
        "value": "Filters."
      },
      {
        "id": 5,
        "value": "Reorder columns."
      }
    ],
    "answers": [
      4
    ],
    "explanation": "Filtersis the transformation that is not allowed during the `COPY` command.",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_48",
    "number": 48,
    "question": "A developer is granted ownership of a **Table** that has a masking policy. The developer’s role is not able to see the masked data.Will the developer be able to modify the **Table** to read the masked data?",
    "options": [
      {
        "id": 1,
        "value": "Yes, because a **Table** owner has full control and can unset masking policies."
      },
      {
        "id": 2,
        "value": "Yes, because masking policies only apply to cloned tables."
      },
      {
        "id": 3,
        "value": "No, because masking policies must always reference specific access roles."
      },
      {
        "id": 4,
        "value": "No, because ownership of a **Table** does not include the ability to change masking policies."
      }
    ],
    "answers": [
      4
    ],
    "explanation": "Object owners (i.e. the role that has the OWNERSHIP privilege on the object) do not have the privilege to unset masking policies.Object owners cannot **View** column data in which a masking policy applies.",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_49",
    "number": 49,
    "question": "Which of the following is not a valid context functions in **Snowflake**?",
    "options": [
      {
        "id": 1,
        "value": "`SELECT` CURRENT_PROVIDER()"
      },
      {
        "id": 2,
        "value": "`SELECT` CURRENT_CLIENT()"
      },
      {
        "id": 3,
        "value": "`SELECT` CURRENT_ACCOUNT()"
      },
      {
        "id": 4,
        "value": "`SELECT` CURRENT_IP_ADDRESS()"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "The answer is:`SELECT` CURRENT_PROVIDER()",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_50",
    "number": 50,
    "question": "Which loop type iterates until a condition is true?",
    "options": [
      {
        "id": 1,
        "value": "REPEAT"
      },
      {
        "id": 2,
        "value": "WHILE"
      },
      {
        "id": 3,
        "value": "LOOP"
      },
      {
        "id": 4,
        "value": "FOR"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "A REPEAT loop iterates until a condition is true. In a REPEAT loop, the condition is tested immediately after executing the body of the loop. As a result, the body of the loop always executes at least once.A WHILE loop iterates while a condition is true. In a WHILE loop, the condition is tested immediately before executing the body of the loop. If the condition is false before the first iteration, then the body of the loop does not execute even once.",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_51",
    "number": 51,
    "question": "Which **Snowflake** edition (and above) allows until 90 days of **Time Travel**?",
    "options": [
      {
        "id": 1,
        "value": "Business Critical."
      },
      {
        "id": 2,
        "value": "Enterprise."
      },
      {
        "id": 3,
        "value": "Standard."
      },
      {
        "id": 4,
        "value": "Virtual Private **Snowflake**"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "By default, **Time Travel** is enabled with a 1-day retention period. However, we can increase it to 90 days if we have (at least) the **Snowflake** Enterprise Edition. It requires additional storage, which will be reflected in your monthly storage charges.",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_52",
    "number": 52,
    "question": "You have two virtual warehouses in your **Snowflake** account. If one of them updates the data in the storage layer, when will the other one see it?",
    "options": [
      {
        "id": 1,
        "value": "Once all the compute resources are provisioned for the second **Warehouse**."
      },
      {
        "id": 2,
        "value": "After an average time of 5 seconds."
      },
      {
        "id": 3,
        "value": "Immediately."
      },
      {
        "id": 4,
        "value": "After the sync process."
      }
    ],
    "answers": [
      3
    ],
    "explanation": "All the warehouses of your account share the storage layer, so if the data is updated, all the warehouses will be able to see it. You can see this behavior in the following image:",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_53",
    "number": 53,
    "question": "During periods of **Warehouse** contention, which parameter controls the maximum length of time a **Warehouse** will hold a query for processing?",
    "options": [
      {
        "id": 1,
        "value": "STATEMENT_TIMEOUT_IN_SECONDS"
      },
      {
        "id": 2,
        "value": "STATEMENT_QUEUED_TIMEOUT_IN_SECONDS"
      },
      {
        "id": 3,
        "value": "`MAX_CONCURRENCY_LEVEL`"
      },
      {
        "id": 4,
        "value": "QUERY_TIMEOUT_IN_SECONDS"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "STATEMENT_QUEUED_TIMEOUT_IN_SECONDSAmount of time, in seconds, a SQL statement (query, DDL, DML, etc.) remains queued for a **Warehouse** before it is canceled by the system.",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_54",
    "number": 54,
    "question": "A **Snowflake** user wants to share data using my_share with account xy12345.Which command should be used?",
    "options": [
      {
        "id": 1,
        "value": "grant select on share my_share to account xy12345;"
      },
      {
        "id": 2,
        "value": "grant usage on share my_share to account xy12345;"
      },
      {
        "id": 3,
        "value": "alter account xy12345 add share my_share;"
      },
      {
        "id": 4,
        "value": "alter share my_share add accounts = xy12345;"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "`ALTER` SHARE [ IF EXISTS ]{ ADD | `REMOVE` } ACCOUNTS =[ ,, … ] [ SHARE_RESTRICTIONS = { TRUE | FALSE } ]`ALTER` SHARE [ IFALTER     SHARE [ IF EXISTS ]SET { [ ACCOUNTS =[ ,… ] ]",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_55",
    "number": 55,
    "question": "What are the types of data consumer accounts available in **Snowflake**? (Choose two.)",
    "options": [
      {
        "id": 1,
        "value": "`PUBLIC` Account"
      },
      {
        "id": 2,
        "value": "Shared Account"
      },
      {
        "id": 3,
        "value": "Reader Account"
      },
      {
        "id": 4,
        "value": "Subscriber account"
      },
      {
        "id": 5,
        "value": "Full Account"
      }
    ],
    "answers": [
      3,
      5
    ],
    "explanation": "There are two types of data consumers. The first one is the Full Accounts, the consumers with existing **Snowflake** accounts. In this case, the consumer account pays for the queries they make. We also have the Reader Accounts, the consumers without **Snowflake** accounts. In this last case, the producer account pays all the compute credits that their warehouses use. You can see this behavior in the following diagram:",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_56",
    "number": 56,
    "question": "What is the minimum **Snowflake** edition that you need for the **Data Sharing** capability?",
    "options": [
      {
        "id": 1,
        "value": "Virtual Private **Snowflake**"
      },
      {
        "id": 2,
        "value": "Standard"
      },
      {
        "id": 3,
        "value": "Enterprise"
      },
      {
        "id": 4,
        "value": "Business Critical"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "The minimum **Snowflake** edition required for the **Data Sharing** capability isStandard.",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_57",
    "number": 57,
    "question": "Which certifications are compliant with **Snowflake**? (Choose three.)",
    "options": [
      {
        "id": 1,
        "value": "FedRAMP."
      },
      {
        "id": 2,
        "value": "PCI-DSS."
      },
      {
        "id": 3,
        "value": "ISO 9000."
      },
      {
        "id": 4,
        "value": "SC-900."
      },
      {
        "id": 5,
        "value": "HIPAA."
      }
    ],
    "answers": [
      1,
      2,
      5
    ],
    "explanation": "When considering **Snowflake**’s compliance, it’s essential to distinguish between **Snowflake**’s own compliance certifications and **Snowflake**’s certification programs for individuals. Here’s a breakdown:",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_58",
    "number": 58,
    "question": "Which function returns the name of the **Warehouse** of the current session?",
    "options": [
      {
        "id": 1,
        "value": "RUNNING_WAREHOUSE()"
      },
      {
        "id": 2,
        "value": "**Warehouse**()"
      },
      {
        "id": 3,
        "value": "CURRENT_WAREHOUSE()"
      },
      {
        "id": 4,
        "value": "ACTIVE_WAREHOUSE()"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "I’m not a big fan of learning commands by heart, and they are unlikely to appear on the exam, but this one may be useful. You have other commands to show the current **Database** and **Schema**, as you can see by executing the following command:`SELECT` CURRENT_WAREHOUSE(), CURRENT_DATABASE(), CURRENT_SCHEMA();",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_59",
    "number": 59,
    "question": "What technique does **Snowflake** use to limit the number of micro-partitions retrieved as part of a query?",
    "options": [
      {
        "id": 1,
        "value": "Indexing."
      },
      {
        "id": 2,
        "value": "Pruning."
      },
      {
        "id": 3,
        "value": "Computing."
      },
      {
        "id": 4,
        "value": "Clustering."
      }
    ],
    "answers": [
      2
    ],
    "explanation": "Query pruning consists of analyzing the smallest number of micro-partitions to solve a query. This technique retrieves all the necessary data to give a solution without looking at all the micro-partitions, saving a lot of time to return for the result.",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_60",
    "number": 60,
    "question": "A medium (M) **Warehouse** has auto-suspend configured after 15 minutes. You have noticed that all of the queries that run on this **Warehouse** finish within a minute. What will you do to optimize compute costs?",
    "options": [
      {
        "id": 1,
        "value": "Delete the **Warehouse** after a minute."
      },
      {
        "id": 2,
        "value": "Disable the auto-suspend option."
      },
      {
        "id": 3,
        "value": "Use another data-**Warehouse**."
      },
      {
        "id": 4,
        "value": "Reduce the auto-suspend time to 1 minute."
      }
    ],
    "answers": [
      4
    ],
    "explanation": "By reducing the minutes of the “auto-suspend“ option, the **Warehouse** will automatically go to sleep after 60 seconds of inactivity, significantly reducing credit consumption.",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 4_1",
    "number": 1,
    "question": "What is the default compression of the output files generated by **Snowflake** when unloading data",
    "options": [
      {
        "id": 1,
        "value": "brotli"
      },
      {
        "id": 2,
        "value": "gzip"
      },
      {
        "id": 3,
        "value": "Zstandard"
      },
      {
        "id": 4,
        "value": "bzip2"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "By default, all unloaded data files are compressed using gzip, unless compression is explicitly disabled or one of the other supported compression methods is explicitly specified.",
    "reference": "",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 4_52",
    "number": 52,
    "question": "Which of the following are true of Multi-Cluster warehouses? Select all that apply.",
    "options": [
      {
        "id": 1,
        "value": "Scales In when query activity slows"
      },
      {
        "id": 2,
        "value": "Adds clusters automatically based on query activity"
      },
      {
        "id": 3,
        "value": "Sizes each cluster optimally based on the queries"
      },
      {
        "id": 4,
        "value": "Multi-cluster warehouses will never auto-suspend"
      }
    ],
    "answers": [
      1,
      2
    ],
    "explanation": "",
    "reference": "https://docs.snowflake.com/en/user-guide/warehouses-multicluster.html",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 4_54",
    "number": 54,
    "question": "Which scaling policy, conserves credits by favoring keeping running clusters fully-loaded rather than starting additional clusters, which may result in queries being queued and taking longer to complete?",
    "options": [
      {
        "id": 1,
        "value": "Economy"
      },
      {
        "id": 2,
        "value": "None"
      },
      {
        "id": 3,
        "value": "Standard"
      },
      {
        "id": 4,
        "value": "Legacy"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "",
    "reference": "https://docs.snowflake.com/en/user-guide/warehouses-multicluster.html",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 4_55",
    "number": 55,
    "question": "In auto scale mode, if new_min_clusters > running clusters, then additional clusters immediately started to meet the minimum.",
    "options": [
      {
        "id": 1,
        "value": "TRUE"
      },
      {
        "id": 2,
        "value": "FALSE"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "",
    "reference": "https://docs.snowflake.com/en/user-guide/warehouses-multicluster.html",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 4_57",
    "number": 57,
    "question": "How many credits will be consumed if a Medium-size **Warehouse** (4 servers per cluster) with 3 clusters runs in Maximized mode for 2 hours",
    "options": [
      {
        "id": 1,
        "value": "18"
      },
      {
        "id": 2,
        "value": "36"
      },
      {
        "id": 3,
        "value": "24"
      },
      {
        "id": 4,
        "value": "12"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "",
    "reference": "https://docs.snowflake.com/en/user-guide/warehouses-multicluster.html",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 4_59",
    "number": 59,
    "question": "In maximized mode, what happens if the number of clusers are increased? (e.g. previously min & max was 2, but now min & max cluster size is changed to 4)",
    "options": [
      {
        "id": 1,
        "value": "There will not be any immediate impact, and the additional clusters will start only when the query workload demands"
      },
      {
        "id": 2,
        "value": "Specified number of clusters (in this case 4) would start immediately"
      },
      {
        "id": 3,
        "value": "Specified number of clusters would start after current queries that are executed are completed"
      },
      {
        "id": 4,
        "value": "The number of clusters in maximized mode cannot be changed"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "",
    "reference": "https://docs.snowflake.com/en/user-guide/warehouses-multicluster.html",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 4_60",
    "number": 60,
    "question": "In maximized multi-cluster **Warehouse** same value is specified for both maximum & minimum clusters (except for the value 1)",
    "options": [
      {
        "id": 1,
        "value": "TRUE"
      },
      {
        "id": 2,
        "value": "FALSE"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "",
    "reference": "https://docs.snowflake.com/en/user-guide/warehouses-multicluster.html",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 4_8",
    "number": 8,
    "question": "A **Snowflake** session can have multiple current **Warehouse** at a time",
    "options": [
      {
        "id": 1,
        "value": "TRUE"
      },
      {
        "id": 2,
        "value": "FALSE"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "A **Snowflake** session can have only one current **Warehouse** at a time. The current **Warehouse** for a session can be specified or changed at any time through the `USE` **Warehouse** command.",
    "reference": "",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 4_31",
    "number": 31,
    "question": "When the **Warehouse** is resized (scaled up or out), then the additional servers that get added will be available for use by any queries that are queued or newly submitted",
    "options": [
      {
        "id": 1,
        "value": "TRUE"
      },
      {
        "id": 2,
        "value": "FALSE"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "",
    "reference": "https://docs.snowflake.com/en/user-guide/warehouses-overview.html",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 4_10",
    "number": 10,
    "question": "Which of the following are options when creating a Virtual **Warehouse**?",
    "options": [
      {
        "id": 1,
        "value": "Auto Resume"
      },
      {
        "id": 2,
        "value": "Auto Suspend"
      },
      {
        "id": 3,
        "value": "Storage Size"
      },
      {
        "id": 4,
        "value": "Cache Size"
      }
    ],
    "answers": [
      1,
      2
    ],
    "explanation": "",
    "reference": "https://docs.snowflake.com/en/user-guide/warehouses-tasks.html",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 4_42",
    "number": 42,
    "question": "**Snowflake** utilizes per-second billing (with a 60-second minimum each time the **Warehouse** starts)",
    "options": [
      {
        "id": 1,
        "value": "TRUE"
      },
      {
        "id": 2,
        "value": "FALSE"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "",
    "reference": "https://docs.snowflake.com/en/user-guide/warehouses-overview.html",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 4_56",
    "number": 56,
    "question": "Multi-cluster warehouses is only available in Enterprise Edition and above",
    "options": [
      {
        "id": 1,
        "value": "FALSE"
      },
      {
        "id": 2,
        "value": "TRUE"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "",
    "reference": "https://docs.snowflake.com/en/user-guide/warehouses-overview.html",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 4_13",
    "number": 13,
    "question": "Which type of **Stage** can store files that are staged and managed by one or more users and loaded into one or more tables",
    "options": [
      {
        "id": 1,
        "value": "User"
      },
      {
        "id": 2,
        "value": "**Table**"
      },
      {
        "id": 3,
        "value": "Named"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "A named internal **Stage** is a **Database** object created in a **Schema**. This **Stage** type can store files that are staged and managed by one or more users and loaded into one or more tables. Because named stages are **Database** objects, the ability to create, modify, use, or drop them can be controlled using security access control privileges. Create stages using the `CREATE` **Stage** command.",
    "reference": "",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 2_20",
    "number": 20,
    "question": "When a **Warehouse** is suspended, the idle servers in that **Warehouse** are immediately shut down, but any servers that are executing queries are allowed to run until the queries are completed. Such servers that are waiting to shut down are considered to be in which mode?",
    "options": [
      {
        "id": 1,
        "value": "Quiet"
      },
      {
        "id": 2,
        "value": "Quiesce"
      },
      {
        "id": 3,
        "value": "Suspending"
      },
      {
        "id": 4,
        "value": "Shutting Down"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "",
    "reference": "https://docs.snowflake.com/en/user-guide/warehouses-tasks.html",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 4_15",
    "number": 15,
    "question": "Copy options set in multiple locations are cumulative. Individual options set in one place override the same option set lower in the order of precedence.",
    "options": [
      {
        "id": 1,
        "value": "FALSE"
      },
      {
        "id": 2,
        "value": "TRUE"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "Refer Notes at link –https://docs.snowflake.com/en/user-guide/data-load-prepare.html",
    "reference": "https://docs.snowflake.com/en/user-guide/data-load-prepare.html",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 4_41",
    "number": 41,
    "question": "What happens when a suspended **Warehouse** is resized (e.g. resized from small to medium)?",
    "options": [
      {
        "id": 1,
        "value": "When size of a suspended **Warehouse** is increased it starts the **Warehouse**, and then suspends it back after provisioning additional servers"
      },
      {
        "id": 2,
        "value": "Additional Servers are added to the **Warehouse** immediately even in suspended state"
      },
      {
        "id": 3,
        "value": "A suspended **Warehouse** cannot be resized"
      },
      {
        "id": 4,
        "value": "Additional servers are provisioned only when the **Warehouse** is next resumed"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "",
    "reference": "https://docs.snowflake.com/en/user-guide/warehouses-tasks.html",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 4_17",
    "number": 17,
    "question": "When **Database** replication is setup, then querying tables and views in a secondary **Database** using **Time Travel** will always produce exact same results as that of when executing the same query in the primary **Database**.",
    "options": [
      {
        "id": 1,
        "value": "FALSE"
      },
      {
        "id": 2,
        "value": "TRUE"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "Querying tables and views in a secondary **Database** using **Time Travel** can produce different results than when executing the same query in the primary **Database**. Historical Data Historical data available to query in a primary **Database** using **Time Travel** is not replicated to secondary databases. For example, suppose data is loaded continuously into a **Table** every 10 minutes using Snowpipe, and a secondary **Database** is refreshed every hour. The refresh operation only replicates the latest version of the **Table**. While every hourly version of the **Table** within the retention window is available for query using **Time Travel**, none of the iterative versions within each hour (the individual Snowpipe loads) are available. Data Retention Period The data retention period for tables in a secondary **Database** begins when the secondary **Database** is refreshed with the DML operations (i.e. changing or deleting data) written to tables in the primary **Database**.",
    "reference": "",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 4_45",
    "number": 45,
    "question": "What all resources are provided by Virtual **Warehouse**?",
    "options": [
      {
        "id": 1,
        "value": "Metadata Storage"
      },
      {
        "id": 2,
        "value": "CPU"
      },
      {
        "id": 3,
        "value": "Temporary Storage"
      },
      {
        "id": 4,
        "value": "Permanent Storage"
      },
      {
        "id": 5,
        "value": "Memory"
      }
    ],
    "answers": [
      2,
      3,
      5
    ],
    "explanation": "",
    "reference": "https://docs.snowflake.com/en/user-guide/warehouses.html",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 2_15",
    "number": 15,
    "question": "Which of the following **Snowflake** Editions allow only a maximum of 1 day of **Time Travel**?",
    "options": [
      {
        "id": 1,
        "value": "VPS"
      },
      {
        "id": 2,
        "value": "Business Critical"
      },
      {
        "id": 3,
        "value": "Standard"
      },
      {
        "id": 4,
        "value": "Enterprise"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "Standard allows 1 day, while rest allows 90 days",
    "reference": "https://www.snowflake.com/pricing/pricing-guide/",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 2_34",
    "number": 34,
    "question": "What attributes make **Snowflake** a true SaaS solution?",
    "options": [
      {
        "id": 1,
        "value": "No hardware to purchase or configure."
      },
      {
        "id": 2,
        "value": "No creation of user accounts or roles is required."
      },
      {
        "id": 3,
        "value": "No maintenance upgrades or patches to install."
      },
      {
        "id": 4,
        "value": "No data storage costs."
      },
      {
        "id": 5,
        "value": "No query processing costs."
      },
      {
        "id": 6,
        "value": "Transparent releases don‘t require user intervention."
      }
    ],
    "answers": [
      1,
      3,
      6
    ],
    "explanation": "Refer link for **Snowflake** architecture details that make it a true SaaS offering",
    "reference": "https://docs.snowflake.com/en/user-guide/intro-key-concepts.html",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 4_21",
    "number": 21,
    "question": "Account parameters are also replicated, when a databse replication is setup",
    "options": [
      {
        "id": 1,
        "value": "TRUE"
      },
      {
        "id": 2,
        "value": "FALSE"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "Account parameters are not replicated.",
    "reference": "",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 4_22",
    "number": 22,
    "question": "Which is the default encoding considered in `COPY` command while loading delimited files like CSV, TSV?",
    "options": [
      {
        "id": 1,
        "value": "UCS-2"
      },
      {
        "id": 2,
        "value": "ANSI"
      },
      {
        "id": 3,
        "value": "UTF-16"
      },
      {
        "id": 4,
        "value": "UTF-8"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "For delimited files (CSV, TSV, etc.), the default character set is UTF-8. To use any other characters sets, you must explicitly specify the encoding to use for loading. For the list of supported character sets, see link –https://docs.snowflake.com/en/user-guide/intro-summary-loading.html",
    "reference": "https://docs.snowflake.com/en/user-guide/intro-summary-loading.html",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 1_7",
    "number": 7,
    "question": "Shares take place between which two groups?",
    "options": [
      {
        "id": 1,
        "value": "Sharers & Consumers"
      },
      {
        "id": 2,
        "value": "Providers & Consumers"
      },
      {
        "id": 3,
        "value": "Data Writers & Data Readers"
      },
      {
        "id": 4,
        "value": "Full Accounts & Reading Accounts"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "",
    "reference": "https://docs.snowflake.com/en/user-guide/data-sharing-intro.html",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_57",
    "number": 57,
    "question": "Which of the following **Database** objects can be cloned in **Snowflake**?",
    "options": [
      {
        "id": 1,
        "value": "All of the above"
      },
      {
        "id": 2,
        "value": "Schemas"
      },
      {
        "id": 3,
        "value": "Tables"
      },
      {
        "id": 4,
        "value": "Databases"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "",
    "reference": "https://docs.snowflake.com/en/sql-reference/sql/create-clone.html",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_17",
    "number": 17,
    "question": "Data Consumers can be set up to consume data using which two types of consuming accounts?",
    "options": [
      {
        "id": 1,
        "value": "Sharing Accounts & Query Accounts"
      },
      {
        "id": 2,
        "value": "Full Accounts & Reader Accounts"
      },
      {
        "id": 3,
        "value": "Sharing Accounts & Providing Accounts"
      },
      {
        "id": 4,
        "value": "Query Accounts & Full Accounts"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "",
    "reference": "https://docs.snowflake.com/en/user-guide/data-sharing-intro.html",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 4_26",
    "number": 26,
    "question": "A stream allows querying and consuming a set of changes to a **Table**, at the row level, between two transactional points of time",
    "options": [
      {
        "id": 1,
        "value": "TRUE"
      },
      {
        "id": 2,
        "value": "FALSE"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "A stream object records the delta of change data capture (CDC) information for a **Table** (such as a staging **Table**), including inserts and other data manipulation language (DML) changes. A stream allows querying and consuming a set of changes to a **Table**, at the row level, between two transactional points of time.",
    "reference": "",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 1_46",
    "number": 46,
    "question": "What technique does **Snowflake** use to limit the number of micro-partitions scanned by each query?",
    "options": [
      {
        "id": 1,
        "value": "Indexing"
      },
      {
        "id": 2,
        "value": "B-Tree"
      },
      {
        "id": 3,
        "value": "Map Reduce"
      },
      {
        "id": 4,
        "value": "Pruning"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "",
    "reference": "https://docs.snowflake.com/en/user-guide/tables-clustering-micropartitions.html",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 4_28",
    "number": 28,
    "question": "Which type of **Table** stream tracks all DML changes to the source **Table** including inserts, updates, deletes and also truncate?",
    "options": [
      {
        "id": 1,
        "value": "Insert-Only"
      },
      {
        "id": 2,
        "value": "Multifunction"
      },
      {
        "id": 3,
        "value": "Standard"
      },
      {
        "id": 4,
        "value": "Native"
      },
      {
        "id": 5,
        "value": "Append-Only"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "A standard (i.e. delta) **Table** stream tracks all DML changes to the source **Table**, including inserts, updates, and deletes (including **Table** truncates). This stream type performs a join on inserted and deleted rows in the change set to provide the row level delta. As a net effect, for example, a row that is inserted and then deleted between two transactional points of time in a **Table** is removed in the delta (i.e. is not returned when the stream is queried).",
    "reference": "",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 4_25",
    "number": 25,
    "question": "Which of the following tables cannot be cloned as permanent **Table**?",
    "options": [
      {
        "id": 1,
        "value": "Temporary Tables"
      },
      {
        "id": 2,
        "value": "Transient Tables"
      },
      {
        "id": 3,
        "value": "Permanent Tables"
      }
    ],
    "answers": [
      1,
      2
    ],
    "explanation": "",
    "reference": "https://docs.snowflake.com/en/user-guide/tables-temp-transient.html",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 4_30",
    "number": 30,
    "question": "Tasks cannot be chained together for successive execution to support more complex periodic processing",
    "options": [
      {
        "id": 1,
        "value": "TRUE"
      },
      {
        "id": 2,
        "value": "FALSE"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "A task object defines a recurring schedule for executing a SQL statement, including statements that call stored procedures. Tasks can be chained together for successive execution to support more complex periodic processing.",
    "reference": "",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 1_29",
    "number": 29,
    "question": "Which statements about Data Integration Tech Partners are true?",
    "options": [
      {
        "id": 1,
        "value": "Data Integration Tech Partner software can be used to extract data from other systems."
      },
      {
        "id": 2,
        "value": "Data Integration Tech Partner software can be used to carry out transformations."
      },
      {
        "id": 3,
        "value": "**Snowflake** can carry out transformations after loading files staged by partner software (ELT)."
      },
      {
        "id": 4,
        "value": "**Snowflake** must be used to extract data from other databases but Data Integration Tech Partner software can load data"
      },
      {
        "id": 5,
        "value": "**Snowflake** can be used to extract data from other databases but Data Integration Tech Partner software must be used to do transformations."
      },
      {
        "id": 6,
        "value": "Data Integration Tech Partner software should be used to deliver data to stages, **Snowflake** is then used to load the data"
      }
    ],
    "answers": [
      1,
      2,
      3,
      6
    ],
    "explanation": "",
    "reference": "https://docs.snowflake.com/en/user-guide/ecosystem-etl.html",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 4_32",
    "number": 32,
    "question": "The **Snowflake** credit usage for multi cluster virtual warehouses is based on",
    "options": [
      {
        "id": 1,
        "value": "For multi cluster credits are always charged based on the maximum cluster size that is defined"
      },
      {
        "id": 2,
        "value": "Total Number of clusters running and for the time period they are running"
      },
      {
        "id": 3,
        "value": "For multi cluster credits are always charged based on the average cluster size that is defined"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "**Snowflake** only charges for the exact amount of compute being used and for the time period it is being used",
    "reference": "",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 4_33",
    "number": 33,
    "question": "In the **Snowflake** Web UI which of the following is true?",
    "options": [
      {
        "id": 1,
        "value": "Each open worksheet can have different role, **Warehouse** and **Database** selected"
      },
      {
        "id": 2,
        "value": "For all open worksheet the session is same"
      },
      {
        "id": 3,
        "value": "For all open worksheets same role, **Warehouse** and **Database** apply"
      },
      {
        "id": 4,
        "value": "Each open worksheet is a different session"
      }
    ],
    "answers": [
      1,
      4
    ],
    "explanation": "Each worksheet in **Snowflake** Web UI is an independent session. Therefore, each worksheet can have its combination of **Database**, **Schema**, Virtual **Warehouse** & Role selected",
    "reference": "",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 4_34",
    "number": 34,
    "question": "The “load Metadata“ (which maintains which files have already been loaded) for a **Table** expires after how many days?",
    "options": [
      {
        "id": 1,
        "value": "64"
      },
      {
        "id": 2,
        "value": "7"
      },
      {
        "id": 3,
        "value": "14"
      },
      {
        "id": 4,
        "value": "365"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "The load Metadata expires after 64 days. Please see the link –https://docs.**Snowflake**.net/manuals/user-guide/data-load-considerations-load.html#load-Metadata",
    "reference": "https://docs.snowflake.net/manuals/user-guide/data-load-considerations-load.html#load-metadata",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 1_47",
    "number": 47,
    "question": "How often does **Snowflake** release new features?",
    "options": [
      {
        "id": 1,
        "value": "Weekly"
      },
      {
        "id": 2,
        "value": "Yearly"
      },
      {
        "id": 3,
        "value": "Never"
      },
      {
        "id": 4,
        "value": "Monthly"
      },
      {
        "id": 5,
        "value": "Bi-Annually"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "",
    "reference": "https://docs.snowflake.com/en/user-guide/intro-releases.html",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 4_36",
    "number": 36,
    "question": "When data is shared between **Snowflake** accounts, a **Database** is created on the consumer side for sharing purposes. The type of this **Database** is ?",
    "options": [
      {
        "id": 1,
        "value": "Read & Update Only"
      },
      {
        "id": 2,
        "value": "Read Only"
      },
      {
        "id": 3,
        "value": "Read & Insert Only"
      },
      {
        "id": 4,
        "value": "Read & Delete Only"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "The correct answer is read-only. The consumer creates a **Database** from the share and the **Database** is created as read-only",
    "reference": "",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 4_37",
    "number": 37,
    "question": "Which of the following are valid parameters when create a new virtual **Warehouse**?",
    "options": [
      {
        "id": 1,
        "value": "RAM Size"
      },
      {
        "id": 2,
        "value": "Auto Suspend"
      },
      {
        "id": 3,
        "value": "Auto Resume"
      },
      {
        "id": 4,
        "value": "**Warehouse** Size"
      },
      {
        "id": 5,
        "value": "Type of EC2"
      },
      {
        "id": 6,
        "value": "CPU Counts"
      }
    ],
    "answers": [
      2,
      3,
      4
    ],
    "explanation": "Please see the link for detailed syntax on virtual **Warehouse** creationhttps://docs.**Snowflake**.net/manuals/sql-reference/sql/create-**Warehouse**.html",
    "reference": "https://docs.snowflake.net/manuals/sql-reference/sql/create-warehouse.html",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 4_38",
    "number": 38,
    "question": "What are some general indicators that a **Clustering Key** is required on a **Table**?",
    "options": [
      {
        "id": 1,
        "value": "The **Table** is being used in many queries"
      },
      {
        "id": 2,
        "value": "The size of the **Table** is in multi terabytes"
      },
      {
        "id": 3,
        "value": "The query performance using that **Table** has slowed down over a period of time"
      },
      {
        "id": 4,
        "value": "The **Table** has many columns"
      }
    ],
    "answers": [
      2,
      3
    ],
    "explanation": "Clustering keys are defined on large **Table** to improve performance.",
    "reference": "",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 4_39",
    "number": 39,
    "question": "Virtual **Warehouse** credits are charged on what basis?",
    "options": [
      {
        "id": 1,
        "value": "per second use (with minimum charge of 1 minute)"
      },
      {
        "id": 2,
        "value": "per hour use"
      },
      {
        "id": 3,
        "value": "per milli second use"
      },
      {
        "id": 4,
        "value": "per minute use"
      },
      {
        "id": 5,
        "value": "per second use with no minimum charge"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "**Snowflake** credits are billed on per second basis of virtual **Warehouse** use. Its important to note thought that when a virtual **Warehouse** is started it will consume minimum 1 minute of **Snowflake** credits and will change to per second billing after that",
    "reference": "",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 4_40",
    "number": 40,
    "question": "Choose the answer which true about key rotation in **Snowflake**",
    "options": [
      {
        "id": 1,
        "value": "Only **Table** master key is rotated by **Snowflake**"
      },
      {
        "id": 2,
        "value": "Account & **Table** master keys are automatically rotated by **Snowflake** when they are more than 30 days old"
      },
      {
        "id": 3,
        "value": "Only account master key is rotated by **Snowflake**"
      },
      {
        "id": 4,
        "value": "Key rotation is an expensive operation, hence its done only on need basis"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "",
    "reference": "https://docs.snowflake.com/en/user-guide/security-encryption.html#encryption-key-rotation",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 1_28",
    "number": 28,
    "question": "What functional category does Looker fall into?",
    "options": [
      {
        "id": 1,
        "value": "Data Integration"
      },
      {
        "id": 2,
        "value": "Business Intelligence"
      },
      {
        "id": 3,
        "value": "SQL Editors"
      },
      {
        "id": 4,
        "value": "Security & Governance"
      },
      {
        "id": 5,
        "value": "Advanced Analytics"
      },
      {
        "id": 6,
        "value": "Programmatic Interfaces"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "Refer Link for the BI tool list that provide native connectivity to **Snowflake**",
    "reference": "https://docs.snowflake.com/en/user-guide/ecosystem-bi.html",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_8",
    "number": 8,
    "question": "Mark the types of Stages available in **Snowflake**",
    "options": [
      {
        "id": 1,
        "value": "External **Stage**"
      },
      {
        "id": 2,
        "value": "S3 **Stage**"
      },
      {
        "id": 3,
        "value": "Internal **Stage**"
      },
      {
        "id": 4,
        "value": "User **Stage**"
      },
      {
        "id": 5,
        "value": "**Table** **Stage**"
      },
      {
        "id": 6,
        "value": "Role **Stage**"
      }
    ],
    "answers": [
      1,
      3,
      4,
      5
    ],
    "explanation": "",
    "reference": "https://docs.snowflake.com/en/user-guide/data-load-local-file-system-create-stage.html",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 4_43",
    "number": 43,
    "question": "Multi-cluster warehouses are beneficial for improving the performance of slow-running queries or data loading",
    "options": [
      {
        "id": 1,
        "value": "TRUE"
      },
      {
        "id": 2,
        "value": "FALSE"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "Multi-cluster warehouses are best utilized for scaling resources to improve concurrency for users/queries. They are not as beneficial for improving the performance of slow-running queries or data loading. For these types of operations, resizing the **Warehouse** provides more benefits.",
    "reference": "",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 4_44",
    "number": 44,
    "question": "In auto scale mode, if new_max_clusters < running clusters, then excess clusters shut down immediately",
    "options": [
      {
        "id": 1,
        "value": "TRUE"
      },
      {
        "id": 2,
        "value": "FALSE"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "If new_max_clusters < running_clusters, excess clusters shut down when they finish executing statements and the scaling policy conditions are met.",
    "reference": "https://docs.snowflake.com/en/user-guide/warehouses-multicluster.html",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 2_28",
    "number": 28,
    "question": "What ensures that all customer data, new and old, is encrypted with the latest security technology",
    "options": [
      {
        "id": 1,
        "value": "Key Rotation"
      },
      {
        "id": 2,
        "value": "This has to be done by contacting **Snowflake** support"
      },
      {
        "id": 3,
        "value": "Periodic Rekeying"
      },
      {
        "id": 4,
        "value": "None"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "Rekeying constrains the total duration in which a key is used for recipient usage, following NIST recommendations. Furthermore, when rekeying data, **Snowflake** can increase encryption key sizes and utilize better encryption algorithms that may be standardized since the previous key generation was created. Rekeying therefore ensures that all customer data, new and old, is encrypted with the latest security technology. ",
    "reference": "https://docs.snowflake.com/en/user-guide/security-encryption.html#encryption-key-rotation",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 4_46",
    "number": 46,
    "question": "When a virtual **Warehouse** is provisioned there is no benefit in stopping the virtual **Warehouse** with in the first 60 seconds because that time period has already been billed.",
    "options": [
      {
        "id": 1,
        "value": "TRUE"
      },
      {
        "id": 2,
        "value": "FALSE"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "Compute is charged per second with minimum charge for 1 minute",
    "reference": "",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 2_27",
    "number": 27,
    "question": "To restore the **Table** by undrop command what all conditions should be met?",
    "options": [
      {
        "id": 1,
        "value": "The **Table** can be restored in any **Schema** irrespective from whichever **Schema** the **Table** was dropped."
      },
      {
        "id": 2,
        "value": "The **Table** can be restored in same **Schema** only from which it has been dropped"
      },
      {
        "id": 3,
        "value": "User executing undrop command should have ownership privilege on the **Table**"
      },
      {
        "id": 4,
        "value": "User must have `CREATE` privileges on the **Schema** in which **Table** is getting restored"
      }
    ],
    "answers": [
      2,
      3,
      4
    ],
    "explanation": "Similar to dropping an object, a user must have OWNERSHIP privileges for an object to restore it. In addition, the user must have `CREATE` privileges on the object type for the **Database** or **Schema** where the dropped object will be restored. Restoring tables and schemas is only supported in the current **Schema** or current **Database**, even if a fully-qualified object name is specified ",
    "reference": "https://docs.snowflake.com/en/user-guide/data-time-travel.html#data-retention-period",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 10_1",
    "number": 1,
    "question": "To restore the **Table** by undrop command what all conditions should be met?",
    "options": [
      {
        "id": 1,
        "value": "The **Table** can be restored in same **Schema** only from which it has been dropped"
      },
      {
        "id": 2,
        "value": "User must of `CREATE` privileges on the **Schema** in which **Table** is getting restored"
      },
      {
        "id": 3,
        "value": "The **Table** can be restored in any **Schema** irrespective from whichever **Schema** the **Table** was dropped."
      },
      {
        "id": 4,
        "value": "User executing undrop command should have ownership privilege on the **Table**"
      }
    ],
    "answers": [
      1,
      2,
      4
    ],
    "explanation": "Similar to dropping an object, a user must have OWNERSHIP privileges for an object to restore it. In addition, the user must have `CREATE` privileges on the object type for the **Database** or **Schema** where the dropped object will be restored. Restoring tables and schemas is only supported in the current **Schema** or current **Database**, even if a fully-qualified object name is specified ",
    "reference": "https://docs.snowflake.com/en/user-guide/data-time-travel.html#data-retention-period",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 4_49",
    "number": 49,
    "question": "Scaling up of a **Warehouse** can be done only in Enterprise edition and higher",
    "options": [
      {
        "id": 1,
        "value": "FALSE"
      },
      {
        "id": 2,
        "value": "TRUE"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "Scaling up (increasing size of **Warehouse**) can be done in all editions of **Snowflake**, however Scaling out (increasing number of clusters) can be done only in Enterprise edition and higher",
    "reference": "",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 2_26",
    "number": 26,
    "question": "Cloud services also use compute. Does **Snowflake** charge you for cloud services.",
    "options": [
      {
        "id": 1,
        "value": "Cloud services are charged irrespective of the compute resource usage"
      },
      {
        "id": 2,
        "value": "Cloud services are charged only if it exceeds 20% of the daily usage of the compute resources"
      },
      {
        "id": 3,
        "value": "**Snowflake** never charges for cloud services"
      },
      {
        "id": 4,
        "value": "Cloud services are charged only if it exceeds 10% of the daily usage of the compute resources"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "Similar to virtual **Warehouse** usage, **Snowflake** credits are used to pay for the usage of the cloud services that exceeds 10% of the daily usage of the compute resources.Usage for cloud-services is charged only if the daily consumption of cloud services exceeds 10% of the daily usage of the compute resources. The charge is calculated daily (in the UTC time zone). This ensures that the 10% adjustment is accurately applied each day, at the credit price for that day.",
    "reference": "https://docs.snowflake.com/en/user-guide/credits.html#cloud-services-credit-usage",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 4_51",
    "number": 51,
    "question": "Which of the following terms are associated with the Compute/**Warehouse** Layer?",
    "options": [
      {
        "id": 1,
        "value": "Query Processing"
      },
      {
        "id": 2,
        "value": "Query Planning"
      },
      {
        "id": 3,
        "value": "Query Optimization"
      },
      {
        "id": 4,
        "value": "Query Compilation"
      },
      {
        "id": 5,
        "value": "Query Design"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "Only query processing happens in the compute/**Warehouse** layer, rest all options (except query design) that are given are performed in the services layer. Query design is performed by the user executing the query",
    "reference": "",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 4_35",
    "number": 35,
    "question": "Storage fees are incurred for maintaining historical data during the **Time Travel** but not during **Fail-safe** periods as Fail safe is managed by **Snowflake**",
    "options": [
      {
        "id": 1,
        "value": "FALSE"
      },
      {
        "id": 2,
        "value": "TRUE"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "Storage cost is for both **Time Travel** & Fail Safe.",
    "reference": "https://docs.snowflake.com/en/user-guide/data-cdp-storage-costs.html",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 10_38",
    "number": 38,
    "question": "Storage fees are incurred for maintaining historical data during the **Time Travel** but not during **Fail-safe** periods as Fail safe is managed by **Snowflake**",
    "options": [
      {
        "id": 1,
        "value": "TRUE"
      },
      {
        "id": 2,
        "value": "FALSE"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "Storage cost is for both **Time Travel** & Fail Safe.",
    "reference": "https://docs.snowflake.com/en/user-guide/data-cdp-storage-costs.html",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 1_5",
    "number": 5,
    "question": "What is the recommended file size, to optimize the number of parallel operation for a load",
    "options": [
      {
        "id": 1,
        "value": "50 MB to 150 MB (Compressed)"
      },
      {
        "id": 2,
        "value": "100-250 MB (Compressed)"
      },
      {
        "id": 3,
        "value": "None of the above"
      },
      {
        "id": 4,
        "value": "1 MB to 10 MB (Compressed)"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "The number of load operations that run in parallel cannot exceed the number of data files to be loaded. To optimize the number of parallel operations for a load, we recommend aiming to produce data files roughly 100-250 MB (or larger) in size compressed.",
    "reference": "https://docs.snowflake.com/en/user-guide/data-load-considerations-prepare.html",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 2_42",
    "number": 42,
    "question": "What is the recommended file size to optimize the number of parallel operations for a load?",
    "options": [
      {
        "id": 1,
        "value": "10 MB to 100 MB (uncompressed)"
      },
      {
        "id": 2,
        "value": "10 MB to 100 MB (compressed)"
      },
      {
        "id": 3,
        "value": "1 MB to 10 MB (compressed)"
      },
      {
        "id": 4,
        "value": "100 MB to 250 MB (compressed)"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "The number of load operations that run in parallel cannot exceed the number of data files to be loaded. To optimize the number of parallel operations for a load, we recommend aiming to produce data files roughly 100-250 MB (or larger) in size compressed.",
    "reference": "https://docs.snowflake.com/en/user-guide/data-load-considerations-prepare.html#file-sizing-best-practices-and-limitations",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 4_16",
    "number": 16,
    "question": "The scaling policy for a multi-cluster **Warehouse** only applies (make sense) if it is running in Auto-scale mode and not in Maximized Mode",
    "options": [
      {
        "id": 1,
        "value": "TRUE"
      },
      {
        "id": 2,
        "value": "FALSE"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "The scaling policy for a multi-cluster **Warehouse** only applies if it is running in Auto-scale mode. In Maximized mode, all clusters run concurrently so there is no need to start or shut down individual clusters. Refer Link –https://docs.snowflake.com/en/user-guide/warehouses-multicluster.html",
    "reference": "https://docs.snowflake.com/en/user-guide/warehouses-multicluster.html",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 2_60",
    "number": 60,
    "question": "The standard retention period for **Time Travel** is of how many days, which is automatically enabled for all **Snowflake** accounts",
    "options": [
      {
        "id": 1,
        "value": "7"
      },
      {
        "id": 2,
        "value": "30"
      },
      {
        "id": 3,
        "value": "1"
      },
      {
        "id": 4,
        "value": "15"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "The standard retention period is 1 day (24 hours) and is automatically enabled for all **Snowflake** accounts.",
    "reference": "https://docs.snowflake.com/en/user-guide/data-time-travel.html#data-retention-period",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 2_13",
    "number": 13,
    "question": "Maximum historical data that can be maintained of Transient & Temporary **Table** is?",
    "options": [
      {
        "id": 1,
        "value": "7 Days"
      },
      {
        "id": 2,
        "value": "0 Day"
      },
      {
        "id": 3,
        "value": "1 Day"
      },
      {
        "id": 4,
        "value": "90 Days"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "Transient and temporary tables have no **Fail-safe** period, and maximum **Time Travel** retention period for them can be 1 day.",
    "reference": "https://docs.snowflake.com/en/user-guide/data-cdp-storage-costs.html",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 2_40",
    "number": 40,
    "question": "In Tri Secret Secure option customer manages the master key",
    "options": [
      {
        "id": 1,
        "value": "TRUE"
      },
      {
        "id": 2,
        "value": "FALSE"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "Tri-Secret Secure lets customer control access to their data using a master encryption key that they maintain in the key management service for the cloud provider that hosts their **Snowflake** account. ",
    "reference": "https://docs.snowflake.com/en/user-guide/security-encryption.html#encryption-key-rotation",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 4_24",
    "number": 24,
    "question": "When a copy command cannot definitively determine whether a file has been loaded already, then what is the default behaviour?",
    "options": [
      {
        "id": 1,
        "value": "The file load is skipped"
      },
      {
        "id": 2,
        "value": "Error message is generated, that load Metadata for the file for given **Table** doesnât exists"
      },
      {
        "id": 3,
        "value": "The file is loaded"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "When the `COPY` command cannot definitively determine whether a file has been loaded already if the LAST_MODIFIED date is older than 64 days and the initial set of data was loaded into the **Table** more than 64 days earlier (and if the file was loaded into the **Table**, that also occurred more than 64 days earlier). In this case, to prevent accidental reload, the command skips the file by default.",
    "reference": "https://docs.snowflake.com/en/user-guide/data-load-considerations-load.html",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 5_1",
    "number": 1,
    "question": "What all objects can be shared?",
    "options": [
      {
        "id": 1,
        "value": "**Table**"
      },
      {
        "id": 2,
        "value": "Standard **View**"
      },
      {
        "id": 3,
        "value": "Secure UDF"
      },
      {
        "id": 4,
        "value": "Secure **View**"
      }
    ],
    "answers": [
      1,
      3,
      4
    ],
    "explanation": "Data Share is meant for Secures access and so, Standard **View** is not allowed to be shared.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_2",
    "number": 2,
    "question": "How can you ignore Metadata and load the already loaded staged file into **Table**?",
    "options": [
      {
        "id": 1,
        "value": "Using LOAD = TRUE parameter with `COPY` INTO command"
      },
      {
        "id": 2,
        "value": "Using FORCE = YES parameter with `COPY` INTO command"
      },
      {
        "id": 3,
        "value": "Using FORCE = TRUE parameter with `COPY` INTO command"
      },
      {
        "id": 4,
        "value": "Using LOAD = FORCE parameter with `COPY` INTO command"
      },
      {
        "id": 5,
        "value": "Using `INSERT` = TRUE parameter with `COPY` INTO command"
      },
      {
        "id": 6,
        "value": "Using ACCEPT = TRUE parameter with `COPY` INTO command"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "FORCE = TRUE parameter specifies to load all files, regardless of whether theyve been loaded previously and have not changed since they were loaded. Note that this option reloads files, potentially duplicating data in a **Table**.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_3",
    "number": 3,
    "question": "Which approach would result in improved performance through linear scaling of data ingestion workload?",
    "options": [
      {
        "id": 1,
        "value": "Resize virtual **Warehouse**"
      },
      {
        "id": 2,
        "value": "Consider the practice of splitting input file batch within the recommended range of 10MB to 100MB"
      },
      {
        "id": 3,
        "value": "All of the above"
      },
      {
        "id": 4,
        "value": "Consider the practice of organizing data by granular path"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "Resize or Scaling up the virtual **Warehouse** improves the performance. It is better that you organize data by granular path, it will help **Snowflake** find the file easily without wasting it‘s resources on identify the data files. As per best practice, the size of data file should be in the range of 10 MB to 110 MB. Each server can process 8 files in parallel so, breaking a file into small files is the good practice.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_4",
    "number": 4,
    "question": "Monica has a EMPLOYEE_DATA **Table**. Monica wants to create another **Table** EMPLOYEE_DATA_OTHER which should be same as EMPLOYEE_DATA **Table** with same data. What is the best option for Monica?",
    "options": [
      {
        "id": 1,
        "value": "`CREATE` SHARE EMPLOYEE_DATA;"
      },
      {
        "id": 2,
        "value": "Clone the **Table** with same data with SQL command as follows - `CREATE` **Table** EMPLOYEE_DATA_OTHER CLONE EMPLOYEE_DATA;"
      },
      {
        "id": 3,
        "value": "Create the **Table** with LIKE SQL command as follows - `CREATE` **Table** EMPLOYEE_DATA_OTHER LIKE EMPLOYEE_DATA;"
      },
      {
        "id": 4,
        "value": "Create the **Table** with same data with SQL command as follows - `CREATE` **Table** EMPLOYEE_DATA_OTHER AS `SELECT` * `FROM` EMPLOYEE_DATA;"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "The best option is the Clone the **Table** as EMPLOYEE_DATA and EMPLOYEE_DATA_OTHER has same structure and same data. It will help save the storage cost. LIKE command only creates empty **Table**.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_5",
    "number": 5,
    "question": "Which cache stores object definitions and statistics?",
    "options": [
      {
        "id": 1,
        "value": "Results Cache"
      },
      {
        "id": 2,
        "value": "Metadata Cache"
      },
      {
        "id": 3,
        "value": "**Warehouse** Cache"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "Metadata Management has following major functions: \n- Stores Metadata as data is loaded into the system \n- Handles queries that can be processes completely from Metadata -Used for **Time Travel** and Cloning -Every aspect of **Snowflake** architecture leverages met",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_6",
    "number": 6,
    "question": "How to change the current **Warehouse** of a session?",
    "options": [
      {
        "id": 1,
        "value": "None of these"
      },
      {
        "id": 2,
        "value": "Execute SET **Warehouse** command"
      },
      {
        "id": 3,
        "value": "Execute `SELECT` **Warehouse** command"
      },
      {
        "id": 4,
        "value": "Execute `USE` **Warehouse** command"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "`USE` **Warehouse**; command sets the **Warehouse** for the current session, whereis the name of the **Warehouse** which needs to be set for the session.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_7",
    "number": 7,
    "question": "If a server in **Warehouse** cluster runs for 64 seconds, shuts down, and then restarts and runs for less than 60 seconds, for how many seconds it will be billed?",
    "options": [
      {
        "id": 1,
        "value": "120 Seconds"
      },
      {
        "id": 2,
        "value": "124 Seconds"
      },
      {
        "id": 3,
        "value": "4 Seconds"
      },
      {
        "id": 4,
        "value": "64 Seconds"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "The minimum billing charge for provisioning a server is 1 minute (i.e. 60 seconds). So, the total billing will be for 60 + 4+ 60 = 124 seconds.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_8",
    "number": 8,
    "question": "How can you validate the `COPY` INTO command before actually loading data into the **Table**?",
    "options": [
      {
        "id": 1,
        "value": "None of these"
      },
      {
        "id": 2,
        "value": "Use parameter VALIDATION_COPY = TRUE | RETURN__ROWS | RETURN_ERRORS |RETURN_ALL_ERRORS with `COPY` INTO command"
      },
      {
        "id": 3,
        "value": "Simply count the loaded records and match with **Stage**"
      },
      {
        "id": 4,
        "value": "`USE` parameter VALIDATION_MODE = RETURN__ROWS | RETURN_ERRORS |RETURN_ALL_ERRORS"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "VALIDATION_MODE instructs the `COPY` command to validate the data files instead of loading them into the specified **Table**; i.e. the `COPY` command tests the files for errors but does not load them. The command validates the data to be loaded and returns results based on the validation option specified.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_9",
    "number": 9,
    "question": "Which security feature is supported in **Snowflake**?",
    "options": [
      {
        "id": 1,
        "value": "Tri-Secret Secure Encryption"
      },
      {
        "id": 2,
        "value": "All of these"
      },
      {
        "id": 3,
        "value": "Role-Based Access Control"
      },
      {
        "id": 4,
        "value": "Multi-Factor Authentication"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "**Snowflake** is highly secured platform and provides multi-level security like MFA, IP whitelisting, SSO, Tri Secret Secure, Role-Based etc.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_10",
    "number": 10,
    "question": "**Snowflake** offers multiple editions. Which one is not a offering from **Snowflake**.",
    "options": [
      {
        "id": 1,
        "value": "Premium"
      },
      {
        "id": 2,
        "value": "Business Critical"
      },
      {
        "id": 3,
        "value": "Standard"
      },
      {
        "id": 4,
        "value": "Enterprise"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "**Snowflake** offers 4 editions: 1 \n- Standard Edition 2 \n- Enterprise Edition 3 \n- Business Critical Edition 4 \n- Virtual Private **Snowflake** (VPS)",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_11",
    "number": 11,
    "question": "**Snowflake** offers the early access of staged release to designated Standard Edition Customer. True or false?",
    "options": [
      {
        "id": 1,
        "value": "FALSE"
      },
      {
        "id": 2,
        "value": "TRUE"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "**Snowflake** offers early access to designated Enterprise (or higher) accounts.Early access is not required or recommended for all organizations with Enterprise Edition accounts; **Snowflake**s rigorous release testing and monitoring during deployments is usually sufficient to prevent most issues. Early access is intended primarily for organizations that desire added certainty that their production accounts will not be affected by full releases.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_12",
    "number": 12,
    "question": "If you want to **View** query history older than 14 days, where can you go to **View** it? Choose one path and one “term“ commonly used.",
    "options": [
      {
        "id": 1,
        "value": "**Snowflake** (**Database**) -> ACCOUNT_USAGE (**Schema**) -> QUERY_HISTORY (Secure **View**)"
      },
      {
        "id": 2,
        "value": "History-> Profile -> Account_Usage"
      },
      {
        "id": 3,
        "value": "Account->Usage->History"
      },
      {
        "id": 4,
        "value": "The Usage Sharing Monitor"
      },
      {
        "id": 5,
        "value": "The Account Usage Share"
      }
    ],
    "answers": [
      1,
      5
    ],
    "explanation": "History is available for only 14 days through UI. Older history can be found in ACCOUNT_USAGE.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_13",
    "number": 13,
    "question": "**Snowflake** data storage costs are calculated based on: (Select 2)",
    "options": [
      {
        "id": 1,
        "value": "Amount Stored on First Day of Month"
      },
      {
        "id": 2,
        "value": "Uncompressed Size"
      },
      {
        "id": 3,
        "value": "Amount Stored on Last Day of Month"
      },
      {
        "id": 4,
        "value": "Amount Stored - Daily Average"
      },
      {
        "id": 5,
        "value": "Compressed Size"
      }
    ],
    "answers": [
      4,
      5
    ],
    "explanation": "All storage within **Snowflake** is billable in compressed format. **Snowflake** considers the daily average storage (in Terabytes) for billing.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_14",
    "number": 14,
    "question": "**Snowflake** Architecture consists of many separate layers. Please select the correct layers. (Select 3).",
    "options": [
      {
        "id": 1,
        "value": "Cloud Services Layer"
      },
      {
        "id": 2,
        "value": "**Database** Storage Layer"
      },
      {
        "id": 3,
        "value": "Security Layer"
      },
      {
        "id": 4,
        "value": "Query Processing Layer"
      }
    ],
    "answers": [
      1,
      2,
      4
    ],
    "explanation": "**Snowflake** Architecture consists of Cloud Services Layer, Query Processing (**Warehouse**) Layer and Cloud Services Layer.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_15",
    "number": 15,
    "question": "Which vendors do support **Snowflake** natively for federated authentication and SSO?",
    "options": [
      {
        "id": 1,
        "value": "Microsoft Azure Active Directory"
      },
      {
        "id": 2,
        "value": "Okta"
      },
      {
        "id": 3,
        "value": "Onelogin"
      },
      {
        "id": 4,
        "value": "Google G Suite"
      },
      {
        "id": 5,
        "value": "Microsoft ADFS"
      }
    ],
    "answers": [
      2,
      5
    ],
    "explanation": "Okta and Microsoft ADFS provide native **Snowflake** support for federated authentication and SSO. Other are not native but **Snowflake** supports using SAML 2.0-compliant.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_16",
    "number": 16,
    "question": "What is the best use of SCALING OUT?",
    "options": [
      {
        "id": 1,
        "value": "Better Concurrency"
      },
      {
        "id": 2,
        "value": "Better Performance"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "SCALING OUT is meant for handling high concurrent queries.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_17",
    "number": 17,
    "question": "Which query will require compute (Virtual **Warehouse**)? Consider **Table** created as – `CREATE` or replace **Table** T1 ( ID number(2), Name varchar(20), ID number (11,2) );",
    "options": [
      {
        "id": 1,
        "value": "`SHOW` DATABASES;"
      },
      {
        "id": 2,
        "value": "`SELECT` CURRENT_ACCOUNT();"
      },
      {
        "id": 3,
        "value": "`SELECT` MAX(ID) `FROM` T1;"
      },
      {
        "id": 4,
        "value": "`SELECT` * `FROM` T1;"
      },
      {
        "id": 5,
        "value": "`SELECT` MIN(ID) `FROM` T1;"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "Except `SELECT` * `FROM` T1, all the queries return results from cloud services layer Metadata, So these queries do not need a running Virtual **Warehouse**.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_18",
    "number": 18,
    "question": "**Snowflake** **Resource Monitor** allows administrators to set thresholds and triggers to track credit usage. What methods are most effective for resource monitoring? (Check all that apply).",
    "options": [
      {
        "id": 1,
        "value": "Setting quota thresholds for trigger actions and notifications"
      },
      {
        "id": 2,
        "value": "Tracking and controlling credit consumption on a monthly basis"
      },
      {
        "id": 3,
        "value": "Control global monthly credit usage for an account"
      },
      {
        "id": 4,
        "value": "Tracking consumption on an hourly basis"
      }
    ],
    "answers": [
      1,
      2,
      3
    ],
    "explanation": "Resource monitors are not intended for strictly controlling consumption on an hourly basis; they are intended for tracking and controlling credit consumption per interval (day, week, month, etc.). Also, they are not intended for setting precise limits on credit usage (i.e. down to the level of individual credits). For example, when credit quota thresholds are reached for a **Resource Monitor**, the assigned warehouses may take some time to suspend, even when the action is Suspend Immediate, thereby consuming additional credits.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_19",
    "number": 19,
    "question": "John wants to create a **Warehouse** which should not start immediately. Which property will him to create a **Warehouse** in suspended mode.",
    "options": [
      {
        "id": 1,
        "value": "`AUTO_SUSPEND` = INITIAL"
      },
      {
        "id": 2,
        "value": "INITIATE = FALSE"
      },
      {
        "id": 3,
        "value": "AUTO_START = FALSE"
      },
      {
        "id": 4,
        "value": "INITIALLY_SUSPENDED = TRUE"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "INITIALLY_SUSPENDED = TRUE will not start the **Warehouse** after creation. By default it is set to FALSE.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_20",
    "number": 20,
    "question": "What action causes a **Warehouse**‘s cache to be purged?",
    "options": [
      {
        "id": 1,
        "value": "The passing of 24 hours."
      },
      {
        "id": 2,
        "value": "Resuming the **Warehouse**."
      },
      {
        "id": 3,
        "value": "Suspending the **Warehouse**."
      },
      {
        "id": 4,
        "value": "A change to the Metadata Cache size."
      }
    ],
    "answers": [
      3
    ],
    "explanation": "Cache gets purged on suspending the **Warehouse**.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_21",
    "number": 21,
    "question": "A user‘s default role is",
    "options": [
      {
        "id": 1,
        "value": "The name used to log in to the WebUI"
      },
      {
        "id": 2,
        "value": "The user‘s default role is always `PUBLIC`"
      },
      {
        "id": 3,
        "value": "The role a user is set to each time the user logs in to the system"
      },
      {
        "id": 4,
        "value": "The user‘s default role changes each time the user logs in to the system."
      }
    ],
    "answers": [
      3
    ],
    "explanation": "The role a user is set to each time the user logs in to the system",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_22",
    "number": 22,
    "question": "What is the best practice after creating a custom role in a **Snowflake** account?",
    "options": [
      {
        "id": 1,
        "value": "Grant the role to the `USERADMIN` role so users can be added to the role."
      },
      {
        "id": 2,
        "value": "Grant ownership of the role to itself so a member of the role can control access to the role"
      },
      {
        "id": 3,
        "value": "Grant `PUBLIC` to the role so all **Database** objects owned by `PUBLIC` will be available to the new role"
      },
      {
        "id": 4,
        "value": "Grant ownership to the `SYSADMIN` role or a child role under `SYSADMIN`"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "Custom role is mostly created for specific access of specific objects. As per best practice to grant ownership to `SYSADMIN` or child role under `SYSADMIN` so that `SYSADMIN` can control the access on the objects.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_23",
    "number": 23,
    "question": "Which of the following are valid context functions?",
    "options": [
      {
        "id": 1,
        "value": "CURRENT_SESSION( )"
      },
      {
        "id": 2,
        "value": "CURRENT_CLOUD_INFRASTRUCTURE( )"
      },
      {
        "id": 3,
        "value": "CURRENT_WORKSHEET( )"
      },
      {
        "id": 4,
        "value": "CURRENT_REGION( )"
      },
      {
        "id": 5,
        "value": "CURRENT_CLIENT( )"
      }
    ],
    "answers": [
      1,
      4,
      5
    ],
    "explanation": "CURRENT_WORKSHEET() and CURRENT_CLOUD_INFRASTRUCTURE() are not valid context functions.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_24",
    "number": 24,
    "question": "Secured **View** can be used to hide the definition but its performance can get degraded?",
    "options": [
      {
        "id": 1,
        "value": "FALSE"
      },
      {
        "id": 2,
        "value": "TRUE"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "Secure views should not be used for views that are defined for query convenience, such as views created for simplifying querying data for which users do not need to understand the underlying data representation. This is because the **Snowflake** query optimizer, when evaluating secure views, bypasses certain optimizations used for regular views. This might result in some impact on query performance for secure views.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_25",
    "number": 25,
    "question": "Which **Snowflake** Editions have Elastic Data Warehousing. Check all the **Snowflake** editions that have Elastic Data Warehousing enabled.",
    "options": [
      {
        "id": 1,
        "value": "Standard"
      },
      {
        "id": 2,
        "value": "Premium"
      },
      {
        "id": 3,
        "value": "Virtual Private **Snowflake**"
      },
      {
        "id": 4,
        "value": "Enterprise"
      },
      {
        "id": 5,
        "value": "Business Critical Edition"
      }
    ],
    "answers": [
      3,
      4,
      5
    ],
    "explanation": "Standard Edition only has Single Compute Cluster. Premium is not a **Snowflake** edition. All other editions have multi clusters capability.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_26",
    "number": 26,
    "question": "In the History Page, a query shows Bytes Scanned having Assigned Partitions:\n\n- 110, Scanned Partitions 58, and Original Partitions 110.\n- Why did the optimizer show fewer partitions scanned than assigned?",
    "options": [
      {
        "id": 1,
        "value": "The static optimization determined the number of possible micro partitions would be 110 but the dynamic optimization was able to prune some of the partitions from a joined **Table**"
      },
      {
        "id": 2,
        "value": "During the execution of the query, new data was added to the **Table** and the optimizer had to add those micro partitions into the scan."
      },
      {
        "id": 3,
        "value": "The query was using an Xlarge **Warehouse** and could scan the partitions in parallel"
      },
      {
        "id": 4,
        "value": "The optimizer estimated only 58 partitions would need to be scan but during the execution of the query, the optimizer realized it would have to read all 110 micro partitions"
      },
      {
        "id": 5,
        "value": "One of the tables in the query was an external **Table** and didnt have micro partitions The Metadata for the **Table** was out of date and there were really only 58 partitions total"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "**Snowflake** produces well-clustered data in tables in micro-partitions. **Snowflake** only targets those micro-partitions which come under the range of query criteria. If **Table** is clustered well, **Snowflake** scans only few of the micro-partitions.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_27",
    "number": 27,
    "question": "John wants to create a **Warehouse** which can auto resume whenever there is a new load / query to execute. How should he configure the **Warehouse**?",
    "options": [
      {
        "id": 1,
        "value": "`AUTO_SUSPEND` = TRUE"
      },
      {
        "id": 2,
        "value": "`AUTO_RESUME` = TRUE"
      },
      {
        "id": 3,
        "value": "`AUTO_RESUME` = 1"
      },
      {
        "id": 4,
        "value": "It is always manual and cant be automated."
      }
    ],
    "answers": [
      2
    ],
    "explanation": "`AUTO_RESUME` = TRUE resumes the **Warehouse** automatically whenever there is new load or query needing a **Warehouse**.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_28",
    "number": 28,
    "question": "The acronym ETL stands for what three words?",
    "options": [
      {
        "id": 1,
        "value": "Extract, Transition, Loading"
      },
      {
        "id": 2,
        "value": "Extract, Transition, Load"
      },
      {
        "id": 3,
        "value": "Extract, Transfer, Load"
      },
      {
        "id": 4,
        "value": "Extract, Transform, Load"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "First step is extraction of data from source and then Transform before loading into target **Database** like in **Snowflake**.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_29",
    "number": 29,
    "question": "Monica is a new **Snowflake** user with `ACCOUNTADMIN` role. She wants to create a **Warehouse** which can scale out if needed. She tried to create the **Warehouse** using UI but she is not able to find the options to set Minimum and Maximum Clusters. What could be the issue?",
    "options": [
      {
        "id": 1,
        "value": "She should use SQL command to create the **Warehouse** with Minimum and Maximum clusters"
      },
      {
        "id": 2,
        "value": "She should `ALTER` any existing **Warehouse** to set the Maximum and Minimum clusters"
      },
      {
        "id": 3,
        "value": "She doesn‘t have enough privilege to create a **Warehouse**"
      },
      {
        "id": 4,
        "value": "She is using STANDARD **Snowflake** edition. Multi-Cluster is not available in STANDARD edition."
      }
    ],
    "answers": [
      4
    ],
    "explanation": "Multi-cluster feature is not available in Standard edition. It starts from Enterprise Edition.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_30",
    "number": 30,
    "question": "What all commands will you use to load data from your Local File System to **Snowflake** **Table**?",
    "options": [
      {
        "id": 1,
        "value": "Only `PUT` command"
      },
      {
        "id": 2,
        "value": "`COPY` INTO followed by `PUT` command"
      },
      {
        "id": 3,
        "value": "`PUT` COMMAND followed by `COPY` INTO"
      },
      {
        "id": 4,
        "value": "Only `COPY` INTO command"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "When loading data from local file system to **Snowflake**, you need to first run `PUT` command to load data from local file system to **Snowflake** internal **Stage** and then run `COPY` INTO command to copy data from **Snowflake** internal **Stage** to **Table**.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_31",
    "number": 31,
    "question": "What is the column datatype used for ingesting semi-structured data?",
    "options": [
      {
        "id": 1,
        "value": "VARCHAR"
      },
      {
        "id": 2,
        "value": "VARIANT"
      },
      {
        "id": 3,
        "value": "NUMBER"
      },
      {
        "id": 4,
        "value": "STRING"
      },
      {
        "id": 5,
        "value": "FLOAT"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "**Snowflake** loads semi-structured data into a single VARIANT column. The VARIANT data type imposes a 16 MB (compressed) size limit on individual rows.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_32",
    "number": 32,
    "question": "**Snowflake** maintains detailed Metadata for each **Table** into which data is loaded. For how long **Snowflake** keeps the Metadata active?",
    "options": [
      {
        "id": 1,
        "value": "16 Days"
      },
      {
        "id": 2,
        "value": "64 Days"
      },
      {
        "id": 3,
        "value": "32 Days"
      },
      {
        "id": 4,
        "value": "24 Hours"
      },
      {
        "id": 5,
        "value": "31 Days"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "**Snowflake** maintains detailed Metadata for each **Table** into which data is loaded, including: -Name of each file from which data was load -File Size -ETag for the file -Number of rows parsed in the file -Timestamp of the last load for the file -Information about any errors encountered in the file during loading The load Metadata expires after 64 days.(LAST_MODIFIED date for a staged data).",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_33",
    "number": 33,
    "question": "If a DBA_ROLE creates a **Database**. Later the DBA_ROLE was dropped. Who will own the **Database** now which was created by DBA_ROLE?",
    "options": [
      {
        "id": 1,
        "value": "**Database** will be dropped"
      },
      {
        "id": 2,
        "value": "No one can access"
      },
      {
        "id": 3,
        "value": "Role who dropped the DBA_ROLE"
      },
      {
        "id": 4,
        "value": "DBA_ROLE cant be dropped as it is the owner of the **Database**."
      }
    ],
    "answers": [
      3
    ],
    "explanation": "The role who dropped the DBA_ROLE will own that **Database**. (IMPORTANT QUESTION)",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_34",
    "number": 34,
    "question": "Semi-structured data types can be cast using what method?",
    "options": [
      {
        "id": 1,
        "value": "Column_name::"
      },
      {
        "id": 2,
        "value": "Column_name AS"
      },
      {
        "id": 3,
        "value": "() Column_name"
      },
      {
        "id": 4,
        "value": "Column_name CAST TO"
      },
      {
        "id": 5,
        "value": "Column_name AS_"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "Usage of Two colons is the correct syntax for Casting.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_35",
    "number": 35,
    "question": "What all commands will you use to unload data from your **Snowflake** **Table** to your local file systems?",
    "options": [
      {
        "id": 1,
        "value": "Only `COPY` INTO command"
      },
      {
        "id": 2,
        "value": "`COPY` INTO command followed by `GET` command"
      },
      {
        "id": 3,
        "value": "Only `GET` command"
      },
      {
        "id": 4,
        "value": "`COPY` INTO followed by `PUT` command"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "First copy the data from **Snowflake** **Table** to Internal **Stage** using `COPY` INTO command and then unload data from internal **Stage** to your local file system using `GET` command.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_36",
    "number": 36,
    "question": "**Snowflake** has a default file format if none is explicitly set or declared in SQL syntax. (TRUE / FALSE)",
    "options": [
      {
        "id": 1,
        "value": "FALSE"
      },
      {
        "id": 2,
        "value": "TRUE"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "True, **Snowflake** has a default file format if none is explicitly set or declared in SQL syntax",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_37",
    "number": 37,
    "question": "Semi-Structured data must be transformed prior to loading the data into a **Snowflake** **Table**. (TRUE / FALSE)",
    "options": [
      {
        "id": 1,
        "value": "FALSE"
      },
      {
        "id": 2,
        "value": "TRUE"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "**Snowflake** natively supports semi-structured data, it is not must to transformed Semi-Structured data prior to loading the data into a **Snowflake** **Table**.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_38",
    "number": 38,
    "question": "What is the best option to automatically delete the files from **Stage** after it got loaded using `COPY` INTO command?",
    "options": [
      {
        "id": 1,
        "value": "Cloud provider deletes the file automatically"
      },
      {
        "id": 2,
        "value": "Setting `DELETE` = TRUE in `COPY` INTO command"
      },
      {
        "id": 3,
        "value": "Delete manually using Cloud Provide UI delete option as soon as file is loaded"
      },
      {
        "id": 4,
        "value": "Setting PURGE = TRUE in `COPY` INTO command"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "PURGE = TRUE parameter helps remove the data files from the **Stage** automatically after the data is loaded successfully. If the purge operation fails for any reason, no error is returned currently. So, you should also run `LIST` command periodically to check the available files in **Stage** and manually remove successfully loaded files, if any exist.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_39",
    "number": 39,
    "question": "Dynamic Data Masking is supported by:",
    "options": [
      {
        "id": 1,
        "value": "Standard Edition"
      },
      {
        "id": 2,
        "value": "Business Critical"
      },
      {
        "id": 3,
        "value": "Enterprise Edition"
      },
      {
        "id": 4,
        "value": "VPS"
      }
    ],
    "answers": [
      2,
      3,
      4
    ],
    "explanation": "Dynamic Data Masking starts with the Enterprise edition.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_40",
    "number": 40,
    "question": "How can you validate the `COPY` INTO command before actually loading data into the **Table**?",
    "options": [
      {
        "id": 1,
        "value": "Simply count the loaded records and match with **Stage**"
      },
      {
        "id": 2,
        "value": "`USE` parameter VALIDATION_MODE = RETURN__ROWS | RETURN_ERRORS |RETURN_ALL_ERRORS"
      },
      {
        "id": 3,
        "value": "Use parameter VALIDATION_COPY = TRUE | RETURN__ROWS | RETURN_ERRORS |RETURN_ALL_ERRORS with `COPY` INTO command"
      },
      {
        "id": 4,
        "value": "None of these"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "VALIDATION_MODE instructs the `COPY` command to validate the data files instead of loading them into the specified **Table**; i.e. the `COPY` command tests the files for errors but does not load them. The command validates the data to be loaded and returns results based on the validation option specified.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_41",
    "number": 41,
    "question": "Which of the following workload is **Snowflake** suited for?",
    "options": [
      {
        "id": 1,
        "value": "Data Lakes"
      },
      {
        "id": 2,
        "value": "Data **Warehouse**"
      },
      {
        "id": 3,
        "value": "Data Science"
      },
      {
        "id": 4,
        "value": "Data Engineering"
      },
      {
        "id": 5,
        "value": "**Data Sharing** and Exchanges"
      },
      {
        "id": 6,
        "value": "Data Applications"
      }
    ],
    "answers": [
      1,
      2,
      3,
      4,
      5,
      6
    ],
    "explanation": "**Snowflake** is not a just Data **Warehouse** platform. It is a Data platform which can handle all of these workloads.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_42",
    "number": 42,
    "question": "Reclustering in **Snowflake** is automatic. (TRUE / FALSE)",
    "options": [
      {
        "id": 1,
        "value": "FALSE"
      },
      {
        "id": 2,
        "value": "TRUE"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "Reclustering in **Snowflake** is automatic; no maintenance is needed.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_43",
    "number": 43,
    "question": "John wants to create a multi-cluster **Warehouse** and wants to make sure that whenever new queries are queued, additional clusters should start immediately. How should he configure the **Warehouse**?",
    "options": [
      {
        "id": 1,
        "value": "Configure as SCALE-MAX so that the **Warehouse** is always using maximum number of specified clusters"
      },
      {
        "id": 2,
        "value": "**Snowflake** takes care of this automatically so, John does not have to worry about it"
      },
      {
        "id": 3,
        "value": "Set the SCALING POLICY as ECONOMY"
      },
      {
        "id": 4,
        "value": "Set the SCALING POLICY as STANDARD"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "If a multi-cluster **Warehouse** is configured with SCALING policy as STANDARD it immediately when either a query is queued or the system detects that theres one more query than the currently-running clusters can execute",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_44",
    "number": 44,
    "question": "At what frequency does **Snowflake** rotate the object keys?",
    "options": [
      {
        "id": 1,
        "value": "60 Days"
      },
      {
        "id": 2,
        "value": "16 Days"
      },
      {
        "id": 3,
        "value": "30 Days"
      },
      {
        "id": 4,
        "value": "1 Year"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "Key automatically get rotated every 30 days.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_45",
    "number": 45,
    "question": "What is the default compression algorithm **Snowflake** apply while unloading data?",
    "options": [
      {
        "id": 1,
        "value": "GZIP3"
      },
      {
        "id": 2,
        "value": "BZ2"
      },
      {
        "id": 3,
        "value": "ZSTD"
      },
      {
        "id": 4,
        "value": "NONE"
      },
      {
        "id": 5,
        "value": "GZIP"
      }
    ],
    "answers": [
      5
    ],
    "explanation": "When unloading data, files are automatically compressed using the default, which is gzip.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_46",
    "number": 46,
    "question": "John has setup process to load specific set of files using both Bulk and Snowpipe. This is best practice to avoid any missed loading either by Bulk loading or Snowpipe. (TRUE /FALSE)",
    "options": [
      {
        "id": 1,
        "value": "TRUE"
      },
      {
        "id": 2,
        "value": "FALSE"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "This is not a best practice, it may create reloading issue. To avoid reloading files (and duplicating data), **Snowflake** recommends loading data from a specific set of files using either bulk data loading or Snowpipe but not both.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_47",
    "number": 47,
    "question": "What are the correct SQL extensions used in querying data from **Time Travel**? Select 2.",
    "options": [
      {
        "id": 1,
        "value": "AFTER"
      },
      {
        "id": 2,
        "value": "INITIAL"
      },
      {
        "id": 3,
        "value": "BEFORE"
      },
      {
        "id": 4,
        "value": "AT"
      }
    ],
    "answers": [
      3,
      4
    ],
    "explanation": "AT | BEFORE clause are used to query based on timestamp, offset or query id.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_48",
    "number": 48,
    "question": "**Snowflake** supports transforming data while loading it into a **Table** using the `COPY` command. What all options you have?",
    "options": [
      {
        "id": 1,
        "value": "Column reordering"
      },
      {
        "id": 2,
        "value": "String Truncation"
      },
      {
        "id": 3,
        "value": "Join"
      },
      {
        "id": 4,
        "value": "Column omission"
      },
      {
        "id": 5,
        "value": "Casts"
      }
    ],
    "answers": [
      1,
      2,
      4,
      5
    ],
    "explanation": "**Snowflake** supports transforming data while loading it into a **Table** using the `COPY` command. Options include:\n\n- Column reordering \n- Column omission \n- Casts \n- Truncating text strings that exceed the target column length There is no requirement for your data files to have the same number and ordering of columns as your target **Table**.\n- The `COPY` INTO transformations do not support FLATTEN, JOIN, GROUP BY.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_49",
    "number": 49,
    "question": "Named stages come in two varieties, what are they?",
    "options": [
      {
        "id": 1,
        "value": "External"
      },
      {
        "id": 2,
        "value": "Permanent"
      },
      {
        "id": 3,
        "value": "Internal"
      },
      {
        "id": 4,
        "value": "Materialized"
      },
      {
        "id": 5,
        "value": "Secure"
      }
    ],
    "answers": [
      1,
      3
    ],
    "explanation": "External **Stage** and Internal Named stages are the two variant. Other stages are not names like User **Stage** and **Table** **Stage**.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_50",
    "number": 50,
    "question": "Which type of **View** is most like a **Table**?",
    "options": [
      {
        "id": 1,
        "value": "Standard"
      },
      {
        "id": 2,
        "value": "Secure"
      },
      {
        "id": 3,
        "value": "Materialized"
      },
      {
        "id": 4,
        "value": "External"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "Materialized views are designed to improve query performance for workloads composed of common, repeated query patterns. However, materializing intermediate results incurs additional costs. As such, before creating any materialized views, you should consider whether the costs are offset by the savings from re-using these results frequently enough.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_51",
    "number": 51,
    "question": "Which **Snowflake** edition does allow for customer-managed keys encryption.",
    "options": [
      {
        "id": 1,
        "value": "Only VPS"
      },
      {
        "id": 2,
        "value": "Standard (or higher)"
      },
      {
        "id": 3,
        "value": "Enterprise (or higher)"
      },
      {
        "id": 4,
        "value": "Business Critical (of higher)"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "Business Critical (or higher) edition supports for encrypting data using customer-managed keys.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_52",
    "number": 52,
    "question": "How can you remove the outer array structure of JSON data?",
    "options": [
      {
        "id": 1,
        "value": "Set STRIP_INNER_ARRAY = TRUE"
      },
      {
        "id": 2,
        "value": "Set STRIP_OUTER_BRACKET = TRUE"
      },
      {
        "id": 3,
        "value": "Set STRIP_OUTER_ARRAY = 1"
      },
      {
        "id": 4,
        "value": "Set STRIP_OUTER_ARRAY = TRUE"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "STRIP_OUTER_ARRAY = TRUE in `COPY` INTO command removes the outer array structure and load the records into separate **Table** rows.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_53",
    "number": 53,
    "question": "Which **Snowflake** Object is a named wrapper around a cluster of servers with CPU, memory, and disk",
    "options": [
      {
        "id": 1,
        "value": "**Schema**"
      },
      {
        "id": 2,
        "value": "**Database**"
      },
      {
        "id": 3,
        "value": "Storage"
      },
      {
        "id": 4,
        "value": "Virtual **Warehouse**"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "Virtual **Warehouse** is the **Snowflake** object which is a named wrapper around a cluster of servers with CPU, memory and disk. It‘s **Snowflake** who managed all the complex setup behind the scene. User does not need to configure EC2 instance, physical servers or anything like that.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_54",
    "number": 54,
    "question": "Which is not the function under Metadata Management of Cloud Services Layer?",
    "options": [
      {
        "id": 1,
        "value": "Used for storing physical micro partition"
      },
      {
        "id": 2,
        "value": "Stores Metadata as data is loaded into the system"
      },
      {
        "id": 3,
        "value": "Handles Queries that can be processes completely from Metadata"
      },
      {
        "id": 4,
        "value": "Used for **Time Travel** and Cloning"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "Metadata Management has following major functions: \n- Stores Metadata as data is loaded into the system \n- Handles queries that can be processes completely from Metadata -Used for **Time Travel** and Cloning -Every aspect of **Snowflake** architecture leverages Metadata",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_55",
    "number": 55,
    "question": "An hour ago, you ran a complex query. You then ran several simple queries from the same worksheet. You want to export the results from the complex query but they are no longer loaded in the Results pane of the worksheet. What is the least costly way to download the results?",
    "options": [
      {
        "id": 1,
        "value": "Click on History -> Locate the Query -> Click the QueryID -> Use the “Export Result“ button"
      },
      {
        "id": 2,
        "value": "Click on History -> Locate the Query -> Click “Download Results“ in column 3"
      },
      {
        "id": 3,
        "value": "Type the command Select RESULTS(,,) in the Worksheet and click “Run“"
      },
      {
        "id": 4,
        "value": "Type the command `SELECT` RESULTS(-3) into the Worksheet and click “Run“"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "The History page displays queries executed in the last 14 days, starting with the most recent ones. You can use the End Time filter to display queries based on a specified date; however, if you specify a date earlier than the last 14 days, no results are returned. You can export results only for queries for which you can **View** the results (i.e. queries youve executed). If you didnt execute a query or the query result is no longer available, the Export Result button is not displayed for the query. The web interface only supports exporting results up to 100 MB in size. If a query result exceeds this limit, you are prompted whether to proceed with the export. The export prompts may differ depending on your browser. For example, in Safari, you are prompted only for an export format (CSV or TSV). After the export completes, you are prompted to download the exported result to a new window, in which you can use the Save Page As browser option to save the result to a file.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_56",
    "number": 56,
    "question": "A CAST command (symbol) will force a value to be output as a certain datatype. Which of the following code samples will result in the “employeename“ being output using the VARCHAR datatype?",
    "options": [
      {
        "id": 1,
        "value": "`SELECT` employeename::VARCHAR"
      },
      {
        "id": 2,
        "value": "`SELECT` employeename||VARCHAR"
      },
      {
        "id": 3,
        "value": "`SELECT` VARCHAR(employeename)"
      },
      {
        "id": 4,
        "value": "`SELECT` employeename AS VARCHAR"
      }
    ],
    "answers": [
      1
    ],
    "explanation": ":: is used for Casting in **Snowflake**.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_57",
    "number": 57,
    "question": "Which tables will experience the most benefit from clustering?",
    "options": [
      {
        "id": 1,
        "value": "Tables with sizes between the range of 100 MB to 1 GB compressed"
      },
      {
        "id": 2,
        "value": "Tables with sizes between the range of 1 GB to 10 GB compressed"
      },
      {
        "id": 3,
        "value": "All sizes of tables"
      },
      {
        "id": 4,
        "value": "Tables in the multi-terabyte (TB) range"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "In general, tables in the multi-terabyte (TB) range will experience the most benefit from clustering, particularly if DML is performed regularly/continually on these tables.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_58",
    "number": 58,
    "question": "Which are the correct statements about STREAMS?",
    "options": [
      {
        "id": 1,
        "value": "Streams is used to identify and act on changed **Table** records"
      },
      {
        "id": 2,
        "value": "STREAMS is used to scheduled SQL execution"
      },
      {
        "id": 3,
        "value": "It is used for Change Data Capture (CDC)"
      },
      {
        "id": 4,
        "value": "it can not be used with TASKS"
      }
    ],
    "answers": [
      1,
      3
    ],
    "explanation": "Tasks is used to scheduled SQL execution. A stream records data manipulation language (DML) changes made to a **Table**, including information about inserts, updates, and deletes. It can be combine with TASKS to design some valuable solution.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_59",
    "number": 59,
    "question": "**Snowflake** provides standard and powerful features that ensure the highest levels of security for your account and users if used properly. Which are the true statements about **Snowflake** Security?",
    "options": [
      {
        "id": 1,
        "value": "Federated authentication in **Snowflake** is compliant with SAML 2.0"
      },
      {
        "id": 2,
        "value": "Tri-secret requires that customers manage their own keys"
      },
      {
        "id": 3,
        "value": "**Snowflake** supports user-based access control"
      }
    ],
    "answers": [
      1,
      2
    ],
    "explanation": "Along with Tri-Secret and Federated authentication, **Snowflake** supports ROLE-based access control.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_60",
    "number": 60,
    "question": "What is the best recommended size of data file in case of SNOWPIPE continuous loading?",
    "options": [
      {
        "id": 1,
        "value": "Same as of Bulk Loading (10 MB - 100 MB uncompressed)"
      },
      {
        "id": 2,
        "value": "Same as of Bulk Loading (10 MB - 100 MB compressed)"
      },
      {
        "id": 3,
        "value": "1 GB Compressed"
      },
      {
        "id": 4,
        "value": "if file taking more than a minute, then split the files into more files"
      }
    ],
    "answers": [
      2,
      4
    ],
    "explanation": "Snowpipe is designed to load new data typically within a minute after a file notification is sent. Follow the best practices as per bulk loading for file sizes (10 MB \n- 100 MB compressed) but split into more files if it takes more than a minute",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 6_1",
    "number": 1,
    "question": "What all objects can be shared?",
    "options": [
      {
        "id": 1,
        "value": "**Table**"
      },
      {
        "id": 2,
        "value": "Standard **View**"
      },
      {
        "id": 3,
        "value": "Secure UDF"
      },
      {
        "id": 4,
        "value": "Secure **View**"
      }
    ],
    "answers": [
      1,
      3,
      4
    ],
    "explanation": "Data Share is meant for Secures access and so, Standard **View** is not allowed to be shared.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_2",
    "number": 2,
    "question": "How can you ignore Metadata and load the already loaded staged file into **Table**?",
    "options": [
      {
        "id": 1,
        "value": "Using LOAD = TRUE parameter with `COPY` INTO command"
      },
      {
        "id": 2,
        "value": "Using FORCE = YES parameter with `COPY` INTO command"
      },
      {
        "id": 3,
        "value": "Using FORCE = TRUE parameter with `COPY` INTO command"
      },
      {
        "id": 4,
        "value": "Using LOAD = FORCE parameter with `COPY` INTO command"
      },
      {
        "id": 5,
        "value": "Using `INSERT` = TRUE parameter with `COPY` INTO command"
      },
      {
        "id": 6,
        "value": "Using ACCEPT = TRUE parameter with `COPY` INTO command"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "FORCE = TRUE parameter specifies to load all files, regardless of whether theyve been loaded previously and have not changed since they were loaded. Note that this option reloads files, potentially duplicating data in a **Table**.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_3",
    "number": 3,
    "question": "Which approach would result in improved performance through linear scaling of data ingestion workload?",
    "options": [
      {
        "id": 1,
        "value": "Resize virtual **Warehouse**"
      },
      {
        "id": 2,
        "value": "Consider the practice of splitting input file batch within the recommended range of 10MB to 100MB"
      },
      {
        "id": 3,
        "value": "All of the above"
      },
      {
        "id": 4,
        "value": "Consider the practice of organizing data by granular path"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "Resize or Scaling up the virtual **Warehouse** improves the performance. It is better that you organize data by granular path, it will help **Snowflake** find the file easily without wasting it‘s resources on identify the data files. As per best practice, the size of data file should be in the range of 10 MB to 110 MB. Each server can process 8 files in parallel so, breaking a file into small files is the good practice.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_4",
    "number": 4,
    "question": "Monica has a EMPLOYEE_DATA **Table**. Monica wants to create another **Table** EMPLOYEE_DATA_OTHER which should be same as EMPLOYEE_DATA **Table** with same data. What is the best option for Monica?",
    "options": [
      {
        "id": 1,
        "value": "`CREATE` SHARE EMPLOYEE_DATA;"
      },
      {
        "id": 2,
        "value": "Clone the **Table** with same data with SQL command as follows - `CREATE` **Table** EMPLOYEE_DATA_OTHER CLONE EMPLOYEE_DATA;"
      },
      {
        "id": 3,
        "value": "Create the **Table** with LIKE SQL command as follows - `CREATE` **Table** EMPLOYEE_DATA_OTHER LIKE EMPLOYEE_DATA;"
      },
      {
        "id": 4,
        "value": "Create the **Table** with same data with SQL command as follows - `CREATE` **Table** EMPLOYEE_DATA_OTHER AS `SELECT` * `FROM` EMPLOYEE_DATA;"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "The best option is the Clone the **Table** as EMPLOYEE_DATA and EMPLOYEE_DATA_OTHER has same structure and same data. It will help save the storage cost. LIKE command only creates empty **Table**.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_5",
    "number": 5,
    "question": "Which cache stores object definitions and statistics?",
    "options": [
      {
        "id": 1,
        "value": "Results Cache"
      },
      {
        "id": 2,
        "value": "Metadata Cache"
      },
      {
        "id": 3,
        "value": "**Warehouse** Cache"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "Metadata Management has following major functions: \n- Stores Metadata as data is loaded into the system \n- Handles queries that can be processes completely from Metadata -Used for **Time Travel** and Cloning -Every aspect of **Snowflake** architecture leverages met",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_6",
    "number": 6,
    "question": "How to change the current **Warehouse** of a session?",
    "options": [
      {
        "id": 1,
        "value": "None of these"
      },
      {
        "id": 2,
        "value": "Execute SET **Warehouse** command"
      },
      {
        "id": 3,
        "value": "Execute `SELECT` **Warehouse** command"
      },
      {
        "id": 4,
        "value": "Execute `USE` **Warehouse** command"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "`USE` **Warehouse**; command sets the **Warehouse** for the current session, whereis the name of the **Warehouse** which needs to be set for the session.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_7",
    "number": 7,
    "question": "If a server in **Warehouse** cluster runs for 64 seconds, shuts down, and then restarts and runs for less than 60 seconds, for how many seconds it will be billed?",
    "options": [
      {
        "id": 1,
        "value": "120 Seconds"
      },
      {
        "id": 2,
        "value": "124 Seconds"
      },
      {
        "id": 3,
        "value": "4 Seconds"
      },
      {
        "id": 4,
        "value": "64 Seconds"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "The minimum billing charge for provisioning a server is 1 minute (i.e. 60 seconds). So, the total billing will be for 60 + 4+ 60 = 124 seconds.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_8",
    "number": 8,
    "question": "How can you validate the `COPY` INTO command before actually loading data into the **Table**?",
    "options": [
      {
        "id": 1,
        "value": "None of these"
      },
      {
        "id": 2,
        "value": "Use parameter VALIDATION_COPY = TRUE | RETURN__ROWS | RETURN_ERRORS |RETURN_ALL_ERRORS with `COPY` INTO command"
      },
      {
        "id": 3,
        "value": "Simply count the loaded records and match with **Stage**"
      },
      {
        "id": 4,
        "value": "`USE` parameter VALIDATION_MODE = RETURN__ROWS | RETURN_ERRORS |RETURN_ALL_ERRORS"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "VALIDATION_MODE instructs the `COPY` command to validate the data files instead of loading them into the specified **Table**; i.e. the `COPY` command tests the files for errors but does not load them. The command validates the data to be loaded and returns results based on the validation option specified.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_9",
    "number": 9,
    "question": "Which security feature is supported in **Snowflake**?",
    "options": [
      {
        "id": 1,
        "value": "Tri-Secret Secure Encryption"
      },
      {
        "id": 2,
        "value": "All of these"
      },
      {
        "id": 3,
        "value": "Role-Based Access Control"
      },
      {
        "id": 4,
        "value": "Multi-Factor Authentication"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "**Snowflake** is highly secured platform and provides multi-level security like MFA, IP whitelisting, SSO, Tri Secret Secure, Role-Based etc.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_10",
    "number": 10,
    "question": "**Snowflake** offers multiple editions. Which one is not a offering from **Snowflake**.",
    "options": [
      {
        "id": 1,
        "value": "Premium"
      },
      {
        "id": 2,
        "value": "Business Critical"
      },
      {
        "id": 3,
        "value": "Standard"
      },
      {
        "id": 4,
        "value": "Enterprise"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "**Snowflake** offers 4 editions: 1 \n- Standard Edition 2 \n- Enterprise Edition 3 \n- Business Critical Edition 4 \n- Virtual Private **Snowflake** (VPS)",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_11",
    "number": 11,
    "question": "**Snowflake** offers the early access of staged release to designated Standard Edition Customer. True or false?",
    "options": [
      {
        "id": 1,
        "value": "FALSE"
      },
      {
        "id": 2,
        "value": "TRUE"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "**Snowflake** offers early access to designated Enterprise (or higher) accounts.Early access is not required or recommended for all organizations with Enterprise Edition accounts; **Snowflake**s rigorous release testing and monitoring during deployments is usually sufficient to prevent most issues. Early access is intended primarily for organizations that desire added certainty that their production accounts will not be affected by full releases.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_12",
    "number": 12,
    "question": "If you want to **View** query history older than 14 days, where can you go to **View** it? Choose one path and one “term“ commonly used.",
    "options": [
      {
        "id": 1,
        "value": "**Snowflake** (**Database**) -> ACCOUNT_USAGE (**Schema**) -> QUERY_HISTORY (Secure **View**)"
      },
      {
        "id": 2,
        "value": "History-> Profile -> Account_Usage"
      },
      {
        "id": 3,
        "value": "Account->Usage->History"
      },
      {
        "id": 4,
        "value": "The Usage Sharing Monitor"
      },
      {
        "id": 5,
        "value": "The Account Usage Share"
      }
    ],
    "answers": [
      1,
      5
    ],
    "explanation": "History is available for only 14 days through UI. Older history can be found in ACCOUNT_USAGE.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_13",
    "number": 13,
    "question": "**Snowflake** data storage costs are calculated based on: (Select 2)",
    "options": [
      {
        "id": 1,
        "value": "Amount Stored on First Day of Month"
      },
      {
        "id": 2,
        "value": "Uncompressed Size"
      },
      {
        "id": 3,
        "value": "Amount Stored on Last Day of Month"
      },
      {
        "id": 4,
        "value": "Amount Stored - Daily Average"
      },
      {
        "id": 5,
        "value": "Compressed Size"
      }
    ],
    "answers": [
      4,
      5
    ],
    "explanation": "All storage within **Snowflake** is billable in compressed format. **Snowflake** considers the daily average storage (in Terabytes) for billing.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_14",
    "number": 14,
    "question": "**Snowflake** Architecture consists of many separate layers. Please select the correct layers. (Select 3).",
    "options": [
      {
        "id": 1,
        "value": "Cloud Services Layer"
      },
      {
        "id": 2,
        "value": "**Database** Storage Layer"
      },
      {
        "id": 3,
        "value": "Security Layer"
      },
      {
        "id": 4,
        "value": "Query Processing Layer"
      }
    ],
    "answers": [
      1,
      2,
      4
    ],
    "explanation": "**Snowflake** Architecture consists of Cloud Services Layer, Query Processing (**Warehouse**) Layer and Cloud Services Layer.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_15",
    "number": 15,
    "question": "Which vendors do support **Snowflake** natively for federated authentication and SSO?",
    "options": [
      {
        "id": 1,
        "value": "Microsoft Azure Active Directory"
      },
      {
        "id": 2,
        "value": "Okta"
      },
      {
        "id": 3,
        "value": "Onelogin"
      },
      {
        "id": 4,
        "value": "Google G Suite"
      },
      {
        "id": 5,
        "value": "Microsoft ADFS"
      }
    ],
    "answers": [
      2,
      5
    ],
    "explanation": "Okta and Microsoft ADFS provide native **Snowflake** support for federated authentication and SSO. Other are not native but **Snowflake** supports using SAML 2.0-compliant.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_16",
    "number": 16,
    "question": "What is the best use of SCALING OUT?",
    "options": [
      {
        "id": 1,
        "value": "Better Concurrency"
      },
      {
        "id": 2,
        "value": "Better Performance"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "SCALING OUT is meant for handling high concurrent queries.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_17",
    "number": 17,
    "question": "Which query will require compute (Virtual **Warehouse**)? Consider **Table** created as – `CREATE` or replace **Table** T1 ( ID number(2), Name varchar(20), ID number (11,2) );",
    "options": [
      {
        "id": 1,
        "value": "`SHOW` DATABASES;"
      },
      {
        "id": 2,
        "value": "`SELECT` CURRENT_ACCOUNT();"
      },
      {
        "id": 3,
        "value": "`SELECT` MAX(ID) `FROM` T1;"
      },
      {
        "id": 4,
        "value": "`SELECT` * `FROM` T1;"
      },
      {
        "id": 5,
        "value": "`SELECT` MIN(ID) `FROM` T1;"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "Except `SELECT` * `FROM` T1, all the queries return results from cloud services layer Metadata, So these queries do not need a running Virtual **Warehouse**.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_18",
    "number": 18,
    "question": "**Snowflake** **Resource Monitor** allows administrators to set thresholds and triggers to track credit usage. What methods are most effective for resource monitoring? (Check all that apply).",
    "options": [
      {
        "id": 1,
        "value": "Setting quota thresholds for trigger actions and notifications"
      },
      {
        "id": 2,
        "value": "Tracking and controlling credit consumption on a monthly basis"
      },
      {
        "id": 3,
        "value": "Control global monthly credit usage for an account"
      },
      {
        "id": 4,
        "value": "Tracking consumption on an hourly basis"
      }
    ],
    "answers": [
      1,
      2,
      3
    ],
    "explanation": "Resource monitors are not intended for strictly controlling consumption on an hourly basis; they are intended for tracking and controlling credit consumption per interval (day, week, month, etc.). Also, they are not intended for setting precise limits on credit usage (i.e. down to the level of individual credits). For example, when credit quota thresholds are reached for a **Resource Monitor**, the assigned warehouses may take some time to suspend, even when the action is Suspend Immediate, thereby consuming additional credits.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_19",
    "number": 19,
    "question": "John wants to create a **Warehouse** which should not start immediately. Which property will him to create a **Warehouse** in suspended mode.",
    "options": [
      {
        "id": 1,
        "value": "`AUTO_SUSPEND` = INITIAL"
      },
      {
        "id": 2,
        "value": "INITIATE = FALSE"
      },
      {
        "id": 3,
        "value": "AUTO_START = FALSE"
      },
      {
        "id": 4,
        "value": "INITIALLY_SUSPENDED = TRUE"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "INITIALLY_SUSPENDED = TRUE will not start the **Warehouse** after creation. By default it is set to FALSE.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_20",
    "number": 20,
    "question": "What action causes a **Warehouse**‘s cache to be purged?",
    "options": [
      {
        "id": 1,
        "value": "The passing of 24 hours."
      },
      {
        "id": 2,
        "value": "Resuming the **Warehouse**."
      },
      {
        "id": 3,
        "value": "Suspending the **Warehouse**."
      },
      {
        "id": 4,
        "value": "A change to the Metadata Cache size."
      }
    ],
    "answers": [
      3
    ],
    "explanation": "Cache gets purged on suspending the **Warehouse**.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_21",
    "number": 21,
    "question": "A user‘s default role is",
    "options": [
      {
        "id": 1,
        "value": "The name used to log in to the WebUI"
      },
      {
        "id": 2,
        "value": "The user‘s default role is always `PUBLIC`"
      },
      {
        "id": 3,
        "value": "The role a user is set to each time the user logs in to the system"
      },
      {
        "id": 4,
        "value": "The user‘s default role changes each time the user logs in to the system."
      }
    ],
    "answers": [
      3
    ],
    "explanation": "The role a user is set to each time the user logs in to the system",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_22",
    "number": 22,
    "question": "What is the best practice after creating a custom role in a **Snowflake** account?",
    "options": [
      {
        "id": 1,
        "value": "Grant the role to the `USERADMIN` role so users can be added to the role."
      },
      {
        "id": 2,
        "value": "Grant ownership of the role to itself so a member of the role can control access to the role"
      },
      {
        "id": 3,
        "value": "Grant `PUBLIC` to the role so all **Database** objects owned by `PUBLIC` will be available to the new role"
      },
      {
        "id": 4,
        "value": "Grant ownership to the `SYSADMIN` role or a child role under `SYSADMIN`"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "Custom role is mostly created for specific access of specific objects. As per best practice to grant ownership to `SYSADMIN` or child role under `SYSADMIN` so that `SYSADMIN` can control the access on the objects.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_23",
    "number": 23,
    "question": "Which of the following are valid context functions?",
    "options": [
      {
        "id": 1,
        "value": "CURRENT_SESSION( )"
      },
      {
        "id": 2,
        "value": "CURRENT_CLOUD_INFRASTRUCTURE( )"
      },
      {
        "id": 3,
        "value": "CURRENT_WORKSHEET( )"
      },
      {
        "id": 4,
        "value": "CURRENT_REGION( )"
      },
      {
        "id": 5,
        "value": "CURRENT_CLIENT( )"
      }
    ],
    "answers": [
      1,
      4,
      5
    ],
    "explanation": "CURRENT_WORKSHEET() and CURRENT_CLOUD_INFRASTRUCTURE() are not valid context functions.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_24",
    "number": 24,
    "question": "Secured **View** can be used to hide the definition but its performance can get degraded?",
    "options": [
      {
        "id": 1,
        "value": "FALSE"
      },
      {
        "id": 2,
        "value": "TRUE"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "Secure views should not be used for views that are defined for query convenience, such as views created for simplifying querying data for which users do not need to understand the underlying data representation. This is because the **Snowflake** query optimizer, when evaluating secure views, bypasses certain optimizations used for regular views. This might result in some impact on query performance for secure views.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_25",
    "number": 25,
    "question": "Which **Snowflake** Editions have Elastic Data Warehousing. Check all the **Snowflake** editions that have Elastic Data Warehousing enabled.",
    "options": [
      {
        "id": 1,
        "value": "Standard"
      },
      {
        "id": 2,
        "value": "Premium"
      },
      {
        "id": 3,
        "value": "Virtual Private **Snowflake**"
      },
      {
        "id": 4,
        "value": "Enterprise"
      },
      {
        "id": 5,
        "value": "Business Critical Edition"
      }
    ],
    "answers": [
      3,
      4,
      5
    ],
    "explanation": "Standard Edition only has Single Compute Cluster. Premium is not a **Snowflake** edition. All other editions have multi clusters capability.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_26",
    "number": 26,
    "question": "In the History Page, a query shows Bytes Scanned having Assigned Partitions:\n\n- 110, Scanned Partitions 58, and Original Partitions 110.\n- Why did the optimizer show fewer partitions scanned than assigned?",
    "options": [
      {
        "id": 1,
        "value": "The static optimization determined the number of possible micro partitions would be 110 but the dynamic optimization was able to prune some of the partitions from a joined **Table**"
      },
      {
        "id": 2,
        "value": "During the execution of the query, new data was added to the **Table** and the optimizer had to add those micro partitions into the scan."
      },
      {
        "id": 3,
        "value": "The query was using an Xlarge **Warehouse** and could scan the partitions in parallel"
      },
      {
        "id": 4,
        "value": "The optimizer estimated only 58 partitions would need to be scan but during the execution of the query, the optimizer realized it would have to read all 110 micro partitions"
      },
      {
        "id": 5,
        "value": "One of the tables in the query was an external **Table** and didnt have micro partitions The Metadata for the **Table** was out of date and there were really only 58 partitions total"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "**Snowflake** produces well-clustered data in tables in micro-partitions. **Snowflake** only targets those micro-partitions which come under the range of query criteria. If **Table** is clustered well, **Snowflake** scans only few of the micro-partitions.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_27",
    "number": 27,
    "question": "John wants to create a **Warehouse** which can auto resume whenever there is a new load / query to execute. How should he configure the **Warehouse**?",
    "options": [
      {
        "id": 1,
        "value": "`AUTO_SUSPEND` = TRUE"
      },
      {
        "id": 2,
        "value": "`AUTO_RESUME` = TRUE"
      },
      {
        "id": 3,
        "value": "`AUTO_RESUME` = 1"
      },
      {
        "id": 4,
        "value": "It is always manual and cant be automated."
      }
    ],
    "answers": [
      2
    ],
    "explanation": "`AUTO_RESUME` = TRUE resumes the **Warehouse** automatically whenever there is new load or query needing a **Warehouse**.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_28",
    "number": 28,
    "question": "The acronym ETL stands for what three words?",
    "options": [
      {
        "id": 1,
        "value": "Extract, Transition, Loading"
      },
      {
        "id": 2,
        "value": "Extract, Transition, Load"
      },
      {
        "id": 3,
        "value": "Extract, Transfer, Load"
      },
      {
        "id": 4,
        "value": "Extract, Transform, Load"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "First step is extraction of data from source and then Transform before loading into target **Database** like in **Snowflake**.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_29",
    "number": 29,
    "question": "Monica is a new **Snowflake** user with `ACCOUNTADMIN` role. She wants to create a **Warehouse** which can scale out if needed. She tried to create the **Warehouse** using UI but she is not able to find the options to set Minimum and Maximum Clusters. What could be the issue?",
    "options": [
      {
        "id": 1,
        "value": "She should use SQL command to create the **Warehouse** with Minimum and Maximum clusters"
      },
      {
        "id": 2,
        "value": "She should `ALTER` any existing **Warehouse** to set the Maximum and Minimum clusters"
      },
      {
        "id": 3,
        "value": "She doesn‘t have enough privilege to create a **Warehouse**"
      },
      {
        "id": 4,
        "value": "She is using STANDARD **Snowflake** edition. Multi-Cluster is not available in STANDARD edition."
      }
    ],
    "answers": [
      4
    ],
    "explanation": "Multi-cluster feature is not available in Standard edition. It starts from Enterprise Edition.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_30",
    "number": 30,
    "question": "What all commands will you use to load data from your Local File System to **Snowflake** **Table**?",
    "options": [
      {
        "id": 1,
        "value": "Only `PUT` command"
      },
      {
        "id": 2,
        "value": "`COPY` INTO followed by `PUT` command"
      },
      {
        "id": 3,
        "value": "`PUT` COMMAND followed by `COPY` INTO"
      },
      {
        "id": 4,
        "value": "Only `COPY` INTO command"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "When loading data from local file system to **Snowflake**, you need to first run `PUT` command to load data from local file system to **Snowflake** internal **Stage** and then run `COPY` INTO command to copy data from **Snowflake** internal **Stage** to **Table**.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_31",
    "number": 31,
    "question": "What is the column datatype used for ingesting semi-structured data?",
    "options": [
      {
        "id": 1,
        "value": "VARCHAR"
      },
      {
        "id": 2,
        "value": "VARIANT"
      },
      {
        "id": 3,
        "value": "NUMBER"
      },
      {
        "id": 4,
        "value": "STRING"
      },
      {
        "id": 5,
        "value": "FLOAT"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "**Snowflake** loads semi-structured data into a single VARIANT column. The VARIANT data type imposes a 16 MB (compressed) size limit on individual rows.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_32",
    "number": 32,
    "question": "**Snowflake** maintains detailed Metadata for each **Table** into which data is loaded. For how long **Snowflake** keeps the Metadata active?",
    "options": [
      {
        "id": 1,
        "value": "16 Days"
      },
      {
        "id": 2,
        "value": "64 Days"
      },
      {
        "id": 3,
        "value": "32 Days"
      },
      {
        "id": 4,
        "value": "24 Hours"
      },
      {
        "id": 5,
        "value": "31 Days"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "**Snowflake** maintains detailed Metadata for each **Table** into which data is loaded, including: -Name of each file from which data was load -File Size -ETag for the file -Number of rows parsed in the file -Timestamp of the last load for the file -Information about any errors encountered in the file during loading The load Metadata expires after 64 days.(LAST_MODIFIED date for a staged data).",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_33",
    "number": 33,
    "question": "If a DBA_ROLE creates a **Database**. Later the DBA_ROLE was dropped. Who will own the **Database** now which was created by DBA_ROLE?",
    "options": [
      {
        "id": 1,
        "value": "**Database** will be dropped"
      },
      {
        "id": 2,
        "value": "No one can access"
      },
      {
        "id": 3,
        "value": "Role who dropped the DBA_ROLE"
      },
      {
        "id": 4,
        "value": "DBA_ROLE cant be dropped as it is the owner of the **Database**."
      }
    ],
    "answers": [
      3
    ],
    "explanation": "The role who dropped the DBA_ROLE will own that **Database**. (IMPORTANT QUESTION)",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_34",
    "number": 34,
    "question": "Semi-structured data types can be cast using what method?",
    "options": [
      {
        "id": 1,
        "value": "Column_name::"
      },
      {
        "id": 2,
        "value": "Column_name AS"
      },
      {
        "id": 3,
        "value": "() Column_name"
      },
      {
        "id": 4,
        "value": "Column_name CAST TO"
      },
      {
        "id": 5,
        "value": "Column_name AS_"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "Usage of Two colons is the correct syntax for Casting.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_35",
    "number": 35,
    "question": "What all commands will you use to unload data from your **Snowflake** **Table** to your local file systems?",
    "options": [
      {
        "id": 1,
        "value": "Only `COPY` INTO command"
      },
      {
        "id": 2,
        "value": "`COPY` INTO command followed by `GET` command"
      },
      {
        "id": 3,
        "value": "Only `GET` command"
      },
      {
        "id": 4,
        "value": "`COPY` INTO followed by `PUT` command"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "First copy the data from **Snowflake** **Table** to Internal **Stage** using `COPY` INTO command and then unload data from internal **Stage** to your local file system using `GET` command.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_36",
    "number": 36,
    "question": "**Snowflake** has a default file format if none is explicitly set or declared in SQL syntax. (TRUE / FALSE)",
    "options": [
      {
        "id": 1,
        "value": "FALSE"
      },
      {
        "id": 2,
        "value": "TRUE"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "True, **Snowflake** has a default file format if none is explicitly set or declared in SQL syntax",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_37",
    "number": 37,
    "question": "Semi-Structured data must be transformed prior to loading the data into a **Snowflake** **Table**. (TRUE / FALSE)",
    "options": [
      {
        "id": 1,
        "value": "FALSE"
      },
      {
        "id": 2,
        "value": "TRUE"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "**Snowflake** natively supports semi-structured data, it is not must to transformed Semi-Structured data prior to loading the data into a **Snowflake** **Table**.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_38",
    "number": 38,
    "question": "What is the best option to automatically delete the files from **Stage** after it got loaded using `COPY` INTO command?",
    "options": [
      {
        "id": 1,
        "value": "Cloud provider deletes the file automatically"
      },
      {
        "id": 2,
        "value": "Setting `DELETE` = TRUE in `COPY` INTO command"
      },
      {
        "id": 3,
        "value": "Delete manually using Cloud Provide UI delete option as soon as file is loaded"
      },
      {
        "id": 4,
        "value": "Setting PURGE = TRUE in `COPY` INTO command"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "PURGE = TRUE parameter helps remove the data files from the **Stage** automatically after the data is loaded successfully. If the purge operation fails for any reason, no error is returned currently. So, you should also run `LIST` command periodically to check the available files in **Stage** and manually remove successfully loaded files, if any exist.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_39",
    "number": 39,
    "question": "Dynamic Data Masking is supported by:",
    "options": [
      {
        "id": 1,
        "value": "Standard Edition"
      },
      {
        "id": 2,
        "value": "Business Critical"
      },
      {
        "id": 3,
        "value": "Enterprise Edition"
      },
      {
        "id": 4,
        "value": "VPS"
      }
    ],
    "answers": [
      2,
      3,
      4
    ],
    "explanation": "Dynamic Data Masking starts with the Enterprise edition.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_40",
    "number": 40,
    "question": "How can you validate the `COPY` INTO command before actually loading data into the **Table**?",
    "options": [
      {
        "id": 1,
        "value": "Simply count the loaded records and match with **Stage**"
      },
      {
        "id": 2,
        "value": "`USE` parameter VALIDATION_MODE = RETURN__ROWS | RETURN_ERRORS |RETURN_ALL_ERRORS"
      },
      {
        "id": 3,
        "value": "Use parameter VALIDATION_COPY = TRUE | RETURN__ROWS | RETURN_ERRORS |RETURN_ALL_ERRORS with `COPY` INTO command"
      },
      {
        "id": 4,
        "value": "None of these"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "VALIDATION_MODE instructs the `COPY` command to validate the data files instead of loading them into the specified **Table**; i.e. the `COPY` command tests the files for errors but does not load them. The command validates the data to be loaded and returns results based on the validation option specified.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_41",
    "number": 41,
    "question": "Which of the following workload is **Snowflake** suited for?",
    "options": [
      {
        "id": 1,
        "value": "Data Lakes"
      },
      {
        "id": 2,
        "value": "Data **Warehouse**"
      },
      {
        "id": 3,
        "value": "Data Science"
      },
      {
        "id": 4,
        "value": "Data Engineering"
      },
      {
        "id": 5,
        "value": "**Data Sharing** and Exchanges"
      },
      {
        "id": 6,
        "value": "Data Applications"
      }
    ],
    "answers": [
      1,
      2,
      3,
      4,
      5,
      6
    ],
    "explanation": "**Snowflake** is not a just Data **Warehouse** platform. It is a Data platform which can handle all of these workloads.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_42",
    "number": 42,
    "question": "Reclustering in **Snowflake** is automatic. (TRUE / FALSE)",
    "options": [
      {
        "id": 1,
        "value": "FALSE"
      },
      {
        "id": 2,
        "value": "TRUE"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "Reclustering in **Snowflake** is automatic; no maintenance is needed.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_43",
    "number": 43,
    "question": "John wants to create a multi-cluster **Warehouse** and wants to make sure that whenever new queries are queued, additional clusters should start immediately. How should he configure the **Warehouse**?",
    "options": [
      {
        "id": 1,
        "value": "Configure as SCALE-MAX so that the **Warehouse** is always using maximum number of specified clusters"
      },
      {
        "id": 2,
        "value": "**Snowflake** takes care of this automatically so, John does not have to worry about it"
      },
      {
        "id": 3,
        "value": "Set the SCALING POLICY as ECONOMY"
      },
      {
        "id": 4,
        "value": "Set the SCALING POLICY as STANDARD"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "If a multi-cluster **Warehouse** is configured with SCALING policy as STANDARD it immediately when either a query is queued or the system detects that theres one more query than the currently-running clusters can execute",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_44",
    "number": 44,
    "question": "At what frequency does **Snowflake** rotate the object keys?",
    "options": [
      {
        "id": 1,
        "value": "60 Days"
      },
      {
        "id": 2,
        "value": "16 Days"
      },
      {
        "id": 3,
        "value": "30 Days"
      },
      {
        "id": 4,
        "value": "1 Year"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "Key automatically get rotated every 30 days.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_45",
    "number": 45,
    "question": "What is the default compression algorithm **Snowflake** apply while unloading data?",
    "options": [
      {
        "id": 1,
        "value": "GZIP3"
      },
      {
        "id": 2,
        "value": "BZ2"
      },
      {
        "id": 3,
        "value": "ZSTD"
      },
      {
        "id": 4,
        "value": "NONE"
      },
      {
        "id": 5,
        "value": "GZIP"
      }
    ],
    "answers": [
      5
    ],
    "explanation": "When unloading data, files are automatically compressed using the default, which is gzip.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_46",
    "number": 46,
    "question": "John has setup process to load specific set of files using both Bulk and Snowpipe. This is best practice to avoid any missed loading either by Bulk loading or Snowpipe. (TRUE /FALSE)",
    "options": [
      {
        "id": 1,
        "value": "TRUE"
      },
      {
        "id": 2,
        "value": "FALSE"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "This is not a best practice, it may create reloading issue. To avoid reloading files (and duplicating data), **Snowflake** recommends loading data from a specific set of files using either bulk data loading or Snowpipe but not both.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_47",
    "number": 47,
    "question": "What are the correct SQL extensions used in querying data from **Time Travel**? Select 2.",
    "options": [
      {
        "id": 1,
        "value": "AFTER"
      },
      {
        "id": 2,
        "value": "INITIAL"
      },
      {
        "id": 3,
        "value": "BEFORE"
      },
      {
        "id": 4,
        "value": "AT"
      }
    ],
    "answers": [
      3,
      4
    ],
    "explanation": "AT | BEFORE clause are used to query based on timestamp, offset or query id.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_48",
    "number": 48,
    "question": "**Snowflake** supports transforming data while loading it into a **Table** using the `COPY` command. What all options you have?",
    "options": [
      {
        "id": 1,
        "value": "Column reordering"
      },
      {
        "id": 2,
        "value": "String Truncation"
      },
      {
        "id": 3,
        "value": "Join"
      },
      {
        "id": 4,
        "value": "Column omission"
      },
      {
        "id": 5,
        "value": "Casts"
      }
    ],
    "answers": [
      1,
      2,
      4,
      5
    ],
    "explanation": "**Snowflake** supports transforming data while loading it into a **Table** using the `COPY` command. Options include:\n\n- Column reordering \n- Column omission \n- Casts \n- Truncating text strings that exceed the target column length There is no requirement for your data files to have the same number and ordering of columns as your target **Table**.\n- The `COPY` INTO transformations do not support FLATTEN, JOIN, GROUP BY.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_49",
    "number": 49,
    "question": "Named stages come in two varieties, what are they?",
    "options": [
      {
        "id": 1,
        "value": "External"
      },
      {
        "id": 2,
        "value": "Permanent"
      },
      {
        "id": 3,
        "value": "Internal"
      },
      {
        "id": 4,
        "value": "Materialized"
      },
      {
        "id": 5,
        "value": "Secure"
      }
    ],
    "answers": [
      1,
      3
    ],
    "explanation": "External **Stage** and Internal Named stages are the two variant. Other stages are not names like User **Stage** and **Table** **Stage**.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_50",
    "number": 50,
    "question": "Which type of **View** is most like a **Table**?",
    "options": [
      {
        "id": 1,
        "value": "Standard"
      },
      {
        "id": 2,
        "value": "Secure"
      },
      {
        "id": 3,
        "value": "Materialized"
      },
      {
        "id": 4,
        "value": "External"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "Materialized views are designed to improve query performance for workloads composed of common, repeated query patterns. However, materializing intermediate results incurs additional costs. As such, before creating any materialized views, you should consider whether the costs are offset by the savings from re-using these results frequently enough.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_51",
    "number": 51,
    "question": "Which **Snowflake** edition does allow for customer-managed keys encryption.",
    "options": [
      {
        "id": 1,
        "value": "Only VPS"
      },
      {
        "id": 2,
        "value": "Standard (or higher)"
      },
      {
        "id": 3,
        "value": "Enterprise (or higher)"
      },
      {
        "id": 4,
        "value": "Business Critical (of higher)"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "Business Critical (or higher) edition supports for encrypting data using customer-managed keys.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_52",
    "number": 52,
    "question": "How can you remove the outer array structure of JSON data?",
    "options": [
      {
        "id": 1,
        "value": "Set STRIP_INNER_ARRAY = TRUE"
      },
      {
        "id": 2,
        "value": "Set STRIP_OUTER_BRACKET = TRUE"
      },
      {
        "id": 3,
        "value": "Set STRIP_OUTER_ARRAY = 1"
      },
      {
        "id": 4,
        "value": "Set STRIP_OUTER_ARRAY = TRUE"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "STRIP_OUTER_ARRAY = TRUE in `COPY` INTO command removes the outer array structure and load the records into separate **Table** rows.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_53",
    "number": 53,
    "question": "Which **Snowflake** Object is a named wrapper around a cluster of servers with CPU, memory, and disk",
    "options": [
      {
        "id": 1,
        "value": "**Schema**"
      },
      {
        "id": 2,
        "value": "**Database**"
      },
      {
        "id": 3,
        "value": "Storage"
      },
      {
        "id": 4,
        "value": "Virtual **Warehouse**"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "Virtual **Warehouse** is the **Snowflake** object which is a named wrapper around a cluster of servers with CPU, memory and disk. It‘s **Snowflake** who managed all the complex setup behind the scene. User does not need to configure EC2 instance, physical servers or anything like that.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_54",
    "number": 54,
    "question": "Which is not the function under Metadata Management of Cloud Services Layer?",
    "options": [
      {
        "id": 1,
        "value": "Used for storing physical micro partition"
      },
      {
        "id": 2,
        "value": "Stores Metadata as data is loaded into the system"
      },
      {
        "id": 3,
        "value": "Handles Queries that can be processes completely from Metadata"
      },
      {
        "id": 4,
        "value": "Used for **Time Travel** and Cloning"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "Metadata Management has following major functions: \n- Stores Metadata as data is loaded into the system \n- Handles queries that can be processes completely from Metadata -Used for **Time Travel** and Cloning -Every aspect of **Snowflake** architecture leverages Metadata",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_55",
    "number": 55,
    "question": "An hour ago, you ran a complex query. You then ran several simple queries from the same worksheet. You want to export the results from the complex query but they are no longer loaded in the Results pane of the worksheet. What is the least costly way to download the results?",
    "options": [
      {
        "id": 1,
        "value": "Click on History -> Locate the Query -> Click the QueryID -> Use the “Export Result“ button"
      },
      {
        "id": 2,
        "value": "Click on History -> Locate the Query -> Click “Download Results“ in column 3"
      },
      {
        "id": 3,
        "value": "Type the command Select RESULTS(,,) in the Worksheet and click “Run“"
      },
      {
        "id": 4,
        "value": "Type the command `SELECT` RESULTS(-3) into the Worksheet and click “Run“"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "The History page displays queries executed in the last 14 days, starting with the most recent ones. You can use the End Time filter to display queries based on a specified date; however, if you specify a date earlier than the last 14 days, no results are returned. You can export results only for queries for which you can **View** the results (i.e. queries youve executed). If you didnt execute a query or the query result is no longer available, the Export Result button is not displayed for the query. The web interface only supports exporting results up to 100 MB in size. If a query result exceeds this limit, you are prompted whether to proceed with the export. The export prompts may differ depending on your browser. For example, in Safari, you are prompted only for an export format (CSV or TSV). After the export completes, you are prompted to download the exported result to a new window, in which you can use the Save Page As browser option to save the result to a file.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_56",
    "number": 56,
    "question": "A CAST command (symbol) will force a value to be output as a certain datatype. Which of the following code samples will result in the “employeename“ being output using the VARCHAR datatype?",
    "options": [
      {
        "id": 1,
        "value": "`SELECT` employeename::VARCHAR"
      },
      {
        "id": 2,
        "value": "`SELECT` employeename||VARCHAR"
      },
      {
        "id": 3,
        "value": "`SELECT` VARCHAR(employeename)"
      },
      {
        "id": 4,
        "value": "`SELECT` employeename AS VARCHAR"
      }
    ],
    "answers": [
      1
    ],
    "explanation": ":: is used for Casting in **Snowflake**.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_57",
    "number": 57,
    "question": "Which tables will experience the most benefit from clustering?",
    "options": [
      {
        "id": 1,
        "value": "Tables with sizes between the range of 100 MB to 1 GB compressed"
      },
      {
        "id": 2,
        "value": "Tables with sizes between the range of 1 GB to 10 GB compressed"
      },
      {
        "id": 3,
        "value": "All sizes of tables"
      },
      {
        "id": 4,
        "value": "Tables in the multi-terabyte (TB) range"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "In general, tables in the multi-terabyte (TB) range will experience the most benefit from clustering, particularly if DML is performed regularly/continually on these tables.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_58",
    "number": 58,
    "question": "Which are the correct statements about STREAMS?",
    "options": [
      {
        "id": 1,
        "value": "Streams is used to identify and act on changed **Table** records"
      },
      {
        "id": 2,
        "value": "STREAMS is used to scheduled SQL execution"
      },
      {
        "id": 3,
        "value": "It is used for Change Data Capture (CDC)"
      },
      {
        "id": 4,
        "value": "it can not be used with TASKS"
      }
    ],
    "answers": [
      1,
      3
    ],
    "explanation": "Tasks is used to scheduled SQL execution. A stream records data manipulation language (DML) changes made to a **Table**, including information about inserts, updates, and deletes. It can be combine with TASKS to design some valuable solution.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_59",
    "number": 59,
    "question": "**Snowflake** provides standard and powerful features that ensure the highest levels of security for your account and users if used properly. Which are the true statements about **Snowflake** Security?",
    "options": [
      {
        "id": 1,
        "value": "Federated authentication in **Snowflake** is compliant with SAML 2.0"
      },
      {
        "id": 2,
        "value": "Tri-secret requires that customers manage their own keys"
      },
      {
        "id": 3,
        "value": "**Snowflake** supports user-based access control"
      }
    ],
    "answers": [
      1,
      2
    ],
    "explanation": "Along with Tri-Secret and Federated authentication, **Snowflake** supports ROLE-based access control.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_60",
    "number": 60,
    "question": "What is the best recommended size of data file in case of SNOWPIPE continuous loading?",
    "options": [
      {
        "id": 1,
        "value": "Same as of Bulk Loading (10 MB - 100 MB uncompressed)"
      },
      {
        "id": 2,
        "value": "Same as of Bulk Loading (10 MB - 100 MB compressed)"
      },
      {
        "id": 3,
        "value": "1 GB Compressed"
      },
      {
        "id": 4,
        "value": "if file taking more than a minute, then split the files into more files"
      }
    ],
    "answers": [
      2,
      4
    ],
    "explanation": "Snowpipe is designed to load new data typically within a minute after a file notification is sent. Follow the best practices as per bulk loading for file sizes (10 MB \n- 100 MB compressed) but split into more files if it takes more than a minute",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 7_1",
    "number": 1,
    "question": "If an account has federated authentication enabled. Can **Snowflake** admins still maintain user id and passwords in **Snowflake**?",
    "options": [
      {
        "id": 1,
        "value": "No"
      },
      {
        "id": 2,
        "value": "Yes"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "With federated authentication enabled for your account, **Snowflake** still allows maintaining and using **Snowflake** user credentials (login name and password). In other words:\n\n- Account and security administrators can still create users with passwords maintained in **Snowflake**. \n- Users can still log into **Snowflake** using their **Snowflake** credentials.\n- However, if federated authentication is enabled for your account, **Snowflake** does not recommend maintaining user passwords in **Snowflake**.\n- Instead, user passwords should be maintained solely in your IdP.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_2",
    "number": 2,
    "question": "The compute resource used by **Snowflake** for data loading jobs can be provided by:",
    "options": [
      {
        "id": 1,
        "value": "User managed virtual **Warehouse**"
      },
      {
        "id": 2,
        "value": "Hardware provisioned by user directly from cloud providers"
      },
      {
        "id": 3,
        "value": "All of these"
      },
      {
        "id": 4,
        "value": "**Snowflake** managed service"
      }
    ],
    "answers": [
      1,
      4
    ],
    "explanation": "Data loading using SNOWPIPE (Continuous Loading) consumed **Snowflake** managed **Warehouse**. Manual data loading (Bulk Loading) using SQL commands like `COPY` INTO utilizes compute resources of **Warehouse** created by the user.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_3",
    "number": 3,
    "question": "Which command will help you the current permissions on a **Schema**?",
    "options": [
      {
        "id": 1,
        "value": "`SHOW` ROLES ON **Schema**.;"
      },
      {
        "id": 2,
        "value": "`SHOW` ALL PREIVILEGE ON **Schema**.;"
      },
      {
        "id": 3,
        "value": "`SHOW` GRANTS ON **Schema**.;"
      },
      {
        "id": 4,
        "value": "`SHOW` GRANTS OF **Schema**.;"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "To **View** the current set of privileges granted on an object, you can execute the `SHOW` GRANTS command. To **View** the current permissions on a **Schema**, execute the following command: `SHOW` GRANTS ON **Schema**.;",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_4",
    "number": 4,
    "question": "What data structure types can be ingested into a VARIANT column in a **Snowflake** **Table**? (Check all that apply)",
    "options": [
      {
        "id": 1,
        "value": "XML"
      },
      {
        "id": 2,
        "value": "PARQUET"
      },
      {
        "id": 3,
        "value": "AVRO"
      },
      {
        "id": 4,
        "value": "ORC"
      },
      {
        "id": 5,
        "value": "JSON"
      }
    ],
    "answers": [
      1,
      2,
      3,
      4,
      5
    ],
    "explanation": "**Snowflake** supports all these types of Semi-Structured data. JSON (JavaScript Object Notation) is a lightweight, plain-text, data-interchange format based on a subset of the JavaScript Programming Language. Avro is an open-source data serialization and RPC framework originally developed for use with Apache Hadoop. It utilizes schemas defined in JSON to produce serialized data in a compact binary format. ORC is used to store Hive data, the ORC (Optimized Row Columnar) file format was designed for efficient compression and improved performance for reading, writing, and processing data over earlier Hive file formats. Parquet is a compressed, efficient columnar data representation designed for projects in the Hadoop ecosystem. The file format supports complex nested data structures and uses Dremel record shredding and assembly algorithms. XML (Extensible Markup Language) is a markup language that defines a set of rules for encoding documents. It was originally based on SGML, another markup language developed for standardizing the structure and elements that comprise a document.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_5",
    "number": 5,
    "question": "What level of Privilege do you need to **View** **Resource Monitor**?",
    "options": [
      {
        "id": 1,
        "value": "OWNERSHIP"
      },
      {
        "id": 2,
        "value": "USAGE"
      },
      {
        "id": 3,
        "value": "OPERATE"
      },
      {
        "id": 4,
        "value": "MONITOR"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "MONITOR Privilege can enable you to **View** a **Resource Monitor**.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_6",
    "number": 6,
    "question": "At what frequency does **Snowflake** rotate the object keys?",
    "options": [
      {
        "id": 1,
        "value": "1 Year"
      },
      {
        "id": 2,
        "value": "30 Days"
      },
      {
        "id": 3,
        "value": "16 Days"
      },
      {
        "id": 4,
        "value": "60 Days"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "Key automatically get rotated every 30 days.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_7",
    "number": 7,
    "question": "**Snowflake** supports many methods of authentication. Which are the supported authentication methods in ALL **Snowflake** Editions?",
    "options": [
      {
        "id": 1,
        "value": "MFA (Multi-factor authentication)"
      },
      {
        "id": 2,
        "value": "Only MFA is supported by all the **Snowflake** editions"
      },
      {
        "id": 3,
        "value": "OAuth"
      },
      {
        "id": 4,
        "value": "SSO"
      },
      {
        "id": 5,
        "value": "Only MFA and SSO are supported by all the **Snowflake** editions"
      }
    ],
    "answers": [
      1,
      3,
      4
    ],
    "explanation": "MFA, Oauth, SSO \n- all these methods are supported by all the **Snowflake** editions.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_8",
    "number": 8,
    "question": "When key: value pairs are queried from a semi-structured record and the data is not cast, what is the data type returned?The system automatically cast the value to the correct data type based on the structure",
    "options": [
      {
        "id": 1,
        "value": "Binary"
      },
      {
        "id": 2,
        "value": "Varchar"
      },
      {
        "id": 3,
        "value": "Variant"
      },
      {
        "id": 4,
        "value": "String"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "Value gets return in VARIANT data type format.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_9",
    "number": 9,
    "question": "What is the best practice after creating a custom role in a **Snowflake** account?",
    "options": [
      {
        "id": 1,
        "value": "Grant ownership of the role to itself so a member of the role can control access to the role"
      },
      {
        "id": 2,
        "value": "Grant ownership to the `SYSADMIN` role or a child role under `SYSADMIN`"
      },
      {
        "id": 3,
        "value": "Grant the role to the `USERADMIN` role so users can be added to the role."
      },
      {
        "id": 4,
        "value": "Grant `PUBLIC` to the role so all **Database** objects owned by `PUBLIC` will be available to the new role"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "Custom role is mostly created for specific access of specific objects. As per best practice to grant ownership to `SYSADMIN` or child role under `SYSADMIN` so that `SYSADMIN` can control the access on the objects.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_10",
    "number": 10,
    "question": "What is default size of unload file?",
    "options": [
      {
        "id": 1,
        "value": "32 MB"
      },
      {
        "id": 2,
        "value": "10 MB"
      },
      {
        "id": 3,
        "value": "100 MB"
      },
      {
        "id": 4,
        "value": "16 MB"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "Default file size for unload is 16 MB.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_11",
    "number": 11,
    "question": "Loading using SNOWPIPE is best useful for:",
    "options": [
      {
        "id": 1,
        "value": "Load small volumes of data incrementally"
      },
      {
        "id": 2,
        "value": "Load large files with size of 500 MB"
      },
      {
        "id": 3,
        "value": "None of these"
      },
      {
        "id": 4,
        "value": "Data Files which takes at least 30 to 60 Minutes."
      }
    ],
    "answers": [
      1
    ],
    "explanation": "SNOWPIPE is designed to load small volumes of data (i.e. micro-batches) and incrementally make them available for analysis. Snowpipe loads data within minutes after files are added to a **Stage** and submitted for ingestion. This ensures users have the latest results, as soon as the raw data is available.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_12",
    "number": 12,
    "question": "**Snowflake** supports transforming data while loading it into a **Table** using the `COPY` command. What all options you have?",
    "options": [
      {
        "id": 1,
        "value": "Column omission"
      },
      {
        "id": 2,
        "value": "Casts"
      },
      {
        "id": 3,
        "value": "Join"
      },
      {
        "id": 4,
        "value": "Column reordering"
      },
      {
        "id": 5,
        "value": "String Truncation"
      }
    ],
    "answers": [
      1,
      2,
      4,
      5
    ],
    "explanation": "**Snowflake** supports transforming data while loading it into a **Table** using the `COPY` command. Options include:\n\n- Column reordering \n- Column omission \n- Casts \n- Truncating text strings that exceed the target column length There is no requirement for your data files to have the same number and ordering of columns as your target **Table**.\n- The `COPY` INTO transformations do not support FLATTEN, JOIN, GROUP BY.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_13",
    "number": 13,
    "question": "Which **Stage** is allocated to a user?",
    "options": [
      {
        "id": 1,
        "value": "Internal named **Stage**"
      },
      {
        "id": 2,
        "value": "External names **Stage**"
      },
      {
        "id": 3,
        "value": "Internal user **Stage**"
      },
      {
        "id": 4,
        "value": "Internal **Table** **Stage**"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "A user **Stage** is allocated to each user for storing files. This **Stage** type is designed to store files that are staged and managed by a single user but can be loaded into multiple tables. User stages cannot be altered or dropped.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_14",
    "number": 14,
    "question": "How can you remove the outer array structure of JSON data?",
    "options": [
      {
        "id": 1,
        "value": "Set STRIP_OUTER_ARRAY = 1"
      },
      {
        "id": 2,
        "value": "Set STRIP_OUTER_ARRAY = TRUE"
      },
      {
        "id": 3,
        "value": "Set STRIP_OUTER_BRACKET = TRUE"
      },
      {
        "id": 4,
        "value": "Set STRIP_INNER_ARRAY = TRUE"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "STRIP_OUTER_ARRAY = TRUE in `COPY` INTO command removes the outer array structure and load the records into separate **Table** rows.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_15",
    "number": 15,
    "question": "**Snowflake** can query the data from External Tables. (TRUE / FALSE)",
    "options": [
      {
        "id": 1,
        "value": "FALSE"
      },
      {
        "id": 2,
        "value": "TRUE"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "External tables enable querying existing data stored in external cloud storage for analysis without first loading it into **Snowflake**. The source of truth for the data remains in the external cloud storage. This solution is especially beneficial to accounts that have a large amount of data stored in external cloud storage and only want to query a portion of the data",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_16",
    "number": 16,
    "question": "External Stages require customers to have an account with a cloud storage service provider. Which of the following are available currently or have been announced by **Snowflake** as under development?",
    "options": [
      {
        "id": 1,
        "value": "GCP Buckets"
      },
      {
        "id": 2,
        "value": "AWS S3"
      },
      {
        "id": 3,
        "value": "DROPBOX"
      },
      {
        "id": 4,
        "value": "MS Azure Blob"
      },
      {
        "id": 5,
        "value": "BOX"
      }
    ],
    "answers": [
      1,
      2,
      4
    ],
    "explanation": "**Snowflake** currently supports AWS S3, MS Azure Blob, GCP Buckets.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_17",
    "number": 17,
    "question": "Which key concepts should be considered when loading data into **Snowflake**?",
    "options": [
      {
        "id": 1,
        "value": "Transformation and error validation"
      },
      {
        "id": 2,
        "value": "**Stage** Object"
      },
      {
        "id": 3,
        "value": "All of these"
      },
      {
        "id": 4,
        "value": "File Format"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "All of these are key components for data loading. **Stage** is from where you are getting the data like AWS S3 external **Stage**. File Format tells **Snowflake** what type of data it is. Is it CSV, JSON, PARQUET, AVRO, ORC, XML etc. Transformation and error validation help getting the right data in right order and right form.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_18",
    "number": 18,
    "question": "**Time Travel** is available for which **Table** types? (Select 3)",
    "options": [
      {
        "id": 1,
        "value": "Transient"
      },
      {
        "id": 2,
        "value": "Permanent"
      },
      {
        "id": 3,
        "value": "External"
      },
      {
        "id": 4,
        "value": "Temporary"
      }
    ],
    "answers": [
      1,
      2,
      4
    ],
    "explanation": "Permanent (0-1 days in case of Standard edition / 0 \n- 90 days in case of other editions), Temporary and Transient Tables are having maximum 1 day of Time-Travel. External **Table** is not managed by **Snowflake** and so **Time Travel** is not available for External **Table**.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_19",
    "number": 19,
    "question": "What is the column datatype used for ingesting semi-structured data?",
    "options": [
      {
        "id": 1,
        "value": "NUMBER"
      },
      {
        "id": 2,
        "value": "VARIANT"
      },
      {
        "id": 3,
        "value": "FLOAT"
      },
      {
        "id": 4,
        "value": "STRING"
      },
      {
        "id": 5,
        "value": "VARCHAR"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "**Snowflake** loads semi-structured data into a single VARIANT column. The VARIANT data type imposes a 16 MB (compressed) size limit on individual rows.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_20",
    "number": 20,
    "question": "What all commands will you use to load data from your Local File System to **Snowflake** **Table**?",
    "options": [
      {
        "id": 1,
        "value": "Only `COPY` INTO command"
      },
      {
        "id": 2,
        "value": "`COPY` INTO followed by `PUT` command"
      },
      {
        "id": 3,
        "value": "`PUT` COMMAND followed by `COPY` INTO"
      },
      {
        "id": 4,
        "value": "Only `PUT` command"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "When loading data from local file system to **Snowflake**, you need to first run `PUT` command to load data from local file system to **Snowflake** internal **Stage** and then run `COPY` INTO command to copy data from **Snowflake** internal **Stage** to **Table**.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_21",
    "number": 21,
    "question": "FORCE option is used to load all files, ignoring load Metadata if it exists. (TRUE / FALSE)",
    "options": [
      {
        "id": 1,
        "value": "FALSE"
      },
      {
        "id": 2,
        "value": "TRUE"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "You can set the FORCE option to load all files, ignoring load Metadata if it exists. Note that this option reloads files, potentially duplicating data in a **Table**.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_22",
    "number": 22,
    "question": "A user‘s default role is",
    "options": [
      {
        "id": 1,
        "value": "The role a user is set to each time the user logs in to the system"
      },
      {
        "id": 2,
        "value": "The user‘s default role is always `PUBLIC`"
      },
      {
        "id": 3,
        "value": "The name used to log in to the WebUI"
      },
      {
        "id": 4,
        "value": "The user‘s default role changes each time the user logs in to the system."
      }
    ],
    "answers": [
      1
    ],
    "explanation": "The role a user is set to each time the user logs in to the system",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_23",
    "number": 23,
    "question": "What are the three **Snowflake** **Stage** types? (Select 3)",
    "options": [
      {
        "id": 1,
        "value": "Secure"
      },
      {
        "id": 2,
        "value": "Permanent"
      },
      {
        "id": 3,
        "value": "Materialized"
      },
      {
        "id": 4,
        "value": "User"
      },
      {
        "id": 5,
        "value": "Named"
      },
      {
        "id": 6,
        "value": "**Table**"
      }
    ],
    "answers": [
      4,
      5,
      6
    ],
    "explanation": "Internal User **Stage**  It is allocated to each user for storing files. Managed by a single user. Cant be altered or dropped. User Stages are referenced using @~. Internal **Table** **Stage**  It is available for each **Table** created in **Snowflake** and available for one of many users but only loaded into a single **Table**. Cant be altered or dropped. **Stage** is referenced as @%. When copying data from files in a **Table** **Stage**, the `FROM` clause can be omitted because **Snowflake** automatically checks for files in the **Table** **Stage**. Internal Named **Stage**  A named internal **Stage** is a **Database** object created in a **Schema**. **Stage** is referenced as @.“",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_24",
    "number": 24,
    "question": "What are the features of Column-level security? (Select 2)",
    "options": [
      {
        "id": 1,
        "value": "Internal Tokenization"
      },
      {
        "id": 2,
        "value": "External Tokenization"
      },
      {
        "id": 3,
        "value": "Dynamic Data Masking"
      },
      {
        "id": 4,
        "value": "Column Masking"
      }
    ],
    "answers": [
      2,
      3
    ],
    "explanation": "Column-level security in **Snowflake** allows the application of a masking policy to a column within a **Table** or **View**. Currently, column-level security comprises two features:\n\n- Dynamic Data Masking \n- External Tokenization Dynamic Data Masking is a column-level security feature that uses masking policies to selectively mask plain-text data in **Table** and **View** columns at query time.\n- External Tokenization enables accounts to tokenize data before loading it into **Snowflake** and detokenize the data at query runtime.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_25",
    "number": 25,
    "question": "The FLATTEN command will parse nested entities into separate rows. One version of the FLATTEN command uses a join and the other uses an object keyword. Select the two words that represent the options used with the FLATTEN command.",
    "options": [
      {
        "id": 1,
        "value": "**Table**"
      },
      {
        "id": 2,
        "value": "CONVERT"
      },
      {
        "id": 3,
        "value": "LATERAL"
      },
      {
        "id": 4,
        "value": "SIDEWAYS"
      }
    ],
    "answers": [
      1,
      3
    ],
    "explanation": "LATERAL and **Table** are the two options used to FLATTEN data.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_26",
    "number": 26,
    "question": "SNOWPIPE AUTO_INGEST method only works with External Stages. (TRUE/FALSE)",
    "options": [
      {
        "id": 1,
        "value": "TRUE"
      },
      {
        "id": 2,
        "value": "FALSE"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "SNOWPIPE only works with External Stages whereas, SNOWPIPE (REST) method works for both External and Internal stages.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_27",
    "number": 27,
    "question": "Which parameter does help in loading files whose Metadata has expired?",
    "options": [
      {
        "id": 1,
        "value": "Set LAST_MODIFIED_DATE to more than 64 days"
      },
      {
        "id": 2,
        "value": "set LOAD_UNCERTAIN_FILES to TRUE"
      },
      {
        "id": 3,
        "value": "set LOAD_EXPIRED_FILES to TRUE"
      },
      {
        "id": 4,
        "value": "set LAST_MODIFIED_DATE to within 64 days"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "To load files whose Metadata has expired, set the LOAD_UNCERTAIN_FILES copy option to true.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_28",
    "number": 28,
    "question": "Which role at least should have MFA configured?",
    "options": [
      {
        "id": 1,
        "value": "`ACCOUNTADMIN`"
      },
      {
        "id": 2,
        "value": "`SECURITYADMIN`"
      },
      {
        "id": 3,
        "value": "`PUBLIC`"
      },
      {
        "id": 4,
        "value": "`SYSADMIN`"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "`ACCOUNTADMIN` must have MFA enabled for account level security. Also, it is recommended to have at least 2 users in `ACCOUNTADMIN` role.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_29",
    "number": 29,
    "question": "**Snowflake** black list some certain IPs by default to ensure that customer is getting highest level of Network security. (TRUE / FALSE)",
    "options": [
      {
        "id": 1,
        "value": "FALSE"
      },
      {
        "id": 2,
        "value": "TRUE"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "**Snowflake** doesn‘t black list any IP. You can set Account-Level Network Policy to allow access or restrict any IP or IPs range. If you can whitelist something, everything will be black listed by default.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_30",
    "number": 30,
    "question": "Which of the following industry compliance standards has **Snowflake** been audited and certified for?",
    "options": [
      {
        "id": 1,
        "value": "SOC1"
      },
      {
        "id": 2,
        "value": "HIPAA"
      },
      {
        "id": 3,
        "value": "SOC Type 2"
      },
      {
        "id": 4,
        "value": "Cloud GBDQ"
      },
      {
        "id": 5,
        "value": "PCI DSS"
      },
      {
        "id": 6,
        "value": "FedRamp"
      }
    ],
    "answers": [
      1,
      2,
      3,
      5,
      6
    ],
    "explanation": "All of these except Cloud GBDQ.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_31",
    "number": 31,
    "question": "How can you create a “Super-User“ or “Super-Role“ in **Snowflake** who can bypass all the authorization checks?",
    "options": [
      {
        "id": 1,
        "value": "There is no concept of SUPER-ROLE or SUPER-USER in **Snowflake**"
      },
      {
        "id": 2,
        "value": "Contact **Snowflake** personnel to create a Super-Role or Super-User for your account"
      },
      {
        "id": 3,
        "value": "`CREATE` ROLE SUPER_ROLE;"
      },
      {
        "id": 4,
        "value": "`ACCOUNTADMIN` role is same as Super-Role"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "There is no concept of a super-user  or super-role  in **Snowflake** that can bypass authorization checks. All access requires appropriate access privileges.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_32",
    "number": 32,
    "question": "A multi-cluster virtual **Warehouse** is Auto-Scale when",
    "options": [
      {
        "id": 1,
        "value": "MIN_CLUSTER_COUNT = 1 MAX_CLUSTER_COUNT = 4"
      },
      {
        "id": 2,
        "value": "MIN_CLUSTER_COUNT = 3 MAX_CLUSTER_COUNT = 3"
      },
      {
        "id": 3,
        "value": "Minimum number of clusters and Maximum number of clusters are same and must be specified with a value of more than 1."
      },
      {
        "id": 4,
        "value": "Minimum and Maximum number of clusters are specified differently."
      }
    ],
    "answers": [
      1,
      4
    ],
    "explanation": "This mode is enabled by specifying different values for maximum and minimum clusters. In this mode, **Snowflake** starts and stops clusters as needed to dynamically manage the load on the **Warehouse**.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_33",
    "number": 33,
    "question": "If you are `ACCOUNTADMIN`, you can query and recover data from **Fail-safe** without the help of **Snowflake** support. (TRUE/FALSE)",
    "options": [
      {
        "id": 1,
        "value": "TRUE"
      },
      {
        "id": 2,
        "value": "FALSE"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "Only **Snowflake** Support can recover the data from **Fail-safe**.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_34",
    "number": 34,
    "question": "**Snowflake** data storage costs are calculated based on: (Select 2)",
    "options": [
      {
        "id": 1,
        "value": "Uncompressed Size"
      },
      {
        "id": 2,
        "value": "Amount Stored on First Day of Month"
      },
      {
        "id": 3,
        "value": "Compressed Size"
      },
      {
        "id": 4,
        "value": "Amount Stored on Last Day of Month"
      },
      {
        "id": 5,
        "value": "Amount Stored - Daily Average"
      }
    ],
    "answers": [
      3,
      5
    ],
    "explanation": "All storage within **Snowflake** is billable in compressed format. **Snowflake** considers the daily average storage (in Terabytes) for billing.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_35",
    "number": 35,
    "question": "How does **Snowflake** provide continuous availability?",
    "options": [
      {
        "id": 1,
        "value": "Customer has to backup the data locally out of cloud"
      },
      {
        "id": 2,
        "value": "Fail Safe Storage"
      },
      {
        "id": 3,
        "value": "**Time Travel** Storage"
      },
      {
        "id": 4,
        "value": "**Snowflake** synchronizes data across availability zones"
      }
    ],
    "answers": [
      2,
      3,
      4
    ],
    "explanation": "**Snowflake** Transparently synchronizes data across availability zones which are geographically separated and on separate power grids. No downtime while updates and patches. Time- Travel and **Fail-safe** features help customers recover data within a defined retention period.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_36",
    "number": 36,
    "question": "How many virtual warehouses can be created in a **Snowflake** Account?",
    "options": [
      {
        "id": 1,
        "value": "8"
      },
      {
        "id": 2,
        "value": "As many as needed"
      },
      {
        "id": 3,
        "value": "16"
      },
      {
        "id": 4,
        "value": "4"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "There is no limit. A customer can create unlimited number of warehouses.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_37",
    "number": 37,
    "question": "How much is the Time-Travel retention period of Temporary **Table**?",
    "options": [
      {
        "id": 1,
        "value": "90 days"
      },
      {
        "id": 2,
        "value": "0 days"
      },
      {
        "id": 3,
        "value": "7 days"
      },
      {
        "id": 4,
        "value": "1 day"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "Temporary **Table** has maximum of 1 day Time-Travel retention period.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_38",
    "number": 38,
    "question": "Scaling a **Warehouse** OUT will increase the number of clusters (e.g., Min to Max)",
    "options": [
      {
        "id": 1,
        "value": "FALSE"
      },
      {
        "id": 2,
        "value": "TRUE"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "SCALING OUT means adding additional clusters. It is called Multi-Clustering.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_39",
    "number": 39,
    "question": "Monica mistakenly dropped a **Table** T1 last week. The **Database** has Time-Travel retention period set to 90 days. How can Monica recover the **Table** which she dropped last week.",
    "options": [
      {
        "id": 1,
        "value": "Monica should contact Salesforce support to get it done"
      },
      {
        "id": 2,
        "value": "Monica can execute UNDROP **Table** T1 command after setting up the right context for **Database** and **Schema**"
      },
      {
        "id": 3,
        "value": "Monica cant recover it from TIME-TRAVEL as the **Table** T1 moved to **Fail-safe**"
      },
      {
        "id": 4,
        "value": "Monica can use the UI > ACCOUNT menu to recover the **Table** T1"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "UNDROP **Table** command helps recover the **Table** which is still in TIME-TRAVEL. Since, Monica dropped last week so it is just a week old drop which will be available in the **Time Travel** with retention period of 90 days.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_40",
    "number": 40,
    "question": "John wants to create a multi-cluster **Warehouse** and wants to make sure that whenever new queries are queued, additional clusters should start immediately. How should he configure the **Warehouse**?",
    "options": [
      {
        "id": 1,
        "value": "Configure as SCALE-MAX so that the **Warehouse** is always using maximum number of specified clusters"
      },
      {
        "id": 2,
        "value": "Set the SCALING POLICY as ECONOMY"
      },
      {
        "id": 3,
        "value": "Set the SCALING POLICY as STANDARD"
      },
      {
        "id": 4,
        "value": "**Snowflake** takes care of this automatically so, John does not have to worry about it"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "If a multi-cluster **Warehouse** is configured with SCALING policy as STANDARD it immediately when either a query is queued or the system detects that theres one more query than the currently-running clusters can execute",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_41",
    "number": 41,
    "question": "Which vendors do support **Snowflake** natively for federated authentication and SSO?",
    "options": [
      {
        "id": 1,
        "value": "Okta"
      },
      {
        "id": 2,
        "value": "Microsoft ADFS"
      },
      {
        "id": 3,
        "value": "Google G Suite"
      },
      {
        "id": 4,
        "value": "Onelogin"
      },
      {
        "id": 5,
        "value": "Microsoft Azure Active Directory"
      }
    ],
    "answers": [
      1,
      2
    ],
    "explanation": "Okta and Microsoft ADFS provide native **Snowflake** support for federated authentication and SSO. Other are not native but **Snowflake** supports using SAML 2.0-compliant.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_42",
    "number": 42,
    "question": "Which types of stages are automatically available in **Snowflake** and do not need to be created or configured?",
    "options": [
      {
        "id": 1,
        "value": "User"
      },
      {
        "id": 2,
        "value": "Named Internal"
      },
      {
        "id": 3,
        "value": "**Table**"
      },
      {
        "id": 4,
        "value": "Named External"
      }
    ],
    "answers": [
      1,
      3
    ],
    "explanation": "Internal User **Stage**  It is allocated to each user for storing files. Managed by a single user. Cant be altered or dropped. User Stages are referenced using @~. Internal **Table** **Stage**  It is available for each **Table** created in **Snowflake** and available for one of many users but only loaded into a single **Table**. Cant be altered or dropped. **Stage** is referenced as @%. When copying data from files in a **Table** **Stage**, the `FROM` clause can be omitted because **Snowflake** automatically checks for files in the **Table** **Stage**.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_43",
    "number": 43,
    "question": "Which are the correct statements about STREAMS?",
    "options": [
      {
        "id": 1,
        "value": "STREAMS is used to scheduled SQL execution"
      },
      {
        "id": 2,
        "value": "it can not be used with TASKS"
      },
      {
        "id": 3,
        "value": "It is used for Change Data Capture (CDC)"
      },
      {
        "id": 4,
        "value": "Streams is used to identify and act on changed **Table** records"
      }
    ],
    "answers": [
      3,
      4
    ],
    "explanation": "Tasks is used to scheduled SQL execution. A stream records data manipulation language (DML) changes made to a **Table**, including information about inserts, updates, and deletes. It can be combine with TASKS to design some valuable solution.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_44",
    "number": 44,
    "question": "What actions can be performed when an error is encountered while loading data from a file?",
    "options": [
      {
        "id": 1,
        "value": "Continue loading the file."
      },
      {
        "id": 2,
        "value": "Abort the load operation"
      },
      {
        "id": 3,
        "value": "Skip file"
      },
      {
        "id": 4,
        "value": "skip file when the number of errors in the file is equal to 10"
      }
    ],
    "answers": [
      1,
      2,
      3,
      4
    ],
    "explanation": "All these actions can be taken. You can specify one or more of the following copy options :\n\n- CONTINUE SKIP_FILE SKIP_FILE_(e.g.\n- SKIP_FILE_10) SKIP_FILE_% (e.g.\n- SKIP_FILE_10%) ABORT_STATEMENT",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_45",
    "number": 45,
    "question": "**Snowflake** provides standard and powerful features that ensure the highest levels of security for your account and users if used properly. Which are the true statements about **Snowflake** Security?",
    "options": [
      {
        "id": 1,
        "value": "**Snowflake** supports user-based access control"
      },
      {
        "id": 2,
        "value": "Tri-secret requires that customers manage their own keys"
      },
      {
        "id": 3,
        "value": "Federated authentication in **Snowflake** is compliant with SAML 2.0"
      }
    ],
    "answers": [
      2,
      3
    ],
    "explanation": "Along with Tri-Secret and Federated authentication, **Snowflake** supports ROLE-based access control.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_46",
    "number": 46,
    "question": "If a server in **Warehouse** cluster runs for 64 seconds, shuts down, and then restarts and runs for less than 60 seconds, for how many seconds it will be billed?",
    "options": [
      {
        "id": 1,
        "value": "64 Seconds"
      },
      {
        "id": 2,
        "value": "120 Seconds"
      },
      {
        "id": 3,
        "value": "4 Seconds"
      },
      {
        "id": 4,
        "value": "124 Seconds"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "The minimum billing charge for provisioning a server is 1 minute (i.e. 60 seconds). So, the total billing will be for 60 + 4+ 60 = 124 seconds.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_47",
    "number": 47,
    "question": "Which objects are securable objects in **Snowflake**?",
    "options": [
      {
        "id": 1,
        "value": "**Database**"
      },
      {
        "id": 2,
        "value": "File Format"
      },
      {
        "id": 3,
        "value": "**Table**"
      },
      {
        "id": 4,
        "value": "**Warehouse**"
      }
    ],
    "answers": [
      1,
      2,
      3,
      4
    ],
    "explanation": "All of these are securable objects in **Snowflake**. Securable Object is an entity to which access can be granted. Unless allowed by a grant, access will be denied.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_48",
    "number": 48,
    "question": "How can you ignore Metadata and load the already loaded staged file into **Table**?",
    "options": [
      {
        "id": 1,
        "value": "Using ACCEPT = TRUE parameter with `COPY` INTO command"
      },
      {
        "id": 2,
        "value": "Using LOAD = TRUE parameter with `COPY` INTO command"
      },
      {
        "id": 3,
        "value": "Using FORCE = TRUE parameter with `COPY` INTO command"
      },
      {
        "id": 4,
        "value": "Using LOAD = FORCE parameter with `COPY` INTO command"
      },
      {
        "id": 5,
        "value": "Using `INSERT` = TRUE parameter with `COPY` INTO command"
      },
      {
        "id": 6,
        "value": "Using FORCE = YES parameter with `COPY` INTO command"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "FORCE = TRUE parameter specifies to load all files, regardless of whether theyve been loaded previously and have not changed since they were loaded. Note that this option reloads files, potentially duplicating data in a **Table**.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_49",
    "number": 49,
    "question": "When unloading data into multiple files, use the MAX_FILE_SIZE copy option to specify the maximum size of each file created. (TRUE / FALSE)",
    "options": [
      {
        "id": 1,
        "value": "TRUE"
      },
      {
        "id": 2,
        "value": "FALSE"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "True, When unloading data into multiple files, use the MAX_FILE_SIZE copy option to specify the maximum size of each file created. If you want to unload in just one file you can set SINGLE = TRUE.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_50",
    "number": 50,
    "question": "Which type of the object key is only used for decryption?",
    "options": [
      {
        "id": 1,
        "value": "Active key"
      },
      {
        "id": 2,
        "value": "Retired Key"
      },
      {
        "id": 3,
        "value": "None of these"
      },
      {
        "id": 4,
        "value": "Destroyed key"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "Active Key is used for both encryption and decryption. Retired Key is used for decryption only. Destroyed Key is no longer used.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_51",
    "number": 51,
    "question": "Named stages come in two varieties, what are they?",
    "options": [
      {
        "id": 1,
        "value": "Internal"
      },
      {
        "id": 2,
        "value": "Permanent"
      },
      {
        "id": 3,
        "value": "Secure"
      },
      {
        "id": 4,
        "value": "Materialized"
      },
      {
        "id": 5,
        "value": "External"
      }
    ],
    "answers": [
      1,
      5
    ],
    "explanation": "External **Stage** and Internal Named stages are the two variant. Other stages are not names like User **Stage** and **Table** **Stage**.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_52",
    "number": 52,
    "question": "Which security feature is supported in **Snowflake**?",
    "options": [
      {
        "id": 1,
        "value": "Role-Based Access Control"
      },
      {
        "id": 2,
        "value": "Multi-Factor Authentication"
      },
      {
        "id": 3,
        "value": "All of these"
      },
      {
        "id": 4,
        "value": "Tri-Secret Secure Encryption"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "**Snowflake** is highly secured platform and provides multi-level security like MFA, IP whitelisting, SSO, Tri Secret Secure, Role-Based etc.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_53",
    "number": 53,
    "question": "Semi Structured data can be accessed: (Select 3)",
    "options": [
      {
        "id": 1,
        "value": "In a permanent **Table** using the variant data type"
      },
      {
        "id": 2,
        "value": "In files in an external **Stage**"
      },
      {
        "id": 3,
        "value": "In files on an AWS EC2 server"
      },
      {
        "id": 4,
        "value": "In files in a internal **Stage**"
      },
      {
        "id": 5,
        "value": "In files in an on-prem file server"
      }
    ],
    "answers": [
      1,
      2,
      4
    ],
    "explanation": "**Snowflake** CAN‘T access from AWS EC2 server and on-prem file server. **Snowflake** can query External **Table** ( files of External **Stage**), Internal **Stage** and Permanent **Table**.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_54",
    "number": 54,
    "question": "**Snowflake** provides native support for semi-structured data. Select true option about **Snowflake** native support for Semi-Structure data.",
    "options": [
      {
        "id": 1,
        "value": "Automatic conversion of data to optimize internal storage format"
      },
      {
        "id": 2,
        "value": "All of these"
      },
      {
        "id": 3,
        "value": "Flexible-**Schema** data types for loading semi-structured data without transformation"
      },
      {
        "id": 4,
        "value": "**Database** Optimization for fast and efficient SQL querying."
      }
    ],
    "answers": [
      2
    ],
    "explanation": "**Snowflake** provides native support for semi-structured data, including:\n\n- Flexible-**Schema** data types for loading semi-structured data without transformation.\n- Automatic conversion of data to optimized internal storage format. **Database** optimization for fast and efficient SQL querying.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_55",
    "number": 55,
    "question": "How can you create a user in **Snowflake** without password?",
    "options": [
      {
        "id": 1,
        "value": "Using Salesforce Web interface"
      },
      {
        "id": 2,
        "value": "User creation without password is not possible"
      },
      {
        "id": 3,
        "value": "Using SQL Command - `CREATE` USER"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "Note that you cannot use the **Snowflake** web interface to create users with no passwords or remove passwords from existing users. You must use `CREATE` USER or `ALTER` USER. If you create a user with no password (or alter an existing user and remove their password), this effectively disables **Snowflake** authentication for the user. Without a password in **Snowflake**, a user cannot log in using **Snowflake** authentication and must use federated authentication instead.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_56",
    "number": 56,
    "question": "Which role is not a **Snowflake** System-defined role assigned to a new account?",
    "options": [
      {
        "id": 1,
        "value": "`ACCOUNTADMIN`"
      },
      {
        "id": 2,
        "value": "`PUBLIC`"
      },
      {
        "id": 3,
        "value": "CUSTOM"
      },
      {
        "id": 4,
        "value": "`SYSADMIN`"
      },
      {
        "id": 5,
        "value": "`SECURITYADMIN`"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "CUSTOM ROLE is not a role which is out of the box assigned to an account. It is created by customer based on the need.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_57",
    "number": 57,
    "question": "Two of the key attributes that distinguish semi-structure data from structured data are :",
    "options": [
      {
        "id": 1,
        "value": "Lack of a Fixed **Schema**"
      },
      {
        "id": 2,
        "value": "Nested data structure"
      },
      {
        "id": 3,
        "value": "Fixed **Schema**"
      }
    ],
    "answers": [
      1,
      2
    ],
    "explanation": "Two of the key attributes that distinguish semi-structured data from structured data are nested data structures and the lack of a fixed **Schema**.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_58",
    "number": 58,
    "question": "Which role is inherited to every other role in the account?",
    "options": [
      {
        "id": 1,
        "value": "DEFAULT ROLE"
      },
      {
        "id": 2,
        "value": "STANDARD ROLE"
      },
      {
        "id": 3,
        "value": "CONTROL ROLE"
      },
      {
        "id": 4,
        "value": "`PUBLIC` ROLE"
      },
      {
        "id": 5,
        "value": "PREFERED ROLE"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "`PUBLIC` role is Pseudo-role, that is automatically granted to every user and every role in your account. The `PUBLIC` role can own securable objects, just like any other role; however, the objects owned by the role are, by definition, available to every other user and role in your account. This role is typically used in cases where explicit access control is not needed and all users are viewed as equal with regard to their access rights.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_59",
    "number": 59,
    "question": "You set up a **Snowflake** account, choosing AWS as your cloud platform provider. What stages can you use to load data files? (Check all that apply)",
    "options": [
      {
        "id": 1,
        "value": "NAMED INTERNAL"
      },
      {
        "id": 2,
        "value": "NAMED EXTERNAL - using GCS/GCP Buckets"
      },
      {
        "id": 3,
        "value": "**Table**"
      },
      {
        "id": 4,
        "value": "USER"
      },
      {
        "id": 5,
        "value": "NAMED EXTERNAL - using Azure BLOB storage"
      },
      {
        "id": 6,
        "value": "NAMED EXTERNAL - using S3 Buckets"
      }
    ],
    "answers": [
      1,
      2,
      3,
      4,
      5,
      6
    ],
    "explanation": "Does not matter which cloud provider you have setup your account, **Snowflake** supports all the stages. For example, you can have your account setup on AWS but you can use Azure blob as your external **Stage**.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_60",
    "number": 60,
    "question": "What is the default compression algorithm **Snowflake** apply while unloading data?",
    "options": [
      {
        "id": 1,
        "value": "NONE"
      },
      {
        "id": 2,
        "value": "GZIP"
      },
      {
        "id": 3,
        "value": "GZIP3"
      },
      {
        "id": 4,
        "value": "ZSTD"
      },
      {
        "id": 5,
        "value": "BZ2"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "When unloading data, files are automatically compressed using the default, which is gzip.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 8_1",
    "number": 1,
    "question": "How much is the Time-Travel retention period of Permanent **Table** (Standard Edition)?",
    "options": [
      {
        "id": 1,
        "value": "1 day"
      },
      {
        "id": 2,
        "value": "7 days"
      },
      {
        "id": 3,
        "value": "90 days"
      },
      {
        "id": 4,
        "value": "0 days"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "Permanent **Table** has maximum of 1 day for Standard Edition and maximum of 90 days Time-Travel retention period for all other **Snowflake** editions.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_2",
    "number": 2,
    "question": "You have a LARGE sized **Warehouse** ‘MY_WAREHOUSE‘. You want to change the size to SMALL. Which SQL statement will help you to change the size of **Warehouse**?",
    "options": [
      {
        "id": 1,
        "value": "`ALTER` **Warehouse** MY_WAREHOUSE SET `WAREHOUSE_SIZE` = “SMALL“;"
      },
      {
        "id": 2,
        "value": "`ALTER` **Warehouse** MY_WAREHOUSE SET SIZE = “SMALL“;"
      },
      {
        "id": 3,
        "value": "`UPDATE` MY_WAREHOUSE SET SIZE = “SMALL“;"
      },
      {
        "id": 4,
        "value": "`ALTER` MY_WAREHOUSE SET SIZE = “SMALL“;"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "`ALTER` **Warehouse** command can help change the **Warehouse** size",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_3",
    "number": 3,
    "question": "Which type of Tables has 7 days **Fail-safe** period.",
    "options": [
      {
        "id": 1,
        "value": "Permanent"
      },
      {
        "id": 2,
        "value": "Temporary"
      },
      {
        "id": 3,
        "value": "External"
      },
      {
        "id": 4,
        "value": "Transient"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "Only Permanent **Table** retains 7 days of **Fail-safe**.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_4",
    "number": 4,
    "question": "Please choose the correct statements about Micro-Partitions (Select 2)",
    "options": [
      {
        "id": 1,
        "value": "**Snowflake** automatically determines the most efficient compression algorithm for the columns in each **Micro-partition**."
      },
      {
        "id": 2,
        "value": "**Snowflake** micro-partitions are derived automatically"
      },
      {
        "id": 3,
        "value": "Micro-partitions are small in size (50 to 500 MB, after compression)"
      },
      {
        "id": 4,
        "value": "Micro-partitions can‘t overlap in their range of values"
      }
    ],
    "answers": [
      1,
      2
    ],
    "explanation": "**Snowflake** takes care of all the compression algorithm. Micro-partitions can overlap in their range of values, which, combined with their uniformly small size, helps prevent skew. The micro-partitions are small in size (50 to 500 MB, BEFORE compression).",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_5",
    "number": 5,
    "question": "Which **Snowflake** Editions have Elastic Data Warehousing. Check all the **Snowflake** editions that have Elastic Data Warehousing enabled.",
    "options": [
      {
        "id": 1,
        "value": "Premium"
      },
      {
        "id": 2,
        "value": "Standard"
      },
      {
        "id": 3,
        "value": "Enterprise"
      },
      {
        "id": 4,
        "value": "Virtual Private **Snowflake**"
      },
      {
        "id": 5,
        "value": "Business Critical Edition"
      }
    ],
    "answers": [
      3,
      4,
      5
    ],
    "explanation": "Standard Edition only has Single Compute Cluster. Premium is not a **Snowflake** edition. All other editions have multi clusters capability.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_6",
    "number": 6,
    "question": "Monica is an `ACCOUNTADMIN` and wants to change the **Time Travel** retention period of **Table** T1 of **Database** DB1 to 15 days. Which options will help her to set the new **Time Travel** retention period?",
    "options": [
      {
        "id": 1,
        "value": "Execute SQL Command - `ALTER` **Table** T1 SET DATA_RETENTION_TIME_IN_DAYS = 15;"
      },
      {
        "id": 2,
        "value": "Monica can change the retention period through ACCOUNT tab on UI"
      },
      {
        "id": 3,
        "value": "Monica should contact Salesforce support to get it done"
      },
      {
        "id": 4,
        "value": "Execute SQL Command - `ALTER` **Table** T1 SET DATA_RETENTION_TIME_IN_DAYS = 75;"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "Set the correct context for **Database** and **Schema** and run the `ALTER` **Table** command to set DATA_RETENTION_TIME_IN_DAYS to 15.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_7",
    "number": 7,
    "question": "Some compute occurs in the cloud services layer. When customer is charged for compute which occurred in the cloud services layer?",
    "options": [
      {
        "id": 1,
        "value": "There is no charge to customer for cloud services layer"
      },
      {
        "id": 2,
        "value": "Customers are charged for cloud computing that exceeds 50% of total compute costs for the account"
      },
      {
        "id": 3,
        "value": "Customers are charged for cloud computing that exceeds 10% of total storage costs for the account"
      },
      {
        "id": 4,
        "value": "Customers are charged for cloud computing that exceeds 10% of total compute costs for the account"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "Usage for cloud-services is charged only if the daily consumption of cloud services exceeds 10% of the daily usage of the compute resources. The charge is calculated daily (in the UTC time zone). This ensures that the 10% adjustment is accurately applied each day, at the credit price for that day.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_8",
    "number": 8,
    "question": "How much data each of the **Micro-partition** contain in uncompressed form? Select the",
    "options": [
      {
        "id": 1,
        "value": "1 GB"
      },
      {
        "id": 2,
        "value": "16 MB"
      },
      {
        "id": 3,
        "value": "Between 50 MB to 500 MB"
      },
      {
        "id": 4,
        "value": "Between 10 MB to 40 MB"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "Micro-partitions are small in size (50 to 500 MB, before compression).",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_9",
    "number": 9,
    "question": "**Snowflake** compute costs depend on which of the following? (Select 2)",
    "options": [
      {
        "id": 1,
        "value": "The number of rows returned in queries."
      },
      {
        "id": 2,
        "value": "The sizes of running warehouses."
      },
      {
        "id": 3,
        "value": "The amount of time warehouses have run."
      },
      {
        "id": 4,
        "value": "The total number of warehouses in the account."
      }
    ],
    "answers": [
      2,
      3
    ],
    "explanation": "Compute cost depends on the **Warehouse** Size and the time it was in started mode or running",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_10",
    "number": 10,
    "question": "Micro-partitions are IMMUTABLE. What are features make micro-partitions IMMUTABLE?",
    "options": [
      {
        "id": 1,
        "value": "**Snowflake** purges the micro-partitions as soon as you delete any record from **Table**."
      },
      {
        "id": 2,
        "value": "**Snowflake** creates new micro-partitions every time there is data change."
      },
      {
        "id": 3,
        "value": "Micro-Partitions are not editable."
      },
      {
        "id": 4,
        "value": "When new data gets ingested **Snowflake** tries to insert data in existing **Micro-partition** to save the storage."
      }
    ],
    "answers": [
      2,
      3
    ],
    "explanation": "**Snowflake** creates new partitions in case of any data change or new ingested data and also keeps the old version of **Micro-partition**. The old versions of micro-partitions are used for Time-Travel and **Fail-safe**. Services layer stores Metadata about every **Micro-partition** like \n- MIN/MAX ranges of values in each column, Number of distinct values, Row count etc.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_11",
    "number": 11,
    "question": "Monica has a EMPLOYEE_DATA **Table**. Monica wants to create another **Table** EMPLOYEE_DATA_OTHER which should be same as EMPLOYEE_DATA **Table** with same data. What is the best option for Monica?",
    "options": [
      {
        "id": 1,
        "value": "Clone the **Table** with same data with SQL command as follows - `CREATE` **Table** EMPLOYEE_DATA_OTHER CLONE EMPLOYEE_DATA;"
      },
      {
        "id": 2,
        "value": "Create the **Table** with same data with SQL command as follows - `CREATE` **Table** EMPLOYEE_DATA_OTHER AS `SELECT` * `FROM` EMPLOYEE_DATA;"
      },
      {
        "id": 3,
        "value": "`CREATE` SHARE EMPLOYEE_DATA;"
      },
      {
        "id": 4,
        "value": "Create the **Table** with LIKE SQL command as follows - `CREATE` **Table** EMPLOYEE_DATA_OTHER LIKE EMPLOYEE_DATA;"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "The best option is the Clone the **Table** as EMPLOYEE_DATA and EMPLOYEE_DATA_OTHER has same structure and same data. It will help save the storage cost. LIKE command only creates empty **Table**.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_12",
    "number": 12,
    "question": "**Snowflake** Storage layer is a Cloud Storage layer. It depends on which cloud provider you are using. Select the current available cloud providers.",
    "options": [
      {
        "id": 1,
        "value": "IBM Cloud"
      },
      {
        "id": 2,
        "value": "AWS Cloud"
      },
      {
        "id": 3,
        "value": "Azure Cloud"
      },
      {
        "id": 4,
        "value": "Oracle Cloud"
      },
      {
        "id": 5,
        "value": "GCP"
      }
    ],
    "answers": [
      2,
      3,
      5
    ],
    "explanation": "As of now, AWS, AZURE and GCP are three cloud providers which provide Cloud Storage layer for **Snowflake**.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_13",
    "number": 13,
    "question": "Decreasing the size of a running **Warehouse** removes servers from the **Warehouse**. When the servers are removed, the cache associated with the servers is dropped.",
    "options": [
      {
        "id": 1,
        "value": "TRUE"
      },
      {
        "id": 2,
        "value": "FALSE"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "Decreasing the size of a running **Warehouse** removes servers from the **Warehouse**. When the servers are removed, the cache associated with the servers is dropped, which can impact performance in the same way that suspending the **Warehouse** can impact performance after it is resumed. Keep this in mind when choosing whether to decrease the size of a running **Warehouse** or keep it at the current size. In other words, there is a trade-off with regards to saving credits versus maintaining the server cache.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_14",
    "number": 14,
    "question": "Only a **Snowflake** employee can recover data from **Fail-safe** storage.",
    "options": [
      {
        "id": 1,
        "value": "FALSE"
      },
      {
        "id": 2,
        "value": "TRUE"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "**Fail-safe** data can‘t be queried by customer. Customer needs to contact **Snowflake** support to recover data from **Fail-safe** storage.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_15",
    "number": 15,
    "question": "Temporary and Transient Tables has 1 day of **Fail-safe** available. (True/False)",
    "options": [
      {
        "id": 1,
        "value": "FALSE"
      },
      {
        "id": 2,
        "value": "TRUE"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "**Fail-safe** is not supported for Temporary and Transient Tables. It is only available for Permanent Tables.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_16",
    "number": 16,
    "question": "Which SQL statement will suspend a running **Warehouse** MY_WAREHOUSE?",
    "options": [
      {
        "id": 1,
        "value": "`ALTER` **Warehouse** MY_WAREHOUSE SET `AUTO_SUSPEND` = ‘TRUE‘;"
      },
      {
        "id": 2,
        "value": "SUSPEND **Warehouse** MY_WAREHOUSE;"
      },
      {
        "id": 3,
        "value": "`DROP` **Warehouse** MY_WAREHOUSE;"
      },
      {
        "id": 4,
        "value": "`ALTER` **Warehouse** MY_WAREHOUSE SUSPEND;"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "`ALTER` SQL statement with SUSPEND will suspend a **Warehouse**.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_17",
    "number": 17,
    "question": "What types of Infrastructure Security are available to ensure customer data is secured?",
    "options": [
      {
        "id": 1,
        "value": "Cloud provider‘s redundancy"
      },
      {
        "id": 2,
        "value": "Regional data centers"
      },
      {
        "id": 3,
        "value": "Customer Admin takes the backup of data into local data disk"
      },
      {
        "id": 4,
        "value": "Cloud Provider‘s physical security"
      }
    ],
    "answers": [
      1,
      2,
      4
    ],
    "explanation": "**Snowflake** leverages all the Cloud Provider‘s securities like physical and digital, data replication across multiple regions etc.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_18",
    "number": 18,
    "question": "A multi-cluster virtual **Warehouse** is Maximized when",
    "options": [
      {
        "id": 1,
        "value": "Minimum and Maximum number of clusters are specified differently."
      },
      {
        "id": 2,
        "value": "MIN_CLUSTER_COUNT = 1 MAX_CLUSTER_COUNT = 1"
      },
      {
        "id": 3,
        "value": "MIN_CLUSTER_COUNT = 3 MAX_CLUSTER_COUNT = 3"
      },
      {
        "id": 4,
        "value": "Minimum number of clusters and Maximum number of clusters are same and must be specified with a value of more than 1."
      }
    ],
    "answers": [
      3,
      4
    ],
    "explanation": "Maximized mode is enabled by specifying the same value for both maximum and minimum clusters (note that the specified value must be larger than 1). In this mode, when the **Warehouse** is started, **Snowflake** starts all the clusters so that maximum resources are available while the **Warehouse** is running.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_19",
    "number": 19,
    "question": "What is the best use of SCALING OUT?",
    "options": [
      {
        "id": 1,
        "value": "Better Performance"
      },
      {
        "id": 2,
        "value": "Better Concurrency"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "SCALING OUT is meant for handling high concurrent queries.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_20",
    "number": 20,
    "question": "What are the correct SQL extensions used in querying data from **Time Travel**? Select 2.",
    "options": [
      {
        "id": 1,
        "value": "INITIAL"
      },
      {
        "id": 2,
        "value": "AT"
      },
      {
        "id": 3,
        "value": "AFTER"
      },
      {
        "id": 4,
        "value": "BEFORE"
      }
    ],
    "answers": [
      2,
      4
    ],
    "explanation": "AT | BEFORE clause are used to query based on timestamp, offset or query id.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_21",
    "number": 21,
    "question": "A 3X-LARGE cluster contains 64 Servers. if a 3X-Large multi-cluster **Warehouse** runs 1 cluster for one full hour and then runs 3 clusters for the next full hour. How many credits will be billed?",
    "options": [
      {
        "id": 1,
        "value": "128"
      },
      {
        "id": 2,
        "value": "512"
      },
      {
        "id": 3,
        "value": "256"
      },
      {
        "id": 4,
        "value": "212"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "3X-LARGE contains 64 Server per cluster and uses 64 credits per cluster per hour. So, total credit will be used = (64 x 1) + (64 x 3) = 256.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_22",
    "number": 22,
    "question": "**Snowflake** data storage costs include which types of data?",
    "options": [
      {
        "id": 1,
        "value": "Persistent data stored in permanent tables"
      },
      {
        "id": 2,
        "value": "Data retained to enable data recovery (**Time Travel** and **Fail-safe**)"
      },
      {
        "id": 3,
        "value": "Metadata"
      },
      {
        "id": 4,
        "value": "Cached Results"
      },
      {
        "id": 5,
        "value": "Semi-Structured data - additional fees"
      }
    ],
    "answers": [
      1,
      2
    ],
    "explanation": "All storage within **Snowflake** is billable in compressed format including the persistent data stored in permanent tables, time-travel and **Fail-safe**. There is no additional fee for handling Semi-Structured data.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_23",
    "number": 23,
    "question": "John wants to create a **Warehouse** which can auto suspend in 10 minutes. How should he configure the **Warehouse**?",
    "options": [
      {
        "id": 1,
        "value": "`AUTO_SUSPEND` = 10"
      },
      {
        "id": 2,
        "value": "`AUTO_RESUME` = TRUE"
      },
      {
        "id": 3,
        "value": "`AUTO_SUSPEND` = 600"
      },
      {
        "id": 4,
        "value": "`AUTO_SUSPEND` = TRUE"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "`AUTO_SUSPEND` takes care of suspension of **Warehouse** not in use for specified time. The time specified is in Seconds.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_24",
    "number": 24,
    "question": "Resizing a **Warehouse** can be completed at any time, even when running",
    "options": [
      {
        "id": 1,
        "value": "TRUE"
      },
      {
        "id": 2,
        "value": "FALSE"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "**Warehouse** can be resized any time using UI or SQL `ALTER` command.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_25",
    "number": 25,
    "question": "Which SQL statements can work on a cloned **Table**?",
    "options": [
      {
        "id": 1,
        "value": "All of these"
      },
      {
        "id": 2,
        "value": "`DROP` **Table** command"
      },
      {
        "id": 3,
        "value": "`SELECT` command"
      },
      {
        "id": 4,
        "value": "`SHOW` command"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "All of these commands work with Cloned **Table** as normal **Table**.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_26",
    "number": 26,
    "question": "Micro-partitioning is automatically performed on all the **Snowflake** tables.",
    "options": [
      {
        "id": 1,
        "value": "TRUE"
      },
      {
        "id": 2,
        "value": "FALSE"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "Micro-partitioning is automatically performed on all **Snowflake** tables. Tables are transparently partitioned using the ordering of the data as it is inserted/loaded.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_27",
    "number": 27,
    "question": "How to change the current **Warehouse** of a session?",
    "options": [
      {
        "id": 1,
        "value": "Execute SET **Warehouse** command"
      },
      {
        "id": 2,
        "value": "Execute `SELECT` **Warehouse** command"
      },
      {
        "id": 3,
        "value": "Execute `USE` **Warehouse** command"
      },
      {
        "id": 4,
        "value": "None of these"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "`USE` **Warehouse**; command sets the **Warehouse** for the current session, whereis the name of the **Warehouse** which needs to be set for the session.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_28",
    "number": 28,
    "question": "Which **Snowflake** Object is a named wrapper around a cluster of servers with CPU, memory, and disk",
    "options": [
      {
        "id": 1,
        "value": "Virtual **Warehouse**"
      },
      {
        "id": 2,
        "value": "Storage"
      },
      {
        "id": 3,
        "value": "**Schema**"
      },
      {
        "id": 4,
        "value": "**Database**"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "Virtual **Warehouse** is the **Snowflake** object which is a named wrapper around a cluster of servers with CPU, memory and disk. It‘s **Snowflake** who managed all the complex setup behind the scene. User does not need to configure EC2 instance, physical servers or anything like that.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_29",
    "number": 29,
    "question": "When configuring a **Warehouse** using a **Snowflake** edition that has Elastic Data Warehousing enabled, what facets or components will you need to configure that are not needed in accounts where Elastic Data Warehousing is not enabled. (Choose two)",
    "options": [
      {
        "id": 1,
        "value": "Minimum and Maximum Servers"
      },
      {
        "id": 2,
        "value": "Scaling Policy"
      },
      {
        "id": 3,
        "value": "Auto-Suspend"
      },
      {
        "id": 4,
        "value": "Minimum and Maximum Clusters"
      }
    ],
    "answers": [
      2,
      4
    ],
    "explanation": "Correct",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_30",
    "number": 30,
    "question": "Which are the types of Virtual Warehouses in **Snowflake**?",
    "options": [
      {
        "id": 1,
        "value": "Premier"
      },
      {
        "id": 2,
        "value": "Standard"
      },
      {
        "id": 3,
        "value": "Multi-Cluster"
      },
      {
        "id": 4,
        "value": "Enterprise"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "Correct",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_31",
    "number": 31,
    "question": "John created a **Database** and set the DATA_RETENTION_TIME_IN_DAYS as 30 days, but he did not set the DATA_RETENTION_TIME_IN_DAYS in one of the **Table** ‘T1‘. After 5 days, he accidently dropped **Table** ‘T1‘. Will he able to recover the **Table** T1?",
    "options": [
      {
        "id": 1,
        "value": "John should call **Snowflake** Support to recover the **Table** from **Fail-safe**."
      },
      {
        "id": 2,
        "value": "No, John cant recover the dropped **Table** T1 because he didn‘t set DATA_RETENTION_TIME_IN_DAYS for **Table** T1"
      },
      {
        "id": 3,
        "value": "John can recover the **Table** T1 after 30 days"
      },
      {
        "id": 4,
        "value": "Yes, as the retention period is specified at **Database** level"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "If a retention period is specified for a **Database** or **Schema**, the period is inherited by default for all objects created in the **Database**/**Schema**.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_32",
    "number": 32,
    "question": "What is the maximum Time-Travel retention period of Standard Edition?",
    "options": [
      {
        "id": 1,
        "value": "1 day"
      },
      {
        "id": 2,
        "value": "0 days"
      },
      {
        "id": 3,
        "value": "90 days"
      },
      {
        "id": 4,
        "value": "7 days"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "For **Snowflake** Standard Edition, the retention period can be set to 0 (or unset back to the default of 1 day) at the account and object level (i.e. databases, schemas, and tables).",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_33",
    "number": 33,
    "question": "When should you avoid enabling `AUTO_SUSPEND`?",
    "options": [
      {
        "id": 1,
        "value": "You require the **Warehouse** to be available with no delay or lag time"
      },
      {
        "id": 2,
        "value": "You have a heavy, steady workload for the **Warehouse**."
      },
      {
        "id": 3,
        "value": "You should always enable `AUTO_SUSPEND` to save the compute costs."
      }
    ],
    "answers": [
      1,
      2
    ],
    "explanation": "You might want to consider disabling auto-suspend for a **Warehouse** if:\n\n- You have a heavy, steady workload for the **Warehouse**. \n- You require the **Warehouse** to be available with no delay or lag time.\n- Server provisioning is generally very fast (e.g. 1 or 2 seconds); however, depending on the size of the **Warehouse** and the availability of servers to provision, it can take longer.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_34",
    "number": 34,
    "question": "Which are the correct statements about **Snowflake** data Storage?",
    "options": [
      {
        "id": 1,
        "value": "Automatic Micro-partitioning"
      },
      {
        "id": 2,
        "value": "Hybrid Columnar Storage"
      },
      {
        "id": 3,
        "value": "Encryption on demand"
      },
      {
        "id": 4,
        "value": "Natural data clustering and optimization"
      }
    ],
    "answers": [
      1,
      2,
      4
    ],
    "explanation": "**Snowflake** stores the data in hybrid columnar format in micro-partitions. **Snowflake** has some level of natural data clustering and optimization capabilities. All the data in rest or in motion are always encrypted.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_35",
    "number": 35,
    "question": "Monica is a new **Snowflake** user with `ACCOUNTADMIN` role. She wants to create a **Warehouse** which can scale out if needed. She tried to create the **Warehouse** using UI but she is not able to find the options to set Minimum and Maximum Clusters. What could be the issue?",
    "options": [
      {
        "id": 1,
        "value": "She doesn‘t have enough privilege to create a **Warehouse**"
      },
      {
        "id": 2,
        "value": "She should use SQL command to create the **Warehouse** with Minimum and Maximum clusters"
      },
      {
        "id": 3,
        "value": "She should `ALTER` any existing **Warehouse** to set the Maximum and Minimum clusters"
      },
      {
        "id": 4,
        "value": "She is using STANDARD **Snowflake** edition. Multi-Cluster is not available in STANDARD edition."
      }
    ],
    "answers": [
      4
    ],
    "explanation": "Multi-cluster feature is not available in Standard edition. It starts from Enterprise Edition.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_36",
    "number": 36,
    "question": "A multi-cluster **Warehouse** is using an ECONOMY scaling policy, how long will queries back up in the queue before another cluster is started?",
    "options": [
      {
        "id": 1,
        "value": "1 minute"
      },
      {
        "id": 2,
        "value": "It will start immediately"
      },
      {
        "id": 3,
        "value": "8 Minutes"
      },
      {
        "id": 4,
        "value": "6 Minutes"
      },
      {
        "id": 5,
        "value": "2 Minutes"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "If a multi-cluster **Warehouse** is configured with SCALING policy as ECONOMY it starts cluster only if the system estimates theres enough query load to keep the cluster busy for at least 6 minutes.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_37",
    "number": 37,
    "question": "What action causes a **Warehouse**‘s cache to be purged?",
    "options": [
      {
        "id": 1,
        "value": "Suspending the **Warehouse**."
      },
      {
        "id": 2,
        "value": "A change to the Metadata Cache size."
      },
      {
        "id": 3,
        "value": "The passing of 24 hours."
      },
      {
        "id": 4,
        "value": "Resuming the **Warehouse**."
      }
    ],
    "answers": [
      1
    ],
    "explanation": "Cache gets purged on suspending the **Warehouse**.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_38",
    "number": 38,
    "question": "When a **Database** or **Schema** is cloned. What object is not cloned?",
    "options": [
      {
        "id": 1,
        "value": "Internal Named Stages"
      },
      {
        "id": 2,
        "value": "Sequences"
      },
      {
        "id": 3,
        "value": "Stored Procedures"
      },
      {
        "id": 4,
        "value": "Pipes"
      },
      {
        "id": 5,
        "value": "Internal Stages"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "The following rules apply to cloning stages or objects that contain stages (i.e. databases and schemas):\n\n- Individual external named stages can be cloned; internal named stages cannot be cloned. \n- When cloning a **Database** or **Schema**: –External named stages that were present in the source when the cloning operation started are cloned. –Tables are cloned, which means their internal stages are also cloned. –Internal named stages are not cloned.\n- Regardless of how a **Stage** was cloned, the clone does not include any of the files from the source. i.e. all cloned stages are empty.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_39",
    "number": 39,
    "question": "Virtual **Warehouse** in **Snowflake** refers to",
    "options": [
      {
        "id": 1,
        "value": "**Database**"
      },
      {
        "id": 2,
        "value": "Virtual Storage"
      },
      {
        "id": 3,
        "value": "Data **Warehouse**"
      },
      {
        "id": 4,
        "value": "Compute Engine"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "Virtual **Warehouse** refers to compute engines which executes query in **Snowflake**.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_40",
    "number": 40,
    "question": "What is the minimum billing charge for provisioning a **Warehouse**?",
    "options": [
      {
        "id": 1,
        "value": "1 Second"
      },
      {
        "id": 2,
        "value": "60 Minutes"
      },
      {
        "id": 3,
        "value": "1 Minute"
      },
      {
        "id": 4,
        "value": "No charge"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "The minimum billing charge for provisioning a server is 1 minute (i.e. 60 seconds). \n- There is no benefit to stopping a **Warehouse** before the first 60-second period is over because the credits have already been billed for that period. \n- After the first 60 seconds, all subsequent billing for a running server is per-second (until the server shuts down).",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_41",
    "number": 41,
    "question": "Scaling Out is an automated process (e.g., Min clusters to max clusters)",
    "options": [
      {
        "id": 1,
        "value": "FALSE"
      },
      {
        "id": 2,
        "value": "TRUE"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "**Snowflake** Editions except Standard has multi clusters features and it is an automated process. The minimum and maximum number of clusters are specified while configuring the Virtual **Warehouse**.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_42",
    "number": 42,
    "question": "Which **Snowflake** editions have maximum 90 days of Time-Travel retention period?",
    "options": [
      {
        "id": 1,
        "value": "All the editions"
      },
      {
        "id": 2,
        "value": "Standard"
      },
      {
        "id": 3,
        "value": "Business Critical"
      },
      {
        "id": 4,
        "value": "VPS"
      },
      {
        "id": 5,
        "value": "Enterprise"
      }
    ],
    "answers": [
      3,
      4,
      5
    ],
    "explanation": "Except Standard, all other **Snowflake** editions have maximum 90 days of Time-Travel retention period.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_43",
    "number": 43,
    "question": "How to choose the right size of **Warehouse** to achieve the best results based on the Query processing?",
    "options": [
      {
        "id": 1,
        "value": "Execute varieties of queries on same **Warehouse** to achieve the best result"
      },
      {
        "id": 2,
        "value": "Execute relatively homogenous queries on the same **Warehouse**"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "To achieve the best results, try to execute relatively homogeneous queries (size, complexity, data sets, etc.) on the same **Warehouse**; executing queries of widely-varying size and/or complexity on the same **Warehouse** makes it more difficult to analyze **Warehouse** load, which can make it more difficult to select the best size to match the size, composition, and number of queries in your workload.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_44",
    "number": 44,
    "question": "John wants to create a **Warehouse** which should not start immediately. Which property will him to create a **Warehouse** in suspended mode.",
    "options": [
      {
        "id": 1,
        "value": "`AUTO_SUSPEND` = INITIAL"
      },
      {
        "id": 2,
        "value": "AUTO_START = FALSE"
      },
      {
        "id": 3,
        "value": "INITIALLY_SUSPENDED = TRUE"
      },
      {
        "id": 4,
        "value": "INITIATE = FALSE"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "INITIALLY_SUSPENDED = TRUE will not start the **Warehouse** after creation. By default it is set to FALSE.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_45",
    "number": 45,
    "question": "When a **Warehouse** is resized, which queries make use of the new size?",
    "options": [
      {
        "id": 1,
        "value": "Both current and subsequent queries"
      },
      {
        "id": 2,
        "value": "Only subsequent queries"
      },
      {
        "id": 3,
        "value": "Only currently running queries"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "The current running queries keep running on the old size server. Only subsequent queries run on new Sized Virtual **Warehouse**. If queries processed by a **Warehouse** are running slowly, you can always resize the **Warehouse** to provision more servers. The additional servers do not impact any queries that are already running, but they are available for use by any queries that are queued or newly submitted.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_46",
    "number": 46,
    "question": "Multi-cluster **Warehouse** credit billing is based on which factors? (Select 2)",
    "options": [
      {
        "id": 1,
        "value": "Number of servers per cluster"
      },
      {
        "id": 2,
        "value": "Number of Clusters"
      },
      {
        "id": 3,
        "value": "Number of users"
      },
      {
        "id": 4,
        "value": "Number of queries it processes per hours"
      }
    ],
    "answers": [
      1,
      2
    ],
    "explanation": "For multi-cluster **Warehouse**, the number of credit billed is calculated based on the number of servers per cluster and the number of clusters that run within the time period.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_47",
    "number": 47,
    "question": "Select the **Snowflake** edition that automatic encryptions all the data.?",
    "options": [
      {
        "id": 1,
        "value": "Enterprise"
      },
      {
        "id": 2,
        "value": "Business Critical"
      },
      {
        "id": 3,
        "value": "All the editions"
      },
      {
        "id": 4,
        "value": "VPS"
      },
      {
        "id": 5,
        "value": "Standard"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "All of the **Snowflake** editions automatically encrypt data in rest and in motion.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_48",
    "number": 48,
    "question": "Scaling up can be configured as automated process.",
    "options": [
      {
        "id": 1,
        "value": "TRUE"
      },
      {
        "id": 2,
        "value": "FALSE"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "Scaling Up is a manual process as of now.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_49",
    "number": 49,
    "question": "Auto-suspend and auto-resume apply only to the entire **Warehouse** and not to the individual clusters in the **Warehouse**.",
    "options": [
      {
        "id": 1,
        "value": "TRUE"
      },
      {
        "id": 2,
        "value": "FALSE"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "TRUE for both type of STANDARD and MULTI-CLUSTER Warehouses. For a multi-cluster **Warehouse** :\n\n- Auto-suspend only occurs when the minimum number of clusters is running and there is no activity for the specified period of time.\n- The minimum is typically 1 (cluster), but could be more than 1. \n- Auto-resume only applies when the entire **Warehouse** is suspended (i.e. no clusters are running).",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_50",
    "number": 50,
    "question": "Which privilege is needed to be able to monitor a **Warehouse**?",
    "options": [
      {
        "id": 1,
        "value": "MONITOR"
      },
      {
        "id": 2,
        "value": "USAGE"
      },
      {
        "id": 3,
        "value": "MODIFY"
      },
      {
        "id": 4,
        "value": "OPERATE"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "User must be using a role that has the MONITOR privilege on the **Warehouse**.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_51",
    "number": 51,
    "question": "The data stored as part of **Fail-safe** is part of storage costs charged to customers.",
    "options": [
      {
        "id": 1,
        "value": "FALSE"
      },
      {
        "id": 2,
        "value": "TRUE"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "All storage within **Snowflake** is billable in compressed format including the persistent data stored in permanent tables, time-travel and **Fail-safe**.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_52",
    "number": 52,
    "question": "When there is new load of data in **Snowflake**, **Snowflake** automatically analyzes and compresses data into **Table**.",
    "options": [
      {
        "id": 1,
        "value": "TRUE"
      },
      {
        "id": 2,
        "value": "FALSE"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "**Snowflake** automatically analyzes and compresses data into **Table** on load. It finds the optimal compression scheme for each data type.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_53",
    "number": 53,
    "question": "Which SQL command will give the list of all the warehouses in an account?",
    "options": [
      {
        "id": 1,
        "value": "`SHOW` **Warehouse**;"
      },
      {
        "id": 2,
        "value": "`LIST` **Warehouse**;"
      },
      {
        "id": 3,
        "value": "`SHOW` WAREHOUSES;"
      },
      {
        "id": 4,
        "value": "DISPLAY **Warehouse**;"
      },
      {
        "id": 5,
        "value": "`LIST` WAREHOUSES;"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "`SHOW` WAREHOUSES is the right command and you can add LIKE as well to narrow the list.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_54",
    "number": 54,
    "question": "The compute resource used by **Snowflake** for data loading jobs can be provided by:",
    "options": [
      {
        "id": 1,
        "value": "Hardware provisioned by user directly from cloud providers"
      },
      {
        "id": 2,
        "value": "User managed virtual **Warehouse**"
      },
      {
        "id": 3,
        "value": "**Snowflake** managed service"
      }
    ],
    "answers": [
      2,
      3
    ],
    "explanation": "When loading using SNOWPIPE, the compute is provided by **Snowflake** managed service and for any other loading it is provided by user managed virtual **Warehouse**",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_55",
    "number": 55,
    "question": "John wants to create a multi-cluster **Warehouse** and wants to make sure that the virtual **Warehouse** starts the additional clusters only if the system estimates there‘s enough query load to keep the cluster busy for at least 6 minutes. How should he configure the **Warehouse**?",
    "options": [
      {
        "id": 1,
        "value": "Set the SCALING POLICY as ECONOMY"
      },
      {
        "id": 2,
        "value": "Configure as SCALE-MAX so that the **Warehouse** is always using maximum number of specified clusters"
      },
      {
        "id": 3,
        "value": "**Snowflake** takes care of this automatically so, John does not have to worry about it"
      },
      {
        "id": 4,
        "value": "Set the SCALING POLICY as STANDARD"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "If a multi-cluster **Warehouse** is configured with SCALING policy as ECONOMY it starts cluster only if the system estimates theres enough query load to keep the cluster busy for at least 6 minutes.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_56",
    "number": 56,
    "question": "You want a list of all the warehouses with name starting from DEMO. Select the correct SQL statement.",
    "options": [
      {
        "id": 1,
        "value": "`LIST` WAREHOUSES LIKE ‘%DEMO‘;"
      },
      {
        "id": 2,
        "value": "`SHOW` WAREHOUSES LIKE ‘DEMO%‘;"
      },
      {
        "id": 3,
        "value": "`SHOW` **Warehouse** LIKE ‘%DEMO‘;"
      },
      {
        "id": 4,
        "value": "`SHOW` WAREHOUSES LIKE ‘%DEMO‘;"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "`SHOW` WAREHOUSES is the right command and you can add LIKE as well to narrow the list.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_57",
    "number": 57,
    "question": "**Fail-safe** is a reliable way to create Dev/Test/QA and other environments.",
    "options": [
      {
        "id": 1,
        "value": "TRUE"
      },
      {
        "id": 2,
        "value": "FALSE"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "**Fail-safe** is not good option for Dev/TEST/QA and other non-production data. **Fail-safe** is good for important production level data.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_58",
    "number": 58,
    "question": "John wants to create a **Warehouse** which can auto resume whenever there is a new load / query to execute. How should he configure the **Warehouse**?",
    "options": [
      {
        "id": 1,
        "value": "`AUTO_SUSPEND` = TRUE"
      },
      {
        "id": 2,
        "value": "`AUTO_RESUME` = 1"
      },
      {
        "id": 3,
        "value": "`AUTO_RESUME` = TRUE"
      },
      {
        "id": 4,
        "value": "It is always manual and cant be automated."
      }
    ],
    "answers": [
      3
    ],
    "explanation": "`AUTO_RESUME` = TRUE resumes the **Warehouse** automatically whenever there is new load or query needing a **Warehouse**.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_59",
    "number": 59,
    "question": "The Cloning feature in **Snowflake** requires less storage because:",
    "options": [
      {
        "id": 1,
        "value": "The cloned data is constantly updated to synchronize with original **Table** data"
      },
      {
        "id": 2,
        "value": "Data is replicated to ensure integrity of data in the original **Table** data"
      },
      {
        "id": 3,
        "value": "Only Metadata is copied; no physical data is copied"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "As name suggest, it is Zero copy cloning feature that means data actual data is not replicated that means no additional storage consumption",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_60",
    "number": 60,
    "question": "What is **Clustering Depth**?",
    "options": [
      {
        "id": 1,
        "value": "It is the total number of micro-partitions that comprise the **Table**"
      },
      {
        "id": 2,
        "value": "The bigger the average depth, the better clustered the **Table**"
      },
      {
        "id": 3,
        "value": "It can be used to determine whether a large **Table** would benefit from explicitly defining a **Clustering Key**"
      },
      {
        "id": 4,
        "value": "The depth of the overlapping micro-partitions"
      }
    ],
    "answers": [
      3,
      4
    ],
    "explanation": "The **Clustering Depth** for a populated **Table** measures the average depth (1 or greater) of the overlapping micro-partitions for specified columns in a **Table**. The smaller the average depth, the better clustered the **Table** is with regards to the specified columns. **Clustering Depth** can be used for a variety of purposes, including: \n- Monitoring the clustering health  of a large **Table**, particularly over time as DML is performed on the **Table**. \n- Determining whether a large **Table** would benefit from explicitly defining a **Clustering Key**.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 9_1",
    "number": 1,
    "question": "Which layer is responsible for Data Security and Authentication?",
    "options": [
      {
        "id": 1,
        "value": "Compute Layer"
      },
      {
        "id": 2,
        "value": "Storage Layer"
      },
      {
        "id": 3,
        "value": "Cloud Agnostic Layer"
      },
      {
        "id": 4,
        "value": "Cloud Services"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "Cloud Services Layer is responsible for Data and Security along with other services like Infrastructure Management, Optimization, Transaction Management.",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_2",
    "number": 2,
    "question": "Which of the following object types are child objects within schemas?",
    "options": [
      {
        "id": 1,
        "value": "User Defined Functions"
      },
      {
        "id": 2,
        "value": "File Formats"
      },
      {
        "id": 3,
        "value": "Roles"
      },
      {
        "id": 4,
        "value": "Stages"
      },
      {
        "id": 5,
        "value": "Sequences"
      },
      {
        "id": 6,
        "value": "Stored Procedures"
      }
    ],
    "answers": [
      1,
      2,
      4,
      5,
      6
    ],
    "explanation": "Role is not child object of **Schema**.",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_3",
    "number": 3,
    "question": "What are the types of Caches? (Select 2)",
    "options": [
      {
        "id": 1,
        "value": "Storage Cache"
      },
      {
        "id": 2,
        "value": "Results Cache"
      },
      {
        "id": 3,
        "value": "History Cache"
      },
      {
        "id": 4,
        "value": "Metadata Cache"
      }
    ],
    "answers": [
      2,
      4
    ],
    "explanation": "Also, **Warehouse** Cache. **Warehouse** cache gets purged on suspension.",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_4",
    "number": 4,
    "question": "Which actions are not supported with shared data?",
    "options": [
      {
        "id": 1,
        "value": "Editing the comments for a shared **Database**"
      },
      {
        "id": 2,
        "value": "**Time Travel** for a shared **Database** or any schemas/tables in the **Database**"
      },
      {
        "id": 3,
        "value": "Creating a clone of a shared **Database** or any schemas/tables in the **Database**"
      },
      {
        "id": 4,
        "value": "Can be re-shared by data consumer"
      }
    ],
    "answers": [
      1,
      2,
      3,
      4
    ],
    "explanation": "Share is just for read, not for cloning or time-travel query or any edit.",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_5",
    "number": 5,
    "question": "If you find a data-related tool that is not listed as part of the **Snowflake** ecosystem, what industry standard options could you check for as a way to easily connect to **Snowflake**? (Select 2)",
    "options": [
      {
        "id": 1,
        "value": "Check to see if the tool can connect to other solutions via JDBC"
      },
      {
        "id": 2,
        "value": "Check to see if there is a petition in the community to create a driver"
      },
      {
        "id": 3,
        "value": "Check to see if you can develop a driver and put it on GitHub"
      },
      {
        "id": 4,
        "value": "Check to see if the tool can connect to other solutions via ODBC"
      }
    ],
    "answers": [
      1,
      4
    ],
    "explanation": "ODBC (Open **Database** Connectivity) and JDBC (JAVA **Database** Connectivity) are the industry standard options to connect **Snowflake** easily.",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_6",
    "number": 6,
    "question": "An hour ago, you ran a complex query. You then ran several simple queries from the same worksheet. You want to export the results from the complex query but they are no longer loaded in the Results pane of the worksheet. What is the least costly way to download the results?",
    "options": [
      {
        "id": 1,
        "value": "Click on History -> Locate the Query -> Click “Download Results“ in column 3"
      },
      {
        "id": 2,
        "value": "Type the command `SELECT` RESULTS(-3) into the Worksheet and click “Run“"
      },
      {
        "id": 3,
        "value": "Type the command Select RESULTS(,,) in the Worksheet and click “Run“"
      },
      {
        "id": 4,
        "value": "Click on History -> Locate the Query -> Click the QueryID -> Use the “Export Result“ button"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "The History page displays queries executed in the last 14 days, starting with the most recent ones. You can use the End Time filter to display queries based on a specified date; however, if you specify a date earlier than the last 14 days, no results are returned. You can export results only for queries for which you can **View** the results (i.e. queries youve executed). If you didnt execute a query or the query result is no longer available, the Export Result button is not displayed for the query. The web interface only supports exporting results up to 100 MB in size. If a query result exceeds this limit, you are prompted whether to proceed with the export. The export prompts may differ depending on your browser. For example, in Safari, you are prompted only for an export format (CSV or TSV). After the export completes, you are prompted to download the exported result to a new window, in which you can use the Save Page As browser option to save the result to a file.",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_7",
    "number": 7,
    "question": "Once the **Snowflake** Account is provisioned, user can access **Snowflake** using following methods:",
    "options": [
      {
        "id": 1,
        "value": "Any client application connected via JDBC or ODBC"
      },
      {
        "id": 2,
        "value": "Any 3rd-party partner that can connect to **Snowflake**"
      },
      {
        "id": 3,
        "value": "SnowSQL, the **Snowflake** command line client"
      },
      {
        "id": 4,
        "value": "Browser-based web interface"
      }
    ],
    "answers": [
      1,
      2,
      3,
      4
    ],
    "explanation": "Once your **Snowflake** account has been provisioned, you can access **Snowflake** using any of the following methods: \n- Browser-based web interface \n- SnowSQL, the **Snowflake** command line client \n- Any client application connected via JDBC or ODBC \n- Any 3rd-party partner that can connect to **Snowflake**",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_8",
    "number": 8,
    "question": "**Snowflake** offers multiple editions. Which one is not a offering from **Snowflake**.",
    "options": [
      {
        "id": 1,
        "value": "Enterprise"
      },
      {
        "id": 2,
        "value": "Standard"
      },
      {
        "id": 3,
        "value": "Premium"
      },
      {
        "id": 4,
        "value": "Business Critical"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "**Snowflake** offers 4 editions: 1 \n- Standard Edition 2 \n- Enterprise Edition 3 \n- Business Critical Edition 4 \n- Virtual Private **Snowflake** (VPS)",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_9",
    "number": 9,
    "question": "A CAST command (symbol) will force a value to be output as a certain datatype. Which of the following code samples will result in the “employeename“ being output using the VARCHAR datatype?",
    "options": [
      {
        "id": 1,
        "value": "`SELECT` employeename AS VARCHAR"
      },
      {
        "id": 2,
        "value": "`SELECT` VARCHAR(employeename)"
      },
      {
        "id": 3,
        "value": "`SELECT` employeename||VARCHAR"
      },
      {
        "id": 4,
        "value": "`SELECT` employeename::VARCHAR"
      }
    ],
    "answers": [
      4
    ],
    "explanation": ":: is used for Casting in **Snowflake**.",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_10",
    "number": 10,
    "question": "You have a dashboard that connects to **Snowflake** via JDBC. The dashboard is refreshed hundreds of times per day. The data is very stable, only changing once or twice per day. The query run by the dashboard connector user never changes. How will **Snowflake** manage changing and non-changing data? Mark all true statements.",
    "options": [
      {
        "id": 1,
        "value": "**Snowflake** will spin up a **Warehouse** each time the dashboard is refreshed"
      },
      {
        "id": 2,
        "value": "**Snowflake** will compile results cache data from all user results so no **Warehouse** is needed"
      },
      {
        "id": 3,
        "value": "**Snowflake** will show the most up-to-date data each time the dashboard is refreshed"
      },
      {
        "id": 4,
        "value": "**Snowflake** will re-use data from the Results Cache as long as it is still the most up-to-date data available"
      },
      {
        "id": 5,
        "value": "**Snowflake** will spin up a **Warehouse** only if the underlying data has changed"
      }
    ],
    "answers": [
      3,
      4,
      5
    ],
    "explanation": "Until, data has not changed and query is same \n- **Snowflake** reuses the data from cache. Please note, Each time the persisted result for a query is reused, **Snowflake** resets the 24-hour retention period for the result, up to a maximum of 31 days from the date and time that the query was first executed. After 31 days, the result is purged and the next time the query is submitted, a new result is generated and persisted.",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_11",
    "number": 11,
    "question": "John wants to share a **View** with Monica but John wants to hide **View** definition and details from Monica. What type of **View** John should create and share with Monica?",
    "options": [
      {
        "id": 1,
        "value": "Secured"
      },
      {
        "id": 2,
        "value": "None"
      },
      {
        "id": 3,
        "value": "Standard"
      },
      {
        "id": 4,
        "value": "Materialized"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "Some of the internal optimizations for views require access to the underlying data in the base tables for the **View**. This access might allow data that is hidden from users of the **View** to be exposed through user code, such as user-defined functions, or other programmatic methods. Secure views do not utilize these optimizations, ensuring that users have no access to the underlying data.",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_12",
    "number": 12,
    "question": "The acronym ETL stands for what three words?",
    "options": [
      {
        "id": 1,
        "value": "Extract, Transition, Loading"
      },
      {
        "id": 2,
        "value": "Extract, Transform, Load"
      },
      {
        "id": 3,
        "value": "Extract, Transfer, Load"
      },
      {
        "id": 4,
        "value": "Extract, Transition, Load"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "First step is extraction of data from source and then Transform before loading into target **Database** like in **Snowflake**.",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_13",
    "number": 13,
    "question": "Which is not the Security function of cloud services layer?",
    "options": [
      {
        "id": 1,
        "value": "Pruning using Metadata about micro-partitions"
      },
      {
        "id": 2,
        "value": "Encryption and key management"
      },
      {
        "id": 3,
        "value": "Access control for shares"
      },
      {
        "id": 4,
        "value": "Authentication"
      },
      {
        "id": 5,
        "value": "Access control for users and roles"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "Security Services under Cloud Services has following main functions: \n- Authentication -Access control for users and roles -Access control for shares Encryption and key management Optimizer service of Cloud services takes care of Pruning using Metadata about micro-partitions",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_14",
    "number": 14,
    "question": "Which of the following terms or phrases can also be used to describe **Snowflake**? (Select 4)",
    "options": [
      {
        "id": 1,
        "value": "Build from the ground up for the cloud"
      },
      {
        "id": 2,
        "value": "Hadoop-Compliant"
      },
      {
        "id": 3,
        "value": "Multi-cluster"
      },
      {
        "id": 4,
        "value": "Hybrid Columnar"
      },
      {
        "id": 5,
        "value": "Native SQL"
      }
    ],
    "answers": [
      1,
      3,
      4,
      5
    ],
    "explanation": "**Snowflake** is a cloud native data platform. It is not a lift and shift of on-premise data **Warehouse** to cloud.",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_15",
    "number": 15,
    "question": "Which **View** does behave like a **Table** and get auto-refreshed?",
    "options": [
      {
        "id": 1,
        "value": "None"
      },
      {
        "id": 2,
        "value": "Secured"
      },
      {
        "id": 3,
        "value": "Materialized"
      },
      {
        "id": 4,
        "value": "Standard"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "Materialized views are designed to improve query performance for workloads composed of common, repeated query patterns. However, materializing intermediate results incurs additional costs. As such, before creating any materialized views, you should consider whether the costs are offset by the savings from re-using these results frequently enough.",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_16",
    "number": 16,
    "question": "**Snowflake** follows the Staged release process for new releases. How many days it take to normally to complete all the stages of the staged release.",
    "options": [
      {
        "id": 1,
        "value": "3 days"
      },
      {
        "id": 2,
        "value": "2 days"
      },
      {
        "id": 3,
        "value": "7 days"
      },
      {
        "id": 4,
        "value": "1 day"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "**Snowflake** follows 3 stages in one staged release. Which happens in 2 days. \n- Day 1  **Stage** 1 (early access) to designated Enterprise accounts. \n- Day 1 or 2  **Stage** 2 (regular access) for all Standard Edition accounts. \n- J31Day 2  **Stage** 3  (final) for all Enterprise Edition and VPS accounts.",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_17",
    "number": 17,
    "question": "A user can connect **Snowflake** in multiple ways. Please select",
    "options": [
      {
        "id": 1,
        "value": "Command line clients (e.g. SnowSQL)"
      },
      {
        "id": 2,
        "value": "Any client application connected via JDBC or ODBC"
      },
      {
        "id": 3,
        "value": "Any 3rd-party partner that can connect to **Snowflake**"
      },
      {
        "id": 4,
        "value": "Browser-based web interface"
      }
    ],
    "answers": [
      1,
      2,
      3,
      4
    ],
    "explanation": "**Snowflake** supports multiple ways of connecting to the service:\n- Browser-based web interface\n- SnowSQL, the **Snowflake** command line client\n- Any client application connected via JDBC or ODBC\n- Any 3rd-party partner that can connect to **Snowflake**",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_18",
    "number": 18,
    "question": "A **Snowflake** customer is responsible for all the maintenance and services.",
    "options": [
      {
        "id": 1,
        "value": "TRUE"
      },
      {
        "id": 2,
        "value": "FALSE"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "**Snowflake** is full cloud platform and near to zero maintenance platform. Customer doesn‘t have to mundane tasks like partitioning, vacuuming etc.",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_19",
    "number": 19,
    "question": "Which of the following are performed by the Cloud Services layer? (Select 4)",
    "options": [
      {
        "id": 1,
        "value": "Availability Zone Management"
      },
      {
        "id": 2,
        "value": "Metadata Management"
      },
      {
        "id": 3,
        "value": "Metadata Storage"
      },
      {
        "id": 4,
        "value": "Data Security"
      },
      {
        "id": 5,
        "value": "User Authentication"
      }
    ],
    "answers": [
      2,
      3,
      4,
      5
    ],
    "explanation": "Availability zone management is managed by Cloud Provider (like, AWS, AZURE, GCP) not by **Snowflake** Cloud Services layer.",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_20",
    "number": 20,
    "question": "Can you have a **Database** overlap across two **Snowflake** account?",
    "options": [
      {
        "id": 1,
        "value": "No"
      },
      {
        "id": 2,
        "value": "Yes"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "A **Database** can not overlap across two **Snowflake** accounts.",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_21",
    "number": 21,
    "question": "Choose the right hierarchy of **Snowflake** objects from the given options.",
    "options": [
      {
        "id": 1,
        "value": "ACCOUNT > **Schema** > **Database** > **Table**"
      },
      {
        "id": 2,
        "value": "ACCOUNT > **Database** > **Schema** > **Table**"
      },
      {
        "id": 3,
        "value": "ACCOUNT > **Stage** > **Database** > **Schema** > **Table**"
      },
      {
        "id": 4,
        "value": "ACCOUNT > **Database** > **Stage** > **Schema**"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "The top-most container is the customer ACCOUNT, within which resides **Database**. Each **Database** can have 1 or more **Schema** and each **Schema** can have one or more TABLES.",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_22",
    "number": 22,
    "question": "The best method to assist pruning on a large **Table** is to:",
    "options": [
      {
        "id": 1,
        "value": "Define a HASH **Table** for the **Table**"
      },
      {
        "id": 2,
        "value": "Define a PARTITIONING KEY on the **Table**"
      },
      {
        "id": 3,
        "value": "Define a CLUSTER KEY for the **Table**"
      },
      {
        "id": 4,
        "value": "Create a CLUSTERED INDEX on the **Table**"
      },
      {
        "id": 5,
        "value": "Create a DENSE INDEX on the **Table**"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "A **Clustering Key** is a subset of columns in a **Table** (or expressions on a **Table**) that are explicitly designated to co-locate the data in the **Table** in the same micro-partitions. This is useful for very large tables where the ordering was not ideal (at the time the data was inserted/loaded) or extensive DML has caused the **Table**s natural clustering to degrade.",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_23",
    "number": 23,
    "question": "How is the most effective way to test if clustering a **Table** helped performance?",
    "options": [
      {
        "id": 1,
        "value": "Use SYSTEM$CLUSTERING_INFORMATION. Check the average_depth"
      },
      {
        "id": 2,
        "value": "Use the SYSTEM$CLUSTERING_DEPTH and check the depth of each column"
      },
      {
        "id": 3,
        "value": "Use SYSTEM$CLUSTERING_INFORMATION. Check the average_overlaps"
      },
      {
        "id": 4,
        "value": "Run a sample query before clustering and after to compare the results"
      },
      {
        "id": 5,
        "value": "Use SYSTEM$CLUSTERING_INFORMATION. Check the total_constant_partition_count"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "Also, **Snowflake** strongly recommends that you test a representative set of queries on the **Table** to establish some performance baselines.",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_24",
    "number": 24,
    "question": "Which command will return information about the current **Database**?",
    "options": [
      {
        "id": 1,
        "value": "RETURN current_database( );"
      },
      {
        "id": 2,
        "value": "`SELECT` current_database( );"
      },
      {
        "id": 3,
        "value": "QUERY current_database( );"
      },
      {
        "id": 4,
        "value": "`USE` current_database( );"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "CURRENT_DATABASE() is a context function and returns the name current **Database** using `SELECT` command.",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_25",
    "number": 25,
    "question": "Which type of **View** is most like a **Table**?",
    "options": [
      {
        "id": 1,
        "value": "Secure"
      },
      {
        "id": 2,
        "value": "Materialized"
      },
      {
        "id": 3,
        "value": "External"
      },
      {
        "id": 4,
        "value": "Standard"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "Materialized views are designed to improve query performance for workloads composed of common, repeated query patterns. However, materializing intermediate results incurs additional costs. As such, before creating any materialized views, you should consider whether the costs are offset by the savings from re-using these results frequently enough.",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_26",
    "number": 26,
    "question": "The BI group is complaining about their queries taking too long to run. Checking the virtual **Warehouse** information shows the queued time is pretty high. What is the best way to fix this issue?",
    "options": [
      {
        "id": 1,
        "value": "Provide a virtual **Warehouse** for every user in the group"
      },
      {
        "id": 2,
        "value": "STATEMENT_QUEUED_TIMEOUT_IN_SECONDS parameter to a low value to cancel those queries if they get in the queue"
      },
      {
        "id": 3,
        "value": "Increase the virtual **Warehouse** MAXCONCURRENCY_LEVEL parameter"
      },
      {
        "id": 4,
        "value": "Increase the virtual **Warehouse** MAX_CLUSTER_COUNT property"
      },
      {
        "id": 5,
        "value": "Increase the size of the virtual **Warehouse**"
      },
      {
        "id": 6,
        "value": "Determine which users have the high priority queries and set the other users"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "Remember, If queuing can be solved by SCALE-OUT (add new clusters), not by SCALE-UP. SCALE-UP is good for performance. MAX_CLUSTER_OUT helps to the maximum number of clusters which a **Warehouse** can run in case of high workload.",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_27",
    "number": 27,
    "question": "SQL Clause which helps defining the **Clustering Key**:",
    "options": [
      {
        "id": 1,
        "value": "CLUSTER ON"
      },
      {
        "id": 2,
        "value": "CLUSTER BY"
      },
      {
        "id": 3,
        "value": "CLUSERTING ON"
      },
      {
        "id": 4,
        "value": "CLUSTERING BY"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "example \n- create or replace **Table** t1 (c1 date, c2 string, c3 number) cluster by (c1, c2);",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_28",
    "number": 28,
    "question": "Who can create shares?",
    "options": [
      {
        "id": 1,
        "value": "ROLE with `CREATE` SHARES global Privilege"
      },
      {
        "id": 2,
        "value": "`ACCOUNTADMIN`"
      }
    ],
    "answers": [
      1,
      2
    ],
    "explanation": "You must use the `ACCOUNTADMIN` role or a role granted the `CREATE` SHARES global privilege.",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_29",
    "number": 29,
    "question": "**Snowflake** **Resource Monitor** allows administrators to set thresholds and triggers to track credit usage. What methods are most effective for resource monitoring? (Check all that apply).",
    "options": [
      {
        "id": 1,
        "value": "Setting quota thresholds for trigger actions and notifications"
      },
      {
        "id": 2,
        "value": "Tracking consumption on an hourly basis"
      },
      {
        "id": 3,
        "value": "Tracking and controlling credit consumption on a monthly basis"
      },
      {
        "id": 4,
        "value": "Control global monthly credit usage for an account"
      }
    ],
    "answers": [
      1,
      3,
      4
    ],
    "explanation": "Correct",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_30",
    "number": 30,
    "question": "**Snowflake** Administrators should utilize resource monitors to help control costs and avoid unexpected credit usage. Which of the following actions can **Snowflake**‘s **Resource Monitor** triggers initiate automatically? (Check three that apply)",
    "options": [
      {
        "id": 1,
        "value": "Roll over query executions to under-utilized warehouses"
      },
      {
        "id": 2,
        "value": "Impose limits on the number of credits that warehouses consume each month"
      },
      {
        "id": 3,
        "value": "Trigger alert notifications for high usage"
      },
      {
        "id": 4,
        "value": "Trigger **Warehouse** suspension for high usage"
      }
    ],
    "answers": [
      2,
      3,
      4
    ],
    "explanation": "",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_31",
    "number": 31,
    "question": "In the History Page, a query shows Bytes Scanned having Assigned Partitions:\n\n- 110, Scanned Partitions 58, and Original Partitions 110.\n- Why did the optimizer show fewer partitions scanned than assigned?",
    "options": [
      {
        "id": 1,
        "value": "During the execution of the query, new data was added to the **Table** and the optimizer had to add those micro partitions into the scan."
      },
      {
        "id": 2,
        "value": "The static optimization determined the number of possible micro partitions would be 110 but the dynamic optimization was able to prune some of the partitions from a joined **Table**"
      },
      {
        "id": 3,
        "value": "One of the tables in the query was an external **Table** and didnt have micro partitions The Metadata for the **Table** was out of date and there were really only 58 partitions total"
      },
      {
        "id": 4,
        "value": "The optimizer estimated only 58 partitions would need to be scan but during the execution of the query, the optimizer realized it would have to read all 110 micro partitions"
      },
      {
        "id": 5,
        "value": "The query was using an Xlarge **Warehouse** and could scan the partitions in parallel"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "**Snowflake** produces well-clustered data in tables in micro-partitions. **Snowflake** only targets those micro-partitions which come under the range of query criteria. If **Table** is clustered well, **Snowflake** scans only few of the micro-partitions.",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_32",
    "number": 32,
    "question": "What is the data type provided by **Snowflake** to store semi structure data?",
    "options": [
      {
        "id": 1,
        "value": "Semi-structure"
      },
      {
        "id": 2,
        "value": "Variant"
      },
      {
        "id": 3,
        "value": "Varchar"
      },
      {
        "id": 4,
        "value": "Text"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "**Snowflake** loads semi-structured data into a single VARIANT column",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_33",
    "number": 33,
    "question": "When a **Database** or **Schema** that contains a source **Table** and stream is cloned, any unconsumed records in the stream (in the clone) are inaccessible",
    "options": [
      {
        "id": 1,
        "value": "FALSE"
      },
      {
        "id": 2,
        "value": "TRUE"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "Currently, when a **Database** or **Schema** that contains a source **Table** and stream is cloned, any unconsumed records in the stream (in the clone) are inaccessible. This behavior is consistent with **Time Travel** for tables. If a **Table** is cloned, historical data for the **Table** clone begins at the time/point when the clone was created",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_34",
    "number": 34,
    "question": "Which cache stores object definitions and statistics?",
    "options": [
      {
        "id": 1,
        "value": "Metadata Cache"
      },
      {
        "id": 2,
        "value": "Results Cache"
      },
      {
        "id": 3,
        "value": "**Warehouse** Cache"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "Metadata Management has following major functions: \n- Stores Metadata as data is loaded into the system \n- Handles queries that can be processes completely from Metadata -Used for **Time Travel** and Cloning -Every aspect of **Snowflake** architecture leverages met",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_35",
    "number": 35,
    "question": "If a query is slow, how can the query be changed to improve the query?",
    "options": [
      {
        "id": 1,
        "value": "Reorder the list of tables in the query to change the order the tables are read in the query"
      },
      {
        "id": 2,
        "value": "Change the order of the where clause to force the optimizer to consider the most effective filter first"
      },
      {
        "id": 3,
        "value": "Use an ORDER BY on the query to order the data before its searched"
      },
      {
        "id": 4,
        "value": "Provide a hint to the optimizer"
      },
      {
        "id": 5,
        "value": "If possible, use the **Table**s defined CLUSTER KEY in the query"
      }
    ],
    "answers": [
      5
    ],
    "explanation": "A good Clustering helps reduce the scanning of micro-partitions, which results in better performance.",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_36",
    "number": 36,
    "question": "Which cache type gets purged regularly?",
    "options": [
      {
        "id": 1,
        "value": "**Warehouse** Cache"
      },
      {
        "id": 2,
        "value": "Metadata Cache"
      },
      {
        "id": 3,
        "value": "Results Cache"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "**Result Cache** gets suspended every 24 hours unless queried again within 24 hours. It can go until 31 days. If you also see option for **Warehouse** and it is mentioned that `AUTO_SUSPEND` is set then **Warehouse** Cache will be you best answer.",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_37",
    "number": 37,
    "question": "Which type of **View** has an extra layer of protection to hide the SQL code from unauthorized viewing?",
    "options": [
      {
        "id": 1,
        "value": "Standard"
      },
      {
        "id": 2,
        "value": "Secure"
      },
      {
        "id": 3,
        "value": "Materialized"
      },
      {
        "id": 4,
        "value": "Permanent"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "Some of the internal optimizations for views require access to the underlying data in the base tables for the **View**. This access might allow data that is hidden from users of the **View** to be exposed through user code, such as user-defined functions, or other programmatic methods. Secure views do not utilize these optimizations, ensuring that users have no access to the underlying data.",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_38",
    "number": 38,
    "question": "What is the name of the **Snowflake**-produced Command Line Interface tool?",
    "options": [
      {
        "id": 1,
        "value": "SnowConnect"
      },
      {
        "id": 2,
        "value": "Snow Command"
      },
      {
        "id": 3,
        "value": "SnowSQL"
      },
      {
        "id": 4,
        "value": "SnowCLI"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "SnowSQL is the next-generation command line client for connecting to **Snowflake** to execute SQL queries and perform all DDL and DML operations, including loading data into and unloading data out of **Database** tables.",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_39",
    "number": 39,
    "question": "When choosing a geographic deployment region, what factors might an enrollee consider?",
    "options": [
      {
        "id": 1,
        "value": "End-user perceptions of glamorous or trendy geographic locations"
      },
      {
        "id": 2,
        "value": "Proximity to the point of service"
      },
      {
        "id": 3,
        "value": "Number of availability zones within a region"
      },
      {
        "id": 4,
        "value": "Additional fees charged for regions with geo-political unrest"
      }
    ],
    "answers": [
      2,
      3
    ],
    "explanation": "It is better to choose the nearest region to avoid any lag or latency with higher number of availability zones.",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_40",
    "number": 40,
    "question": "Two virtual warehouses can access the same data at the same time without causing contention issues",
    "options": [
      {
        "id": 1,
        "value": "TRUE"
      },
      {
        "id": 2,
        "value": "FALSE"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "This is true and unique feature of **Snowflake** to make the data available for everyone intended to access any time without any contention issues.",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_41",
    "number": 41,
    "question": "Which SQL statements will need a running **Warehouse** and consume credit? Consider **Table** created as – `CREATE` OR REPLACE **Table** T1 ( ID number(2), Name varchar(20), Salary number (11,2) );",
    "options": [
      {
        "id": 1,
        "value": "`SELECT` MAX(ID) `FROM` T1;"
      },
      {
        "id": 2,
        "value": "`SELECT` AVG(ID) `FROM` T1;"
      },
      {
        "id": 3,
        "value": "`SELECT` MIN(ID) `FROM` T1;"
      },
      {
        "id": 4,
        "value": "`SELECT` COUNT(*) `FROM` T1;"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "Cloud services layer does not store average value of column data, and so, it gets computed and requires a running **Warehouse**.",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_42",
    "number": 42,
    "question": "There are two types of **Snowflake** planned releases. Please choose all applicable.",
    "options": [
      {
        "id": 1,
        "value": "Full Release"
      },
      {
        "id": 2,
        "value": "Upgrade Release"
      },
      {
        "id": 3,
        "value": "Installation release"
      },
      {
        "id": 4,
        "value": "Patch Release"
      }
    ],
    "answers": [
      1,
      4
    ],
    "explanation": "There are two types of planned releases:\n\n- 1 \n- Full Release \n- It covers new features, feature enhancement or updates,  and fixes2- Patch Release \n- A patch release includes fixes only.\n- Note that the patch release for a given week may be canceled if the full release for the week is sufficiently delayed or prolonged.Note \n- Every month, **Snowflake** deploys one behavior change release.\n- Behavior change releases contain changes to existing behaviors that may impact customers.",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_43",
    "number": 43,
    "question": "To change the **Warehouse** that will be used to run a SQL command within a specific worksheet (for example, changing the worksheet so that it uses LARGE), what two options are available?",
    "options": [
      {
        "id": 1,
        "value": "Update the **Warehouse** field in the Context Menu located above the worksheet."
      },
      {
        "id": 2,
        "value": "Run a SQL command like “SET **Warehouse** CONTEXT=LARGE_WH“"
      },
      {
        "id": 3,
        "value": "Run a SQL Command like “`USE` **Warehouse** LARGE_WH;“"
      },
      {
        "id": 4,
        "value": "Go to Worksheet properties page and set the **Warehouse** field to LARGE_WH"
      }
    ],
    "answers": [
      1,
      3
    ],
    "explanation": "`USE` **Warehouse**; command sets the **Warehouse** for the current session, whereis the name of the **Warehouse** which needs to be set for the session. **Warehouse** can be also set using Web UI Context pane.",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_44",
    "number": 44,
    "question": "Which is not the function under Metadata Management of Cloud Services Layer?",
    "options": [
      {
        "id": 1,
        "value": "Used for storing physical micro partition"
      },
      {
        "id": 2,
        "value": "Handles Queries that can be processes completely from Metadata"
      },
      {
        "id": 3,
        "value": "Used for **Time Travel** and Cloning"
      },
      {
        "id": 4,
        "value": "Stores Metadata as data is loaded into the system"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "Metadata Management has following major functions: \n- Stores Metadata as data is loaded into the system \n- Handles queries that can be processes completely from Metadata -Used for **Time Travel** and Cloning -Every aspect of **Snowflake** architecture leverages Metadata",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_45",
    "number": 45,
    "question": "John ran a query which took around 30 mins. He referred to Query profiler, and found the ‘Bytes spilled to local storage‘ has big number. What could be the issue?",
    "options": [
      {
        "id": 1,
        "value": "John should contact **Snowflake** Personnel"
      },
      {
        "id": 2,
        "value": "John is using comparatively smaller **Warehouse**"
      },
      {
        "id": 3,
        "value": "**Warehouse** size has no impact on Bytes spilling"
      },
      {
        "id": 4,
        "value": "John is using very large **Warehouse**"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "If a node has insufficient memory to complete its portion of a query, it will “spill“ to local SSD storage. This can negatively impact performance, but is sometimes acceptable. If a node has insufficient local SSD storage to complete its portion of a query, it will “spill“ to remote cloud storage. This is almost always very bad for performance. The solution in either case is… to simplify the SQL query or increase the **Warehouse** size (to increase scarce resources).",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_46",
    "number": 46,
    "question": "JSON arrays are written inside which type of brackets?",
    "options": [
      {
        "id": 1,
        "value": "Round Brackets"
      },
      {
        "id": 2,
        "value": "Square Brackets"
      },
      {
        "id": 3,
        "value": "Curly Braces"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "JSON arrays are written inside square brackets. An array can contain multiple objects, separated by commas. For example: {“employees“:[ {“firstName“:“John“, “lastName“:“Doe“}, {“firstName“:“Anna“, “lastName“:“Smith“}, {“firstName“:“Peter“, “lastName“:“Jones“} ] }",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_47",
    "number": 47,
    "question": "**Snowflake** is a Cloud Data Platform delivered as a service.",
    "options": [
      {
        "id": 1,
        "value": "FALSE"
      },
      {
        "id": 2,
        "value": "TRUE"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "**Snowflake** is a cloud native data platform. It is not a lift and shift of on-premise data **Warehouse** to cloud.",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_48",
    "number": 48,
    "question": "Which tables will experience the most benefit from clustering?",
    "options": [
      {
        "id": 1,
        "value": "Tables in the multi-terabyte (TB) range"
      },
      {
        "id": 2,
        "value": "Tables with sizes between the range of 100 MB to 1 GB compressed"
      },
      {
        "id": 3,
        "value": "Tables with sizes between the range of 1 GB to 10 GB compressed"
      },
      {
        "id": 4,
        "value": "All sizes of tables"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "In general, tables in the multi-terabyte (TB) range will experience the most benefit from clustering, particularly if DML is performed regularly/continually on these tables.",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_49",
    "number": 49,
    "question": "Which of the following are **Snowflake** **View** types? (Select 3)",
    "options": [
      {
        "id": 1,
        "value": "Standard"
      },
      {
        "id": 2,
        "value": "Permanent"
      },
      {
        "id": 3,
        "value": "Materialized"
      },
      {
        "id": 4,
        "value": "Secure"
      },
      {
        "id": 5,
        "value": "Transient"
      }
    ],
    "answers": [
      1,
      3,
      4
    ],
    "explanation": "Permanent and Transient are types of **Table** not **View**.",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_50",
    "number": 50,
    "question": "Objects that are dropped from a shared **Database** and then recreated with the same name are not immediately available in the share; you must execute grant usage on the objects to make them available",
    "options": [
      {
        "id": 1,
        "value": "TRUE"
      },
      {
        "id": 2,
        "value": "FALSE"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "True, you need to `GRANT` on newly create object. It doesn‘t matter if you create the same object what you have dropped.",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_51",
    "number": 51,
    "question": "Which **Table** type disappears after the close of the session and therefore has no **Fail-safe**, and no **Time Travel** options after the close of the session?",
    "options": [
      {
        "id": 1,
        "value": "Permanent"
      },
      {
        "id": 2,
        "value": "External"
      },
      {
        "id": 3,
        "value": "Transient"
      },
      {
        "id": 4,
        "value": "Temporary"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "Temporary **Table** is tied to a session only.",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_52",
    "number": 52,
    "question": "**Snowflake** is a packaged software offering that can be installed by a user.",
    "options": [
      {
        "id": 1,
        "value": "FALSE"
      },
      {
        "id": 2,
        "value": "TRUE"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "**Snowflake** is a cloud native data platform.",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_53",
    "number": 53,
    "question": "Which query will require compute (Virtual **Warehouse**)? Consider **Table** created as – `CREATE` or replace **Table** T1 ( ID number(2), Name varchar(20), ID number (11,2) );",
    "options": [
      {
        "id": 1,
        "value": "`SELECT` * `FROM` T1;"
      },
      {
        "id": 2,
        "value": "`SELECT` CURRENT_ACCOUNT();"
      },
      {
        "id": 3,
        "value": "`SHOW` DATABASES;"
      },
      {
        "id": 4,
        "value": "`SELECT` MAX(ID) `FROM` T1;"
      },
      {
        "id": 5,
        "value": "`SELECT` MIN(ID) `FROM` T1;"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "Except `SELECT` * `FROM` T1, all the queries return results from cloud services layer Metadata, So these queries do not need a running Virtual **Warehouse**.",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_54",
    "number": 54,
    "question": "The following SQL statement will require a running **Warehouse** – `CREATE` **Table** T1 (NAME (VARCHAR20), ADDRESS VARCHAR (50));",
    "options": [
      {
        "id": 1,
        "value": "TRUE"
      },
      {
        "id": 2,
        "value": "FALSE"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "`CREATE` DDL statement is handles by Cloud Services layer and so, it doesn‘t require Virtual **Warehouse**.",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_55",
    "number": 55,
    "question": "Which of the following workload is **Snowflake** suited for?",
    "options": [
      {
        "id": 1,
        "value": "Data Engineering"
      },
      {
        "id": 2,
        "value": "Data Applications"
      },
      {
        "id": 3,
        "value": "Data Lakes"
      },
      {
        "id": 4,
        "value": "**Data Sharing** and Exchanges"
      },
      {
        "id": 5,
        "value": "Data Science"
      },
      {
        "id": 6,
        "value": "Data **Warehouse**"
      }
    ],
    "answers": [
      1,
      2,
      3,
      4,
      5,
      6
    ],
    "explanation": "**Snowflake** is not a just Data **Warehouse** platform. It is a Data platform which can handle all of these workloads.",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_56",
    "number": 56,
    "question": "How many maximum columns (or expressions) are recommended for a cluster key?",
    "options": [
      {
        "id": 1,
        "value": "7 to 8"
      },
      {
        "id": 2,
        "value": "12 to 16"
      },
      {
        "id": 3,
        "value": "3 to 4"
      },
      {
        "id": 4,
        "value": "Higher the number of columns (or expressions) in the key, better will be the performance"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "A single **Clustering Key** can contain one or more columns or expressions. For most tables, **Snowflake** recommends a maximum of 3 or 4 columns (or expressions) per key. Adding more than 3-4 columns tends to increase costs more than benefits.",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_57",
    "number": 57,
    "question": "Which statement accurately describes the **Snowflake** Cloud Services layer?",
    "options": [
      {
        "id": 1,
        "value": "A collection of independent, scalable, and stateless services providing crucial data management capabilities"
      },
      {
        "id": 2,
        "value": "A collection of tightly coupled **Database** management features"
      },
      {
        "id": 3,
        "value": "A set of Cloud providers‘ general services made available to users via the internet"
      },
      {
        "id": 4,
        "value": "Managed and scaled by the user"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "**Snowflake** is a cloud native data platform. It is not a cloud provider like AWS or Azure. It offers unique architecture of decoupled storage and compute with unlimited elasticity capability.",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_58",
    "number": 58,
    "question": "**Snowflake** calculates usage of data stored in the system for:",
    "options": [
      {
        "id": 1,
        "value": "Cloud storage used in External **Stage**"
      },
      {
        "id": 2,
        "value": "Files staged for bulk data loading/unloading"
      },
      {
        "id": 3,
        "value": "Clones of **Database** tables that reference data deleted in the **Table** that owns the clones"
      },
      {
        "id": 4,
        "value": "**Database** tables, including historical data for **Time Travel**"
      },
      {
        "id": 5,
        "value": "**Fail-safe** for **Database** tables"
      }
    ],
    "answers": [
      2,
      3,
      4,
      5
    ],
    "explanation": "Usage for data storage is calculated on the daily average amount of data (in bytes) stored in the system for:\n\n- Files staged for bulk data loading/unloading (can be stored compressed or uncompressed). \n- **Database** tables, including historical data for **Time Travel** (always compressed by **Snowflake**). \n- **Fail-safe** for **Database** tables (always compressed by **Snowflake**). \n- Clones of **Database** tables that reference data deleted in the **Table** that owns the clones.\n- Cloud storage used in External **Stage** is not managed by **Snowflake**.\n- Its customers who pay to their cloud provider.",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_59",
    "number": 59,
    "question": "Which of the following are unique objects introduced by **Snowflake**?",
    "options": [
      {
        "id": 1,
        "value": "**Pipe**"
      },
      {
        "id": 2,
        "value": "**Stage**"
      },
      {
        "id": 3,
        "value": "**Table**"
      }
    ],
    "answers": [
      1,
      2
    ],
    "explanation": "**Stage** and **Pipe** are unique **Snowflake** objects.",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_60",
    "number": 60,
    "question": "Can you share data with multiple consumers with row based access control?",
    "options": [
      {
        "id": 1,
        "value": "NO"
      },
      {
        "id": 2,
        "value": "YES"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "Secure **View** with Account mapping using CURRENT_ACCOUNT();",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 2_50",
    "number": 50,
    "question": "Which command can be executed to get the version history of **Table** “Test1“ in **Schema** “mytestdb.myschema“ within the **Time Travel** period in **Snowflake**?",
    "options": [
      {
        "id": 1,
        "value": "show tables version like ‘Test1‘ in mytestdb.myschema;"
      },
      {
        "id": 2,
        "value": "show tables history like ‘Test1‘ in mytestdb.myschema;"
      },
      {
        "id": 3,
        "value": "show history of **Table** like ‘Test1‘ in mytestdb.myschema;"
      },
      {
        "id": 4,
        "value": "show version of **Table** like ‘Test1‘ in mytestdb.myschema;"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "",
    "reference": "https://docs.snowflake.com/en/user-guide/data-time-travel.html#data-retention-period",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 10_2",
    "number": 2,
    "question": "What is the default **Table** type when a `CREATE` **Table** is executed?",
    "options": [
      {
        "id": 1,
        "value": "PERMANENT"
      },
      {
        "id": 2,
        "value": "TRANSIENT"
      },
      {
        "id": 3,
        "value": "MATERIALIZED"
      },
      {
        "id": 4,
        "value": "TEMPORARY"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "The default type for tables is permanent. To define a **Table** as temporary or transient, you must explicitly specify the type during **Table** creation: `CREATE` [ OR REPLACE ] [ TEMPORARY | TRANSIENT ] **Table**",
    "reference": "",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_3",
    "number": 3,
    "question": "A stream object records data manipulation language (DML) changes made to tables, including inserts and updates but cannot record deletes made to tables",
    "options": [
      {
        "id": 1,
        "value": "TRUE"
      },
      {
        "id": 2,
        "value": "FALSE"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "A stream object records data manipulation language (DML) changes made to tables, including inserts, updates, and deletes, as well as Metadata about each change, so that actions can be taken using the changed data. This process is referred to as change data capture (CDC). An individual **Table** stream tracks the changes made to rows in a source **Table**. A **Table** stream (also referred to as simply a stream ) makes a change **Table**  available of what changed, at the row level, between two transactional points of time in a **Table**. This allows querying and consuming a sequence of change records in a transactional fashion.",
    "reference": "",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_4",
    "number": 4,
    "question": "The CDC records returned when querying a stream rely on a combination of –",
    "options": [
      {
        "id": 1,
        "value": "Offset stored in **Table**"
      },
      {
        "id": 2,
        "value": "Offset Stored in Stream"
      },
      {
        "id": 3,
        "value": "Change Tracking Metadata Stored in Stream"
      },
      {
        "id": 4,
        "value": "The change tracking Metadata stored in the **Table**"
      }
    ],
    "answers": [
      2,
      4
    ],
    "explanation": "Note that a stream itself does not contain any **Table** data. A stream only stores the offset for the source **Table** and returns CDC records by leveraging the versioning history for the source **Table**. When the first stream for a **Table** is created, a pair of hidden columns are added to the source **Table** and begin storing change tracking Metadata. These columns consume a small amount of storage. The CDC records returned when querying a stream rely on a combination of the offset stored in the stream and the change tracking Metadata stored in the **Table**.",
    "reference": "",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_5",
    "number": 5,
    "question": "Which type of **Table** stream is supported only on external tables?",
    "options": [
      {
        "id": 1,
        "value": "Native"
      },
      {
        "id": 2,
        "value": "Append-Only"
      },
      {
        "id": 3,
        "value": "Insert-Only"
      },
      {
        "id": 4,
        "value": "Update-Only"
      },
      {
        "id": 5,
        "value": "Standard"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "Insert-only Supported on external tables only. An insert-only stream tracks row inserts only; they do not record delete operations that remove rows from an inserted set (i.e. no-ops). For example, in-between any two offsets, if File1 is removed from the cloud storage location referenced by the external **Table**, and File2 is added, the stream returns records for the rows in File2 only. Unlike when tracking CDC data for standard tables, **Snowflake** cannot access the historical records for files in cloud storage. Overwritten files are essentially handled as new files:\n\n- The old version of the file is removed from cloud storage, but the insert-only stream does not record the delete operation.\n- The new version of the file is added to cloud storage, and the insert-only stream records the rows as inserts.\n- The stream does not record the diff of the old and new file versions",
    "reference": "",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_6",
    "number": 6,
    "question": "If you have a **Table** with a 10-day retention period and increase the period to 20 days, then the data that was moved to fail safe on 11th day, will be moved back to **Time Travel**, and will have more 9 days left for **Time Travel** retention end",
    "options": [
      {
        "id": 1,
        "value": "FALSE"
      },
      {
        "id": 2,
        "value": "TRUE"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "The data once moved to fail safe cannot moved back to **Time Travel** retenion period.",
    "reference": "",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_7",
    "number": 7,
    "question": "Which parameter is used to check if the stream contains change data for a **Table** or not?",
    "options": [
      {
        "id": 1,
        "value": "SYSTEM$STREAM_HAS_CHANGED_DATA"
      },
      {
        "id": 2,
        "value": "SYSTEM$STREAM_HAS_NEW_DATA"
      },
      {
        "id": 3,
        "value": "SYSTEM$STREAM_HAS_DATA"
      },
      {
        "id": 4,
        "value": "SYSTEM$STREAM_HAS_MODIFIED_DATA"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "Tasks may optionally use **Table** streams to provide a convenient way to continuously process new or changed data. A task can transform new or changed rows that a stream surfaces. Each time a task is scheduled to run, it can verify whether a stream contains change data for a **Table** (using SYSTEM$STREAM_HAS_DATA) and either consume the change data or skip the current run if no change data exists.",
    "reference": "",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_8",
    "number": 8,
    "question": "Fail Safe is configurable by the user",
    "options": [
      {
        "id": 1,
        "value": "TRUE"
      },
      {
        "id": 2,
        "value": "FALSE"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "**Fail-safe** provides a (non-configurable) 7-day period during which historical data is recoverable by **Snowflake**. This period starts immediately after the **Time Travel** retention period ends.",
    "reference": "",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_9",
    "number": 9,
    "question": "A **Table** named “MY_TABLE“ has a retention period of 7 days. The **Table** is dropped, and a new **Table** with the same name “MY_TABLE“ has been created. Now if the UNDROP MY_TABLE command is executed what will happen?",
    "options": [
      {
        "id": 1,
        "value": "The UNDROP command will fail"
      },
      {
        "id": 2,
        "value": "The UNDROP command will restore the dropped version with a new name"
      },
      {
        "id": 3,
        "value": "The UNDROP command will overwrite the already existing **Table** with the previously dropped **Table**"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "If an object with the same name already exists, UNDROP fails. You must rename the existing object, which then enables you to restore the previous version of the object.",
    "reference": "",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_10",
    "number": 10,
    "question": "Many logical data models refer to entities, attributes and values. In JSON, and some other semi-structured types, the word “attribute“ is often replaced with what word?",
    "options": [
      {
        "id": 1,
        "value": "Relationships"
      },
      {
        "id": 2,
        "value": "Columns"
      },
      {
        "id": 3,
        "value": "Keys"
      },
      {
        "id": 4,
        "value": "Values"
      },
      {
        "id": 5,
        "value": "Rows"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "Refer **Snowflake** Document section of Semi Structure –https://docs.snowflake.com/en/user-guide/semistructured-concepts.html",
    "reference": "https://docs.snowflake.com/en/user-guide/semistructured-concepts.html",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_11",
    "number": 11,
    "question": "Which of the following are true about the variant data type in **Snowflake**? Select all that apply.",
    "options": [
      {
        "id": 1,
        "value": "Can be queried using JSON path notation"
      },
      {
        "id": 2,
        "value": "Optimized storage based on repeated elements"
      },
      {
        "id": 3,
        "value": "Stored in a separate file format from structured data"
      },
      {
        "id": 4,
        "value": "Requires a custom mapping for each record type"
      }
    ],
    "answers": [
      1,
      2
    ],
    "explanation": "Refer **Snowflake** Document section of Semi Structure –https://docs.snowflake.com/en/user-guide/semistructured-concepts.html",
    "reference": "https://docs.snowflake.com/en/user-guide/semistructured-concepts.html",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_12",
    "number": 12,
    "question": "Dropped tables, schemas, and databases can be listed using the `SHOW` commands with which keyword specified?",
    "options": [
      {
        "id": 1,
        "value": "DROPPED_RECORDS"
      },
      {
        "id": 2,
        "value": "PREVIOUS VERSIONS"
      },
      {
        "id": 3,
        "value": "HISTORY"
      },
      {
        "id": 4,
        "value": "OLD VERSIONS"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "Dropped tables, schemas, and databases can be listed using the following commands with the HISTORY keyword specified:\n\n- `SHOW` TABLES `SHOW` SCHEMAS `SHOW` DATABASES The output includes all dropped objects and an additional DROPPED_ON column, which displays the date and time when the object was dropped.\n- If an object has been dropped more than once, each version of the object is included as a separate row in the output.",
    "reference": "",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 2_57",
    "number": 57,
    "question": "Which of the following tables have no fail safe period?",
    "options": [
      {
        "id": 1,
        "value": "Transient"
      },
      {
        "id": 2,
        "value": "Permanent"
      },
      {
        "id": 3,
        "value": "Temporary"
      }
    ],
    "answers": [
      1,
      3
    ],
    "explanation": "",
    "reference": "https://docs.snowflake.com/en/user-guide/data-cdp-storage-costs.html",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 10_14",
    "number": 14,
    "question": "**Snowflake** Tasks executions are associated with the user who created the task, i.e. in the history **Database** we can see that the task is getting executed under the username of the User who created that task",
    "options": [
      {
        "id": 1,
        "value": "TRUE"
      },
      {
        "id": 2,
        "value": "FALSE"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "**Snowflake** runs tasks with the privileges of the task owner (i.e. the role that has OWNERSHIP privilege on the task), but task runs are not associated with a user. Instead, each run is executed by a system service. Tasks are decoupled from specific users to avoid complications that can arise when users are dropped, locked due to authentication issues, or have roles removed. Because task runs are decoupled from a user, the query history for task runs are associated with the system service. SYSTEM is not a user in the account; it is a behind-the-scenes service. As such, there are no user credentials for this service, and no individual (from **Snowflake** or in your account) can assume its identity. Activity for the system service is limited to your account. The same encryption protections and other security protocols are built into this service as are enforced for other operations.",
    "reference": "",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_15",
    "number": 15,
    "question": "The **Time Travel** retention period can only be set at individual object level, and cannot be setup at account level",
    "options": [
      {
        "id": 1,
        "value": "FALSE"
      },
      {
        "id": 2,
        "value": "TRUE"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "The retention period can be applied at Account level, and object level (i.e. databases, schemas, and tables).",
    "reference": "",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 4_2",
    "number": 2,
    "question": "Scaling a **Warehouse** UP will decrease the number of clusters. (e.g. Small to Medium)",
    "options": [
      {
        "id": 1,
        "value": "FALSE"
      },
      {
        "id": 2,
        "value": "TRUE"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "",
    "reference": "https://docs.snowflake.com/en/user-guide/warehouses-multicluster.html#setting-the-scaling-policy-for-a-multi-cluster-warehouse",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 10_17",
    "number": 17,
    "question": "What features are provided by **Snowflake** to enable continuous data pipelines?",
    "options": [
      {
        "id": 1,
        "value": "All options are correct"
      },
      {
        "id": 2,
        "value": "Continous Data Loading"
      },
      {
        "id": 3,
        "value": "Recurring Tasks"
      },
      {
        "id": 4,
        "value": "Change Data Tracking"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "Refer document –https://docs.snowflake.com/en/user-guide/data-pipelines-intro.html",
    "reference": "https://docs.snowflake.com/en/user-guide/data-pipelines-intro.html",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_18",
    "number": 18,
    "question": "To help manage the storage costs associated with **Time Travel** and **Fail-safe**, **Snowflake** provides which two **Table** types",
    "options": [
      {
        "id": 1,
        "value": "TRANSIENT"
      },
      {
        "id": 2,
        "value": "MATERIALIZED"
      },
      {
        "id": 3,
        "value": "PERMANENT"
      },
      {
        "id": 4,
        "value": "TEMPORARY"
      }
    ],
    "answers": [
      1,
      4
    ],
    "explanation": "To help manage the storage costs associated with **Time Travel** and **Fail-safe**, **Snowflake** provides two **Table** types, temporary and transient, which do not incur the same fees as standard (i.e. permanent) tables:\n\n- Transient tables can have a **Time Travel** retention period of either 0 or 1 day.\n- Temporary tables can also have a **Time Travel** retention period of 0 or 1 day; however, this retention period ends as soon as the **Table** is dropped or the session in which the **Table** was created ends.\n- Transient and temporary tables have no **Fail-safe** period.\n- As a result, the maximum additional fees incurred for **Time Travel** and **Fail-safe** by these types of tables is limited to 1 day",
    "reference": "",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_19",
    "number": 19,
    "question": "If a task is still running when the next scheduled execution time occurs, what happens?",
    "options": [
      {
        "id": 1,
        "value": "The tasks that is running fails and stops"
      },
      {
        "id": 2,
        "value": "The tasks that is running fails and retriggers"
      },
      {
        "id": 3,
        "value": "The next execution of the tasks starts as soon as the current execution gets over"
      },
      {
        "id": 4,
        "value": "That schedule time is skipped"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "**Snowflake** ensures only one instance of a task with a schedule (i.e. a standalone task or the root task in a tree of tasks) is executed at a given time. If a task is still running when the next scheduled execution time occurs, then that scheduled time is skipped.",
    "reference": "",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_20",
    "number": 20,
    "question": "An append-only **Table** stream tracks row inserts only. Update and delete operations (including **Table** truncates) are not recorded",
    "options": [
      {
        "id": 1,
        "value": "TRUE"
      },
      {
        "id": 2,
        "value": "FALSE"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "An append-only **Table** stream tracks row inserts only. Update and delete operations (including **Table** truncates) are not recorded. For example, if 10 rows are inserted into a **Table** and then 5 of those rows are deleted before the offset for an append-only stream is advanced, the stream records 10 rows. An append-only stream returns the appended rows only and therefore can be much more performant than a standard stream for extract, load, transform (ELT) and similar scenarios that depend exclusively on row inserts. For example, the source **Table** can be truncated immediately after the rows in an append-only stream are consumed, and the record deletions do not contribute to the overhead the next time the stream is queried or consumed.",
    "reference": "",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_21",
    "number": 21,
    "question": "What is the limit of number of tasks that can be included in a tree of tasks?",
    "options": [
      {
        "id": 1,
        "value": "100"
      },
      {
        "id": 2,
        "value": "Unlimited"
      },
      {
        "id": 3,
        "value": "1000"
      },
      {
        "id": 4,
        "value": "10000"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "A simple tree of tasks is limited to a maximum of 1000 tasks total (including the root task) in a resumed state. An individual task in the tree is limited to a single predecessor task; however, a task can have a maximum of 100 child tasks (i.e. other tasks that identify the task as a predecessor).",
    "reference": "",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_22",
    "number": 22,
    "question": "Non-native values such as dates and timestamps are stored as strings when loaded into a VARIANT column",
    "options": [
      {
        "id": 1,
        "value": "TRUE"
      },
      {
        "id": 2,
        "value": "FALSE"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "Non-native values such as dates and timestamps are stored as strings when loaded into a VARIANT column, so operations on these values could be slower and also consume more space than when stored in a relational column with the corresponding data type.",
    "reference": "",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_23",
    "number": 23,
    "question": "A task object defines a recurring schedule for executing a SQL statement, including statements that call stored procedures",
    "options": [
      {
        "id": 1,
        "value": "FALSE"
      },
      {
        "id": 2,
        "value": "TRUE"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "A task object defines a recurring schedule for executing a SQL statement, including statements that call stored procedures. Tasks can be chained together for successive execution to support more complex periodic processing.",
    "reference": "",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_24",
    "number": 24,
    "question": "What data structure types can be ingested into a VARIANT column in a **Snowflake** **Table**? (Check all that apply)",
    "options": [
      {
        "id": 1,
        "value": "JSON"
      },
      {
        "id": 2,
        "value": "XML"
      },
      {
        "id": 3,
        "value": "ORC"
      },
      {
        "id": 4,
        "value": "PARQUET"
      },
      {
        "id": 5,
        "value": "HADOOP"
      },
      {
        "id": 6,
        "value": "AVRO"
      }
    ],
    "answers": [
      1,
      2,
      3,
      4,
      6
    ],
    "explanation": "Refer **Snowflake** Document section of Semi Structure –https://docs.snowflake.com/en/user-guide/semistructured-concepts.html",
    "reference": "https://docs.snowflake.com/en/user-guide/semistructured-concepts.html",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 4_3",
    "number": 3,
    "question": "Default Size of the **Warehouse** created using `CREATE` **Warehouse** command is",
    "options": [
      {
        "id": 1,
        "value": "X-LARGE"
      },
      {
        "id": 2,
        "value": "SMALL"
      },
      {
        "id": 3,
        "value": "MEDIUM"
      },
      {
        "id": 4,
        "value": "X-SMALL"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "",
    "reference": "https://docs.snowflake.com/en/user-guide/warehouses-overview.html",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 10_26",
    "number": 26,
    "question": "Which file format option can be enabled in JSON or AVRO file to remove the outer array structure and load the records into separate **Table** rows",
    "options": [
      {
        "id": 1,
        "value": "REMOVE_OUTER_ARRAY"
      },
      {
        "id": 2,
        "value": "STRIP_OUTER_ARRAY"
      },
      {
        "id": 3,
        "value": "ELIMINATE_OUTER_ARRAY"
      },
      {
        "id": 4,
        "value": "READ_INTERNAL_ARRAYS"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "In general, JSON and Avro data sets are a simple concatenation of multiple documents. The JSON or Avro output from some software is composed of a single huge array containing multiple records. There is no need to separate the documents with line breaks or commas, though both are supported. Instead, we recommend enabling the STRIP_OUTER_ARRAY file format option for the `COPY` INTO",
    "reference": "",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 4_4",
    "number": 4,
    "question": "Scaling up is a manual process. (e.g. Small to Medium)",
    "options": [
      {
        "id": 1,
        "value": "TRUE"
      },
      {
        "id": 2,
        "value": "FALSE"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "",
    "reference": "https://docs.snowflake.com/en/user-guide/warehouses-multicluster.html#setting-the-scaling-policy-for-a-multi-cluster-warehouse",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 10_28",
    "number": 28,
    "question": "What is the standard **Time Travel** retention period which is enabled for all **Snowflake** accounts?",
    "options": [
      {
        "id": 1,
        "value": "7 days"
      },
      {
        "id": 2,
        "value": "14 days"
      },
      {
        "id": 3,
        "value": "24 hours"
      },
      {
        "id": 4,
        "value": "48 hours"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "The standard retention period is 1 day (24 hours) and is automatically enabled for all **Snowflake** accounts:\n\n- For **Snowflake** Standard Edition, the retention period can be set to 0 (or unset back to the default of 1 day) at the account and object level (i.e. databases, schemas, and tables).\n- For **Snowflake** Enterprise Edition (and higher): For transient databases, schemas, and tables, the retention period can be set to 0 (or unset back to the default of 1 day).\n- The same is also true for temporary tables.\n- For permanent databases, schemas, and tables, the retention period can be set to any value from 0 up to 90 days.",
    "reference": "",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_29",
    "number": 29,
    "question": "Extended **Time Travel** of 90 days is supported starting which **Snowflake** edition",
    "options": [
      {
        "id": 1,
        "value": "Standard"
      },
      {
        "id": 2,
        "value": "Enterprise"
      },
      {
        "id": 3,
        "value": "Business Critical"
      },
      {
        "id": 4,
        "value": "Premier"
      },
      {
        "id": 5,
        "value": "Virtual Private **Snowflake**"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "Standard **Time Travel** is 1 day. Extended **Time Travel** (up to 90 days) requires **Snowflake** Enterprise Edition.",
    "reference": "",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_30",
    "number": 30,
    "question": "Which two **Table** types dont have fail safe?",
    "options": [
      {
        "id": 1,
        "value": "TEMPORARY"
      },
      {
        "id": 2,
        "value": "TRANSIENT"
      },
      {
        "id": 3,
        "value": "PERMANENT"
      }
    ],
    "answers": [
      1,
      2
    ],
    "explanation": "To help manage the storage costs associated with **Time Travel** and **Fail-safe**, **Snowflake** provides two **Table** types, temporary and transient, which do not incur the same fees as standard (i.e. permanent) tables:\n\n- Transient tables can have a **Time Travel** retention period of either 0 or 1 day.\n- Temporary tables can also have a **Time Travel** retention period of 0 or 1 day; however, this retention period ends as soon as the **Table** is dropped or the session in which the **Table** was created ends.\n- Transient and temporary tables have no **Fail-safe** period.\n- As a result, the maximum additional fees incurred for **Time Travel** and **Fail-safe** by these types of tables is limited to 1 day",
    "reference": "",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_31",
    "number": 31,
    "question": "What is the column datatype used for ingesting semi-structured data?",
    "options": [
      {
        "id": 1,
        "value": "VARCHAR"
      },
      {
        "id": 2,
        "value": "DATETIME"
      },
      {
        "id": 3,
        "value": "BINARY"
      },
      {
        "id": 4,
        "value": "STRING"
      },
      {
        "id": 5,
        "value": "VARIANT"
      }
    ],
    "answers": [
      5
    ],
    "explanation": "Refer **Snowflake** Document section of Semi Structure –https://docs.snowflake.com/en/user-guide/semistructured-concepts.html",
    "reference": "https://docs.snowflake.com/en/user-guide/semistructured-concepts.html",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 4_5",
    "number": 5,
    "question": "Warehouses can be started and stopped at any time",
    "options": [
      {
        "id": 1,
        "value": "TRUE"
      },
      {
        "id": 2,
        "value": "FALSE"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "",
    "reference": "https://docs.snowflake.com/en/user-guide/warehouses-overview.html",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 10_33",
    "number": 33,
    "question": "Under what circumstances would **Fail-safe** NOT be an effective method for data recovery?",
    "options": [
      {
        "id": 1,
        "value": "As a means for accessing historical data after the **Time Travel** retention period has ended"
      },
      {
        "id": 2,
        "value": "To recover data that may have been lost or damaged due to extreme operational failures"
      },
      {
        "id": 3,
        "value": "To protect data in the event of a system failure or other catastrophic event e.g. a hardware failure or security breach"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "Fail Safe is something that is managed by **Snowflake**, and the end user cannot directly query data from Fail Safe.In case for any **Table** whos **Time Travel** period is over, and we need to still restore the data within 7 days of **Time Travel** getting over, then **Snowflake** Support team can help us get that data.However, as per **Snowflake** “**Fail-safe** is not provided as a means for accessing historical data after the **Time Travel** retention period has ended. It is for use only by **Snowflake** to recover data that may have been lost or damaged due to extreme operational failures.“You can refer this link for the details – https://docs.snowflake.com/en/user-guide/data-failsafe.html",
    "reference": "",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_34",
    "number": 34,
    "question": "**Snowflake** minimizes the amount of storage required for historical data by maintaining only the information required to restore the individual **Table** rows that were updated or deleted",
    "options": [
      {
        "id": 1,
        "value": "FALSE"
      },
      {
        "id": 2,
        "value": "TRUE"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "The fees are calculated for each 24-hour period (i.e. 1 day) from the time the data changed. The number of days historical data is maintained is based on the **Table** type and the **Time Travel** retention period for the **Table**. Also, **Snowflake** minimizes the amount of storage required for historical data by maintaining only the information required to restore the individual **Table** rows that were updated or deleted. As a result, storage usage is calculated as a percentage of the **Table** that changed. Full copies of tables are only maintained when tables are dropped or truncated.",
    "reference": "",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_35",
    "number": 35,
    "question": "A single tasks in **Snowflake** can execute multiple SQL Statements",
    "options": [
      {
        "id": 1,
        "value": "TRUE"
      },
      {
        "id": 2,
        "value": "FALSE"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "Currently, a task can execute a single SQL statement, including a call to a stored procedure.Tasks can be combined with **Table** streams for continuous ELT workflows to process recently changed **Table** rows. Streams ensure exactly once semantics for new or changed data in a **Table**. Tasks can also be used independently to generate periodic reports by inserting or merging rows into a report **Table** or perform other periodic work.",
    "reference": "",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 4_6",
    "number": 6,
    "question": "Warehouses can also be resized at any time, even while running, to accommodate the need for more or less compute resources",
    "options": [
      {
        "id": 1,
        "value": "TRUE"
      },
      {
        "id": 2,
        "value": "FALSE"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "",
    "reference": "https://docs.snowflake.com/en/user-guide/warehouses-overview.html",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 10_37",
    "number": 37,
    "question": "What is the maximum number of child tasks, a given task can have?",
    "options": [
      {
        "id": 1,
        "value": "100"
      },
      {
        "id": 2,
        "value": "10000"
      },
      {
        "id": 3,
        "value": "10"
      },
      {
        "id": 4,
        "value": "1000"
      },
      {
        "id": 5,
        "value": "Unlimited"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "A simple tree of tasks is limited to a maximum of 1000 tasks total (including the root task) in a resumed state. An individual task in the tree is limited to a single predecessor task; however, a task can have a maximum of 100 child tasks (i.e. other tasks that identify the task as a predecessor).",
    "reference": "",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 4_7",
    "number": 7,
    "question": "Which scaling policy, starts additional cluster immediately when either a query is queued or the system detects that there is one more query than the currently-running clusters can execute.",
    "options": [
      {
        "id": 1,
        "value": "Economy"
      },
      {
        "id": 2,
        "value": "Standard"
      },
      {
        "id": 3,
        "value": "Legacy"
      },
      {
        "id": 4,
        "value": "None"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "",
    "reference": "https://docs.snowflake.com/en/user-guide/warehouses-multicluster.html",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 10_39",
    "number": 39,
    "question": "When a task is created, it is in resumed state by default?",
    "options": [
      {
        "id": 1,
        "value": "TRUE"
      },
      {
        "id": 2,
        "value": "FALSE"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "Create a task using `CREATE` TASK. The task is suspended by default.",
    "reference": "",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_40",
    "number": 40,
    "question": "What is the full form of ORC?",
    "options": [
      {
        "id": 1,
        "value": "Optimized Read Columnar"
      },
      {
        "id": 2,
        "value": "Optimized Row Columnar"
      },
      {
        "id": 3,
        "value": "Object Row Columnar"
      },
      {
        "id": 4,
        "value": "Object Read Class"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "Used to store Hive data, the ORC (Optimized Row Columnar) file format was designed for efficient compression and improved performance for reading, writing, and processing data over earlier Hive file formats. For more information about ORC, seehttps://orc.apache.org/.",
    "reference": "https://orc.apache.org/",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_41",
    "number": 41,
    "question": "Using **Time Travel**, you can perform which of the following actions within a defined period of time (i.e. within the **Time Travel** period of the object)",
    "options": [
      {
        "id": 1,
        "value": "Restore tables, schemas, and databases that have been dropped"
      },
      {
        "id": 2,
        "value": "Create clones of entire tables, schemas, and databases at or before specific points in the past"
      },
      {
        "id": 3,
        "value": "Query data in the past that has since been updated or deleted"
      },
      {
        "id": 4,
        "value": "All options are correct"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "Using **Time Travel**, you can perform the following actions within a defined period of time:\n\n- Query data in the past that has since been updated or deleted.\n- Create clones of entire tables, schemas, and databases at or before specific points in the past.\n- Restore tables, schemas, and databases that have been dropped.\n- Once the defined period of time has elapsed, the data is moved into **Snowflake** **Fail-safe** and these actions can no longer be performed.",
    "reference": "",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_42",
    "number": 42,
    "question": "Which semi structure data types are available in **Snowflake**",
    "options": [
      {
        "id": 1,
        "value": "ARRAY"
      },
      {
        "id": 2,
        "value": "OBJECT"
      },
      {
        "id": 3,
        "value": "SEMI STRUCTURE"
      },
      {
        "id": 4,
        "value": "STRING"
      },
      {
        "id": 5,
        "value": "VARIANT"
      }
    ],
    "answers": [
      1,
      2,
      5
    ],
    "explanation": "Refer **Snowflake** Document section of Semi Structure –https://docs.snowflake.com/en/user-guide/semistructured-concepts.html",
    "reference": "https://docs.snowflake.com/en/user-guide/semistructured-concepts.html",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_43",
    "number": 43,
    "question": "Which of the following **Snowflake** Object is used for a schedule execution of SQL statement?",
    "options": [
      {
        "id": 1,
        "value": "Stored Procedure"
      },
      {
        "id": 2,
        "value": "Streams"
      },
      {
        "id": 3,
        "value": "Snowpipe"
      },
      {
        "id": 4,
        "value": "Tasks"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "User-defined tasks allow scheduled execution of SQL statements. Tasks run according to a specified execution configuration, using any combination of a set interval and/or a flexible schedule using a subset of familiar cron utility syntax. Tasks currently run in user-specified warehouses but will eventually run in a serverless environment using **Snowflake**-supplied compute resources.",
    "reference": "",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_44",
    "number": 44,
    "question": "For which **Table** type the retention period ends as soon as the the **Table** is dropped or the session in which the **Table** was created ends.",
    "options": [
      {
        "id": 1,
        "value": "TEMPORARY"
      },
      {
        "id": 2,
        "value": "MATERIALIZED"
      },
      {
        "id": 3,
        "value": "PERMANENT"
      },
      {
        "id": 4,
        "value": "TRANSIENT"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "To help manage the storage costs associated with **Time Travel** and **Fail-safe**, **Snowflake** provides two **Table** types, temporary and transient, which do not incur the same fees as standard (i.e. permanent) tables:\n\n- Transient tables can have a **Time Travel** retention period of either 0 or 1 day.\n- Temporary tables can also have a **Time Travel** retention period of 0 or 1 day; however, this retention period ends as soon as the **Table** is dropped or the session in which the **Table** was created ends.\n- Transient and temporary tables have no **Fail-safe** period.\n- As a result, the maximum additional fees incurred for **Time Travel** and **Fail-safe** by these types of tables is limited to 1 day",
    "reference": "",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_45",
    "number": 45,
    "question": "Fail Safe is not supported in Standard **Snowflake** edition",
    "options": [
      {
        "id": 1,
        "value": "TRUE"
      },
      {
        "id": 2,
        "value": "FALSE"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "Fail Safe is a default feature available with all **Snowflake** edition, without any extra license cost",
    "reference": "",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_46",
    "number": 46,
    "question": "**Table** stream also contains actual **Table** data",
    "options": [
      {
        "id": 1,
        "value": "TRUE"
      },
      {
        "id": 2,
        "value": "FALSE"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "A stream itself does not contain any **Table** data. A stream only stores the offset for the source **Table** and returns CDC records by leveraging the versioning history for the source **Table**. When the first stream for a **Table** is created, a pair of hidden columns are added to the source **Table** and begin storing change tracking Metadata. These columns consume a small amount of storage. The CDC records returned when querying a stream rely on a combination of the offset stored in the stream and the change tracking Metadata stored in the **Table**.",
    "reference": "",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_47",
    "number": 47,
    "question": "DATA_RETENTION_TIME_IN_DAYS paramete is defined as 1 day at account level, and the same parameter is set as 7 days at **Database** level. Now a **Table** is created inside the given **Database** without specifying any explicit DATA_RETENTION_TIME_IN_DAYS parameter. What would be the data retention period for **Table** in this case?",
    "options": [
      {
        "id": 1,
        "value": "1 day"
      },
      {
        "id": 2,
        "value": "0 day"
      },
      {
        "id": 3,
        "value": "7 days"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "If a retention period is specified for a **Database** or **Schema**, the period is inherited by default for all objects created in the **Database**/**Schema**.",
    "reference": "",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_48",
    "number": 48,
    "question": "Which file format is an open-source data serialization and RPC framework originally developed for use with Apache Hadoop",
    "options": [
      {
        "id": 1,
        "value": "XML"
      },
      {
        "id": 2,
        "value": "ORC"
      },
      {
        "id": 3,
        "value": "JSON"
      },
      {
        "id": 4,
        "value": "PARQUET"
      },
      {
        "id": 5,
        "value": "AVRO"
      }
    ],
    "answers": [
      5
    ],
    "explanation": "Avro is an open-source data serialization and RPC framework originally developed for use with Apache Hadoop. It utilizes schemas defined in JSON to produce serialized data in a compact binary format. The serialized data can be sent to any destination (i.e. application or program) and can be easily deserialized at the destination because the **Schema** is included in the data",
    "reference": "",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_49",
    "number": 49,
    "question": "Which two **Table** types can have a maximum retention period of 1 day?",
    "options": [
      {
        "id": 1,
        "value": "MATERIALIZED"
      },
      {
        "id": 2,
        "value": "PERMANENT"
      },
      {
        "id": 3,
        "value": "TEMPORARY"
      },
      {
        "id": 4,
        "value": "TRANSIENT"
      }
    ],
    "answers": [
      3,
      4
    ],
    "explanation": "To help manage the storage costs associated with **Time Travel** and **Fail-safe**, **Snowflake** provides two **Table** types, temporary and transient, which do not incur the same fees as standard (i.e. permanent) tables:\n\n- Transient tables can have a **Time Travel** retention period of either 0 or 1 day.\n- Temporary tables can also have a **Time Travel** retention period of 0 or 1 day; however, this retention period ends as soon as the **Table** is dropped or the session in which the **Table** was created ends.\n- Transient and temporary tables have no **Fail-safe** period.\n- As a result, the maximum additional fees incurred for **Time Travel** and **Fail-safe** by these types of tables is limited to 1 day",
    "reference": "",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_50",
    "number": 50,
    "question": "**Snowflake** supports which of the following file formats for data loading? Select all that apply.",
    "options": [
      {
        "id": 1,
        "value": "Parquet"
      },
      {
        "id": 2,
        "value": "CSV"
      },
      {
        "id": 3,
        "value": "PDF"
      },
      {
        "id": 4,
        "value": "ORC"
      }
    ],
    "answers": [
      1,
      2,
      4
    ],
    "explanation": "Refer **Snowflake** Document section of Semi Structure –https://docs.snowflake.com/en/user-guide/semistructured-concepts.html",
    "reference": "https://docs.snowflake.com/en/user-guide/semistructured-concepts.html",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 4_9",
    "number": 9,
    "question": "Which scaling policy, prevents/minimizes queuing by favoring starting additional clusters over conserving credits?",
    "options": [
      {
        "id": 1,
        "value": "Standard"
      },
      {
        "id": 2,
        "value": "None"
      },
      {
        "id": 3,
        "value": "Legacy"
      },
      {
        "id": 4,
        "value": "Economy"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "",
    "reference": "https://docs.snowflake.com/en/user-guide/warehouses-multicluster.html",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 10_52",
    "number": 52,
    "question": "After dropping an object, creating an object with the same name does not restore the object. Instead, it creates a new version of the object. The original, dropped version is still available and can be restored.",
    "options": [
      {
        "id": 1,
        "value": "TRUE"
      },
      {
        "id": 2,
        "value": "FALSE"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "After dropping an object, creating an object with the same name does not restore the object. Instead, it creates a new version of the object. The original, dropped version is still available and can be restored. Restoring a dropped object restores the object in place (i.e. it does not create a new object).",
    "reference": "",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_53",
    "number": 53,
    "question": "Changing the **Time Travel** retention period for your account or individual objects changes the value for all lower-level objects that do not have a retention period explicitly set",
    "options": [
      {
        "id": 1,
        "value": "FALSE"
      },
      {
        "id": 2,
        "value": "TRUE"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "Changing the retention period for your account or individual objects changes the value for all lower-level objects that do not have a retention period explicitly set. For example:\n\n- If you change the retention period at the account level, all databases, schemas, and tables that do not have an explicit retention period automatically inherit the new retention period.\n- If you change the retention period at the **Schema** level, all tables in the **Schema** that do not have an explicit retention period inherit the new retention period.\n- Keep this in mind when changing the retention period for your account or any objects in your account because the change might have **Time Travel** consequences that you did not anticipate or intend.\n- In particular, we do not recommend changing the retention period to 0 at the account level.",
    "reference": "",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_54",
    "number": 54,
    "question": "Which two SQL Extension clause are provided by **Snowflake** to support **Time Travel**?",
    "options": [
      {
        "id": 1,
        "value": "PRIOR"
      },
      {
        "id": 2,
        "value": "BEFORE"
      },
      {
        "id": 3,
        "value": "DURING"
      },
      {
        "id": 4,
        "value": "AT"
      }
    ],
    "answers": [
      2,
      4
    ],
    "explanation": "To support **Time Travel**, the following SQL extensions have been implemented:\n\n- AT | BEFORE clause which can be specified in `SELECT` statements and `CREATE`  CLONE commands (immediately after the object name).\n- The clause uses one of the following parameters to pinpoint the exact historical data you wish to access: TIMESTAMP OFFSET (time difference in seconds from the present time) STATEMENT (identifier for statement, e.g. query ID) UNDROP command for tables, schemas, and databases",
    "reference": "",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_55",
    "number": 55,
    "question": "Within a transaction multiple SQL statements will see the same set of records in a stream",
    "options": [
      {
        "id": 1,
        "value": "TRUE"
      },
      {
        "id": 2,
        "value": "FALSE"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "Streams support repeatable read isolation. In repeatable read mode, multiple SQL statements within a transaction see the same set of records in a stream. This differs from the read committed mode supported for tables, in which statements see any changes made by previous statements executed within the same transaction, even though those changes are not yet committed.",
    "reference": "",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_56",
    "number": 56,
    "question": "The data retention period for a **Database**, **Schema**, or **Table** cannot be changed after they are created.",
    "options": [
      {
        "id": 1,
        "value": "FALSE"
      },
      {
        "id": 2,
        "value": "TRUE"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "The data retention period for a **Database**, **Schema**, or **Table** can be changed at any time.",
    "reference": "",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_57",
    "number": 57,
    "question": "The cron expression in a task definition supports specifying a time zone",
    "options": [
      {
        "id": 1,
        "value": "FALSE"
      },
      {
        "id": 2,
        "value": "TRUE"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "The cron expression in a task definition supports specifying a time zone. A scheduled task runs according to the specified cron expression in the local time for a given time zone. Special care should be taken with regard to scheduling tasks for time zones that recognize daylight saving time. Tasks scheduled during specific times on days when the transition from standard time to daylight saving time (or the reverse) occurs can have unexpected behaviors.",
    "reference": "",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_58",
    "number": 58,
    "question": "Which parameter is used to set the **Time Travel** retention period?",
    "options": [
      {
        "id": 1,
        "value": "DATA_RETENTION_TIME"
      },
      {
        "id": 2,
        "value": "DATA_RETENTION_TIME_IN_HOURS"
      },
      {
        "id": 3,
        "value": "DATA_RETENTION_TIME_IN_WEEKS"
      },
      {
        "id": 4,
        "value": "DATA_RETENTION_TIME_IN_DAYS"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "To specify the data retention period for **Time Travel**:\n\n- The DATA_RETENTION_TIME_IN_DAYS object parameter can be used by users with the `ACCOUNTADMIN` role to set the default retention period for your account.\n- The same parameter can be used to explicitly override the default when creating a **Database**, **Schema**, and individual **Table**.\n- The data retention period for a **Database**, **Schema**, or **Table** can be changed at any time.",
    "reference": "",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_59",
    "number": 59,
    "question": "When the owner role of a given task (i.e. the role with the OWNERSHIP privilege on the task) is deleted, what happens?",
    "options": [
      {
        "id": 1,
        "value": "The tasks is suspended immediately, and the task will not have any owner till explicitly assigned"
      },
      {
        "id": 2,
        "value": "The tasks is also dropped"
      },
      {
        "id": 3,
        "value": "The task is re-possessed  by the role that dropped the owner role"
      },
      {
        "id": 4,
        "value": "The roles granted to any task cannot be dropped unless all associated tasks are dropped"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "When the owner role of a given task (i.e. the role with the OWNERSHIP privilege on the task) is deleted, the task is re-possessed  by the role that dropped the owner role. This ensures that ownership moves to a role that is closer to the root of the role hierarchy. When a task is re-possessed, it is automatically paused, i.e., all executions currently in flight complete processing, but new executions will not be scheduled until the task is resumed explicitly by the new owner. The rationale for this is to prevent a user with access to a particular role from leaving behind tasks that suddenly execute with higher permissions when the role is removed. If the role that a running task is executing under is dropped while the task is running, the task completes processing under the dropped role.",
    "reference": "",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_60",
    "number": 60,
    "question": "In **Snowflake** Enterprise edition, the maximum retention period for a transient or temporary **Table** is?",
    "options": [
      {
        "id": 1,
        "value": "7 days"
      },
      {
        "id": 2,
        "value": "1 day"
      },
      {
        "id": 3,
        "value": "90 days"
      },
      {
        "id": 4,
        "value": "Transient & Temporary **Table** cannot be configured for **Time Travel**"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "For **Snowflake** Enterprise Edition (and higher):\n\n- For transient databases, schemas, and tables, the retention period can be set to 0 (or unset back to the default of 1 day).\n- The same is also true for temporary tables.\n- For permanent databases, schemas, and tables, the retention period can be set to any value from 0 up to 90 days",
    "reference": "",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 11_1",
    "number": 1,
    "question": "STRIP_NULL_VALUE converts a JSON null  value to a SQL NULL value. (TRUE / FALSE)",
    "options": [
      {
        "id": 1,
        "value": "FALSE"
      },
      {
        "id": 2,
        "value": "TRUE"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "Converts a JSON null  value to a SQL NULL value. All other variant values are passed unchanged.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_2",
    "number": 2,
    "question": "John created a **Database** and set the DATA_RETENTION_TIME_IN_DAYS as 30 days, but he did not set the DATA_RETENTION_TIME_IN_DAYS in one of the **Table** ‘T1‘. After 5 days, he accidently dropped **Table** ‘T1‘. Will he able to recover the **Table** T1?",
    "options": [
      {
        "id": 1,
        "value": "Yes, as the retention period is specified at **Database** level"
      },
      {
        "id": 2,
        "value": "John can recover the **Table** T1 after 30 days"
      },
      {
        "id": 3,
        "value": "John should call **Snowflake** Support to recover the **Table** from **Fail-safe**."
      },
      {
        "id": 4,
        "value": "No, John cant recover the dropped **Table** T1 because he didn‘t set DATA_RETENTION_TIME_IN_DAYS for **Table** T1"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "If a retention period is specified for a **Database** or **Schema**, the period is inherited by default for all objects created in the **Database**/**Schema**.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_3",
    "number": 3,
    "question": "What all commands will you use to load data from External **Stage** (for example, AWS S3 bucket) System to **Snowflake** **Table**?",
    "options": [
      {
        "id": 1,
        "value": "Only `COPY` INTO command"
      },
      {
        "id": 2,
        "value": "`PUT` COMMAND followed by `COPY` INTO"
      },
      {
        "id": 3,
        "value": "`COPY` INTO followed by `PUT` command"
      },
      {
        "id": 4,
        "value": "Only `PUT` command"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "You do not need to run `PUT` command when loading data from External **Stage** to **Snowflake**. `COPY` INTO command can directly copy from External **Stage** or Cloud Storage (Like AWS S3 bucket).",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_4",
    "number": 4,
    "question": "Semi Structured data can be accessed: (Select 3)",
    "options": [
      {
        "id": 1,
        "value": "In files on an AWS EC2 server"
      },
      {
        "id": 2,
        "value": "In files in an on-prem file server"
      },
      {
        "id": 3,
        "value": "In a permanent **Table** using the variant data type"
      },
      {
        "id": 4,
        "value": "In files in a internal **Stage**"
      },
      {
        "id": 5,
        "value": "In files in an external **Stage**"
      }
    ],
    "answers": [
      3,
      4,
      5
    ],
    "explanation": "**Snowflake** CAN‘T access from AWS EC2 server and on-prem file server. **Snowflake** can query External **Table** ( files of External **Stage**), Internal **Stage** and Permanent **Table**.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_5",
    "number": 5,
    "question": "Permissions on **Database** objects such as a **Database** or **Table** are granted to:",
    "options": [
      {
        "id": 1,
        "value": "Virtual warehouses"
      },
      {
        "id": 2,
        "value": "Roles"
      },
      {
        "id": 3,
        "value": "Schemas"
      },
      {
        "id": 4,
        "value": "Users"
      },
      {
        "id": 5,
        "value": "Users or roles"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "**Snowflake** supports Role-Based Access control.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_6",
    "number": 6,
    "question": "External Stages require customers to have an account with a cloud storage service provider. Which of the following are available currently or have been announced by **Snowflake** as under development?",
    "options": [
      {
        "id": 1,
        "value": "DROPBOX"
      },
      {
        "id": 2,
        "value": "MS Azure Blob"
      },
      {
        "id": 3,
        "value": "GCP Buckets"
      },
      {
        "id": 4,
        "value": "AWS S3"
      },
      {
        "id": 5,
        "value": "BOX"
      }
    ],
    "answers": [
      2,
      3,
      4
    ],
    "explanation": "**Snowflake** currently supports AWS S3, MS Azure Blob, GCP Buckets.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_7",
    "number": 7,
    "question": "Monica is an `ACCOUNTADMIN` and wants to change the **Time Travel** retention period of **Table** T1 of **Database** DB1 to 15 days. Which options will help her to set the new **Time Travel** retention period?",
    "options": [
      {
        "id": 1,
        "value": "Execute SQL Command - `ALTER` **Table** T1 SET DATA_RETENTION_TIME_IN_DAYS = 15;"
      },
      {
        "id": 2,
        "value": "Execute SQL Command - `ALTER` **Table** T1 SET DATA_RETENTION_TIME_IN_DAYS = 75;"
      },
      {
        "id": 3,
        "value": "Monica can change the retention period through ACCOUNT tab on UI"
      },
      {
        "id": 4,
        "value": "Monica should contact Salesforce support to get it done"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "Set the correct context for **Database** and **Schema** and run the `ALTER` **Table** command to set DATA_RETENTION_TIME_IN_DAYS to 15.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_8",
    "number": 8,
    "question": "John wants to share a **View** with Monica but John wants to hide **View** definition and details from Monica. What type of **View** John should create and share with Monica?",
    "options": [
      {
        "id": 1,
        "value": "Secured"
      },
      {
        "id": 2,
        "value": "Standard"
      },
      {
        "id": 3,
        "value": "Materialized"
      },
      {
        "id": 4,
        "value": "None"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "Some of the internal optimizations for views require access to the underlying data in the base tables for the **View**. This access might allow data that is hidden from users of the **View** to be exposed through user code, such as user-defined functions, or other programmatic methods. Secure views do not utilize these optimizations, ensuring that users have no access to the underlying data.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_9",
    "number": 9,
    "question": "The following SQL statement will require a running **Warehouse** – `CREATE` **Table** T1 (NAME (VARCHAR20), ADDRESS VARCHAR (50));",
    "options": [
      {
        "id": 1,
        "value": "FALSE"
      },
      {
        "id": 2,
        "value": "TRUE"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "`CREATE` DDL statement is handles by Cloud Services layer and so, it doesn‘t require Virtual **Warehouse**.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_10",
    "number": 10,
    "question": "User A and User B can access one another‘s result sets from the Results Cache, as long as which of the following are true? (Choose two)",
    "options": [
      {
        "id": 1,
        "value": "They use the same **Warehouse**."
      },
      {
        "id": 2,
        "value": "They run the exact same SQL Text/Query."
      },
      {
        "id": 3,
        "value": "They sign in to the same Session."
      },
      {
        "id": 4,
        "value": "They use the same Role."
      },
      {
        "id": 5,
        "value": "They run with 59 minutes of one another."
      }
    ],
    "answers": [
      2,
      4
    ],
    "explanation": "There must not be change in query to get the benefit of cache as well as user should use the same role.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_11",
    "number": 11,
    "question": "Which command will return information about the current **Database**?",
    "options": [
      {
        "id": 1,
        "value": "QUERY current_database( );"
      },
      {
        "id": 2,
        "value": "`USE` current_database( );"
      },
      {
        "id": 3,
        "value": "`SELECT` current_database( );"
      },
      {
        "id": 4,
        "value": "RETURN current_database( );"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "CURRENT_DATABASE() is a context function and returns the name current **Database** using `SELECT` command.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_12",
    "number": 12,
    "question": "There are two types of **Snowflake** Planned releases. Please choose all applicable.",
    "options": [
      {
        "id": 1,
        "value": "Installation release"
      },
      {
        "id": 2,
        "value": "Upgrade Release"
      },
      {
        "id": 3,
        "value": "Patch Release"
      },
      {
        "id": 4,
        "value": "Full Release"
      }
    ],
    "answers": [
      3,
      4
    ],
    "explanation": "There are two types of planned releases:\n\n- 1 \n- Full Release \n- It covers new features, feature enhancement or updates,  and fixes2- Patch Release \n- A patch release includes fixes only.\n- Note that the patch release for a given week may be canceled if the full release for the week is sufficiently delayed or prolonged.Note \n- Every month, **Snowflake** deploys one behavior change release.\n- Behavior change releases contain changes to existing behaviors that may impact customers.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_13",
    "number": 13,
    "question": "How often does **Snowflake** release new features?",
    "options": [
      {
        "id": 1,
        "value": "Yearly"
      },
      {
        "id": 2,
        "value": "Monthly"
      },
      {
        "id": 3,
        "value": "Bi-Weekly"
      },
      {
        "id": 4,
        "value": "Weekly"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "**Snowflake** releases new upgrades and patches weekly.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_14",
    "number": 14,
    "question": "John created a **Table** EMPLOYEE in worksheet 1 (Session1 ) but when he ran `SELECT` * `FROM` EMPLOYEE in worksheet 2 (Session 2) after setting up the correct Role, **Database** and **Schema**, he received error ‘ **Table** doesn‘t exist‘. What could be the reason?",
    "options": [
      {
        "id": 1,
        "value": "EMPLOYEE is Temporary **Table**"
      },
      {
        "id": 2,
        "value": "EMPLOYEE is a Permanent **Table**"
      },
      {
        "id": 3,
        "value": "EMPLOYEE was created as EXTERNAL **Table**"
      },
      {
        "id": 4,
        "value": "XYZ is Transient **Table**"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "Temporary **Table** is tied to a session only.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_15",
    "number": 15,
    "question": "You have a dashboard that connects to **Snowflake** via JDBC. The dashboard is refreshed hundreds of times per day. The data is very stable, only changing once or twice per day. The query run by the dashboard connector user never changes. How will **Snowflake** manage changing and non-changing data? Mark all true statements.",
    "options": [
      {
        "id": 1,
        "value": "**Snowflake** will re-use data from the Results Cache as long as it is still the most up-to-date data available"
      },
      {
        "id": 2,
        "value": "**Snowflake** will spin up a **Warehouse** each time the dashboard is refreshed"
      },
      {
        "id": 3,
        "value": "**Snowflake** will compile results cache data from all user results so no **Warehouse** is needed"
      },
      {
        "id": 4,
        "value": "**Snowflake** will show the most up-to-date data each time the dashboard is refreshed"
      },
      {
        "id": 5,
        "value": "**Snowflake** will spin up a **Warehouse** only if the underlying data has changed"
      }
    ],
    "answers": [
      1,
      4,
      5
    ],
    "explanation": "Until, data has not changed and query is same \n- **Snowflake** reuses the data from cache. Please note, Each time the persisted result for a query is reused, **Snowflake** resets the 24-hour retention period for the result, up to a maximum of 31 days from the date and time that the query was first executed. After 31 days, the result is purged and the next time the query is submitted, a new result is generated and persisted.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_16",
    "number": 16,
    "question": "Multi-cluster **Warehouse** credit billing is based on which factors? (Select 2)",
    "options": [
      {
        "id": 1,
        "value": "Number of servers per cluster"
      },
      {
        "id": 2,
        "value": "Number of queries it processes per hours"
      },
      {
        "id": 3,
        "value": "Number of users"
      },
      {
        "id": 4,
        "value": "Number of Clusters"
      }
    ],
    "answers": [
      1,
      4
    ],
    "explanation": "For multi-cluster **Warehouse**, the number of credit billed is calculated based on the number of servers per cluster and the number of clusters that run within the time period.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_17",
    "number": 17,
    "question": "AWS PrivateLink is an AWS service for creating private VPC endpoints that allow direct, secure connectivity between AWS VPCs without traversing the `PUBLIC` Internet. (TRUE / FALSE)",
    "options": [
      {
        "id": 1,
        "value": "FALSE"
      },
      {
        "id": 2,
        "value": "TRUE"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "**Snowflake** on AWS is implemented as a VPC, PrivateLink enables creating a highly-secure network between **Snowflake** and your other AWS VPCs (in the same AWS region), fully protected from unauthorized external access.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_18",
    "number": 18,
    "question": "Which of the following object types are child objects within schemas?",
    "options": [
      {
        "id": 1,
        "value": "User Defined Functions"
      },
      {
        "id": 2,
        "value": "Sequences"
      },
      {
        "id": 3,
        "value": "Stored Procedures"
      },
      {
        "id": 4,
        "value": "Roles"
      },
      {
        "id": 5,
        "value": "File Formats"
      },
      {
        "id": 6,
        "value": "Stages"
      }
    ],
    "answers": [
      1,
      2,
      3,
      5,
      6
    ],
    "explanation": "Role is not child object of **Schema**.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_19",
    "number": 19,
    "question": "John wants to create a multi-cluster **Warehouse** and wants to make sure that the virtual **Warehouse** starts the additional clusters only if the system estimates there‘s enough query load to keep the cluster busy for at least 6 minutes. How should he configure the **Warehouse**?",
    "options": [
      {
        "id": 1,
        "value": "Set the SCALING POLICY as STANDARD"
      },
      {
        "id": 2,
        "value": "**Snowflake** takes care of this automatically so, John does not have to worry about it"
      },
      {
        "id": 3,
        "value": "Set the SCALING POLICY as ECONOMY"
      },
      {
        "id": 4,
        "value": "Configure as SCALE-MAX so that the **Warehouse** is always using maximum number of specified clusters"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "If a multi-cluster **Warehouse** is configured with SCALING policy as ECONOMY it starts cluster only if the system estimates theres enough query load to keep the cluster busy for at least 6 minutes.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_20",
    "number": 20,
    "question": "Objects that are dropped from a shared **Database** and then recreated with the same name are not immediately available in the share; you must execute grant usage on the objects to make them available",
    "options": [
      {
        "id": 1,
        "value": "FALSE"
      },
      {
        "id": 2,
        "value": "TRUE"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "True, you need to `GRANT` on newly create object. It doesn‘t matter if you create the same object what you have dropped.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_21",
    "number": 21,
    "question": "Which of the following are unique objects introduced by **Snowflake**?",
    "options": [
      {
        "id": 1,
        "value": "**Stage**"
      },
      {
        "id": 2,
        "value": "**Table**"
      },
      {
        "id": 3,
        "value": "**Pipe**"
      }
    ],
    "answers": [
      1,
      3
    ],
    "explanation": "**Stage** and **Pipe** are unique **Snowflake** objects.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_22",
    "number": 22,
    "question": "Which parameter does help in loading files whose Metadata has expired?",
    "options": [
      {
        "id": 1,
        "value": "set LAST_MODIFIED_DATE to within 64 days"
      },
      {
        "id": 2,
        "value": "set LOAD_UNCERTAIN_FILES to TRUE"
      },
      {
        "id": 3,
        "value": "Set LAST_MODIFIED_DATE to more than 64 days"
      },
      {
        "id": 4,
        "value": "set LOAD_EXPIRED_FILES to TRUE"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "To load files whose Metadata has expired, set the LOAD_UNCERTAIN_FILES copy option to true.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_23",
    "number": 23,
    "question": "When should you avoid enabling `AUTO_SUSPEND`?",
    "options": [
      {
        "id": 1,
        "value": "You have a heavy, steady workload for the **Warehouse**."
      },
      {
        "id": 2,
        "value": "You should always enable `AUTO_SUSPEND` to save the compute costs."
      },
      {
        "id": 3,
        "value": "You require the **Warehouse** to be available with no delay or lag time"
      }
    ],
    "answers": [
      1,
      3
    ],
    "explanation": "You might want to consider disabling auto-suspend for a **Warehouse** if:\n\n- You have a heavy, steady workload for the **Warehouse**. \n- You require the **Warehouse** to be available with no delay or lag time.\n- Server provisioning is generally very fast (e.g. 1 or 2 seconds); \n\n> however, depending on the size of the **Warehouse** and the availability of servers to provision, it can take longer.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_24",
    "number": 24,
    "question": "You have a LARGE sized **Warehouse** ‘MY_WAREHOUSE‘. You want to change the size to SMALL. Which SQL statement will help you to change the size of **Warehouse**?",
    "options": [
      {
        "id": 1,
        "value": "`UPDATE` MY_WAREHOUSE SET SIZE = “SMALL“;"
      },
      {
        "id": 2,
        "value": "`ALTER` **Warehouse** MY_WAREHOUSE SET `WAREHOUSE_SIZE` = “SMALL“;"
      },
      {
        "id": 3,
        "value": "`ALTER` **Warehouse** MY_WAREHOUSE SET SIZE = “SMALL“;"
      },
      {
        "id": 4,
        "value": "`ALTER` MY_WAREHOUSE SET SIZE = “SMALL“;"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "`ALTER` **Warehouse** command can help change the **Warehouse** size",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_25",
    "number": 25,
    "question": "When a **Database** or **Schema** is cloned. What object is not cloned?",
    "options": [
      {
        "id": 1,
        "value": "Stored Procedures"
      },
      {
        "id": 2,
        "value": "Internal Stages"
      },
      {
        "id": 3,
        "value": "Pipes"
      },
      {
        "id": 4,
        "value": "Sequences"
      },
      {
        "id": 5,
        "value": "Internal Named Stages"
      }
    ],
    "answers": [
      5
    ],
    "explanation": "The following rules apply to cloning stages or objects that contain stages (i.e. databases and schemas):\n\n- Individual external named stages can be cloned; internal named stages cannot be cloned. \n- When cloning a **Database** or **Schema**: \n- External named stages that were present in the source when the cloning operation started are cloned. \n- Tables are cloned, which means their internal stages are also cloned. \n- Internal named stages are not cloned.\n- Regardless of how a **Stage** was cloned, the clone does not include any of the files from the source. i.e. all cloned stages are empty.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_26",
    "number": 26,
    "question": "Which key concepts should be considered when loading data into **Snowflake**?",
    "options": [
      {
        "id": 1,
        "value": "Transformation and error validation"
      },
      {
        "id": 2,
        "value": "File Format"
      },
      {
        "id": 3,
        "value": "All of these"
      },
      {
        "id": 4,
        "value": "**Stage** Object"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "All of these are key components for data loading. **Stage** is from where you are getting the data like AWS S3 external **Stage**. File Format tells **Snowflake** what type of data it is. Is it CSV, JSON, PARQUET, AVRO, ORC, XML etc. Transformation and error validation help getting the right data in right order and right form.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_27",
    "number": 27,
    "question": "What are the types of Caches? (Select 2)",
    "options": [
      {
        "id": 1,
        "value": "Metadata Cache"
      },
      {
        "id": 2,
        "value": "History Cache"
      },
      {
        "id": 3,
        "value": "Results Cache"
      },
      {
        "id": 4,
        "value": "Storage Cache"
      }
    ],
    "answers": [
      1,
      3
    ],
    "explanation": "Also, **Warehouse** Cache. **Warehouse** cache gets purged on suspension.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_28",
    "number": 28,
    "question": "Which role is inherited to every other role in the account?",
    "options": [
      {
        "id": 1,
        "value": "`PUBLIC` ROLE"
      },
      {
        "id": 2,
        "value": "PREFERED ROLE"
      },
      {
        "id": 3,
        "value": "CONTROL ROLE"
      },
      {
        "id": 4,
        "value": "DEFAULT ROLE"
      },
      {
        "id": 5,
        "value": "STANDARD ROLE"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "`PUBLIC` role is Pseudo-role, that is automatically granted to every user and every role in your account. The `PUBLIC` role can own securable objects, just like any other role; however, the objects owned by the role are, by definition, available to every other user and role in your account. This role is typically used in cases where explicit access control is not needed and all users are viewed as equal with regard to their access rights.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_29",
    "number": 29,
    "question": "Which SQL statements will need a running **Warehouse** and consume credit? Consider **Table** created as – `CREATE` OR REPLACE **Table** T1 ( ID number(2), Name varchar(20), Salary number (11,2) );",
    "options": [
      {
        "id": 1,
        "value": "`SELECT` MIN(ID) `FROM` T1;"
      },
      {
        "id": 2,
        "value": "`SELECT` MAX(ID) `FROM` T1;"
      },
      {
        "id": 3,
        "value": "`SELECT` AVG(ID) `FROM` T1;"
      },
      {
        "id": 4,
        "value": "`SELECT` COUNT(*) `FROM` T1;"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "Cloud services layer does not store average value of column data, and so, it gets computed and requires a running **Warehouse**.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_30",
    "number": 30,
    "question": "How is the most effective way to test if clustering a **Table** helped performance?",
    "options": [
      {
        "id": 1,
        "value": "Use SYSTEM$CLUSTERING_INFORMATION. Check the average_depth"
      },
      {
        "id": 2,
        "value": "Use the SYSTEM$CLUSTERING_DEPTH and check the depth of each column"
      },
      {
        "id": 3,
        "value": "Run a sample query before clustering and after to compare the results"
      },
      {
        "id": 4,
        "value": "Use SYSTEM$CLUSTERING_INFORMATION. Check the average_overlaps"
      },
      {
        "id": 5,
        "value": "Use SYSTEM$CLUSTERING_INFORMATION. Check the total_constant_partition_count"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "Also, **Snowflake** strongly recommends that you test a representative set of queries on the **Table** to establish some performance baselines.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_31",
    "number": 31,
    "question": "How many virtual warehouses can be created in a **Snowflake** Account?",
    "options": [
      {
        "id": 1,
        "value": "16"
      },
      {
        "id": 2,
        "value": "8"
      },
      {
        "id": 3,
        "value": "As many as needed"
      },
      {
        "id": 4,
        "value": "4"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "There is no limit. A customer can create as many as need.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_32",
    "number": 32,
    "question": "Which SQL statements will not consume **Warehouse** credit?",
    "options": [
      {
        "id": 1,
        "value": "`SHOW` **Warehouse** LIKE ‘%DEMO‘;"
      },
      {
        "id": 2,
        "value": "`DROP` **Warehouse** MY_WAREHOUSE;"
      },
      {
        "id": 3,
        "value": "`SHOW` WAREHOUSES;"
      },
      {
        "id": 4,
        "value": "`ALTER` **Warehouse** MY_WAREHOUSE SET `WAREHOUSE_SIZE` = “SMALL“;"
      }
    ],
    "answers": [
      1,
      2,
      3,
      4
    ],
    "explanation": "None of these SQL statements needs a running **Warehouse** as the result comes from Metadata of cloud services layer.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_33",
    "number": 33,
    "question": "Which SQL statements can work on a cloned **Table**?",
    "options": [
      {
        "id": 1,
        "value": "`SHOW` command"
      },
      {
        "id": 2,
        "value": "All of these"
      },
      {
        "id": 3,
        "value": "`DROP` **Table** command"
      },
      {
        "id": 4,
        "value": "`SELECT` command"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "All of these commands work with Cloned **Table** as normal **Table**.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_34",
    "number": 34,
    "question": "John ran a query which took around 30 mins. He referred to Query profiler, and found the ‘Bytes spilled to local storage‘ has big number. What could be the issue?",
    "options": [
      {
        "id": 1,
        "value": "John is using very large **Warehouse**"
      },
      {
        "id": 2,
        "value": "John should contact **Snowflake** Personnel"
      },
      {
        "id": 3,
        "value": "John is using comparatively smaller **Warehouse**"
      },
      {
        "id": 4,
        "value": "**Warehouse** size has no impact on Bytes spilling"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "If a node has insufficient memory to complete its portion of a query, it will “spill“ to local SSD storage. This can negatively impact performance, but is sometimes acceptable. If a node has insufficient local SSD storage to complete its portion of a query, it will “spill“ to remote cloud storage. This is almost always very bad for performance. The solution in either case is… to simplify the SQL query or increase the **Warehouse** size (to increase scarce resources).",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_35",
    "number": 35,
    "question": "Which of these must return a value?",
    "options": [
      {
        "id": 1,
        "value": "Both"
      },
      {
        "id": 2,
        "value": "Stored Procedure"
      },
      {
        "id": 3,
        "value": "User-Defined Function"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "Stored Procedure may or may not return the value but UDF must return the value.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_36",
    "number": 36,
    "question": "Which type of **View** has an extra layer of protection to hide the SQL code from unauthorized viewing?",
    "options": [
      {
        "id": 1,
        "value": "Permanent"
      },
      {
        "id": 2,
        "value": "Secure"
      },
      {
        "id": 3,
        "value": "Standard"
      },
      {
        "id": 4,
        "value": "Materialized"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "Some of the internal optimizations for views require access to the underlying data in the base tables for the **View**. This access might allow data that is hidden from users of the **View** to be exposed through user code, such as user-defined functions, or other programmatic methods. Secure views do not utilize these optimizations, ensuring that users have no access to the underlying data.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_37",
    "number": 37,
    "question": "What data structure types can be ingested into a VARIANT column in a **Snowflake** **Table**? (Check all that apply)",
    "options": [
      {
        "id": 1,
        "value": "ORC"
      },
      {
        "id": 2,
        "value": "JSON"
      },
      {
        "id": 3,
        "value": "PARQUET"
      },
      {
        "id": 4,
        "value": "AVRO"
      },
      {
        "id": 5,
        "value": "XML"
      }
    ],
    "answers": [
      1,
      2,
      3,
      4,
      5
    ],
    "explanation": "**Snowflake** supports all these types of Semi-Structured data. \n- **JSON (JavaScript Object Notation)** is a lightweight, plain-text, data-interchange format based on a subset of the JavaScript Programming Language. Avro is an open-source data serialization and RPC framework originally developed for use with Apache Hadoop. It utilizes schemas defined in JSON to produce serialized data in a compact binary format. \n- ORC is used to store Hive data, the **ORC (Optimized Row Columnar)** file format was designed for efficient compression and improved performance for reading, writing, and processing data over earlier Hive file formats. \n- **Parquet** is a compressed, efficient columnar data representation designed for projects in the Hadoop ecosystem. The file format supports complex nested data structures and uses Dremel record shredding and assembly algorithms. \n- **XML (Extensible Markup Language)** is a markup language that defines a set of rules for encoding documents. It was originally based on SGML, another markup language developed for standardizing the structure and elements that comprise a document.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_38",
    "number": 38,
    "question": "How many maximum columns (or expressions) are recommended for a cluster key?",
    "options": [
      {
        "id": 1,
        "value": "7 to 8"
      },
      {
        "id": 2,
        "value": "Higher the number of columns (or expressions) in the key, better will be the performance"
      },
      {
        "id": 3,
        "value": "12 to 16"
      },
      {
        "id": 4,
        "value": "3 to 4"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "A single **Clustering Key** can contain one or more columns or expressions. For most tables, **Snowflake** recommends a maximum of 3 or 4 columns (or expressions) per key. Adding more than 3-4 columns tends to increase costs more than benefits.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_39",
    "number": 39,
    "question": "**Snowflake** Administrators should utilize resource monitors to help control costs and avoid unexpected credit usage. Which of the following actions can **Snowflake**‘s **Resource Monitor** triggers initiate automatically? (Check all that apply)",
    "options": [
      {
        "id": 1,
        "value": "Trigger alert notifications for high usage"
      },
      {
        "id": 2,
        "value": "Roll over query executions to under-utilized warehouses"
      },
      {
        "id": 3,
        "value": "Trigger **Warehouse** suspension for high usage"
      },
      {
        "id": 4,
        "value": "Impose limits on the number of credits that warehouses consume each month"
      }
    ],
    "answers": [
      1,
      3,
      4
    ],
    "explanation": "The assigned warehouses gets suspended after all running queries complete. It doesn‘t roll over query executions to under-utilized warehouses.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_40",
    "number": 40,
    "question": "Which are the correct statements about **Snowflake** data Storage?",
    "options": [
      {
        "id": 1,
        "value": "Encryption on demand"
      },
      {
        "id": 2,
        "value": "Automatic Micro-partitioning"
      },
      {
        "id": 3,
        "value": "Hybrid Columnar Storage"
      },
      {
        "id": 4,
        "value": "Natural data clustering and optimization"
      }
    ],
    "answers": [
      2,
      3,
      4
    ],
    "explanation": "**Snowflake** stores the data in hybrid columnar format in micro-partitions. **Snowflake** has some level of natural data clustering and optimization capabilities. All the data in rest or in motion are always encrypted.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_41",
    "number": 41,
    "question": "Which of the following are performed by the Cloud Services layer? (Select 4)",
    "options": [
      {
        "id": 1,
        "value": "User Authentication"
      },
      {
        "id": 2,
        "value": "Data Security"
      },
      {
        "id": 3,
        "value": "Metadata Management"
      },
      {
        "id": 4,
        "value": "Metadata Storage"
      },
      {
        "id": 5,
        "value": "Availability Zone Management"
      }
    ],
    "answers": [
      1,
      2,
      3,
      4
    ],
    "explanation": "Availability zone management is managed by Cloud Provider (like, AWS, AZURE, GCP) not by **Snowflake** Cloud Services layer.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_42",
    "number": 42,
    "question": "Auto-suspend and auto-resume apply only to the entire **Warehouse** and not to the individual clusters in the **Warehouse**.",
    "options": [
      {
        "id": 1,
        "value": "FALSE"
      },
      {
        "id": 2,
        "value": "TRUE"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "TRUE for both type of STANDARD and MULTI-CLUSTER Warehouses. For a multi-cluster **Warehouse** :\n\n- Auto-suspend only occurs when the minimum number of clusters is running and there is no activity for the specified period of time.\n- The minimum is typically 1 (cluster), but could be more than 1.\n- Auto-resume only applies when the entire **Warehouse** is suspended (i.e. no clusters are running).",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_43",
    "number": 43,
    "question": "What is the maximum Time-Travel retention period of Standard Edition?",
    "options": [
      {
        "id": 1,
        "value": "90 days"
      },
      {
        "id": 2,
        "value": "0 days"
      },
      {
        "id": 3,
        "value": "7 days"
      },
      {
        "id": 4,
        "value": "1 day"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "For **Snowflake** Standard Edition, the retention period can be set to 0 (or unset back to the default of 1 day) at the account and object level (i.e. databases, schemas, and tables).",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_44",
    "number": 44,
    "question": "Stages which do not support File Formats are :",
    "options": [
      {
        "id": 1,
        "value": "Internal named **Stage**"
      },
      {
        "id": 2,
        "value": "External Named **Stage**"
      },
      {
        "id": 3,
        "value": "Internal User **Stage**"
      },
      {
        "id": 4,
        "value": "Internal **Table** **Stage**"
      }
    ],
    "answers": [
      3,
      4
    ],
    "explanation": "**Table** **Stage** and User **Stage** are created automatically whenever a **Table** is created or a new user is added into the system respectively. They dont support setting up the file format.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_45",
    "number": 45,
    "question": "Normally a **Warehouse** begins to consume credits once all the servers are provisioned for the **Warehouse**.",
    "options": [
      {
        "id": 1,
        "value": "TRUE"
      },
      {
        "id": 2,
        "value": "FALSE"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "A **Warehouse** begins to consume credits once all the servers are provisioned for the **Warehouse**. \n- In a rare instance when some of the servers fail to provision, the **Warehouse** only consumes credits for the provisioned servers. \n- Once the remaining servers are successfully provisioned, the **Warehouse** starts consuming credits for all requested servers.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_46",
    "number": 46,
    "question": "Which actions are not supported with shared data?",
    "options": [
      {
        "id": 1,
        "value": "Can be re-shared by data consumer"
      },
      {
        "id": 2,
        "value": "**Time Travel** for a shared **Database** or any schemas/tables in the **Database**"
      },
      {
        "id": 3,
        "value": "Creating a clone of a shared **Database** or any schemas/tables in the **Database**"
      },
      {
        "id": 4,
        "value": "Editing the comments for a shared **Database**"
      }
    ],
    "answers": [
      1,
      2,
      3,
      4
    ],
    "explanation": "Share is just for read, not for cloning or time-travel query or any edit.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_47",
    "number": 47,
    "question": "How much is the Time-Travel retention period of Permanent **Table** (in Standard Edition)?",
    "options": [
      {
        "id": 1,
        "value": "1 day"
      },
      {
        "id": 2,
        "value": "7 days"
      },
      {
        "id": 3,
        "value": "0 days"
      },
      {
        "id": 4,
        "value": "90 days"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "Permanent **Table** has maximum of 1 day for Standard Edition and maximum of 90 days Time-Travel retention period for all other **Snowflake** editions.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_48",
    "number": 48,
    "question": "Scaling up can be configured as automated process.",
    "options": [
      {
        "id": 1,
        "value": "FALSE"
      },
      {
        "id": 2,
        "value": "TRUE"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "Scaling Up is a manual process as of now.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_49",
    "number": 49,
    "question": "Monica is an admin and wants to see the usage of **Fail-safe**. How can she get details on **Fail-safe** usage?",
    "options": [
      {
        "id": 1,
        "value": "Admins can **View** **Fail-safe** use in the **Snowflake** Web UI under Account > Billing & Usage"
      },
      {
        "id": 2,
        "value": "None of these"
      },
      {
        "id": 3,
        "value": "Monica should contact **Snowflake** support"
      },
      {
        "id": 4,
        "value": "Fail Safe usage details are never available to customer"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "**Fail-safe** usage is available in Account‘s Billing & Usage section.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_50",
    "number": 50,
    "question": "As an `ACCOUNTADMIN`, how can you find the credit usage of a **Warehouse**?",
    "options": [
      {
        "id": 1,
        "value": "Run SQL query on ACCOUNT_USAGE **Table** under **Snowflake** **Database**"
      },
      {
        "id": 2,
        "value": "Run SQL query on WAREHOUSE_METERING_HISTORY **View** under ACCOUNT_USAGE **Schema**"
      },
      {
        "id": 3,
        "value": "Using Web interface > Account > Usage"
      },
      {
        "id": 4,
        "value": "Run SQL query on METERING_HISTORY **View** under ACCOUNT_USAGE **Schema**"
      }
    ],
    "answers": [
      2,
      3,
      4
    ],
    "explanation": "Using Web interface > Account > Usage section. AND using SQL \n- ACCOUNT_USAGE:\n\n- Query the METERING_HISTORY to **View** hourly usage for an account. \n- Query the METERING_DAILY_HISTORY to **View** daily usage for an account. \n- Query the WAREHOUSE_METERING_HISTORY to **View** usage for a **Warehouse**. \n- Query the QUERY_HISTORY to **View** usage for a job.\n- INFORMATION_SCHEMA: \n- Query the QUERY_HISTORY **Table** function.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_51",
    "number": 51,
    "question": "Choose the right hierarchy of **Snowflake** objects from the given options.",
    "options": [
      {
        "id": 1,
        "value": "ACCOUNT > **Database** > **Schema** > **Table**"
      },
      {
        "id": 2,
        "value": "ACCOUNT > **Schema** > **Database** > **Table**"
      },
      {
        "id": 3,
        "value": "ACCOUNT > **Database** > **Stage** > **Schema**"
      },
      {
        "id": 4,
        "value": "ACCOUNT > **Stage** > **Database** > **Schema** > **Table**"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "The top-most container is the customer ACCOUNT, within which resides **Database**. Each **Database** can have 1 or more **Schema** and each **Schema** can have one or more TABLES.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_52",
    "number": 52,
    "question": "Zero Copy Cloning allows users to have multiple copies of your data without the additional cost of storage usually associated with replicating data. Which other statements about the Cloning features in **Snowflake** are True?",
    "options": [
      {
        "id": 1,
        "value": "Cloning is an efficient and cost effective approach for code migration for Agile Release Management"
      },
      {
        "id": 2,
        "value": "Clone is a point in time version  of the **Table** data as of the time the clone was made"
      },
      {
        "id": 3,
        "value": "The clone is a pointer to the original **Table** data"
      },
      {
        "id": 4,
        "value": "Any new record in the parent **Table** gets available in the cloned **Table**"
      }
    ],
    "answers": [
      1,
      2,
      3
    ],
    "explanation": "New record doesn‘t get available in cloned **Table** because cloning is “point in time version“ means only the data which were available at the time of cloning get available in cloned **Table**.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_53",
    "number": 53,
    "question": "Which objects are securable objects in **Snowflake**?",
    "options": [
      {
        "id": 1,
        "value": "**Table**"
      },
      {
        "id": 2,
        "value": "**Database**"
      },
      {
        "id": 3,
        "value": "File Format"
      },
      {
        "id": 4,
        "value": "**Warehouse**"
      }
    ],
    "answers": [
      1,
      2,
      3,
      4
    ],
    "explanation": "All of these are securable objects in **Snowflake**. Securable Object is an entity to which access can be granted. Unless allowed by a grant, access will be denied.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_54",
    "number": 54,
    "question": "What level of Privilege do you need to **View** **Resource Monitor**?",
    "options": [
      {
        "id": 1,
        "value": "OWNERSHIP"
      },
      {
        "id": 2,
        "value": "OPERATE"
      },
      {
        "id": 3,
        "value": "MONITOR"
      },
      {
        "id": 4,
        "value": "USAGE"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "MONITOR Privilege can enable you to **View** a **Resource Monitor**.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_55",
    "number": 55,
    "question": "**Snowflake** supports many methods of authentication. Which are the supported authentication methods in ALL **Snowflake** Editions?",
    "options": [
      {
        "id": 1,
        "value": "Only MFA is supported by all the **Snowflake** editions"
      },
      {
        "id": 2,
        "value": "MFA (Multi-factor authentication)"
      },
      {
        "id": 3,
        "value": "OAuth"
      },
      {
        "id": 4,
        "value": "Only MFA and SSO are supported by all the **Snowflake** editions"
      },
      {
        "id": 5,
        "value": "SSO"
      }
    ],
    "answers": [
      2,
      3,
      5
    ],
    "explanation": "MFA, Oauth, SSO \n- all these methods are supported by all the **Snowflake** editions.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_56",
    "number": 56,
    "question": "When a **Warehouse** is resized, which queries make use of the new size?",
    "options": [
      {
        "id": 1,
        "value": "Only currently running queries"
      },
      {
        "id": 2,
        "value": "Only subsequent queries"
      },
      {
        "id": 3,
        "value": "Both current and subsequent queries"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "The current running queries keep running on the old size server. Only subsequent queries run on new Sized Virtual **Warehouse**. If queries processed by a **Warehouse** are running slowly, you can always resize the **Warehouse** to provision more servers. The additional servers do not impact any queries that are already running, but they are available for use by any queries that are queued or newly submitted.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_57",
    "number": 57,
    "question": "What actions can be performed when an error is encountered while loading data from a file?",
    "options": [
      {
        "id": 1,
        "value": "Continue loading the file."
      },
      {
        "id": 2,
        "value": "Abort the load operation"
      },
      {
        "id": 3,
        "value": "skip file when the number of errors in the file is equal to 10"
      },
      {
        "id": 4,
        "value": "Skip file"
      }
    ],
    "answers": [
      1,
      2,
      3,
      4
    ],
    "explanation": "All these actions can be taken. You can specify one or more of the following copy options :\n\n- CONTINUE SKIP_FILE SKIP_FILE_(e.g.\n- SKIP_FILE_10) SKIP_FILE_% (e.g.\n- SKIP_FILE_10%) ABORT_STATEMENT",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_58",
    "number": 58,
    "question": "Please choose the correct statements about Micro-Partitions (Select 2)",
    "options": [
      {
        "id": 1,
        "value": "**Snowflake** micro-partitions are derived automatically"
      },
      {
        "id": 2,
        "value": "Micro-partitions are small in size (50 to 500 MB, after compression)"
      },
      {
        "id": 3,
        "value": "**Snowflake** automatically determines the most efficient compression algorithm for the columns in each **Micro-partition**."
      },
      {
        "id": 4,
        "value": "Micro-partitions can‘t overlap in their range of values"
      }
    ],
    "answers": [
      1,
      3
    ],
    "explanation": "**Snowflake** takes care of all the compression algorithm. Micro-partitions can overlap in their range of values, which, combined with their uniformly small size, helps prevent skew. The micro-partitions are small in size (50 to 500 MB, BEFORE compression).",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_59",
    "number": 59,
    "question": "Which cache type gets purged regularly?",
    "options": [
      {
        "id": 1,
        "value": "Results Cache"
      },
      {
        "id": 2,
        "value": "Metadata Cache"
      },
      {
        "id": 3,
        "value": "**Warehouse** Cache"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "**Result Cache** gets suspended every 24 hours unless queried again within 24 hours. It can go until 31 days. If you also see option for **Warehouse** and it is mentioned that `AUTO_SUSPEND` is set then **Warehouse** Cache will be you best answer.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_60",
    "number": 60,
    "question": "If a DBA_ROLE creates a **Database**. Later the DBA_ROLE was dropped. Who will own the **Database** now which was created by DBA_ROLE?",
    "options": [
      {
        "id": 1,
        "value": "No one can access"
      },
      {
        "id": 2,
        "value": "**Database** will be dropped"
      },
      {
        "id": 3,
        "value": "Role who dropped the DBA_ROLE"
      },
      {
        "id": 4,
        "value": "DBA_ROLE cant be dropped as it is the owner of the **Database**."
      }
    ],
    "answers": [
      3
    ],
    "explanation": "The role who dropped the DBA_ROLE will own that **Database**. (IMPORTANT QUESTION)",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  }
];
