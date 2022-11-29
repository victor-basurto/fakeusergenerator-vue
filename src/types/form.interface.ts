export interface ISimpleInput {
	labelName: string,
	fieldId: string
}
export interface IFormInput {
	labelName: string,
	placeholder: string,
	qtyNumber: number,
	labelId: string,
	inputType: string,
	min?: number,
	max?: number,
	mandatory?: boolean
}
