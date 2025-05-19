
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  first_name: 'first_name',
  last_name: 'last_name',
  username: 'username',
  password: 'password',
  token: 'token',
  created_at: 'created_at',
  updated_at: 'updated_at',
  role_id: 'role_id',
  email: 'email',
  division_id: 'division_id',
  user_id: 'user_id',
  profile_picture: 'profile_picture'
};

exports.Prisma.RoleScalarFieldEnum = {
  id: 'id',
  name: 'name',
  status: 'status',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.DivisionScalarFieldEnum = {
  id: 'id',
  division_name: 'division_name',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.QuestionScalarFieldEnum = {
  question_id: 'question_id',
  title: 'title',
  content: 'content',
  status: 'status',
  created_at: 'created_at',
  due_date: 'due_date',
  is_published: 'is_published',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  collaborator_id: 'collaborator_id',
  collaborator_division_id: 'collaborator_division_id',
  collaborator_type: 'collaborator_type',
  creator_id: 'creator_id'
};

exports.Prisma.AttachmentScalarFieldEnum = {
  attachment_id: 'attachment_id',
  file_name: 'file_name',
  file_path: 'file_path',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  question_id: 'question_id',
  answer_id: 'answer_id',
  comment_id: 'comment_id'
};

exports.Prisma.AnswerScalarFieldEnum = {
  answer_id: 'answer_id',
  content: 'content',
  is_accepted: 'is_accepted',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  question_id: 'question_id',
  user_id: 'user_id'
};

exports.Prisma.CommentScalarFieldEnum = {
  user_id: 'user_id',
  answer_id: 'answer_id',
  comment_id: 'comment_id',
  content: 'content',
  created_at: 'created_at',
  parent_id: 'parent_id',
  question_id: 'question_id',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.LikeScalarFieldEnum = {
  user_id: 'user_id',
  answer_id: 'answer_id',
  created_at: 'created_at',
  like_id: 'like_id',
  question_id: 'question_id'
};

exports.Prisma.TagScalarFieldEnum = {
  tag_id: 'tag_id',
  name: 'name',
  created_at: 'created_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.TagsOnQuestionsScalarFieldEnum = {
  question_id: 'question_id',
  tag_id: 'tag_id',
  assigned_at: 'assigned_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.NotificationScalarFieldEnum = {
  id: 'id',
  content: 'content',
  is_read: 'is_read',
  created_at: 'created_at',
  user_id: 'user_id',
  question_id: 'question_id',
  answer_id: 'answer_id',
  notification_type: 'notification_type'
};

exports.Prisma.ConfigScalarFieldEnum = {
  config_id: 'config_id',
  name: 'name',
  value: 'value',
  description: 'description',
  status: 'status',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.UserOrderByRelevanceFieldEnum = {
  first_name: 'first_name',
  last_name: 'last_name',
  username: 'username',
  password: 'password',
  token: 'token',
  email: 'email',
  profile_picture: 'profile_picture'
};

exports.Prisma.RoleOrderByRelevanceFieldEnum = {
  name: 'name'
};

exports.Prisma.DivisionOrderByRelevanceFieldEnum = {
  division_name: 'division_name'
};

exports.Prisma.QuestionOrderByRelevanceFieldEnum = {
  title: 'title',
  content: 'content'
};

exports.Prisma.AttachmentOrderByRelevanceFieldEnum = {
  file_name: 'file_name',
  file_path: 'file_path'
};

exports.Prisma.AnswerOrderByRelevanceFieldEnum = {
  content: 'content'
};

exports.Prisma.CommentOrderByRelevanceFieldEnum = {
  content: 'content'
};

exports.Prisma.TagOrderByRelevanceFieldEnum = {
  name: 'name'
};

exports.Prisma.NotificationOrderByRelevanceFieldEnum = {
  content: 'content'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.ConfigOrderByRelevanceFieldEnum = {
  name: 'name',
  description: 'description'
};
exports.QuestionStatus = exports.$Enums.QuestionStatus = {
  PENDING: 'PENDING',
  ASSIGNED: 'ASSIGNED',
  REJECTED: 'REJECTED',
  ANSWERED: 'ANSWERED',
  CLOSED: 'CLOSED'
};

exports.CollaboratorType = exports.$Enums.CollaboratorType = {
  PERSONAL: 'PERSONAL',
  DIVISION: 'DIVISION',
  NONE: 'NONE'
};

exports.NotificationType = exports.$Enums.NotificationType = {
  QUESTION_ASSIGNED: 'QUESTION_ASSIGNED',
  ANSWER_SUBMITTED: 'ANSWER_SUBMITTED',
  QUESTION_COMMENTED: 'QUESTION_COMMENTED',
  ANSWER_COMMENTED: 'ANSWER_COMMENTED',
  ANSWER_ACCEPTED: 'ANSWER_ACCEPTED',
  LIKE: 'LIKE'
};

exports.Prisma.ModelName = {
  User: 'User',
  Role: 'Role',
  Division: 'Division',
  Question: 'Question',
  Attachment: 'Attachment',
  Answer: 'Answer',
  Comment: 'Comment',
  Like: 'Like',
  Tag: 'Tag',
  TagsOnQuestions: 'TagsOnQuestions',
  Notification: 'Notification',
  Config: 'Config'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
