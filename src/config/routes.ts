export const routes = {
    client: {
        ACCOUNT: 'https://app.checkinscan.com/client/myaccount',
        CHECK_INS: 'https://app.checkinscan.com/client/checkin',
        manage_property: {
            MY_PROPERTIES:  'https://app.checkinscan.com/client/property/manage_property',
            MY_GROUPS: 'https://app.checkinscan.com/client/property/manage_property_group',
            ADD_PROPERTY: 'https://app.checkinscan.com/client/property/add_property',
            ADD_GROUP: 'https://app.checkinscan.com/client/property/edit_property_group'
        },
        AGENTS:{
            MY_AGENT: 'https://app.checkinscan.com/client/agent/manage_agent',
            ADD_AGENT: 'https://app.checkinscan.com/client/agent/add_agent'
        },
        RESERVATION: 'https://app.checkinscan.com/client/reservas/managereservas',
        DOWNLOAD: {
            BOOKS: 'https://app.checkinscan.com/client/download/books',
            QR_CODE: 'https://app.checkinscan.com/client/download/qr_codes',
        },
        PRICE: '/price'
    },
}
