export interface FilmeInterface {
  original_title: string;
  release_date: string;
  poster_path: string;
}

export interface FilmeProps {
  filme: FilmeInterface;
}

export function Filme({ filme }: FilmeProps) {
  return (
    <>
      <div>{filme.original_title}</div>
    </>
  )
}