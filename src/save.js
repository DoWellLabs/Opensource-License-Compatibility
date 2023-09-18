/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save(props) {
	function firstLicenseNameChange(event){
		props.setAttributes({firstLicense: event.target.value})
	}

	function secondLicenseNameChange(event){
		props.setAttributes({secondLicense: event.target.value})
	}

	function handleClick(){
		console.log("Clicked")
	}
	return (
		<div>
			<h3>Check License Compatibility</h3> <br />
			<input type="text" placeholder='First License' onChange={firstLicenseNameChange} /> <br />
			<input type="text" placeholder='Second License' onChange={secondLicenseNameChange} /> <br />
			<button type='submit' onClick={handleClick}>Submit</button> 
		</div>
	)
}
