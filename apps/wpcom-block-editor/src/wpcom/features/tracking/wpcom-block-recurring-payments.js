/**
 * Internal dependencies
 */
import tracksRecordEvent from './track-record-event';

/**
 * Return the event definition object to track `wpcom_block_editor_close_click`.
 *
 * @returns {{handler: Function, selector: string, type: string}} event object definition.
 */
export default () => ( {
	selector: '.wp-block[data-type="jetpack/recurring-payments"] .components-button',
	type: 'click',
	handler: () => tracksRecordEvent( 'wpcom_block_recurring_payments_upgrade_click' ),
} );
