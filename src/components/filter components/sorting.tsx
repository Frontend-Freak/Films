import "../../css/filters.css";

interface Option {
    value: string;
    label: string;
}

interface SelectSortingProps {
    label: string;
    options: Option[];
    value: string
    onChange: (value: string) => void
}

export default function Sorting({ label,  options, value, onChange }: SelectSortingProps) {
    return (
        <div className="filters-block">
            <label className="filters-label">{label}</label>
            <select
                className="filters-select"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            >
                {options.map((option) => (
                    <option
                        value={option.value}
                        key={option.value}
                    >
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}