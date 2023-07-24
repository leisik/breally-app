import { items } from '../menuEntries'

export default function Menu() {
  return (
    <div className="hidden md:flex items-center pl-12 lg:pl-24 ">
      {items.map((item) => {
        return (
          <div
            className="text-textPrimary mr-6 lg:mr-12 cursor-pointer hover:opacity-75"
            key={item.id}
          >
            {item.name}
          </div>
        )
      })}
    </div>
  )
}
