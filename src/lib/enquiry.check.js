// Run with: node src/lib/enquiry.check.js
import assert from 'node:assert/strict'

import { validateEnquiry, enquiryMailto } from './enquiry.js'

const ok = { name: 'Amina', email: 'amina@example.co.ke', phone: '', company: '', subject: 'general', message: 'We need a new website.' }

assert.deepEqual(validateEnquiry(ok), {})
assert.ok(validateEnquiry({ ...ok, name: '  ' }).name)
assert.ok(validateEnquiry({ ...ok, email: 'amina@' }).email)
assert.ok(validateEnquiry({ ...ok, phone: 'abc' }).phone)
assert.deepEqual(validateEnquiry({ ...ok, phone: '+254 712 345 678' }), {})
assert.deepEqual(validateEnquiry({ ...ok, phone: '0712-345-678' }), {})
assert.ok(validateEnquiry({ ...ok, subject: '' }).subject)
assert.ok(validateEnquiry({ ...ok, message: 'hi' }).message)
assert.ok(validateEnquiry({ ...ok, message: 'x'.repeat(5001) }).message)

const link = enquiryMailto({ ...ok, phone: '0712' }, 'General enquiry')
assert.ok(link.startsWith('mailto:shamisi@kiratech.co.ke?subject=Website%20enquiry'))
assert.ok(!link.includes('+'), 'spaces must not be encoded as +')
assert.ok(decodeURIComponent(link).includes('Phone: 0712'))

console.log('enquiry checks passed')
