const items = [
  {
    id: 1,
    name: 'Products',
    href: '#',
  },
  {
    id: 2,
    name: 'Solutions',
    href: '#',
  },
  {
    id: 3,
    name: 'Resources',
    href: '#',
  },
  {
    id: 4,
    name: 'About',
    href: '#',
  },
]

export default function Menu() {
  return (
    <div className="flex items-center pl-24">
      {items.map((item) => {
        return (
          <div
            className="text-textPrimary mr-12 cursor-pointer hover:opacity-75"
            key={item.id}
          >
            {item.name}
          </div>
        )
      })}
    </div>
  )
}
