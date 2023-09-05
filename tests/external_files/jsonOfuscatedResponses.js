const clus_conf = {
  "data": {
    "bind_addr": "0.0.0.0",
    "name": "khulnasoft",
    "interval": "2m",
    "node_name": "manager1",
    "disabled": "no",
    "node_type": "master",
    "port": 1516,
    "key": "secret_password",
    "hidden": "no",
    "nodes": [
      "10.0.0.83"
    ]
  },
  "error": 0
}
const wmodules = {
  "error": 0,
  "data": {
    "wmodules": [
      {
        "open-scap": {
          "interval": 86400,
          "disabled": "yes",
          "scan-on-start": "yes",
          "timeout": 1800,
          "content": [
            {
              "profile": [
                "xccdf_org.ssgproject.content_profile_pci-dss",
                "xccdf_org.ssgproject.content_profile_common"
              ],
              "path": "ssg-centos-7-ds.xml",
              "timeout": 0,
              "type": 1
            }
          ]
        }
      },
      {
        "cis-cat": {
          "ciscat_path": "wodles/ciscat",
          "java_path": "wodles/java",
          "disabled": "yes",
          "scan-on-start": "yes",
          "timeout": 1800,
          "interval": 86400
        }
      },
      {
        "osquery": {
          "add_labels": "yes",
          "disabled": "yes",
          "log_path": "/var/log/osquery/osqueryd.results.log",
          "run_daemon": "yes",
          "config_path": "/etc/osquery/osquery.conf"
        }
      },
      {
        "syscollector": {
          "processes": "yes",
          "hardware": "yes",
          "scan-on-start": "yes",
          "network": "yes",
          "packages": "yes",
          "interval": 3600,
          "ports_all": "no",
          "disabled": "no",
          "os": "yes",
          "ports": "yes"
        }
      },
      {
        "vulnerability-detector": {
          "interval": 60,
          "disabled": "yes",
          "ignore_time": 21600,
          "run_on_start": "yes"
        }
      },
      {
        "aws-s3": {
          "buckets": [
            {
              "secret_key": "secret_password",
              "remove_from_bucket": "no",
              "access_key": "secret_password",
              "type": "cloudtrail",
              "name": "khulnasoft-cloudtrail"
            },
            {
              "secret_key": "secret_password",
              "remove_from_bucket": "no",
              "access_key": "secret_password",
              "type": "custom",
              "name": "khulnasoft-cloudtrail222"
            }
          ],
          "interval": 600,
          "disabled": "no",
          "skip_on_error": "no",
          "run_on_start": "no"
        }
      },
      {
        "database": {
          "sync_rootcheck": "yes",
          "full_sync": "no",
          "max_queued_events": 0,
          "interval": 60,
          "sync_syscheck": "no",
          "real_time": "yes",
          "sync_agents": "yes"
        }
      },
      {
        "khulnasoft_download": {
          "enabled": "yes"
        }
      }
    ]
  }
}
const integrations = {
  "data": {
    "integration": [
      {
        "name": "virustotal",
        "group": "syscheck,",
        "level": 0,
        "api_key": "secret_password"
      },
      {
        "name": "pagerduty",
        "level": 0,
        "api_key": "secret_password"
      }
    ]
  },
  "error": 0
}
module.exports = { clus_conf: clus_conf, wmodules: wmodules, integrations: integrations } 