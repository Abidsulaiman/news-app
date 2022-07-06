import { useAppSelector } from "../app/hooks";

function WeatherWidget() {
  const { data } = useAppSelector<any>((state) => state?.weather);

  return (
    <div className="border border-indigo-600 p-6 rounded-lg text-white text-center">
      <img
        src={`https://openweathermap.org/img/wn/${data?.weather?.[0]?.icon}@2x.png`}
        alt="weather icon"
        className="mx-auto w-24"
      />
      <h3 className="text-lg text-white">{data?.weather?.[0]?.main}</h3>
      <p className="text-gray-600 capitalize">
        {data?.weather?.[0]?.description}
      </p>

      <h5 className="text-4xl text-white my-5">
        {Math.ceil(Number(data?.main?.temp))}{" "}
        <span className="text-amber-500">°C</span>
      </h5>

      <p>
        {data?.name}, {data?.sys?.country}
      </p>
    </div>
  );
}

export default WeatherWidget;
