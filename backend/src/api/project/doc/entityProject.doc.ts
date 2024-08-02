/**
 * @swagger
 * components:
 *  schemas:
 *    Project Entity:
 *      name: Project Entity
 *      type: object
 *      description: Project entity
 *      required:
 *        - name
 *        - companyId
 *      properties:
 *        id:
 *          type: string
 *          format: cuid
 *          example: 123e4567-e89b-12d3-a456-426655440000
 *        name:
 *          type: string
 *          example: apiTime
 *        description:
 *          type: string
 *          example: api para controlar el tiempo
 *        companyId:
 *          type: string
 *          example: id of the company
 *        calendarId:
 *          type: string
 *          example: id of the calendar
 *        userProjects:
 *          type: User Projects
 *          example: []
 *        milestones:
 *          type: Milestones
 *          example: []
 *        tasks:
 *          type: Task
 *          example: []
 *        meeting:
 *          type: Meeting
 *          example: []
 *        document:
 *          type: Document
 *          example: []
 *        isActive:
 *          type: boolean
 *          example: true
 *        createdAt:
 *          type: string
 *          format: dateTime
 *          example: 2021-01-01 00:00:00
 */
