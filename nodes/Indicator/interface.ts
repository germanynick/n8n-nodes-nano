import { AllEntities, Entity, PropertiesOf } from 'n8n-workflow';

type IIndicatorMap = {
	base: 'sma' | 'vwap' | 'ichimoku' | 'stochRSI' | 'macd' | 'bb' | 'vp' | 'heikin-ashi';
};

export type IIndicator = AllEntities<IIndicatorMap>;

export type IIndicatorBase = Entity<IIndicatorMap, 'base'>;

export type IIndicatorBaseProperties = PropertiesOf<IIndicatorBase>;
