interface HeadingProps {
   title: string
   description: string
   /** Heading level: pages use 1 for their primary title, sections use 2. */
   level?: 1 | 2
}

export const Heading: React.FC<HeadingProps> = ({
   title,
   description,
   level = 2,
}) => {
   const Tag = level === 1 ? 'h1' : 'h2'
   return (
      <div className="my-4">
         <Tag className="text-3xl font-bold tracking-tight">{title}</Tag>
         <p className="text-sm text-muted-foreground">{description}</p>
      </div>
   )
}
