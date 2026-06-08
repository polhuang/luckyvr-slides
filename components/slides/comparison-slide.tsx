import { Check, X } from "lucide-react"

const comparisonData = [
  {
    category: "Security & Access",
    features: [
      { name: "Custom Firewall Rules", pro: "Up to 40", enterprise: "Up to 1,000" },
      { name: "IP Blocking", pro: "Up to 100", enterprise: "Up to 1,000" },
      { name: "OWASP Core Ruleset (Managed)", pro: false, enterprise: true },
      { name: "Dedicated DDoS Support", pro: false, enterprise: true },
      { name: "Audit Logs & SIEM Streaming", pro: false, enterprise: true },
      { name: "SAML Single Sign-On", pro: "Add-on ($300/mo)", enterprise: true },
      { name: "SCIM & Directory Sync", pro: "Add-on ($150/mo)", enterprise: true },
      { name: "HIPAA BAA", pro: "Add-on ($350/mo)", enterprise: true },
      { name: "SOC 2 / ISO 27001 / PCI DSS", pro: false, enterprise: true },
      { name: "Granular RBAC & Access Groups", pro: false, enterprise: true },
      { name: "Guest & Team Access Controls", pro: false, enterprise: true },
    ],
  },
  {
    category: "Infrastructure & Performance",
    features: [
      { name: "Turbo Build Machines", pro: true, enterprise: true },
      { name: "Dedicated, Isolated Infrastructure", pro: false, enterprise: true },
      { name: "Multi-Region Compute & Failover", pro: false, enterprise: true },
      { name: "Secure Compute (VPC Peering & VPN)", pro: false, enterprise: true },
      { name: "System Bypass Rules", pro: "Up to 25", enterprise: "Up to 100" },
    ],
  },
  {
    category: "Support & SLA",
    features: [
      { name: "Uptime SLA", pro: false, enterprise: "99.99%" },
      { name: "Support with Contractual SLA", pro: false, enterprise: true },
      { name: "Dedicated Customer Success Manager", pro: false, enterprise: true },
      { name: "Custom Limits & Contracts", pro: false, enterprise: true },
    ],
  },
]

function FeatureValue({ value }: { value: boolean | string }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="h-5 w-5 text-primary" />
    ) : (
      <X className="h-5 w-5 text-muted-foreground/50" />
    )
  }
  return <span className="text-sm text-foreground">{value}</span>
}

export function ComparisonSlide() {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
          Pro vs Enterprise
        </h1>
      </div>

      <div className="bg-card border border-border rounded-xl overflow-hidden">
        {/* Header */}
        <div className="grid grid-cols-3 gap-4 p-4 border-b border-border bg-secondary/30">
          <div className="font-medium text-muted-foreground">Feature</div>
          <div className="text-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-foreground text-sm font-medium">
              Pro
            </span>
          </div>
          <div className="text-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium border border-primary/30">
              Enterprise
            </span>
          </div>
        </div>

        {/* Categories */}
        <div className="divide-y divide-border">
          {comparisonData.map((category) => (
            <div key={category.category}>
              <div className="px-4 py-3 bg-secondary/10">
                <h3 className="font-semibold text-foreground">{category.category}</h3>
              </div>
              <div className="divide-y divide-border/50">
                {category.features.map((feature) => (
                  <div
                    key={feature.name}
                    className="grid grid-cols-3 gap-4 px-4 py-3 hover:bg-secondary/5 transition-colors"
                  >
                    <div className="text-sm text-muted-foreground">{feature.name}</div>
                    <div className="flex items-center justify-center">
                      <FeatureValue value={feature.pro} />
                    </div>
                    <div className="flex items-center justify-center">
                      <FeatureValue value={feature.enterprise} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
