export default function GradientHeading({ className, leadingText, spanText, trailingText }) {
    return (
        <h1 className={`text-3xl bg-gradient-to-r from-headingGradientPrimary to-headingGradientSecondary bg-clip-text text-transparent ${className ? className : ''}`}>{leadingText} <span className="bg-gradient-to-r from-primary to-white bg-clip-text text-transparent">{spanText}</span> {trailingText && <span className="bg-gradient-to-r from-headingGradientPrimary to-headingGradientSecondary bg-clip-text">{trailingText}</span>}</h1>
    )
}
