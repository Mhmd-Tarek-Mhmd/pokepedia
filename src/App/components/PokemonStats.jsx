const maxStats = {
  hp: 255,
  attack: 190,
  defense: 250,
  'special-attack': 194,
  'special-defense': 250,
  speed: 200,
};
const statNames = {
  hp: 'HP',
  attack: 'Attack',
  defense: 'Defense',
  'special-attack': 'Sp. Atk',
  'special-defense': 'Sp. Def',
  speed: 'Speed',
};
const getStatColor = (value, max) => {
  const percentage = (value / max) * 100;
  if (percentage < 30) return 'bg-red-500';
  if (percentage < 50) return 'bg-orange-500';
  if (percentage < 70) return 'bg-yellow-500';
  if (percentage < 90) return 'bg-green-500';
  return 'bg-emerald-500';
};


export default function PokemonStats({ stats }) {
  const totalStats = stats?.reduce((sum, stat) => sum + stat?.base, 0);

  return (
    <div className="bg-surface rounded-2xl p-6 shadow-md space-y-4">
      {stats?.map((stat) => {
        const statName = stat?.name;
        const maxStat = maxStats?.[statName] || 100;
        const percentage = Math.min(100, Math.round((stat?.base / maxStat) * 100));

        return (
          <div key={statName} className="flex items-center">
            <div className="w-20 font-medium capitalize text-gray-700 dark:text-gray-300">
              {statNames[statName] || statName}
            </div>
            <div className="w-12 font-mono text-right mr-3">
              {stat.base}
            </div>
            <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div
                style={{ width: `${percentage}%` }}
                className={`h-full ${getStatColor(stat.base, maxStat)}`}
              />
            </div>
          </div>
        );
      })}

      <div className="flex items-center pt-2 border-t border-gray-200 dark:border-gray-700">
        <div className="w-20 font-medium text-gray-700 dark:text-gray-300">
          Total
        </div>
        <div className="w-12 font-mono text-right mr-3 font-bold">
          {totalStats}
        </div>
      </div>
    </div>
  );
}
