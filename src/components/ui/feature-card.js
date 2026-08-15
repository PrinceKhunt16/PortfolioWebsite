/**
 * FeatureCard — inline-notched, hover-lift card used for the skills / stack grid.
 * Cut-corner via .clip-notch, accent-tinted fill, gentle lift + soft shadow on hover.
 */
export default function FeatureCard({ icon, title, children, className = '' }) {
    return (
        <div
            className={`clip-notch group flex h-full flex-col bg-accent/90 p-6 shadow-[0_1px_3px_var(--shadow-tint-soft)] ring-1 ring-[var(--ring-subtle)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_var(--shadow-tint)] hover:ring-primary/30 ${className}`}
        >
            {icon && (
                <div className="mb-4 flex size-11 items-center justify-center bg-background/70 text-2xl text-accent-foreground ring-1 ring-[var(--ring-subtle)]">
                    {icon}
                </div>
            )}
            {title && (
                <h3 className="font-geom text-[1.05rem] font-semibold tracking-tight text-foreground/90">
                    {title}
                </h3>
            )}
            {children && (
                <div className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {children}
                </div>
            )}
        </div>
    );
}
