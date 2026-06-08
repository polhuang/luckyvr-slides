import {
  Shield,
  Users,
  Server,
  HeadphonesIcon,
  type LucideIcon,
} from "lucide-react"

interface Feature {
  icon: LucideIcon
  title: string
  pro: {
    bullets: string[]
    costNote?: string
  }
  enterprise: {
    bullets: string[]
    costNote?: string
  }
}

const features: Feature[] = [
  {
    icon: Shield,
    title: "Security, Identity & Compliance",
    pro: {
      bullets: [
        "SAML SSO as add-on (+$300/mo)",
        "SCIM Directory Sync as add-on (+$150/mo, requires SSO)",
        "HIPAA BAA as add-on (+$350/mo)",
        "WAF: up to 40 custom rules, 100 IP blocks; basic DDoS",
        "No audit logs, SIEM, or project-level RBAC",
      ],
      costNote: "+$800/mo for SSO + SCIM + HIPAA",
    },
    enterprise: {
      bullets: [
        "SAML SSO + SCIM Directory Sync included",
        "HIPAA BAA, SOC 2, ISO 27001, PCI DSS v4.0",
        "Managed WAF: up to 1,000 rules & IP blocks, dedicated DDoS",
        "Audit logs (90-day) with SIEM streaming to Datadog/Splunk/S3",
        "Granular RBAC: Security role, access groups & extended permissions",
      ],
      costNote: "Included",
    },
  },
  {
    icon: Server,
    title: "Infrastructure Reliability",
    pro: {
      bullets: [
        "No uptime SLA",
        "Single-region compute, no automatic failover",
        "Shared build infrastructure",
        "Up to 25 system bypass rules",
      ],
    },
    enterprise: {
      bullets: [
        "Contractual 99.99% uptime SLA (under 53 min downtime/yr)",
        "Multi-region compute with automatic failover",
        "Dedicated, isolated build infrastructure",
        "Secure Compute: VPC peering & VPN (PrivateLink + Static IPs rolling out)",
        "Custom resource limits, up to 100 bypass rules",
      ],
    },
  },
  {
    icon: Users,
    title: "Team Management at Scale",
    pro: {
      bullets: [
        "Unlimited free viewer seats; $20/mo per deploying member",
        "Team & project roles only",
        "Advanced Deployment Protection add-on (+$150/mo)",
        "No Code Owners or Conformance",
      ],
    },
    enterprise: {
      bullets: [
        "Auto-provision & deprovision users from your IdP",
        "Code Owners for directory & file ownership",
        "Conformance for org-wide code standards",
        "Guest & team access controls included",
      ],
    },
  },
  {
    icon: HeadphonesIcon,
    title: "Support & Incident Response",
    pro: {
      bullets: [
        "Community and documentation support",
        "No guaranteed response time",
        "No dedicated point of contact",
        "No contractual SLA",
      ],
    },
    enterprise: {
      bullets: [
        "Support with contractual SLA",
        "Dedicated Customer Success Manager & account team",
        "Priority incident routing & dedicated DDoS response",
        "Custom contracts & guided onboarding",
      ],
    },
  },
]

interface FeatureSlideProps {
  featureIndex: number
}

export function FeatureSlide({ featureIndex }: FeatureSlideProps) {
  const feature = features[featureIndex]

  if (!feature) return null

  const Icon = feature.icon

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 shrink-0">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          {feature.title}
        </h1>
      </div>

      {/* Two-column comparison */}
      <div className="grid md:grid-cols-2 gap-5">
        {/* Pro Card */}
        <div className="bg-card border border-border rounded-xl p-5 flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-secondary text-foreground text-sm font-medium">
              Pro
            </span>
            {feature.pro.costNote && (
              <span className="text-xs text-muted-foreground bg-secondary/50 px-2 py-0.5 rounded-full">
                {feature.pro.costNote}
              </span>
            )}
          </div>

          <ul className="space-y-2 flex-1">
            {feature.pro.bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                <span className="text-muted-foreground mt-1 shrink-0">-</span>
                {bullet}
              </li>
            ))}
          </ul>
        </div>

        {/* Enterprise Card */}
        <div className="bg-card border border-primary/30 rounded-xl p-5 flex flex-col relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="relative flex flex-col flex-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium border border-primary/30">
                Enterprise
              </span>
              {feature.enterprise.costNote && (
                <span className="text-xs text-primary/70 bg-primary/10 px-2 py-0.5 rounded-full">
                  {feature.enterprise.costNote}
                </span>
              )}
            </div>

            <ul className="space-y-2 flex-1">
              {feature.enterprise.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                  <span className="text-primary mt-1 shrink-0">-</span>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export const totalFeatures = features.length
