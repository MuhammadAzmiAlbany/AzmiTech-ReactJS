import { pickCsel } from '../../ts/main'

interface OptionProps {
    value: string,
    name: string,
    addonClass?: string
}

export default function Option({ value, name, addonClass = '' }: OptionProps) {
    return (
        <>
            <div
                className={"csel-opt" + addonClass}
                onClick={(e) => pickCsel(e.currentTarget, name)}
            >
                { name }
            </div>
        </>
    );
}