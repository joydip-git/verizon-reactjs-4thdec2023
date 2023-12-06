import { Person } from './App'

type PersonInfoPropType = {
    person: Person,
    updateHandler: (id: number, propName: string, propValue: string | number) => void
}
const PersonInfo = (props: Readonly<PersonInfoPropType>) => {
    const { person, updateHandler } = props
    return (
        <li onClick={
            () => {
                updateHandler(person.id, 'salary', 4000)
            }
        }>
            <span>
                {person.id}:{person.name}:{person.salary}
            </span>
        </li>
    )
}

export default PersonInfo
