/**
 * @swagger
 * components:
 *  schemas:
 *    Status Entity:
 *      name: Status Entity
 *      type: object
 *      description: Status entity
 *      required:
 *        - name
 *      properties:
 *        id:
 *          type: string
 *          format: cuid
 *          example: 123e4567-e89b-12d3-a456-426655440000
 *        name:
 *          type: string
 *          example: name
 *        task:
 *          type: Task
 *          example: []
 *        isActive:
 *          type: boolean
 *          example: true
 *        createdAt:
 *          type: string
 *          format: date-time
 *          example: 2021-01-01T00:00:00Z
 */
