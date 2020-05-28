/**
 * External dependencies
 */
import { controls } from '@wordpress/data-controls';
import { plugins, registerStore, use } from '@wordpress/data';
import type { SelectFromMap, DispatchFromMap } from '../mapped-types';

/**
 * Internal dependencies
 */
import { STORE_KEY } from './constants';
import reducer from './reducer';
import * as actions from './actions';
import * as selectors from './selectors';
import * as resolvers from './resolvers';
import { plansPaths } from './plans-data';
import persistOptions from './persist';

use( plugins.persistence, persistOptions );

registerStore< State >( STORE_KEY, {
	resolvers,
	actions,
	controls,
	reducer: reducer as any,
	selectors,
	persist: [ 'selectedPlanSlug' ],
} );

declare module '@wordpress/data' {
	function dispatch( key: typeof STORE_KEY ): DispatchFromMap< typeof actions >;
	function select( key: typeof STORE_KEY ): SelectFromMap< typeof selectors >;
}

export type State = import('./reducer').State;
export type Plan = import('./types').Plan;

export { STORE_KEY };
export { plansPaths };
