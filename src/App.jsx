
import React, { useEffect, useState } from "react";
import {
    Globe2,
    PawPrint,
    Utensils,
    Trash2,
    CalendarDays,
    Mail,
    Phone,
    MapPin,
    Instagram,
    Facebook,
    Twitter,
    Menu,
    X,
} from "lucide-react";

export default function GoodEarthHTX() {
    const [open, setOpen] = useState(false);

    // Init AOS (Animate On Scroll) and lock body scroll when menu is open
    useEffect(() => {
        (async () => {
            const AOS = (await import("aos")).default;
            AOS.init({ once: true, duration: 800, easing: "ease-out-cubic" });
        })();
    }, []);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    const nav = [
        { href: "#mission", label: "Mission" },
        { href: "#programs", label: "Programs" },
        { href: "#events", label: "Events" },
        { href: "#volunteer", label: "Volunteer" },
        { href: "#donate", label: "Donate" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <div className="min-h-screen bg-white text-slate-900">
            {/* NAVBAR */}
            <header
                className={`sticky top-0 z-40 border-b ${open ? "bg-white" : "bg-white/80 backdrop-blur"}`}
            >
                <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
                    <a href="#home" className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-lg bg-blue-700 grid place-content-center">
                            <Globe2 className="h-5 w-5 text-white" />
                        </div>
                        <span className="font-semibold tracking-tight">GOODEARTH HTX</span>
                    </a>
                    <nav className="hidden md:flex items-center gap-6 text-sm">
                        {nav.map((l) => (
                            <a key={l.href} href={l.href} className="hover:text-blue-700 transition">
                                {l.label}
                            </a>
                        ))}

                    </nav>
                    <button
                        className="md:hidden p-2 rounded-lg border bg-white/95 ring-1 ring-black/5"
                        onClick={() => setOpen(true)}
                        aria-label="Open menu"
                    >
                        <Menu className="h-5 w-5" />
                    </button>
                </div>
                {/* Mobile sheet */}
                {open && (
                    <div className="md:hidden fixed inset-0 z-[60]">
                        <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
                        <aside className="ml-auto h-full w-80 bg-white text-slate-900 shadow-2xl border-l p-6 relative">
                            <button
                                className="absolute right-4 top-4 p-2 rounded-lg border bg-white"
                                aria-label="Close menu"
                                onClick={() => setOpen(false)}
                            >
                                <X className="h-5 w-5" />
                            </button>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="h-9 w-9 rounded-lg bg-blue-700 grid place-content-center">
                                    <Globe2 className="h-5 w-5 text-white" />
                                </div>
                                <span className="font-semibold">GOODEARTH HTX</span>
                            </div>
                            <nav className="mt-2 grid gap-1">
                                {nav.map((l) => (
                                    <a
                                        key={l.href}
                                        href={l.href}
                                        onClick={() => setOpen(false)}
                                        className="rounded-lg px-3 py-2 hover:bg-blue-50 active:bg-blue-100"
                                    >
                                        {l.label}
                                    </a>
                                ))}

                            </nav>
                        </aside>
                    </div>
                )}
            </header>

            {/* HERO with parallax image */}
            <section
                id="home"
                className="border-b bg-fixed"
                style={{
                    backgroundImage:
                        "url(https://images.unsplash.com/photo-1504653601266-3f8c8f3f9a5f?q=80&w=1600&auto=format&fit=crop)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="bg-blue-900/55">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-24 sm:py-32" data-aos="fade-up">
                        <div className="max-w-3xl text-white">
                            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                                A cleaner, kinder Houston—together.
                            </h1>
                            <p className="mt-5 text-lg text-blue-50">
                                We organize neighborhood cleanups, support dog rescue & fostering, and run community food drives across Greater Houston.
                            </p>
                            <div className="mt-8 flex flex-wrap gap-3">
                                <a
                                    href="#volunteer"
                                    className="inline-flex items-center rounded-lg px-5 py-3 bg-white text-blue-800 font-semibold shadow hover:-translate-y-0.5 transition"
                                >
                                    Volunteer
                                </a>

                            </div>
                            <div className="grid grid-cols-3 gap-3 mt-10 max-w-md">
                                {[
                                    { label: "Volunteers", value: "200+" },
                                    { label: "Trash Removed", value: "35k lbs" },
                                    { label: "Meals Served", value: "10k+" },
                                ].map((s) => (
                                    <div
                                        key={s.label}
                                        className="text-center rounded-xl border border-white/20 bg-white/10 backdrop-blur p-3"
                                    >
                                        <div className="text-2xl font-extrabold">{s.value}</div>
                                        <div className="text-xs tracking-wide text-blue-100 mt-1">{s.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* MISSION */}
            <section id="mission" className="border-b">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 grid gap-12 lg:grid-cols-3">
                    <div className="lg:col-span-2" data-aos="fade-up">
                        <h2 className="text-3xl font-bold tracking-tight">Our Mission</h2>
                        <p className="mt-4 text-slate-600 max-w-prose">
                            We mobilize neighbors to care for Houston—block by block—through environmental stewardship, animal rescue, and food security.
                        </p>
                        <div className="mt-8 inline-flex gap-3">
                            <a
                                href="#programs"
                                className="rounded-lg border px-4 py-2 hover:border-blue-300 transition"
                            >
                                Explore programs
                            </a>
                            <a
                                href="#volunteer"
                                className="rounded-lg bg-blue-700 text-white px-4 py-2 hover:bg-blue-800 transition"
                            >
                                Get involved
                            </a>
                        </div>
                    </div>
                    <dl className="grid grid-cols-3 gap-6 self-start" data-aos="fade-up" data-aos-delay="100">
                        {[
                            { label: "Volunteers", value: "200+" },
                            { label: "Trash Removed", value: "35k lbs" },
                            { label: "Meals Served", value: "10k+" },
                        ].map((s) => (
                            <div key={s.label} className="text-center">
                                <dd className="text-2xl font-extrabold">{s.value}</dd>
                                <dt className="text-xs tracking-wide text-slate-500 mt-1">{s.label}</dt>
                            </div>
                        ))}
                    </dl>
                </div>
            </section>

            {/* PROGRAMS with image cards */}
            <section id="programs" className="border-b">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
                    <h2 className="text-3xl font-bold tracking-tight" data-aos="fade-up">Programs</h2>
                    <div className="mt-8 grid md:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Cleanups",
                                emoji: "🧹",
                                img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&fm=jpg&fit=crop",
                                bullets: ["Monthly sweeps", "Recycling tips", "Beautification"],
                            },
                            {
                                title: "Dog Rescue",
                                emoji: "🐶",
                                img: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1200&fm=jpg&fit=crop",
                                bullets: ["Foster support", "Transport network", "Adoptions"],
                            },
                            {
                                title: "Food Drive",
                                emoji: "🍎",
                                img: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?ixlib=rb-4.0.3&q=80&fm=jpg&w=1200&fit=crop", // Updated to a food drive related image
                                bullets: ["Pop-up pantries", "School support", "Holiday boxes"],
                            },
                        ].map((p, i) => (
                            <div
                                key={p.title}
                                className="rounded-xl overflow-hidden border hover:shadow-xl transition-transform duration-300 hover:-translate-y-1"
                                data-aos="fade-up"
                                data-aos-delay={i * 100}
                            >
                                <div
                                    className="aspect-[4/3] bg-slate-100"
                                    style={{
                                        backgroundImage: `url(${p.img})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                    }}
                                />
                                <div className="p-6">
                                    <div className="flex items-center gap-3">
                                        <div className="h-9 w-9 rounded-lg bg-blue-50 grid place-content-center text-xl">
                                            {p.emoji}
                                        </div>
                                        <h3 className="font-semibold">{p.title}</h3>
                                    </div>
                                    <ul className="mt-4 space-y-2 text-sm text-slate-600 list-disc list-inside">
                                        {p.bullets.map((b) => (
                                            <li key={b}>{b}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* EVENTS */}
            <section id="events" className="border-b">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
                    <div className="flex items-end justify-between" data-aos="fade-up">
                        <h2 className="text-3xl font-bold tracking-tight">Upcoming Events</h2>
                        <a
                            href="#volunteer"
                            className="hidden sm:inline-flex rounded-lg border px-3 py-2 hover:border-blue-300 transition"
                        >
                            All opportunities
                        </a>
                    </div>
                    <ul className="mt-8 divide-y" data-aos="fade-up" data-aos-delay="100">
                        {[
                            {
                                date: "Aug 24",
                                title: "Buffalo Bayou Cleanup",
                                desc: "Morning sweep & recycling drop-off—gear provided.",
                                tag: "Cleanup",
                            },
                            {
                                date: "Sep 7",
                                title: "Midtown Pup Adoption Day",
                                desc: "Meet rescues and fosters ready for homes.",
                                tag: "Dog Rescue",
                            },
                            {
                                date: "Sep 21",
                                title: "Third Ward Community Pantry",
                                desc: "Assemble and distribute produce & staples.",
                                tag: "Food Drive",
                            },
                        ].map((e) => (
                            <li key={e.title} className="py-5 flex items-start justify-between gap-6">
                                <div>
                                    <div className="text-sm text-blue-700 font-medium">
                                        {e.tag} • {e.date}
                                    </div>
                                    <h3 className="mt-1 font-semibold">{e.title}</h3>
                                    <p className="mt-1 text-sm text-slate-600">{e.desc}</p>
                                </div>
                                <a
                                    href="#volunteer"
                                    className="shrink-0 rounded-lg border px-3 py-2 hover:border-blue-300 transition"
                                >
                                    Sign up
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* VOLUNTEER */}
            <section id="volunteer" className="border-b">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 grid gap-10 lg:grid-cols-2">
                    <div data-aos="fade-up">
                        <h2 className="text-3xl font-bold tracking-tight">Volunteer</h2>
                        <p className="mt-4 text-slate-600 max-w-prose">
                            Give an hour or a weekend—every bit helps. Individuals, families, schools, and teams welcome.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-3 mt-6">
                            {["👕 Cleanup lead", "🐶 Foster & transport", "🍎 Pantry & logistics", "📣 Outreach & social"].map(
                                (t) => (
                                    <div key={t} className="rounded-lg border p-3 hover:border-blue-300 transition">
                                        {t}
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                    {/* Replace action URLs with your Formspree IDs */}
                    <form
                        action="https://formspree.io/f/YOUR_VOLUNTEER_ID"
                        method="POST"
                        className="rounded-xl border p-6 grid gap-4 bg-white"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <input name="name" className="rounded-lg border px-3 py-2" placeholder="Name" required />
                        <div className="grid sm:grid-cols-2 gap-4">
                            <input
                                name="email"
                                type="email"
                                className="rounded-lg border px-3 py-2"
                                placeholder="Email"
                                required
                            />
                            <input name="phone" className="rounded-lg border px-3 py-2" placeholder="Phone" />
                        </div>
                        <select name="interest" className="rounded-lg border px-3 py-2">
                            <option>Neighborhood Cleanups</option>
                            <option>Dog Rescue & Foster</option>
                            <option>Food Drive & Pantry</option>
                            <option>Where I'm needed most</option>
                        </select>
                        <textarea
                            name="message"
                            rows={4}
                            className="rounded-lg border px-3 py-2"
                            placeholder="Availability / message"
                        />
                        <button
                            type="submit"
                            className="rounded-lg bg-blue-700 text-white px-4 py-2 hover:bg-blue-800 transition"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </section>



            {/* CONTACT */}
            <section id="contact">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 grid gap-10 lg:grid-cols-3">
                    <div className="lg:col-span-2 rounded-xl border p-6" data-aos="fade-up">
                        <h2 className="text-3xl font-bold tracking-tight">Contact</h2>
                        <form
                            action="https://formspree.io/f/YOUR_CONTACT_ID"
                            method="POST"
                            className="mt-6 grid sm:grid-cols-2 gap-4"
                        >
                            <input name="name" className="rounded-lg border px-3 py-2" placeholder="Name" required />
                            <input
                                name="email"
                                type="email"
                                className="rounded-lg border px-3 py-2"
                                placeholder="Email"
                                required
                            />
                            <input
                                name="subject"
                                className="sm:col-span-2 rounded-lg border px-3 py-2"
                                placeholder="Subject"
                            />
                            <textarea
                                name="message"
                                rows={4}
                                className="sm:col-span-2 rounded-lg border px-3 py-2"
                                placeholder="Message"
                            />
                            <button
                                type="submit"
                                className="sm:col-span-2 rounded-lg bg-blue-700 text-white px-4 py-2 hover:bg-blue-800 transition"
                            >
                                Send
                            </button>
                        </form>
                    </div>
                    <div className="rounded-xl border p-6" data-aos="fade-up" data-aos-delay="100">
                        <h3 className="font-semibold">Info</h3>
                        <div className="mt-3 space-y-3 text-sm">
                            <p className="flex items-center gap-2">
                                <Mail className="h-4 w-4" /> hello@goodearthtx.org
                            </p>
                            <p className="flex items-center gap-2">
                                <Phone className="h-4 w-4" /> (713) 555-0199
                            </p>
                            <p className="flex items-center gap-2">
                                <MapPin className="h-4 w-4" /> Houston, Texas
                            </p>
                        </div>
                        <h3 className="mt-6 font-semibold">Follow</h3>
                        <div className="mt-3 flex flex-wrap gap-2">
                            <a className="inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm hover:border-blue-300 transition">
                                <Instagram className="h-4 w-4" /> Instagram
                            </a>
                            <a className="inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm hover:border-blue-300 transition">
                                <Facebook className="h-4 w-4" /> Facebook
                            </a>
                            <a className="inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm hover:border-blue-300 transition">
                                <Twitter className="h-4 w-4" /> X
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="border-t">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
                    <div className="flex items-center gap-2">
                        <div className="h-7 w-7 rounded-lg bg-blue-700 grid place-content-center">
                            <Globe2 className="h-4 w-4 text-white" />
                        </div>
                        <span className="font-medium text-slate-700">GOODEARTH HTX</span>
                    </div>
                    <p>© {new Date().getFullYear()} GOODEARTH HTX. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
