function PokemonCard({ pokemon }) {
  return (
    <article className="py-4 max-w-[350px] bg-white dark:bg-[#1d1d1d] shadow-md dark:shadow-sm rounded">
      <div
        aria-hidden="true"
        style={{ backgroundImage: `url(${pokemon.frontImage})` }}
        className="flex-[.5] h-36 bg-contain bg-center bg-no-repeat"
      />

      <div className="px-5">
        <h2 className="pb-2 capitalize text-xl font-bold text-black dark:text-white">
          {pokemon.name}
        </h2>

        <ul className="flex flex-wrap gap-y-1">
          <ListItem
            name="Weight: "
            value={`${pokemon.weight}gm.`}
            className="flex gap-x-1 w-1/2"
          />
          <ListItem
            name="Height: "
            value={`${pokemon.height}cm.`}
            className="flex gap-x-1"
          />
          <ListItem name="Type: " className="w-1/2">
            <ul className="pl-3">
              {pokemon.types.map((type) => (
                <ListItem
                  key={type}
                  value={
                    <>
                      <span aria-hidden="true" className="mr-2">
                        ●
                      </span>
                      {type}
                    </>
                  }
                />
              ))}
            </ul>
          </ListItem>
          <ListItem name="Abilities: ">
            <ul className="pl-3">
              {pokemon.abilities.map((ability) => (
                <ListItem
                  key={ability.name}
                  className="relative"
                  aria-label={ability.name}
                  aria-describedby={`${ability.name}-desc-label`}
                  value={
                    <>
                      <span aria-hidden="true" className="mr-2">
                        ●
                      </span>
                      {ability.name}
                      <span
                        tabIndex="0"
                        aria-hidden="true"
                        className="group w-4 h-4 ml-1 inline-grid place-items-center cursor-default rounded-[50%] bg-gray-200 dark:bg-white text-black text-sm leading-[1]"
                      >
                        ?
                        <span
                          id={`${ability.name}-desc-label`}
                          className="tooltip absolute z-10 top-3 left-[-40px] p-1 w-[200px] hidden group-hover:block group-focus-visible:block rounded bg-black bg-opacity-50 dark:bg-opacity-90 text-white text-xs text-center"
                        >
                          {ability.desc}
                        </span>
                      </span>
                    </>
                  }
                />
              ))}
            </ul>
          </ListItem>
        </ul>
      </div>
    </article>
  );
}

export default PokemonCard;

const ListItem = ({ name, value, children, ...props }) => (
  <li {...props}>
    {name && (
      <strong className="text-gray-500 dark:text-gray-400">{name}</strong>
    )}

    {children
      ? children
      : value && (
          <span className="text-[#222] dark:text-white font-medium capitalize">
            {value}
          </span>
        )}
  </li>
);
