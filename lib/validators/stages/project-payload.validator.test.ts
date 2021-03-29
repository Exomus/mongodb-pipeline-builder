import {projectPayloadValidator} from "./project-payload.validator";

describe('project validators', () => {
    describe('projectPayloadValidator', () => {
        const payloadList: any[] = [
            {},
            { tests: undefined },
            { tests: 'unit' }
        ];
        test.each([
            [projectPayloadValidator(payloadList[0]),
                'No fields have been added.'],
            [projectPayloadValidator(payloadList[1]),
                'One or more field values are not defined.'],
            [projectPayloadValidator(payloadList[2]), ''],
        ])('%o should return %s', (
            operation: any,
            expected: any
        ) => {
            expect(operation).toEqual(expected);
        });
    });
});
