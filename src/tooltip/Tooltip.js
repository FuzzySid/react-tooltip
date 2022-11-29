import './Tooltip.css';

export default function Tooltip({
    children,
    tooltipText="Tooltip Text",
    position="right",
}){
    return(
        <div class="tooltip-trigger">
            {children}
            <div class={`tooltip tooltip-${position}`}>
                {tooltipText}
            </div>

        </div>
    )
}