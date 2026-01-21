// Auto-generated questions data
const QUESTIONS_DATA = [
  {
    "id": "Test 1_1_0",
    "number": 1,
    "question": "Snowflake Administrators should utilize resource monitors to help control costs and avoid unexpected credit usage. Which of the following actions can Snowflake‘s resource monitor triggers initiate automatically? (Check all that apply)",
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
        "value": "Trigger warehouse suspension for high usage"
      }
    ],
    "answers": [
      2,
      3,
      4
    ],
    "explanation": "Resource Monitor details for snowflake can be found at link –https://docs.snowflake.com/en/user-guide/resource-monitors.html",
    "reference": "https://docs.snowflake.com/en/user-guide/resource-monitors.html",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_2_1",
    "number": 2,
    "question": "Snowflake is what kind of offering?",
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
    "explanation": "Snowflake is an analytic data warehouse provided as Software-as-a-Service (SaaS). Snowflake provides a data warehouse that is faster, easier to use, and far more flexible than traditional data warehouse offerings.Snowflakes data warehouse is not built on an existing database or big data software platform such as Hadoop. The Snowflake data warehouse uses a new SQL database engine with a unique architecture designed for the cloud. To the user, Snowflake has many similarities to other enterprise data warehouses, but also has additional functionality and unique capabilities.Refer Link -https://docs.snowflake.com/en/user-guide/intro-key-concepts.html",
    "reference": "",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_3_2",
    "number": 3,
    "question": "Snowflake account hosted on AWS cannot load data from a file that is staged on GCP or Azure",
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
    "explanation": "Irrespective of which ever underlying cloud service provider is used for Snowflake, there is a provision to create an external stage that can load data in snowflake from AWS, Azure or Google Cloud.",
    "reference": "",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_4_3",
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
    "explanation": "By default, each user and table in Snowflake is automatically allocated an internal stage for staging data files to be loaded. In addition, you can.Refer Link –https://docs.snowflake.com/en/user-guide/data-load-local-file-system-create-stage.html",
    "reference": "https://docs.snowflake.com/en/user-guide/data-load-local-file-system-create-stage.html",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_5_4",
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
    "explanation": "The number of load operations that run in parallel cannot exceed the number of data files to be loaded. To optimize the number of parallel operations for a load, we recommend aiming to produce data files roughly 100-250 MB (or larger) in size compressed.Refer Link –https://docs.snowflake.com/en/user-guide/data-load-considerations-prepare.html",
    "reference": "https://docs.snowflake.com/en/user-guide/data-load-considerations-prepare.html",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_6_5",
    "number": 6,
    "question": "Snowflake Instances in different regions require separate accounts",
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
    "explanation": "Same account cannot be hosted on multiple regions. While setting up snowflake account we get an option to select only one region.",
    "reference": "",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_7_6",
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
    "explanation": "Refer Link for Snowflake Share details –https://docs.snowflake.com/en/user-guide/data-sharing-intro.html",
    "reference": "https://docs.snowflake.com/en/user-guide/data-sharing-intro.html",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_8_7",
    "number": 8,
    "question": "Mark the types of Stages available in Snowflake",
    "options": [
      {
        "id": 1,
        "value": "External Stage"
      },
      {
        "id": 2,
        "value": "S3 Stage"
      },
      {
        "id": 3,
        "value": "Internal Stage"
      },
      {
        "id": 4,
        "value": "User Stage"
      },
      {
        "id": 5,
        "value": "Table Stage"
      },
      {
        "id": 6,
        "value": "Role Stage"
      }
    ],
    "answers": [
      1,
      3,
      4,
      5
    ],
    "explanation": "Refer Link to get details of different stages –https://docs.snowflake.com/en/user-guide/data-load-local-file-system-create-stage.html",
    "reference": "https://docs.snowflake.com/en/user-guide/data-load-local-file-system-create-stage.html",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_9_8",
    "number": 9,
    "question": "Which command is used to download the data from Snowflake Stage",
    "options": [
      {
        "id": 1,
        "value": "DOWNLOAD"
      },
      {
        "id": 2,
        "value": "PUT"
      },
      {
        "id": 3,
        "value": "GET"
      },
      {
        "id": 4,
        "value": "RETRIEVE"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "Get command is used to download data files from one of the following Snowflake stages to a local directory/folder on a client machine:Named internal stage.Internal stage for a specified table.Internal stage for the current user.Refer Link -https://docs.snowflake.com/en/sql-reference/sql/get.html",
    "reference": "",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_10_9",
    "number": 10,
    "question": "If you find a data-related tool that is not listed as part of the Snowflake ecosystem, what industry standard options could you check for as a way to easily connect to Snowflake?",
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
    "explanation": "Snowflake provides ODBC and JDBC drivers to connect, and hence any tools having a standard support for ODBC / JDBC can connect to snowflake, without a need of explicit connectors.",
    "reference": "",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_11_10",
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
    "id": "Test 1_12_11",
    "number": 12,
    "question": "A CAST command will force a value to be output as a certain datatype. Which of the following symbols will result in the “castcolumn“ being output using the VARCHAR datatype?",
    "options": [
      {
        "id": 1,
        "value": "SELECT VARCHAR(castcolumn)"
      },
      {
        "id": 2,
        "value": "SELECT castcolumn as VARCHAR"
      },
      {
        "id": 3,
        "value": "SELECT castcolumn||VARCHAR"
      },
      {
        "id": 4,
        "value": "SELECT castcolumn::VARCHAR"
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
    "id": "Test 1_13_12",
    "number": 13,
    "question": "Which SQL statements can work on a cloned Table?",
    "options": [
      {
        "id": 1,
        "value": "SELECT command"
      },
      {
        "id": 2,
        "value": "SHOW command"
      },
      {
        "id": 3,
        "value": "All of the above"
      },
      {
        "id": 4,
        "value": "DROP table command"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "Clone object is a separate object, on which all types of database table operation can be performed. Just that once there are changes made to the clone it start incurring storage cost, which is not the case when it is first cloned, which is why it is called zero copy cloning.",
    "reference": "",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_14_13",
    "number": 14,
    "question": "Which of the following Snowflake Editions provides automatic encryption of all data?",
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
    "explanation": "Refer table in this link –https://docs.snowflake.com/en/user-guide/intro-editions.html#virtual-private-snowflake-vps",
    "reference": "https://docs.snowflake.com/en/user-guide/intro-editions.html#virtual-private-snowflake-vps",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_15_14",
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
    "explanation": "Scale Out & Scale in is the change in the number of clusters serving the query workload on snowflake. The process of scaling out / in is an automated process, and based on the scaling policy (Economy / Standard) that is defined and the workload on the warehouse,  this change in the number of cluster happens automatically.",
    "reference": "",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_16_15",
    "number": 16,
    "question": "Which of the following are Snowflake view types?",
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
    "explanation": "Refer section for details about snowflake views –https://docs.snowflake.com/en/user-guide/views-introduction.html",
    "reference": "https://docs.snowflake.com/en/user-guide/views-introduction.html",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_17_16",
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
    "explanation": "Refer Link for details –https://docs.snowflake.com/en/user-guide/data-sharing-intro.html",
    "reference": "https://docs.snowflake.com/en/user-guide/data-sharing-intro.html",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_18_17",
    "number": 18,
    "question": "How many number of shares can be created in a Snowflake Account?",
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
    "explanation": "Snowflake does not place any hard limits on the number of shares you can create or the number of accounts you can add to a share.Refer link for details –https://docs.snowflake.com/en/user-guide/data-sharing-intro.html",
    "reference": "https://docs.snowflake.com/en/user-guide/data-sharing-intro.html",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_19_18",
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
    "explanation": "Snowflake does not place any hard limits on the number of shares you can create or the number of accounts you can add to a share.Refer Link for details –https://docs.snowflake.com/en/user-guide/data-sharing-intro.html",
    "reference": "https://docs.snowflake.com/en/user-guide/data-sharing-intro.html",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_20_19",
    "number": 20,
    "question": "When a data is shared with an existing snowflake customer, the compute is charged to",
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
    "explanation": "Since the consumer is also a snowflake customer they will use there own compute resources to execute the query on shared database, and hence the charges will be applied to the consumer only.",
    "reference": "",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_21_20",
    "number": 21,
    "question": "When a data is shared with an non snowflake customer, the compute is charged to",
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
    "explanation": "Since the consumer is not a snowflake customer, the provider himself needs to create a reader account for the consumer, and that reader account uses the warehouse provided by provider only to execute the queries.",
    "reference": "",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_22_21",
    "number": 22,
    "question": "Which of the below is not a role available when Snowflake account is created initially",
    "options": [
      {
        "id": 1,
        "value": "Accountadmin"
      },
      {
        "id": 2,
        "value": "Sysadmin"
      },
      {
        "id": 3,
        "value": "Useradmin"
      },
      {
        "id": 4,
        "value": "Developer"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "There is no default developer role available as such when snowflake account is created. Only roles available are PUBLIC, USERADMIN, SYSADMIN, SECURITYADMIN, ACCOUNTADMIN",
    "reference": "",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_23_22",
    "number": 23,
    "question": "In the Snowflake container hierarchy, what container is represented as a URL (for example:https://AB12345.snowflakecomputing.com)?",
    "options": [
      {
        "id": 1,
        "value": "Database"
      },
      {
        "id": 2,
        "value": "Schema"
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
    "explanation": "The Snowflake URL points to the snowflake account, in which a user can login and access Database, Schema and role",
    "reference": "",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_24_23",
    "number": 24,
    "question": "MFA can be used for connecting to Snowflake via the Snowflake JDBC driver",
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
    "id": "Test 1_25_24",
    "number": 25,
    "question": "Which of the following Snowflake Editions automatically store data in an encrypted state?",
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
    "explanation": "Snowflake stores data in encrypted format in all editions.",
    "reference": "",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_26_25",
    "number": 26,
    "question": "What are the names of the three Snowflake Editions offered when signing up for a trial account?",
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
    "explanation": "There is no option like Free Tier Basic or Ultra available for snowflake editions.",
    "reference": "",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_27_26",
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
    "id": "Test 1_28_27",
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
    "explanation": "Refer Link fpr the BI tool list that provide native connectivity to snowflake –https://docs.snowflake.com/en/user-guide/ecosystem-bi.html",
    "reference": "https://docs.snowflake.com/en/user-guide/ecosystem-bi.html",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_29_28",
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
        "value": "Snowflake can carry out transformations after loading files staged by partner software (ELT)."
      },
      {
        "id": 4,
        "value": "Snowflake must be used to extract data from other databases but Data Integration Tech Partner software can load data"
      },
      {
        "id": 5,
        "value": "Snowflake can be used to extract data from other databases but Data Integration Tech Partner software must be used to do transformations."
      },
      {
        "id": 6,
        "value": "Data Integration Tech Partner software should be used to deliver data to stages, Snowflake is then used to load the data"
      }
    ],
    "answers": [
      1,
      2,
      3,
      6
    ],
    "explanation": "Refer link for details of data integration tech partners –https://docs.snowflake.com/en/user-guide/ecosystem-etl.html",
    "reference": "https://docs.snowflake.com/en/user-guide/ecosystem-etl.html",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_30_29",
    "number": 30,
    "question": "Query execution is performed by which layers of Snowflake architecture",
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
    "id": "Test 1_31_30",
    "number": 31,
    "question": "Which file format option should be enabled while loading a JSON file to remove the outer most array structure and load the records in separate table rows",
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
    "explanation": "Refer Link –https://docs.snowflake.com/en/user-guide/semistructured-considerations.htmlIn general, JSON and Avro data sets are a simple concatenation of multiple documents. The JSON or Avro output from some software is composed of a single huge array containing multiple records. There is no need to separate the documents with line breaks or commas, though both are supported.Instead, we recommend enabling the STRIP_OUTER_ARRAY file format option for the COPY INTO",
    "reference": "https://docs.snowflake.com/en/user-guide/semistructured-considerations.html",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_32_31",
    "number": 32,
    "question": "To configure an External Stage you need to define the stage object in Snowflake. You also need two additional components. What are they?",
    "options": [
      {
        "id": 1,
        "value": "Stage Admin Password"
      },
      {
        "id": 2,
        "value": "Cloud storage location (e.g. S3 Bucket)"
      },
      {
        "id": 3,
        "value": "Stage Admin Username"
      },
      {
        "id": 4,
        "value": "Cloud access credentials (e.g. IAM User and Policy)"
      },
      {
        "id": 5,
        "value": "Snowflake External Stage Password Authentication Certificate"
      }
    ],
    "answers": [
      2,
      4
    ],
    "explanation": "Below is sample command for creating an external stage –create or replace stage my_s3_stage url=‘s3://mybucket/encrypted_files/‘credentials=(aws_key_id=‘1a2b3c‘ aws_secret_key=‘4x5y6z‘)encryption=(master_key = ‘eSxX0jzYfIamtnBKOEOwq80Au6NbSgPH5r4BDDwOaO8=‘)file_format = my_csv_format;",
    "reference": "",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_33_32",
    "number": 33,
    "question": "Out of below four options, which options require a running warehouse when retrieving data from them?",
    "options": [
      {
        "id": 1,
        "value": "Results Cache"
      },
      {
        "id": 2,
        "value": "Local Disk Cache"
      },
      {
        "id": 3,
        "value": "Warehouse Cache"
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
    "explanation": "Metadata and result cache do not require a running warehouse as the results are fetched from services layer itself, and hence the compute layer is not required.",
    "reference": "",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_34_33",
    "number": 34,
    "question": "Check all true statements about Fail-safe:",
    "options": [
      {
        "id": 1,
        "value": "The data stored as part of fail-safe is part of storage costs charged to customers"
      },
      {
        "id": 2,
        "value": "Fail-safe is not available for tables that have Time Travel."
      },
      {
        "id": 3,
        "value": "Fail-safe is a reliable way to create Dev/Test/QA and other environments"
      },
      {
        "id": 4,
        "value": "Only a Snowflake employee can recover data from fail-safe storage"
      }
    ],
    "answers": [
      1,
      4
    ],
    "explanation": "Refer Fail Safe section of snowflake documentation –https://docs.snowflake.com/en/user-guide/data-failsafe.html",
    "reference": "https://docs.snowflake.com/en/user-guide/data-failsafe.html",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_35_34",
    "number": 35,
    "question": "With Snowflake, the customer needs to perform hardware maintenance, upgrades or regular patches",
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
    "explanation": "Snowflake is a Saas (Software as a service) solution, and customer do not neet to worry about an hardware maintenance or upgrades",
    "reference": "",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_36_35",
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
    "id": "Test 1_37_36",
    "number": 37,
    "question": "True or false: The Query Profiler view is only available for completed queries.",
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
    "explanation": "This can be tried out. Execute one query and while the query is executing you can go to query history tab and click on query_id to get the query profiler view even of the executing query.",
    "reference": "",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_38_37",
    "number": 38,
    "question": "Which of the below is role is automatically granted to every user and role in the account",
    "options": [
      {
        "id": 1,
        "value": "Sysadmin"
      },
      {
        "id": 2,
        "value": "Developer"
      },
      {
        "id": 3,
        "value": "Useradmin"
      },
      {
        "id": 4,
        "value": "Public"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "Public is a default role for any new user that is created in Snowflake.",
    "reference": "",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_39_38",
    "number": 39,
    "question": "With Time Travel,  a Snowflake administrator can, analyze data manipulation over specified periods of time",
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
    "explanation": "Snowflake Time Travel enables accessing historical data (i.e. data that has been changed or deleted) at any point within a defined period. It serves as a powerful tool for performing the following tasks:Restoring data-related objects (tables, schemas, and databases) that might have been accidentally or intentionally deleted.Duplicating and backing up data from key points in the past.Analyzing data manipulation over specified periods of time.",
    "reference": "",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_40_39",
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
    "explanation": "Scale up and Scale down refers to changing the size of the warehouse. The warehouse size is changed to deal with the complexity of the queries being executed on the warehouse. Snowflake do not provide any out of the box capability to increase or decrease the warehouse size based on the type of queries, and hence it has to be done either manually through Snowflake Web UI, or by writing a command / script to manage the warehouse sizes as per the workload.",
    "reference": "",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_41_40",
    "number": 41,
    "question": "True or false: Snowflake caches are automatically invalidated if the underlying data changes.",
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
    "id": "Test 1_42_41",
    "number": 42,
    "question": "If a table is cloned with COPY GRANTS option specified, then the clone object inherits any explicit access privileges granted on the original table, but does not inherit any future grants defined for the table in the schema",
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
    "explanation": "This can be tried out, by executing a create clone statement with COPY GRANT option.  When the statement is executed you can see that the clone table will also have same access privilege as that of original object, other than the future grants. Future grants will need to be explicitly specified to the clone object.",
    "reference": "",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_43_42",
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
    "id": "Test 1_44_43",
    "number": 44,
    "question": "Data can be shared READ-ONLY across Snowflake accounts and Shared Data can also be cloned",
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
    "id": "Test 1_45_44",
    "number": 45,
    "question": "Snowflake compute costs depend on which of the following?",
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
    "explanation": "Snowflake Compute cost depends only on the size of the warehouse, number of clusters that are running and for the amount of time the warehouse was up and running (i.e. not in suspended state). It doesnt matter how many queries are getting executed or total number of warehouses in the account.",
    "reference": "",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_46_45",
    "number": 46,
    "question": "What technique does Snowflake use to limit the number of micro-partitions scanned by each query?",
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
    "explanation": "Refer link for details –https://docs.snowflake.com/en/user-guide/tables-clustering-micropartitions.html",
    "reference": "https://docs.snowflake.com/en/user-guide/tables-clustering-micropartitions.html",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_47_46",
    "number": 47,
    "question": "How often does Snowflake release new features?",
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
    "explanation": "Refer Link for details regarding Snowflake Releases –https://docs.snowflake.com/en/user-guide/intro-releases.html",
    "reference": "https://docs.snowflake.com/en/user-guide/intro-releases.html",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_48_47",
    "number": 48,
    "question": "Which of the following techniques can be used in Snowflake to improve query performance?",
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
    "explanation": "In Snowflake we can only define cluster keys for improving query performance on huge tables. Rest of the options are not available in snowflake. For details of clustering refer link –https://docs.snowflake.com/en/user-guide/tables-clustering-keys.html",
    "reference": "https://docs.snowflake.com/en/user-guide/tables-clustering-keys.html",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_49_48",
    "number": 49,
    "question": "Data from Fail-Safe can only be accessed / restored by Snowflake Employees",
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
    "explanation": "Fail-safe is not provided as a means for accessing historical data after the Time Travel retention period has ended. It is for use only by Snowflake to recover data that may have been lost or damaged due to extreme operational failures.Refer link for details on fail safe –https://docs.snowflake.com/en/user-guide/data-failsafe.html",
    "reference": "https://docs.snowflake.com/en/user-guide/data-failsafe.html",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_50_49",
    "number": 50,
    "question": "Cloud storage providers must be linked to internal stage objects",
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
    "explanation": "Cloud storage providers must be linked to external stage objects. For internal stage, there is no need to explicitly specify any cloud storage provider like AWS, Azure, GCP.",
    "reference": "",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_51_50",
    "number": 51,
    "question": "Snowflake Stages can be defined as either External or Internal.",
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
    "explanation": "Refer Link –https://docs.snowflake.com/en/user-guide/data-load-local-file-system-create-stage.html",
    "reference": "https://docs.snowflake.com/en/user-guide/data-load-local-file-system-create-stage.html",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_52_51",
    "number": 52,
    "question": "The Cloning feature in Snowflake requires less storage because",
    "options": [
      {
        "id": 1,
        "value": "The cloned data is constantly updated to synchronize with original table data"
      },
      {
        "id": 2,
        "value": "Only metadata is copied; no physical data is copied"
      },
      {
        "id": 3,
        "value": "Data is replicated to ensure integrity of data in the original table data"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "There is no data copy that happens while clone is created. Its just one more object that gets created which points to the same underlying data as that of original table. Only when changes are made to clone then it starts incurring storage costs.",
    "reference": "",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_53_52",
    "number": 53,
    "question": "When data is loaded into Snowflake, Snowflake reorganizes that data into its internal optimized, compressed, columnar format",
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
    "explanation": "When data is loaded into Snowflake, Snowflake reorganizes that data into its internal optimized, compressed, columnar format. Snowflake stores this optimized data in cloud storage.Snowflake manages all aspects of how this data is stored  the organization, file size, structure, compression, metadata, statistics, and other aspects of data storage are handled by Snowflake. The data objects stored by Snowflake are not directly visible nor accessible by customers; they are only accessible through SQL query operations run using Snowflake.",
    "reference": "",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_54_53",
    "number": 54,
    "question": "Snowflake data warehouse is built on top of Hadoop Big Data Software Platform",
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
    "explanation": "Snowflakes data warehouse is not built on an existing database or big data software platform such as Hadoop. The Snowflake data warehouse uses a new SQL database engine with a unique architecture designed for the cloud.",
    "reference": "",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_55_54",
    "number": 55,
    "question": "Cloning the table does not include the load history of the source table, and hence the data files that were loaded in source table can be loaded again into its clone tables",
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
    "explanation": "When a clone of table is created the load history of the cloned table is empty, and hence it will trea the already loaded data files as new files so it can be loaded again in clone table.",
    "reference": "",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_56_55",
    "number": 56,
    "question": "Cloud Services layer of Snowflake provide which all functionalities",
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
        "value": "Database Storage"
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
    "explanation": "The cloud services layer is a collection of services that coordinate activities across Snowflake. These services tie together all of the different components of Snowflake in order to process user requests, from login to query dispatch. The cloud services layer also runs on compute instances provisioned by Snowflake from the cloud provider.Among the services in this layer:AuthenticationInfrastructure managementMetadata managementQuery parsing and optimizationAccess controlRefer Link for details –https://docs.snowflake.com/en/user-guide/intro-key-concepts.html#cloud-services",
    "reference": "https://docs.snowflake.com/en/user-guide/intro-key-concepts.html#cloud-services",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_57_56",
    "number": 57,
    "question": "Which of the following database objects can be cloned in Snowflake?",
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
    "explanation": "Refer link for details –https://docs.snowflake.com/en/sql-reference/sql/create-clone.html",
    "reference": "https://docs.snowflake.com/en/sql-reference/sql/create-clone.html",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_58_57",
    "number": 58,
    "question": "Snowflake is supported on which cloud providers",
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
    "explanation": "Refer Link –https://docs.snowflake.com/en/user-guide/intro-cloud-platforms.htmlSnowflake is provided as Software-as-a-Service (SaaS) that runs completely on cloud infrastructure. This means that all three layers of Snowflakes architecture (storage, compute, and cloud services) are deployed and managed entirely on a selected cloud platform.A Snowflake account can be hosted on any of the following cloud platforms:Amazon Web Services (AWS)Google Cloud Platform (GCP)Microsoft Azure (Azure)On each platform, Snowflake provides one or more regions where the account is provisioned.",
    "reference": "https://docs.snowflake.com/en/user-guide/intro-cloud-platforms.html",
    "source": "Test 1",
    "testNumber": 1
  },
  {
    "id": "Test 1_59_58",
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
    "id": "Test 1_60_59",
    "number": 60,
    "question": "Different editions of snowflake Instances require separate accounts",
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
    "id": "Test 2_1_60",
    "number": 1,
    "question": "If retrieval of data from fail safe is required, you must",
    "options": [
      {
        "id": 1,
        "value": "Retrieval from Fail Safe is not possible"
      },
      {
        "id": 2,
        "value": "Contact Snowflake Support"
      },
      {
        "id": 3,
        "value": "Query the Fail Safe DB and retrive the data by yourself"
      },
      {
        "id": 4,
        "value": "Download it directly from the underlying cloud storage of Snowflake"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "Failsafe data can not be retrieved by Snowflake customer and support must be engaged to retrieve this data.",
    "reference": "",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 2_2_61",
    "number": 2,
    "question": "You have a virtual warehouse named BI_warehouse which is sized as Medium. You need to resize it to X-LARGE for future queries. What is the best way to make this change.",
    "options": [
      {
        "id": 1,
        "value": "Drop and recreate the same warehouse with X-LARGE size"
      },
      {
        "id": 2,
        "value": "It is not permitted to resize the warehouse once its created"
      },
      {
        "id": 3,
        "value": "Alter the existing warehouse either by using an ALTER command or through the Snowflake Web UI to change the size"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "Please see the below link for detailed syntaxhttps://docs.snowflake.net/manuals/sql-reference/sql/alter-warehouse.html",
    "reference": "https://docs.snowflake.net/manuals/sql-reference/sql/alter-warehouse.html",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 2_3_62",
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
    "explanation": "Micro partitions are immutable which means once created they cannot be changed. If a row is updated in snowflake, the micro partition holding the row is copied into a new micro partition and the updated row is inserted in that micro partition. The olde micro partition is marked for deletion. Refer Link –https://docs.snowflake.com/en/user-guide/tables-clustering-micropartitions.html",
    "reference": "https://docs.snowflake.com/en/user-guide/tables-clustering-micropartitions.html",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 2_4_63",
    "number": 4,
    "question": "When a table which has time traveled enabled is dropped, and if a table with same name is created after that, what happens?",
    "options": [
      {
        "id": 1,
        "value": "The table with same name cannot be created till the time time travel retention period of dropped object is over"
      },
      {
        "id": 2,
        "value": "The table with same name cannot be created till the time time travel retention period and fail safe period of dropped object is over"
      },
      {
        "id": 3,
        "value": "It restores the previous dropped version of the table"
      },
      {
        "id": 4,
        "value": "It creates a new version of the table"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "After dropping an object, creating an object with the same name does not restore the object. Instead, it creates a new version of the object. The original, dropped version is still available and can be restored. Restoring a dropped object restores the object in place (i.e. it does not create a new object). Refer Link –https://docs.snowflake.com/en/user-guide/data-time-travel.html#data-retention-period",
    "reference": "https://docs.snowflake.com/en/user-guide/data-time-travel.html#data-retention-period",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 2_5_64",
    "number": 5,
    "question": "Resource monitor notifications can be received by account administrators through the following ways",
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
    "explanation": "Notifications can be received by account administrators through the web interface and/or email; however, by default, notifications are not enabled: To receive notifications, each account administrator must explicitly enable notifications through their preferences in the web interface. In addition, if an account administrator chooses to receive email notifications, they must provide a valid email address (and verify the address) before they will receive any emails.",
    "reference": "",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 2_6_65",
    "number": 6,
    "question": "There is no additional storage charges with rekeying of data in Fail-safe.",
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
    "explanation": "Snowflake customers are charged with additional storage for Fail-safe protection of data files that were rekeyed. For these files, 7 days of Fail-safe protection is charged. That is, the data files with the old key on S3 are already protected by Fail-safe, and the data files with the new key on S3 are also added to Fail-safe, leading to a second charge, but only for the 7-day period.",
    "reference": "",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 2_7_66",
    "number": 7,
    "question": "Fail-safe is not provided as a means for accessing historical data after the Time Travel retention period has ended. It is for use only by Snowflake to recover data that may have been lost or damaged due to extreme operational failures",
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
    "explanation": "Refer Link –https://docs.snowflake.com/en/user-guide/data-failsafe.html",
    "reference": "https://docs.snowflake.com/en/user-guide/data-failsafe.html",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 2_8_67",
    "number": 8,
    "question": "Tri-Secret Secure option is available in which Snowflake Edition",
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
    "explanation": "Refer Link -https://docs.snowflake.com/en/user-guide/security-encryption.html#encryption-key-rotation",
    "reference": "",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 2_9_68",
    "number": 9,
    "question": "What happens to the data of a table that is currently in time travel, when the retention period of a table is increased? E.g. The retention period is increased from 10 days to 20 days.",
    "options": [
      {
        "id": 1,
        "value": "When data retention is changed, all the data in time travel moves to fail safe by default"
      },
      {
        "id": 2,
        "value": "The data in time travel will be retained as per previous retention period only i.e. for 10 days only"
      },
      {
        "id": 3,
        "value": "None is true"
      },
      {
        "id": 4,
        "value": "The data in time travel will be retained for the extended period of retention period i.e. for 20 days"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "Refer Link –https://docs.snowflake.com/en/user-guide/data-time-travel.html#data-retention-period",
    "reference": "https://docs.snowflake.com/en/user-guide/data-time-travel.html#data-retention-period",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 2_10_69",
    "number": 10,
    "question": "It is not possible to suspend a specific cluster in a multi-cluster virtual warehouse but rather the whole virtual warehouse is suspended.",
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
    "explanation": "True. Individual clusters in a virtual warehouse can not be controlled independently, but rather they appear logically as a virtual warehouse together.",
    "reference": "",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 2_11_70",
    "number": 11,
    "question": "Which minimum Snowflake license allows Mulitcluster data virtual warehouse capability?",
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
    "explanation": "The multi cluster virtual warehouse capability is available starting from the Enterprise Edition. The capability is not available in Standard or Premier",
    "reference": "",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 2_12_71",
    "number": 12,
    "question": "When a table data changes (for e.g. few records are updated and few are deleted) and the table is within the time travel retention period, which of the following statement is true?",
    "options": [
      {
        "id": 1,
        "value": "Snowflake maintains only the information pertaining to these changed records (i.e. updated & deleted ones)"
      },
      {
        "id": 2,
        "value": "Snowflake takes a full copy of the table every time any change is made to the table"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "Snowflake minimizes the amount of storage required for historical data by maintaining only the information required to restore the individual table rows that were updated or deleted. As a result, storage usage is calculated as a percentage of the table that changed. Full copies of tables are only maintained when tables are dropped or truncated.",
    "reference": "",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 2_13_72",
    "number": 13,
    "question": "Maximum historical data that can be maintained of Transient & Temporary table is?",
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
    "explanation": "Transient and temporary tables have no Fail-safe period, and maximum time travel retention period for them can be 1 day. Refer Link –https://docs.snowflake.com/en/user-guide/data-cdp-storage-costs.html",
    "reference": "https://docs.snowflake.com/en/user-guide/data-cdp-storage-costs.html",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 2_14_73",
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
    "explanation": "The primary purpose of Multi cluster virtual warehouses is to improve queueing and concurrency issues. Large Complex queries can be handled by increasing the size of the warehouse.https://docs.snowflake.net/manuals/user-guide/warehouses-considerations.html#multi-cluster-warehouses-improve-concurrency",
    "reference": "https://docs.snowflake.net/manuals/user-guide/warehouses-considerations.html#multi-cluster-warehouses-improve-concurrency",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 2_15_74",
    "number": 15,
    "question": "Which of the following Snowflake Editions allow only a maximum of 1 day of time travel?",
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
    "explanation": "Refer link –https://www.snowflake.com/pricing/pricing-guide/Standard allows 1 day, while rest allows 90 days",
    "reference": "https://www.snowflake.com/pricing/pricing-guide/",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 2_16_75",
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
    "explanation": "Refer Link –https://docs.snowflake.com/en/user-guide/warehouses-multicluster.html",
    "reference": "https://docs.snowflake.com/en/user-guide/warehouses-multicluster.html",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 2_17_76",
    "number": 17,
    "question": "Time Travel and Fail safe are one and the same thing?",
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
    "explanation": "Both Time Travel and Fail safe are part of Snowflake Continous Data Protection lifecycle, however both are different. With Time Travel customer themselves can query the data within the retention period which is configurable, whereas fail-safe provides a (non-configurable) 7-day period during which historical data is recoverable by Snowflake. This period starts immediately after the Time Travel retention period ends.",
    "reference": "",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 2_18_77",
    "number": 18,
    "question": "After how many days account and table master keys are automatically rotated by Snowflake?",
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
    "explanation": "Account and table master keys are automatically rotated by Snowflake when they are more than 30 days old. Active keys are retired, and new keys are created. Refer Link –https://docs.snowflake.com/en/user-guide/security-encryption.html#encryption-key-rotation",
    "reference": "https://docs.snowflake.com/en/user-guide/security-encryption.html#encryption-key-rotation",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 2_19_78",
    "number": 19,
    "question": "What is the benefit of client-side encryption in snowflake?",
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
    "id": "Test 2_20_79",
    "number": 20,
    "question": "When a warehouse is suspended, the idle servers in that warehouse are immediately shut down, but any servers that are executing queries are allowed to run until the queries are completed. Such servers that are waiting to shut down are considered to be in which mode?",
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
    "explanation": "Refer Link –https://docs.snowflake.com/en/user-guide/warehouses-tasks.html",
    "reference": "https://docs.snowflake.com/en/user-guide/warehouses-tasks.html",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 2_21_80",
    "number": 21,
    "question": "Snowflake can load from data staged in which of the following?",
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
        "value": "Snowflake Internal Stage"
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
    "explanation": "Snowflake supports loading from Internal Stage, AWS S3, Azure Blob and Google Cloud Storage. Please see below link for more detailshttps://docs.snowflake.net/manuals/user-guide/data-load-overview.html#loading-from-data-files-staged-on-other-cloud-platforms",
    "reference": "https://docs.snowflake.net/manuals/user-guide/data-load-overview.html#loading-from-data-files-staged-on-other-cloud-platforms",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 2_22_81",
    "number": 22,
    "question": "If a transaction is running on a session and the session disconnects abruptly, the transaction will be in a detached state. It will not allow the transaction to commit or roll back. The locks on the resources will also not be released. If you do not do anything and let snowflake abort the transaction, how long will you need to wait?",
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
    "explanation": "If a transaction is running in a session and the session disconnects abruptly, preventing the transaction from committing or rolling back, the transaction is left in a detached state, including any locks that the transaction is holding on resources. If this happens, you might need to abort the transaction. To abort a running transaction, the user who started the transaction or an account administrator can call the system function, SYSTEM$ABORT_TRANSACTION. If the transaction is left open, Snowflake typically rolls back the transaction after it has been idle for four hours. Refer Link –https://docs.snowflake.com/en/sql-reference/transactions.html#aborting-transactions",
    "reference": "https://docs.snowflake.com/en/sql-reference/transactions.html#aborting-transactions",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 2_23_82",
    "number": 23,
    "question": "Which of the following will not contribute to your account level storage usage?",
    "options": [
      {
        "id": 1,
        "value": "Snowflake Internal Stage"
      },
      {
        "id": 2,
        "value": "UDF"
      },
      {
        "id": 3,
        "value": "Snowflake External Stages"
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
    "explanation": "Storage used by a database (and its tables) and storage used by Snowflake internal stages contribute towards the over all storage usage along with storage used for data protection (i.e. Time Travel & Fail Safe) Views, UDF‘s are logical object referring to the tables or performing some function, and hence no storage cost is associated with them. Likewise External Stages are logical object referring to an external Cloud location and hence no storage cost is applicable as data is stored in external cloud",
    "reference": "",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 2_24_83",
    "number": 24,
    "question": "Snowflake encrypts all customer data by default, using the latest security standards, and charges customer for this encryption",
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
    "explanation": "Snowflake encrypts all customer data by default, using the latest security standards, at no additional cost. Refer Link –https://docs.snowflake.com/en/user-guide/security-encryption.html#encryption-key-rotation",
    "reference": "https://docs.snowflake.com/en/user-guide/security-encryption.html#encryption-key-rotation",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 2_25_84",
    "number": 25,
    "question": "You want to get the clustering information for a table Tab1 that is clustered on column Col1. Which of the below queries will you run to get the details?",
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
    "explanation": "Refer Link –https://docs.snowflake.com/en/sql-reference/functions/system_clustering_information.html#system-clustering-information",
    "reference": "https://docs.snowflake.com/en/sql-reference/functions/system_clustering_information.html#system-clustering-information",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 2_26_85",
    "number": 26,
    "question": "Cloud services also use compute. Does snowflake charge you for cloud services.",
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
        "value": "Snowflake never charges for cloud services"
      },
      {
        "id": 4,
        "value": "Cloud services are charged only if it exceeds 10% of the daily usage of the compute resources"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "Similar to virtual warehouse usage, Snowflake credits are used to pay for the usage of the cloud services that exceeds 10% of the daily usage of the compute resources.Usage for cloud-services is charged only if the daily consumption of cloud services exceeds 10% of the daily usage of the compute resources. The charge is calculated daily (in the UTC time zone). This ensures that the 10% adjustment is accurately applied each day, at the credit price for that day. Refer Link –https://docs.snowflake.com/en/user-guide/credits.html#cloud-services-credit-usage",
    "reference": "https://docs.snowflake.com/en/user-guide/credits.html#cloud-services-credit-usage",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 2_27_86",
    "number": 27,
    "question": "To restore the table by undrop command what all conditions should be met?",
    "options": [
      {
        "id": 1,
        "value": "The table can be restored in any schema irrespective from whichever schema the table was dropped."
      },
      {
        "id": 2,
        "value": "The table can be restored in same schema only from which it has been dropped"
      },
      {
        "id": 3,
        "value": "User executing undrop command should have ownership privilege on the table"
      },
      {
        "id": 4,
        "value": "User must have CREATE privileges on the schema in which table is getting restored"
      }
    ],
    "answers": [
      2,
      3,
      4
    ],
    "explanation": "Similar to dropping an object, a user must have OWNERSHIP privileges for an object to restore it. In addition, the user must have CREATE privileges on the object type for the database or schema where the dropped object will be restored. Restoring tables and schemas is only supported in the current schema or current database, even if a fully-qualified object name is specified Refer Link –https://docs.snowflake.com/en/user-guide/data-time-travel.html#data-retention-period",
    "reference": "https://docs.snowflake.com/en/user-guide/data-time-travel.html#data-retention-period",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 2_28_87",
    "number": 28,
    "question": "What ensures that all customer data, new and old, is encrypted with the latest security technology",
    "options": [
      {
        "id": 1,
        "value": "Key Rotation"
      },
      {
        "id": 2,
        "value": "This has to be done by contacting snowflake support"
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
    "explanation": "Rekeying constrains the total duration in which a key is used for recipient usage, following NIST recommendations. Furthermore, when rekeying data, Snowflake can increase encryption key sizes and utilize better encryption algorithms that may be standardized since the previous key generation was created. Rekeying therefore ensures that all customer data, new and old, is encrypted with the latest security technology. Refer Link –https://docs.snowflake.com/en/user-guide/security-encryption.html#encryption-key-rotation",
    "reference": "https://docs.snowflake.com/en/user-guide/security-encryption.html#encryption-key-rotation",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 2_29_88",
    "number": 29,
    "question": "select * from my_table at(offset => -60*5) . This statement will return which period of historical data for the table?",
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
    "explanation": "Here the 60 refers to seconds, and hence 60*5 = 300 seconds which is 5 minutes. Refer Link –https://docs.snowflake.com/en/user-guide/data-time-travel.html#data-retention-period",
    "reference": "https://docs.snowflake.com/en/user-guide/data-time-travel.html#data-retention-period",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 2_30_89",
    "number": 30,
    "question": "What happens If the TIMESTAMP, OFFSET, or STATEMENT specified in the AT | BEFORE clause of a SELECT statement falls outside the data retention period for the table?",
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
    "explanation": "Refer Link –https://docs.snowflake.com/en/user-guide/data-time-travel.html#data-retention-period",
    "reference": "https://docs.snowflake.com/en/user-guide/data-time-travel.html#data-retention-period",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 2_31_90",
    "number": 31,
    "question": "What are the resources that a virtual warehouse provides?",
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
    "explanation": "Virtual warehouse provide CPU, Memory & temporary storage to process queries",
    "reference": "",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 2_32_91",
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
    "explanation": "As per snowflake architecture, storage and compute are independent of each other and can be increased or decreased without any impact on each other.",
    "reference": "",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 2_33_92",
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
    "explanation": "Thats the beauty of snowflake, and one of the key features, where in separate warehouses can access the same data without causing any contention issues.",
    "reference": "",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 2_34_93",
    "number": 34,
    "question": "What attributes make Snowflake a true SaaS solution?",
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
    "explanation": "Refer link for snowflake architecture details that make it a true SaaS offering –https://docs.snowflake.com/en/user-guide/intro-key-concepts.html",
    "reference": "https://docs.snowflake.com/en/user-guide/intro-key-concepts.html",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 2_35_94",
    "number": 35,
    "question": "Which installment option versions of Snowflake are available?",
    "options": [
      {
        "id": 1,
        "value": "Microsoft Cloud Native Accounts"
      },
      {
        "id": 2,
        "value": "Snowflake-Hosted Accounts (on Amazon cloud infrastructure)"
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
        "value": "Snowflake-Hosted Accounts (on Azure cloud infrastructure)"
      }
    ],
    "answers": [
      2,
      6
    ],
    "explanation": "A Snowflake account can be hosted on any of the following cloud platforms:Amazon Web Services (AWS)Google Cloud Platform (GCP)Microsoft Azure (Azure)Refer link –https://docs.snowflake.com/en/user-guide/intro-cloud-platforms.html",
    "reference": "https://docs.snowflake.com/en/user-guide/intro-cloud-platforms.html",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 2_36_95",
    "number": 36,
    "question": "Which role is most powerful role in a Snowflake system?",
    "options": [
      {
        "id": 1,
        "value": "SYSADMIN"
      },
      {
        "id": 2,
        "value": "SECURITYADMIN"
      },
      {
        "id": 3,
        "value": "PUBLIC"
      },
      {
        "id": 4,
        "value": "ACCOUNTADMIN"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "Accountadmin is the highest privileged role in Snowflake",
    "reference": "",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 2_37_96",
    "number": 37,
    "question": "Snowflake uses a staged release process for new releases in which different account types are upgraded gradually.",
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
    "explanation": "The staged release process through which Snowflake releases updates is first applied to early access account, then standard accounts and finally Enterprise & upwards",
    "reference": "",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 2_38_97",
    "number": 38,
    "question": "All security related information is stored in which layer of snowflake architecture",
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
    "explanation": "Cloud service layer is the one which stores all security related information The services included in this layer are 1. Authentication 2. Infrastructure management 3. Metadata management 4. Query parsing and optimization 5. Access control",
    "reference": "",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 2_39_98",
    "number": 39,
    "question": "When a network policy includes values in both the allowed and blocked IP address lists, Snowflake applies the blocked IP address list first",
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
    "explanation": "Refer Link –https://docs.snowflake.com/en/user-guide/network-policies.html. When a network policy includes values in both the allowed and blocked IP address lists, Snowflake applies the blocked IP address list first. Do not add 0.0.0.0/0 to the blocked IP address list. 0.0.0.0/0 is interpreted to be all IPv4 addresses on the local machine. Because Snowflake resolves this list first, this would block your own access.",
    "reference": "https://docs.snowflake.com/en/user-guide/network-policies.html",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 2_40_99",
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
    "explanation": "Tri-Secret Secure lets customer control access to their data using a master encryption key that they maintain in the key management service for the cloud provider that hosts their Snowflake account. Refer Link –https://docs.snowflake.com/en/user-guide/security-encryption.html#encryption-key-rotation",
    "reference": "https://docs.snowflake.com/en/user-guide/security-encryption.html#encryption-key-rotation",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 2_41_100",
    "number": 41,
    "question": "To clone a table your current role must have which privilege on the source table?",
    "options": [
      {
        "id": 1,
        "value": "DELETE"
      },
      {
        "id": 2,
        "value": "SELECT"
      },
      {
        "id": 3,
        "value": "UPDATE"
      },
      {
        "id": 4,
        "value": "INSERT"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "To clone a table you need a SELECT privileges on the source table and for all other objects that can be cloned you need the USAGE privilege",
    "reference": "",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 2_42_101",
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
    "explanation": "The number of load operations that run in parallel cannot exceed the number of data files to be loaded. To optimize the number of parallel operations for a load, we recommend aiming to produce data files roughly 100-250 MB (or larger) in size compressed.Refer Link –https://docs.snowflake.com/en/user-guide/data-load-considerations-prepare.html#file-sizing-best-practices-and-limitations",
    "reference": "https://docs.snowflake.com/en/user-guide/data-load-considerations-prepare.html#file-sizing-best-practices-and-limitations",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 2_43_102",
    "number": 43,
    "question": "Fail Safe period starts right after time travel retention period ends",
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
    "explanation": "Fail-safe provides a (non-configurable) 7-day period during which historical data is recoverable by Snowflake. This period starts immediately after the Time Travel retention period ends. Refer Link –https://docs.snowflake.com/en/user-guide/data-failsafe.html",
    "reference": "https://docs.snowflake.com/en/user-guide/data-failsafe.html",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 2_44_103",
    "number": 44,
    "question": "As an ETL developer you are developing jobs to load data into a snowflake table. You have an S3 stage defined which contains a single file containing 1000 rows. You managed to load those 1000 rows using the copy command of snowflake, but while performing further executions of those copy command, you notice that your COPY command is executing successfully but is loading zero rows into the target table. What could be the reason?",
    "options": [
      {
        "id": 1,
        "value": "Snowflake Tracks the file that have been loaded and will not load the same file again"
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
    "explanation": "Since you have already loaded this file, Snowflake will track through metadata which files have been loaded already and will not process them again. If you want to retest your copy command you must place a new file or clear the metadata or use a specific parameter in COPY command that will force load the file, by ignoring the metadata",
    "reference": "",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 2_45_104",
    "number": 45,
    "question": "Federated authentication in snowflake is compliant with SAML2.0",
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
    "explanation": "Federated authentication enables your users to connect to Snowflake using secure SSO (single sign-on). With SSO enabled, your users authenticate through an external, SAML 2.0-compliant identity provider (IdP). Refer link –https://docs.snowflake.com/en/user-guide/admin-security-fed-auth.html#federated-authentication-sso",
    "reference": "https://docs.snowflake.com/en/user-guide/admin-security-fed-auth.html#federated-authentication-sso",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 2_46_105",
    "number": 46,
    "question": "Storage can increase or decrease without any effect on virtual warehouse sizes.",
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
    "explanation": "Snowflake architecture is designed in such a way that storage and compute can be indenpendently increased or decreased without any impact on each other.",
    "reference": "",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 2_47_106",
    "number": 47,
    "question": "You can increase or decrease the size of a virtual warehouse as your user base & query demand increase or decrease?",
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
    "explanation": "Size of the warehouse can be changed at any point in time either through UI or through ALTER command",
    "reference": "",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 2_48_107",
    "number": 48,
    "question": "Users created in a reader account can not do which of the following?",
    "options": [
      {
        "id": 1,
        "value": "SELECT"
      },
      {
        "id": 2,
        "value": "DELETE"
      },
      {
        "id": 3,
        "value": "UPDATE"
      },
      {
        "id": 4,
        "value": "INSERT"
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
    "id": "Test 2_49_108",
    "number": 49,
    "question": "Which encryption algorithm used by snowflake?",
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
    "explanation": "All Snowflake customer data is encrypted by default using the latest security standards and best practices. Snowflake uses strong AES 256-bit encryption with a hierarchical key model rooted in a hardware security module. Keys are automatically rotated on a regular basis by the Snowflake service, and data can be automatically re-encrypted (rekeyed) on a regular basis. Data encryption and key management is entirely transparent and requires no configuration or management.https://docs.snowflake.com/en/user-guide/security-encryption.html#encryption-key-management",
    "reference": "https://docs.snowflake.com/en/user-guide/security-encryption.html#encryption-key-management",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 2_50_109",
    "number": 50,
    "question": "Which command can be executed to get the version history of table “Test1“ in schema “mytestdb.myschema“ within the time travel period in snowflake?",
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
        "value": "show history of table like ‘Test1‘ in mytestdb.myschema;"
      },
      {
        "id": 4,
        "value": "show version of table like ‘Test1‘ in mytestdb.myschema;"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "Refer Link –https://docs.snowflake.com/en/user-guide/data-time-travel.html#data-retention-period",
    "reference": "https://docs.snowflake.com/en/user-guide/data-time-travel.html#data-retention-period",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 2_51_110",
    "number": 51,
    "question": "You are the solution architect for a large manufacturing company running a Snowflake data warehouse. Your Snowflake implementation has just gone live with a single virtual warehouse and has been opened up to all the users across the organization. One of your heaviest users are the marketing department, who have a large number of users and execute a large number of queries. Marketing users have complained that the queries take a long time to execute for them. What is the best immediate action should you take to improve their experience?",
    "options": [
      {
        "id": 1,
        "value": "Increase the size of your single warehouse to the maximum size possible"
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
        "value": "Have a dedicated warehouse for marketing team, and set the capacity of this warehouse as per the needs of marketing team"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "Increasing the size of existing warehouse would improve performance of the queries running on that warehouse, but it would not necessarily be just the marketing team who would see benefit out of it. Best option is to have a dedicated warehouse for the marketing team for immediate improved user experience",
    "reference": "",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 2_52_111",
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
    "explanation": "Refer Link –https://docs.snowflake.com/en/user-guide/data-time-travel.html#data-retention-period",
    "reference": "https://docs.snowflake.com/en/user-guide/data-time-travel.html#data-retention-period",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 2_53_112",
    "number": 53,
    "question": "Both time travel & failsafe require extra storage which has cost associated with it",
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
    "explanation": "Refer Link –https://docs.snowflake.net/manuals/user-guide/data-failsafe.html",
    "reference": "https://docs.snowflake.net/manuals/user-guide/data-failsafe.html",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 2_54_113",
    "number": 54,
    "question": "When a table which has time traveled enabled is dropped, and if a new table with same name is created after that, then the undrop table command is executed, what will happen?",
    "options": [
      {
        "id": 1,
        "value": "The table will be restored with a different name"
      },
      {
        "id": 2,
        "value": "The newly created table will be overwritten with the restored version of the table"
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
    "id": "Test 2_55_114",
    "number": 55,
    "question": "Please look at the below two queries Option 1: SELECT * FROM TABLE_NAME WHERE YEAR = 2015 AND UPPER(COL_NAME) = ‘VALUE1‘; Option 2: SELECT * FROM TABLE_NAME WHERE YEAR = 2015 AND COL_NAME =‘VALUE1‘; Which one of these will scan less partitions? Note: COL_NAME stores values both in upper and lower case",
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
    "explanation": "Snowflake stores metadata for each column that includes the range of values of the columns in micro partitions. In this case the metadata for COL_NAME is stored in its raw form which is mix of lower & upper case values. When any fuction in this case UPPER is applied to the COL_NAME, then this range value information cannot be used while scanning micro partitions and hence it will need to scan more partitions",
    "reference": "",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 2_56_115",
    "number": 56,
    "question": "Which access control privileges must be granted on specified resource monitors for roles other than account administrators to view and modify resource monitors as needed",
    "options": [
      {
        "id": 1,
        "value": "MODIFY"
      },
      {
        "id": 2,
        "value": "CREATE"
      },
      {
        "id": 3,
        "value": "UPDATE"
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
    "explanation": "By default, resource monitors can only be created by account administrators and, therefore, can only be viewed and maintained by them. However, Snowflake supports enabling other users to view and modify resource monitors as needed. This functionality is implemented through the following access control privileges, which can be granted on specified resource monitors to specified roles: 1. MONITOR 2. MODIFY",
    "reference": "",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 2_57_116",
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
    "explanation": "Refer Link –https://docs.snowflake.com/en/user-guide/data-cdp-storage-costs.html",
    "reference": "https://docs.snowflake.com/en/user-guide/data-cdp-storage-costs.html",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 2_58_117",
    "number": 58,
    "question": "A user can upload one or more data files to an external stage. If the stage is a customer-managed container in a cloud storage service (like S3 in AWS), the user may or may not encrypt the data files using client-side encryption",
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
    "explanation": "For external stage encryption of data is optional, though snowflake recommends to encrypt data using client side encryption for data stored outside snowflake. Refer Link -https://docs.snowflake.com/en/user-guide/security-encryption.html#encryption-key-rotation",
    "reference": "",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 2_59_118",
    "number": 59,
    "question": "What is correct about multi cluster virtual warehouses?",
    "options": [
      {
        "id": 1,
        "value": "Multi Cluster will remove the additional clusters as query demand decreases"
      },
      {
        "id": 2,
        "value": "Maximum of 5 multi cluster warehouse can be created in one snowflake account"
      },
      {
        "id": 3,
        "value": "Multi Cluster warehouses cannot be suspended"
      },
      {
        "id": 4,
        "value": "Multi Cluster warehouse will spin up additional clusters when under high query workload which is beyond the current capacity"
      }
    ],
    "answers": [
      1,
      4
    ],
    "explanation": "A multi-cluster virtual warehouse will scale up and scale down depending on the query & user demand",
    "reference": "",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 2_60_119",
    "number": 60,
    "question": "The standard retention period for time travel is of how many days, which is automatically enabled for all Snowflake accounts",
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
    "explanation": "The standard retention period is 1 day (24 hours) and is automatically enabled for all Snowflake accounts. Refer link –https://docs.snowflake.com/en/user-guide/data-time-travel.html#data-retention-period",
    "reference": "https://docs.snowflake.com/en/user-guide/data-time-travel.html#data-retention-period",
    "source": "Test 2",
    "testNumber": 2
  },
  {
    "id": "Test 3_1_120",
    "number": 1,
    "question": "If you have a table with a 10-day retention period and increase the period to 20 days, then what happens to the data that is currently in time travel for past 2 days.",
    "options": [
      {
        "id": 1,
        "value": "The data will moved to fail safe immediately"
      },
      {
        "id": 2,
        "value": "The table will lose all time travel data, and the new time travel retention period will be applied going forward"
      },
      {
        "id": 3,
        "value": "The data would moved to fail safe as per previous retention period only i.e. will move to fail safe after 10 days of time travel"
      },
      {
        "id": 4,
        "value": "The data would moved to fail safe as per new retention period i.e. will move to fail safe after 20 days of time travel"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "The correct answer is: The data would moved to fail safe as per new retention period i.e. will move to fail safe after 20 days of time travel.",
    "reference": "https://docs.snowflake.com/en/user-guide/data-time-travel.html",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_2_121",
    "number": 2,
    "question": "Secured view can be used to hide the definition but its performance can get degraded?",
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
    "id": "Test 3_3_122",
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
    "explanation": "Scale Out & Scale in is the change in the number of clusters serving the query workload on snowflake. The process of scaling out / in is an automated process, and based on the scaling policy (Economy / Standard) that is defined and the workload on the warehouse,  this change in the number of cluster happens automatically.",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_4_123",
    "number": 4,
    "question": "Resource monitor notifications can be received only by account administrators",
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
    "id": "Test 3_5_124",
    "number": 5,
    "question": "Which command will help you the current permissions on a Schema?",
    "options": [
      {
        "id": 1,
        "value": "SHOW GRANTS ON SCHEMA.;"
      },
      {
        "id": 2,
        "value": "SHOW ALL PREIVILEGE ON SCHEMA.;"
      },
      {
        "id": 3,
        "value": "SHOW ROLES ON SCHEMA.;"
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
    "id": "Test 3_6_125",
    "number": 6,
    "question": "Snowflake has which type of architecture",
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
    "explanation": "Snowflake has a hybrid     architecture of shared-disk and shared-nothing.",
    "reference": "https://docs.snowflake.com/en/user-guide/intro-key-concepts.html",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_7_126",
    "number": 7,
    "question": "Default Size of the warehouse created using Snowflake Web UI is",
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
    "explanation": "X-Smallis the default size for a Snowflake warehouse created through the web UI. It’s a good starting point for most users, as it provides a balance of performance and cost-effectiveness. However, you can always adjust the size based on your specific workload requirements.",
    "reference": "https://docs.snowflake.com/en/user-guide/warehouses-overview.html",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_8_127",
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
        "value": "TASKS is used to identify and act on changed table records"
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
    "explanation": "Here are the correct statements about TASKS in Snowflake:",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_9_128",
    "number": 9,
    "question": "In auto scale multi-cluster warehouse same value is specified for both maximum & minimum clusters (except for the value 1)",
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
    "id": "Test 3_10_129",
    "number": 10,
    "question": "Can you have a database overlap across two Snowflake account?",
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
    "explanation": "No, you cannot have a database overlap across two Snowflake accounts.",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_11_130",
    "number": 11,
    "question": "MFA is automatically enabled for all the users. Please select the true statement.",
    "options": [
      {
        "id": 1,
        "value": "MFA is only enabled for ACCOUNTADMIN by default. ACCOUNTADMIN can enable it for other users."
      },
      {
        "id": 2,
        "value": "MFA is available for all the users by default."
      }
    ],
    "answers": [
      2
    ],
    "explanation": "The correct statement is:",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_12_131",
    "number": 12,
    "question": "If a 3X-Large multi-cluster warehouse runs 1 cluster for one full hour and then runs 2 clusters for the next full hour, the total number of credits billed would be",
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
    "id": "Test 3_13_132",
    "number": 13,
    "question": "For how long are we billed if our warehouse runs for 48 seconds?",
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
        "value": "We are not going to be billed as the warehouse hasn’t run for 1 minute."
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
    "id": "Test 3_14_133",
    "number": 14,
    "question": "Scaling a warehouse IN will decrease the number of clusters. (e.g. Max to Min)",
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
    "id": "Test 3_15_134",
    "number": 15,
    "question": "Which of these can access database objects and issue SQL statements",
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
    "explanation": "Both User-Defined Functions (UDFs) and Stored Procedures can access database objects and issue SQL statements.",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_16_135",
    "number": 16,
    "question": "Which is the correct syntax to disable fail safe on a table?",
    "options": [
      {
        "id": 1,
        "value": "By default, fail safe is disabled on a table."
      },
      {
        "id": 2,
        "value": "Fail safe can not be disabled on a table."
      },
      {
        "id": 3,
        "value": "ALTER TABLE SET FAILSAFE_DAYS = 0;"
      },
      {
        "id": 4,
        "value": "ALTER TABLE DROP FAILSAFE;"
      },
      {
        "id": 5,
        "value": "ALTER TABLE SET ENABLE_FAILSAFE = FALSE;"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "The correct answer relates to how Fail-safe works within Snowflake. Here’s a breakdown:",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_17_136",
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
    "id": "Test 3_18_137",
    "number": 18,
    "question": "What can be the maximum credits consumed by a medium size warehouse with 3 clusters in one hour?",
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
    "id": "Test 3_19_138",
    "number": 19,
    "question": "Scaling a warehouse OUT will increase the number of servers. (e.g. Min to Max)",
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
    "id": "Test 3_20_139",
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
    "id": "Test 3_21_140",
    "number": 21,
    "question": "If you are defining a multi-column clustering key of a table, the order in which the columns are specified in the CLUSTER BY clause is important. As general rule, Snowflake recommends:",
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
    "id": "Test 3_22_141",
    "number": 22,
    "question": "Which command should a Snowflake user execute to load data into a table?",
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
    "id": "Test 3_23_142",
    "number": 23,
    "question": "If auto-suspend is enabled for a Virtual Warehouse, the Warehouse is automatically suspended when:",
    "options": [
      {
        "id": 1,
        "value": "There are no users logged into Snowflake."
      },
      {
        "id": 2,
        "value": "The Warehouse is inactive for a specified period of time."
      },
      {
        "id": 3,
        "value": "The last query using the Warehouse completes."
      },
      {
        "id": 4,
        "value": "All Snowflakes sessions using the Warehouse are terminated."
      }
    ],
    "answers": [
      2
    ],
    "explanation": "The correct answer is:The Warehouse is inactive for a specified period of time.",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_24_143",
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
    "id": "Test 3_25_144",
    "number": 25,
    "question": "Which command will we use to download the files from the stage/location loaded through the COPY INTOcommand?",
    "options": [
      {
        "id": 1,
        "value": "UNLOAD."
      },
      {
        "id": 2,
        "value": "PUT."
      },
      {
        "id": 3,
        "value": "GET."
      },
      {
        "id": 4,
        "value": "INSERT INTO."
      }
    ],
    "answers": [
      3
    ],
    "explanation": "We will use the GET command to DOWNLOAD files from a Snowflake internal stage (named internal stage, user stage, or table stage) into a directory/folder on a client machine. You need to use SnowSQL to use this command.",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_26_145",
    "number": 26,
    "question": "Which of the following statements are true concerning the Snowflake release process? (Choose three.)",
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
        "value": "Snowflake deploys patch releases every week, but new feature releases happen once a month."
      },
      {
        "id": 4,
        "value": "There is usually some minimal downtime associated with Snowflake during the deployments."
      },
      {
        "id": 5,
        "value": "Snowflake deploys new feature releases and releases every week."
      },
      {
        "id": 6,
        "value": "Snowflake deploys new Behavior change releases every month."
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
    "id": "Test 3_27_146",
    "number": 27,
    "question": "Which of the following sizes is not a Warehouse Size?",
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
    "explanation": "The minimum configuration for a Snowflake Warehouse is X-Small (XS), which consumes one credit/hour. You can see the different sizes in the following image:",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_28_147",
    "number": 28,
    "question": "When can a Virtual Warehouse start running queries?",
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
    "explanation": "Virtual warehouses can be configure to auto_resume=true/false, accordingly once it provision it start executing the queries.",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_29_148",
    "number": 29,
    "question": "Which file function provides a URL with access to a file on a stage without the need for authentication and authorization?",
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
    "id": "Test 3_30_149",
    "number": 30,
    "question": "What is used to extract the content of PDF files stored in Snowflake stages?",
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
    "explanation": "Correct Option: D. Java User-Defined Function (UDF)",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_31_150",
    "number": 31,
    "question": "Which columns are part of the result set of the Snowflake LATERAL FLATTEN command? (Choose two.)",
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
    "explanation": "You are correct. The two columns that are part of the result set of the SnowflakeLATERAL FLATTENcommand are:",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_32_151",
    "number": 32,
    "question": "How does Snowflake store a table‘s underlying data? (Choose two.)",
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
    "explanation": "All data in Snowflake tables is automatically divided into micro-partitions, which are contiguous units of storage. Each micro-partition contains between 50 MB and 500 MB of uncompressed data (note that the actual size in Snowflake is smaller because data is always stored compressed). Groups of rows in tables are mapped into individual micro-partitions, organized in a columnar fashion.",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_33_152",
    "number": 33,
    "question": "At which point is data encrypted when using a PUT command?",
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
        "value": "After it reaches the internal stage"
      },
      {
        "id": 4,
        "value": "When it reaches the virtual warehouse"
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
    "id": "Test 3_34_153",
    "number": 34,
    "question": "What are the available Snowflake scaling modes for configuring multi-cluster virtual warehouses? (Choose two.)",
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
    "explanation": "The two available Snowflake scaling modes for configuring multi-cluster virtual warehouses are:",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_35_154",
    "number": 35,
    "question": "In which layer of Snowflake architecture is stored all security-related information?",
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
    "explanation": "The Cloud Services layer is a collection of services coordinating activities across Snowflake. It‘s in charge of Authentication, Infrastructure management, Metadata management, Query parsing and optimization, and Access control.",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_36_155",
    "number": 36,
    "question": "Which is the MINIMUM required Snowflake edition that a user must have if they want to use AWS/Azure Privatelink or Google Cloud Private Service Connect?",
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
    "explanation": "Theminimum required Snowflake editionthat a user must have to utilize AWS PrivateLink, Azure Private Link, or Google Cloud Private Service Connect is theBusiness Criticaledition. This requirement ensures that users can take advantage of these private connectivity options for enhanced security and performance in their cloud environments",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_37_156",
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
    "explanation": "You can make calls to REST endpoints to get information. For example, by calling the following insertReport endpoint, you can get a report of files submitted via insertFiles:GET https://.snowflakecomputing.com/v1/data/pipes//insertReport",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_38_157",
    "number": 38,
    "question": "What is the storage hierarchy in Snowflake?",
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
    "explanation": "The top-most container is the customer organization. All databases for your Snowflake account are contained in the account object. Securable objects such as tables, views, stages, and UDFs are contained in a schema object, which is, in turn, contained in a database. You can see the complete Snowflake hierarchy in the following image (via docs.snowflake.com):",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_39_158",
    "number": 39,
    "question": "What technique does Snowflake recommend for determining which virtual warehouse size to select?",
    "options": [
      {
        "id": 1,
        "value": "Use the default size Snowflake chooses"
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
    "explanation": "Experimenting with different warehouse sizesis the most effective way to determine the optimal size for your specific Snowflake workloads.",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_40_159",
    "number": 40,
    "question": "A Snowflake user wants to optimize performance for a query that queries only a small number of rows in a table. The rows require significant processing. The data in the table does not change frequently.What should the user do?",
    "options": [
      {
        "id": 1,
        "value": "Create a materialized view based on the query."
      },
      {
        "id": 2,
        "value": "Enable the query acceleration service for the virtual warehouse."
      },
      {
        "id": 3,
        "value": "Add the search optimization service to the table."
      },
      {
        "id": 4,
        "value": "Add a clustering key to the table."
      }
    ],
    "answers": [
      1
    ],
    "explanation": "Materialized views are particularly useful when:Query results contain a small number of rows and/or columns relative to the base table (the table on which the view is defined).Query results contain results that require significant processing, including:Analysis of semi-structured data.Aggregates that take a long time to calculate.The query is on an external table (i.e. data sets stored in files in an external stage), which might have slower performance compared to querying native database tables.The view’s base table does not change frequently.",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_41_160",
    "number": 41,
    "question": "Snowflake provides two mechanisms to reduce data storage costs for short-lived tables. These mechanisms are: (Choose two.)",
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
    "id": "Test 3_42_161",
    "number": 42,
    "question": "Which of these commands require a running warehouse?",
    "options": [
      {
        "id": 1,
        "value": "SELECT MAX(AGE)FROM USERS_TABLE;"
      },
      {
        "id": 2,
        "value": "SELECT COUNT(*)FROM USERS_TABLE;EXPLAIN USING TABULAR"
      },
      {
        "id": 3,
        "value": "SELECT *FROM USERS_TABLEWHERE email=’test@test.com’;"
      },
      {
        "id": 4,
        "value": "SELECT COUNT(*) FROM USERS_TABLE"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "Out of the provided options, only one command requires a running warehouse:",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_43_162",
    "number": 43,
    "question": "How is table data compressed in Snowflake?",
    "options": [
      {
        "id": 1,
        "value": "The text data in a micro-partition is compressed with GZIP but other types are not compressed."
      },
      {
        "id": 2,
        "value": "Each column is compressed as it is stored in a micro-partition."
      },
      {
        "id": 3,
        "value": "The micro-partitions are stored in compressed cloud storage and the cloud storage handles compression."
      },
      {
        "id": 4,
        "value": "Each micro-partition is compressed as it is written into cloud storage using GZIP."
      }
    ],
    "answers": [
      2
    ],
    "explanation": "Snowflake automatically determines the most efficient compression algorithm for the columns in each micro-partition.",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_44_163",
    "number": 44,
    "question": "What should be the first option to restore data into a table?",
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
        "value": "Fail-Safe."
      },
      {
        "id": 4,
        "value": "Ask Snowflake Support"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "Time-Travel enables accessing historical data (i.e., data that has been changed or deleted) at any point within a defined period. If we drop a table, we can restore it with time travel. You can use it with Databases, Schemas & Tables. The following diagram explains how Time-Travel works:",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_45_164",
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
    "explanation": "The monitor level is a property that specifies whether the resource monitor is used to monitor the credit usage for your entire account or individual warehouses.",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_46_165",
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
    "explanation": "Snowflake tasks are schedulable scripts that are run inside your Snowflake environment. Users can define a simple tree-like structure of tasks that starts with a root task and is linked together by task dependencies. The children‘s tasks only run after the parent‘s task finishes. A single task can have a maximum of 100 predecessor tasks and 100 child tasks.",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_47_166",
    "number": 47,
    "question": "While loading data through the COPY command, you can transform the data.Which of the below transformations is not allowed?",
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
    "explanation": "Filtersis the transformation that is not allowed during the COPY command.",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_48_167",
    "number": 48,
    "question": "A developer is granted ownership of a table that has a masking policy. The developer’s role is not able to see the masked data.Will the developer be able to modify the table to read the masked data?",
    "options": [
      {
        "id": 1,
        "value": "Yes, because a table owner has full control and can unset masking policies."
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
        "value": "No, because ownership of a table does not include the ability to change masking policies."
      }
    ],
    "answers": [
      4
    ],
    "explanation": "Object owners (i.e. the role that has the OWNERSHIP privilege on the object) do not have the privilege to unset masking policies.Object owners cannot view column data in which a masking policy applies.",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_49_168",
    "number": 49,
    "question": "Which of the following is not a valid context functions in Snowflake?",
    "options": [
      {
        "id": 1,
        "value": "SELECT CURRENT_PROVIDER()"
      },
      {
        "id": 2,
        "value": "SELECT CURRENT_CLIENT()"
      },
      {
        "id": 3,
        "value": "SELECT CURRENT_ACCOUNT()"
      },
      {
        "id": 4,
        "value": "SELECT CURRENT_IP_ADDRESS()"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "The answer is:SELECT CURRENT_PROVIDER()",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_50_169",
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
    "id": "Test 3_51_170",
    "number": 51,
    "question": "Which Snowflake edition (and above) allows until 90 days of Time Travel?",
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
        "value": "Virtual Private Snowflake"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "By default, Time travel is enabled with a 1-day retention period. However, we can increase it to 90 days if we have (at least) the Snowflake Enterprise Edition. It requires additional storage, which will be reflected in your monthly storage charges.",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_52_171",
    "number": 52,
    "question": "You have two virtual warehouses in your Snowflake account. If one of them updates the data in the storage layer, when will the other one see it?",
    "options": [
      {
        "id": 1,
        "value": "Once all the compute resources are provisioned for the second warehouse."
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
    "id": "Test 3_53_172",
    "number": 53,
    "question": "During periods of warehouse contention, which parameter controls the maximum length of time a warehouse will hold a query for processing?",
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
        "value": "MAX_CONCURRENCY_LEVEL"
      },
      {
        "id": 4,
        "value": "QUERY_TIMEOUT_IN_SECONDS"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "STATEMENT_QUEUED_TIMEOUT_IN_SECONDSAmount of time, in seconds, a SQL statement (query, DDL, DML, etc.) remains queued for a warehouse before it is canceled by the system.",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_54_173",
    "number": 54,
    "question": "A Snowflake user wants to share data using my_share with account xy12345.Which command should be used?",
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
    "explanation": "ALTER SHARE [ IF EXISTS ]{ ADD | REMOVE } ACCOUNTS =[ ,, … ] [ SHARE_RESTRICTIONS = { TRUE | FALSE } ]ALTER SHARE [ IFALTER     SHARE [ IF EXISTS ]SET { [ ACCOUNTS =[ ,… ] ]",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_55_174",
    "number": 55,
    "question": "What are the types of data consumer accounts available in Snowflake? (Choose two.)",
    "options": [
      {
        "id": 1,
        "value": "Public Account"
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
    "explanation": "There are two types of data consumers. The first one is the Full Accounts, the consumers with existing Snowflake accounts. In this case, the consumer account pays for the queries they make. We also have the Reader Accounts, the consumers without Snowflake accounts. In this last case, the producer account pays all the compute credits that their warehouses use. You can see this behavior in the following diagram:",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_56_175",
    "number": 56,
    "question": "What is the minimum Snowflake edition that you need for the Data Sharing capability?",
    "options": [
      {
        "id": 1,
        "value": "Virtual Private Snowflake"
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
    "explanation": "The minimum Snowflake edition required for the Data Sharing capability isStandard.",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_57_176",
    "number": 57,
    "question": "Which certifications are compliant with Snowflake? (Choose three.)",
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
    "explanation": "When considering Snowflake’s compliance, it’s essential to distinguish between Snowflake’s own compliance certifications and Snowflake’s certification programs for individuals. Here’s a breakdown:",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_58_177",
    "number": 58,
    "question": "Which function returns the name of the warehouse of the current session?",
    "options": [
      {
        "id": 1,
        "value": "RUNNING_WAREHOUSE()"
      },
      {
        "id": 2,
        "value": "WAREHOUSE()"
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
    "explanation": "I’m not a big fan of learning commands by heart, and they are unlikely to appear on the exam, but this one may be useful. You have other commands to show the current database and schema, as you can see by executing the following command:SELECT CURRENT_WAREHOUSE(), CURRENT_DATABASE(), CURRENT_SCHEMA();",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 3_59_178",
    "number": 59,
    "question": "What technique does Snowflake use to limit the number of micro-partitions retrieved as part of a query?",
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
    "id": "Test 3_60_179",
    "number": 60,
    "question": "A medium (M) warehouse has auto-suspend configured after 15 minutes. You have noticed that all of the queries that run on this warehouse finish within a minute. What will you do to optimize compute costs?",
    "options": [
      {
        "id": 1,
        "value": "Delete the warehouse after a minute."
      },
      {
        "id": 2,
        "value": "Disable the auto-suspend option."
      },
      {
        "id": 3,
        "value": "Use another data-warehouse."
      },
      {
        "id": 4,
        "value": "Reduce the auto-suspend time to 1 minute."
      }
    ],
    "answers": [
      4
    ],
    "explanation": "By reducing the minutes of the “auto-suspend“ option, the warehouse will automatically go to sleep after 60 seconds of inactivity, significantly reducing credit consumption.",
    "reference": "",
    "source": "Test 3",
    "testNumber": 3
  },
  {
    "id": "Test 4_1_180",
    "number": 1,
    "question": "What is the default compression of the output files generated by Snowflake when unloading data",
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
    "id": "Test 4_2_181",
    "number": 2,
    "question": "Scaling a warehouse UP will decrease the number of clusters. (e.g. Small to Medium)",
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
    "explanation": "Refer Link –https://docs.snowflake.com/en/user-guide/warehouses-multicluster.html#setting-the-scaling-policy-for-a-multi-cluster-warehouse",
    "reference": "https://docs.snowflake.com/en/user-guide/warehouses-multicluster.html#setting-the-scaling-policy-for-a-multi-cluster-warehouse",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 4_3_182",
    "number": 3,
    "question": "Default Size of the warehouse created using CREATE WAREHOUSE command is",
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
    "explanation": "Refer Link –https://docs.snowflake.com/en/user-guide/warehouses-overview.html",
    "reference": "https://docs.snowflake.com/en/user-guide/warehouses-overview.html",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 4_4_183",
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
    "explanation": "Refer Link –https://docs.snowflake.com/en/user-guide/warehouses-multicluster.html#setting-the-scaling-policy-for-a-multi-cluster-warehouse",
    "reference": "https://docs.snowflake.com/en/user-guide/warehouses-multicluster.html#setting-the-scaling-policy-for-a-multi-cluster-warehouse",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 4_5_184",
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
    "explanation": "Refer Link –https://docs.snowflake.com/en/user-guide/warehouses-overview.html",
    "reference": "https://docs.snowflake.com/en/user-guide/warehouses-overview.html",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 4_6_185",
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
    "explanation": "Refer Link –https://docs.snowflake.com/en/user-guide/warehouses-overview.html",
    "reference": "https://docs.snowflake.com/en/user-guide/warehouses-overview.html",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 4_7_186",
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
    "explanation": "Refer Link –https://docs.snowflake.com/en/user-guide/warehouses-multicluster.html",
    "reference": "https://docs.snowflake.com/en/user-guide/warehouses-multicluster.html",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 4_8_187",
    "number": 8,
    "question": "A Snowflake session can have multiple current warehouse at a time",
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
    "explanation": "A Snowflake session can have only one current warehouse at a time. The current warehouse for a session can be specified or changed at any time through the USE WAREHOUSE command.",
    "reference": "",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 4_9_188",
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
    "explanation": "Refer Link –https://docs.snowflake.com/en/user-guide/warehouses-multicluster.html",
    "reference": "https://docs.snowflake.com/en/user-guide/warehouses-multicluster.html",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 4_10_189",
    "number": 10,
    "question": "Which of the following are options when creating a Virtual Warehouse?",
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
    "explanation": "Refer Link-https://docs.snowflake.com/en/user-guide/warehouses-tasks.html",
    "reference": "https://docs.snowflake.com/en/user-guide/warehouses-tasks.html",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 4_11_190",
    "number": 11,
    "question": "A warehouse was started and it was up and running for 62 seconds. For how many seconds will the warehouse be billed for?",
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
    "explanation": "Snowflake utilizes per-second billing (with a 60-second minimum each time the warehouse starts) Refer Link –https://docs.snowflake.com/en/user-guide/warehouses-overview.html",
    "reference": "https://docs.snowflake.com/en/user-guide/warehouses-overview.html",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 4_12_191",
    "number": 12,
    "question": "A warehouse was started and it was up and running for 40 seconds. For how many seconds will the warehouse be billed for?",
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
    "explanation": "Snowflake utilizes per-second billing (with a 60-second minimum each time the warehouse starts) Refer Link –https://docs.snowflake.com/en/user-guide/warehouses-overview.html",
    "reference": "https://docs.snowflake.com/en/user-guide/warehouses-overview.html",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 4_13_192",
    "number": 13,
    "question": "Which type of stage can store files that are staged and managed by one or more users and loaded into one or more tables",
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
        "value": "Named"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "A named internal stage is a database object created in a schema. This stage type can store files that are staged and managed by one or more users and loaded into one or more tables. Because named stages are database objects, the ability to create, modify, use, or drop them can be controlled using security access control privileges. Create stages using the CREATE STAGE command.",
    "reference": "",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 4_14_193",
    "number": 14,
    "question": "Replication operations use Snowflake-provided compute resources to copy data between accounts across regions.",
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
    "explanation": "Refer Link –https://docs.snowflake.com/en/user-guide/database-replication-billing.html",
    "reference": "https://docs.snowflake.com/en/user-guide/database-replication-billing.html",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 4_15_194",
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
    "id": "Test 4_16_195",
    "number": 16,
    "question": "The scaling policy for a multi-cluster warehouse only applies (make sense) if it is running in Auto-scale mode and not in Maximized Mode",
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
    "explanation": "The scaling policy for a multi-cluster warehouse only applies if it is running in Auto-scale mode. In Maximized mode, all clusters run concurrently so there is no need to start or shut down individual clusters. Refer Link –https://docs.snowflake.com/en/user-guide/warehouses-multicluster.html",
    "reference": "https://docs.snowflake.com/en/user-guide/warehouses-multicluster.html",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 4_17_196",
    "number": 17,
    "question": "When database replication is setup, then querying tables and views in a secondary database using Time Travel will always produce exact same results as that of when executing the same query in the primary database.",
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
    "explanation": "Querying tables and views in a secondary database using Time Travel can produce different results than when executing the same query in the primary database. Historical Data Historical data available to query in a primary database using Time Travel is not replicated to secondary databases. For example, suppose data is loaded continuously into a table every 10 minutes using Snowpipe, and a secondary database is refreshed every hour. The refresh operation only replicates the latest version of the table. While every hourly version of the table within the retention window is available for query using Time Travel, none of the iterative versions within each hour (the individual Snowpipe loads) are available. Data Retention Period The data retention period for tables in a secondary database begins when the secondary database is refreshed with the DML operations (i.e. changing or deleting data) written to tables in the primary database.",
    "reference": "",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 4_18_197",
    "number": 18,
    "question": "Resource monitors provide control over virtual warehouse credit usage; however, you cannot use them to control credit usage for the Snowflake-provided warehouses, including the SNOWPIPE warehouse",
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
    "explanation": "Refer link –https://docs.snowflake.com/en/user-guide/data-load-snowpipe-billing.html",
    "reference": "https://docs.snowflake.com/en/user-guide/data-load-snowpipe-billing.html",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 4_19_198",
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
    "explanation": "A user stage is allocated to each user for storing files. This stage type is designed to store files that are staged and managed by a single user but can be loaded into multiple tables. User stages cannot be altered or dropped. A table stage is available for each table created in Snowflake. This stage type is designed to store files that are staged and managed by one or more users but only loaded into a single table. Table stages cannot be altered or dropped. Refer Link –https://docs.snowflake.com/en/user-guide/data-load-overview.html. Refer Section “Internal Stages“",
    "reference": "https://docs.snowflake.com/en/user-guide/data-load-overview.html",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 4_20_199",
    "number": 20,
    "question": "Which Snowflake object records DML changes made to tables, including inserts, updates, deletes as well as metadata about each change, so that actions can be taken using the changed data",
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
    "explanation": "Refer Link –https://docs.snowflake.com/en/user-guide/streams.html",
    "reference": "https://docs.snowflake.com/en/user-guide/streams.html",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 4_21_200",
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
    "id": "Test 4_22_201",
    "number": 22,
    "question": "Which is the default encoding considered in COPY command while loading delimited files like CSV, TSV?",
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
    "id": "Test 4_23_202",
    "number": 23,
    "question": "Snowflake maintains detailed metadata for each table into which data is loaded, including:",
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
    "explanation": "Refer Link –https://docs.snowflake.com/en/user-guide/data-load-considerations-load.html",
    "reference": "https://docs.snowflake.com/en/user-guide/data-load-considerations-load.html",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 4_24_203",
    "number": 24,
    "question": "When a copy command cannot definitively determine whether a file has been loaded already, then what is the default behaviour?",
    "options": [
      {
        "id": 1,
        "value": "The file load is skipped"
      },
      {
        "id": 2,
        "value": "Error message is generated, that load metadata for the file for given table doesnât exists"
      },
      {
        "id": 3,
        "value": "The file is loaded"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "When the COPY command cannot definitively determine whether a file has been loaded already if the LAST_MODIFIED date is older than 64 days and the initial set of data was loaded into the table more than 64 days earlier (and if the file was loaded into the table, that also occurred more than 64 days earlier). In this case, to prevent accidental reload, the command skips the file by default. Refer link –https://docs.snowflake.com/en/user-guide/data-load-considerations-load.html",
    "reference": "https://docs.snowflake.com/en/user-guide/data-load-considerations-load.html",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 4_25_204",
    "number": 25,
    "question": "Which of the following tables cannot be cloned as permanent table?",
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
    "explanation": "Refer Link for details –https://docs.snowflake.com/en/user-guide/tables-temp-transient.htmlRefer the section  Comparison of Table Types in the above link.",
    "reference": "https://docs.snowflake.com/en/user-guide/tables-temp-transient.html",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 4_26_205",
    "number": 26,
    "question": "A stream allows querying and consuming a set of changes to a table, at the row level, between two transactional points of time",
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
    "explanation": "A stream object records the delta of change data capture (CDC) information for a table (such as a staging table), including inserts and other data manipulation language (DML) changes. A stream allows querying and consuming a set of changes to a table, at the row level, between two transactional points of time.",
    "reference": "",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 4_27_206",
    "number": 27,
    "question": "If the TIMESTAMP, OFFSET, or STATEMENT specified in the AT | BEFORE clause falls outside the data retention period for the table, the query fails and returns an error.",
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
    "explanation": "Refer link –https://docs.snowflake.com/en/user-guide/data-time-travel.html",
    "reference": "https://docs.snowflake.com/en/user-guide/data-time-travel.html",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 4_28_207",
    "number": 28,
    "question": "Which type of table stream tracks all DML changes to the source table including inserts, updates, deletes and also truncate?",
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
    "explanation": "A standard (i.e. delta) table stream tracks all DML changes to the source table, including inserts, updates, and deletes (including table truncates). This stream type performs a join on inserted and deleted rows in the change set to provide the row level delta. As a net effect, for example, a row that is inserted and then deleted between two transactional points of time in a table is removed in the delta (i.e. is not returned when the stream is queried).",
    "reference": "",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 4_29_208",
    "number": 29,
    "question": "Which of the following roles can use SQL to view the task history within a specified date range",
    "options": [
      {
        "id": 1,
        "value": "Accountadmin"
      },
      {
        "id": 2,
        "value": "Task owner (i.e. role that has the OWNERSHIP privilege on a task)"
      },
      {
        "id": 3,
        "value": "Public"
      },
      {
        "id": 4,
        "value": "Any role that has the global MONITOR EXECUTION privilege"
      },
      {
        "id": 5,
        "value": "Any role can view"
      }
    ],
    "answers": [
      1,
      2,
      4
    ],
    "explanation": "Refer Link –https://docs.snowflake.com/en/user-guide/tasks-intro.html",
    "reference": "https://docs.snowflake.com/en/user-guide/tasks-intro.html",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 4_30_209",
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
    "id": "Test 4_31_210",
    "number": 31,
    "question": "When the warehouse is resized (scaled up or out), then the additional servers that get added will be available for use by any queries that are queued or newly submitted",
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
    "explanation": "Refer Link –https://docs.snowflake.com/en/user-guide/warehouses-overview.html",
    "reference": "https://docs.snowflake.com/en/user-guide/warehouses-overview.html",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 4_32_211",
    "number": 32,
    "question": "The Snowflake credit usage for multi cluster virtual warehouses is based on",
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
    "explanation": "Snowflake only charges for the exact amount of compute being used and for the time period it is being used",
    "reference": "",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 4_33_212",
    "number": 33,
    "question": "In the Snowflake Web UI which of the following is true?",
    "options": [
      {
        "id": 1,
        "value": "Each open worksheet can have different role, warehouse and database selected"
      },
      {
        "id": 2,
        "value": "For all open worksheet the session is same"
      },
      {
        "id": 3,
        "value": "For all open worksheets same role, warehouse and database apply"
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
    "explanation": "Each worksheet in Snowflake Web UI is an independent session. Therefore, each worksheet can have its combination of Database, Schema, Virtual Warehouse & Role selected",
    "reference": "",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 4_34_213",
    "number": 34,
    "question": "The “load metadata“ (which maintains which files have already been loaded) for a table expires after how many days?",
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
    "explanation": "The load metadata expires after 64 days. Please see the link –https://docs.snowflake.net/manuals/user-guide/data-load-considerations-load.html#load-metadata",
    "reference": "https://docs.snowflake.net/manuals/user-guide/data-load-considerations-load.html#load-metadata",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 4_35_214",
    "number": 35,
    "question": "Storage fees are incurred for maintaining historical data during the Time Travel but not during Fail-safe periods as Fail safe is managed by Snowflake",
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
    "explanation": "Storage cost is for both Time Travel & Fail Safe. Refer Link –https://docs.snowflake.com/en/user-guide/data-cdp-storage-costs.html",
    "reference": "https://docs.snowflake.com/en/user-guide/data-cdp-storage-costs.html",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 4_36_215",
    "number": 36,
    "question": "When data is shared between Snowflake accounts, a database is created on the consumer side for sharing purposes. The type of this database is ?",
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
    "explanation": "The correct answer is read-only. The consumer creates a database from the share and the database is created as read-only",
    "reference": "",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 4_37_216",
    "number": 37,
    "question": "Which of the following are valid parameters when create a new virtual warehouse?",
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
        "value": "Warehouse Size"
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
    "explanation": "Please see the link for detailed syntax on virtual warehouse creationhttps://docs.snowflake.net/manuals/sql-reference/sql/create-warehouse.html",
    "reference": "https://docs.snowflake.net/manuals/sql-reference/sql/create-warehouse.html",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 4_38_217",
    "number": 38,
    "question": "What are some general indicators that a clustering key is required on a table?",
    "options": [
      {
        "id": 1,
        "value": "The table is being used in many queries"
      },
      {
        "id": 2,
        "value": "The size of the table is in multi terabytes"
      },
      {
        "id": 3,
        "value": "The query performance using that table has slowed down over a period of time"
      },
      {
        "id": 4,
        "value": "The table has many columns"
      }
    ],
    "answers": [
      2,
      3
    ],
    "explanation": "Clustering keys are defined on large table to improve performance.",
    "reference": "",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 4_39_218",
    "number": 39,
    "question": "Virtual Warehouse credits are charged on what basis?",
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
    "explanation": "Snowflake credits are billed on per second basis of virtual warehouse use. Its important to note thought that when a virtual warehouse is started it will consume minimum 1 minute of snowflake credits and will change to per second billing after that",
    "reference": "",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 4_40_219",
    "number": 40,
    "question": "Choose the answer which true about key rotation in snowflake",
    "options": [
      {
        "id": 1,
        "value": "Only table master key is rotated by Snowflake"
      },
      {
        "id": 2,
        "value": "Account & Table master keys are automatically rotated by Snowflake when they are more than 30 days old"
      },
      {
        "id": 3,
        "value": "Only account master key is rotated by snowflake"
      },
      {
        "id": 4,
        "value": "Key rotation is an expensive operation, hence its done only on need basis"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "Refer Link -https://docs.snowflake.com/en/user-guide/security-encryption.html#encryption-key-rotation",
    "reference": "",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 4_41_220",
    "number": 41,
    "question": "What happens when a suspended warehouse is resized (e.g. resized from small to medium)?",
    "options": [
      {
        "id": 1,
        "value": "When size of a suspended warehouse is increased it starts the warehouse, and then suspends it back after provisioning additional servers"
      },
      {
        "id": 2,
        "value": "Additional Servers are added to the warehouse immediately even in suspended state"
      },
      {
        "id": 3,
        "value": "A suspended warehouse cannot be resized"
      },
      {
        "id": 4,
        "value": "Additional servers are provisioned only when the warehouse is next resumed"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "Refer Link –https://docs.snowflake.com/en/user-guide/warehouses-tasks.html",
    "reference": "https://docs.snowflake.com/en/user-guide/warehouses-tasks.html",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 4_42_221",
    "number": 42,
    "question": "Snowflake utilizes per-second billing (with a 60-second minimum each time the warehouse starts)",
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
    "explanation": "Refer Link –https://docs.snowflake.com/en/user-guide/warehouses-overview.html",
    "reference": "https://docs.snowflake.com/en/user-guide/warehouses-overview.html",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 4_43_222",
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
    "explanation": "Multi-cluster warehouses are best utilized for scaling resources to improve concurrency for users/queries. They are not as beneficial for improving the performance of slow-running queries or data loading. For these types of operations, resizing the warehouse provides more benefits.",
    "reference": "",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 4_44_223",
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
    "explanation": "If new_max_clusters < running_clusters, excess clusters shut down when they finish executing statements and the scaling policy conditions are met. Refer Link -https://docs.snowflake.com/en/user-guide/warehouses-multicluster.html",
    "reference": "https://docs.snowflake.com/en/user-guide/warehouses-multicluster.html",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 4_45_224",
    "number": 45,
    "question": "What all resources are provided by Virtual Warehouse?",
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
    "explanation": "Refer Link –https://docs.snowflake.com/en/user-guide/warehouses.html",
    "reference": "https://docs.snowflake.com/en/user-guide/warehouses.html",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 4_46_225",
    "number": 46,
    "question": "When a virtual warehouse is provisioned there is no benefit in stopping the virtual warehouse with in the first 60 seconds because that time period has already been billed.",
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
    "id": "Test 4_47_226",
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
    "explanation": "Refer Link –https://docs.snowflake.com/en/user-guide/warehouses-multicluster.html",
    "reference": "https://docs.snowflake.com/en/user-guide/warehouses-multicluster.html",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 4_48_227",
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
    "explanation": "Refer Link –https://docs.snowflake.com/en/user-guide/warehouses-multicluster.html",
    "reference": "https://docs.snowflake.com/en/user-guide/warehouses-multicluster.html",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 4_49_228",
    "number": 49,
    "question": "Scaling up of a warehouse can be done only in Enterprise edition and higher",
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
    "explanation": "Scaling up (increasing size of warehouse) can be done in all editions of snowflake, however Scaling out (increasing number of clusters) can be done only in Enterprise edition and higher",
    "reference": "",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 4_50_229",
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
    "explanation": "Refer Link –https://docs.snowflake.com/en/user-guide/warehouses-multicluster.html",
    "reference": "https://docs.snowflake.com/en/user-guide/warehouses-multicluster.html",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 4_51_230",
    "number": 51,
    "question": "Which of the following terms are associated with the Compute/Warehouse Layer?",
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
    "explanation": "Only query processing happens in the compute/warehouse layer, rest all options (except query design) that are given are performed in the services layer. Query design is performed by the user executing the query",
    "reference": "",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 4_52_231",
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
    "explanation": "Refer Link –https://docs.snowflake.com/en/user-guide/warehouses-multicluster.html",
    "reference": "https://docs.snowflake.com/en/user-guide/warehouses-multicluster.html",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 4_53_232",
    "number": 53,
    "question": "A warehouse can be started at any time, excluding the initial creation time",
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
    "explanation": "A warehouse can be started at any time, including on initial creation. Refer Link –https://docs.snowflake.com/en/user-guide/warehouses-tasks.html",
    "reference": "https://docs.snowflake.com/en/user-guide/warehouses-tasks.html",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 4_54_233",
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
    "explanation": "Refer Link –https://docs.snowflake.com/en/user-guide/warehouses-multicluster.html",
    "reference": "https://docs.snowflake.com/en/user-guide/warehouses-multicluster.html",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 4_55_234",
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
    "explanation": "Refer Link –https://docs.snowflake.com/en/user-guide/warehouses-multicluster.html",
    "reference": "https://docs.snowflake.com/en/user-guide/warehouses-multicluster.html",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 4_56_235",
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
    "explanation": "Refer Link –https://docs.snowflake.com/en/user-guide/warehouses-overview.html",
    "reference": "https://docs.snowflake.com/en/user-guide/warehouses-overview.html",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 4_57_236",
    "number": 57,
    "question": "How many credits will be consumed if a Medium-size warehouse (4 servers per cluster) with 3 clusters runs in Maximized mode for 2 hours",
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
    "explanation": "Refer Link –https://docs.snowflake.com/en/user-guide/warehouses-multicluster.html",
    "reference": "https://docs.snowflake.com/en/user-guide/warehouses-multicluster.html",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 4_58_237",
    "number": 58,
    "question": "In a multi cluster warehouse, for each cluster there is a way we can specify different warehouse sizes",
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
    "explanation": "In a multi cluster warehouse, all clusters will have one size only. Refer Link –https://docs.snowflake.com/en/user-guide/warehouses-multicluster.html",
    "reference": "https://docs.snowflake.com/en/user-guide/warehouses-multicluster.html",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 4_59_238",
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
    "explanation": "Refer Link –https://docs.snowflake.com/en/user-guide/warehouses-multicluster.html",
    "reference": "https://docs.snowflake.com/en/user-guide/warehouses-multicluster.html",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 4_60_239",
    "number": 60,
    "question": "In maximized multi-cluster warehouse same value is specified for both maximum & minimum clusters (except for the value 1)",
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
    "explanation": "Refer Link –https://docs.snowflake.com/en/user-guide/warehouses-multicluster.html",
    "reference": "https://docs.snowflake.com/en/user-guide/warehouses-multicluster.html",
    "source": "Test 4",
    "testNumber": 4
  },
  {
    "id": "Test 5_1_240",
    "number": 1,
    "question": "What all objects can be shared?",
    "options": [
      {
        "id": 1,
        "value": "Table"
      },
      {
        "id": 2,
        "value": "Standard View"
      },
      {
        "id": 3,
        "value": "Secure UDF"
      },
      {
        "id": 4,
        "value": "Secure View"
      }
    ],
    "answers": [
      1,
      3,
      4
    ],
    "explanation": "Data Share is meant for Secures access and so, Standard View is not allowed to be shared.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_2_241",
    "number": 2,
    "question": "How can you ignore metadata and load the already loaded staged file into table?",
    "options": [
      {
        "id": 1,
        "value": "Using LOAD = TRUE parameter with COPY INTO command"
      },
      {
        "id": 2,
        "value": "Using FORCE = YES parameter with COPY INTO command"
      },
      {
        "id": 3,
        "value": "Using FORCE = TRUE parameter with COPY INTO command"
      },
      {
        "id": 4,
        "value": "Using LOAD = FORCE parameter with COPY INTO command"
      },
      {
        "id": 5,
        "value": "Using INSERT = TRUE parameter with COPY INTO command"
      },
      {
        "id": 6,
        "value": "Using ACCEPT = TRUE parameter with COPY INTO command"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "FORCE = TRUE parameter specifies to load all files, regardless of whether theyve been loaded previously and have not changed since they were loaded. Note that this option reloads files, potentially duplicating data in a table.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_3_242",
    "number": 3,
    "question": "Which approach would result in improved performance through linear scaling of data ingestion workload?",
    "options": [
      {
        "id": 1,
        "value": "Resize virtual warehouse"
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
    "explanation": "Resize or Scaling up the virtual warehouse improves the performance. It is better that you organize data by granular path, it will help Snowflake find the file easily without wasting it‘s resources on identify the data files. As per best practice, the size of data file should be in the range of 10 MB to 110 MB. Each server can process 8 files in parallel so, breaking a file into small files is the good practice.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_4_243",
    "number": 4,
    "question": "Monica has a EMPLOYEE_DATA table. Monica wants to create another table EMPLOYEE_DATA_OTHER which should be same as EMPLOYEE_DATA table with same data. What is the best option for Monica?",
    "options": [
      {
        "id": 1,
        "value": "CREATE SHARE EMPLOYEE_DATA;"
      },
      {
        "id": 2,
        "value": "Clone the table with same data with SQL command as follows - CREATE TABLE EMPLOYEE_DATA_OTHER CLONE EMPLOYEE_DATA;"
      },
      {
        "id": 3,
        "value": "Create the table with LIKE SQL command as follows - CREATE TABLE EMPLOYEE_DATA_OTHER LIKE EMPLOYEE_DATA;"
      },
      {
        "id": 4,
        "value": "Create the table with same data with SQL command as follows - CREATE TABLE EMPLOYEE_DATA_OTHER AS SELECT * FROM EMPLOYEE_DATA;"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "The best option is the Clone the table as EMPLOYEE_DATA and EMPLOYEE_DATA_OTHER has same structure and same data. It will help save the storage cost. LIKE command only creates empty table.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_5_244",
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
        "value": "Warehouse Cache"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "Metadata Management has following major functions: – Stores metadata as data is loaded into the system – Handles queries that can be processes completely from metadata -Used for Time Travel and Cloning -Every aspect of Snowflake architecture leverages met",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_6_245",
    "number": 6,
    "question": "How to change the current warehouse of a session?",
    "options": [
      {
        "id": 1,
        "value": "None of these"
      },
      {
        "id": 2,
        "value": "Execute SET WAREHOUSE command"
      },
      {
        "id": 3,
        "value": "Execute SELECT WAREHOUSE command"
      },
      {
        "id": 4,
        "value": "Execute USE WAREHOUSE command"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "USE WAREHOUSE; command sets the warehouse for the current session, whereis the name of the warehouse which needs to be set for the session.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_7_246",
    "number": 7,
    "question": "If a server in warehouse cluster runs for 64 seconds, shuts down, and then restarts and runs for less than 60 seconds, for how many seconds it will be billed?",
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
    "id": "Test 5_8_247",
    "number": 8,
    "question": "How can you validate the COPY INTO command before actually loading data into the table?",
    "options": [
      {
        "id": 1,
        "value": "None of these"
      },
      {
        "id": 2,
        "value": "Use parameter VALIDATION_COPY = TRUE | RETURN__ROWS | RETURN_ERRORS |RETURN_ALL_ERRORS with COPY INTO command"
      },
      {
        "id": 3,
        "value": "Simply count the loaded records and match with stage"
      },
      {
        "id": 4,
        "value": "USE parameter VALIDATION_MODE = RETURN__ROWS | RETURN_ERRORS |RETURN_ALL_ERRORS"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "VALIDATION_MODE instructs the COPY command to validate the data files instead of loading them into the specified table; i.e. the COPY command tests the files for errors but does not load them. The command validates the data to be loaded and returns results based on the validation option specified.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_9_248",
    "number": 9,
    "question": "Which security feature is supported in Snowflake?",
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
    "explanation": "Snowflake is highly secured platform and provides multi-level security like MFA, IP whitelisting, SSO, Tri Secret Secure, Role-Based etc.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_10_249",
    "number": 10,
    "question": "Snowflake offers multiple editions. Which one is not a offering from Snowflake.",
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
    "explanation": "Snowflake offers 4 editions: 1 – Standard Edition 2 – Enterprise Edition 3 – Business Critical Edition 4 – Virtual Private Snowflake (VPS)",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_11_250",
    "number": 11,
    "question": "Snowflake offers the early access of staged release to designated Standard Edition Customer. True or false?",
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
    "explanation": "Snowflake offers early access to designated Enterprise (or higher) accounts.Early access is not required or recommended for all organizations with Enterprise Edition accounts; Snowflakes rigorous release testing and monitoring during deployments is usually sufficient to prevent most issues. Early access is intended primarily for organizations that desire added certainty that their production accounts will not be affected by full releases.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_12_251",
    "number": 12,
    "question": "If you want to view query history older than 14 days, where can you go to view it? Choose one path and one “term“ commonly used.",
    "options": [
      {
        "id": 1,
        "value": "SNOWFLAKE (Database) -> ACCOUNT_USAGE (Schema) -> QUERY_HISTORY (Secure View)"
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
    "id": "Test 5_13_252",
    "number": 13,
    "question": "Snowflake data storage costs are calculated based on: (Select 2)",
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
    "explanation": "All storage within Snowflake is billable in compressed format. Snowflake considers the daily average storage (in Terabytes) for billing.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_14_253",
    "number": 14,
    "question": "Snowflake Architecture consists of many separate layers. Please select the correct layers. (Select 3).",
    "options": [
      {
        "id": 1,
        "value": "Cloud Services Layer"
      },
      {
        "id": 2,
        "value": "Database Storage Layer"
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
    "explanation": "Snowflake Architecture consists of Cloud Services Layer, Query Processing (Warehouse) Layer and Cloud Services Layer.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_15_254",
    "number": 15,
    "question": "Which vendors do support Snowflake natively for federated authentication and SSO?",
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
    "explanation": "Okta and Microsoft ADFS provide native Snowflake support for federated authentication and SSO. Other are not native but Snowflake supports using SAML 2.0-compliant.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_16_255",
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
    "id": "Test 5_17_256",
    "number": 17,
    "question": "Which query will require compute (Virtual Warehouse)? Consider table created as – CREATE or replace TABLE T1 ( ID number(2), Name varchar(20), ID number (11,2) );",
    "options": [
      {
        "id": 1,
        "value": "SHOW DATABASES;"
      },
      {
        "id": 2,
        "value": "SELECT CURRENT_ACCOUNT();"
      },
      {
        "id": 3,
        "value": "SELECT MAX(ID) FROM T1;"
      },
      {
        "id": 4,
        "value": "SELECT * FROM T1;"
      },
      {
        "id": 5,
        "value": "SELECT MIN(ID) FROM T1;"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "Except SELECT * FROM T1, all the queries return results from cloud services layer metadata, So these queries do not need a running Virtual Warehouse.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_18_257",
    "number": 18,
    "question": "Snowflake Resource Monitor allows administrators to set thresholds and triggers to track credit usage. What methods are most effective for resource monitoring? (Check all that apply).",
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
    "explanation": "Resource monitors are not intended for strictly controlling consumption on an hourly basis; they are intended for tracking and controlling credit consumption per interval (day, week, month, etc.). Also, they are not intended for setting precise limits on credit usage (i.e. down to the level of individual credits). For example, when credit quota thresholds are reached for a resource monitor, the assigned warehouses may take some time to suspend, even when the action is Suspend Immediate, thereby consuming additional credits.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_19_258",
    "number": 19,
    "question": "John wants to create a warehouse which should not start immediately. Which property will him to create a warehouse in suspended mode.",
    "options": [
      {
        "id": 1,
        "value": "AUTO_SUSPEND = INITIAL"
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
    "explanation": "INITIALLY_SUSPENDED = TRUE will not start the warehouse after creation. By default it is set to FALSE.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_20_259",
    "number": 20,
    "question": "What action causes a Warehouse‘s cache to be purged?",
    "options": [
      {
        "id": 1,
        "value": "The passing of 24 hours."
      },
      {
        "id": 2,
        "value": "Resuming the warehouse."
      },
      {
        "id": 3,
        "value": "Suspending the warehouse."
      },
      {
        "id": 4,
        "value": "A change to the Metadata Cache size."
      }
    ],
    "answers": [
      3
    ],
    "explanation": "Cache gets purged on suspending the warehouse.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_21_260",
    "number": 21,
    "question": "A user‘s default role is",
    "options": [
      {
        "id": 1,
        "value": "The name used to log in to the WebUI"
      },
      {
        "id": 2,
        "value": "The user‘s default role is always PUBLIC"
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
    "id": "Test 5_22_261",
    "number": 22,
    "question": "What is the best practice after creating a custom role in a Snowflake account?",
    "options": [
      {
        "id": 1,
        "value": "Grant the role to the USERADMIN role so users can be added to the role."
      },
      {
        "id": 2,
        "value": "Grant ownership of the role to itself so a member of the role can control access to the role"
      },
      {
        "id": 3,
        "value": "Grant PUBLIC to the role so all database objects owned by PUBLIC will be available to the new role"
      },
      {
        "id": 4,
        "value": "Grant ownership to the SYSADMIN role or a child role under SYSADMIN"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "Custom role is mostly created for specific access of specific objects. As per best practice to grant ownership to SYSADMIN or child role under SYSADMIN so that SYSADMIN can control the access on the objects.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_23_262",
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
    "id": "Test 5_24_263",
    "number": 24,
    "question": "Secured view can be used to hide the definition but its performance can get degraded?",
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
    "explanation": "Secure views should not be used for views that are defined for query convenience, such as views created for simplifying querying data for which users do not need to understand the underlying data representation. This is because the Snowflake query optimizer, when evaluating secure views, bypasses certain optimizations used for regular views. This might result in some impact on query performance for secure views.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_25_264",
    "number": 25,
    "question": "Which Snowflake Editions have Elastic Data Warehousing. Check all the Snowflake editions that have Elastic Data Warehousing enabled.",
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
        "value": "Virtual Private Snowflake"
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
    "explanation": "Standard Edition only has Single Compute Cluster. Premium is not a Snowflake edition. All other editions have multi clusters capability.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_26_265",
    "number": 26,
    "question": "In the History Page, a query shows Bytes Scanned having Assigned Partitions: 110, Scanned Partitions 58, and Original Partitions 110. Why did the optimizer show fewer partitions scanned than assigned?",
    "options": [
      {
        "id": 1,
        "value": "The static optimization determined the number of possible micro partitions would be 110 but the dynamic optimization was able to prune some of the partitions from a joined table"
      },
      {
        "id": 2,
        "value": "During the execution of the query, new data was added to the table and the optimizer had to add those micro partitions into the scan."
      },
      {
        "id": 3,
        "value": "The query was using an Xlarge warehouse and could scan the partitions in parallel"
      },
      {
        "id": 4,
        "value": "The optimizer estimated only 58 partitions would need to be scan but during the execution of the query, the optimizer realized it would have to read all 110 micro partitions"
      },
      {
        "id": 5,
        "value": "One of the tables in the query was an external table and didnt have micro partitions The metadata for the table was out of date and there were really only 58 partitions total"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "Snowflake produces well-clustered data in tables in micro-partitions. Snowflake only targets those micro-partitions which come under the range of query criteria. If table is clustered well, Snowflake scans only few of the micro-partitions.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_27_266",
    "number": 27,
    "question": "John wants to create a Warehouse which can auto resume whenever there is a new load / query to execute. How should he configure the warehouse?",
    "options": [
      {
        "id": 1,
        "value": "AUTO_SUSPEND = TRUE"
      },
      {
        "id": 2,
        "value": "AUTO_RESUME = TRUE"
      },
      {
        "id": 3,
        "value": "AUTO_RESUME = 1"
      },
      {
        "id": 4,
        "value": "It is always manual and cant be automated."
      }
    ],
    "answers": [
      2
    ],
    "explanation": "AUTO_RESUME = TRUE resumes the warehouse automatically whenever there is new load or query needing a warehouse.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_28_267",
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
    "explanation": "First step is extraction of data from source and then Transform before loading into target database like in Snowflake.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_29_268",
    "number": 29,
    "question": "Monica is a new Snowflake user with ACCOUNTADMIN role. She wants to create a warehouse which can scale out if needed. She tried to create the warehouse using UI but she is not able to find the options to set Minimum and Maximum Clusters. What could be the issue?",
    "options": [
      {
        "id": 1,
        "value": "She should use SQL command to create the Warehouse with Minimum and Maximum clusters"
      },
      {
        "id": 2,
        "value": "She should ALTER any existing warehouse to set the Maximum and Minimum clusters"
      },
      {
        "id": 3,
        "value": "She doesn‘t have enough privilege to create a warehouse"
      },
      {
        "id": 4,
        "value": "She is using STANDARD Snowflake edition. Multi-Cluster is not available in STANDARD edition."
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
    "id": "Test 5_30_269",
    "number": 30,
    "question": "What all commands will you use to load data from your Local File System to Snowflake table?",
    "options": [
      {
        "id": 1,
        "value": "Only PUT command"
      },
      {
        "id": 2,
        "value": "COPY INTO followed by PUT command"
      },
      {
        "id": 3,
        "value": "PUT COMMAND followed by COPY INTO"
      },
      {
        "id": 4,
        "value": "Only COPY INTO command"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "When loading data from local file system to Snowflake, you need to first run PUT command to load data from local file system to Snowflake internal stage and then run COPY INTO command to copy data from Snowflake internal stage to Table.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_31_270",
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
    "explanation": "Snowflake loads semi-structured data into a single VARIANT column. The VARIANT data type imposes a 16 MB (compressed) size limit on individual rows.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_32_271",
    "number": 32,
    "question": "Snowflake maintains detailed metadata for each table into which data is loaded. For how long Snowflake keeps the metadata active?",
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
    "explanation": "Snowflake maintains detailed metadata for each table into which data is loaded, including: -Name of each file from which data was load -File Size -ETag for the file -Number of rows parsed in the file -Timestamp of the last load for the file -Information about any errors encountered in the file during loading The load metadata expires after 64 days.(LAST_MODIFIED date for a staged data).",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_33_272",
    "number": 33,
    "question": "If a DBA_ROLE creates a Database. Later the DBA_ROLE was dropped. Who will own the Database now which was created by DBA_ROLE?",
    "options": [
      {
        "id": 1,
        "value": "Database will be dropped"
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
        "value": "DBA_ROLE cant be dropped as it is the owner of the Database."
      }
    ],
    "answers": [
      3
    ],
    "explanation": "The role who dropped the DBA_ROLE will own that database. (IMPORTANT QUESTION)",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_34_273",
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
    "id": "Test 5_35_274",
    "number": 35,
    "question": "What all commands will you use to unload data from your Snowflake table to your local file systems?",
    "options": [
      {
        "id": 1,
        "value": "Only COPY INTO command"
      },
      {
        "id": 2,
        "value": "COPY INTO command followed by GET command"
      },
      {
        "id": 3,
        "value": "Only GET command"
      },
      {
        "id": 4,
        "value": "COPY INTO followed by PUT command"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "First copy the data from Snowflake table to Internal Stage using COPY INTO command and then unload data from internal stage to your local file system using GET command.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_36_275",
    "number": 36,
    "question": "Snowflake has a default file format if none is explicitly set or declared in SQL syntax. (TRUE / FALSE)",
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
    "explanation": "True, Snowflake has a default file format if none is explicitly set or declared in SQL syntax",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_37_276",
    "number": 37,
    "question": "Semi-Structured data must be transformed prior to loading the data into a Snowflake table. (TRUE / FALSE)",
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
    "explanation": "Snowflake natively supports semi-structured data, it is not must to transformed Semi-Structured data prior to loading the data into a Snowflake table.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_38_277",
    "number": 38,
    "question": "What is the best option to automatically delete the files from stage after it got loaded using COPY INTO command?",
    "options": [
      {
        "id": 1,
        "value": "Cloud provider deletes the file automatically"
      },
      {
        "id": 2,
        "value": "Setting DELETE = TRUE in COPY INTO command"
      },
      {
        "id": 3,
        "value": "Delete manually using Cloud Provide UI delete option as soon as file is loaded"
      },
      {
        "id": 4,
        "value": "Setting PURGE = TRUE in COPY INTO command"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "PURGE = TRUE parameter helps remove the data files from the stage automatically after the data is loaded successfully. If the purge operation fails for any reason, no error is returned currently. So, you should also run LIST command periodically to check the available files in stage and manually remove successfully loaded files, if any exist.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_39_278",
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
    "id": "Test 5_40_279",
    "number": 40,
    "question": "How can you validate the COPY INTO command before actually loading data into the table?",
    "options": [
      {
        "id": 1,
        "value": "Simply count the loaded records and match with stage"
      },
      {
        "id": 2,
        "value": "USE parameter VALIDATION_MODE = RETURN__ROWS | RETURN_ERRORS |RETURN_ALL_ERRORS"
      },
      {
        "id": 3,
        "value": "Use parameter VALIDATION_COPY = TRUE | RETURN__ROWS | RETURN_ERRORS |RETURN_ALL_ERRORS with COPY INTO command"
      },
      {
        "id": 4,
        "value": "None of these"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "VALIDATION_MODE instructs the COPY command to validate the data files instead of loading them into the specified table; i.e. the COPY command tests the files for errors but does not load them. The command validates the data to be loaded and returns results based on the validation option specified.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_41_280",
    "number": 41,
    "question": "Which of the following workload is Snowflake suited for?",
    "options": [
      {
        "id": 1,
        "value": "Data Lakes"
      },
      {
        "id": 2,
        "value": "Data Warehouse"
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
        "value": "Data Sharing and Exchanges"
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
    "explanation": "Snowflake is not a just Data Warehouse platform. It is a Data platform which can handle all of these workloads.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_42_281",
    "number": 42,
    "question": "Reclustering in Snowflake is automatic. (TRUE / FALSE)",
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
    "explanation": "Reclustering in Snowflake is automatic; no maintenance is needed.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_43_282",
    "number": 43,
    "question": "John wants to create a multi-cluster warehouse and wants to make sure that whenever new queries are queued, additional clusters should start immediately. How should he configure the Warehouse?",
    "options": [
      {
        "id": 1,
        "value": "Configure as SCALE-MAX so that the warehouse is always using maximum number of specified clusters"
      },
      {
        "id": 2,
        "value": "Snowflake takes care of this automatically so, John does not have to worry about it"
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
    "explanation": "If a multi-cluster warehouse is configured with SCALING policy as STANDARD it immediately when either a query is queued or the system detects that theres one more query than the currently-running clusters can execute",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_44_283",
    "number": 44,
    "question": "At what frequency does Snowflake rotate the object keys?",
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
    "id": "Test 5_45_284",
    "number": 45,
    "question": "What is the default compression algorithm Snowflake apply while unloading data?",
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
    "id": "Test 5_46_285",
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
    "explanation": "This is not a best practice, it may create reloading issue. To avoid reloading files (and duplicating data), Snowflake recommends loading data from a specific set of files using either bulk data loading or Snowpipe but not both.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_47_286",
    "number": 47,
    "question": "What are the correct SQL extensions used in querying data from Time Travel? Select 2.",
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
    "id": "Test 5_48_287",
    "number": 48,
    "question": "Snowflake supports transforming data while loading it into a table using the COPY command. What all options you have?",
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
    "explanation": "Snowflake supports transforming data while loading it into a table using the COPY command. Options include: – Column reordering – Column omission – Casts – Truncating text strings that exceed the target column length There is no requirement for your data files to have the same number and ordering of columns as your target table. The COPY INTO transformations do not support FLATTEN, JOIN, GROUP BY.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_49_288",
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
    "explanation": "External Stage and Internal Named stages are the two variant. Other stages are not names like User Stage and Table Stage.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_50_289",
    "number": 50,
    "question": "Which type of view is most like a table?",
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
    "id": "Test 5_51_290",
    "number": 51,
    "question": "Which Snowflake edition does allow for customer-managed keys encryption.",
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
    "id": "Test 5_52_291",
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
    "explanation": "STRIP_OUTER_ARRAY = TRUE in COPY INTO command removes the outer array structure and load the records into separate table rows.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_53_292",
    "number": 53,
    "question": "Which Snowflake Object is a named wrapper around a cluster of servers with CPU, memory, and disk",
    "options": [
      {
        "id": 1,
        "value": "Schema"
      },
      {
        "id": 2,
        "value": "Database"
      },
      {
        "id": 3,
        "value": "Storage"
      },
      {
        "id": 4,
        "value": "Virtual Warehouse"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "Virtual Warehouse is the snowflake object which is a named wrapper around a cluster of servers with CPU, memory and disk. It‘s Snowflake who managed all the complex setup behind the scene. User does not need to configure EC2 instance, physical servers or anything like that.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_54_293",
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
        "value": "Handles Queries that can be processes completely from metadata"
      },
      {
        "id": 4,
        "value": "Used for Time Travel and Cloning"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "Metadata Management has following major functions: – Stores metadata as data is loaded into the system – Handles queries that can be processes completely from metadata -Used for Time Travel and Cloning -Every aspect of Snowflake architecture leverages metadata",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_55_294",
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
        "value": "Type the command SELECT RESULTS(-3) into the Worksheet and click “Run“"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "The History page displays queries executed in the last 14 days, starting with the most recent ones. You can use the End Time filter to display queries based on a specified date; however, if you specify a date earlier than the last 14 days, no results are returned. You can export results only for queries for which you can view the results (i.e. queries youve executed). If you didnt execute a query or the query result is no longer available, the Export Result button is not displayed for the query. The web interface only supports exporting results up to 100 MB in size. If a query result exceeds this limit, you are prompted whether to proceed with the export. The export prompts may differ depending on your browser. For example, in Safari, you are prompted only for an export format (CSV or TSV). After the export completes, you are prompted to download the exported result to a new window, in which you can use the Save Page As browser option to save the result to a file.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_56_295",
    "number": 56,
    "question": "A CAST command (symbol) will force a value to be output as a certain datatype. Which of the following code samples will result in the “employeename“ being output using the VARCHAR datatype?",
    "options": [
      {
        "id": 1,
        "value": "SELECT employeename::VARCHAR"
      },
      {
        "id": 2,
        "value": "SELECT employeename||VARCHAR"
      },
      {
        "id": 3,
        "value": "SELECT VARCHAR(employeename)"
      },
      {
        "id": 4,
        "value": "SELECT employeename AS VARCHAR"
      }
    ],
    "answers": [
      1
    ],
    "explanation": ":: is used for Casting in Snowflake.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_57_296",
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
    "id": "Test 5_58_297",
    "number": 58,
    "question": "Which are the correct statements about STREAMS?",
    "options": [
      {
        "id": 1,
        "value": "Streams is used to identify and act on changed table records"
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
    "explanation": "Tasks is used to scheduled SQL execution. A stream records data manipulation language (DML) changes made to a table, including information about inserts, updates, and deletes. It can be combine with TASKS to design some valuable solution.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_59_298",
    "number": 59,
    "question": "Snowflake provides standard and powerful features that ensure the highest levels of security for your account and users if used properly. Which are the true statements about Snowflake Security?",
    "options": [
      {
        "id": 1,
        "value": "Federated authentication in Snowflake is compliant with SAML 2.0"
      },
      {
        "id": 2,
        "value": "Tri-secret requires that customers manage their own keys"
      },
      {
        "id": 3,
        "value": "Snowflake supports user-based access control"
      }
    ],
    "answers": [
      1,
      2
    ],
    "explanation": "Along with Tri-Secret and Federated authentication, Snowflake supports ROLE-based access control.",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 5_60_299",
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
    "explanation": "Snowpipe is designed to load new data typically within a minute after a file notification is sent. Follow the best practices as per bulk loading for file sizes (10 MB – 100 MB compressed) but split into more files if it takes more than a minute",
    "reference": "",
    "source": "Test 5",
    "testNumber": 5
  },
  {
    "id": "Test 6_1_300",
    "number": 1,
    "question": "What all objects can be shared?",
    "options": [
      {
        "id": 1,
        "value": "Table"
      },
      {
        "id": 2,
        "value": "Standard View"
      },
      {
        "id": 3,
        "value": "Secure UDF"
      },
      {
        "id": 4,
        "value": "Secure View"
      }
    ],
    "answers": [
      1,
      3,
      4
    ],
    "explanation": "Data Share is meant for Secures access and so, Standard View is not allowed to be shared.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_2_301",
    "number": 2,
    "question": "How can you ignore metadata and load the already loaded staged file into table?",
    "options": [
      {
        "id": 1,
        "value": "Using LOAD = TRUE parameter with COPY INTO command"
      },
      {
        "id": 2,
        "value": "Using FORCE = YES parameter with COPY INTO command"
      },
      {
        "id": 3,
        "value": "Using FORCE = TRUE parameter with COPY INTO command"
      },
      {
        "id": 4,
        "value": "Using LOAD = FORCE parameter with COPY INTO command"
      },
      {
        "id": 5,
        "value": "Using INSERT = TRUE parameter with COPY INTO command"
      },
      {
        "id": 6,
        "value": "Using ACCEPT = TRUE parameter with COPY INTO command"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "FORCE = TRUE parameter specifies to load all files, regardless of whether theyve been loaded previously and have not changed since they were loaded. Note that this option reloads files, potentially duplicating data in a table.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_3_302",
    "number": 3,
    "question": "Which approach would result in improved performance through linear scaling of data ingestion workload?",
    "options": [
      {
        "id": 1,
        "value": "Resize virtual warehouse"
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
    "explanation": "Resize or Scaling up the virtual warehouse improves the performance. It is better that you organize data by granular path, it will help Snowflake find the file easily without wasting it‘s resources on identify the data files. As per best practice, the size of data file should be in the range of 10 MB to 110 MB. Each server can process 8 files in parallel so, breaking a file into small files is the good practice.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_4_303",
    "number": 4,
    "question": "Monica has a EMPLOYEE_DATA table. Monica wants to create another table EMPLOYEE_DATA_OTHER which should be same as EMPLOYEE_DATA table with same data. What is the best option for Monica?",
    "options": [
      {
        "id": 1,
        "value": "CREATE SHARE EMPLOYEE_DATA;"
      },
      {
        "id": 2,
        "value": "Clone the table with same data with SQL command as follows - CREATE TABLE EMPLOYEE_DATA_OTHER CLONE EMPLOYEE_DATA;"
      },
      {
        "id": 3,
        "value": "Create the table with LIKE SQL command as follows - CREATE TABLE EMPLOYEE_DATA_OTHER LIKE EMPLOYEE_DATA;"
      },
      {
        "id": 4,
        "value": "Create the table with same data with SQL command as follows - CREATE TABLE EMPLOYEE_DATA_OTHER AS SELECT * FROM EMPLOYEE_DATA;"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "The best option is the Clone the table as EMPLOYEE_DATA and EMPLOYEE_DATA_OTHER has same structure and same data. It will help save the storage cost. LIKE command only creates empty table.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_5_304",
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
        "value": "Warehouse Cache"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "Metadata Management has following major functions: – Stores metadata as data is loaded into the system – Handles queries that can be processes completely from metadata -Used for Time Travel and Cloning -Every aspect of Snowflake architecture leverages met",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_6_305",
    "number": 6,
    "question": "How to change the current warehouse of a session?",
    "options": [
      {
        "id": 1,
        "value": "None of these"
      },
      {
        "id": 2,
        "value": "Execute SET WAREHOUSE command"
      },
      {
        "id": 3,
        "value": "Execute SELECT WAREHOUSE command"
      },
      {
        "id": 4,
        "value": "Execute USE WAREHOUSE command"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "USE WAREHOUSE; command sets the warehouse for the current session, whereis the name of the warehouse which needs to be set for the session.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_7_306",
    "number": 7,
    "question": "If a server in warehouse cluster runs for 64 seconds, shuts down, and then restarts and runs for less than 60 seconds, for how many seconds it will be billed?",
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
    "id": "Test 6_8_307",
    "number": 8,
    "question": "How can you validate the COPY INTO command before actually loading data into the table?",
    "options": [
      {
        "id": 1,
        "value": "None of these"
      },
      {
        "id": 2,
        "value": "Use parameter VALIDATION_COPY = TRUE | RETURN__ROWS | RETURN_ERRORS |RETURN_ALL_ERRORS with COPY INTO command"
      },
      {
        "id": 3,
        "value": "Simply count the loaded records and match with stage"
      },
      {
        "id": 4,
        "value": "USE parameter VALIDATION_MODE = RETURN__ROWS | RETURN_ERRORS |RETURN_ALL_ERRORS"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "VALIDATION_MODE instructs the COPY command to validate the data files instead of loading them into the specified table; i.e. the COPY command tests the files for errors but does not load them. The command validates the data to be loaded and returns results based on the validation option specified.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_9_308",
    "number": 9,
    "question": "Which security feature is supported in Snowflake?",
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
    "explanation": "Snowflake is highly secured platform and provides multi-level security like MFA, IP whitelisting, SSO, Tri Secret Secure, Role-Based etc.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_10_309",
    "number": 10,
    "question": "Snowflake offers multiple editions. Which one is not a offering from Snowflake.",
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
    "explanation": "Snowflake offers 4 editions: 1 – Standard Edition 2 – Enterprise Edition 3 – Business Critical Edition 4 – Virtual Private Snowflake (VPS)",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_11_310",
    "number": 11,
    "question": "Snowflake offers the early access of staged release to designated Standard Edition Customer. True or false?",
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
    "explanation": "Snowflake offers early access to designated Enterprise (or higher) accounts.Early access is not required or recommended for all organizations with Enterprise Edition accounts; Snowflakes rigorous release testing and monitoring during deployments is usually sufficient to prevent most issues. Early access is intended primarily for organizations that desire added certainty that their production accounts will not be affected by full releases.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_12_311",
    "number": 12,
    "question": "If you want to view query history older than 14 days, where can you go to view it? Choose one path and one “term“ commonly used.",
    "options": [
      {
        "id": 1,
        "value": "SNOWFLAKE (Database) -> ACCOUNT_USAGE (Schema) -> QUERY_HISTORY (Secure View)"
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
    "id": "Test 6_13_312",
    "number": 13,
    "question": "Snowflake data storage costs are calculated based on: (Select 2)",
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
    "explanation": "All storage within Snowflake is billable in compressed format. Snowflake considers the daily average storage (in Terabytes) for billing.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_14_313",
    "number": 14,
    "question": "Snowflake Architecture consists of many separate layers. Please select the correct layers. (Select 3).",
    "options": [
      {
        "id": 1,
        "value": "Cloud Services Layer"
      },
      {
        "id": 2,
        "value": "Database Storage Layer"
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
    "explanation": "Snowflake Architecture consists of Cloud Services Layer, Query Processing (Warehouse) Layer and Cloud Services Layer.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_15_314",
    "number": 15,
    "question": "Which vendors do support Snowflake natively for federated authentication and SSO?",
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
    "explanation": "Okta and Microsoft ADFS provide native Snowflake support for federated authentication and SSO. Other are not native but Snowflake supports using SAML 2.0-compliant.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_16_315",
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
    "id": "Test 6_17_316",
    "number": 17,
    "question": "Which query will require compute (Virtual Warehouse)? Consider table created as – CREATE or replace TABLE T1 ( ID number(2), Name varchar(20), ID number (11,2) );",
    "options": [
      {
        "id": 1,
        "value": "SHOW DATABASES;"
      },
      {
        "id": 2,
        "value": "SELECT CURRENT_ACCOUNT();"
      },
      {
        "id": 3,
        "value": "SELECT MAX(ID) FROM T1;"
      },
      {
        "id": 4,
        "value": "SELECT * FROM T1;"
      },
      {
        "id": 5,
        "value": "SELECT MIN(ID) FROM T1;"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "Except SELECT * FROM T1, all the queries return results from cloud services layer metadata, So these queries do not need a running Virtual Warehouse.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_18_317",
    "number": 18,
    "question": "Snowflake Resource Monitor allows administrators to set thresholds and triggers to track credit usage. What methods are most effective for resource monitoring? (Check all that apply).",
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
    "explanation": "Resource monitors are not intended for strictly controlling consumption on an hourly basis; they are intended for tracking and controlling credit consumption per interval (day, week, month, etc.). Also, they are not intended for setting precise limits on credit usage (i.e. down to the level of individual credits). For example, when credit quota thresholds are reached for a resource monitor, the assigned warehouses may take some time to suspend, even when the action is Suspend Immediate, thereby consuming additional credits.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_19_318",
    "number": 19,
    "question": "John wants to create a warehouse which should not start immediately. Which property will him to create a warehouse in suspended mode.",
    "options": [
      {
        "id": 1,
        "value": "AUTO_SUSPEND = INITIAL"
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
    "explanation": "INITIALLY_SUSPENDED = TRUE will not start the warehouse after creation. By default it is set to FALSE.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_20_319",
    "number": 20,
    "question": "What action causes a Warehouse‘s cache to be purged?",
    "options": [
      {
        "id": 1,
        "value": "The passing of 24 hours."
      },
      {
        "id": 2,
        "value": "Resuming the warehouse."
      },
      {
        "id": 3,
        "value": "Suspending the warehouse."
      },
      {
        "id": 4,
        "value": "A change to the Metadata Cache size."
      }
    ],
    "answers": [
      3
    ],
    "explanation": "Cache gets purged on suspending the warehouse.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_21_320",
    "number": 21,
    "question": "A user‘s default role is",
    "options": [
      {
        "id": 1,
        "value": "The name used to log in to the WebUI"
      },
      {
        "id": 2,
        "value": "The user‘s default role is always PUBLIC"
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
    "id": "Test 6_22_321",
    "number": 22,
    "question": "What is the best practice after creating a custom role in a Snowflake account?",
    "options": [
      {
        "id": 1,
        "value": "Grant the role to the USERADMIN role so users can be added to the role."
      },
      {
        "id": 2,
        "value": "Grant ownership of the role to itself so a member of the role can control access to the role"
      },
      {
        "id": 3,
        "value": "Grant PUBLIC to the role so all database objects owned by PUBLIC will be available to the new role"
      },
      {
        "id": 4,
        "value": "Grant ownership to the SYSADMIN role or a child role under SYSADMIN"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "Custom role is mostly created for specific access of specific objects. As per best practice to grant ownership to SYSADMIN or child role under SYSADMIN so that SYSADMIN can control the access on the objects.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_23_322",
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
    "id": "Test 6_24_323",
    "number": 24,
    "question": "Secured view can be used to hide the definition but its performance can get degraded?",
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
    "explanation": "Secure views should not be used for views that are defined for query convenience, such as views created for simplifying querying data for which users do not need to understand the underlying data representation. This is because the Snowflake query optimizer, when evaluating secure views, bypasses certain optimizations used for regular views. This might result in some impact on query performance for secure views.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_25_324",
    "number": 25,
    "question": "Which Snowflake Editions have Elastic Data Warehousing. Check all the Snowflake editions that have Elastic Data Warehousing enabled.",
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
        "value": "Virtual Private Snowflake"
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
    "explanation": "Standard Edition only has Single Compute Cluster. Premium is not a Snowflake edition. All other editions have multi clusters capability.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_26_325",
    "number": 26,
    "question": "In the History Page, a query shows Bytes Scanned having Assigned Partitions: 110, Scanned Partitions 58, and Original Partitions 110. Why did the optimizer show fewer partitions scanned than assigned?",
    "options": [
      {
        "id": 1,
        "value": "The static optimization determined the number of possible micro partitions would be 110 but the dynamic optimization was able to prune some of the partitions from a joined table"
      },
      {
        "id": 2,
        "value": "During the execution of the query, new data was added to the table and the optimizer had to add those micro partitions into the scan."
      },
      {
        "id": 3,
        "value": "The query was using an Xlarge warehouse and could scan the partitions in parallel"
      },
      {
        "id": 4,
        "value": "The optimizer estimated only 58 partitions would need to be scan but during the execution of the query, the optimizer realized it would have to read all 110 micro partitions"
      },
      {
        "id": 5,
        "value": "One of the tables in the query was an external table and didnt have micro partitions The metadata for the table was out of date and there were really only 58 partitions total"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "Snowflake produces well-clustered data in tables in micro-partitions. Snowflake only targets those micro-partitions which come under the range of query criteria. If table is clustered well, Snowflake scans only few of the micro-partitions.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_27_326",
    "number": 27,
    "question": "John wants to create a Warehouse which can auto resume whenever there is a new load / query to execute. How should he configure the warehouse?",
    "options": [
      {
        "id": 1,
        "value": "AUTO_SUSPEND = TRUE"
      },
      {
        "id": 2,
        "value": "AUTO_RESUME = TRUE"
      },
      {
        "id": 3,
        "value": "AUTO_RESUME = 1"
      },
      {
        "id": 4,
        "value": "It is always manual and cant be automated."
      }
    ],
    "answers": [
      2
    ],
    "explanation": "AUTO_RESUME = TRUE resumes the warehouse automatically whenever there is new load or query needing a warehouse.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_28_327",
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
    "explanation": "First step is extraction of data from source and then Transform before loading into target database like in Snowflake.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_29_328",
    "number": 29,
    "question": "Monica is a new Snowflake user with ACCOUNTADMIN role. She wants to create a warehouse which can scale out if needed. She tried to create the warehouse using UI but she is not able to find the options to set Minimum and Maximum Clusters. What could be the issue?",
    "options": [
      {
        "id": 1,
        "value": "She should use SQL command to create the Warehouse with Minimum and Maximum clusters"
      },
      {
        "id": 2,
        "value": "She should ALTER any existing warehouse to set the Maximum and Minimum clusters"
      },
      {
        "id": 3,
        "value": "She doesn‘t have enough privilege to create a warehouse"
      },
      {
        "id": 4,
        "value": "She is using STANDARD Snowflake edition. Multi-Cluster is not available in STANDARD edition."
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
    "id": "Test 6_30_329",
    "number": 30,
    "question": "What all commands will you use to load data from your Local File System to Snowflake table?",
    "options": [
      {
        "id": 1,
        "value": "Only PUT command"
      },
      {
        "id": 2,
        "value": "COPY INTO followed by PUT command"
      },
      {
        "id": 3,
        "value": "PUT COMMAND followed by COPY INTO"
      },
      {
        "id": 4,
        "value": "Only COPY INTO command"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "When loading data from local file system to Snowflake, you need to first run PUT command to load data from local file system to Snowflake internal stage and then run COPY INTO command to copy data from Snowflake internal stage to Table.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_31_330",
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
    "explanation": "Snowflake loads semi-structured data into a single VARIANT column. The VARIANT data type imposes a 16 MB (compressed) size limit on individual rows.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_32_331",
    "number": 32,
    "question": "Snowflake maintains detailed metadata for each table into which data is loaded. For how long Snowflake keeps the metadata active?",
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
    "explanation": "Snowflake maintains detailed metadata for each table into which data is loaded, including: -Name of each file from which data was load -File Size -ETag for the file -Number of rows parsed in the file -Timestamp of the last load for the file -Information about any errors encountered in the file during loading The load metadata expires after 64 days.(LAST_MODIFIED date for a staged data).",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_33_332",
    "number": 33,
    "question": "If a DBA_ROLE creates a Database. Later the DBA_ROLE was dropped. Who will own the Database now which was created by DBA_ROLE?",
    "options": [
      {
        "id": 1,
        "value": "Database will be dropped"
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
        "value": "DBA_ROLE cant be dropped as it is the owner of the Database."
      }
    ],
    "answers": [
      3
    ],
    "explanation": "The role who dropped the DBA_ROLE will own that database. (IMPORTANT QUESTION)",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_34_333",
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
    "id": "Test 6_35_334",
    "number": 35,
    "question": "What all commands will you use to unload data from your Snowflake table to your local file systems?",
    "options": [
      {
        "id": 1,
        "value": "Only COPY INTO command"
      },
      {
        "id": 2,
        "value": "COPY INTO command followed by GET command"
      },
      {
        "id": 3,
        "value": "Only GET command"
      },
      {
        "id": 4,
        "value": "COPY INTO followed by PUT command"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "First copy the data from Snowflake table to Internal Stage using COPY INTO command and then unload data from internal stage to your local file system using GET command.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_36_335",
    "number": 36,
    "question": "Snowflake has a default file format if none is explicitly set or declared in SQL syntax. (TRUE / FALSE)",
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
    "explanation": "True, Snowflake has a default file format if none is explicitly set or declared in SQL syntax",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_37_336",
    "number": 37,
    "question": "Semi-Structured data must be transformed prior to loading the data into a Snowflake table. (TRUE / FALSE)",
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
    "explanation": "Snowflake natively supports semi-structured data, it is not must to transformed Semi-Structured data prior to loading the data into a Snowflake table.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_38_337",
    "number": 38,
    "question": "What is the best option to automatically delete the files from stage after it got loaded using COPY INTO command?",
    "options": [
      {
        "id": 1,
        "value": "Cloud provider deletes the file automatically"
      },
      {
        "id": 2,
        "value": "Setting DELETE = TRUE in COPY INTO command"
      },
      {
        "id": 3,
        "value": "Delete manually using Cloud Provide UI delete option as soon as file is loaded"
      },
      {
        "id": 4,
        "value": "Setting PURGE = TRUE in COPY INTO command"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "PURGE = TRUE parameter helps remove the data files from the stage automatically after the data is loaded successfully. If the purge operation fails for any reason, no error is returned currently. So, you should also run LIST command periodically to check the available files in stage and manually remove successfully loaded files, if any exist.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_39_338",
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
    "id": "Test 6_40_339",
    "number": 40,
    "question": "How can you validate the COPY INTO command before actually loading data into the table?",
    "options": [
      {
        "id": 1,
        "value": "Simply count the loaded records and match with stage"
      },
      {
        "id": 2,
        "value": "USE parameter VALIDATION_MODE = RETURN__ROWS | RETURN_ERRORS |RETURN_ALL_ERRORS"
      },
      {
        "id": 3,
        "value": "Use parameter VALIDATION_COPY = TRUE | RETURN__ROWS | RETURN_ERRORS |RETURN_ALL_ERRORS with COPY INTO command"
      },
      {
        "id": 4,
        "value": "None of these"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "VALIDATION_MODE instructs the COPY command to validate the data files instead of loading them into the specified table; i.e. the COPY command tests the files for errors but does not load them. The command validates the data to be loaded and returns results based on the validation option specified.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_41_340",
    "number": 41,
    "question": "Which of the following workload is Snowflake suited for?",
    "options": [
      {
        "id": 1,
        "value": "Data Lakes"
      },
      {
        "id": 2,
        "value": "Data Warehouse"
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
        "value": "Data Sharing and Exchanges"
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
    "explanation": "Snowflake is not a just Data Warehouse platform. It is a Data platform which can handle all of these workloads.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_42_341",
    "number": 42,
    "question": "Reclustering in Snowflake is automatic. (TRUE / FALSE)",
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
    "explanation": "Reclustering in Snowflake is automatic; no maintenance is needed.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_43_342",
    "number": 43,
    "question": "John wants to create a multi-cluster warehouse and wants to make sure that whenever new queries are queued, additional clusters should start immediately. How should he configure the Warehouse?",
    "options": [
      {
        "id": 1,
        "value": "Configure as SCALE-MAX so that the warehouse is always using maximum number of specified clusters"
      },
      {
        "id": 2,
        "value": "Snowflake takes care of this automatically so, John does not have to worry about it"
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
    "explanation": "If a multi-cluster warehouse is configured with SCALING policy as STANDARD it immediately when either a query is queued or the system detects that theres one more query than the currently-running clusters can execute",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_44_343",
    "number": 44,
    "question": "At what frequency does Snowflake rotate the object keys?",
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
    "id": "Test 6_45_344",
    "number": 45,
    "question": "What is the default compression algorithm Snowflake apply while unloading data?",
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
    "id": "Test 6_46_345",
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
    "explanation": "This is not a best practice, it may create reloading issue. To avoid reloading files (and duplicating data), Snowflake recommends loading data from a specific set of files using either bulk data loading or Snowpipe but not both.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_47_346",
    "number": 47,
    "question": "What are the correct SQL extensions used in querying data from Time Travel? Select 2.",
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
    "id": "Test 6_48_347",
    "number": 48,
    "question": "Snowflake supports transforming data while loading it into a table using the COPY command. What all options you have?",
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
    "explanation": "Snowflake supports transforming data while loading it into a table using the COPY command. Options include: – Column reordering – Column omission – Casts – Truncating text strings that exceed the target column length There is no requirement for your data files to have the same number and ordering of columns as your target table. The COPY INTO transformations do not support FLATTEN, JOIN, GROUP BY.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_49_348",
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
    "explanation": "External Stage and Internal Named stages are the two variant. Other stages are not names like User Stage and Table Stage.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_50_349",
    "number": 50,
    "question": "Which type of view is most like a table?",
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
    "id": "Test 6_51_350",
    "number": 51,
    "question": "Which Snowflake edition does allow for customer-managed keys encryption.",
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
    "id": "Test 6_52_351",
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
    "explanation": "STRIP_OUTER_ARRAY = TRUE in COPY INTO command removes the outer array structure and load the records into separate table rows.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_53_352",
    "number": 53,
    "question": "Which Snowflake Object is a named wrapper around a cluster of servers with CPU, memory, and disk",
    "options": [
      {
        "id": 1,
        "value": "Schema"
      },
      {
        "id": 2,
        "value": "Database"
      },
      {
        "id": 3,
        "value": "Storage"
      },
      {
        "id": 4,
        "value": "Virtual Warehouse"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "Virtual Warehouse is the snowflake object which is a named wrapper around a cluster of servers with CPU, memory and disk. It‘s Snowflake who managed all the complex setup behind the scene. User does not need to configure EC2 instance, physical servers or anything like that.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_54_353",
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
        "value": "Handles Queries that can be processes completely from metadata"
      },
      {
        "id": 4,
        "value": "Used for Time Travel and Cloning"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "Metadata Management has following major functions: – Stores metadata as data is loaded into the system – Handles queries that can be processes completely from metadata -Used for Time Travel and Cloning -Every aspect of Snowflake architecture leverages metadata",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_55_354",
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
        "value": "Type the command SELECT RESULTS(-3) into the Worksheet and click “Run“"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "The History page displays queries executed in the last 14 days, starting with the most recent ones. You can use the End Time filter to display queries based on a specified date; however, if you specify a date earlier than the last 14 days, no results are returned. You can export results only for queries for which you can view the results (i.e. queries youve executed). If you didnt execute a query or the query result is no longer available, the Export Result button is not displayed for the query. The web interface only supports exporting results up to 100 MB in size. If a query result exceeds this limit, you are prompted whether to proceed with the export. The export prompts may differ depending on your browser. For example, in Safari, you are prompted only for an export format (CSV or TSV). After the export completes, you are prompted to download the exported result to a new window, in which you can use the Save Page As browser option to save the result to a file.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_56_355",
    "number": 56,
    "question": "A CAST command (symbol) will force a value to be output as a certain datatype. Which of the following code samples will result in the “employeename“ being output using the VARCHAR datatype?",
    "options": [
      {
        "id": 1,
        "value": "SELECT employeename::VARCHAR"
      },
      {
        "id": 2,
        "value": "SELECT employeename||VARCHAR"
      },
      {
        "id": 3,
        "value": "SELECT VARCHAR(employeename)"
      },
      {
        "id": 4,
        "value": "SELECT employeename AS VARCHAR"
      }
    ],
    "answers": [
      1
    ],
    "explanation": ":: is used for Casting in Snowflake.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_57_356",
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
    "id": "Test 6_58_357",
    "number": 58,
    "question": "Which are the correct statements about STREAMS?",
    "options": [
      {
        "id": 1,
        "value": "Streams is used to identify and act on changed table records"
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
    "explanation": "Tasks is used to scheduled SQL execution. A stream records data manipulation language (DML) changes made to a table, including information about inserts, updates, and deletes. It can be combine with TASKS to design some valuable solution.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_59_358",
    "number": 59,
    "question": "Snowflake provides standard and powerful features that ensure the highest levels of security for your account and users if used properly. Which are the true statements about Snowflake Security?",
    "options": [
      {
        "id": 1,
        "value": "Federated authentication in Snowflake is compliant with SAML 2.0"
      },
      {
        "id": 2,
        "value": "Tri-secret requires that customers manage their own keys"
      },
      {
        "id": 3,
        "value": "Snowflake supports user-based access control"
      }
    ],
    "answers": [
      1,
      2
    ],
    "explanation": "Along with Tri-Secret and Federated authentication, Snowflake supports ROLE-based access control.",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 6_60_359",
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
    "explanation": "Snowpipe is designed to load new data typically within a minute after a file notification is sent. Follow the best practices as per bulk loading for file sizes (10 MB – 100 MB compressed) but split into more files if it takes more than a minute",
    "reference": "",
    "source": "Test 6",
    "testNumber": 6
  },
  {
    "id": "Test 7_1_360",
    "number": 1,
    "question": "If an account has federated authentication enabled. Can Snowflake admins still maintain user id and passwords in Snowflake?",
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
    "explanation": "With federated authentication enabled for your account, Snowflake still allows maintaining and using Snowflake user credentials (login name and password). In other words: – Account and security administrators can still create users with passwords maintained in Snowflake. – Users can still log into Snowflake using their Snowflake credentials. However, if federated authentication is enabled for your account, Snowflake does not recommend maintaining user passwords in Snowflake. Instead, user passwords should be maintained solely in your IdP.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_2_361",
    "number": 2,
    "question": "The compute resource used by Snowflake for data loading jobs can be provided by:",
    "options": [
      {
        "id": 1,
        "value": "User managed virtual warehouse"
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
        "value": "Snowflake managed service"
      }
    ],
    "answers": [
      1,
      4
    ],
    "explanation": "Data loading using SNOWPIPE (Continuous Loading) consumed Snowflake managed warehouse. Manual data loading (Bulk Loading) using SQL commands like COPY INTO utilizes compute resources of warehouse created by the user.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_3_362",
    "number": 3,
    "question": "Which command will help you the current permissions on a Schema?",
    "options": [
      {
        "id": 1,
        "value": "SHOW ROLES ON SCHEMA.;"
      },
      {
        "id": 2,
        "value": "SHOW ALL PREIVILEGE ON SCHEMA.;"
      },
      {
        "id": 3,
        "value": "SHOW GRANTS ON SCHEMA.;"
      },
      {
        "id": 4,
        "value": "SHOW GRANTS OF SCHEMA.;"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "To view the current set of privileges granted on an object, you can execute the SHOW GRANTS command. To view the current permissions on a schema, execute the following command: SHOW GRANTS ON SCHEMA.;",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_4_363",
    "number": 4,
    "question": "What data structure types can be ingested into a VARIANT column in a Snowflake table? (Check all that apply)",
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
    "explanation": "Snowflake supports all these types of Semi-Structured data. JSON (JavaScript Object Notation) is a lightweight, plain-text, data-interchange format based on a subset of the JavaScript Programming Language. Avro is an open-source data serialization and RPC framework originally developed for use with Apache Hadoop. It utilizes schemas defined in JSON to produce serialized data in a compact binary format. ORC is used to store Hive data, the ORC (Optimized Row Columnar) file format was designed for efficient compression and improved performance for reading, writing, and processing data over earlier Hive file formats. Parquet is a compressed, efficient columnar data representation designed for projects in the Hadoop ecosystem. The file format supports complex nested data structures and uses Dremel record shredding and assembly algorithms. XML (Extensible Markup Language) is a markup language that defines a set of rules for encoding documents. It was originally based on SGML, another markup language developed for standardizing the structure and elements that comprise a document.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_5_364",
    "number": 5,
    "question": "What level of Privilege do you need to view Resource monitor?",
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
    "explanation": "MONITOR Privilege can enable you to view a resource monitor.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_6_365",
    "number": 6,
    "question": "At what frequency does Snowflake rotate the object keys?",
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
    "id": "Test 7_7_366",
    "number": 7,
    "question": "Snowflake supports many methods of authentication. Which are the supported authentication methods in ALL Snowflake Editions?",
    "options": [
      {
        "id": 1,
        "value": "MFA (Multi-factor authentication)"
      },
      {
        "id": 2,
        "value": "Only MFA is supported by all the Snowflake editions"
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
        "value": "Only MFA and SSO are supported by all the Snowflake editions"
      }
    ],
    "answers": [
      1,
      3,
      4
    ],
    "explanation": "MFA, Oauth, SSO – all these methods are supported by all the Snowflake editions.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_8_367",
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
    "id": "Test 7_9_368",
    "number": 9,
    "question": "What is the best practice after creating a custom role in a Snowflake account?",
    "options": [
      {
        "id": 1,
        "value": "Grant ownership of the role to itself so a member of the role can control access to the role"
      },
      {
        "id": 2,
        "value": "Grant ownership to the SYSADMIN role or a child role under SYSADMIN"
      },
      {
        "id": 3,
        "value": "Grant the role to the USERADMIN role so users can be added to the role."
      },
      {
        "id": 4,
        "value": "Grant PUBLIC to the role so all database objects owned by PUBLIC will be available to the new role"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "Custom role is mostly created for specific access of specific objects. As per best practice to grant ownership to SYSADMIN or child role under SYSADMIN so that SYSADMIN can control the access on the objects.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_10_369",
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
    "id": "Test 7_11_370",
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
    "explanation": "SNOWPIPE is designed to load small volumes of data (i.e. micro-batches) and incrementally make them available for analysis. Snowpipe loads data within minutes after files are added to a stage and submitted for ingestion. This ensures users have the latest results, as soon as the raw data is available.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_12_371",
    "number": 12,
    "question": "Snowflake supports transforming data while loading it into a table using the COPY command. What all options you have?",
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
    "explanation": "Snowflake supports transforming data while loading it into a table using the COPY command. Options include: – Column reordering – Column omission – Casts – Truncating text strings that exceed the target column length There is no requirement for your data files to have the same number and ordering of columns as your target table. The COPY INTO transformations do not support FLATTEN, JOIN, GROUP BY.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_13_372",
    "number": 13,
    "question": "Which stage is allocated to a user?",
    "options": [
      {
        "id": 1,
        "value": "Internal named stage"
      },
      {
        "id": 2,
        "value": "External names stage"
      },
      {
        "id": 3,
        "value": "Internal user stage"
      },
      {
        "id": 4,
        "value": "Internal table stage"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "A user stage is allocated to each user for storing files. This stage type is designed to store files that are staged and managed by a single user but can be loaded into multiple tables. User stages cannot be altered or dropped.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_14_373",
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
    "explanation": "STRIP_OUTER_ARRAY = TRUE in COPY INTO command removes the outer array structure and load the records into separate table rows.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_15_374",
    "number": 15,
    "question": "Snowflake can query the data from External Tables. (TRUE / FALSE)",
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
    "explanation": "External tables enable querying existing data stored in external cloud storage for analysis without first loading it into Snowflake. The source of truth for the data remains in the external cloud storage. This solution is especially beneficial to accounts that have a large amount of data stored in external cloud storage and only want to query a portion of the data",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_16_375",
    "number": 16,
    "question": "External Stages require customers to have an account with a cloud storage service provider. Which of the following are available currently or have been announced by Snowflake as under development?",
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
    "explanation": "Snowflake currently supports AWS S3, MS Azure Blob, GCP Buckets.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_17_376",
    "number": 17,
    "question": "Which key concepts should be considered when loading data into Snowflake?",
    "options": [
      {
        "id": 1,
        "value": "Transformation and error validation"
      },
      {
        "id": 2,
        "value": "Stage Object"
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
    "explanation": "All of these are key components for data loading. Stage is from where you are getting the data like AWS S3 external Stage. File Format tells Snowflake what type of data it is. Is it CSV, JSON, PARQUET, AVRO, ORC, XML etc. Transformation and error validation help getting the right data in right order and right form.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_18_377",
    "number": 18,
    "question": "Time travel is available for which table types? (Select 3)",
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
    "explanation": "Permanent (0-1 days in case of Standard edition / 0 – 90 days in case of other editions), Temporary and Transient Tables are having maximum 1 day of Time-Travel. External Table is not managed by Snowflake and so Time Travel is not available for External table.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_19_378",
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
    "explanation": "Snowflake loads semi-structured data into a single VARIANT column. The VARIANT data type imposes a 16 MB (compressed) size limit on individual rows.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_20_379",
    "number": 20,
    "question": "What all commands will you use to load data from your Local File System to Snowflake table?",
    "options": [
      {
        "id": 1,
        "value": "Only COPY INTO command"
      },
      {
        "id": 2,
        "value": "COPY INTO followed by PUT command"
      },
      {
        "id": 3,
        "value": "PUT COMMAND followed by COPY INTO"
      },
      {
        "id": 4,
        "value": "Only PUT command"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "When loading data from local file system to Snowflake, you need to first run PUT command to load data from local file system to Snowflake internal stage and then run COPY INTO command to copy data from Snowflake internal stage to Table.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_21_380",
    "number": 21,
    "question": "FORCE option is used to load all files, ignoring load metadata if it exists. (TRUE / FALSE)",
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
    "explanation": "You can set the FORCE option to load all files, ignoring load metadata if it exists. Note that this option reloads files, potentially duplicating data in a table.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_22_381",
    "number": 22,
    "question": "A user‘s default role is",
    "options": [
      {
        "id": 1,
        "value": "The role a user is set to each time the user logs in to the system"
      },
      {
        "id": 2,
        "value": "The user‘s default role is always PUBLIC"
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
    "id": "Test 7_23_382",
    "number": 23,
    "question": "What are the three Snowflake Stage types? (Select 3)",
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
        "value": "Table"
      }
    ],
    "answers": [
      4,
      5,
      6
    ],
    "explanation": "Internal User Stage  It is allocated to each user for storing files. Managed by a single user. Cant be altered or dropped. User Stages are referenced using @~. Internal Table Stage  It is available for each table created in Snowflake and available for one of many users but only loaded into a single table. Cant be altered or dropped. Stage is referenced as @%. When copying data from files in a table stage, the FROM clause can be omitted because Snowflake automatically checks for files in the table stage. Internal Named Stage  A named internal stage is a database object created in a schema. Stage is referenced as @.“",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_24_383",
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
    "explanation": "Column-level security in Snowflake allows the application of a masking policy to a column within a table or view. Currently, column-level security comprises two features: – Dynamic Data Masking – External Tokenization Dynamic Data Masking is a column-level security feature that uses masking policies to selectively mask plain-text data in table and view columns at query time. External Tokenization enables accounts to tokenize data before loading it into Snowflake and detokenize the data at query runtime.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_25_384",
    "number": 25,
    "question": "The FLATTEN command will parse nested entities into separate rows. One version of the FLATTEN command uses a join and the other uses an object keyword. Select the two words that represent the options used with the FLATTEN command.",
    "options": [
      {
        "id": 1,
        "value": "TABLE"
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
    "explanation": "LATERAL and TABLE are the two options used to FLATTEN data.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_26_385",
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
    "id": "Test 7_27_386",
    "number": 27,
    "question": "Which parameter does help in loading files whose metadata has expired?",
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
    "explanation": "To load files whose metadata has expired, set the LOAD_UNCERTAIN_FILES copy option to true.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_28_387",
    "number": 28,
    "question": "Which role at least should have MFA configured?",
    "options": [
      {
        "id": 1,
        "value": "ACCOUNTADMIN"
      },
      {
        "id": 2,
        "value": "SECURITYADMIN"
      },
      {
        "id": 3,
        "value": "PUBLIC"
      },
      {
        "id": 4,
        "value": "SYSADMIN"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "ACCOUNTADMIN must have MFA enabled for account level security. Also, it is recommended to have at least 2 users in ACCOUNTADMIN role.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_29_388",
    "number": 29,
    "question": "Snowflake black list some certain IPs by default to ensure that customer is getting highest level of Network security. (TRUE / FALSE)",
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
    "explanation": "Snowflake doesn‘t black list any IP. You can set Account-Level Network Policy to allow access or restrict any IP or IPs range. If you can whitelist something, everything will be black listed by default.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_30_389",
    "number": 30,
    "question": "Which of the following industry compliance standards has Snowflake been audited and certified for?",
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
    "id": "Test 7_31_390",
    "number": 31,
    "question": "How can you create a “Super-User“ or “Super-Role“ in Snowflake who can bypass all the authorization checks?",
    "options": [
      {
        "id": 1,
        "value": "There is no concept of SUPER-ROLE or SUPER-USER in Snowflake"
      },
      {
        "id": 2,
        "value": "Contact Snowflake personnel to create a Super-Role or Super-User for your account"
      },
      {
        "id": 3,
        "value": "CREATE ROLE SUPER_ROLE;"
      },
      {
        "id": 4,
        "value": "ACCOUNTADMIN role is same as Super-Role"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "There is no concept of a super-user or super-role in Snowflake that can bypass authorization checks. All access requires appropriate access privileges.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_32_391",
    "number": 32,
    "question": "A multi-cluster virtual warehouse is Auto-Scale when",
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
    "explanation": "This mode is enabled by specifying different values for maximum and minimum clusters. In this mode, Snowflake starts and stops clusters as needed to dynamically manage the load on the warehouse.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_33_392",
    "number": 33,
    "question": "If you are ACCOUNTADMIN, you can query and recover data from Fail-safe without the help of Snowflake support. (TRUE/FALSE)",
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
    "explanation": "Only Snowflake Support can recover the data from Fail-safe.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_34_393",
    "number": 34,
    "question": "Snowflake data storage costs are calculated based on: (Select 2)",
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
    "explanation": "All storage within Snowflake is billable in compressed format. Snowflake considers the daily average storage (in Terabytes) for billing.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_35_394",
    "number": 35,
    "question": "How does Snowflake provide continuous availability?",
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
        "value": "Time Travel Storage"
      },
      {
        "id": 4,
        "value": "Snowflake synchronizes data across availability zones"
      }
    ],
    "answers": [
      2,
      3,
      4
    ],
    "explanation": "Snowflake Transparently synchronizes data across availability zones which are geographically separated and on separate power grids. No downtime while updates and patches. Time- Travel and Fail-Safe features help customers recover data within a defined retention period.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_36_395",
    "number": 36,
    "question": "How many virtual warehouses can be created in a Snowflake Account?",
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
    "id": "Test 7_37_396",
    "number": 37,
    "question": "How much is the Time-Travel retention period of Temporary Table?",
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
    "explanation": "Temporary Table has maximum of 1 day Time-Travel retention period.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_38_397",
    "number": 38,
    "question": "Scaling a Warehouse OUT will increase the number of clusters (e.g., Min to Max)",
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
    "id": "Test 7_39_398",
    "number": 39,
    "question": "Monica mistakenly dropped a table T1 last week. The database has Time-Travel retention period set to 90 days. How can Monica recover the table which she dropped last week.",
    "options": [
      {
        "id": 1,
        "value": "Monica should contact Salesforce support to get it done"
      },
      {
        "id": 2,
        "value": "Monica can execute UNDROP TABLE T1 command after setting up the right context for Database and schema"
      },
      {
        "id": 3,
        "value": "Monica cant recover it from TIME-TRAVEL as the table T1 moved to Fail-safe"
      },
      {
        "id": 4,
        "value": "Monica can use the UI > ACCOUNT menu to recover the table T1"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "UNDROP TABLE command helps recover the TABLE which is still in TIME-TRAVEL. Since, Monica dropped last week so it is just a week old drop which will be available in the Time Travel with retention period of 90 days.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_40_399",
    "number": 40,
    "question": "John wants to create a multi-cluster warehouse and wants to make sure that whenever new queries are queued, additional clusters should start immediately. How should he configure the Warehouse?",
    "options": [
      {
        "id": 1,
        "value": "Configure as SCALE-MAX so that the warehouse is always using maximum number of specified clusters"
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
        "value": "Snowflake takes care of this automatically so, John does not have to worry about it"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "If a multi-cluster warehouse is configured with SCALING policy as STANDARD it immediately when either a query is queued or the system detects that theres one more query than the currently-running clusters can execute",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_41_400",
    "number": 41,
    "question": "Which vendors do support Snowflake natively for federated authentication and SSO?",
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
    "explanation": "Okta and Microsoft ADFS provide native Snowflake support for federated authentication and SSO. Other are not native but Snowflake supports using SAML 2.0-compliant.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_42_401",
    "number": 42,
    "question": "Which types of stages are automatically available in Snowflake and do not need to be created or configured?",
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
        "value": "Table"
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
    "explanation": "Internal User Stage  It is allocated to each user for storing files. Managed by a single user. Cant be altered or dropped. User Stages are referenced using @~. Internal Table Stage  It is available for each table created in Snowflake and available for one of many users but only loaded into a single table. Cant be altered or dropped. Stage is referenced as @%. When copying data from files in a table stage, the FROM clause can be omitted because Snowflake automatically checks for files in the table stage.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_43_402",
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
        "value": "Streams is used to identify and act on changed table records"
      }
    ],
    "answers": [
      3,
      4
    ],
    "explanation": "Tasks is used to scheduled SQL execution. A stream records data manipulation language (DML) changes made to a table, including information about inserts, updates, and deletes. It can be combine with TASKS to design some valuable solution.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_44_403",
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
    "explanation": "All these actions can be taken. You can specify one or more of the following copy options : CONTINUE SKIP_FILE SKIP_FILE_(e.g. SKIP_FILE_10) SKIP_FILE_% (e.g. SKIP_FILE_10%) ABORT_STATEMENT",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_45_404",
    "number": 45,
    "question": "Snowflake provides standard and powerful features that ensure the highest levels of security for your account and users if used properly. Which are the true statements about Snowflake Security?",
    "options": [
      {
        "id": 1,
        "value": "Snowflake supports user-based access control"
      },
      {
        "id": 2,
        "value": "Tri-secret requires that customers manage their own keys"
      },
      {
        "id": 3,
        "value": "Federated authentication in Snowflake is compliant with SAML 2.0"
      }
    ],
    "answers": [
      2,
      3
    ],
    "explanation": "Along with Tri-Secret and Federated authentication, Snowflake supports ROLE-based access control.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_46_405",
    "number": 46,
    "question": "If a server in warehouse cluster runs for 64 seconds, shuts down, and then restarts and runs for less than 60 seconds, for how many seconds it will be billed?",
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
    "id": "Test 7_47_406",
    "number": 47,
    "question": "Which objects are securable objects in Snowflake?",
    "options": [
      {
        "id": 1,
        "value": "Database"
      },
      {
        "id": 2,
        "value": "File Format"
      },
      {
        "id": 3,
        "value": "Table"
      },
      {
        "id": 4,
        "value": "Warehouse"
      }
    ],
    "answers": [
      1,
      2,
      3,
      4
    ],
    "explanation": "All of these are securable objects in Snowflake. Securable Object is an entity to which access can be granted. Unless allowed by a grant, access will be denied.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_48_407",
    "number": 48,
    "question": "How can you ignore metadata and load the already loaded staged file into table?",
    "options": [
      {
        "id": 1,
        "value": "Using ACCEPT = TRUE parameter with COPY INTO command"
      },
      {
        "id": 2,
        "value": "Using LOAD = TRUE parameter with COPY INTO command"
      },
      {
        "id": 3,
        "value": "Using FORCE = TRUE parameter with COPY INTO command"
      },
      {
        "id": 4,
        "value": "Using LOAD = FORCE parameter with COPY INTO command"
      },
      {
        "id": 5,
        "value": "Using INSERT = TRUE parameter with COPY INTO command"
      },
      {
        "id": 6,
        "value": "Using FORCE = YES parameter with COPY INTO command"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "FORCE = TRUE parameter specifies to load all files, regardless of whether theyve been loaded previously and have not changed since they were loaded. Note that this option reloads files, potentially duplicating data in a table.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_49_408",
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
    "id": "Test 7_50_409",
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
    "id": "Test 7_51_410",
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
    "explanation": "External Stage and Internal Named stages are the two variant. Other stages are not names like User Stage and Table Stage.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_52_411",
    "number": 52,
    "question": "Which security feature is supported in Snowflake?",
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
    "explanation": "Snowflake is highly secured platform and provides multi-level security like MFA, IP whitelisting, SSO, Tri Secret Secure, Role-Based etc.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_53_412",
    "number": 53,
    "question": "Semi Structured data can be accessed: (Select 3)",
    "options": [
      {
        "id": 1,
        "value": "In a permanent table using the variant data type"
      },
      {
        "id": 2,
        "value": "In files in an external stage"
      },
      {
        "id": 3,
        "value": "In files on an AWS EC2 server"
      },
      {
        "id": 4,
        "value": "In files in a internal stage"
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
    "explanation": "Snowflake CAN‘T access from AWS EC2 server and on-prem file server. Snowflake can query External Table ( files of External Stage), Internal Stage and Permanent table.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_54_413",
    "number": 54,
    "question": "Snowflake provides native support for semi-structured data. Select true option about Snowflake native support for Semi-Structure data.",
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
        "value": "Flexible-Schema data types for loading semi-structured data without transformation"
      },
      {
        "id": 4,
        "value": "Database Optimization for fast and efficient SQL querying."
      }
    ],
    "answers": [
      2
    ],
    "explanation": "Snowflake provides native support for semi-structured data, including: Flexible-schema data types for loading semi-structured data without transformation. Automatic conversion of data to optimized internal storage format. Database optimization for fast and efficient SQL querying.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_55_414",
    "number": 55,
    "question": "How can you create a user in Snowflake without password?",
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
        "value": "Using SQL Command - CREATE USER"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "Note that you cannot use the Snowflake web interface to create users with no passwords or remove passwords from existing users. You must use CREATE USER or ALTER USER. If you create a user with no password (or alter an existing user and remove their password), this effectively disables Snowflake authentication for the user. Without a password in Snowflake, a user cannot log in using Snowflake authentication and must use federated authentication instead.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_56_415",
    "number": 56,
    "question": "Which role is not a Snowflake System-defined role assigned to a new account?",
    "options": [
      {
        "id": 1,
        "value": "ACCOUNTADMIN"
      },
      {
        "id": 2,
        "value": "PUBLIC"
      },
      {
        "id": 3,
        "value": "CUSTOM"
      },
      {
        "id": 4,
        "value": "SYSADMIN"
      },
      {
        "id": 5,
        "value": "SECURITYADMIN"
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
    "id": "Test 7_57_416",
    "number": 57,
    "question": "Two of the key attributes that distinguish semi-structure data from structured data are :",
    "options": [
      {
        "id": 1,
        "value": "Lack of a Fixed Schema"
      },
      {
        "id": 2,
        "value": "Nested data structure"
      },
      {
        "id": 3,
        "value": "Fixed Schema"
      }
    ],
    "answers": [
      1,
      2
    ],
    "explanation": "Two of the key attributes that distinguish semi-structured data from structured data are nested data structures and the lack of a fixed schema.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_58_417",
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
        "value": "PUBLIC ROLE"
      },
      {
        "id": 5,
        "value": "PREFERED ROLE"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "PUBLIC role is Pseudo-role, that is automatically granted to every user and every role in your account. The PUBLIC role can own securable objects, just like any other role; however, the objects owned by the role are, by definition, available to every other user and role in your account. This role is typically used in cases where explicit access control is not needed and all users are viewed as equal with regard to their access rights.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_59_418",
    "number": 59,
    "question": "You set up a Snowflake account, choosing AWS as your cloud platform provider. What stages can you use to load data files? (Check all that apply)",
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
        "value": "TABLE"
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
    "explanation": "Does not matter which cloud provider you have setup your account, Snowflake supports all the stages. For example, you can have your account setup on AWS but you can use Azure blob as your external stage.",
    "reference": "",
    "source": "Test 7",
    "testNumber": 7
  },
  {
    "id": "Test 7_60_419",
    "number": 60,
    "question": "What is the default compression algorithm Snowflake apply while unloading data?",
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
    "id": "Test 8_1_420",
    "number": 1,
    "question": "How much is the Time-Travel retention period of Permanent Table (Standard Edition)?",
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
    "explanation": "Permanent Table has maximum of 1 day for Standard Edition and maximum of 90 days Time-Travel retention period for all other Snowflake editions.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_2_421",
    "number": 2,
    "question": "You have a LARGE sized warehouse ‘MY_WAREHOUSE‘. You want to change the size to SMALL. Which SQL statement will help you to change the size of warehouse?",
    "options": [
      {
        "id": 1,
        "value": "ALTER WAREHOUSE MY_WAREHOUSE SET WAREHOUSE_SIZE = “SMALL“;"
      },
      {
        "id": 2,
        "value": "ALTER WAREHOUSE MY_WAREHOUSE SET SIZE = “SMALL“;"
      },
      {
        "id": 3,
        "value": "UPDATE MY_WAREHOUSE SET SIZE = “SMALL“;"
      },
      {
        "id": 4,
        "value": "ALTER MY_WAREHOUSE SET SIZE = “SMALL“;"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "ALTER WAREHOUSE command can help change the warehouse size",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_3_422",
    "number": 3,
    "question": "Which type of Tables has 7 days Fail-Safe period.",
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
    "explanation": "Only Permanent Table retains 7 days of Fail-Safe.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_4_423",
    "number": 4,
    "question": "Please choose the correct statements about Micro-Partitions (Select 2)",
    "options": [
      {
        "id": 1,
        "value": "Snowflake automatically determines the most efficient compression algorithm for the columns in each micro-partition."
      },
      {
        "id": 2,
        "value": "Snowflake micro-partitions are derived automatically"
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
    "explanation": "Snowflake takes care of all the compression algorithm. Micro-partitions can overlap in their range of values, which, combined with their uniformly small size, helps prevent skew. The micro-partitions are small in size (50 to 500 MB, BEFORE compression).",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_5_424",
    "number": 5,
    "question": "Which Snowflake Editions have Elastic Data Warehousing. Check all the Snowflake editions that have Elastic Data Warehousing enabled.",
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
        "value": "Virtual Private Snowflake"
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
    "explanation": "Standard Edition only has Single Compute Cluster. Premium is not a Snowflake edition. All other editions have multi clusters capability.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_6_425",
    "number": 6,
    "question": "Monica is an ACCOUNTADMIN and wants to change the Time Travel retention period of table T1 of database DB1 to 15 days. Which options will help her to set the new Time Travel retention period?",
    "options": [
      {
        "id": 1,
        "value": "Execute SQL Command - ALTER TABLE T1 SET DATA_RETENTION_TIME_IN_DAYS = 15;"
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
        "value": "Execute SQL Command - ALTER TABLE T1 SET DATA_RETENTION_TIME_IN_DAYS = 75;"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "Set the correct context for Database and Schema and run the ALTER TABLE command to set DATA_RETENTION_TIME_IN_DAYS to 15.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_7_426",
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
    "id": "Test 8_8_427",
    "number": 8,
    "question": "How much data each of the micro-partition contain in uncompressed form? Select the",
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
    "id": "Test 8_9_428",
    "number": 9,
    "question": "Snowflake compute costs depend on which of the following? (Select 2)",
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
    "explanation": "Compute cost depends on the Warehouse Size and the time it was in started mode or running",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_10_429",
    "number": 10,
    "question": "Micro-partitions are IMMUTABLE. What are features make micro-partitions IMMUTABLE?",
    "options": [
      {
        "id": 1,
        "value": "Snowflake purges the micro-partitions as soon as you delete any record from table."
      },
      {
        "id": 2,
        "value": "Snowflake creates new micro-partitions every time there is data change."
      },
      {
        "id": 3,
        "value": "Micro-Partitions are not editable."
      },
      {
        "id": 4,
        "value": "When new data gets ingested Snowflake tries to insert data in existing micro-partition to save the storage."
      }
    ],
    "answers": [
      2,
      3
    ],
    "explanation": "Snowflake creates new partitions in case of any data change or new ingested data and also keeps the old version of micro-partition. The old versions of micro-partitions are used for Time-Travel and Fail-Safe. Services layer stores metadata about every micro-partition like – MIN/MAX ranges of values in each column, Number of distinct values, Row count etc.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_11_430",
    "number": 11,
    "question": "Monica has a EMPLOYEE_DATA table. Monica wants to create another table EMPLOYEE_DATA_OTHER which should be same as EMPLOYEE_DATA table with same data. What is the best option for Monica?",
    "options": [
      {
        "id": 1,
        "value": "Clone the table with same data with SQL command as follows - CREATE TABLE EMPLOYEE_DATA_OTHER CLONE EMPLOYEE_DATA;"
      },
      {
        "id": 2,
        "value": "Create the table with same data with SQL command as follows - CREATE TABLE EMPLOYEE_DATA_OTHER AS SELECT * FROM EMPLOYEE_DATA;"
      },
      {
        "id": 3,
        "value": "CREATE SHARE EMPLOYEE_DATA;"
      },
      {
        "id": 4,
        "value": "Create the table with LIKE SQL command as follows - CREATE TABLE EMPLOYEE_DATA_OTHER LIKE EMPLOYEE_DATA;"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "The best option is the Clone the table as EMPLOYEE_DATA and EMPLOYEE_DATA_OTHER has same structure and same data. It will help save the storage cost. LIKE command only creates empty table.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_12_431",
    "number": 12,
    "question": "Snowflake Storage layer is a Cloud Storage layer. It depends on which cloud provider you are using. Select the current available cloud providers.",
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
    "explanation": "As of now, AWS, AZURE and GCP are three cloud providers which provide Cloud Storage layer for Snowflake.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_13_432",
    "number": 13,
    "question": "Decreasing the size of a running warehouse removes servers from the warehouse. When the servers are removed, the cache associated with the servers is dropped.",
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
    "explanation": "Decreasing the size of a running warehouse removes servers from the warehouse. When the servers are removed, the cache associated with the servers is dropped, which can impact performance in the same way that suspending the warehouse can impact performance after it is resumed. Keep this in mind when choosing whether to decrease the size of a running warehouse or keep it at the current size. In other words, there is a trade-off with regards to saving credits versus maintaining the server cache.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_14_433",
    "number": 14,
    "question": "Only a Snowflake employee can recover data from fail-safe storage.",
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
    "explanation": "Fail-Safe data can‘t be queried by customer. Customer needs to contact Snowflake support to recover data from fail-safe storage.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_15_434",
    "number": 15,
    "question": "Temporary and Transient Tables has 1 day of Fail-safe available. (True/False)",
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
    "explanation": "Fail-safe is not supported for Temporary and Transient Tables. It is only available for Permanent Tables.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_16_435",
    "number": 16,
    "question": "Which SQL statement will suspend a running Warehouse MY_WAREHOUSE?",
    "options": [
      {
        "id": 1,
        "value": "ALTER WAREHOUSE MY_WAREHOUSE SET AUTO_SUSPEND = ‘TRUE‘;"
      },
      {
        "id": 2,
        "value": "SUSPEND WAREHOUSE MY_WAREHOUSE;"
      },
      {
        "id": 3,
        "value": "DROP WAREHOUSE MY_WAREHOUSE;"
      },
      {
        "id": 4,
        "value": "ALTER WAREHOUSE MY_WAREHOUSE SUSPEND;"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "ALTER SQL statement with SUSPEND will suspend a warehouse.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_17_436",
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
    "explanation": "Snowflake leverages all the Cloud Provider‘s securities like physical and digital, data replication across multiple regions etc.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_18_437",
    "number": 18,
    "question": "A multi-cluster virtual warehouse is Maximized when",
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
    "explanation": "Maximized mode is enabled by specifying the same value for both maximum and minimum clusters (note that the specified value must be larger than 1). In this mode, when the warehouse is started, Snowflake starts all the clusters so that maximum resources are available while the warehouse is running.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_19_438",
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
    "id": "Test 8_20_439",
    "number": 20,
    "question": "What are the correct SQL extensions used in querying data from Time Travel? Select 2.",
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
    "id": "Test 8_21_440",
    "number": 21,
    "question": "A 3X-LARGE cluster contains 64 Servers. if a 3X-Large multi-cluster warehouse runs 1 cluster for one full hour and then runs 3 clusters for the next full hour. How many credits will be billed?",
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
    "id": "Test 8_22_441",
    "number": 22,
    "question": "Snowflake data storage costs include which types of data?",
    "options": [
      {
        "id": 1,
        "value": "Persistent data stored in permanent tables"
      },
      {
        "id": 2,
        "value": "Data retained to enable data recovery (time travel and fail-safe)"
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
    "explanation": "All storage within Snowflake is billable in compressed format including the persistent data stored in permanent tables, time-travel and fail-safe. There is no additional fee for handling Semi-Structured data.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_23_442",
    "number": 23,
    "question": "John wants to create a Warehouse which can auto suspend in 10 minutes. How should he configure the warehouse?",
    "options": [
      {
        "id": 1,
        "value": "AUTO_SUSPEND = 10"
      },
      {
        "id": 2,
        "value": "AUTO_RESUME = TRUE"
      },
      {
        "id": 3,
        "value": "AUTO_SUSPEND = 600"
      },
      {
        "id": 4,
        "value": "AUTO_SUSPEND = TRUE"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "AUTO_SUSPEND takes care of suspension of warehouse not in use for specified time. The time specified is in Seconds.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_24_443",
    "number": 24,
    "question": "Resizing a warehouse can be completed at any time, even when running",
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
    "explanation": "Warehouse can be resized any time using UI or SQL ALTER command.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_25_444",
    "number": 25,
    "question": "Which SQL statements can work on a cloned Table?",
    "options": [
      {
        "id": 1,
        "value": "All of these"
      },
      {
        "id": 2,
        "value": "DROP table command"
      },
      {
        "id": 3,
        "value": "SELECT command"
      },
      {
        "id": 4,
        "value": "SHOW command"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "All of these commands work with Cloned table as normal table.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_26_445",
    "number": 26,
    "question": "Micro-partitioning is automatically performed on all the Snowflake tables.",
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
    "explanation": "Micro-partitioning is automatically performed on all Snowflake tables. Tables are transparently partitioned using the ordering of the data as it is inserted/loaded.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_27_446",
    "number": 27,
    "question": "How to change the current warehouse of a session?",
    "options": [
      {
        "id": 1,
        "value": "Execute SET WAREHOUSE command"
      },
      {
        "id": 2,
        "value": "Execute SELECT WAREHOUSE command"
      },
      {
        "id": 3,
        "value": "Execute USE WAREHOUSE command"
      },
      {
        "id": 4,
        "value": "None of these"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "USE WAREHOUSE; command sets the warehouse for the current session, whereis the name of the warehouse which needs to be set for the session.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_28_447",
    "number": 28,
    "question": "Which Snowflake Object is a named wrapper around a cluster of servers with CPU, memory, and disk",
    "options": [
      {
        "id": 1,
        "value": "Virtual Warehouse"
      },
      {
        "id": 2,
        "value": "Storage"
      },
      {
        "id": 3,
        "value": "Schema"
      },
      {
        "id": 4,
        "value": "Database"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "Virtual Warehouse is the snowflake object which is a named wrapper around a cluster of servers with CPU, memory and disk. It‘s Snowflake who managed all the complex setup behind the scene. User does not need to configure EC2 instance, physical servers or anything like that.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_29_448",
    "number": 29,
    "question": "When configuring a Warehouse using a Snowflake edition that has Elastic Data Warehousing enabled, what facets or components will you need to configure that are not needed in accounts where Elastic Data Warehousing is not enabled. (Choose two)",
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
    "id": "Test 8_30_449",
    "number": 30,
    "question": "Which are the types of Virtual Warehouses in Snowflake?",
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
    "id": "Test 8_31_450",
    "number": 31,
    "question": "John created a Database and set the DATA_RETENTION_TIME_IN_DAYS as 30 days, but he did not set the DATA_RETENTION_TIME_IN_DAYS in one of the table ‘T1‘. After 5 days, he accidently dropped table ‘T1‘. Will he able to recover the table T1?",
    "options": [
      {
        "id": 1,
        "value": "John should call Snowflake Support to recover the table from Fail-Safe."
      },
      {
        "id": 2,
        "value": "No, John cant recover the dropped table T1 because he didn‘t set DATA_RETENTION_TIME_IN_DAYS for Table T1"
      },
      {
        "id": 3,
        "value": "John can recover the table T1 after 30 days"
      },
      {
        "id": 4,
        "value": "Yes, as the retention period is specified at database level"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "If a retention period is specified for a database or schema, the period is inherited by default for all objects created in the database/schema.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_32_451",
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
    "explanation": "For Snowflake Standard Edition, the retention period can be set to 0 (or unset back to the default of 1 day) at the account and object level (i.e. databases, schemas, and tables).",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_33_452",
    "number": 33,
    "question": "When should you avoid enabling AUTO_SUSPEND?",
    "options": [
      {
        "id": 1,
        "value": "You require the warehouse to be available with no delay or lag time"
      },
      {
        "id": 2,
        "value": "You have a heavy, steady workload for the warehouse."
      },
      {
        "id": 3,
        "value": "You should always enable AUTO_SUSPEND to save the compute costs."
      }
    ],
    "answers": [
      1,
      2
    ],
    "explanation": "You might want to consider disabling auto-suspend for a warehouse if: – You have a heavy, steady workload for the warehouse. – You require the warehouse to be available with no delay or lag time. Server provisioning is generally very fast (e.g. 1 or 2 seconds); however, depending on the size of the warehouse and the availability of servers to provision, it can take longer.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_34_453",
    "number": 34,
    "question": "Which are the correct statements about Snowflake data Storage?",
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
    "explanation": "Snowflake stores the data in hybrid columnar format in micro-partitions. Snowflake has some level of natural data clustering and optimization capabilities. All the data in rest or in motion are always encrypted.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_35_454",
    "number": 35,
    "question": "Monica is a new Snowflake user with ACCOUNTADMIN role. She wants to create a warehouse which can scale out if needed. She tried to create the warehouse using UI but she is not able to find the options to set Minimum and Maximum Clusters. What could be the issue?",
    "options": [
      {
        "id": 1,
        "value": "She doesn‘t have enough privilege to create a warehouse"
      },
      {
        "id": 2,
        "value": "She should use SQL command to create the Warehouse with Minimum and Maximum clusters"
      },
      {
        "id": 3,
        "value": "She should ALTER any existing warehouse to set the Maximum and Minimum clusters"
      },
      {
        "id": 4,
        "value": "She is using STANDARD Snowflake edition. Multi-Cluster is not available in STANDARD edition."
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
    "id": "Test 8_36_455",
    "number": 36,
    "question": "A multi-cluster warehouse is using an ECONOMY scaling policy, how long will queries back up in the queue before another cluster is started?",
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
    "explanation": "If a multi-cluster warehouse is configured with SCALING policy as ECONOMY it starts cluster only if the system estimates theres enough query load to keep the cluster busy for at least 6 minutes.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_37_456",
    "number": 37,
    "question": "What action causes a Warehouse‘s cache to be purged?",
    "options": [
      {
        "id": 1,
        "value": "Suspending the warehouse."
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
        "value": "Resuming the warehouse."
      }
    ],
    "answers": [
      1
    ],
    "explanation": "Cache gets purged on suspending the warehouse.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_38_457",
    "number": 38,
    "question": "When a database or schema is cloned. What object is not cloned?",
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
    "explanation": "The following rules apply to cloning stages or objects that contain stages (i.e. databases and schemas): – Individual external named stages can be cloned; internal named stages cannot be cloned. – When cloning a database or schema: –External named stages that were present in the source when the cloning operation started are cloned. –Tables are cloned, which means their internal stages are also cloned. –Internal named stages are not cloned. Regardless of how a stage was cloned, the clone does not include any of the files from the source. i.e. all cloned stages are empty.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_39_458",
    "number": 39,
    "question": "Virtual Warehouse in Snowflake refers to",
    "options": [
      {
        "id": 1,
        "value": "Database"
      },
      {
        "id": 2,
        "value": "Virtual Storage"
      },
      {
        "id": 3,
        "value": "Data Warehouse"
      },
      {
        "id": 4,
        "value": "Compute Engine"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "Virtual Warehouse refers to compute engines which executes query in Snowflake.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_40_459",
    "number": 40,
    "question": "What is the minimum billing charge for provisioning a warehouse?",
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
    "explanation": "The minimum billing charge for provisioning a server is 1 minute (i.e. 60 seconds). – There is no benefit to stopping a warehouse before the first 60-second period is over because the credits have already been billed for that period. – After the first 60 seconds, all subsequent billing for a running server is per-second (until the server shuts down).",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_41_460",
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
    "explanation": "Snowflake Editions except Standard has multi clusters features and it is an automated process. The minimum and maximum number of clusters are specified while configuring the Virtual Warehouse.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_42_461",
    "number": 42,
    "question": "Which Snowflake editions have maximum 90 days of Time-Travel retention period?",
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
    "explanation": "Except Standard, all other Snowflake editions have maximum 90 days of Time-Travel retention period.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_43_462",
    "number": 43,
    "question": "How to choose the right size of warehouse to achieve the best results based on the Query processing?",
    "options": [
      {
        "id": 1,
        "value": "Execute varieties of queries on same warehouse to achieve the best result"
      },
      {
        "id": 2,
        "value": "Execute relatively homogenous queries on the same warehouse"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "To achieve the best results, try to execute relatively homogeneous queries (size, complexity, data sets, etc.) on the same warehouse; executing queries of widely-varying size and/or complexity on the same warehouse makes it more difficult to analyze warehouse load, which can make it more difficult to select the best size to match the size, composition, and number of queries in your workload.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_44_463",
    "number": 44,
    "question": "John wants to create a warehouse which should not start immediately. Which property will him to create a warehouse in suspended mode.",
    "options": [
      {
        "id": 1,
        "value": "AUTO_SUSPEND = INITIAL"
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
    "explanation": "INITIALLY_SUSPENDED = TRUE will not start the warehouse after creation. By default it is set to FALSE.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_45_464",
    "number": 45,
    "question": "When a warehouse is resized, which queries make use of the new size?",
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
    "explanation": "The current running queries keep running on the old size server. Only subsequent queries run on new Sized Virtual Warehouse. If queries processed by a warehouse are running slowly, you can always resize the warehouse to provision more servers. The additional servers do not impact any queries that are already running, but they are available for use by any queries that are queued or newly submitted.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_46_465",
    "number": 46,
    "question": "Multi-cluster warehouse credit billing is based on which factors? (Select 2)",
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
    "explanation": "For multi-cluster warehouse, the number of credit billed is calculated based on the number of servers per cluster and the number of clusters that run within the time period.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_47_466",
    "number": 47,
    "question": "Select the Snowflake edition that automatic encryptions all the data.?",
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
    "explanation": "All of the Snowflake editions automatically encrypt data in rest and in motion.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_48_467",
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
    "id": "Test 8_49_468",
    "number": 49,
    "question": "Auto-suspend and auto-resume apply only to the entire warehouse and not to the individual clusters in the warehouse.",
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
    "explanation": "TRUE for both type of STANDARD and MULTI-CLUSTER Warehouses. For a multi-cluster warehouse : – Auto-suspend only occurs when the minimum number of clusters is running and there is no activity for the specified period of time. The minimum is typically 1 (cluster), but could be more than 1. – Auto-resume only applies when the entire warehouse is suspended (i.e. no clusters are running).",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_50_469",
    "number": 50,
    "question": "Which privilege is needed to be able to monitor a warehouse?",
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
    "explanation": "User must be using a role that has the MONITOR privilege on the warehouse.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_51_470",
    "number": 51,
    "question": "The data stored as part of fail-safe is part of storage costs charged to customers.",
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
    "explanation": "All storage within Snowflake is billable in compressed format including the persistent data stored in permanent tables, time-travel and fail-safe.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_52_471",
    "number": 52,
    "question": "When there is new load of data in Snowflake, Snowflake automatically analyzes and compresses data into table.",
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
    "explanation": "Snowflake automatically analyzes and compresses data into table on load. It finds the optimal compression scheme for each data type.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_53_472",
    "number": 53,
    "question": "Which SQL command will give the list of all the warehouses in an account?",
    "options": [
      {
        "id": 1,
        "value": "SHOW WAREHOUSE;"
      },
      {
        "id": 2,
        "value": "LIST WAREHOUSE;"
      },
      {
        "id": 3,
        "value": "SHOW WAREHOUSES;"
      },
      {
        "id": 4,
        "value": "DISPLAY WAREHOUSE;"
      },
      {
        "id": 5,
        "value": "LIST WAREHOUSES;"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "SHOW WAREHOUSES is the right command and you can add LIKE as well to narrow the list.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_54_473",
    "number": 54,
    "question": "The compute resource used by Snowflake for data loading jobs can be provided by:",
    "options": [
      {
        "id": 1,
        "value": "Hardware provisioned by user directly from cloud providers"
      },
      {
        "id": 2,
        "value": "User managed virtual warehouse"
      },
      {
        "id": 3,
        "value": "Snowflake managed service"
      }
    ],
    "answers": [
      2,
      3
    ],
    "explanation": "When loading using SNOWPIPE, the compute is provided by Snowflake managed service and for any other loading it is provided by user managed virtual warehouse",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_55_474",
    "number": 55,
    "question": "John wants to create a multi-cluster warehouse and wants to make sure that the virtual warehouse starts the additional clusters only if the system estimates there‘s enough query load to keep the cluster busy for at least 6 minutes. How should he configure the Warehouse?",
    "options": [
      {
        "id": 1,
        "value": "Set the SCALING POLICY as ECONOMY"
      },
      {
        "id": 2,
        "value": "Configure as SCALE-MAX so that the warehouse is always using maximum number of specified clusters"
      },
      {
        "id": 3,
        "value": "Snowflake takes care of this automatically so, John does not have to worry about it"
      },
      {
        "id": 4,
        "value": "Set the SCALING POLICY as STANDARD"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "If a multi-cluster warehouse is configured with SCALING policy as ECONOMY it starts cluster only if the system estimates theres enough query load to keep the cluster busy for at least 6 minutes.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_56_475",
    "number": 56,
    "question": "You want a list of all the warehouses with name starting from DEMO. Select the correct SQL statement.",
    "options": [
      {
        "id": 1,
        "value": "LIST WAREHOUSES LIKE ‘%DEMO‘;"
      },
      {
        "id": 2,
        "value": "SHOW WAREHOUSES LIKE ‘DEMO%‘;"
      },
      {
        "id": 3,
        "value": "SHOW WAREHOUSE LIKE ‘%DEMO‘;"
      },
      {
        "id": 4,
        "value": "SHOW WAREHOUSES LIKE ‘%DEMO‘;"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "SHOW WAREHOUSES is the right command and you can add LIKE as well to narrow the list.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_57_476",
    "number": 57,
    "question": "Fail-safe is a reliable way to create Dev/Test/QA and other environments.",
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
    "explanation": "Fail-safe is not good option for Dev/TEST/QA and other non-production data. Fail-Safe is good for important production level data.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_58_477",
    "number": 58,
    "question": "John wants to create a Warehouse which can auto resume whenever there is a new load / query to execute. How should he configure the warehouse?",
    "options": [
      {
        "id": 1,
        "value": "AUTO_SUSPEND = TRUE"
      },
      {
        "id": 2,
        "value": "AUTO_RESUME = 1"
      },
      {
        "id": 3,
        "value": "AUTO_RESUME = TRUE"
      },
      {
        "id": 4,
        "value": "It is always manual and cant be automated."
      }
    ],
    "answers": [
      3
    ],
    "explanation": "AUTO_RESUME = TRUE resumes the warehouse automatically whenever there is new load or query needing a warehouse.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 8_59_478",
    "number": 59,
    "question": "The Cloning feature in Snowflake requires less storage because:",
    "options": [
      {
        "id": 1,
        "value": "The cloned data is constantly updated to synchronize with original table data"
      },
      {
        "id": 2,
        "value": "Data is replicated to ensure integrity of data in the original table data"
      },
      {
        "id": 3,
        "value": "Only metadata is copied; no physical data is copied"
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
    "id": "Test 8_60_479",
    "number": 60,
    "question": "What is Clustering Depth?",
    "options": [
      {
        "id": 1,
        "value": "It is the total number of micro-partitions that comprise the table"
      },
      {
        "id": 2,
        "value": "The bigger the average depth, the better clustered the table"
      },
      {
        "id": 3,
        "value": "It can be used to determine whether a large table would benefit from explicitly defining a clustering key"
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
    "explanation": "The clustering depth for a populated table measures the average depth (1 or greater) of the overlapping micro-partitions for specified columns in a table. The smaller the average depth, the better clustered the table is with regards to the specified columns. Clustering depth can be used for a variety of purposes, including: – Monitoring the clustering health of a large table, particularly over time as DML is performed on the table. – Determining whether a large table would benefit from explicitly defining a clustering key.",
    "reference": "",
    "source": "Test 8",
    "testNumber": 8
  },
  {
    "id": "Test 9_1_480",
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
    "id": "Test 9_2_481",
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
    "explanation": "Role is not child object of schema.",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_3_482",
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
    "explanation": "Also, Warehouse Cache. Warehouse cache gets purged on suspension.",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_4_483",
    "number": 4,
    "question": "Which actions are not supported with shared data?",
    "options": [
      {
        "id": 1,
        "value": "Editing the comments for a shared database"
      },
      {
        "id": 2,
        "value": "Time Travel for a shared database or any schemas/tables in the database"
      },
      {
        "id": 3,
        "value": "Creating a clone of a shared database or any schemas/tables in the database"
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
    "id": "Test 9_5_484",
    "number": 5,
    "question": "If you find a data-related tool that is not listed as part of the Snowflake ecosystem, what industry standard options could you check for as a way to easily connect to Snowflake? (Select 2)",
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
    "explanation": "ODBC (Open Database Connectivity) and JDBC (JAVA Database Connectivity) are the industry standard options to connect Snowflake easily.",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_6_485",
    "number": 6,
    "question": "An hour ago, you ran a complex query. You then ran several simple queries from the same worksheet. You want to export the results from the complex query but they are no longer loaded in the Results pane of the worksheet. What is the least costly way to download the results?",
    "options": [
      {
        "id": 1,
        "value": "Click on History -> Locate the Query -> Click “Download Results“ in column 3"
      },
      {
        "id": 2,
        "value": "Type the command SELECT RESULTS(-3) into the Worksheet and click “Run“"
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
    "explanation": "The History page displays queries executed in the last 14 days, starting with the most recent ones. You can use the End Time filter to display queries based on a specified date; however, if you specify a date earlier than the last 14 days, no results are returned. You can export results only for queries for which you can view the results (i.e. queries youve executed). If you didnt execute a query or the query result is no longer available, the Export Result button is not displayed for the query. The web interface only supports exporting results up to 100 MB in size. If a query result exceeds this limit, you are prompted whether to proceed with the export. The export prompts may differ depending on your browser. For example, in Safari, you are prompted only for an export format (CSV or TSV). After the export completes, you are prompted to download the exported result to a new window, in which you can use the Save Page As browser option to save the result to a file.",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_7_486",
    "number": 7,
    "question": "Once the Snowflake Account is provisioned, user can access Snowflake using following methods:",
    "options": [
      {
        "id": 1,
        "value": "Any client application connected via JDBC or ODBC"
      },
      {
        "id": 2,
        "value": "Any 3rd-party partner that can connect to Snowflake"
      },
      {
        "id": 3,
        "value": "SnowSQL, the Snowflake command line client"
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
    "explanation": "Once your Snowflake account has been provisioned, you can access Snowflake using any of the following methods: – Browser-based web interface – SnowSQL, the Snowflake command line client – Any client application connected via JDBC or ODBC – Any 3rd-party partner that can connect to Snowflake",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_8_487",
    "number": 8,
    "question": "Snowflake offers multiple editions. Which one is not a offering from Snowflake.",
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
    "explanation": "Snowflake offers 4 editions: 1 – Standard Edition 2 – Enterprise Edition 3 – Business Critical Edition 4 – Virtual Private Snowflake (VPS)",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_9_488",
    "number": 9,
    "question": "A CAST command (symbol) will force a value to be output as a certain datatype. Which of the following code samples will result in the “employeename“ being output using the VARCHAR datatype?",
    "options": [
      {
        "id": 1,
        "value": "SELECT employeename AS VARCHAR"
      },
      {
        "id": 2,
        "value": "SELECT VARCHAR(employeename)"
      },
      {
        "id": 3,
        "value": "SELECT employeename||VARCHAR"
      },
      {
        "id": 4,
        "value": "SELECT employeename::VARCHAR"
      }
    ],
    "answers": [
      4
    ],
    "explanation": ":: is used for Casting in Snowflake.",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_10_489",
    "number": 10,
    "question": "You have a dashboard that connects to Snowflake via JDBC. The dashboard is refreshed hundreds of times per day. The data is very stable, only changing once or twice per day. The query run by the dashboard connector user never changes. How will Snowflake manage changing and non-changing data? Mark all true statements.",
    "options": [
      {
        "id": 1,
        "value": "Snowflake will spin up a warehouse each time the dashboard is refreshed"
      },
      {
        "id": 2,
        "value": "Snowflake will compile results cache data from all user results so no warehouse is needed"
      },
      {
        "id": 3,
        "value": "Snowflake will show the most up-to-date data each time the dashboard is refreshed"
      },
      {
        "id": 4,
        "value": "Snowflake will re-use data from the Results Cache as long as it is still the most up-to-date data available"
      },
      {
        "id": 5,
        "value": "Snowflake will spin up a warehouse only if the underlying data has changed"
      }
    ],
    "answers": [
      3,
      4,
      5
    ],
    "explanation": "Until, data has not changed and query is same – Snowflake reuses the data from cache. Please note, Each time the persisted result for a query is reused, Snowflake resets the 24-hour retention period for the result, up to a maximum of 31 days from the date and time that the query was first executed. After 31 days, the result is purged and the next time the query is submitted, a new result is generated and persisted.",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_11_490",
    "number": 11,
    "question": "John wants to share a VIEW with Monica but John wants to hide View definition and details from Monica. What type of view John should create and share with Monica?",
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
    "explanation": "Some of the internal optimizations for views require access to the underlying data in the base tables for the view. This access might allow data that is hidden from users of the view to be exposed through user code, such as user-defined functions, or other programmatic methods. Secure views do not utilize these optimizations, ensuring that users have no access to the underlying data.",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_12_491",
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
    "explanation": "First step is extraction of data from source and then Transform before loading into target database like in Snowflake.",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_13_492",
    "number": 13,
    "question": "Which is not the Security function of cloud services layer?",
    "options": [
      {
        "id": 1,
        "value": "Pruning using metadata about micro-partitions"
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
    "explanation": "Security Services under Cloud Services has following main functions: – Authentication -Access control for users and roles -Access control for shares Encryption and key management Optimizer service of Cloud services takes care of Pruning using metadata about micro-partitions",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_14_493",
    "number": 14,
    "question": "Which of the following terms or phrases can also be used to describe Snowflake? (Select 4)",
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
    "explanation": "Snowflake is a cloud native data platform. It is not a lift and shift of on-premise data warehouse to cloud.",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_15_494",
    "number": 15,
    "question": "Which view does behave like a table and get auto-refreshed?",
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
    "id": "Test 9_16_495",
    "number": 16,
    "question": "Snowflake follows the Staged release process for new releases. How many days it take to normally to complete all the stages of the staged release.",
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
    "explanation": "Snowflake follows 3 stages in one staged release. Which happens in 2 days. – Day 1  Stage 1 (early access) to designated Enterprise accounts. – Day 1 or 2  Stage 2 (regular access) for all Standard Edition accounts. – J31Day 2  Stage 3  (final) for all Enterprise Edition and VPS accounts.",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_17_496",
    "number": 17,
    "question": "A user can connect Snowflake in multiple ways. Please select",
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
        "value": "Any 3rd-party partner that can connect to Snowflake"
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
    "explanation": "Snowflake supports multiple ways of connecting to the service:– Browser-based web interface– SnowSQL, the Snowflake command line client– Any client application connected via JDBC or ODBC– Any 3rd-party partner that can connect to Snowflake",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_18_497",
    "number": 18,
    "question": "A Snowflake customer is responsible for all the maintenance and services.",
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
    "explanation": "Snowflake is full cloud platform and near to zero maintenance platform. Customer doesn‘t have to mundane tasks like partitioning, vacuuming etc.",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_19_498",
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
    "explanation": "Availability zone management is managed by Cloud Provider (like, AWS, AZURE, GCP) not by Snowflake Cloud Services layer.",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_20_499",
    "number": 20,
    "question": "Can you have a database overlap across two Snowflake account?",
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
    "explanation": "A database can not overlap across two Snowflake accounts.",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_21_500",
    "number": 21,
    "question": "Choose the right hierarchy of Snowflake objects from the given options.",
    "options": [
      {
        "id": 1,
        "value": "ACCOUNT > SCHEMA > DATABASE > TABLE"
      },
      {
        "id": 2,
        "value": "ACCOUNT > DATABASE > SCHEMA > TABLE"
      },
      {
        "id": 3,
        "value": "ACCOUNT > STAGE > DATABASE > SCHEMA > TABLE"
      },
      {
        "id": 4,
        "value": "ACCOUNT > DATABASE > STAGE > SCHEMA"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "The top-most container is the customer ACCOUNT, within which resides DATABASE. Each DATABASE can have 1 or more SCHEMA and each SCHEMA can have one or more TABLES.",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_22_501",
    "number": 22,
    "question": "The best method to assist pruning on a large table is to:",
    "options": [
      {
        "id": 1,
        "value": "Define a HASH TABLE for the table"
      },
      {
        "id": 2,
        "value": "Define a PARTITIONING KEY on the table"
      },
      {
        "id": 3,
        "value": "Define a CLUSTER KEY for the table"
      },
      {
        "id": 4,
        "value": "Create a CLUSTERED INDEX on the table"
      },
      {
        "id": 5,
        "value": "Create a DENSE INDEX on the table"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "A clustering key is a subset of columns in a table (or expressions on a table) that are explicitly designated to co-locate the data in the table in the same micro-partitions. This is useful for very large tables where the ordering was not ideal (at the time the data was inserted/loaded) or extensive DML has caused the tables natural clustering to degrade.",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_23_502",
    "number": 23,
    "question": "How is the most effective way to test if clustering a table helped performance?",
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
    "explanation": "Also, Snowflake strongly recommends that you test a representative set of queries on the table to establish some performance baselines.",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_24_503",
    "number": 24,
    "question": "Which command will return information about the current database?",
    "options": [
      {
        "id": 1,
        "value": "RETURN current_database( );"
      },
      {
        "id": 2,
        "value": "SELECT current_database( );"
      },
      {
        "id": 3,
        "value": "QUERY current_database( );"
      },
      {
        "id": 4,
        "value": "USE current_database( );"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "CURRENT_DATABASE() is a context function and returns the name current database using SELECT command.",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_25_504",
    "number": 25,
    "question": "Which type of view is most like a table?",
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
    "id": "Test 9_26_505",
    "number": 26,
    "question": "The BI group is complaining about their queries taking too long to run. Checking the virtual warehouse information shows the queued time is pretty high. What is the best way to fix this issue?",
    "options": [
      {
        "id": 1,
        "value": "Provide a virtual warehouse for every user in the group"
      },
      {
        "id": 2,
        "value": "STATEMENT_QUEUED_TIMEOUT_IN_SECONDS parameter to a low value to cancel those queries if they get in the queue"
      },
      {
        "id": 3,
        "value": "Increase the virtual warehouse MAXCONCURRENCY_LEVEL parameter"
      },
      {
        "id": 4,
        "value": "Increase the virtual warehouse MAX_CLUSTER_COUNT property"
      },
      {
        "id": 5,
        "value": "Increase the size of the virtual warehouse"
      },
      {
        "id": 6,
        "value": "Determine which users have the high priority queries and set the other users"
      }
    ],
    "answers": [
      4
    ],
    "explanation": "Remember, If queuing can be solved by SCALE-OUT (add new clusters), not by SCALE-UP. SCALE-UP is good for performance. MAX_CLUSTER_OUT helps to the maximum number of clusters which a warehouse can run in case of high workload.",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_27_506",
    "number": 27,
    "question": "SQL Clause which helps defining the clustering key:",
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
    "explanation": "example – create or replace table t1 (c1 date, c2 string, c3 number) cluster by (c1, c2);",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_28_507",
    "number": 28,
    "question": "Who can create shares?",
    "options": [
      {
        "id": 1,
        "value": "ROLE with CREATE SHARES global Privilege"
      },
      {
        "id": 2,
        "value": "ACCOUNTADMIN"
      }
    ],
    "answers": [
      1,
      2
    ],
    "explanation": "You must use the ACCOUNTADMIN role or a role granted the CREATE SHARES global privilege.",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_29_508",
    "number": 29,
    "question": "Snowflake Resource Monitor allows administrators to set thresholds and triggers to track credit usage. What methods are most effective for resource monitoring? (Check all that apply).",
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
    "id": "Test 9_30_509",
    "number": 30,
    "question": "Snowflake Administrators should utilize resource monitors to help control costs and avoid unexpected credit usage. Which of the following actions can Snowflake‘s resource monitor triggers initiate automatically? (Check three that apply)",
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
        "value": "Trigger warehouse suspension for high usage"
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
    "id": "Test 9_31_510",
    "number": 31,
    "question": "In the History Page, a query shows Bytes Scanned having Assigned Partitions: 110, Scanned Partitions 58, and Original Partitions 110. Why did the optimizer show fewer partitions scanned than assigned?",
    "options": [
      {
        "id": 1,
        "value": "During the execution of the query, new data was added to the table and the optimizer had to add those micro partitions into the scan."
      },
      {
        "id": 2,
        "value": "The static optimization determined the number of possible micro partitions would be 110 but the dynamic optimization was able to prune some of the partitions from a joined table"
      },
      {
        "id": 3,
        "value": "One of the tables in the query was an external table and didnt have micro partitions The metadata for the table was out of date and there were really only 58 partitions total"
      },
      {
        "id": 4,
        "value": "The optimizer estimated only 58 partitions would need to be scan but during the execution of the query, the optimizer realized it would have to read all 110 micro partitions"
      },
      {
        "id": 5,
        "value": "The query was using an Xlarge warehouse and could scan the partitions in parallel"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "Snowflake produces well-clustered data in tables in micro-partitions. Snowflake only targets those micro-partitions which come under the range of query criteria. If table is clustered well, Snowflake scans only few of the micro-partitions.",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_32_511",
    "number": 32,
    "question": "What is the data type provided by Snowflake to store semi structure data?",
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
    "explanation": "Snowflake loads semi-structured data into a single VARIANT column",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_33_512",
    "number": 33,
    "question": "When a database or schema that contains a source table and stream is cloned, any unconsumed records in the stream (in the clone) are inaccessible",
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
    "explanation": "Currently, when a database or schema that contains a source table and stream is cloned, any unconsumed records in the stream (in the clone) are inaccessible. This behavior is consistent with Time Travel for tables. If a table is cloned, historical data for the table clone begins at the time/point when the clone was created",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_34_513",
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
        "value": "Warehouse Cache"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "Metadata Management has following major functions: – Stores metadata as data is loaded into the system – Handles queries that can be processes completely from metadata -Used for Time Travel and Cloning -Every aspect of Snowflake architecture leverages met",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_35_514",
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
        "value": "If possible, use the tables defined CLUSTER KEY in the query"
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
    "id": "Test 9_36_515",
    "number": 36,
    "question": "Which cache type gets purged regularly?",
    "options": [
      {
        "id": 1,
        "value": "Warehouse Cache"
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
    "explanation": "Result Cache gets suspended every 24 hours unless queried again within 24 hours. It can go until 31 days. If you also see option for Warehouse and it is mentioned that AUTO_SUSPEND is set then Warehouse Cache will be you best answer.",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_37_516",
    "number": 37,
    "question": "Which type of view has an extra layer of protection to hide the SQL code from unauthorized viewing?",
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
    "explanation": "Some of the internal optimizations for views require access to the underlying data in the base tables for the view. This access might allow data that is hidden from users of the view to be exposed through user code, such as user-defined functions, or other programmatic methods. Secure views do not utilize these optimizations, ensuring that users have no access to the underlying data.",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_38_517",
    "number": 38,
    "question": "What is the name of the Snowflake-produced Command Line Interface tool?",
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
    "explanation": "SnowSQL is the next-generation command line client for connecting to Snowflake to execute SQL queries and perform all DDL and DML operations, including loading data into and unloading data out of database tables.",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_39_518",
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
    "id": "Test 9_40_519",
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
    "explanation": "This is true and unique feature of Snowflake to make the data available for everyone intended to access any time without any contention issues.",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_41_520",
    "number": 41,
    "question": "Which SQL statements will need a running Warehouse and consume credit? Consider table created as – CREATE OR REPLACE TABLE T1 ( ID number(2), Name varchar(20), Salary number (11,2) );",
    "options": [
      {
        "id": 1,
        "value": "SELECT MAX(ID) FROM T1;"
      },
      {
        "id": 2,
        "value": "SELECT AVG(ID) FROM T1;"
      },
      {
        "id": 3,
        "value": "SELECT MIN(ID) FROM T1;"
      },
      {
        "id": 4,
        "value": "SELECT COUNT(*) FROM T1;"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "Cloud services layer does not store average value of column data, and so, it gets computed and requires a running warehouse.",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_42_521",
    "number": 42,
    "question": "There are two types of Snowflake planned releases. Please choose all applicable.",
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
    "explanation": "There are two types of planned releases:1 – Full Release – It covers new features, feature enhancement or updates,  and fixes2- Patch Release – A patch release includes fixes only. Note that the patch release for a given week may be canceled if the full release for the week is sufficiently delayed or prolonged.Note – Every month, Snowflake deploys one behavior change release. Behavior change releases contain changes to existing behaviors that may impact customers.",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_43_522",
    "number": 43,
    "question": "To change the warehouse that will be used to run a SQL command within a specific worksheet (for example, changing the worksheet so that it uses LARGE), what two options are available?",
    "options": [
      {
        "id": 1,
        "value": "Update the Warehouse field in the Context Menu located above the worksheet."
      },
      {
        "id": 2,
        "value": "Run a SQL command like “SET WAREHOUSE CONTEXT=LARGE_WH“"
      },
      {
        "id": 3,
        "value": "Run a SQL Command like “USE WAREHOUSE LARGE_WH;“"
      },
      {
        "id": 4,
        "value": "Go to Worksheet properties page and set the Warehouse field to LARGE_WH"
      }
    ],
    "answers": [
      1,
      3
    ],
    "explanation": "USE WAREHOUSE; command sets the warehouse for the current session, whereis the name of the warehouse which needs to be set for the session. Warehouse can be also set using Web UI Context pane.",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_44_523",
    "number": 44,
    "question": "Which is not the function under Metadata Management of Cloud Services Layer?",
    "options": [
      {
        "id": 1,
        "value": "Used for storing physical micro partition"
      },
      {
        "id": 2,
        "value": "Handles Queries that can be processes completely from metadata"
      },
      {
        "id": 3,
        "value": "Used for Time Travel and Cloning"
      },
      {
        "id": 4,
        "value": "Stores Metadata as data is loaded into the system"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "Metadata Management has following major functions: – Stores metadata as data is loaded into the system – Handles queries that can be processes completely from metadata -Used for Time Travel and Cloning -Every aspect of Snowflake architecture leverages metadata",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_45_524",
    "number": 45,
    "question": "John ran a query which took around 30 mins. He referred to Query profiler, and found the ‘Bytes spilled to local storage‘ has big number. What could be the issue?",
    "options": [
      {
        "id": 1,
        "value": "John should contact Snowflake Personnel"
      },
      {
        "id": 2,
        "value": "John is using comparatively smaller warehouse"
      },
      {
        "id": 3,
        "value": "Warehouse size has no impact on Bytes spilling"
      },
      {
        "id": 4,
        "value": "John is using very large warehouse"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "If a node has insufficient memory to complete its portion of a query, it will “spill“ to local SSD storage. This can negatively impact performance, but is sometimes acceptable. If a node has insufficient local SSD storage to complete its portion of a query, it will “spill“ to remote cloud storage. This is almost always very bad for performance. The solution in either case is… to simplify the SQL query or increase the warehouse size (to increase scarce resources).",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_46_525",
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
    "id": "Test 9_47_526",
    "number": 47,
    "question": "Snowflake is a Cloud Data Platform delivered as a service.",
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
    "explanation": "Snowflake is a cloud native data platform. It is not a lift and shift of on-premise data warehouse to cloud.",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_48_527",
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
    "id": "Test 9_49_528",
    "number": 49,
    "question": "Which of the following are Snowflake view types? (Select 3)",
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
    "explanation": "Permanent and Transient are types of Table not View.",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_50_529",
    "number": 50,
    "question": "Objects that are dropped from a shared database and then recreated with the same name are not immediately available in the share; you must execute grant usage on the objects to make them available",
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
    "explanation": "True, you need to GRANT on newly create object. It doesn‘t matter if you create the same object what you have dropped.",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_51_530",
    "number": 51,
    "question": "Which table type disappears after the close of the session and therefore has no fail-safe, and no time travel options after the close of the session?",
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
    "explanation": "Temporary table is tied to a session only.",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_52_531",
    "number": 52,
    "question": "Snowflake is a packaged software offering that can be installed by a user.",
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
    "explanation": "Snowflake is a cloud native data platform.",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_53_532",
    "number": 53,
    "question": "Which query will require compute (Virtual Warehouse)? Consider table created as – CREATE or replace TABLE T1 ( ID number(2), Name varchar(20), ID number (11,2) );",
    "options": [
      {
        "id": 1,
        "value": "SELECT * FROM T1;"
      },
      {
        "id": 2,
        "value": "SELECT CURRENT_ACCOUNT();"
      },
      {
        "id": 3,
        "value": "SHOW DATABASES;"
      },
      {
        "id": 4,
        "value": "SELECT MAX(ID) FROM T1;"
      },
      {
        "id": 5,
        "value": "SELECT MIN(ID) FROM T1;"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "Except SELECT * FROM T1, all the queries return results from cloud services layer metadata, So these queries do not need a running Virtual Warehouse.",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_54_533",
    "number": 54,
    "question": "The following SQL statement will require a running warehouse – CREATE TABLE T1 (NAME (VARCHAR20), ADDRESS VARCHAR (50));",
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
    "explanation": "CREATE DDL statement is handles by Cloud Services layer and so, it doesn‘t require Virtual Warehouse.",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_55_534",
    "number": 55,
    "question": "Which of the following workload is Snowflake suited for?",
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
        "value": "Data Sharing and Exchanges"
      },
      {
        "id": 5,
        "value": "Data Science"
      },
      {
        "id": 6,
        "value": "Data Warehouse"
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
    "explanation": "Snowflake is not a just Data Warehouse platform. It is a Data platform which can handle all of these workloads.",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_56_535",
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
    "explanation": "A single clustering key can contain one or more columns or expressions. For most tables, Snowflake recommends a maximum of 3 or 4 columns (or expressions) per key. Adding more than 3-4 columns tends to increase costs more than benefits.",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_57_536",
    "number": 57,
    "question": "Which statement accurately describes the Snowflake Cloud Services layer?",
    "options": [
      {
        "id": 1,
        "value": "A collection of independent, scalable, and stateless services providing crucial data management capabilities"
      },
      {
        "id": 2,
        "value": "A collection of tightly coupled database management features"
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
    "explanation": "Snowflake is a cloud native data platform. It is not a cloud provider like AWS or Azure. It offers unique architecture of decoupled storage and compute with unlimited elasticity capability.",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_58_537",
    "number": 58,
    "question": "Snowflake calculates usage of data stored in the system for:",
    "options": [
      {
        "id": 1,
        "value": "Cloud storage used in External Stage"
      },
      {
        "id": 2,
        "value": "Files staged for bulk data loading/unloading"
      },
      {
        "id": 3,
        "value": "Clones of database tables that reference data deleted in the table that owns the clones"
      },
      {
        "id": 4,
        "value": "Database tables, including historical data for Time Travel"
      },
      {
        "id": 5,
        "value": "Fail-safe for database tables"
      }
    ],
    "answers": [
      2,
      3,
      4,
      5
    ],
    "explanation": "Usage for data storage is calculated on the daily average amount of data (in bytes) stored in the system for: – Files staged for bulk data loading/unloading (can be stored compressed or uncompressed). – Database tables, including historical data for Time Travel (always compressed by Snowflake). – Fail-safe for database tables (always compressed by Snowflake). – Clones of database tables that reference data deleted in the table that owns the clones. Cloud storage used in External Stage is not managed by Snowflake. Its customers who pay to their cloud provider.",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_59_538",
    "number": 59,
    "question": "Which of the following are unique objects introduced by Snowflake?",
    "options": [
      {
        "id": 1,
        "value": "PIPE"
      },
      {
        "id": 2,
        "value": "STAGE"
      },
      {
        "id": 3,
        "value": "TABLE"
      }
    ],
    "answers": [
      1,
      2
    ],
    "explanation": "STAGE and PIPE are unique Snowflake objects.",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 9_60_539",
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
    "explanation": "Secure View with Account mapping using CURRENT_ACCOUNT();",
    "reference": "",
    "source": "Test 9",
    "testNumber": 9
  },
  {
    "id": "Test 10_1_540",
    "number": 1,
    "question": "To restore the table by undrop command what all conditions should be met?",
    "options": [
      {
        "id": 1,
        "value": "The table can be restored in same schema only from which it has been dropped"
      },
      {
        "id": 2,
        "value": "User must of CREATE privileges on the schema in which table is getting restored"
      },
      {
        "id": 3,
        "value": "The table can be restored in any schema irrespective from whichever schema the table was dropped."
      },
      {
        "id": 4,
        "value": "User executing undrop command should have ownership privilege on the table"
      }
    ],
    "answers": [
      1,
      2,
      4
    ],
    "explanation": "Similar to dropping an object, a user must have OWNERSHIP privileges for an object to restore it. In addition, the user must have CREATE privileges on the object type for the database or schema where the dropped object will be restored. Restoring tables and schemas is only supported in the current schema or current database, even if a fully-qualified object name is specified Refer Link –https://docs.snowflake.com/en/user-guide/data-time-travel.html#data-retention-period",
    "reference": "https://docs.snowflake.com/en/user-guide/data-time-travel.html#data-retention-period",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_2_541",
    "number": 2,
    "question": "What is the default table type when a CREATE TABLE is executed?",
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
    "explanation": "The default type for tables is permanent. To define a table as temporary or transient, you must explicitly specify the type during table creation: CREATE [ OR REPLACE ] [ TEMPORARY | TRANSIENT ] TABLE",
    "reference": "",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_3_542",
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
    "explanation": "A stream object records data manipulation language (DML) changes made to tables, including inserts, updates, and deletes, as well as metadata about each change, so that actions can be taken using the changed data. This process is referred to as change data capture (CDC). An individual table stream tracks the changes made to rows in a source table. A table stream (also referred to as simply a stream) makes a change table available of what changed, at the row level, between two transactional points of time in a table. This allows querying and consuming a sequence of change records in a transactional fashion.",
    "reference": "",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_4_543",
    "number": 4,
    "question": "The CDC records returned when querying a stream rely on a combination of –",
    "options": [
      {
        "id": 1,
        "value": "Offset stored in Table"
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
        "value": "The change tracking metadata stored in the table"
      }
    ],
    "answers": [
      2,
      4
    ],
    "explanation": "Note that a stream itself does not contain any table data. A stream only stores the offset for the source table and returns CDC records by leveraging the versioning history for the source table. When the first stream for a table is created, a pair of hidden columns are added to the source table and begin storing change tracking metadata. These columns consume a small amount of storage. The CDC records returned when querying a stream rely on a combination of the offset stored in the stream and the change tracking metadata stored in the table.",
    "reference": "",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_5_544",
    "number": 5,
    "question": "Which type of table stream is supported only on external tables?",
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
    "explanation": "Insert-only Supported on external tables only. An insert-only stream tracks row inserts only; they do not record delete operations that remove rows from an inserted set (i.e. no-ops). For example, in-between any two offsets, if File1 is removed from the cloud storage location referenced by the external table, and File2 is added, the stream returns records for the rows in File2 only. Unlike when tracking CDC data for standard tables, Snowflake cannot access the historical records for files in cloud storage. Overwritten files are essentially handled as new files: The old version of the file is removed from cloud storage, but the insert-only stream does not record the delete operation. The new version of the file is added to cloud storage, and the insert-only stream records the rows as inserts. The stream does not record the diff of the old and new file versions",
    "reference": "",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_6_545",
    "number": 6,
    "question": "If you have a table with a 10-day retention period and increase the period to 20 days, then the data that was moved to fail safe on 11th day, will be moved back to Time Travel, and will have more 9 days left for time travel retention end",
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
    "explanation": "The data once moved to fail safe cannot moved back to time travel retenion period.",
    "reference": "",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_7_546",
    "number": 7,
    "question": "Which parameter is used to check if the stream contains change data for a table or not?",
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
    "explanation": "Tasks may optionally use table streams to provide a convenient way to continuously process new or changed data. A task can transform new or changed rows that a stream surfaces. Each time a task is scheduled to run, it can verify whether a stream contains change data for a table (using SYSTEM$STREAM_HAS_DATA) and either consume the change data or skip the current run if no change data exists.",
    "reference": "",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_8_547",
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
    "explanation": "Fail-safe provides a (non-configurable) 7-day period during which historical data is recoverable by Snowflake. This period starts immediately after the Time Travel retention period ends.",
    "reference": "",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_9_548",
    "number": 9,
    "question": "A table named “MY_TABLE“ has a retention period of 7 days. The table is dropped, and a new table with the same name “MY_TABLE“ has been created. Now if the UNDROP MY_TABLE command is executed what will happen?",
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
        "value": "The UNDROP command will overwrite the already existing table with the previously dropped table"
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
    "id": "Test 10_10_549",
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
    "explanation": "Refer Snowflake Document section of Semi Structure –https://docs.snowflake.com/en/user-guide/semistructured-concepts.html",
    "reference": "https://docs.snowflake.com/en/user-guide/semistructured-concepts.html",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_11_550",
    "number": 11,
    "question": "Which of the following are true about the variant data type in Snowflake? Select all that apply.",
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
    "explanation": "Refer Snowflake Document section of Semi Structure –https://docs.snowflake.com/en/user-guide/semistructured-concepts.html",
    "reference": "https://docs.snowflake.com/en/user-guide/semistructured-concepts.html",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_12_551",
    "number": 12,
    "question": "Dropped tables, schemas, and databases can be listed using the SHOW commands with which keyword specified?",
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
    "explanation": "Dropped tables, schemas, and databases can be listed using the following commands with the HISTORY keyword specified: SHOW TABLES SHOW SCHEMAS SHOW DATABASES The output includes all dropped objects and an additional DROPPED_ON column, which displays the date and time when the object was dropped. If an object has been dropped more than once, each version of the object is included as a separate row in the output.",
    "reference": "",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_13_552",
    "number": 13,
    "question": "What are the additional metadata columns available in Stream to track changes?",
    "options": [
      {
        "id": 1,
        "value": "METADATA$ISDELETE"
      },
      {
        "id": 2,
        "value": "METADATA$ISINSERT"
      },
      {
        "id": 3,
        "value": "METADATA$ACTION"
      },
      {
        "id": 4,
        "value": "METADATA$ISUPDATE"
      },
      {
        "id": 5,
        "value": "METADATA$ROW_ID"
      }
    ],
    "answers": [
      3,
      4,
      5
    ],
    "explanation": "Refer link –https://docs.snowflake.com/en/user-guide/streams.html",
    "reference": "https://docs.snowflake.com/en/user-guide/streams.html",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_14_553",
    "number": 14,
    "question": "Snowflake Tasks executions are associated with the user who created the task, i.e. in the history database we can see that the task is getting executed under the username of the User who created that task",
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
    "explanation": "Snowflake runs tasks with the privileges of the task owner (i.e. the role that has OWNERSHIP privilege on the task), but task runs are not associated with a user. Instead, each run is executed by a system service. Tasks are decoupled from specific users to avoid complications that can arise when users are dropped, locked due to authentication issues, or have roles removed. Because task runs are decoupled from a user, the query history for task runs are associated with the system service. SYSTEM is not a user in the account; it is a behind-the-scenes service. As such, there are no user credentials for this service, and no individual (from Snowflake or in your account) can assume its identity. Activity for the system service is limited to your account. The same encryption protections and other security protocols are built into this service as are enforced for other operations.",
    "reference": "",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_15_554",
    "number": 15,
    "question": "The time travel retention period can only be set at individual object level, and cannot be setup at account level",
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
    "id": "Test 10_16_555",
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
    "explanation": "Refer link –https://docs.snowflake.com/en/user-guide/streams.html",
    "reference": "https://docs.snowflake.com/en/user-guide/streams.html",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_17_556",
    "number": 17,
    "question": "What features are provided by Snowflake to enable continuous data pipelines?",
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
    "id": "Test 10_18_557",
    "number": 18,
    "question": "To help manage the storage costs associated with Time Travel and Fail-safe, Snowflake provides which two table types",
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
    "explanation": "To help manage the storage costs associated with Time Travel and Fail-safe, Snowflake provides two table types, temporary and transient, which do not incur the same fees as standard (i.e. permanent) tables: Transient tables can have a Time Travel retention period of either 0 or 1 day. Temporary tables can also have a Time Travel retention period of 0 or 1 day; however, this retention period ends as soon as the table is dropped or the session in which the table was created ends. Transient and temporary tables have no Fail-safe period. As a result, the maximum additional fees incurred for Time Travel and Fail-safe by these types of tables is limited to 1 day",
    "reference": "",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_19_558",
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
    "explanation": "Snowflake ensures only one instance of a task with a schedule (i.e. a standalone task or the root task in a tree of tasks) is executed at a given time. If a task is still running when the next scheduled execution time occurs, then that scheduled time is skipped.",
    "reference": "",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_20_559",
    "number": 20,
    "question": "An append-only table stream tracks row inserts only. Update and delete operations (including table truncates) are not recorded",
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
    "explanation": "An append-only table stream tracks row inserts only. Update and delete operations (including table truncates) are not recorded. For example, if 10 rows are inserted into a table and then 5 of those rows are deleted before the offset for an append-only stream is advanced, the stream records 10 rows. An append-only stream returns the appended rows only and therefore can be much more performant than a standard stream for extract, load, transform (ELT) and similar scenarios that depend exclusively on row inserts. For example, the source table can be truncated immediately after the rows in an append-only stream are consumed, and the record deletions do not contribute to the overhead the next time the stream is queried or consumed.",
    "reference": "",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_21_560",
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
    "id": "Test 10_22_561",
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
    "id": "Test 10_23_562",
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
    "id": "Test 10_24_563",
    "number": 24,
    "question": "What data structure types can be ingested into a VARIANT column in a Snowflake table? (Check all that apply)",
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
    "explanation": "Refer Snowflake Document section of Semi Structure –https://docs.snowflake.com/en/user-guide/semistructured-concepts.html",
    "reference": "https://docs.snowflake.com/en/user-guide/semistructured-concepts.html",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_25_564",
    "number": 25,
    "question": "UNDROP command is applicable to which all objects",
    "options": [
      {
        "id": 1,
        "value": "DATABASES"
      },
      {
        "id": 2,
        "value": "SCHEMA"
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
    "explanation": "Refer Link –https://docs.snowflake.com/en/user-guide/data-time-travel.html",
    "reference": "https://docs.snowflake.com/en/user-guide/data-time-travel.html",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_26_565",
    "number": 26,
    "question": "Which file format option can be enabled in JSON or AVRO file to remove the outer array structure and load the records into separate table rows",
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
    "explanation": "In general, JSON and Avro data sets are a simple concatenation of multiple documents. The JSON or Avro output from some software is composed of a single huge array containing multiple records. There is no need to separate the documents with line breaks or commas, though both are supported. Instead, we recommend enabling the STRIP_OUTER_ARRAY file format option for the COPY INTO",
    "reference": "",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_27_566",
    "number": 27,
    "question": "Time Travel in Snowflake is useful for which of the following tasks",
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
    "explanation": "Snowflake Time Travel enables accessing historical data (i.e. data that has been changed or deleted) at any point within a defined period. It serves as a powerful tool for performing the following tasks: Restoring data-related objects (tables, schemas, and databases) that might have been accidentally or intentionally deleted. Duplicating and backing up data from key points in the past. Analyzing data usage/manipulation over specified periods of time. Refer Link –https://docs.snowflake.com/en/user-guide/data-time-travel.html",
    "reference": "https://docs.snowflake.com/en/user-guide/data-time-travel.html",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_28_567",
    "number": 28,
    "question": "What is the standard time travel retention period which is enabled for all snowflake accounts?",
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
    "explanation": "The standard retention period is 1 day (24 hours) and is automatically enabled for all Snowflake accounts: For Snowflake Standard Edition, the retention period can be set to 0 (or unset back to the default of 1 day) at the account and object level (i.e. databases, schemas, and tables). For Snowflake Enterprise Edition (and higher): For transient databases, schemas, and tables, the retention period can be set to 0 (or unset back to the default of 1 day). The same is also true for temporary tables. For permanent databases, schemas, and tables, the retention period can be set to any value from 0 up to 90 days.",
    "reference": "",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_29_568",
    "number": 29,
    "question": "Extended time travel of 90 days is supported starting which snowflake edition",
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
        "value": "Virtual Private Snowflake"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "Standard Time Travel is 1 day. Extended Time Travel (up to 90 days) requires Snowflake Enterprise Edition.",
    "reference": "",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_30_569",
    "number": 30,
    "question": "Which two table types dont have fail safe?",
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
    "explanation": "To help manage the storage costs associated with Time Travel and Fail-safe, Snowflake provides two table types, temporary and transient, which do not incur the same fees as standard (i.e. permanent) tables: Transient tables can have a Time Travel retention period of either 0 or 1 day. Temporary tables can also have a Time Travel retention period of 0 or 1 day; however, this retention period ends as soon as the table is dropped or the session in which the table was created ends. Transient and temporary tables have no Fail-safe period. As a result, the maximum additional fees incurred for Time Travel and Fail-safe by these types of tables is limited to 1 day",
    "reference": "",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_31_570",
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
    "explanation": "Refer Snowflake Document section of Semi Structure –https://docs.snowflake.com/en/user-guide/semistructured-concepts.html",
    "reference": "https://docs.snowflake.com/en/user-guide/semistructured-concepts.html",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_32_571",
    "number": 32,
    "question": "If you change the data retention period for a table, the new retention period impacts all data that is active, as well as any data currently in Time Travel",
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
    "explanation": "Refer Link –https://docs.snowflake.com/en/user-guide/data-time-travel.html",
    "reference": "https://docs.snowflake.com/en/user-guide/data-time-travel.html",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_33_572",
    "number": 33,
    "question": "Under what circumstances would Fail-Safe NOT be an effective method for data recovery?",
    "options": [
      {
        "id": 1,
        "value": "As a means for accessing historical data after the Time Travel retention period has ended"
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
    "explanation": "Fail Safe is something that is managed by Snowflake, and the end user cannot directly query data from Fail Safe.In case for any table whos time travel period is over, and we need to still restore the data within 7 days of time travel getting over, then Snowflake Support team can help us get that data.However, as per Snowflake “Fail-safe is not provided as a means for accessing historical data after the Time Travel retention period has ended. It is for use only by Snowflake to recover data that may have been lost or damaged due to extreme operational failures.“You can refer this link for the details – https://docs.snowflake.com/en/user-guide/data-failsafe.html",
    "reference": "",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_34_573",
    "number": 34,
    "question": "Snowflake minimizes the amount of storage required for historical data by maintaining only the information required to restore the individual table rows that were updated or deleted",
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
    "explanation": "The fees are calculated for each 24-hour period (i.e. 1 day) from the time the data changed. The number of days historical data is maintained is based on the table type and the Time Travel retention period for the table. Also, Snowflake minimizes the amount of storage required for historical data by maintaining only the information required to restore the individual table rows that were updated or deleted. As a result, storage usage is calculated as a percentage of the table that changed. Full copies of tables are only maintained when tables are dropped or truncated.",
    "reference": "",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_35_574",
    "number": 35,
    "question": "A single tasks in snowflake can execute multiple SQL Statements",
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
    "explanation": "Currently, a task can execute a single SQL statement, including a call to a stored procedure.Tasks can be combined with table streams for continuous ELT workflows to process recently changed table rows. Streams ensure exactly once semantics for new or changed data in a table. Tasks can also be used independently to generate periodic reports by inserting or merging rows into a report table or perform other periodic work.",
    "reference": "",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_36_575",
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
    "explanation": "Refer link –https://docs.snowflake.com/en/user-guide/data-time-travel.html",
    "reference": "https://docs.snowflake.com/en/user-guide/data-time-travel.html",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_37_576",
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
    "id": "Test 10_38_577",
    "number": 38,
    "question": "Storage fees are incurred for maintaining historical data during the Time Travel but not during Fail-safe periods as Fail safe is managed by Snowflake",
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
    "explanation": "Storage cost is for both Time Travel & Fail Safe. Refer Link –https://docs.snowflake.com/en/user-guide/data-cdp-storage-costs.html",
    "reference": "https://docs.snowflake.com/en/user-guide/data-cdp-storage-costs.html",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_39_578",
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
    "explanation": "Create a task using CREATE TASK. The task is suspended by default.",
    "reference": "",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_40_579",
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
    "id": "Test 10_41_580",
    "number": 41,
    "question": "Using Time Travel, you can perform which of the following actions within a defined period of time (i.e. within the time travel period of the object)",
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
    "explanation": "Using Time Travel, you can perform the following actions within a defined period of time: Query data in the past that has since been updated or deleted. Create clones of entire tables, schemas, and databases at or before specific points in the past. Restore tables, schemas, and databases that have been dropped. Once the defined period of time has elapsed, the data is moved into Snowflake Fail-safe and these actions can no longer be performed.",
    "reference": "",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_42_581",
    "number": 42,
    "question": "Which semi structure data types are available in Snowflake",
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
    "explanation": "Refer Snowflake Document section of Semi Structure –https://docs.snowflake.com/en/user-guide/semistructured-concepts.html",
    "reference": "https://docs.snowflake.com/en/user-guide/semistructured-concepts.html",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_43_582",
    "number": 43,
    "question": "Which of the following Snowflake Object is used for a schedule execution of SQL statement?",
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
    "explanation": "User-defined tasks allow scheduled execution of SQL statements. Tasks run according to a specified execution configuration, using any combination of a set interval and/or a flexible schedule using a subset of familiar cron utility syntax. Tasks currently run in user-specified warehouses but will eventually run in a serverless environment using Snowflake-supplied compute resources.",
    "reference": "",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_44_583",
    "number": 44,
    "question": "For which table type the retention period ends as soon as the the table is dropped or the session in which the table was created ends.",
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
    "explanation": "To help manage the storage costs associated with Time Travel and Fail-safe, Snowflake provides two table types, temporary and transient, which do not incur the same fees as standard (i.e. permanent) tables: Transient tables can have a Time Travel retention period of either 0 or 1 day. Temporary tables can also have a Time Travel retention period of 0 or 1 day; however, this retention period ends as soon as the table is dropped or the session in which the table was created ends. Transient and temporary tables have no Fail-safe period. As a result, the maximum additional fees incurred for Time Travel and Fail-safe by these types of tables is limited to 1 day",
    "reference": "",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_45_584",
    "number": 45,
    "question": "Fail Safe is not supported in Standard Snowflake edition",
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
    "explanation": "Fail Safe is a default feature available with all snowflake edition, without any extra license cost",
    "reference": "",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_46_585",
    "number": 46,
    "question": "Table stream also contains actual table data",
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
    "explanation": "A stream itself does not contain any table data. A stream only stores the offset for the source table and returns CDC records by leveraging the versioning history for the source table. When the first stream for a table is created, a pair of hidden columns are added to the source table and begin storing change tracking metadata. These columns consume a small amount of storage. The CDC records returned when querying a stream rely on a combination of the offset stored in the stream and the change tracking metadata stored in the table.",
    "reference": "",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_47_586",
    "number": 47,
    "question": "DATA_RETENTION_TIME_IN_DAYS paramete is defined as 1 day at account level, and the same parameter is set as 7 days at Database level. Now a table is created inside the given database without specifying any explicit DATA_RETENTION_TIME_IN_DAYS parameter. What would be the data retention period for table in this case?",
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
    "explanation": "If a retention period is specified for a database or schema, the period is inherited by default for all objects created in the database/schema.",
    "reference": "",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_48_587",
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
    "explanation": "Avro is an open-source data serialization and RPC framework originally developed for use with Apache Hadoop. It utilizes schemas defined in JSON to produce serialized data in a compact binary format. The serialized data can be sent to any destination (i.e. application or program) and can be easily deserialized at the destination because the schema is included in the data",
    "reference": "",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_49_588",
    "number": 49,
    "question": "Which two table types can have a maximum retention period of 1 day?",
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
    "explanation": "To help manage the storage costs associated with Time Travel and Fail-safe, Snowflake provides two table types, temporary and transient, which do not incur the same fees as standard (i.e. permanent) tables: Transient tables can have a Time Travel retention period of either 0 or 1 day. Temporary tables can also have a Time Travel retention period of 0 or 1 day; however, this retention period ends as soon as the table is dropped or the session in which the table was created ends. Transient and temporary tables have no Fail-safe period. As a result, the maximum additional fees incurred for Time Travel and Fail-safe by these types of tables is limited to 1 day",
    "reference": "",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_50_589",
    "number": 50,
    "question": "Snowflake supports which of the following file formats for data loading? Select all that apply.",
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
    "explanation": "Refer Snowflake Document section of Semi Structure –https://docs.snowflake.com/en/user-guide/semistructured-concepts.html",
    "reference": "https://docs.snowflake.com/en/user-guide/semistructured-concepts.html",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_51_590",
    "number": 51,
    "question": "Which command can be executed to get the version history of table “Test1“ in schema “mytestdb.myschema“ within the time travel period in snowflake?",
    "options": [
      {
        "id": 1,
        "value": "show history of table like ‘Test1‘ in mytestdb.myschema;"
      },
      {
        "id": 2,
        "value": "show version of table like ‘Test1‘ in mytestdb.myschema;"
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
    "explanation": "Refer Link –https://docs.snowflake.com/en/user-guide/data-time-travel.html#data-retention-period",
    "reference": "https://docs.snowflake.com/en/user-guide/data-time-travel.html#data-retention-period",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_52_591",
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
    "id": "Test 10_53_592",
    "number": 53,
    "question": "Changing the time travel retention period for your account or individual objects changes the value for all lower-level objects that do not have a retention period explicitly set",
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
    "explanation": "Changing the retention period for your account or individual objects changes the value for all lower-level objects that do not have a retention period explicitly set. For example: If you change the retention period at the account level, all databases, schemas, and tables that do not have an explicit retention period automatically inherit the new retention period. If you change the retention period at the schema level, all tables in the schema that do not have an explicit retention period inherit the new retention period. Keep this in mind when changing the retention period for your account or any objects in your account because the change might have Time Travel consequences that you did not anticipate or intend. In particular, we do not recommend changing the retention period to 0 at the account level.",
    "reference": "",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_54_593",
    "number": 54,
    "question": "Which two SQL Extension clause are provided by Snowflake to support time travel?",
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
    "explanation": "To support Time Travel, the following SQL extensions have been implemented: AT | BEFORE clause which can be specified in SELECT statements and CREATE  CLONE commands (immediately after the object name). The clause uses one of the following parameters to pinpoint the exact historical data you wish to access: TIMESTAMP OFFSET (time difference in seconds from the present time) STATEMENT (identifier for statement, e.g. query ID) UNDROP command for tables, schemas, and databases",
    "reference": "",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_55_594",
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
    "id": "Test 10_56_595",
    "number": 56,
    "question": "The data retention period for a database, schema, or table cannot be changed after they are created.",
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
    "explanation": "The data retention period for a database, schema, or table can be changed at any time.",
    "reference": "",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_57_596",
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
    "id": "Test 10_58_597",
    "number": 58,
    "question": "Which parameter is used to set the time travel retention period?",
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
    "explanation": "To specify the data retention period for Time Travel: The DATA_RETENTION_TIME_IN_DAYS object parameter can be used by users with the ACCOUNTADMIN role to set the default retention period for your account. The same parameter can be used to explicitly override the default when creating a database, schema, and individual table. The data retention period for a database, schema, or table can be changed at any time.",
    "reference": "",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_59_598",
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
        "value": "The task is re-possessed by the role that dropped the owner role"
      },
      {
        "id": 4,
        "value": "The roles granted to any task cannot be dropped unless all associated tasks are dropped"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "When the owner role of a given task (i.e. the role with the OWNERSHIP privilege on the task) is deleted, the task is re-possessed by the role that dropped the owner role. This ensures that ownership moves to a role that is closer to the root of the role hierarchy. When a task is re-possessed, it is automatically paused, i.e., all executions currently in flight complete processing, but new executions will not be scheduled until the task is resumed explicitly by the new owner. The rationale for this is to prevent a user with access to a particular role from leaving behind tasks that suddenly execute with higher permissions when the role is removed. If the role that a running task is executing under is dropped while the task is running, the task completes processing under the dropped role.",
    "reference": "",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 10_60_599",
    "number": 60,
    "question": "In Snowflake Enterprise edition, the maximum retention period for a transient or temporary table is?",
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
        "value": "Transient & Temporary table cannot be configured for time travel"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "For Snowflake Enterprise Edition (and higher): For transient databases, schemas, and tables, the retention period can be set to 0 (or unset back to the default of 1 day). The same is also true for temporary tables. For permanent databases, schemas, and tables, the retention period can be set to any value from 0 up to 90 days",
    "reference": "",
    "source": "Test 10",
    "testNumber": 10
  },
  {
    "id": "Test 11_1_600",
    "number": 1,
    "question": "STRIP_NULL_VALUE converts a JSON null value to a SQL NULL value. (TRUE / FALSE)",
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
    "explanation": "Converts a JSON null value to a SQL NULL value. All other variant values are passed unchanged.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_2_601",
    "number": 2,
    "question": "John created a Database and set the DATA_RETENTION_TIME_IN_DAYS as 30 days, but he did not set the DATA_RETENTION_TIME_IN_DAYS in one of the table ‘T1‘. After 5 days, he accidently dropped table ‘T1‘. Will he able to recover the table T1?",
    "options": [
      {
        "id": 1,
        "value": "Yes, as the retention period is specified at database level"
      },
      {
        "id": 2,
        "value": "John can recover the table T1 after 30 days"
      },
      {
        "id": 3,
        "value": "John should call Snowflake Support to recover the table from Fail-Safe."
      },
      {
        "id": 4,
        "value": "No, John cant recover the dropped table T1 because he didn‘t set DATA_RETENTION_TIME_IN_DAYS for Table T1"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "If a retention period is specified for a database or schema, the period is inherited by default for all objects created in the database/schema.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_3_602",
    "number": 3,
    "question": "What all commands will you use to load data from External Stage (for example, AWS S3 bucket) System to Snowflake table?",
    "options": [
      {
        "id": 1,
        "value": "Only COPY INTO command"
      },
      {
        "id": 2,
        "value": "PUT COMMAND followed by COPY INTO"
      },
      {
        "id": 3,
        "value": "COPY INTO followed by PUT command"
      },
      {
        "id": 4,
        "value": "Only PUT command"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "You do not need to run PUT command when loading data from External Stage to Snowflake. COPY INTO command can directly copy from External Stage or Cloud Storage (Like AWS S3 bucket).",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_4_603",
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
        "value": "In a permanent table using the variant data type"
      },
      {
        "id": 4,
        "value": "In files in a internal stage"
      },
      {
        "id": 5,
        "value": "In files in an external stage"
      }
    ],
    "answers": [
      3,
      4,
      5
    ],
    "explanation": "Snowflake CAN‘T access from AWS EC2 server and on-prem file server. Snowflake can query External Table ( files of External Stage), Internal Stage and Permanent table.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_5_604",
    "number": 5,
    "question": "Permissions on database objects such as a database or table are granted to:",
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
    "explanation": "Snowflake supports Role-Based Access control.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_6_605",
    "number": 6,
    "question": "External Stages require customers to have an account with a cloud storage service provider. Which of the following are available currently or have been announced by Snowflake as under development?",
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
    "explanation": "Snowflake currently supports AWS S3, MS Azure Blob, GCP Buckets.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_7_606",
    "number": 7,
    "question": "Monica is an ACCOUNTADMIN and wants to change the Time Travel retention period of table T1 of database DB1 to 15 days. Which options will help her to set the new Time Travel retention period?",
    "options": [
      {
        "id": 1,
        "value": "Execute SQL Command - ALTER TABLE T1 SET DATA_RETENTION_TIME_IN_DAYS = 15;"
      },
      {
        "id": 2,
        "value": "Execute SQL Command - ALTER TABLE T1 SET DATA_RETENTION_TIME_IN_DAYS = 75;"
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
    "explanation": "Set the correct context for Database and Schema and run the ALTER TABLE command to set DATA_RETENTION_TIME_IN_DAYS to 15.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_8_607",
    "number": 8,
    "question": "John wants to share a VIEW with Monica but John wants to hide View definition and details from Monica. What type of view John should create and share with Monica?",
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
    "explanation": "Some of the internal optimizations for views require access to the underlying data in the base tables for the view. This access might allow data that is hidden from users of the view to be exposed through user code, such as user-defined functions, or other programmatic methods. Secure views do not utilize these optimizations, ensuring that users have no access to the underlying data.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_9_608",
    "number": 9,
    "question": "The following SQL statement will require a running warehouse – CREATE TABLE T1 (NAME (VARCHAR20), ADDRESS VARCHAR (50));",
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
    "explanation": "CREATE DDL statement is handles by Cloud Services layer and so, it doesn‘t require Virtual Warehouse.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_10_609",
    "number": 10,
    "question": "User A and User B can access one another‘s result sets from the Results Cache, as long as which of the following are true? (Choose two)",
    "options": [
      {
        "id": 1,
        "value": "They use the same Warehouse."
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
    "id": "Test 11_11_610",
    "number": 11,
    "question": "Which command will return information about the current database?",
    "options": [
      {
        "id": 1,
        "value": "QUERY current_database( );"
      },
      {
        "id": 2,
        "value": "USE current_database( );"
      },
      {
        "id": 3,
        "value": "SELECT current_database( );"
      },
      {
        "id": 4,
        "value": "RETURN current_database( );"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "CURRENT_DATABASE() is a context function and returns the name current database using SELECT command.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_12_611",
    "number": 12,
    "question": "There are two types of Snowflake Planned releases. Please choose all applicable.",
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
    "explanation": "There are two types of planned releases:1 – Full Release – It covers new features, feature enhancement or updates,  and fixes2- Patch Release – A patch release includes fixes only. Note that the patch release for a given week may be canceled if the full release for the week is sufficiently delayed or prolonged.Note – Every month, Snowflake deploys one behavior change release. Behavior change releases contain changes to existing behaviors that may impact customers.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_13_612",
    "number": 13,
    "question": "How often does Snowflake release new features?",
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
    "explanation": "Snowflake releases new upgrades and patches weekly.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_14_613",
    "number": 14,
    "question": "John created a table EMPLOYEE in worksheet 1 (Session1 ) but when he ran SELECT * FROM EMPLOYEE in worksheet 2 (Session 2) after setting up the correct Role, Database and Schema, he received error ‘ Table doesn‘t exist‘. What could be the reason?",
    "options": [
      {
        "id": 1,
        "value": "EMPLOYEE is Temporary table"
      },
      {
        "id": 2,
        "value": "EMPLOYEE is a Permanent Table"
      },
      {
        "id": 3,
        "value": "EMPLOYEE was created as EXTERNAL TABLE"
      },
      {
        "id": 4,
        "value": "XYZ is Transient Table"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "Temporary table is tied to a session only.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_15_614",
    "number": 15,
    "question": "You have a dashboard that connects to Snowflake via JDBC. The dashboard is refreshed hundreds of times per day. The data is very stable, only changing once or twice per day. The query run by the dashboard connector user never changes. How will Snowflake manage changing and non-changing data? Mark all true statements.",
    "options": [
      {
        "id": 1,
        "value": "Snowflake will re-use data from the Results Cache as long as it is still the most up-to-date data available"
      },
      {
        "id": 2,
        "value": "Snowflake will spin up a warehouse each time the dashboard is refreshed"
      },
      {
        "id": 3,
        "value": "Snowflake will compile results cache data from all user results so no warehouse is needed"
      },
      {
        "id": 4,
        "value": "Snowflake will show the most up-to-date data each time the dashboard is refreshed"
      },
      {
        "id": 5,
        "value": "Snowflake will spin up a warehouse only if the underlying data has changed"
      }
    ],
    "answers": [
      1,
      4,
      5
    ],
    "explanation": "Until, data has not changed and query is same – Snowflake reuses the data from cache. Please note, Each time the persisted result for a query is reused, Snowflake resets the 24-hour retention period for the result, up to a maximum of 31 days from the date and time that the query was first executed. After 31 days, the result is purged and the next time the query is submitted, a new result is generated and persisted.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_16_615",
    "number": 16,
    "question": "Multi-cluster warehouse credit billing is based on which factors? (Select 2)",
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
    "explanation": "For multi-cluster warehouse, the number of credit billed is calculated based on the number of servers per cluster and the number of clusters that run within the time period.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_17_616",
    "number": 17,
    "question": "AWS PrivateLink is an AWS service for creating private VPC endpoints that allow direct, secure connectivity between AWS VPCs without traversing the public Internet. (TRUE / FALSE)",
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
    "explanation": "Snowflake on AWS is implemented as a VPC, PrivateLink enables creating a highly-secure network between Snowflake and your other AWS VPCs (in the same AWS region), fully protected from unauthorized external access.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_18_617",
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
    "explanation": "Role is not child object of schema.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_19_618",
    "number": 19,
    "question": "John wants to create a multi-cluster warehouse and wants to make sure that the virtual warehouse starts the additional clusters only if the system estimates there‘s enough query load to keep the cluster busy for at least 6 minutes. How should he configure the Warehouse?",
    "options": [
      {
        "id": 1,
        "value": "Set the SCALING POLICY as STANDARD"
      },
      {
        "id": 2,
        "value": "Snowflake takes care of this automatically so, John does not have to worry about it"
      },
      {
        "id": 3,
        "value": "Set the SCALING POLICY as ECONOMY"
      },
      {
        "id": 4,
        "value": "Configure as SCALE-MAX so that the warehouse is always using maximum number of specified clusters"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "If a multi-cluster warehouse is configured with SCALING policy as ECONOMY it starts cluster only if the system estimates theres enough query load to keep the cluster busy for at least 6 minutes.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_20_619",
    "number": 20,
    "question": "Objects that are dropped from a shared database and then recreated with the same name are not immediately available in the share; you must execute grant usage on the objects to make them available",
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
    "explanation": "True, you need to GRANT on newly create object. It doesn‘t matter if you create the same object what you have dropped.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_21_620",
    "number": 21,
    "question": "Which of the following are unique objects introduced by Snowflake?",
    "options": [
      {
        "id": 1,
        "value": "STAGE"
      },
      {
        "id": 2,
        "value": "TABLE"
      },
      {
        "id": 3,
        "value": "PIPE"
      }
    ],
    "answers": [
      1,
      3
    ],
    "explanation": "STAGE and PIPE are unique Snowflake objects.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_22_621",
    "number": 22,
    "question": "Which parameter does help in loading files whose metadata has expired?",
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
    "explanation": "To load files whose metadata has expired, set the LOAD_UNCERTAIN_FILES copy option to true.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_23_622",
    "number": 23,
    "question": "When should you avoid enabling AUTO_SUSPEND?",
    "options": [
      {
        "id": 1,
        "value": "You have a heavy, steady workload for the warehouse."
      },
      {
        "id": 2,
        "value": "You should always enable AUTO_SUSPEND to save the compute costs."
      },
      {
        "id": 3,
        "value": "You require the warehouse to be available with no delay or lag time"
      }
    ],
    "answers": [
      1,
      3
    ],
    "explanation": "You might want to consider disabling auto-suspend for a warehouse if: – You have a heavy, steady workload for the warehouse. – You require the warehouse to be available with no delay or lag time. Server provisioning is generally very fast (e.g. 1 or 2 seconds); however, depending on the size of the warehouse and the availability of servers to provision, it can take longer.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_24_623",
    "number": 24,
    "question": "You have a LARGE sized warehouse ‘MY_WAREHOUSE‘. You want to change the size to SMALL. Which SQL statement will help you to change the size of warehouse?",
    "options": [
      {
        "id": 1,
        "value": "UPDATE MY_WAREHOUSE SET SIZE = “SMALL“;"
      },
      {
        "id": 2,
        "value": "ALTER WAREHOUSE MY_WAREHOUSE SET WAREHOUSE_SIZE = “SMALL“;"
      },
      {
        "id": 3,
        "value": "ALTER WAREHOUSE MY_WAREHOUSE SET SIZE = “SMALL“;"
      },
      {
        "id": 4,
        "value": "ALTER MY_WAREHOUSE SET SIZE = “SMALL“;"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "ALTER WAREHOUSE command can help change the warehouse size",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_25_624",
    "number": 25,
    "question": "When a database or schema is cloned. What object is not cloned?",
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
    "explanation": "The following rules apply to cloning stages or objects that contain stages (i.e. databases and schemas): – Individual external named stages can be cloned; internal named stages cannot be cloned. – When cloning a database or schema: –External named stages that were present in the source when the cloning operation started are cloned. –Tables are cloned, which means their internal stages are also cloned. –Internal named stages are not cloned. Regardless of how a stage was cloned, the clone does not include any of the files from the source. i.e. all cloned stages are empty.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_26_625",
    "number": 26,
    "question": "Which key concepts should be considered when loading data into Snowflake?",
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
        "value": "Stage Object"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "All of these are key components for data loading. Stage is from where you are getting the data like AWS S3 external Stage. File Format tells Snowflake what type of data it is. Is it CSV, JSON, PARQUET, AVRO, ORC, XML etc. Transformation and error validation help getting the right data in right order and right form.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_27_626",
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
    "explanation": "Also, Warehouse Cache. Warehouse cache gets purged on suspension.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_28_627",
    "number": 28,
    "question": "Which role is inherited to every other role in the account?",
    "options": [
      {
        "id": 1,
        "value": "PUBLIC ROLE"
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
    "explanation": "PUBLIC role is Pseudo-role, that is automatically granted to every user and every role in your account. The PUBLIC role can own securable objects, just like any other role; however, the objects owned by the role are, by definition, available to every other user and role in your account. This role is typically used in cases where explicit access control is not needed and all users are viewed as equal with regard to their access rights.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_29_628",
    "number": 29,
    "question": "Which SQL statements will need a running Warehouse and consume credit? Consider table created as – CREATE OR REPLACE TABLE T1 ( ID number(2), Name varchar(20), Salary number (11,2) );",
    "options": [
      {
        "id": 1,
        "value": "SELECT MIN(ID) FROM T1;"
      },
      {
        "id": 2,
        "value": "SELECT MAX(ID) FROM T1;"
      },
      {
        "id": 3,
        "value": "SELECT AVG(ID) FROM T1;"
      },
      {
        "id": 4,
        "value": "SELECT COUNT(*) FROM T1;"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "Cloud services layer does not store average value of column data, and so, it gets computed and requires a running warehouse.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_30_629",
    "number": 30,
    "question": "How is the most effective way to test if clustering a table helped performance?",
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
    "explanation": "Also, Snowflake strongly recommends that you test a representative set of queries on the table to establish some performance baselines.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_31_630",
    "number": 31,
    "question": "How many virtual warehouses can be created in a Snowflake Account?",
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
    "id": "Test 11_32_631",
    "number": 32,
    "question": "Which SQL statement will not consume Warehouse credit?",
    "options": [
      {
        "id": 1,
        "value": "SHOW WAREHOUSE LIKE ‘%DEMO‘;"
      },
      {
        "id": 2,
        "value": "DROP WAREHOUSE MY_WAREHOUSE;"
      },
      {
        "id": 3,
        "value": "SHOW WAREHOUSES;"
      },
      {
        "id": 4,
        "value": "ALTER WAREHOUSE MY_WAREHOUSE SET WAREHOUSE_SIZE = “SMALL“;"
      }
    ],
    "answers": [
      1,
      2,
      3,
      4
    ],
    "explanation": "None of these SQL statements needs a running warehouse as the result comes from metadata of cloud services layer.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_33_632",
    "number": 33,
    "question": "Which SQL statements can work on a cloned Table?",
    "options": [
      {
        "id": 1,
        "value": "SHOW command"
      },
      {
        "id": 2,
        "value": "All of these"
      },
      {
        "id": 3,
        "value": "DROP table command"
      },
      {
        "id": 4,
        "value": "SELECT command"
      }
    ],
    "answers": [
      2
    ],
    "explanation": "All of these commands work with Cloned table as normal table.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_34_633",
    "number": 34,
    "question": "John ran a query which took around 30 mins. He referred to Query profiler, and found the ‘Bytes spilled to local storage‘ has big number. What could be the issue?",
    "options": [
      {
        "id": 1,
        "value": "John is using very large warehouse"
      },
      {
        "id": 2,
        "value": "John should contact Snowflake Personnel"
      },
      {
        "id": 3,
        "value": "John is using comparatively smaller warehouse"
      },
      {
        "id": 4,
        "value": "Warehouse size has no impact on Bytes spilling"
      }
    ],
    "answers": [
      3
    ],
    "explanation": "If a node has insufficient memory to complete its portion of a query, it will “spill“ to local SSD storage. This can negatively impact performance, but is sometimes acceptable. If a node has insufficient local SSD storage to complete its portion of a query, it will “spill“ to remote cloud storage. This is almost always very bad for performance. The solution in either case is… to simplify the SQL query or increase the warehouse size (to increase scarce resources).",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_35_634",
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
    "id": "Test 11_36_635",
    "number": 36,
    "question": "Which type of view has an extra layer of protection to hide the SQL code from unauthorized viewing?",
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
    "explanation": "Some of the internal optimizations for views require access to the underlying data in the base tables for the view. This access might allow data that is hidden from users of the view to be exposed through user code, such as user-defined functions, or other programmatic methods. Secure views do not utilize these optimizations, ensuring that users have no access to the underlying data.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_37_636",
    "number": 37,
    "question": "What data structure types can be ingested into a VARIANT column in a Snowflake table? (Check all that apply)",
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
    "explanation": "Snowflake supports all these types of Semi-Structured data. JSON (JavaScript Object Notation) is a lightweight, plain-text, data-interchange format based on a subset of the JavaScript Programming Language. Avro is an open-source data serialization and RPC framework originally developed for use with Apache Hadoop. It utilizes schemas defined in JSON to produce serialized data in a compact binary format. ORC is used to store Hive data, the ORC (Optimized Row Columnar) file format was designed for efficient compression and improved performance for reading, writing, and processing data over earlier Hive file formats. Parquet is a compressed, efficient columnar data representation designed for projects in the Hadoop ecosystem. The file format supports complex nested data structures and uses Dremel record shredding and assembly algorithms. XML (Extensible Markup Language) is a markup language that defines a set of rules for encoding documents. It was originally based on SGML, another markup language developed for standardizing the structure and elements that comprise a document.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_38_637",
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
    "explanation": "A single clustering key can contain one or more columns or expressions. For most tables, Snowflake recommends a maximum of 3 or 4 columns (or expressions) per key. Adding more than 3-4 columns tends to increase costs more than benefits.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_39_638",
    "number": 39,
    "question": "Snowflake Administrators should utilize resource monitors to help control costs and avoid unexpected credit usage. Which of the following actions can Snowflake‘s resource monitor triggers initiate automatically? (Check all that apply)",
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
        "value": "Trigger warehouse suspension for high usage"
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
    "id": "Test 11_40_639",
    "number": 40,
    "question": "Which are the correct statements about Snowflake data Storage?",
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
    "explanation": "Snowflake stores the data in hybrid columnar format in micro-partitions. Snowflake has some level of natural data clustering and optimization capabilities. All the data in rest or in motion are always encrypted.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_41_640",
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
    "explanation": "Availability zone management is managed by Cloud Provider (like, AWS, AZURE, GCP) not by Snowflake Cloud Services layer.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_42_641",
    "number": 42,
    "question": "Auto-suspend and auto-resume apply only to the entire warehouse and not to the individual clusters in the warehouse.",
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
    "explanation": "TRUE for both type of STANDARD and MULTI-CLUSTER Warehouses. For a multi-cluster warehouse : – Auto-suspend only occurs when the minimum number of clusters is running and there is no activity for the specified period of time. The minimum is typically 1 (cluster), but could be more than 1. – Auto-resume only applies when the entire warehouse is suspended (i.e. no clusters are running).",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_43_642",
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
    "explanation": "For Snowflake Standard Edition, the retention period can be set to 0 (or unset back to the default of 1 day) at the account and object level (i.e. databases, schemas, and tables).",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_44_643",
    "number": 44,
    "question": "Stages which do not support File Formats are :",
    "options": [
      {
        "id": 1,
        "value": "Internal named Stage"
      },
      {
        "id": 2,
        "value": "External Named Stage"
      },
      {
        "id": 3,
        "value": "Internal User Stage"
      },
      {
        "id": 4,
        "value": "Internal Table Stage"
      }
    ],
    "answers": [
      3,
      4
    ],
    "explanation": "Table Stage and User Stage are created automatically whenever a table is created or a new user is added into the system respectively. They dont support setting up the file format.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_45_644",
    "number": 45,
    "question": "Normally a warehouse begins to consume credits once all the servers are provisioned for the warehouse.",
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
    "explanation": "A warehouse begins to consume credits once all the servers are provisioned for the warehouse. – In a rare instance when some of the servers fail to provision, the warehouse only consumes credits for the provisioned servers. – Once the remaining servers are successfully provisioned, the warehouse starts consuming credits for all requested servers.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_46_645",
    "number": 46,
    "question": "Which actions are not supported with shared data?",
    "options": [
      {
        "id": 1,
        "value": "Can be re-shared by data consumer"
      },
      {
        "id": 2,
        "value": "Time Travel for a shared database or any schemas/tables in the database"
      },
      {
        "id": 3,
        "value": "Creating a clone of a shared database or any schemas/tables in the database"
      },
      {
        "id": 4,
        "value": "Editing the comments for a shared database"
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
    "id": "Test 11_47_646",
    "number": 47,
    "question": "How much is the Time-Travel retention period of Permanent Table (in Standard Edition)?",
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
    "explanation": "Permanent Table has maximum of 1 day for Standard Edition and maximum of 90 days Time-Travel retention period for all other Snowflake editions.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_48_647",
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
    "id": "Test 11_49_648",
    "number": 49,
    "question": "Monica is an admin and wants to see the usage of Fail-Safe. How can she get details on Fail-Safe usage?",
    "options": [
      {
        "id": 1,
        "value": "Admins can view Fail-safe use in the Snowflake Web UI under Account > Billing & Usage"
      },
      {
        "id": 2,
        "value": "None of these"
      },
      {
        "id": 3,
        "value": "Monica should contact Snowflake support"
      },
      {
        "id": 4,
        "value": "Fail Safe usage details are never available to customer"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "Fail-safe usage is available in Account‘s Billing & Usage section.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_50_649",
    "number": 50,
    "question": "As an ACCOUNTADMIN, how can you find the credit usage of a warehouse?",
    "options": [
      {
        "id": 1,
        "value": "Run SQL query on ACCOUNT_USAGE table under Snowflake Database"
      },
      {
        "id": 2,
        "value": "Run SQL query on WAREHOUSE_METERING_HISTORY view under ACCOUNT_USAGE Schema"
      },
      {
        "id": 3,
        "value": "Using Web interface > Account > Usage"
      },
      {
        "id": 4,
        "value": "Run SQL query on METERING_HISTORY view under ACCOUNT_USAGE Schema"
      }
    ],
    "answers": [
      2,
      3,
      4
    ],
    "explanation": "Using Web interface > Account > Usage section. AND using SQL – ACCOUNT_USAGE: – Query the METERING_HISTORY to view hourly usage for an account. – Query the METERING_DAILY_HISTORY to view daily usage for an account. – Query the WAREHOUSE_METERING_HISTORY to view usage for a warehouse. – Query the QUERY_HISTORY to view usage for a job. INFORMATION_SCHEMA: – Query the QUERY_HISTORY table function.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_51_650",
    "number": 51,
    "question": "Choose the right hierarchy of Snowflake objects from the given options.",
    "options": [
      {
        "id": 1,
        "value": "ACCOUNT > DATABASE > SCHEMA > TABLE"
      },
      {
        "id": 2,
        "value": "ACCOUNT > SCHEMA > DATABASE > TABLE"
      },
      {
        "id": 3,
        "value": "ACCOUNT > DATABASE > STAGE > SCHEMA"
      },
      {
        "id": 4,
        "value": "ACCOUNT > STAGE > DATABASE > SCHEMA > TABLE"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "The top-most container is the customer ACCOUNT, within which resides DATABASE. Each DATABASE can have 1 or more SCHEMA and each SCHEMA can have one or more TABLES.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_52_651",
    "number": 52,
    "question": "Zero Copy Cloning allows users to have multiple copies of your data without the additional cost of storage usually associated with replicating data. Which other statements about the Cloning features in Snowflake are True?",
    "options": [
      {
        "id": 1,
        "value": "Cloning is an efficient and cost effective approach for code migration for Agile Release Management"
      },
      {
        "id": 2,
        "value": "Clone is a point in time version of the table data as of the time the clone was made"
      },
      {
        "id": 3,
        "value": "The clone is a pointer to the original table data"
      },
      {
        "id": 4,
        "value": "Any new record in the parent table gets available in the cloned table"
      }
    ],
    "answers": [
      1,
      2,
      3
    ],
    "explanation": "New record doesn‘t get available in cloned table because cloning is “point in time version“ means only the data which were available at the time of cloning get available in cloned table.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_53_652",
    "number": 53,
    "question": "Which objects are securable objects in Snowflake?",
    "options": [
      {
        "id": 1,
        "value": "Table"
      },
      {
        "id": 2,
        "value": "Database"
      },
      {
        "id": 3,
        "value": "File Format"
      },
      {
        "id": 4,
        "value": "Warehouse"
      }
    ],
    "answers": [
      1,
      2,
      3,
      4
    ],
    "explanation": "All of these are securable objects in Snowflake. Securable Object is an entity to which access can be granted. Unless allowed by a grant, access will be denied.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_54_653",
    "number": 54,
    "question": "What level of Privilege do you need to view Resource monitor?",
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
    "explanation": "MONITOR Privilege can enable you to view a resource monitor.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_55_654",
    "number": 55,
    "question": "Snowflake supports many methods of authentication. Which are the supported authentication methods in ALL Snowflake Editions?",
    "options": [
      {
        "id": 1,
        "value": "Only MFA is supported by all the Snowflake editions"
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
        "value": "Only MFA and SSO are supported by all the Snowflake editions"
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
    "explanation": "MFA, Oauth, SSO – all these methods are supported by all the Snowflake editions.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_56_655",
    "number": 56,
    "question": "When a warehouse is resized, which queries make use of the new size?",
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
    "explanation": "The current running queries keep running on the old size server. Only subsequent queries run on new Sized Virtual Warehouse. If queries processed by a warehouse are running slowly, you can always resize the warehouse to provision more servers. The additional servers do not impact any queries that are already running, but they are available for use by any queries that are queued or newly submitted.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_57_656",
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
    "explanation": "All these actions can be taken. You can specify one or more of the following copy options : CONTINUE SKIP_FILE SKIP_FILE_(e.g. SKIP_FILE_10) SKIP_FILE_% (e.g. SKIP_FILE_10%) ABORT_STATEMENT",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_58_657",
    "number": 58,
    "question": "Please choose the correct statements about Micro-Partitions (Select 2)",
    "options": [
      {
        "id": 1,
        "value": "Snowflake micro-partitions are derived automatically"
      },
      {
        "id": 2,
        "value": "Micro-partitions are small in size (50 to 500 MB, after compression)"
      },
      {
        "id": 3,
        "value": "Snowflake automatically determines the most efficient compression algorithm for the columns in each micro-partition."
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
    "explanation": "Snowflake takes care of all the compression algorithm. Micro-partitions can overlap in their range of values, which, combined with their uniformly small size, helps prevent skew. The micro-partitions are small in size (50 to 500 MB, BEFORE compression).",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_59_658",
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
        "value": "Warehouse Cache"
      }
    ],
    "answers": [
      1
    ],
    "explanation": "Result Cache gets suspended every 24 hours unless queried again within 24 hours. It can go until 31 days. If you also see option for Warehouse and it is mentioned that AUTO_SUSPEND is set then Warehouse Cache will be you best answer.",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  },
  {
    "id": "Test 11_60_659",
    "number": 60,
    "question": "If a DBA_ROLE creates a Database. Later the DBA_ROLE was dropped. Who will own the Database now which was created by DBA_ROLE?",
    "options": [
      {
        "id": 1,
        "value": "No one can access"
      },
      {
        "id": 2,
        "value": "Database will be dropped"
      },
      {
        "id": 3,
        "value": "Role who dropped the DBA_ROLE"
      },
      {
        "id": 4,
        "value": "DBA_ROLE cant be dropped as it is the owner of the Database."
      }
    ],
    "answers": [
      3
    ],
    "explanation": "The role who dropped the DBA_ROLE will own that database. (IMPORTANT QUESTION)",
    "reference": "",
    "source": "Test 11",
    "testNumber": 11
  }
];
