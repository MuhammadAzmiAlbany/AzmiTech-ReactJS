import {
    toggleCsel,
    filterCsel,
} from '../../ts/main'

import Option from './Option'

interface OptionData {
    id: string,
    name: string,
}

interface SelectProps {
    label: string,
    placeholder: string,
    optionList: OptionData[]
}

export default function Select({ label, placeholder, optionList }: SelectProps) {
    return (
        <>
            <div className="fg">
                <div className="fl">
                    { label } <span className="req">*</span>
                </div>
                <div className="csel" id="csel">
                    <button
                        type="button"
                        className="csel-trig"
                        id="cselTrig"
                        onClick={toggleCsel}
                    >
                        <span id="cselDisplay" className="ph">
                            { placeholder }
                        </span>
                    </button>
                    <svg
                        className="csel-arr"
                        width={15}
                        height={15}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <polyline points="6 9 12 15 18 9" />
                    </svg>
                    <div className="csel-panel" id="cselPanel">
                        <div className="csel-search">
                            <input
                                type="text"
                                id="cselQ"
                                placeholder="Search…"
                                onInput={filterCsel}
                            />
                        </div>
                        <div className="csel-opts" id="cselOpts">
                            {
                                optionList.map((option) => (
                                    <Option value={ option.id } name={ option.name } />
                                )
                            )}
                        </div>
                        <div
                            className="csel-empty"
                            id="cselEmpty"
                            style={{ display: "none" }}
                        >
                            No results found
                        </div>
                    </div>
                </div>
                <div className="fhint">Start typing to filter the list</div>
            </div>
        </>
    );
}