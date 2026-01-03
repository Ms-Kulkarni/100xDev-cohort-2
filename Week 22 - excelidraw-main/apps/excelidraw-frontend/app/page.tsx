import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { Pencil, Share2, Users, Sparkles, Github, Download, ArrowRight, Zap, Lock, Code2, Globe } from "lucide-react";
import Link from "next/link";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 bg-primary/10 border border-primary/30 rounded-lg flex items-center justify-center transition-all group-hover:border-primary/60 group-hover:border-glow">
                <Pencil className="h-5 w-5 text-primary" />
              </div>
              <span className="font-bold text-xl">Excalidraw</span>
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link
                href="#features"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Features
              </Link>
              <Link
                href="#showcase"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Examples
              </Link>
              <Link
                href="https://github.com"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5"
              >
                <Github className="h-4 w-4" />
                GitHub
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section with Neon Effect */}
      <section className="relative container mx-auto px-4 lg:px-8 pt-20 pb-24 md:pt-32 md:pb-40 overflow-hidden">
        {/* Background Gradient Orb */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-sm mb-8 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="font-medium text-primary">Open source • Privacy-first • Free forever</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 text-balance leading-[1.05]">
            Virtual whiteboard for <span className="text-primary glow-green-strong">hand-drawn</span>
            <br />
            diagrams
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Sketch ideas that feel human. Create beautiful diagrams, wireframes, and system architectures with real-time
            collaboration and end-to-end encryption.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={"/signin"}>
              <Button variant="primary" size="lg"
                className="text-base px-8 h-12 bg-primary text-primary-foreground hover:bg-primary/90 font-medium rounded-2xl hover:shadow-[0_0_30px_rgba(0,255,136,0.6),0_0_60px_rgba(0,255,136,0.3)] transition-all duration-300">
                Sign in
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="lg"
                variant="outline"
                className="text-base px-8 h-12 border-border hover:bg-card hover:border-primary/30 bg-transparent font-medium rounded-2xl hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                Sign up
              </Button>
            </Link>
          </div>

          <p className="text-sm text-muted-foreground mt-6">No sign up • Works offline • Export anywhere</p>
        </div>
      </section>

      {/* Visual Hero - Screenshot */}
      <section className="container mx-auto px-4 lg:px-8 pb-32">
        <div className="relative rounded-2xl border border-primary/20 bg-card/50 p-2 backdrop-blur-sm border-glow overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
          <div className="relative aspect-video bg-card rounded-xl flex items-center justify-center overflow-hidden border border-border/50">
            <img
              src="/excalidraw-whiteboard-interface-with-hand-drawn-di.jpg"
              alt="Excalidraw interface"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="container mx-auto px-4 lg:px-8 pb-32">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary glow-green mb-2">2M+</div>
            <div className="text-sm text-muted-foreground">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary glow-green mb-2">50K+</div>
            <div className="text-sm text-muted-foreground">GitHub Stars</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary glow-green mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Open Source</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary glow-green mb-2">0ms</div>
            <div className="text-sm text-muted-foreground">Setup Time</div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="container mx-auto px-4 lg:px-8 pb-32">
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Built for creators, <span className="text-primary glow-green">developers</span>, and teams
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Powerful tools wrapped in a simple interface. Everything you need to sketch, nothing you don't.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-card border border-border/50 rounded-2xl p-8 hover:border-primary/30 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:border-glow transition-all">
              <Pencil className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Hand-drawn aesthetic</h3>
            <p className="text-muted-foreground leading-relaxed">
              Every element feels sketched by hand. Perfect for wireframes, flowcharts, and technical diagrams.
            </p>
          </div>

          <div className="bg-card border border-border/50 rounded-2xl p-8 hover:border-primary/30 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:border-glow transition-all">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Real-time collaboration</h3>
            <p className="text-muted-foreground leading-relaxed">
              Work together with live cursors and instant sync. End-to-end encrypted for complete privacy.
            </p>
          </div>

          <div className="bg-card border border-border/50 rounded-2xl p-8 hover:border-primary/30 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:border-glow transition-all">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Lightning performance</h3>
            <p className="text-muted-foreground leading-relaxed">
              Optimized canvas engine with smooth 60fps rendering. Instant autosave and zero latency.
            </p>
          </div>

          <div className="bg-card border border-border/50 rounded-2xl p-8 hover:border-primary/30 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:border-glow transition-all">
              <Lock className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Privacy-first</h3>
            <p className="text-muted-foreground leading-relaxed">
              Your data stays yours. End-to-end encryption, no tracking, and works completely offline.
            </p>
          </div>

          <div className="bg-card border border-border/50 rounded-2xl p-8 hover:border-primary/30 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:border-glow transition-all">
              <Download className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Export anywhere</h3>
            <p className="text-muted-foreground leading-relaxed">
              Export as PNG, SVG, or to clipboard. Embed in Notion, Confluence, or use our libraries.
            </p>
          </div>

          <div className="bg-card border border-border/50 rounded-2xl p-8 hover:border-primary/30 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:border-glow transition-all">
              <Code2 className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Open source</h3>
            <p className="text-muted-foreground leading-relaxed">
              Fully MIT licensed. Self-host, contribute, or integrate into your own products freely.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section id="showcase" className="container mx-auto px-4 lg:px-8 pb-32">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Built for every use case</h2>
          <p className="text-lg text-muted-foreground">From architecture diagrams to product wireframes</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card border border-border/50 rounded-3xl p-10 hover:border-primary/30 transition-all group">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:border-glow transition-all">
                <Globe className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">System Architecture</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Design cloud infrastructure, microservices, and database schemas with clarity.
                </p>
              </div>
            </div>
            <div className="aspect-video bg-muted/30 rounded-2xl flex items-center justify-center border border-border/30 overflow-hidden">
              <img
                src="/system-architecture-diagram-with-servers-databases.jpg"
                alt="System architecture diagram"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="bg-card border border-border/50 rounded-3xl p-10 hover:border-primary/30 transition-all group">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:border-glow transition-all">
                <Pencil className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Wireframes & UI</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Sketch interfaces and user flows without pixel perfection paralysis.
                </p>
              </div>
            </div>
            <div className="aspect-video bg-muted/30 rounded-2xl flex items-center justify-center border border-border/30 overflow-hidden">
              <img
                src="/mobile-app-wireframe-mockup-hand-drawn-sketch-styl.jpg"
                alt="Wireframe mockup"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Strong Glow */}
      <section className="container mx-auto px-4 lg:px-8 pb-32">
        <div className="relative bg-card border-2 border-primary/30 rounded-3xl p-12 md:p-20 text-center overflow-hidden border-glow-strong">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Start <span className="text-primary glow-green-strong">sketching</span> today
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Join millions creating beautiful diagrams. No account needed. Start drawing in seconds.
            </p>
            <Button
              variant="primary"
              size="lg"
              className="text-lg px-12 h-14 bg-primary text-primary-foreground hover:bg-primary/90 border-glow-strong font-medium rounded-2xl"
            >
              Launch Excalidraw
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary/10 border border-primary/30 rounded-lg flex items-center justify-center">
                  <Pencil className="h-4 w-4 text-primary" />
                </div>
                <span className="font-bold text-lg">Excalidraw</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Open source virtual whiteboard for sketching hand-drawn diagrams.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Examples
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Roadmap
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Changelog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Libraries
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Community
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors flex items-center gap-1">
                    <Github className="h-3.5 w-3.5" />
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Discord
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>MIT Licensed. Built with ❤️ by the open source community.</p>
            <div className="flex items-center gap-6">
              <Link href="#" className="hover:text-foreground transition-colors">
                Privacy
              </Link>
              <Link href="#" className="hover:text-foreground transition-colors">
                Terms
              </Link>
              <Link href="#" className="hover:text-foreground transition-colors">
                License
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
    
  );
}

export default App;