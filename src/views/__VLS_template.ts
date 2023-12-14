import { __VLS_internalComponent, __VLS_componentsOption, __VLS_name, form, onSubmit } from './Login.vue';

function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {} &
{ 'bg'?: boolean; };
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {} &
__VLS_WithComponent<'ElForm', typeof __VLS_localComponents, "ElForm", "elForm", "el-form"> &
__VLS_WithComponent<'ElFormItem', typeof __VLS_localComponents, "ElFormItem", "elFormItem", "el-form-item"> &
__VLS_WithComponent<'ElInput', typeof __VLS_localComponents, "ElInput", "elInput", "el-input"> &
__VLS_WithComponent<'ElButton', typeof __VLS_localComponents, "ElButton", "elButton", "el-button">;
__VLS_intrinsicElements.div; __VLS_intrinsicElements.div;
__VLS_components.ElForm; __VLS_components.ElForm; __VLS_components.ElForm; __VLS_components.ElForm; __VLS_components.elForm; __VLS_components.elForm; __VLS_components.elForm; __VLS_components.elForm; __VLS_components["el-form"]; __VLS_components["el-form"]; __VLS_components["el-form"]; __VLS_components["el-form"];
// @ts-ignore
[ElForm, ElForm, ElForm, ElForm,];
__VLS_components.ElFormItem; __VLS_components.ElFormItem; __VLS_components.ElFormItem; __VLS_components.ElFormItem; __VLS_components.ElFormItem; __VLS_components.ElFormItem; __VLS_components.elFormItem; __VLS_components.elFormItem; __VLS_components.elFormItem; __VLS_components.elFormItem; __VLS_components.elFormItem; __VLS_components.elFormItem; __VLS_components["el-form-item"]; __VLS_components["el-form-item"]; __VLS_components["el-form-item"]; __VLS_components["el-form-item"]; __VLS_components["el-form-item"]; __VLS_components["el-form-item"];
// @ts-ignore
[ElFormItem, ElFormItem, ElFormItem, ElFormItem, ElFormItem, ElFormItem,];
__VLS_components.ElInput; __VLS_components.ElInput; __VLS_components.elInput; __VLS_components.elInput; __VLS_components["el-input"]; __VLS_components["el-input"];
// @ts-ignore
[ElInput, ElInput,];
__VLS_components.ElButton; __VLS_components.ElButton; __VLS_components.ElButton; __VLS_components.ElButton; __VLS_components.elButton; __VLS_components.elButton; __VLS_components.elButton; __VLS_components.elButton; __VLS_components["el-button"]; __VLS_components["el-button"]; __VLS_components["el-button"]; __VLS_components["el-button"];
// @ts-ignore
[ElButton, ElButton, ElButton, ElButton,];
{
const __VLS_0 = __VLS_intrinsicElements["div"];
const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
const __VLS_2 = __VLS_1({ ...{}, class: ("bg"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, class: ("bg"), });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
{
const __VLS_5 = ({} as 'ElForm' extends keyof typeof __VLS_ctx ? { 'ElForm': typeof __VLS_ctx.ElForm; } : 'elForm' extends keyof typeof __VLS_ctx ? { 'ElForm': typeof __VLS_ctx.elForm; } : 'el-form' extends keyof typeof __VLS_ctx ? { 'ElForm': (typeof __VLS_ctx)["el-form"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).ElForm;
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ ...{}, model: ((__VLS_ctx.form)), labelWidth: ("120px"), }));
({} as { ElForm: typeof __VLS_5; }).ElForm;
({} as { ElForm: typeof __VLS_5; }).ElForm;
const __VLS_7 = __VLS_6({ ...{}, model: ((__VLS_ctx.form)), labelWidth: ("120px"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{}, model: ((__VLS_ctx.form)), labelWidth: ("120px"), });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
{
const __VLS_10 = ({} as 'ElFormItem' extends keyof typeof __VLS_ctx ? { 'ElFormItem': typeof __VLS_ctx.ElFormItem; } : 'elFormItem' extends keyof typeof __VLS_ctx ? { 'ElFormItem': typeof __VLS_ctx.elFormItem; } : 'el-form-item' extends keyof typeof __VLS_ctx ? { 'ElFormItem': (typeof __VLS_ctx)["el-form-item"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).ElFormItem;
const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({ ...{}, label: ("用户名"), }));
({} as { ElFormItem: typeof __VLS_10; }).ElFormItem;
({} as { ElFormItem: typeof __VLS_10; }).ElFormItem;
const __VLS_12 = __VLS_11({ ...{}, label: ("用户名"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{}, label: ("用户名"), });
const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!;
let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>;
{
const __VLS_15 = ({} as 'ElInput' extends keyof typeof __VLS_ctx ? { 'ElInput': typeof __VLS_ctx.ElInput; } : 'elInput' extends keyof typeof __VLS_ctx ? { 'ElInput': typeof __VLS_ctx.elInput; } : 'el-input' extends keyof typeof __VLS_ctx ? { 'ElInput': (typeof __VLS_ctx)["el-input"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).ElInput;
const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({ ...{}, modelValue: ((__VLS_ctx.form.username)), }));
({} as { ElInput: typeof __VLS_15; }).ElInput;
const __VLS_17 = __VLS_16({ ...{}, modelValue: ((__VLS_ctx.form.username)), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_15, typeof __VLS_17> & Record<string, unknown>) => void)({ ...{}, modelValue: ((__VLS_ctx.form.username)), });
const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17)!;
let __VLS_19!: __VLS_NormalizeEmits<typeof __VLS_18.emit>;
}
(__VLS_13.slots!).default;
}
{
const __VLS_20 = ({} as 'ElForm' extends keyof typeof __VLS_ctx ? { 'ElForm': typeof __VLS_ctx.ElForm; } : 'elForm' extends keyof typeof __VLS_ctx ? { 'ElForm': typeof __VLS_ctx.elForm; } : 'el-form' extends keyof typeof __VLS_ctx ? { 'ElForm': (typeof __VLS_ctx)["el-form"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).ElForm;
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ ...{}, model: ((__VLS_ctx.form)), labelWidth: ("120px"), }));
({} as { ElForm: typeof __VLS_20; }).ElForm;
({} as { ElForm: typeof __VLS_20; }).ElForm;
const __VLS_22 = __VLS_21({ ...{}, model: ((__VLS_ctx.form)), labelWidth: ("120px"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_20, typeof __VLS_22> & Record<string, unknown>) => void)({ ...{}, model: ((__VLS_ctx.form)), labelWidth: ("120px"), });
const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22)!;
let __VLS_24!: __VLS_NormalizeEmits<typeof __VLS_23.emit>;
{
const __VLS_25 = ({} as 'ElFormItem' extends keyof typeof __VLS_ctx ? { 'ElFormItem': typeof __VLS_ctx.ElFormItem; } : 'elFormItem' extends keyof typeof __VLS_ctx ? { 'ElFormItem': typeof __VLS_ctx.elFormItem; } : 'el-form-item' extends keyof typeof __VLS_ctx ? { 'ElFormItem': (typeof __VLS_ctx)["el-form-item"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).ElFormItem;
const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({ ...{}, label: ("密码"), }));
({} as { ElFormItem: typeof __VLS_25; }).ElFormItem;
({} as { ElFormItem: typeof __VLS_25; }).ElFormItem;
const __VLS_27 = __VLS_26({ ...{}, label: ("密码"), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_25, typeof __VLS_27> & Record<string, unknown>) => void)({ ...{}, label: ("密码"), });
const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27)!;
let __VLS_29!: __VLS_NormalizeEmits<typeof __VLS_28.emit>;
{
const __VLS_30 = ({} as 'ElInput' extends keyof typeof __VLS_ctx ? { 'ElInput': typeof __VLS_ctx.ElInput; } : 'elInput' extends keyof typeof __VLS_ctx ? { 'ElInput': typeof __VLS_ctx.elInput; } : 'el-input' extends keyof typeof __VLS_ctx ? { 'ElInput': (typeof __VLS_ctx)["el-input"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).ElInput;
const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ ...{}, modelValue: ((__VLS_ctx.form.password)), }));
({} as { ElInput: typeof __VLS_30; }).ElInput;
const __VLS_32 = __VLS_31({ ...{}, modelValue: ((__VLS_ctx.form.password)), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_30, typeof __VLS_32> & Record<string, unknown>) => void)({ ...{}, modelValue: ((__VLS_ctx.form.password)), });
const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32)!;
let __VLS_34!: __VLS_NormalizeEmits<typeof __VLS_33.emit>;
}
(__VLS_28.slots!).default;
}
{
const __VLS_35 = ({} as 'ElFormItem' extends keyof typeof __VLS_ctx ? { 'ElFormItem': typeof __VLS_ctx.ElFormItem; } : 'elFormItem' extends keyof typeof __VLS_ctx ? { 'ElFormItem': typeof __VLS_ctx.elFormItem; } : 'el-form-item' extends keyof typeof __VLS_ctx ? { 'ElFormItem': (typeof __VLS_ctx)["el-form-item"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).ElFormItem;
const __VLS_36 = __VLS_asFunctionalComponent(__VLS_35, new __VLS_35({ ...{}, }));
({} as { ElFormItem: typeof __VLS_35; }).ElFormItem;
({} as { ElFormItem: typeof __VLS_35; }).ElFormItem;
const __VLS_37 = __VLS_36({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_36));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_35, typeof __VLS_37> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_38 = __VLS_pickFunctionalComponentCtx(__VLS_35, __VLS_37)!;
let __VLS_39!: __VLS_NormalizeEmits<typeof __VLS_38.emit>;
{
const __VLS_40 = ({} as 'ElButton' extends keyof typeof __VLS_ctx ? { 'ElButton': typeof __VLS_ctx.ElButton; } : 'elButton' extends keyof typeof __VLS_ctx ? { 'ElButton': typeof __VLS_ctx.elButton; } : 'el-button' extends keyof typeof __VLS_ctx ? { 'ElButton': (typeof __VLS_ctx)["el-button"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).ElButton;
const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({ ...{ onClick: {} as any, }, type: ("primary"), }));
({} as { ElButton: typeof __VLS_40; }).ElButton;
({} as { ElButton: typeof __VLS_40; }).ElButton;
const __VLS_42 = __VLS_41({ ...{ onClick: {} as any, }, type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_41));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_40, typeof __VLS_42> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, type: ("primary"), });
const __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42)!;
let __VLS_44!: __VLS_NormalizeEmits<typeof __VLS_43.emit>;
let __VLS_45 = { 'click': __VLS_pickEvent(__VLS_44['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_41, typeof __VLS_42>).onClick) };
__VLS_45 = { click: (__VLS_ctx.onSubmit) };
(__VLS_43.slots!).default;
}
{
const __VLS_46 = ({} as 'ElButton' extends keyof typeof __VLS_ctx ? { 'ElButton': typeof __VLS_ctx.ElButton; } : 'elButton' extends keyof typeof __VLS_ctx ? { 'ElButton': typeof __VLS_ctx.elButton; } : 'el-button' extends keyof typeof __VLS_ctx ? { 'ElButton': (typeof __VLS_ctx)["el-button"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).ElButton;
const __VLS_47 = __VLS_asFunctionalComponent(__VLS_46, new __VLS_46({ ...{}, }));
({} as { ElButton: typeof __VLS_46; }).ElButton;
({} as { ElButton: typeof __VLS_46; }).ElButton;
const __VLS_48 = __VLS_47({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_47));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_46, typeof __VLS_48> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_49 = __VLS_pickFunctionalComponentCtx(__VLS_46, __VLS_48)!;
let __VLS_50!: __VLS_NormalizeEmits<typeof __VLS_49.emit>;
(__VLS_49.slots!).default;
}
(__VLS_38.slots!).default;
}
(__VLS_23.slots!).default;
}
(__VLS_8.slots!).default;
}
(__VLS_3.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
__VLS_styleScopedClasses["bg"];
}
var __VLS_slots!: {};
// @ts-ignore
[form, form, form, form, form, form, form, form, form, form, form, form, onSubmit,];
return __VLS_slots;
}
