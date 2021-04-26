# April 2021 Refactor
- Remove itemProps in ItemList, just use the properties of the objects in the items array
- Break NewTransactionForm out into subcomponents, one for each transaction type.  Won't reuse them, but much cleaner
- Make individual radio buttons their own component
- Remove extra <div> in RadioContainer

# Old
- Organize container and component folders similar to jw-footwear
- Make different transfer types separate components
- Replace redux devtools hook with the one in jw-footwear
