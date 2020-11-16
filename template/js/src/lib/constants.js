'use strict'

// get CMS settings
const settings = window.Settings || {}

export const STORE_ID = settings.store_id || 1011
export const DEFAULT_LANG = settings.lang || 'pt_br'
// export const DEFAULT_COUNTRY_CODE = settings.country_code || 'br'
// export const DEFAULT_CURRENCY = settings.currency || 'BRL'
// export const DEFAULT_CURRENCY_SYMBOL = settings.currency_symbol || 'R$'
export const IS_MOBILE = window.screen.width <= 575.98
