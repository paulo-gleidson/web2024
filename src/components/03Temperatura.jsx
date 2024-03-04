const Temperatura = ({c, f, k}) => {
    const CelsiusParaFahrenheint = () => {
        let tempf = (9 * c + 160) / 5;
        return tempf.toFixed(2);
    }

    const FahrenheintParaCelsius = () => {
        let tempc = (5 * f - 160) / 9;
        return tempc.toFixed(2);
    }

    const Kelvin = () => {
        let tempkf = (-2297 + 9 * k) / 5;
        let tempkc = (5 * k - 1365) / 5;
        let obj = {
            "celsius" : tempkc,
            "fahrenheint" : tempkf
        };

        return obj;
    }

    return (
        <div>
            <h1>Conversor de Temperatura</h1>
            <hr />
            <h3>A temperatura em Celsius: {c}°C em Fahrenheint é {CelsiusParaFahrenheint()}°F</h3>
            <h3>A temperatura em Fahrenheint: {f}°F em Celsius é {FahrenheintParaCelsius()}°C</h3>
            <h3>A temperatura em Kelvin é {k}°K em Celsius e Fahrenheint é {Kelvin().celsius}°C, {Kelvin().fahrenheint}°F </h3>
        </div>
    )
}

export default Temperatura;