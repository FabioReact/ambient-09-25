import { generateLetters } from "./utils";

type Props = {
    selectedLetter: string;
    onSelect: (letter: string) => void;
}

const SelectLetter = ({ selectedLetter, onSelect }: Props) => {
    const arrayOfLetters = generateLetters();

    return (
        <ul className="flex uppercase justify-center gap-2">
            {arrayOfLetters.map(letter => {
                let classNames = "cursor-pointer";
                if (selectedLetter === letter) {
                    classNames += " text-red-600";
                }
                return <li className={classNames} key={letter} onClick={() => onSelect(letter)}>{letter}</li>
            })}
        </ul>
    )
}

export default SelectLetter