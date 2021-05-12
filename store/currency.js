import allCurrencies from "./currencies";

export const state = () => ({
  symbol: "$",
  code: "USD",
  currencies: allCurrencies,
  currencyRate: 1,
  rates: null
});

export const getters = {
  symbol(state) {
    return state.symbol;
  },
  code(state) {
    return state.code;
  },
  currencies(state) {
    return state.currencies;
  },
  rates(state) {
    return state.rates;
  },
  currencyRate(state) {
    return state.currencyRate;
  }
};

export const mutations = {
  setSymbol(state, symbol) {
    state.symbol = symbol;
  },
  setCode(state, code) {
    state.code = code;
  },
  setRates(state, rates) {
    state.rates = rates;
  },
  setCurrencyRate(state, currencyRate) {
    state.currencyRate = currencyRate;
  }
};

// };
