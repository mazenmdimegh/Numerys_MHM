const ExampleComponent = () => {
  const allFilters = useCallback(
    async (signal) => {
      try {
        const json = JSON.stringify({
          year_min: yearMin,
          year_max: yearMax,
          permis_a2: radio,
          price_max: priceMax,
          price_min: priceMin,
        });

        const res = await axios.post("API url", json, {
          signal,
        });

        setFilters(res.data);
      } catch (error) {
        console.log(error);
      }
    },
    [radio, yearMax, yearMin, priceMin, priceMax]
  );

  useEffect(() => {
    const controller = new AbortController();
    allFilters(controller.signal);
    return () => {
      controller.abort();
    };
  }, [radio, yearMax, yearMin, priceMin, priceMax]);
};
