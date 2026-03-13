interface UnitTabProps {
    tabName: string,
    metric: string,
    imperial: string
}

export function UnitTab({tabName, metric, imperial}: UnitTabProps) {
    return (
        <div>
            <p>{tabName}</p>
            <p>{metric}</p>
            <p>{imperial}</p>
        </div>
    )
}