export enum ACTIONS_TYPE {
	CHANGE_CURRENCY_FIELD_TYPE = 'CurrencyExchange/CHANGE_CURRENCY_FIELD_TYPE',
	CHANGE_CHANGE_ACTION = 'CurrencyExchange/CHANGE_CHANGE_ACTION',
	CHANGE_CURRENT_CURRENCY = 'CurrencyExchange/CHANGE_CURRENT_CURRENCY',
}


export type ChangeCurrencyFieldType = {
	type: ACTIONS_TYPE.CHANGE_CURRENCY_FIELD_TYPE,
	payload: {
		amountOfBYN: string
		amountOfCurrency: string
	},
};


export const ChangeCurrencyFieldAC = (amountOfBYN: string, amountOfCurrency: string): ChangeCurrencyFieldType => {
	return {
		type: ACTIONS_TYPE.CHANGE_CURRENCY_FIELD_TYPE,
		payload: {amountOfBYN, amountOfCurrency}
	}
};

export type ChangeAction = {
	type: ACTIONS_TYPE.CHANGE_CHANGE_ACTION
	payload: {isBuying: boolean, amountOfBYN: '', amountOfCurrency: ''}
};


export const ChangeActionAC = (isBuying: boolean): ChangeAction => {
	return {
		type:ACTIONS_TYPE.CHANGE_CHANGE_ACTION,
		// зануляем интупы, что бы не было ошибок при конвертации валюты
		payload: {isBuying, amountOfBYN:'', amountOfCurrency:''}
	}
};

export type ChangeCurrentCurrencyType = {
	type: ACTIONS_TYPE.CHANGE_CURRENT_CURRENCY
	payload: {currentCurrency: string,amountOfBYN: string, amountOfCurrency: string}
};


export const ChangeCurrentCurrencyAC = (currentCurrency: string): ChangeCurrentCurrencyType => {
	return {
		type: ACTIONS_TYPE.CHANGE_CURRENT_CURRENCY,
		//зануляем интупы, что бы не было ошибок при конвертации валюты
		payload:{currentCurrency,amountOfBYN: '', amountOfCurrency: ''}
	}
};

export type CurrencyReducersTypes = ChangeCurrencyFieldType | ChangeAction | ChangeCurrentCurrencyType;