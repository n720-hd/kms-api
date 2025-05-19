
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model Division
 * 
 */
export type Division = $Result.DefaultSelection<Prisma.$DivisionPayload>
/**
 * Model Question
 * 
 */
export type Question = $Result.DefaultSelection<Prisma.$QuestionPayload>
/**
 * Model Attachment
 * 
 */
export type Attachment = $Result.DefaultSelection<Prisma.$AttachmentPayload>
/**
 * Model Answer
 * 
 */
export type Answer = $Result.DefaultSelection<Prisma.$AnswerPayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model Like
 * 
 */
export type Like = $Result.DefaultSelection<Prisma.$LikePayload>
/**
 * Model Tag
 * 
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>
/**
 * Model TagsOnQuestions
 * 
 */
export type TagsOnQuestions = $Result.DefaultSelection<Prisma.$TagsOnQuestionsPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model Config
 * 
 */
export type Config = $Result.DefaultSelection<Prisma.$ConfigPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const QuestionStatus: {
  PENDING: 'PENDING',
  ASSIGNED: 'ASSIGNED',
  REJECTED: 'REJECTED',
  ANSWERED: 'ANSWERED',
  CLOSED: 'CLOSED'
};

export type QuestionStatus = (typeof QuestionStatus)[keyof typeof QuestionStatus]


export const CollaboratorType: {
  PERSONAL: 'PERSONAL',
  DIVISION: 'DIVISION',
  NONE: 'NONE'
};

export type CollaboratorType = (typeof CollaboratorType)[keyof typeof CollaboratorType]


export const NotificationType: {
  QUESTION_ASSIGNED: 'QUESTION_ASSIGNED',
  ANSWER_SUBMITTED: 'ANSWER_SUBMITTED',
  QUESTION_COMMENTED: 'QUESTION_COMMENTED',
  ANSWER_COMMENTED: 'ANSWER_COMMENTED',
  ANSWER_ACCEPTED: 'ANSWER_ACCEPTED',
  LIKE: 'LIKE'
};

export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType]

}

export type QuestionStatus = $Enums.QuestionStatus

export const QuestionStatus: typeof $Enums.QuestionStatus

export type CollaboratorType = $Enums.CollaboratorType

export const CollaboratorType: typeof $Enums.CollaboratorType

export type NotificationType = $Enums.NotificationType

export const NotificationType: typeof $Enums.NotificationType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.division`: Exposes CRUD operations for the **Division** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Divisions
    * const divisions = await prisma.division.findMany()
    * ```
    */
  get division(): Prisma.DivisionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.question`: Exposes CRUD operations for the **Question** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.question.findMany()
    * ```
    */
  get question(): Prisma.QuestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attachment`: Exposes CRUD operations for the **Attachment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attachments
    * const attachments = await prisma.attachment.findMany()
    * ```
    */
  get attachment(): Prisma.AttachmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.answer`: Exposes CRUD operations for the **Answer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Answers
    * const answers = await prisma.answer.findMany()
    * ```
    */
  get answer(): Prisma.AnswerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.like`: Exposes CRUD operations for the **Like** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Likes
    * const likes = await prisma.like.findMany()
    * ```
    */
  get like(): Prisma.LikeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tagsOnQuestions`: Exposes CRUD operations for the **TagsOnQuestions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TagsOnQuestions
    * const tagsOnQuestions = await prisma.tagsOnQuestions.findMany()
    * ```
    */
  get tagsOnQuestions(): Prisma.TagsOnQuestionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.config`: Exposes CRUD operations for the **Config** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Configs
    * const configs = await prisma.config.findMany()
    * ```
    */
  get config(): Prisma.ConfigDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "role" | "division" | "question" | "attachment" | "answer" | "comment" | "like" | "tag" | "tagsOnQuestions" | "notification" | "config"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      Division: {
        payload: Prisma.$DivisionPayload<ExtArgs>
        fields: Prisma.DivisionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DivisionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DivisionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DivisionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DivisionPayload>
          }
          findFirst: {
            args: Prisma.DivisionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DivisionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DivisionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DivisionPayload>
          }
          findMany: {
            args: Prisma.DivisionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DivisionPayload>[]
          }
          create: {
            args: Prisma.DivisionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DivisionPayload>
          }
          createMany: {
            args: Prisma.DivisionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DivisionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DivisionPayload>
          }
          update: {
            args: Prisma.DivisionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DivisionPayload>
          }
          deleteMany: {
            args: Prisma.DivisionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DivisionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DivisionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DivisionPayload>
          }
          aggregate: {
            args: Prisma.DivisionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDivision>
          }
          groupBy: {
            args: Prisma.DivisionGroupByArgs<ExtArgs>
            result: $Utils.Optional<DivisionGroupByOutputType>[]
          }
          count: {
            args: Prisma.DivisionCountArgs<ExtArgs>
            result: $Utils.Optional<DivisionCountAggregateOutputType> | number
          }
        }
      }
      Question: {
        payload: Prisma.$QuestionPayload<ExtArgs>
        fields: Prisma.QuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findFirst: {
            args: Prisma.QuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findMany: {
            args: Prisma.QuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          create: {
            args: Prisma.QuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          createMany: {
            args: Prisma.QuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.QuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          update: {
            args: Prisma.QuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          deleteMany: {
            args: Prisma.QuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          aggregate: {
            args: Prisma.QuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestion>
          }
          groupBy: {
            args: Prisma.QuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionCountAggregateOutputType> | number
          }
        }
      }
      Attachment: {
        payload: Prisma.$AttachmentPayload<ExtArgs>
        fields: Prisma.AttachmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttachmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttachmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          findFirst: {
            args: Prisma.AttachmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttachmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          findMany: {
            args: Prisma.AttachmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>[]
          }
          create: {
            args: Prisma.AttachmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          createMany: {
            args: Prisma.AttachmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AttachmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          update: {
            args: Prisma.AttachmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          deleteMany: {
            args: Prisma.AttachmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttachmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AttachmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          aggregate: {
            args: Prisma.AttachmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttachment>
          }
          groupBy: {
            args: Prisma.AttachmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttachmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttachmentCountArgs<ExtArgs>
            result: $Utils.Optional<AttachmentCountAggregateOutputType> | number
          }
        }
      }
      Answer: {
        payload: Prisma.$AnswerPayload<ExtArgs>
        fields: Prisma.AnswerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnswerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnswerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          findFirst: {
            args: Prisma.AnswerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnswerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          findMany: {
            args: Prisma.AnswerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>[]
          }
          create: {
            args: Prisma.AnswerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          createMany: {
            args: Prisma.AnswerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AnswerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          update: {
            args: Prisma.AnswerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          deleteMany: {
            args: Prisma.AnswerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnswerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AnswerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          aggregate: {
            args: Prisma.AnswerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnswer>
          }
          groupBy: {
            args: Prisma.AnswerGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnswerGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnswerCountArgs<ExtArgs>
            result: $Utils.Optional<AnswerCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      Like: {
        payload: Prisma.$LikePayload<ExtArgs>
        fields: Prisma.LikeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LikeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LikeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          findFirst: {
            args: Prisma.LikeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LikeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          findMany: {
            args: Prisma.LikeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>[]
          }
          create: {
            args: Prisma.LikeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          createMany: {
            args: Prisma.LikeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LikeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          update: {
            args: Prisma.LikeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          deleteMany: {
            args: Prisma.LikeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LikeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LikeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          aggregate: {
            args: Prisma.LikeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLike>
          }
          groupBy: {
            args: Prisma.LikeGroupByArgs<ExtArgs>
            result: $Utils.Optional<LikeGroupByOutputType>[]
          }
          count: {
            args: Prisma.LikeCountArgs<ExtArgs>
            result: $Utils.Optional<LikeCountAggregateOutputType> | number
          }
        }
      }
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>
        fields: Prisma.TagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagCountArgs<ExtArgs>
            result: $Utils.Optional<TagCountAggregateOutputType> | number
          }
        }
      }
      TagsOnQuestions: {
        payload: Prisma.$TagsOnQuestionsPayload<ExtArgs>
        fields: Prisma.TagsOnQuestionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagsOnQuestionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagsOnQuestionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagsOnQuestionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagsOnQuestionsPayload>
          }
          findFirst: {
            args: Prisma.TagsOnQuestionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagsOnQuestionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagsOnQuestionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagsOnQuestionsPayload>
          }
          findMany: {
            args: Prisma.TagsOnQuestionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagsOnQuestionsPayload>[]
          }
          create: {
            args: Prisma.TagsOnQuestionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagsOnQuestionsPayload>
          }
          createMany: {
            args: Prisma.TagsOnQuestionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TagsOnQuestionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagsOnQuestionsPayload>
          }
          update: {
            args: Prisma.TagsOnQuestionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagsOnQuestionsPayload>
          }
          deleteMany: {
            args: Prisma.TagsOnQuestionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagsOnQuestionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TagsOnQuestionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagsOnQuestionsPayload>
          }
          aggregate: {
            args: Prisma.TagsOnQuestionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTagsOnQuestions>
          }
          groupBy: {
            args: Prisma.TagsOnQuestionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagsOnQuestionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagsOnQuestionsCountArgs<ExtArgs>
            result: $Utils.Optional<TagsOnQuestionsCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      Config: {
        payload: Prisma.$ConfigPayload<ExtArgs>
        fields: Prisma.ConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigPayload>
          }
          findFirst: {
            args: Prisma.ConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigPayload>
          }
          findMany: {
            args: Prisma.ConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigPayload>[]
          }
          create: {
            args: Prisma.ConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigPayload>
          }
          createMany: {
            args: Prisma.ConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigPayload>
          }
          update: {
            args: Prisma.ConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigPayload>
          }
          deleteMany: {
            args: Prisma.ConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigPayload>
          }
          aggregate: {
            args: Prisma.ConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConfig>
          }
          groupBy: {
            args: Prisma.ConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConfigCountArgs<ExtArgs>
            result: $Utils.Optional<ConfigCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    role?: RoleOmit
    division?: DivisionOmit
    question?: QuestionOmit
    attachment?: AttachmentOmit
    answer?: AnswerOmit
    comment?: CommentOmit
    like?: LikeOmit
    tag?: TagOmit
    tagsOnQuestions?: TagsOnQuestionsOmit
    notification?: NotificationOmit
    config?: ConfigOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    answers: number
    comments: number
    likes: number
    notifications: number
    assigned_questions: number
    created_questions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | UserCountOutputTypeCountAnswersArgs
    comments?: boolean | UserCountOutputTypeCountCommentsArgs
    likes?: boolean | UserCountOutputTypeCountLikesArgs
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
    assigned_questions?: boolean | UserCountOutputTypeCountAssigned_questionsArgs
    created_questions?: boolean | UserCountOutputTypeCountCreated_questionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAssigned_questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreated_questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
  }


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    users: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | RoleCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type DivisionCountOutputType
   */

  export type DivisionCountOutputType = {
    assigned_questions: number
    users: number
  }

  export type DivisionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assigned_questions?: boolean | DivisionCountOutputTypeCountAssigned_questionsArgs
    users?: boolean | DivisionCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * DivisionCountOutputType without action
   */
  export type DivisionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DivisionCountOutputType
     */
    select?: DivisionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DivisionCountOutputType without action
   */
  export type DivisionCountOutputTypeCountAssigned_questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
  }

  /**
   * DivisionCountOutputType without action
   */
  export type DivisionCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type QuestionCountOutputType
   */

  export type QuestionCountOutputType = {
    answers: number
    comments: number
    likes: number
    notifications: number
    tags: number
    attachment: number
  }

  export type QuestionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | QuestionCountOutputTypeCountAnswersArgs
    comments?: boolean | QuestionCountOutputTypeCountCommentsArgs
    likes?: boolean | QuestionCountOutputTypeCountLikesArgs
    notifications?: boolean | QuestionCountOutputTypeCountNotificationsArgs
    tags?: boolean | QuestionCountOutputTypeCountTagsArgs
    attachment?: boolean | QuestionCountOutputTypeCountAttachmentArgs
  }

  // Custom InputTypes
  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionCountOutputType
     */
    select?: QuestionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerWhereInput
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikeWhereInput
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagsOnQuestionsWhereInput
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountAttachmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttachmentWhereInput
  }


  /**
   * Count Type AnswerCountOutputType
   */

  export type AnswerCountOutputType = {
    comments: number
    likes: number
    notifications: number
    attachment: number
  }

  export type AnswerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | AnswerCountOutputTypeCountCommentsArgs
    likes?: boolean | AnswerCountOutputTypeCountLikesArgs
    notifications?: boolean | AnswerCountOutputTypeCountNotificationsArgs
    attachment?: boolean | AnswerCountOutputTypeCountAttachmentArgs
  }

  // Custom InputTypes
  /**
   * AnswerCountOutputType without action
   */
  export type AnswerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnswerCountOutputType
     */
    select?: AnswerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AnswerCountOutputType without action
   */
  export type AnswerCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * AnswerCountOutputType without action
   */
  export type AnswerCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikeWhereInput
  }

  /**
   * AnswerCountOutputType without action
   */
  export type AnswerCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }

  /**
   * AnswerCountOutputType without action
   */
  export type AnswerCountOutputTypeCountAttachmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttachmentWhereInput
  }


  /**
   * Count Type CommentCountOutputType
   */

  export type CommentCountOutputType = {
    replies: number
    Attachment: number
  }

  export type CommentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    replies?: boolean | CommentCountOutputTypeCountRepliesArgs
    Attachment?: boolean | CommentCountOutputTypeCountAttachmentArgs
  }

  // Custom InputTypes
  /**
   * CommentCountOutputType without action
   */
  export type CommentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentCountOutputType
     */
    select?: CommentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CommentCountOutputType without action
   */
  export type CommentCountOutputTypeCountRepliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * CommentCountOutputType without action
   */
  export type CommentCountOutputTypeCountAttachmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttachmentWhereInput
  }


  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    questions: number
  }

  export type TagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | TagCountOutputTypeCountQuestionsArgs
  }

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagsOnQuestionsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    role_id: number | null
    division_id: number | null
    user_id: number | null
  }

  export type UserSumAggregateOutputType = {
    role_id: number | null
    division_id: number | null
    user_id: number | null
  }

  export type UserMinAggregateOutputType = {
    first_name: string | null
    last_name: string | null
    username: string | null
    password: string | null
    token: string | null
    created_at: Date | null
    updated_at: Date | null
    role_id: number | null
    email: string | null
    division_id: number | null
    user_id: number | null
    profile_picture: string | null
  }

  export type UserMaxAggregateOutputType = {
    first_name: string | null
    last_name: string | null
    username: string | null
    password: string | null
    token: string | null
    created_at: Date | null
    updated_at: Date | null
    role_id: number | null
    email: string | null
    division_id: number | null
    user_id: number | null
    profile_picture: string | null
  }

  export type UserCountAggregateOutputType = {
    first_name: number
    last_name: number
    username: number
    password: number
    token: number
    created_at: number
    updated_at: number
    role_id: number
    email: number
    division_id: number
    user_id: number
    profile_picture: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    role_id?: true
    division_id?: true
    user_id?: true
  }

  export type UserSumAggregateInputType = {
    role_id?: true
    division_id?: true
    user_id?: true
  }

  export type UserMinAggregateInputType = {
    first_name?: true
    last_name?: true
    username?: true
    password?: true
    token?: true
    created_at?: true
    updated_at?: true
    role_id?: true
    email?: true
    division_id?: true
    user_id?: true
    profile_picture?: true
  }

  export type UserMaxAggregateInputType = {
    first_name?: true
    last_name?: true
    username?: true
    password?: true
    token?: true
    created_at?: true
    updated_at?: true
    role_id?: true
    email?: true
    division_id?: true
    user_id?: true
    profile_picture?: true
  }

  export type UserCountAggregateInputType = {
    first_name?: true
    last_name?: true
    username?: true
    password?: true
    token?: true
    created_at?: true
    updated_at?: true
    role_id?: true
    email?: true
    division_id?: true
    user_id?: true
    profile_picture?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    first_name: string | null
    last_name: string | null
    username: string | null
    password: string
    token: string | null
    created_at: Date
    updated_at: Date | null
    role_id: number
    email: string
    division_id: number | null
    user_id: number
    profile_picture: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    first_name?: boolean
    last_name?: boolean
    username?: boolean
    password?: boolean
    token?: boolean
    created_at?: boolean
    updated_at?: boolean
    role_id?: boolean
    email?: boolean
    division_id?: boolean
    user_id?: boolean
    profile_picture?: boolean
    answers?: boolean | User$answersArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    likes?: boolean | User$likesArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    assigned_questions?: boolean | User$assigned_questionsArgs<ExtArgs>
    created_questions?: boolean | User$created_questionsArgs<ExtArgs>
    division?: boolean | User$divisionArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    first_name?: boolean
    last_name?: boolean
    username?: boolean
    password?: boolean
    token?: boolean
    created_at?: boolean
    updated_at?: boolean
    role_id?: boolean
    email?: boolean
    division_id?: boolean
    user_id?: boolean
    profile_picture?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"first_name" | "last_name" | "username" | "password" | "token" | "created_at" | "updated_at" | "role_id" | "email" | "division_id" | "user_id" | "profile_picture", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | User$answersArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    likes?: boolean | User$likesArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    assigned_questions?: boolean | User$assigned_questionsArgs<ExtArgs>
    created_questions?: boolean | User$created_questionsArgs<ExtArgs>
    division?: boolean | User$divisionArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      answers: Prisma.$AnswerPayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      likes: Prisma.$LikePayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
      assigned_questions: Prisma.$QuestionPayload<ExtArgs>[]
      created_questions: Prisma.$QuestionPayload<ExtArgs>[]
      division: Prisma.$DivisionPayload<ExtArgs> | null
      role: Prisma.$RolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      first_name: string | null
      last_name: string | null
      username: string | null
      password: string
      token: string | null
      created_at: Date
      updated_at: Date | null
      role_id: number
      email: string
      division_id: number | null
      user_id: number
      profile_picture: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `first_name`
     * const userWithFirst_nameOnly = await prisma.user.findMany({ select: { first_name: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    answers<T extends User$answersArgs<ExtArgs> = {}>(args?: Subset<T, User$answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends User$commentsArgs<ExtArgs> = {}>(args?: Subset<T, User$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likes<T extends User$likesArgs<ExtArgs> = {}>(args?: Subset<T, User$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assigned_questions<T extends User$assigned_questionsArgs<ExtArgs> = {}>(args?: Subset<T, User$assigned_questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    created_questions<T extends User$created_questionsArgs<ExtArgs> = {}>(args?: Subset<T, User$created_questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    division<T extends User$divisionArgs<ExtArgs> = {}>(args?: Subset<T, User$divisionArgs<ExtArgs>>): Prisma__DivisionClient<$Result.GetResult<Prisma.$DivisionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly first_name: FieldRef<"User", 'String'>
    readonly last_name: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly token: FieldRef<"User", 'String'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
    readonly role_id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly division_id: FieldRef<"User", 'Int'>
    readonly user_id: FieldRef<"User", 'Int'>
    readonly profile_picture: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.answers
   */
  export type User$answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    where?: AnswerWhereInput
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    cursor?: AnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * User.comments
   */
  export type User$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * User.likes
   */
  export type User$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    where?: LikeWhereInput
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    cursor?: LikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User.assigned_questions
   */
  export type User$assigned_questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    cursor?: QuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * User.created_questions
   */
  export type User$created_questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    cursor?: QuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * User.division
   */
  export type User$divisionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Division
     */
    select?: DivisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Division
     */
    omit?: DivisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DivisionInclude<ExtArgs> | null
    where?: DivisionWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleAvgAggregateOutputType = {
    id: number | null
  }

  export type RoleSumAggregateOutputType = {
    id: number | null
  }

  export type RoleMinAggregateOutputType = {
    id: number | null
    name: string | null
    status: boolean | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type RoleMaxAggregateOutputType = {
    id: number | null
    name: string | null
    status: boolean | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    name: number
    status: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type RoleAvgAggregateInputType = {
    id?: true
  }

  export type RoleSumAggregateInputType = {
    id?: true
  }

  export type RoleMinAggregateInputType = {
    id?: true
    name?: true
    status?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    name?: true
    status?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    name?: true
    status?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _avg?: RoleAvgAggregateInputType
    _sum?: RoleSumAggregateInputType
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: number
    name: string
    status: boolean
    created_at: Date
    updated_at: Date | null
    deleted_at: Date | null
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>



  export type RoleSelectScalar = {
    id?: boolean
    name?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "status" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      status: boolean
      created_at: Date
      updated_at: Date | null
      deleted_at: Date | null
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Role$usersArgs<ExtArgs> = {}>(args?: Subset<T, Role$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Role model
   */
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'Int'>
    readonly name: FieldRef<"Role", 'String'>
    readonly status: FieldRef<"Role", 'Boolean'>
    readonly created_at: FieldRef<"Role", 'DateTime'>
    readonly updated_at: FieldRef<"Role", 'DateTime'>
    readonly deleted_at: FieldRef<"Role", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role.users
   */
  export type Role$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model Division
   */

  export type AggregateDivision = {
    _count: DivisionCountAggregateOutputType | null
    _avg: DivisionAvgAggregateOutputType | null
    _sum: DivisionSumAggregateOutputType | null
    _min: DivisionMinAggregateOutputType | null
    _max: DivisionMaxAggregateOutputType | null
  }

  export type DivisionAvgAggregateOutputType = {
    id: number | null
  }

  export type DivisionSumAggregateOutputType = {
    id: number | null
  }

  export type DivisionMinAggregateOutputType = {
    id: number | null
    division_name: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type DivisionMaxAggregateOutputType = {
    id: number | null
    division_name: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type DivisionCountAggregateOutputType = {
    id: number
    division_name: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type DivisionAvgAggregateInputType = {
    id?: true
  }

  export type DivisionSumAggregateInputType = {
    id?: true
  }

  export type DivisionMinAggregateInputType = {
    id?: true
    division_name?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type DivisionMaxAggregateInputType = {
    id?: true
    division_name?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type DivisionCountAggregateInputType = {
    id?: true
    division_name?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type DivisionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Division to aggregate.
     */
    where?: DivisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Divisions to fetch.
     */
    orderBy?: DivisionOrderByWithRelationInput | DivisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DivisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Divisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Divisions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Divisions
    **/
    _count?: true | DivisionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DivisionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DivisionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DivisionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DivisionMaxAggregateInputType
  }

  export type GetDivisionAggregateType<T extends DivisionAggregateArgs> = {
        [P in keyof T & keyof AggregateDivision]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDivision[P]>
      : GetScalarType<T[P], AggregateDivision[P]>
  }




  export type DivisionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DivisionWhereInput
    orderBy?: DivisionOrderByWithAggregationInput | DivisionOrderByWithAggregationInput[]
    by: DivisionScalarFieldEnum[] | DivisionScalarFieldEnum
    having?: DivisionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DivisionCountAggregateInputType | true
    _avg?: DivisionAvgAggregateInputType
    _sum?: DivisionSumAggregateInputType
    _min?: DivisionMinAggregateInputType
    _max?: DivisionMaxAggregateInputType
  }

  export type DivisionGroupByOutputType = {
    id: number
    division_name: string
    created_at: Date
    updated_at: Date | null
    deleted_at: Date | null
    _count: DivisionCountAggregateOutputType | null
    _avg: DivisionAvgAggregateOutputType | null
    _sum: DivisionSumAggregateOutputType | null
    _min: DivisionMinAggregateOutputType | null
    _max: DivisionMaxAggregateOutputType | null
  }

  type GetDivisionGroupByPayload<T extends DivisionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DivisionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DivisionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DivisionGroupByOutputType[P]>
            : GetScalarType<T[P], DivisionGroupByOutputType[P]>
        }
      >
    >


  export type DivisionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    division_name?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    assigned_questions?: boolean | Division$assigned_questionsArgs<ExtArgs>
    users?: boolean | Division$usersArgs<ExtArgs>
    _count?: boolean | DivisionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["division"]>



  export type DivisionSelectScalar = {
    id?: boolean
    division_name?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type DivisionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "division_name" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["division"]>
  export type DivisionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assigned_questions?: boolean | Division$assigned_questionsArgs<ExtArgs>
    users?: boolean | Division$usersArgs<ExtArgs>
    _count?: boolean | DivisionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $DivisionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Division"
    objects: {
      assigned_questions: Prisma.$QuestionPayload<ExtArgs>[]
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      division_name: string
      created_at: Date
      updated_at: Date | null
      deleted_at: Date | null
    }, ExtArgs["result"]["division"]>
    composites: {}
  }

  type DivisionGetPayload<S extends boolean | null | undefined | DivisionDefaultArgs> = $Result.GetResult<Prisma.$DivisionPayload, S>

  type DivisionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DivisionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DivisionCountAggregateInputType | true
    }

  export interface DivisionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Division'], meta: { name: 'Division' } }
    /**
     * Find zero or one Division that matches the filter.
     * @param {DivisionFindUniqueArgs} args - Arguments to find a Division
     * @example
     * // Get one Division
     * const division = await prisma.division.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DivisionFindUniqueArgs>(args: SelectSubset<T, DivisionFindUniqueArgs<ExtArgs>>): Prisma__DivisionClient<$Result.GetResult<Prisma.$DivisionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Division that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DivisionFindUniqueOrThrowArgs} args - Arguments to find a Division
     * @example
     * // Get one Division
     * const division = await prisma.division.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DivisionFindUniqueOrThrowArgs>(args: SelectSubset<T, DivisionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DivisionClient<$Result.GetResult<Prisma.$DivisionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Division that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DivisionFindFirstArgs} args - Arguments to find a Division
     * @example
     * // Get one Division
     * const division = await prisma.division.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DivisionFindFirstArgs>(args?: SelectSubset<T, DivisionFindFirstArgs<ExtArgs>>): Prisma__DivisionClient<$Result.GetResult<Prisma.$DivisionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Division that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DivisionFindFirstOrThrowArgs} args - Arguments to find a Division
     * @example
     * // Get one Division
     * const division = await prisma.division.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DivisionFindFirstOrThrowArgs>(args?: SelectSubset<T, DivisionFindFirstOrThrowArgs<ExtArgs>>): Prisma__DivisionClient<$Result.GetResult<Prisma.$DivisionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Divisions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DivisionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Divisions
     * const divisions = await prisma.division.findMany()
     * 
     * // Get first 10 Divisions
     * const divisions = await prisma.division.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const divisionWithIdOnly = await prisma.division.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DivisionFindManyArgs>(args?: SelectSubset<T, DivisionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DivisionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Division.
     * @param {DivisionCreateArgs} args - Arguments to create a Division.
     * @example
     * // Create one Division
     * const Division = await prisma.division.create({
     *   data: {
     *     // ... data to create a Division
     *   }
     * })
     * 
     */
    create<T extends DivisionCreateArgs>(args: SelectSubset<T, DivisionCreateArgs<ExtArgs>>): Prisma__DivisionClient<$Result.GetResult<Prisma.$DivisionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Divisions.
     * @param {DivisionCreateManyArgs} args - Arguments to create many Divisions.
     * @example
     * // Create many Divisions
     * const division = await prisma.division.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DivisionCreateManyArgs>(args?: SelectSubset<T, DivisionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Division.
     * @param {DivisionDeleteArgs} args - Arguments to delete one Division.
     * @example
     * // Delete one Division
     * const Division = await prisma.division.delete({
     *   where: {
     *     // ... filter to delete one Division
     *   }
     * })
     * 
     */
    delete<T extends DivisionDeleteArgs>(args: SelectSubset<T, DivisionDeleteArgs<ExtArgs>>): Prisma__DivisionClient<$Result.GetResult<Prisma.$DivisionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Division.
     * @param {DivisionUpdateArgs} args - Arguments to update one Division.
     * @example
     * // Update one Division
     * const division = await prisma.division.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DivisionUpdateArgs>(args: SelectSubset<T, DivisionUpdateArgs<ExtArgs>>): Prisma__DivisionClient<$Result.GetResult<Prisma.$DivisionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Divisions.
     * @param {DivisionDeleteManyArgs} args - Arguments to filter Divisions to delete.
     * @example
     * // Delete a few Divisions
     * const { count } = await prisma.division.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DivisionDeleteManyArgs>(args?: SelectSubset<T, DivisionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Divisions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DivisionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Divisions
     * const division = await prisma.division.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DivisionUpdateManyArgs>(args: SelectSubset<T, DivisionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Division.
     * @param {DivisionUpsertArgs} args - Arguments to update or create a Division.
     * @example
     * // Update or create a Division
     * const division = await prisma.division.upsert({
     *   create: {
     *     // ... data to create a Division
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Division we want to update
     *   }
     * })
     */
    upsert<T extends DivisionUpsertArgs>(args: SelectSubset<T, DivisionUpsertArgs<ExtArgs>>): Prisma__DivisionClient<$Result.GetResult<Prisma.$DivisionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Divisions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DivisionCountArgs} args - Arguments to filter Divisions to count.
     * @example
     * // Count the number of Divisions
     * const count = await prisma.division.count({
     *   where: {
     *     // ... the filter for the Divisions we want to count
     *   }
     * })
    **/
    count<T extends DivisionCountArgs>(
      args?: Subset<T, DivisionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DivisionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Division.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DivisionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DivisionAggregateArgs>(args: Subset<T, DivisionAggregateArgs>): Prisma.PrismaPromise<GetDivisionAggregateType<T>>

    /**
     * Group by Division.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DivisionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DivisionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DivisionGroupByArgs['orderBy'] }
        : { orderBy?: DivisionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DivisionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDivisionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Division model
   */
  readonly fields: DivisionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Division.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DivisionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assigned_questions<T extends Division$assigned_questionsArgs<ExtArgs> = {}>(args?: Subset<T, Division$assigned_questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends Division$usersArgs<ExtArgs> = {}>(args?: Subset<T, Division$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Division model
   */
  interface DivisionFieldRefs {
    readonly id: FieldRef<"Division", 'Int'>
    readonly division_name: FieldRef<"Division", 'String'>
    readonly created_at: FieldRef<"Division", 'DateTime'>
    readonly updated_at: FieldRef<"Division", 'DateTime'>
    readonly deleted_at: FieldRef<"Division", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Division findUnique
   */
  export type DivisionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Division
     */
    select?: DivisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Division
     */
    omit?: DivisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DivisionInclude<ExtArgs> | null
    /**
     * Filter, which Division to fetch.
     */
    where: DivisionWhereUniqueInput
  }

  /**
   * Division findUniqueOrThrow
   */
  export type DivisionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Division
     */
    select?: DivisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Division
     */
    omit?: DivisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DivisionInclude<ExtArgs> | null
    /**
     * Filter, which Division to fetch.
     */
    where: DivisionWhereUniqueInput
  }

  /**
   * Division findFirst
   */
  export type DivisionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Division
     */
    select?: DivisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Division
     */
    omit?: DivisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DivisionInclude<ExtArgs> | null
    /**
     * Filter, which Division to fetch.
     */
    where?: DivisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Divisions to fetch.
     */
    orderBy?: DivisionOrderByWithRelationInput | DivisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Divisions.
     */
    cursor?: DivisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Divisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Divisions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Divisions.
     */
    distinct?: DivisionScalarFieldEnum | DivisionScalarFieldEnum[]
  }

  /**
   * Division findFirstOrThrow
   */
  export type DivisionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Division
     */
    select?: DivisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Division
     */
    omit?: DivisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DivisionInclude<ExtArgs> | null
    /**
     * Filter, which Division to fetch.
     */
    where?: DivisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Divisions to fetch.
     */
    orderBy?: DivisionOrderByWithRelationInput | DivisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Divisions.
     */
    cursor?: DivisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Divisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Divisions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Divisions.
     */
    distinct?: DivisionScalarFieldEnum | DivisionScalarFieldEnum[]
  }

  /**
   * Division findMany
   */
  export type DivisionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Division
     */
    select?: DivisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Division
     */
    omit?: DivisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DivisionInclude<ExtArgs> | null
    /**
     * Filter, which Divisions to fetch.
     */
    where?: DivisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Divisions to fetch.
     */
    orderBy?: DivisionOrderByWithRelationInput | DivisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Divisions.
     */
    cursor?: DivisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Divisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Divisions.
     */
    skip?: number
    distinct?: DivisionScalarFieldEnum | DivisionScalarFieldEnum[]
  }

  /**
   * Division create
   */
  export type DivisionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Division
     */
    select?: DivisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Division
     */
    omit?: DivisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DivisionInclude<ExtArgs> | null
    /**
     * The data needed to create a Division.
     */
    data: XOR<DivisionCreateInput, DivisionUncheckedCreateInput>
  }

  /**
   * Division createMany
   */
  export type DivisionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Divisions.
     */
    data: DivisionCreateManyInput | DivisionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Division update
   */
  export type DivisionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Division
     */
    select?: DivisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Division
     */
    omit?: DivisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DivisionInclude<ExtArgs> | null
    /**
     * The data needed to update a Division.
     */
    data: XOR<DivisionUpdateInput, DivisionUncheckedUpdateInput>
    /**
     * Choose, which Division to update.
     */
    where: DivisionWhereUniqueInput
  }

  /**
   * Division updateMany
   */
  export type DivisionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Divisions.
     */
    data: XOR<DivisionUpdateManyMutationInput, DivisionUncheckedUpdateManyInput>
    /**
     * Filter which Divisions to update
     */
    where?: DivisionWhereInput
    /**
     * Limit how many Divisions to update.
     */
    limit?: number
  }

  /**
   * Division upsert
   */
  export type DivisionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Division
     */
    select?: DivisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Division
     */
    omit?: DivisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DivisionInclude<ExtArgs> | null
    /**
     * The filter to search for the Division to update in case it exists.
     */
    where: DivisionWhereUniqueInput
    /**
     * In case the Division found by the `where` argument doesn't exist, create a new Division with this data.
     */
    create: XOR<DivisionCreateInput, DivisionUncheckedCreateInput>
    /**
     * In case the Division was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DivisionUpdateInput, DivisionUncheckedUpdateInput>
  }

  /**
   * Division delete
   */
  export type DivisionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Division
     */
    select?: DivisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Division
     */
    omit?: DivisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DivisionInclude<ExtArgs> | null
    /**
     * Filter which Division to delete.
     */
    where: DivisionWhereUniqueInput
  }

  /**
   * Division deleteMany
   */
  export type DivisionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Divisions to delete
     */
    where?: DivisionWhereInput
    /**
     * Limit how many Divisions to delete.
     */
    limit?: number
  }

  /**
   * Division.assigned_questions
   */
  export type Division$assigned_questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    cursor?: QuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Division.users
   */
  export type Division$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Division without action
   */
  export type DivisionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Division
     */
    select?: DivisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Division
     */
    omit?: DivisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DivisionInclude<ExtArgs> | null
  }


  /**
   * Model Question
   */

  export type AggregateQuestion = {
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  export type QuestionAvgAggregateOutputType = {
    question_id: number | null
    collaborator_id: number | null
    collaborator_division_id: number | null
    creator_id: number | null
  }

  export type QuestionSumAggregateOutputType = {
    question_id: number | null
    collaborator_id: number | null
    collaborator_division_id: number | null
    creator_id: number | null
  }

  export type QuestionMinAggregateOutputType = {
    question_id: number | null
    title: string | null
    content: string | null
    status: $Enums.QuestionStatus | null
    created_at: Date | null
    due_date: Date | null
    is_published: boolean | null
    updated_at: Date | null
    deleted_at: Date | null
    collaborator_id: number | null
    collaborator_division_id: number | null
    collaborator_type: $Enums.CollaboratorType | null
    creator_id: number | null
  }

  export type QuestionMaxAggregateOutputType = {
    question_id: number | null
    title: string | null
    content: string | null
    status: $Enums.QuestionStatus | null
    created_at: Date | null
    due_date: Date | null
    is_published: boolean | null
    updated_at: Date | null
    deleted_at: Date | null
    collaborator_id: number | null
    collaborator_division_id: number | null
    collaborator_type: $Enums.CollaboratorType | null
    creator_id: number | null
  }

  export type QuestionCountAggregateOutputType = {
    question_id: number
    title: number
    content: number
    status: number
    created_at: number
    due_date: number
    is_published: number
    updated_at: number
    deleted_at: number
    collaborator_id: number
    collaborator_division_id: number
    collaborator_type: number
    creator_id: number
    _all: number
  }


  export type QuestionAvgAggregateInputType = {
    question_id?: true
    collaborator_id?: true
    collaborator_division_id?: true
    creator_id?: true
  }

  export type QuestionSumAggregateInputType = {
    question_id?: true
    collaborator_id?: true
    collaborator_division_id?: true
    creator_id?: true
  }

  export type QuestionMinAggregateInputType = {
    question_id?: true
    title?: true
    content?: true
    status?: true
    created_at?: true
    due_date?: true
    is_published?: true
    updated_at?: true
    deleted_at?: true
    collaborator_id?: true
    collaborator_division_id?: true
    collaborator_type?: true
    creator_id?: true
  }

  export type QuestionMaxAggregateInputType = {
    question_id?: true
    title?: true
    content?: true
    status?: true
    created_at?: true
    due_date?: true
    is_published?: true
    updated_at?: true
    deleted_at?: true
    collaborator_id?: true
    collaborator_division_id?: true
    collaborator_type?: true
    creator_id?: true
  }

  export type QuestionCountAggregateInputType = {
    question_id?: true
    title?: true
    content?: true
    status?: true
    created_at?: true
    due_date?: true
    is_published?: true
    updated_at?: true
    deleted_at?: true
    collaborator_id?: true
    collaborator_division_id?: true
    collaborator_type?: true
    creator_id?: true
    _all?: true
  }

  export type QuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Question to aggregate.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questions
    **/
    _count?: true | QuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionMaxAggregateInputType
  }

  export type GetQuestionAggregateType<T extends QuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestion[P]>
      : GetScalarType<T[P], AggregateQuestion[P]>
  }




  export type QuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithAggregationInput | QuestionOrderByWithAggregationInput[]
    by: QuestionScalarFieldEnum[] | QuestionScalarFieldEnum
    having?: QuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionCountAggregateInputType | true
    _avg?: QuestionAvgAggregateInputType
    _sum?: QuestionSumAggregateInputType
    _min?: QuestionMinAggregateInputType
    _max?: QuestionMaxAggregateInputType
  }

  export type QuestionGroupByOutputType = {
    question_id: number
    title: string
    content: string
    status: $Enums.QuestionStatus
    created_at: Date
    due_date: Date | null
    is_published: boolean
    updated_at: Date | null
    deleted_at: Date | null
    collaborator_id: number | null
    collaborator_division_id: number | null
    collaborator_type: $Enums.CollaboratorType
    creator_id: number
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  type GetQuestionGroupByPayload<T extends QuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionGroupByOutputType[P]>
        }
      >
    >


  export type QuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    question_id?: boolean
    title?: boolean
    content?: boolean
    status?: boolean
    created_at?: boolean
    due_date?: boolean
    is_published?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    collaborator_id?: boolean
    collaborator_division_id?: boolean
    collaborator_type?: boolean
    creator_id?: boolean
    answers?: boolean | Question$answersArgs<ExtArgs>
    comments?: boolean | Question$commentsArgs<ExtArgs>
    likes?: boolean | Question$likesArgs<ExtArgs>
    notifications?: boolean | Question$notificationsArgs<ExtArgs>
    collaborator_division?: boolean | Question$collaborator_divisionArgs<ExtArgs>
    collaborator?: boolean | Question$collaboratorArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    tags?: boolean | Question$tagsArgs<ExtArgs>
    attachment?: boolean | Question$attachmentArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>



  export type QuestionSelectScalar = {
    question_id?: boolean
    title?: boolean
    content?: boolean
    status?: boolean
    created_at?: boolean
    due_date?: boolean
    is_published?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    collaborator_id?: boolean
    collaborator_division_id?: boolean
    collaborator_type?: boolean
    creator_id?: boolean
  }

  export type QuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"question_id" | "title" | "content" | "status" | "created_at" | "due_date" | "is_published" | "updated_at" | "deleted_at" | "collaborator_id" | "collaborator_division_id" | "collaborator_type" | "creator_id", ExtArgs["result"]["question"]>
  export type QuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | Question$answersArgs<ExtArgs>
    comments?: boolean | Question$commentsArgs<ExtArgs>
    likes?: boolean | Question$likesArgs<ExtArgs>
    notifications?: boolean | Question$notificationsArgs<ExtArgs>
    collaborator_division?: boolean | Question$collaborator_divisionArgs<ExtArgs>
    collaborator?: boolean | Question$collaboratorArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    tags?: boolean | Question$tagsArgs<ExtArgs>
    attachment?: boolean | Question$attachmentArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $QuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Question"
    objects: {
      answers: Prisma.$AnswerPayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      likes: Prisma.$LikePayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
      collaborator_division: Prisma.$DivisionPayload<ExtArgs> | null
      collaborator: Prisma.$UserPayload<ExtArgs> | null
      creator: Prisma.$UserPayload<ExtArgs>
      tags: Prisma.$TagsOnQuestionsPayload<ExtArgs>[]
      attachment: Prisma.$AttachmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      question_id: number
      title: string
      content: string
      status: $Enums.QuestionStatus
      created_at: Date
      due_date: Date | null
      is_published: boolean
      updated_at: Date | null
      deleted_at: Date | null
      collaborator_id: number | null
      collaborator_division_id: number | null
      collaborator_type: $Enums.CollaboratorType
      creator_id: number
    }, ExtArgs["result"]["question"]>
    composites: {}
  }

  type QuestionGetPayload<S extends boolean | null | undefined | QuestionDefaultArgs> = $Result.GetResult<Prisma.$QuestionPayload, S>

  type QuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionCountAggregateInputType | true
    }

  export interface QuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Question'], meta: { name: 'Question' } }
    /**
     * Find zero or one Question that matches the filter.
     * @param {QuestionFindUniqueArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionFindUniqueArgs>(args: SelectSubset<T, QuestionFindUniqueArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Question that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionFindUniqueOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionFindFirstArgs>(args?: SelectSubset<T, QuestionFindFirstArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.question.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.question.findMany({ take: 10 })
     * 
     * // Only select the `question_id`
     * const questionWithQuestion_idOnly = await prisma.question.findMany({ select: { question_id: true } })
     * 
     */
    findMany<T extends QuestionFindManyArgs>(args?: SelectSubset<T, QuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Question.
     * @param {QuestionCreateArgs} args - Arguments to create a Question.
     * @example
     * // Create one Question
     * const Question = await prisma.question.create({
     *   data: {
     *     // ... data to create a Question
     *   }
     * })
     * 
     */
    create<T extends QuestionCreateArgs>(args: SelectSubset<T, QuestionCreateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Questions.
     * @param {QuestionCreateManyArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionCreateManyArgs>(args?: SelectSubset<T, QuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Question.
     * @param {QuestionDeleteArgs} args - Arguments to delete one Question.
     * @example
     * // Delete one Question
     * const Question = await prisma.question.delete({
     *   where: {
     *     // ... filter to delete one Question
     *   }
     * })
     * 
     */
    delete<T extends QuestionDeleteArgs>(args: SelectSubset<T, QuestionDeleteArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Question.
     * @param {QuestionUpdateArgs} args - Arguments to update one Question.
     * @example
     * // Update one Question
     * const question = await prisma.question.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionUpdateArgs>(args: SelectSubset<T, QuestionUpdateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Questions.
     * @param {QuestionDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.question.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionDeleteManyArgs>(args?: SelectSubset<T, QuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionUpdateManyArgs>(args: SelectSubset<T, QuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Question.
     * @param {QuestionUpsertArgs} args - Arguments to update or create a Question.
     * @example
     * // Update or create a Question
     * const question = await prisma.question.upsert({
     *   create: {
     *     // ... data to create a Question
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Question we want to update
     *   }
     * })
     */
    upsert<T extends QuestionUpsertArgs>(args: SelectSubset<T, QuestionUpsertArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.question.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends QuestionCountArgs>(
      args?: Subset<T, QuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuestionAggregateArgs>(args: Subset<T, QuestionAggregateArgs>): Prisma.PrismaPromise<GetQuestionAggregateType<T>>

    /**
     * Group by Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionGroupByArgs['orderBy'] }
        : { orderBy?: QuestionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Question model
   */
  readonly fields: QuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Question.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    answers<T extends Question$answersArgs<ExtArgs> = {}>(args?: Subset<T, Question$answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends Question$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Question$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likes<T extends Question$likesArgs<ExtArgs> = {}>(args?: Subset<T, Question$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends Question$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, Question$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    collaborator_division<T extends Question$collaborator_divisionArgs<ExtArgs> = {}>(args?: Subset<T, Question$collaborator_divisionArgs<ExtArgs>>): Prisma__DivisionClient<$Result.GetResult<Prisma.$DivisionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    collaborator<T extends Question$collaboratorArgs<ExtArgs> = {}>(args?: Subset<T, Question$collaboratorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tags<T extends Question$tagsArgs<ExtArgs> = {}>(args?: Subset<T, Question$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagsOnQuestionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    attachment<T extends Question$attachmentArgs<ExtArgs> = {}>(args?: Subset<T, Question$attachmentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Question model
   */
  interface QuestionFieldRefs {
    readonly question_id: FieldRef<"Question", 'Int'>
    readonly title: FieldRef<"Question", 'String'>
    readonly content: FieldRef<"Question", 'String'>
    readonly status: FieldRef<"Question", 'QuestionStatus'>
    readonly created_at: FieldRef<"Question", 'DateTime'>
    readonly due_date: FieldRef<"Question", 'DateTime'>
    readonly is_published: FieldRef<"Question", 'Boolean'>
    readonly updated_at: FieldRef<"Question", 'DateTime'>
    readonly deleted_at: FieldRef<"Question", 'DateTime'>
    readonly collaborator_id: FieldRef<"Question", 'Int'>
    readonly collaborator_division_id: FieldRef<"Question", 'Int'>
    readonly collaborator_type: FieldRef<"Question", 'CollaboratorType'>
    readonly creator_id: FieldRef<"Question", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Question findUnique
   */
  export type QuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findUniqueOrThrow
   */
  export type QuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findFirst
   */
  export type QuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findFirstOrThrow
   */
  export type QuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findMany
   */
  export type QuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question create
   */
  export type QuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a Question.
     */
    data: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
  }

  /**
   * Question createMany
   */
  export type QuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Question update
   */
  export type QuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a Question.
     */
    data: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
    /**
     * Choose, which Question to update.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question updateMany
   */
  export type QuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
  }

  /**
   * Question upsert
   */
  export type QuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the Question to update in case it exists.
     */
    where: QuestionWhereUniqueInput
    /**
     * In case the Question found by the `where` argument doesn't exist, create a new Question with this data.
     */
    create: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
    /**
     * In case the Question was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
  }

  /**
   * Question delete
   */
  export type QuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter which Question to delete.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question deleteMany
   */
  export type QuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questions to delete
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to delete.
     */
    limit?: number
  }

  /**
   * Question.answers
   */
  export type Question$answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    where?: AnswerWhereInput
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    cursor?: AnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Question.comments
   */
  export type Question$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Question.likes
   */
  export type Question$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    where?: LikeWhereInput
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    cursor?: LikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * Question.notifications
   */
  export type Question$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Question.collaborator_division
   */
  export type Question$collaborator_divisionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Division
     */
    select?: DivisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Division
     */
    omit?: DivisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DivisionInclude<ExtArgs> | null
    where?: DivisionWhereInput
  }

  /**
   * Question.collaborator
   */
  export type Question$collaboratorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Question.tags
   */
  export type Question$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsOnQuestions
     */
    select?: TagsOnQuestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TagsOnQuestions
     */
    omit?: TagsOnQuestionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsOnQuestionsInclude<ExtArgs> | null
    where?: TagsOnQuestionsWhereInput
    orderBy?: TagsOnQuestionsOrderByWithRelationInput | TagsOnQuestionsOrderByWithRelationInput[]
    cursor?: TagsOnQuestionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TagsOnQuestionsScalarFieldEnum | TagsOnQuestionsScalarFieldEnum[]
  }

  /**
   * Question.attachment
   */
  export type Question$attachmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    where?: AttachmentWhereInput
    orderBy?: AttachmentOrderByWithRelationInput | AttachmentOrderByWithRelationInput[]
    cursor?: AttachmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttachmentScalarFieldEnum | AttachmentScalarFieldEnum[]
  }

  /**
   * Question without action
   */
  export type QuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
  }


  /**
   * Model Attachment
   */

  export type AggregateAttachment = {
    _count: AttachmentCountAggregateOutputType | null
    _avg: AttachmentAvgAggregateOutputType | null
    _sum: AttachmentSumAggregateOutputType | null
    _min: AttachmentMinAggregateOutputType | null
    _max: AttachmentMaxAggregateOutputType | null
  }

  export type AttachmentAvgAggregateOutputType = {
    attachment_id: number | null
    question_id: number | null
    answer_id: number | null
    comment_id: number | null
  }

  export type AttachmentSumAggregateOutputType = {
    attachment_id: number | null
    question_id: number | null
    answer_id: number | null
    comment_id: number | null
  }

  export type AttachmentMinAggregateOutputType = {
    attachment_id: number | null
    file_name: string | null
    file_path: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    question_id: number | null
    answer_id: number | null
    comment_id: number | null
  }

  export type AttachmentMaxAggregateOutputType = {
    attachment_id: number | null
    file_name: string | null
    file_path: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    question_id: number | null
    answer_id: number | null
    comment_id: number | null
  }

  export type AttachmentCountAggregateOutputType = {
    attachment_id: number
    file_name: number
    file_path: number
    created_at: number
    updated_at: number
    deleted_at: number
    question_id: number
    answer_id: number
    comment_id: number
    _all: number
  }


  export type AttachmentAvgAggregateInputType = {
    attachment_id?: true
    question_id?: true
    answer_id?: true
    comment_id?: true
  }

  export type AttachmentSumAggregateInputType = {
    attachment_id?: true
    question_id?: true
    answer_id?: true
    comment_id?: true
  }

  export type AttachmentMinAggregateInputType = {
    attachment_id?: true
    file_name?: true
    file_path?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    question_id?: true
    answer_id?: true
    comment_id?: true
  }

  export type AttachmentMaxAggregateInputType = {
    attachment_id?: true
    file_name?: true
    file_path?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    question_id?: true
    answer_id?: true
    comment_id?: true
  }

  export type AttachmentCountAggregateInputType = {
    attachment_id?: true
    file_name?: true
    file_path?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    question_id?: true
    answer_id?: true
    comment_id?: true
    _all?: true
  }

  export type AttachmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attachment to aggregate.
     */
    where?: AttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attachments to fetch.
     */
    orderBy?: AttachmentOrderByWithRelationInput | AttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attachments
    **/
    _count?: true | AttachmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttachmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttachmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttachmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttachmentMaxAggregateInputType
  }

  export type GetAttachmentAggregateType<T extends AttachmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAttachment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttachment[P]>
      : GetScalarType<T[P], AggregateAttachment[P]>
  }




  export type AttachmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttachmentWhereInput
    orderBy?: AttachmentOrderByWithAggregationInput | AttachmentOrderByWithAggregationInput[]
    by: AttachmentScalarFieldEnum[] | AttachmentScalarFieldEnum
    having?: AttachmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttachmentCountAggregateInputType | true
    _avg?: AttachmentAvgAggregateInputType
    _sum?: AttachmentSumAggregateInputType
    _min?: AttachmentMinAggregateInputType
    _max?: AttachmentMaxAggregateInputType
  }

  export type AttachmentGroupByOutputType = {
    attachment_id: number
    file_name: string
    file_path: string
    created_at: Date
    updated_at: Date | null
    deleted_at: Date | null
    question_id: number | null
    answer_id: number | null
    comment_id: number | null
    _count: AttachmentCountAggregateOutputType | null
    _avg: AttachmentAvgAggregateOutputType | null
    _sum: AttachmentSumAggregateOutputType | null
    _min: AttachmentMinAggregateOutputType | null
    _max: AttachmentMaxAggregateOutputType | null
  }

  type GetAttachmentGroupByPayload<T extends AttachmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttachmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttachmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttachmentGroupByOutputType[P]>
            : GetScalarType<T[P], AttachmentGroupByOutputType[P]>
        }
      >
    >


  export type AttachmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    attachment_id?: boolean
    file_name?: boolean
    file_path?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    question_id?: boolean
    answer_id?: boolean
    comment_id?: boolean
    question?: boolean | Attachment$questionArgs<ExtArgs>
    answer?: boolean | Attachment$answerArgs<ExtArgs>
    comment?: boolean | Attachment$commentArgs<ExtArgs>
  }, ExtArgs["result"]["attachment"]>



  export type AttachmentSelectScalar = {
    attachment_id?: boolean
    file_name?: boolean
    file_path?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    question_id?: boolean
    answer_id?: boolean
    comment_id?: boolean
  }

  export type AttachmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"attachment_id" | "file_name" | "file_path" | "created_at" | "updated_at" | "deleted_at" | "question_id" | "answer_id" | "comment_id", ExtArgs["result"]["attachment"]>
  export type AttachmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | Attachment$questionArgs<ExtArgs>
    answer?: boolean | Attachment$answerArgs<ExtArgs>
    comment?: boolean | Attachment$commentArgs<ExtArgs>
  }

  export type $AttachmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attachment"
    objects: {
      question: Prisma.$QuestionPayload<ExtArgs> | null
      answer: Prisma.$AnswerPayload<ExtArgs> | null
      comment: Prisma.$CommentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      attachment_id: number
      file_name: string
      file_path: string
      created_at: Date
      updated_at: Date | null
      deleted_at: Date | null
      question_id: number | null
      answer_id: number | null
      comment_id: number | null
    }, ExtArgs["result"]["attachment"]>
    composites: {}
  }

  type AttachmentGetPayload<S extends boolean | null | undefined | AttachmentDefaultArgs> = $Result.GetResult<Prisma.$AttachmentPayload, S>

  type AttachmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttachmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttachmentCountAggregateInputType | true
    }

  export interface AttachmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attachment'], meta: { name: 'Attachment' } }
    /**
     * Find zero or one Attachment that matches the filter.
     * @param {AttachmentFindUniqueArgs} args - Arguments to find a Attachment
     * @example
     * // Get one Attachment
     * const attachment = await prisma.attachment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttachmentFindUniqueArgs>(args: SelectSubset<T, AttachmentFindUniqueArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Attachment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttachmentFindUniqueOrThrowArgs} args - Arguments to find a Attachment
     * @example
     * // Get one Attachment
     * const attachment = await prisma.attachment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttachmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AttachmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attachment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentFindFirstArgs} args - Arguments to find a Attachment
     * @example
     * // Get one Attachment
     * const attachment = await prisma.attachment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttachmentFindFirstArgs>(args?: SelectSubset<T, AttachmentFindFirstArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attachment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentFindFirstOrThrowArgs} args - Arguments to find a Attachment
     * @example
     * // Get one Attachment
     * const attachment = await prisma.attachment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttachmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AttachmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attachments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attachments
     * const attachments = await prisma.attachment.findMany()
     * 
     * // Get first 10 Attachments
     * const attachments = await prisma.attachment.findMany({ take: 10 })
     * 
     * // Only select the `attachment_id`
     * const attachmentWithAttachment_idOnly = await prisma.attachment.findMany({ select: { attachment_id: true } })
     * 
     */
    findMany<T extends AttachmentFindManyArgs>(args?: SelectSubset<T, AttachmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Attachment.
     * @param {AttachmentCreateArgs} args - Arguments to create a Attachment.
     * @example
     * // Create one Attachment
     * const Attachment = await prisma.attachment.create({
     *   data: {
     *     // ... data to create a Attachment
     *   }
     * })
     * 
     */
    create<T extends AttachmentCreateArgs>(args: SelectSubset<T, AttachmentCreateArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Attachments.
     * @param {AttachmentCreateManyArgs} args - Arguments to create many Attachments.
     * @example
     * // Create many Attachments
     * const attachment = await prisma.attachment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttachmentCreateManyArgs>(args?: SelectSubset<T, AttachmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Attachment.
     * @param {AttachmentDeleteArgs} args - Arguments to delete one Attachment.
     * @example
     * // Delete one Attachment
     * const Attachment = await prisma.attachment.delete({
     *   where: {
     *     // ... filter to delete one Attachment
     *   }
     * })
     * 
     */
    delete<T extends AttachmentDeleteArgs>(args: SelectSubset<T, AttachmentDeleteArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Attachment.
     * @param {AttachmentUpdateArgs} args - Arguments to update one Attachment.
     * @example
     * // Update one Attachment
     * const attachment = await prisma.attachment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttachmentUpdateArgs>(args: SelectSubset<T, AttachmentUpdateArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Attachments.
     * @param {AttachmentDeleteManyArgs} args - Arguments to filter Attachments to delete.
     * @example
     * // Delete a few Attachments
     * const { count } = await prisma.attachment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttachmentDeleteManyArgs>(args?: SelectSubset<T, AttachmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attachments
     * const attachment = await prisma.attachment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttachmentUpdateManyArgs>(args: SelectSubset<T, AttachmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Attachment.
     * @param {AttachmentUpsertArgs} args - Arguments to update or create a Attachment.
     * @example
     * // Update or create a Attachment
     * const attachment = await prisma.attachment.upsert({
     *   create: {
     *     // ... data to create a Attachment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attachment we want to update
     *   }
     * })
     */
    upsert<T extends AttachmentUpsertArgs>(args: SelectSubset<T, AttachmentUpsertArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Attachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentCountArgs} args - Arguments to filter Attachments to count.
     * @example
     * // Count the number of Attachments
     * const count = await prisma.attachment.count({
     *   where: {
     *     // ... the filter for the Attachments we want to count
     *   }
     * })
    **/
    count<T extends AttachmentCountArgs>(
      args?: Subset<T, AttachmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttachmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attachment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AttachmentAggregateArgs>(args: Subset<T, AttachmentAggregateArgs>): Prisma.PrismaPromise<GetAttachmentAggregateType<T>>

    /**
     * Group by Attachment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AttachmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttachmentGroupByArgs['orderBy'] }
        : { orderBy?: AttachmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AttachmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttachmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attachment model
   */
  readonly fields: AttachmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attachment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttachmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    question<T extends Attachment$questionArgs<ExtArgs> = {}>(args?: Subset<T, Attachment$questionArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    answer<T extends Attachment$answerArgs<ExtArgs> = {}>(args?: Subset<T, Attachment$answerArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    comment<T extends Attachment$commentArgs<ExtArgs> = {}>(args?: Subset<T, Attachment$commentArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Attachment model
   */
  interface AttachmentFieldRefs {
    readonly attachment_id: FieldRef<"Attachment", 'Int'>
    readonly file_name: FieldRef<"Attachment", 'String'>
    readonly file_path: FieldRef<"Attachment", 'String'>
    readonly created_at: FieldRef<"Attachment", 'DateTime'>
    readonly updated_at: FieldRef<"Attachment", 'DateTime'>
    readonly deleted_at: FieldRef<"Attachment", 'DateTime'>
    readonly question_id: FieldRef<"Attachment", 'Int'>
    readonly answer_id: FieldRef<"Attachment", 'Int'>
    readonly comment_id: FieldRef<"Attachment", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Attachment findUnique
   */
  export type AttachmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter, which Attachment to fetch.
     */
    where: AttachmentWhereUniqueInput
  }

  /**
   * Attachment findUniqueOrThrow
   */
  export type AttachmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter, which Attachment to fetch.
     */
    where: AttachmentWhereUniqueInput
  }

  /**
   * Attachment findFirst
   */
  export type AttachmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter, which Attachment to fetch.
     */
    where?: AttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attachments to fetch.
     */
    orderBy?: AttachmentOrderByWithRelationInput | AttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attachments.
     */
    cursor?: AttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attachments.
     */
    distinct?: AttachmentScalarFieldEnum | AttachmentScalarFieldEnum[]
  }

  /**
   * Attachment findFirstOrThrow
   */
  export type AttachmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter, which Attachment to fetch.
     */
    where?: AttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attachments to fetch.
     */
    orderBy?: AttachmentOrderByWithRelationInput | AttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attachments.
     */
    cursor?: AttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attachments.
     */
    distinct?: AttachmentScalarFieldEnum | AttachmentScalarFieldEnum[]
  }

  /**
   * Attachment findMany
   */
  export type AttachmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter, which Attachments to fetch.
     */
    where?: AttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attachments to fetch.
     */
    orderBy?: AttachmentOrderByWithRelationInput | AttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attachments.
     */
    cursor?: AttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attachments.
     */
    skip?: number
    distinct?: AttachmentScalarFieldEnum | AttachmentScalarFieldEnum[]
  }

  /**
   * Attachment create
   */
  export type AttachmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Attachment.
     */
    data: XOR<AttachmentCreateInput, AttachmentUncheckedCreateInput>
  }

  /**
   * Attachment createMany
   */
  export type AttachmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attachments.
     */
    data: AttachmentCreateManyInput | AttachmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Attachment update
   */
  export type AttachmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Attachment.
     */
    data: XOR<AttachmentUpdateInput, AttachmentUncheckedUpdateInput>
    /**
     * Choose, which Attachment to update.
     */
    where: AttachmentWhereUniqueInput
  }

  /**
   * Attachment updateMany
   */
  export type AttachmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attachments.
     */
    data: XOR<AttachmentUpdateManyMutationInput, AttachmentUncheckedUpdateManyInput>
    /**
     * Filter which Attachments to update
     */
    where?: AttachmentWhereInput
    /**
     * Limit how many Attachments to update.
     */
    limit?: number
  }

  /**
   * Attachment upsert
   */
  export type AttachmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Attachment to update in case it exists.
     */
    where: AttachmentWhereUniqueInput
    /**
     * In case the Attachment found by the `where` argument doesn't exist, create a new Attachment with this data.
     */
    create: XOR<AttachmentCreateInput, AttachmentUncheckedCreateInput>
    /**
     * In case the Attachment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttachmentUpdateInput, AttachmentUncheckedUpdateInput>
  }

  /**
   * Attachment delete
   */
  export type AttachmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter which Attachment to delete.
     */
    where: AttachmentWhereUniqueInput
  }

  /**
   * Attachment deleteMany
   */
  export type AttachmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attachments to delete
     */
    where?: AttachmentWhereInput
    /**
     * Limit how many Attachments to delete.
     */
    limit?: number
  }

  /**
   * Attachment.question
   */
  export type Attachment$questionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    where?: QuestionWhereInput
  }

  /**
   * Attachment.answer
   */
  export type Attachment$answerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    where?: AnswerWhereInput
  }

  /**
   * Attachment.comment
   */
  export type Attachment$commentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
  }

  /**
   * Attachment without action
   */
  export type AttachmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
  }


  /**
   * Model Answer
   */

  export type AggregateAnswer = {
    _count: AnswerCountAggregateOutputType | null
    _avg: AnswerAvgAggregateOutputType | null
    _sum: AnswerSumAggregateOutputType | null
    _min: AnswerMinAggregateOutputType | null
    _max: AnswerMaxAggregateOutputType | null
  }

  export type AnswerAvgAggregateOutputType = {
    answer_id: number | null
    question_id: number | null
    user_id: number | null
  }

  export type AnswerSumAggregateOutputType = {
    answer_id: number | null
    question_id: number | null
    user_id: number | null
  }

  export type AnswerMinAggregateOutputType = {
    answer_id: number | null
    content: string | null
    is_accepted: boolean | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    question_id: number | null
    user_id: number | null
  }

  export type AnswerMaxAggregateOutputType = {
    answer_id: number | null
    content: string | null
    is_accepted: boolean | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    question_id: number | null
    user_id: number | null
  }

  export type AnswerCountAggregateOutputType = {
    answer_id: number
    content: number
    is_accepted: number
    created_at: number
    updated_at: number
    deleted_at: number
    question_id: number
    user_id: number
    _all: number
  }


  export type AnswerAvgAggregateInputType = {
    answer_id?: true
    question_id?: true
    user_id?: true
  }

  export type AnswerSumAggregateInputType = {
    answer_id?: true
    question_id?: true
    user_id?: true
  }

  export type AnswerMinAggregateInputType = {
    answer_id?: true
    content?: true
    is_accepted?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    question_id?: true
    user_id?: true
  }

  export type AnswerMaxAggregateInputType = {
    answer_id?: true
    content?: true
    is_accepted?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    question_id?: true
    user_id?: true
  }

  export type AnswerCountAggregateInputType = {
    answer_id?: true
    content?: true
    is_accepted?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    question_id?: true
    user_id?: true
    _all?: true
  }

  export type AnswerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Answer to aggregate.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Answers
    **/
    _count?: true | AnswerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnswerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnswerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnswerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnswerMaxAggregateInputType
  }

  export type GetAnswerAggregateType<T extends AnswerAggregateArgs> = {
        [P in keyof T & keyof AggregateAnswer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnswer[P]>
      : GetScalarType<T[P], AggregateAnswer[P]>
  }




  export type AnswerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerWhereInput
    orderBy?: AnswerOrderByWithAggregationInput | AnswerOrderByWithAggregationInput[]
    by: AnswerScalarFieldEnum[] | AnswerScalarFieldEnum
    having?: AnswerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnswerCountAggregateInputType | true
    _avg?: AnswerAvgAggregateInputType
    _sum?: AnswerSumAggregateInputType
    _min?: AnswerMinAggregateInputType
    _max?: AnswerMaxAggregateInputType
  }

  export type AnswerGroupByOutputType = {
    answer_id: number
    content: string
    is_accepted: boolean
    created_at: Date
    updated_at: Date | null
    deleted_at: Date | null
    question_id: number
    user_id: number
    _count: AnswerCountAggregateOutputType | null
    _avg: AnswerAvgAggregateOutputType | null
    _sum: AnswerSumAggregateOutputType | null
    _min: AnswerMinAggregateOutputType | null
    _max: AnswerMaxAggregateOutputType | null
  }

  type GetAnswerGroupByPayload<T extends AnswerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnswerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnswerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnswerGroupByOutputType[P]>
            : GetScalarType<T[P], AnswerGroupByOutputType[P]>
        }
      >
    >


  export type AnswerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    answer_id?: boolean
    content?: boolean
    is_accepted?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    question_id?: boolean
    user_id?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    comments?: boolean | Answer$commentsArgs<ExtArgs>
    likes?: boolean | Answer$likesArgs<ExtArgs>
    notifications?: boolean | Answer$notificationsArgs<ExtArgs>
    attachment?: boolean | Answer$attachmentArgs<ExtArgs>
    _count?: boolean | AnswerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answer"]>



  export type AnswerSelectScalar = {
    answer_id?: boolean
    content?: boolean
    is_accepted?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    question_id?: boolean
    user_id?: boolean
  }

  export type AnswerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"answer_id" | "content" | "is_accepted" | "created_at" | "updated_at" | "deleted_at" | "question_id" | "user_id", ExtArgs["result"]["answer"]>
  export type AnswerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    comments?: boolean | Answer$commentsArgs<ExtArgs>
    likes?: boolean | Answer$likesArgs<ExtArgs>
    notifications?: boolean | Answer$notificationsArgs<ExtArgs>
    attachment?: boolean | Answer$attachmentArgs<ExtArgs>
    _count?: boolean | AnswerCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AnswerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Answer"
    objects: {
      question: Prisma.$QuestionPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      comments: Prisma.$CommentPayload<ExtArgs>[]
      likes: Prisma.$LikePayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
      attachment: Prisma.$AttachmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      answer_id: number
      content: string
      is_accepted: boolean
      created_at: Date
      updated_at: Date | null
      deleted_at: Date | null
      question_id: number
      user_id: number
    }, ExtArgs["result"]["answer"]>
    composites: {}
  }

  type AnswerGetPayload<S extends boolean | null | undefined | AnswerDefaultArgs> = $Result.GetResult<Prisma.$AnswerPayload, S>

  type AnswerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnswerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnswerCountAggregateInputType | true
    }

  export interface AnswerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Answer'], meta: { name: 'Answer' } }
    /**
     * Find zero or one Answer that matches the filter.
     * @param {AnswerFindUniqueArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnswerFindUniqueArgs>(args: SelectSubset<T, AnswerFindUniqueArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Answer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnswerFindUniqueOrThrowArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnswerFindUniqueOrThrowArgs>(args: SelectSubset<T, AnswerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Answer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindFirstArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnswerFindFirstArgs>(args?: SelectSubset<T, AnswerFindFirstArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Answer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindFirstOrThrowArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnswerFindFirstOrThrowArgs>(args?: SelectSubset<T, AnswerFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Answers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Answers
     * const answers = await prisma.answer.findMany()
     * 
     * // Get first 10 Answers
     * const answers = await prisma.answer.findMany({ take: 10 })
     * 
     * // Only select the `answer_id`
     * const answerWithAnswer_idOnly = await prisma.answer.findMany({ select: { answer_id: true } })
     * 
     */
    findMany<T extends AnswerFindManyArgs>(args?: SelectSubset<T, AnswerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Answer.
     * @param {AnswerCreateArgs} args - Arguments to create a Answer.
     * @example
     * // Create one Answer
     * const Answer = await prisma.answer.create({
     *   data: {
     *     // ... data to create a Answer
     *   }
     * })
     * 
     */
    create<T extends AnswerCreateArgs>(args: SelectSubset<T, AnswerCreateArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Answers.
     * @param {AnswerCreateManyArgs} args - Arguments to create many Answers.
     * @example
     * // Create many Answers
     * const answer = await prisma.answer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnswerCreateManyArgs>(args?: SelectSubset<T, AnswerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Answer.
     * @param {AnswerDeleteArgs} args - Arguments to delete one Answer.
     * @example
     * // Delete one Answer
     * const Answer = await prisma.answer.delete({
     *   where: {
     *     // ... filter to delete one Answer
     *   }
     * })
     * 
     */
    delete<T extends AnswerDeleteArgs>(args: SelectSubset<T, AnswerDeleteArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Answer.
     * @param {AnswerUpdateArgs} args - Arguments to update one Answer.
     * @example
     * // Update one Answer
     * const answer = await prisma.answer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnswerUpdateArgs>(args: SelectSubset<T, AnswerUpdateArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Answers.
     * @param {AnswerDeleteManyArgs} args - Arguments to filter Answers to delete.
     * @example
     * // Delete a few Answers
     * const { count } = await prisma.answer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnswerDeleteManyArgs>(args?: SelectSubset<T, AnswerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Answers
     * const answer = await prisma.answer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnswerUpdateManyArgs>(args: SelectSubset<T, AnswerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Answer.
     * @param {AnswerUpsertArgs} args - Arguments to update or create a Answer.
     * @example
     * // Update or create a Answer
     * const answer = await prisma.answer.upsert({
     *   create: {
     *     // ... data to create a Answer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Answer we want to update
     *   }
     * })
     */
    upsert<T extends AnswerUpsertArgs>(args: SelectSubset<T, AnswerUpsertArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerCountArgs} args - Arguments to filter Answers to count.
     * @example
     * // Count the number of Answers
     * const count = await prisma.answer.count({
     *   where: {
     *     // ... the filter for the Answers we want to count
     *   }
     * })
    **/
    count<T extends AnswerCountArgs>(
      args?: Subset<T, AnswerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnswerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Answer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AnswerAggregateArgs>(args: Subset<T, AnswerAggregateArgs>): Prisma.PrismaPromise<GetAnswerAggregateType<T>>

    /**
     * Group by Answer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AnswerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnswerGroupByArgs['orderBy'] }
        : { orderBy?: AnswerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AnswerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnswerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Answer model
   */
  readonly fields: AnswerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Answer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnswerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    comments<T extends Answer$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Answer$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likes<T extends Answer$likesArgs<ExtArgs> = {}>(args?: Subset<T, Answer$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends Answer$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, Answer$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    attachment<T extends Answer$attachmentArgs<ExtArgs> = {}>(args?: Subset<T, Answer$attachmentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Answer model
   */
  interface AnswerFieldRefs {
    readonly answer_id: FieldRef<"Answer", 'Int'>
    readonly content: FieldRef<"Answer", 'String'>
    readonly is_accepted: FieldRef<"Answer", 'Boolean'>
    readonly created_at: FieldRef<"Answer", 'DateTime'>
    readonly updated_at: FieldRef<"Answer", 'DateTime'>
    readonly deleted_at: FieldRef<"Answer", 'DateTime'>
    readonly question_id: FieldRef<"Answer", 'Int'>
    readonly user_id: FieldRef<"Answer", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Answer findUnique
   */
  export type AnswerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer findUniqueOrThrow
   */
  export type AnswerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer findFirst
   */
  export type AnswerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Answers.
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Answers.
     */
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Answer findFirstOrThrow
   */
  export type AnswerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Answers.
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Answers.
     */
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Answer findMany
   */
  export type AnswerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answers to fetch.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Answers.
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Answer create
   */
  export type AnswerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * The data needed to create a Answer.
     */
    data: XOR<AnswerCreateInput, AnswerUncheckedCreateInput>
  }

  /**
   * Answer createMany
   */
  export type AnswerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Answers.
     */
    data: AnswerCreateManyInput | AnswerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Answer update
   */
  export type AnswerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * The data needed to update a Answer.
     */
    data: XOR<AnswerUpdateInput, AnswerUncheckedUpdateInput>
    /**
     * Choose, which Answer to update.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer updateMany
   */
  export type AnswerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Answers.
     */
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyInput>
    /**
     * Filter which Answers to update
     */
    where?: AnswerWhereInput
    /**
     * Limit how many Answers to update.
     */
    limit?: number
  }

  /**
   * Answer upsert
   */
  export type AnswerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * The filter to search for the Answer to update in case it exists.
     */
    where: AnswerWhereUniqueInput
    /**
     * In case the Answer found by the `where` argument doesn't exist, create a new Answer with this data.
     */
    create: XOR<AnswerCreateInput, AnswerUncheckedCreateInput>
    /**
     * In case the Answer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnswerUpdateInput, AnswerUncheckedUpdateInput>
  }

  /**
   * Answer delete
   */
  export type AnswerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter which Answer to delete.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer deleteMany
   */
  export type AnswerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Answers to delete
     */
    where?: AnswerWhereInput
    /**
     * Limit how many Answers to delete.
     */
    limit?: number
  }

  /**
   * Answer.comments
   */
  export type Answer$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Answer.likes
   */
  export type Answer$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    where?: LikeWhereInput
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    cursor?: LikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * Answer.notifications
   */
  export type Answer$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Answer.attachment
   */
  export type Answer$attachmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    where?: AttachmentWhereInput
    orderBy?: AttachmentOrderByWithRelationInput | AttachmentOrderByWithRelationInput[]
    cursor?: AttachmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttachmentScalarFieldEnum | AttachmentScalarFieldEnum[]
  }

  /**
   * Answer without action
   */
  export type AnswerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentAvgAggregateOutputType = {
    user_id: number | null
    answer_id: number | null
    comment_id: number | null
    parent_id: number | null
    question_id: number | null
  }

  export type CommentSumAggregateOutputType = {
    user_id: number | null
    answer_id: number | null
    comment_id: number | null
    parent_id: number | null
    question_id: number | null
  }

  export type CommentMinAggregateOutputType = {
    user_id: number | null
    answer_id: number | null
    comment_id: number | null
    content: string | null
    created_at: Date | null
    parent_id: number | null
    question_id: number | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type CommentMaxAggregateOutputType = {
    user_id: number | null
    answer_id: number | null
    comment_id: number | null
    content: string | null
    created_at: Date | null
    parent_id: number | null
    question_id: number | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type CommentCountAggregateOutputType = {
    user_id: number
    answer_id: number
    comment_id: number
    content: number
    created_at: number
    parent_id: number
    question_id: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type CommentAvgAggregateInputType = {
    user_id?: true
    answer_id?: true
    comment_id?: true
    parent_id?: true
    question_id?: true
  }

  export type CommentSumAggregateInputType = {
    user_id?: true
    answer_id?: true
    comment_id?: true
    parent_id?: true
    question_id?: true
  }

  export type CommentMinAggregateInputType = {
    user_id?: true
    answer_id?: true
    comment_id?: true
    content?: true
    created_at?: true
    parent_id?: true
    question_id?: true
    updated_at?: true
    deleted_at?: true
  }

  export type CommentMaxAggregateInputType = {
    user_id?: true
    answer_id?: true
    comment_id?: true
    content?: true
    created_at?: true
    parent_id?: true
    question_id?: true
    updated_at?: true
    deleted_at?: true
  }

  export type CommentCountAggregateInputType = {
    user_id?: true
    answer_id?: true
    comment_id?: true
    content?: true
    created_at?: true
    parent_id?: true
    question_id?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _avg?: CommentAvgAggregateInputType
    _sum?: CommentSumAggregateInputType
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    user_id: number
    answer_id: number | null
    comment_id: number
    content: string
    created_at: Date
    parent_id: number | null
    question_id: number | null
    updated_at: Date | null
    deleted_at: Date | null
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    answer_id?: boolean
    comment_id?: boolean
    content?: boolean
    created_at?: boolean
    parent_id?: boolean
    question_id?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    answer?: boolean | Comment$answerArgs<ExtArgs>
    parent?: boolean | Comment$parentArgs<ExtArgs>
    replies?: boolean | Comment$repliesArgs<ExtArgs>
    question?: boolean | Comment$questionArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    Attachment?: boolean | Comment$AttachmentArgs<ExtArgs>
    _count?: boolean | CommentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>



  export type CommentSelectScalar = {
    user_id?: boolean
    answer_id?: boolean
    comment_id?: boolean
    content?: boolean
    created_at?: boolean
    parent_id?: boolean
    question_id?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "answer_id" | "comment_id" | "content" | "created_at" | "parent_id" | "question_id" | "updated_at" | "deleted_at", ExtArgs["result"]["comment"]>
  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answer?: boolean | Comment$answerArgs<ExtArgs>
    parent?: boolean | Comment$parentArgs<ExtArgs>
    replies?: boolean | Comment$repliesArgs<ExtArgs>
    question?: boolean | Comment$questionArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    Attachment?: boolean | Comment$AttachmentArgs<ExtArgs>
    _count?: boolean | CommentCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      answer: Prisma.$AnswerPayload<ExtArgs> | null
      parent: Prisma.$CommentPayload<ExtArgs> | null
      replies: Prisma.$CommentPayload<ExtArgs>[]
      question: Prisma.$QuestionPayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs>
      Attachment: Prisma.$AttachmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      answer_id: number | null
      comment_id: number
      content: string
      created_at: Date
      parent_id: number | null
      question_id: number | null
      updated_at: Date | null
      deleted_at: Date | null
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const commentWithUser_idOnly = await prisma.comment.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends CommentFindManyArgs>(args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends CommentCreateArgs>(args: SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentCreateManyArgs>(args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends CommentDeleteArgs>(args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentUpdateArgs>(args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentDeleteManyArgs>(args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentUpdateManyArgs>(args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    answer<T extends Comment$answerArgs<ExtArgs> = {}>(args?: Subset<T, Comment$answerArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    parent<T extends Comment$parentArgs<ExtArgs> = {}>(args?: Subset<T, Comment$parentArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    replies<T extends Comment$repliesArgs<ExtArgs> = {}>(args?: Subset<T, Comment$repliesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    question<T extends Comment$questionArgs<ExtArgs> = {}>(args?: Subset<T, Comment$questionArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Attachment<T extends Comment$AttachmentArgs<ExtArgs> = {}>(args?: Subset<T, Comment$AttachmentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comment model
   */
  interface CommentFieldRefs {
    readonly user_id: FieldRef<"Comment", 'Int'>
    readonly answer_id: FieldRef<"Comment", 'Int'>
    readonly comment_id: FieldRef<"Comment", 'Int'>
    readonly content: FieldRef<"Comment", 'String'>
    readonly created_at: FieldRef<"Comment", 'DateTime'>
    readonly parent_id: FieldRef<"Comment", 'Int'>
    readonly question_id: FieldRef<"Comment", 'Int'>
    readonly updated_at: FieldRef<"Comment", 'DateTime'>
    readonly deleted_at: FieldRef<"Comment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comment.answer
   */
  export type Comment$answerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    where?: AnswerWhereInput
  }

  /**
   * Comment.parent
   */
  export type Comment$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
  }

  /**
   * Comment.replies
   */
  export type Comment$repliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment.question
   */
  export type Comment$questionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    where?: QuestionWhereInput
  }

  /**
   * Comment.Attachment
   */
  export type Comment$AttachmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    where?: AttachmentWhereInput
    orderBy?: AttachmentOrderByWithRelationInput | AttachmentOrderByWithRelationInput[]
    cursor?: AttachmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttachmentScalarFieldEnum | AttachmentScalarFieldEnum[]
  }

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
  }


  /**
   * Model Like
   */

  export type AggregateLike = {
    _count: LikeCountAggregateOutputType | null
    _avg: LikeAvgAggregateOutputType | null
    _sum: LikeSumAggregateOutputType | null
    _min: LikeMinAggregateOutputType | null
    _max: LikeMaxAggregateOutputType | null
  }

  export type LikeAvgAggregateOutputType = {
    user_id: number | null
    answer_id: number | null
    like_id: number | null
    question_id: number | null
  }

  export type LikeSumAggregateOutputType = {
    user_id: number | null
    answer_id: number | null
    like_id: number | null
    question_id: number | null
  }

  export type LikeMinAggregateOutputType = {
    user_id: number | null
    answer_id: number | null
    created_at: Date | null
    like_id: number | null
    question_id: number | null
  }

  export type LikeMaxAggregateOutputType = {
    user_id: number | null
    answer_id: number | null
    created_at: Date | null
    like_id: number | null
    question_id: number | null
  }

  export type LikeCountAggregateOutputType = {
    user_id: number
    answer_id: number
    created_at: number
    like_id: number
    question_id: number
    _all: number
  }


  export type LikeAvgAggregateInputType = {
    user_id?: true
    answer_id?: true
    like_id?: true
    question_id?: true
  }

  export type LikeSumAggregateInputType = {
    user_id?: true
    answer_id?: true
    like_id?: true
    question_id?: true
  }

  export type LikeMinAggregateInputType = {
    user_id?: true
    answer_id?: true
    created_at?: true
    like_id?: true
    question_id?: true
  }

  export type LikeMaxAggregateInputType = {
    user_id?: true
    answer_id?: true
    created_at?: true
    like_id?: true
    question_id?: true
  }

  export type LikeCountAggregateInputType = {
    user_id?: true
    answer_id?: true
    created_at?: true
    like_id?: true
    question_id?: true
    _all?: true
  }

  export type LikeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Like to aggregate.
     */
    where?: LikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Likes
    **/
    _count?: true | LikeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LikeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LikeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LikeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LikeMaxAggregateInputType
  }

  export type GetLikeAggregateType<T extends LikeAggregateArgs> = {
        [P in keyof T & keyof AggregateLike]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLike[P]>
      : GetScalarType<T[P], AggregateLike[P]>
  }




  export type LikeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikeWhereInput
    orderBy?: LikeOrderByWithAggregationInput | LikeOrderByWithAggregationInput[]
    by: LikeScalarFieldEnum[] | LikeScalarFieldEnum
    having?: LikeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LikeCountAggregateInputType | true
    _avg?: LikeAvgAggregateInputType
    _sum?: LikeSumAggregateInputType
    _min?: LikeMinAggregateInputType
    _max?: LikeMaxAggregateInputType
  }

  export type LikeGroupByOutputType = {
    user_id: number
    answer_id: number | null
    created_at: Date
    like_id: number
    question_id: number | null
    _count: LikeCountAggregateOutputType | null
    _avg: LikeAvgAggregateOutputType | null
    _sum: LikeSumAggregateOutputType | null
    _min: LikeMinAggregateOutputType | null
    _max: LikeMaxAggregateOutputType | null
  }

  type GetLikeGroupByPayload<T extends LikeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LikeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LikeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LikeGroupByOutputType[P]>
            : GetScalarType<T[P], LikeGroupByOutputType[P]>
        }
      >
    >


  export type LikeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    answer_id?: boolean
    created_at?: boolean
    like_id?: boolean
    question_id?: boolean
    answer?: boolean | Like$answerArgs<ExtArgs>
    question?: boolean | Like$questionArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["like"]>



  export type LikeSelectScalar = {
    user_id?: boolean
    answer_id?: boolean
    created_at?: boolean
    like_id?: boolean
    question_id?: boolean
  }

  export type LikeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "answer_id" | "created_at" | "like_id" | "question_id", ExtArgs["result"]["like"]>
  export type LikeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answer?: boolean | Like$answerArgs<ExtArgs>
    question?: boolean | Like$questionArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LikePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Like"
    objects: {
      answer: Prisma.$AnswerPayload<ExtArgs> | null
      question: Prisma.$QuestionPayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      answer_id: number | null
      created_at: Date
      like_id: number
      question_id: number | null
    }, ExtArgs["result"]["like"]>
    composites: {}
  }

  type LikeGetPayload<S extends boolean | null | undefined | LikeDefaultArgs> = $Result.GetResult<Prisma.$LikePayload, S>

  type LikeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LikeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LikeCountAggregateInputType | true
    }

  export interface LikeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Like'], meta: { name: 'Like' } }
    /**
     * Find zero or one Like that matches the filter.
     * @param {LikeFindUniqueArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LikeFindUniqueArgs>(args: SelectSubset<T, LikeFindUniqueArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Like that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LikeFindUniqueOrThrowArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LikeFindUniqueOrThrowArgs>(args: SelectSubset<T, LikeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Like that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeFindFirstArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LikeFindFirstArgs>(args?: SelectSubset<T, LikeFindFirstArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Like that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeFindFirstOrThrowArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LikeFindFirstOrThrowArgs>(args?: SelectSubset<T, LikeFindFirstOrThrowArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Likes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Likes
     * const likes = await prisma.like.findMany()
     * 
     * // Get first 10 Likes
     * const likes = await prisma.like.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const likeWithUser_idOnly = await prisma.like.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends LikeFindManyArgs>(args?: SelectSubset<T, LikeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Like.
     * @param {LikeCreateArgs} args - Arguments to create a Like.
     * @example
     * // Create one Like
     * const Like = await prisma.like.create({
     *   data: {
     *     // ... data to create a Like
     *   }
     * })
     * 
     */
    create<T extends LikeCreateArgs>(args: SelectSubset<T, LikeCreateArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Likes.
     * @param {LikeCreateManyArgs} args - Arguments to create many Likes.
     * @example
     * // Create many Likes
     * const like = await prisma.like.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LikeCreateManyArgs>(args?: SelectSubset<T, LikeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Like.
     * @param {LikeDeleteArgs} args - Arguments to delete one Like.
     * @example
     * // Delete one Like
     * const Like = await prisma.like.delete({
     *   where: {
     *     // ... filter to delete one Like
     *   }
     * })
     * 
     */
    delete<T extends LikeDeleteArgs>(args: SelectSubset<T, LikeDeleteArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Like.
     * @param {LikeUpdateArgs} args - Arguments to update one Like.
     * @example
     * // Update one Like
     * const like = await prisma.like.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LikeUpdateArgs>(args: SelectSubset<T, LikeUpdateArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Likes.
     * @param {LikeDeleteManyArgs} args - Arguments to filter Likes to delete.
     * @example
     * // Delete a few Likes
     * const { count } = await prisma.like.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LikeDeleteManyArgs>(args?: SelectSubset<T, LikeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Likes
     * const like = await prisma.like.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LikeUpdateManyArgs>(args: SelectSubset<T, LikeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Like.
     * @param {LikeUpsertArgs} args - Arguments to update or create a Like.
     * @example
     * // Update or create a Like
     * const like = await prisma.like.upsert({
     *   create: {
     *     // ... data to create a Like
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Like we want to update
     *   }
     * })
     */
    upsert<T extends LikeUpsertArgs>(args: SelectSubset<T, LikeUpsertArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeCountArgs} args - Arguments to filter Likes to count.
     * @example
     * // Count the number of Likes
     * const count = await prisma.like.count({
     *   where: {
     *     // ... the filter for the Likes we want to count
     *   }
     * })
    **/
    count<T extends LikeCountArgs>(
      args?: Subset<T, LikeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LikeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Like.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LikeAggregateArgs>(args: Subset<T, LikeAggregateArgs>): Prisma.PrismaPromise<GetLikeAggregateType<T>>

    /**
     * Group by Like.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LikeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LikeGroupByArgs['orderBy'] }
        : { orderBy?: LikeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LikeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLikeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Like model
   */
  readonly fields: LikeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Like.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LikeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    answer<T extends Like$answerArgs<ExtArgs> = {}>(args?: Subset<T, Like$answerArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    question<T extends Like$questionArgs<ExtArgs> = {}>(args?: Subset<T, Like$questionArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Like model
   */
  interface LikeFieldRefs {
    readonly user_id: FieldRef<"Like", 'Int'>
    readonly answer_id: FieldRef<"Like", 'Int'>
    readonly created_at: FieldRef<"Like", 'DateTime'>
    readonly like_id: FieldRef<"Like", 'Int'>
    readonly question_id: FieldRef<"Like", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Like findUnique
   */
  export type LikeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Like to fetch.
     */
    where: LikeWhereUniqueInput
  }

  /**
   * Like findUniqueOrThrow
   */
  export type LikeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Like to fetch.
     */
    where: LikeWhereUniqueInput
  }

  /**
   * Like findFirst
   */
  export type LikeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Like to fetch.
     */
    where?: LikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Likes.
     */
    cursor?: LikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Likes.
     */
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * Like findFirstOrThrow
   */
  export type LikeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Like to fetch.
     */
    where?: LikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Likes.
     */
    cursor?: LikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Likes.
     */
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * Like findMany
   */
  export type LikeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Likes to fetch.
     */
    where?: LikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Likes.
     */
    cursor?: LikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * Like create
   */
  export type LikeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * The data needed to create a Like.
     */
    data: XOR<LikeCreateInput, LikeUncheckedCreateInput>
  }

  /**
   * Like createMany
   */
  export type LikeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Likes.
     */
    data: LikeCreateManyInput | LikeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Like update
   */
  export type LikeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * The data needed to update a Like.
     */
    data: XOR<LikeUpdateInput, LikeUncheckedUpdateInput>
    /**
     * Choose, which Like to update.
     */
    where: LikeWhereUniqueInput
  }

  /**
   * Like updateMany
   */
  export type LikeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Likes.
     */
    data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyInput>
    /**
     * Filter which Likes to update
     */
    where?: LikeWhereInput
    /**
     * Limit how many Likes to update.
     */
    limit?: number
  }

  /**
   * Like upsert
   */
  export type LikeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * The filter to search for the Like to update in case it exists.
     */
    where: LikeWhereUniqueInput
    /**
     * In case the Like found by the `where` argument doesn't exist, create a new Like with this data.
     */
    create: XOR<LikeCreateInput, LikeUncheckedCreateInput>
    /**
     * In case the Like was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LikeUpdateInput, LikeUncheckedUpdateInput>
  }

  /**
   * Like delete
   */
  export type LikeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter which Like to delete.
     */
    where: LikeWhereUniqueInput
  }

  /**
   * Like deleteMany
   */
  export type LikeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Likes to delete
     */
    where?: LikeWhereInput
    /**
     * Limit how many Likes to delete.
     */
    limit?: number
  }

  /**
   * Like.answer
   */
  export type Like$answerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    where?: AnswerWhereInput
  }

  /**
   * Like.question
   */
  export type Like$questionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    where?: QuestionWhereInput
  }

  /**
   * Like without action
   */
  export type LikeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
  }


  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _avg: TagAvgAggregateOutputType | null
    _sum: TagSumAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagAvgAggregateOutputType = {
    tag_id: number | null
  }

  export type TagSumAggregateOutputType = {
    tag_id: number | null
  }

  export type TagMinAggregateOutputType = {
    tag_id: number | null
    name: string | null
    created_at: Date | null
    deleted_at: Date | null
  }

  export type TagMaxAggregateOutputType = {
    tag_id: number | null
    name: string | null
    created_at: Date | null
    deleted_at: Date | null
  }

  export type TagCountAggregateOutputType = {
    tag_id: number
    name: number
    created_at: number
    deleted_at: number
    _all: number
  }


  export type TagAvgAggregateInputType = {
    tag_id?: true
  }

  export type TagSumAggregateInputType = {
    tag_id?: true
  }

  export type TagMinAggregateInputType = {
    tag_id?: true
    name?: true
    created_at?: true
    deleted_at?: true
  }

  export type TagMaxAggregateInputType = {
    tag_id?: true
    name?: true
    created_at?: true
    deleted_at?: true
  }

  export type TagCountAggregateInputType = {
    tag_id?: true
    name?: true
    created_at?: true
    deleted_at?: true
    _all?: true
  }

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type TagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _avg?: TagAvgAggregateInputType
    _sum?: TagSumAggregateInputType
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    tag_id: number
    name: string
    created_at: Date
    deleted_at: Date | null
    _count: TagCountAggregateOutputType | null
    _avg: TagAvgAggregateOutputType | null
    _sum: TagSumAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type TagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tag_id?: boolean
    name?: boolean
    created_at?: boolean
    deleted_at?: boolean
    questions?: boolean | Tag$questionsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>



  export type TagSelectScalar = {
    tag_id?: boolean
    name?: boolean
    created_at?: boolean
    deleted_at?: boolean
  }

  export type TagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"tag_id" | "name" | "created_at" | "deleted_at", ExtArgs["result"]["tag"]>
  export type TagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | Tag$questionsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tag"
    objects: {
      questions: Prisma.$TagsOnQuestionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      tag_id: number
      name: string
      created_at: Date
      deleted_at: Date | null
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }

  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> = $Result.GetResult<Prisma.$TagPayload, S>

  type TagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface TagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tag'], meta: { name: 'Tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagFindUniqueArgs>(args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagFindFirstArgs>(args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `tag_id`
     * const tagWithTag_idOnly = await prisma.tag.findMany({ select: { tag_id: true } })
     * 
     */
    findMany<T extends TagFindManyArgs>(args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
     */
    create<T extends TagCreateArgs>(args: SelectSubset<T, TagCreateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {TagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagCreateManyArgs>(args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
     */
    delete<T extends TagDeleteArgs>(args: SelectSubset<T, TagDeleteArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagUpdateArgs>(args: SelectSubset<T, TagUpdateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagDeleteManyArgs>(args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagUpdateManyArgs>(args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends TagUpsertArgs>(args: SelectSubset<T, TagUpsertArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tag model
   */
  readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    questions<T extends Tag$questionsArgs<ExtArgs> = {}>(args?: Subset<T, Tag$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagsOnQuestionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tag model
   */
  interface TagFieldRefs {
    readonly tag_id: FieldRef<"Tag", 'Int'>
    readonly name: FieldRef<"Tag", 'String'>
    readonly created_at: FieldRef<"Tag", 'DateTime'>
    readonly deleted_at: FieldRef<"Tag", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findMany
   */
  export type TagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag create
   */
  export type TagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }

  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag update
   */
  export type TagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag upsert
   */
  export type TagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }

  /**
   * Tag delete
   */
  export type TagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to delete.
     */
    limit?: number
  }

  /**
   * Tag.questions
   */
  export type Tag$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsOnQuestions
     */
    select?: TagsOnQuestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TagsOnQuestions
     */
    omit?: TagsOnQuestionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsOnQuestionsInclude<ExtArgs> | null
    where?: TagsOnQuestionsWhereInput
    orderBy?: TagsOnQuestionsOrderByWithRelationInput | TagsOnQuestionsOrderByWithRelationInput[]
    cursor?: TagsOnQuestionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TagsOnQuestionsScalarFieldEnum | TagsOnQuestionsScalarFieldEnum[]
  }

  /**
   * Tag without action
   */
  export type TagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
  }


  /**
   * Model TagsOnQuestions
   */

  export type AggregateTagsOnQuestions = {
    _count: TagsOnQuestionsCountAggregateOutputType | null
    _avg: TagsOnQuestionsAvgAggregateOutputType | null
    _sum: TagsOnQuestionsSumAggregateOutputType | null
    _min: TagsOnQuestionsMinAggregateOutputType | null
    _max: TagsOnQuestionsMaxAggregateOutputType | null
  }

  export type TagsOnQuestionsAvgAggregateOutputType = {
    question_id: number | null
    tag_id: number | null
  }

  export type TagsOnQuestionsSumAggregateOutputType = {
    question_id: number | null
    tag_id: number | null
  }

  export type TagsOnQuestionsMinAggregateOutputType = {
    question_id: number | null
    tag_id: number | null
    assigned_at: Date | null
    deleted_at: Date | null
  }

  export type TagsOnQuestionsMaxAggregateOutputType = {
    question_id: number | null
    tag_id: number | null
    assigned_at: Date | null
    deleted_at: Date | null
  }

  export type TagsOnQuestionsCountAggregateOutputType = {
    question_id: number
    tag_id: number
    assigned_at: number
    deleted_at: number
    _all: number
  }


  export type TagsOnQuestionsAvgAggregateInputType = {
    question_id?: true
    tag_id?: true
  }

  export type TagsOnQuestionsSumAggregateInputType = {
    question_id?: true
    tag_id?: true
  }

  export type TagsOnQuestionsMinAggregateInputType = {
    question_id?: true
    tag_id?: true
    assigned_at?: true
    deleted_at?: true
  }

  export type TagsOnQuestionsMaxAggregateInputType = {
    question_id?: true
    tag_id?: true
    assigned_at?: true
    deleted_at?: true
  }

  export type TagsOnQuestionsCountAggregateInputType = {
    question_id?: true
    tag_id?: true
    assigned_at?: true
    deleted_at?: true
    _all?: true
  }

  export type TagsOnQuestionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TagsOnQuestions to aggregate.
     */
    where?: TagsOnQuestionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TagsOnQuestions to fetch.
     */
    orderBy?: TagsOnQuestionsOrderByWithRelationInput | TagsOnQuestionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagsOnQuestionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TagsOnQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TagsOnQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TagsOnQuestions
    **/
    _count?: true | TagsOnQuestionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TagsOnQuestionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TagsOnQuestionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagsOnQuestionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagsOnQuestionsMaxAggregateInputType
  }

  export type GetTagsOnQuestionsAggregateType<T extends TagsOnQuestionsAggregateArgs> = {
        [P in keyof T & keyof AggregateTagsOnQuestions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTagsOnQuestions[P]>
      : GetScalarType<T[P], AggregateTagsOnQuestions[P]>
  }




  export type TagsOnQuestionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagsOnQuestionsWhereInput
    orderBy?: TagsOnQuestionsOrderByWithAggregationInput | TagsOnQuestionsOrderByWithAggregationInput[]
    by: TagsOnQuestionsScalarFieldEnum[] | TagsOnQuestionsScalarFieldEnum
    having?: TagsOnQuestionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagsOnQuestionsCountAggregateInputType | true
    _avg?: TagsOnQuestionsAvgAggregateInputType
    _sum?: TagsOnQuestionsSumAggregateInputType
    _min?: TagsOnQuestionsMinAggregateInputType
    _max?: TagsOnQuestionsMaxAggregateInputType
  }

  export type TagsOnQuestionsGroupByOutputType = {
    question_id: number
    tag_id: number
    assigned_at: Date
    deleted_at: Date | null
    _count: TagsOnQuestionsCountAggregateOutputType | null
    _avg: TagsOnQuestionsAvgAggregateOutputType | null
    _sum: TagsOnQuestionsSumAggregateOutputType | null
    _min: TagsOnQuestionsMinAggregateOutputType | null
    _max: TagsOnQuestionsMaxAggregateOutputType | null
  }

  type GetTagsOnQuestionsGroupByPayload<T extends TagsOnQuestionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagsOnQuestionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagsOnQuestionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagsOnQuestionsGroupByOutputType[P]>
            : GetScalarType<T[P], TagsOnQuestionsGroupByOutputType[P]>
        }
      >
    >


  export type TagsOnQuestionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    question_id?: boolean
    tag_id?: boolean
    assigned_at?: boolean
    deleted_at?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tagsOnQuestions"]>



  export type TagsOnQuestionsSelectScalar = {
    question_id?: boolean
    tag_id?: boolean
    assigned_at?: boolean
    deleted_at?: boolean
  }

  export type TagsOnQuestionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"question_id" | "tag_id" | "assigned_at" | "deleted_at", ExtArgs["result"]["tagsOnQuestions"]>
  export type TagsOnQuestionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }

  export type $TagsOnQuestionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TagsOnQuestions"
    objects: {
      question: Prisma.$QuestionPayload<ExtArgs>
      tag: Prisma.$TagPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      question_id: number
      tag_id: number
      assigned_at: Date
      deleted_at: Date | null
    }, ExtArgs["result"]["tagsOnQuestions"]>
    composites: {}
  }

  type TagsOnQuestionsGetPayload<S extends boolean | null | undefined | TagsOnQuestionsDefaultArgs> = $Result.GetResult<Prisma.$TagsOnQuestionsPayload, S>

  type TagsOnQuestionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TagsOnQuestionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagsOnQuestionsCountAggregateInputType | true
    }

  export interface TagsOnQuestionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TagsOnQuestions'], meta: { name: 'TagsOnQuestions' } }
    /**
     * Find zero or one TagsOnQuestions that matches the filter.
     * @param {TagsOnQuestionsFindUniqueArgs} args - Arguments to find a TagsOnQuestions
     * @example
     * // Get one TagsOnQuestions
     * const tagsOnQuestions = await prisma.tagsOnQuestions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagsOnQuestionsFindUniqueArgs>(args: SelectSubset<T, TagsOnQuestionsFindUniqueArgs<ExtArgs>>): Prisma__TagsOnQuestionsClient<$Result.GetResult<Prisma.$TagsOnQuestionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TagsOnQuestions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagsOnQuestionsFindUniqueOrThrowArgs} args - Arguments to find a TagsOnQuestions
     * @example
     * // Get one TagsOnQuestions
     * const tagsOnQuestions = await prisma.tagsOnQuestions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagsOnQuestionsFindUniqueOrThrowArgs>(args: SelectSubset<T, TagsOnQuestionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagsOnQuestionsClient<$Result.GetResult<Prisma.$TagsOnQuestionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TagsOnQuestions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsOnQuestionsFindFirstArgs} args - Arguments to find a TagsOnQuestions
     * @example
     * // Get one TagsOnQuestions
     * const tagsOnQuestions = await prisma.tagsOnQuestions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagsOnQuestionsFindFirstArgs>(args?: SelectSubset<T, TagsOnQuestionsFindFirstArgs<ExtArgs>>): Prisma__TagsOnQuestionsClient<$Result.GetResult<Prisma.$TagsOnQuestionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TagsOnQuestions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsOnQuestionsFindFirstOrThrowArgs} args - Arguments to find a TagsOnQuestions
     * @example
     * // Get one TagsOnQuestions
     * const tagsOnQuestions = await prisma.tagsOnQuestions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagsOnQuestionsFindFirstOrThrowArgs>(args?: SelectSubset<T, TagsOnQuestionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagsOnQuestionsClient<$Result.GetResult<Prisma.$TagsOnQuestionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TagsOnQuestions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsOnQuestionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TagsOnQuestions
     * const tagsOnQuestions = await prisma.tagsOnQuestions.findMany()
     * 
     * // Get first 10 TagsOnQuestions
     * const tagsOnQuestions = await prisma.tagsOnQuestions.findMany({ take: 10 })
     * 
     * // Only select the `question_id`
     * const tagsOnQuestionsWithQuestion_idOnly = await prisma.tagsOnQuestions.findMany({ select: { question_id: true } })
     * 
     */
    findMany<T extends TagsOnQuestionsFindManyArgs>(args?: SelectSubset<T, TagsOnQuestionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagsOnQuestionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TagsOnQuestions.
     * @param {TagsOnQuestionsCreateArgs} args - Arguments to create a TagsOnQuestions.
     * @example
     * // Create one TagsOnQuestions
     * const TagsOnQuestions = await prisma.tagsOnQuestions.create({
     *   data: {
     *     // ... data to create a TagsOnQuestions
     *   }
     * })
     * 
     */
    create<T extends TagsOnQuestionsCreateArgs>(args: SelectSubset<T, TagsOnQuestionsCreateArgs<ExtArgs>>): Prisma__TagsOnQuestionsClient<$Result.GetResult<Prisma.$TagsOnQuestionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TagsOnQuestions.
     * @param {TagsOnQuestionsCreateManyArgs} args - Arguments to create many TagsOnQuestions.
     * @example
     * // Create many TagsOnQuestions
     * const tagsOnQuestions = await prisma.tagsOnQuestions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagsOnQuestionsCreateManyArgs>(args?: SelectSubset<T, TagsOnQuestionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TagsOnQuestions.
     * @param {TagsOnQuestionsDeleteArgs} args - Arguments to delete one TagsOnQuestions.
     * @example
     * // Delete one TagsOnQuestions
     * const TagsOnQuestions = await prisma.tagsOnQuestions.delete({
     *   where: {
     *     // ... filter to delete one TagsOnQuestions
     *   }
     * })
     * 
     */
    delete<T extends TagsOnQuestionsDeleteArgs>(args: SelectSubset<T, TagsOnQuestionsDeleteArgs<ExtArgs>>): Prisma__TagsOnQuestionsClient<$Result.GetResult<Prisma.$TagsOnQuestionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TagsOnQuestions.
     * @param {TagsOnQuestionsUpdateArgs} args - Arguments to update one TagsOnQuestions.
     * @example
     * // Update one TagsOnQuestions
     * const tagsOnQuestions = await prisma.tagsOnQuestions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagsOnQuestionsUpdateArgs>(args: SelectSubset<T, TagsOnQuestionsUpdateArgs<ExtArgs>>): Prisma__TagsOnQuestionsClient<$Result.GetResult<Prisma.$TagsOnQuestionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TagsOnQuestions.
     * @param {TagsOnQuestionsDeleteManyArgs} args - Arguments to filter TagsOnQuestions to delete.
     * @example
     * // Delete a few TagsOnQuestions
     * const { count } = await prisma.tagsOnQuestions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagsOnQuestionsDeleteManyArgs>(args?: SelectSubset<T, TagsOnQuestionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TagsOnQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsOnQuestionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TagsOnQuestions
     * const tagsOnQuestions = await prisma.tagsOnQuestions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagsOnQuestionsUpdateManyArgs>(args: SelectSubset<T, TagsOnQuestionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TagsOnQuestions.
     * @param {TagsOnQuestionsUpsertArgs} args - Arguments to update or create a TagsOnQuestions.
     * @example
     * // Update or create a TagsOnQuestions
     * const tagsOnQuestions = await prisma.tagsOnQuestions.upsert({
     *   create: {
     *     // ... data to create a TagsOnQuestions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TagsOnQuestions we want to update
     *   }
     * })
     */
    upsert<T extends TagsOnQuestionsUpsertArgs>(args: SelectSubset<T, TagsOnQuestionsUpsertArgs<ExtArgs>>): Prisma__TagsOnQuestionsClient<$Result.GetResult<Prisma.$TagsOnQuestionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TagsOnQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsOnQuestionsCountArgs} args - Arguments to filter TagsOnQuestions to count.
     * @example
     * // Count the number of TagsOnQuestions
     * const count = await prisma.tagsOnQuestions.count({
     *   where: {
     *     // ... the filter for the TagsOnQuestions we want to count
     *   }
     * })
    **/
    count<T extends TagsOnQuestionsCountArgs>(
      args?: Subset<T, TagsOnQuestionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagsOnQuestionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TagsOnQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsOnQuestionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TagsOnQuestionsAggregateArgs>(args: Subset<T, TagsOnQuestionsAggregateArgs>): Prisma.PrismaPromise<GetTagsOnQuestionsAggregateType<T>>

    /**
     * Group by TagsOnQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsOnQuestionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TagsOnQuestionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagsOnQuestionsGroupByArgs['orderBy'] }
        : { orderBy?: TagsOnQuestionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TagsOnQuestionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagsOnQuestionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TagsOnQuestions model
   */
  readonly fields: TagsOnQuestionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TagsOnQuestions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagsOnQuestionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tag<T extends TagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TagDefaultArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TagsOnQuestions model
   */
  interface TagsOnQuestionsFieldRefs {
    readonly question_id: FieldRef<"TagsOnQuestions", 'Int'>
    readonly tag_id: FieldRef<"TagsOnQuestions", 'Int'>
    readonly assigned_at: FieldRef<"TagsOnQuestions", 'DateTime'>
    readonly deleted_at: FieldRef<"TagsOnQuestions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TagsOnQuestions findUnique
   */
  export type TagsOnQuestionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsOnQuestions
     */
    select?: TagsOnQuestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TagsOnQuestions
     */
    omit?: TagsOnQuestionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsOnQuestionsInclude<ExtArgs> | null
    /**
     * Filter, which TagsOnQuestions to fetch.
     */
    where: TagsOnQuestionsWhereUniqueInput
  }

  /**
   * TagsOnQuestions findUniqueOrThrow
   */
  export type TagsOnQuestionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsOnQuestions
     */
    select?: TagsOnQuestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TagsOnQuestions
     */
    omit?: TagsOnQuestionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsOnQuestionsInclude<ExtArgs> | null
    /**
     * Filter, which TagsOnQuestions to fetch.
     */
    where: TagsOnQuestionsWhereUniqueInput
  }

  /**
   * TagsOnQuestions findFirst
   */
  export type TagsOnQuestionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsOnQuestions
     */
    select?: TagsOnQuestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TagsOnQuestions
     */
    omit?: TagsOnQuestionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsOnQuestionsInclude<ExtArgs> | null
    /**
     * Filter, which TagsOnQuestions to fetch.
     */
    where?: TagsOnQuestionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TagsOnQuestions to fetch.
     */
    orderBy?: TagsOnQuestionsOrderByWithRelationInput | TagsOnQuestionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TagsOnQuestions.
     */
    cursor?: TagsOnQuestionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TagsOnQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TagsOnQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TagsOnQuestions.
     */
    distinct?: TagsOnQuestionsScalarFieldEnum | TagsOnQuestionsScalarFieldEnum[]
  }

  /**
   * TagsOnQuestions findFirstOrThrow
   */
  export type TagsOnQuestionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsOnQuestions
     */
    select?: TagsOnQuestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TagsOnQuestions
     */
    omit?: TagsOnQuestionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsOnQuestionsInclude<ExtArgs> | null
    /**
     * Filter, which TagsOnQuestions to fetch.
     */
    where?: TagsOnQuestionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TagsOnQuestions to fetch.
     */
    orderBy?: TagsOnQuestionsOrderByWithRelationInput | TagsOnQuestionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TagsOnQuestions.
     */
    cursor?: TagsOnQuestionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TagsOnQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TagsOnQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TagsOnQuestions.
     */
    distinct?: TagsOnQuestionsScalarFieldEnum | TagsOnQuestionsScalarFieldEnum[]
  }

  /**
   * TagsOnQuestions findMany
   */
  export type TagsOnQuestionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsOnQuestions
     */
    select?: TagsOnQuestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TagsOnQuestions
     */
    omit?: TagsOnQuestionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsOnQuestionsInclude<ExtArgs> | null
    /**
     * Filter, which TagsOnQuestions to fetch.
     */
    where?: TagsOnQuestionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TagsOnQuestions to fetch.
     */
    orderBy?: TagsOnQuestionsOrderByWithRelationInput | TagsOnQuestionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TagsOnQuestions.
     */
    cursor?: TagsOnQuestionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TagsOnQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TagsOnQuestions.
     */
    skip?: number
    distinct?: TagsOnQuestionsScalarFieldEnum | TagsOnQuestionsScalarFieldEnum[]
  }

  /**
   * TagsOnQuestions create
   */
  export type TagsOnQuestionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsOnQuestions
     */
    select?: TagsOnQuestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TagsOnQuestions
     */
    omit?: TagsOnQuestionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsOnQuestionsInclude<ExtArgs> | null
    /**
     * The data needed to create a TagsOnQuestions.
     */
    data: XOR<TagsOnQuestionsCreateInput, TagsOnQuestionsUncheckedCreateInput>
  }

  /**
   * TagsOnQuestions createMany
   */
  export type TagsOnQuestionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TagsOnQuestions.
     */
    data: TagsOnQuestionsCreateManyInput | TagsOnQuestionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TagsOnQuestions update
   */
  export type TagsOnQuestionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsOnQuestions
     */
    select?: TagsOnQuestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TagsOnQuestions
     */
    omit?: TagsOnQuestionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsOnQuestionsInclude<ExtArgs> | null
    /**
     * The data needed to update a TagsOnQuestions.
     */
    data: XOR<TagsOnQuestionsUpdateInput, TagsOnQuestionsUncheckedUpdateInput>
    /**
     * Choose, which TagsOnQuestions to update.
     */
    where: TagsOnQuestionsWhereUniqueInput
  }

  /**
   * TagsOnQuestions updateMany
   */
  export type TagsOnQuestionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TagsOnQuestions.
     */
    data: XOR<TagsOnQuestionsUpdateManyMutationInput, TagsOnQuestionsUncheckedUpdateManyInput>
    /**
     * Filter which TagsOnQuestions to update
     */
    where?: TagsOnQuestionsWhereInput
    /**
     * Limit how many TagsOnQuestions to update.
     */
    limit?: number
  }

  /**
   * TagsOnQuestions upsert
   */
  export type TagsOnQuestionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsOnQuestions
     */
    select?: TagsOnQuestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TagsOnQuestions
     */
    omit?: TagsOnQuestionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsOnQuestionsInclude<ExtArgs> | null
    /**
     * The filter to search for the TagsOnQuestions to update in case it exists.
     */
    where: TagsOnQuestionsWhereUniqueInput
    /**
     * In case the TagsOnQuestions found by the `where` argument doesn't exist, create a new TagsOnQuestions with this data.
     */
    create: XOR<TagsOnQuestionsCreateInput, TagsOnQuestionsUncheckedCreateInput>
    /**
     * In case the TagsOnQuestions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagsOnQuestionsUpdateInput, TagsOnQuestionsUncheckedUpdateInput>
  }

  /**
   * TagsOnQuestions delete
   */
  export type TagsOnQuestionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsOnQuestions
     */
    select?: TagsOnQuestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TagsOnQuestions
     */
    omit?: TagsOnQuestionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsOnQuestionsInclude<ExtArgs> | null
    /**
     * Filter which TagsOnQuestions to delete.
     */
    where: TagsOnQuestionsWhereUniqueInput
  }

  /**
   * TagsOnQuestions deleteMany
   */
  export type TagsOnQuestionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TagsOnQuestions to delete
     */
    where?: TagsOnQuestionsWhereInput
    /**
     * Limit how many TagsOnQuestions to delete.
     */
    limit?: number
  }

  /**
   * TagsOnQuestions without action
   */
  export type TagsOnQuestionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsOnQuestions
     */
    select?: TagsOnQuestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TagsOnQuestions
     */
    omit?: TagsOnQuestionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsOnQuestionsInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    question_id: number | null
    answer_id: number | null
  }

  export type NotificationSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    question_id: number | null
    answer_id: number | null
  }

  export type NotificationMinAggregateOutputType = {
    id: number | null
    content: string | null
    is_read: boolean | null
    created_at: Date | null
    user_id: number | null
    question_id: number | null
    answer_id: number | null
    notification_type: $Enums.NotificationType | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: number | null
    content: string | null
    is_read: boolean | null
    created_at: Date | null
    user_id: number | null
    question_id: number | null
    answer_id: number | null
    notification_type: $Enums.NotificationType | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    content: number
    is_read: number
    created_at: number
    user_id: number
    question_id: number
    answer_id: number
    notification_type: number
    _all: number
  }


  export type NotificationAvgAggregateInputType = {
    id?: true
    user_id?: true
    question_id?: true
    answer_id?: true
  }

  export type NotificationSumAggregateInputType = {
    id?: true
    user_id?: true
    question_id?: true
    answer_id?: true
  }

  export type NotificationMinAggregateInputType = {
    id?: true
    content?: true
    is_read?: true
    created_at?: true
    user_id?: true
    question_id?: true
    answer_id?: true
    notification_type?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    content?: true
    is_read?: true
    created_at?: true
    user_id?: true
    question_id?: true
    answer_id?: true
    notification_type?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    content?: true
    is_read?: true
    created_at?: true
    user_id?: true
    question_id?: true
    answer_id?: true
    notification_type?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _avg?: NotificationAvgAggregateInputType
    _sum?: NotificationSumAggregateInputType
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: number
    content: string
    is_read: boolean
    created_at: Date
    user_id: number
    question_id: number | null
    answer_id: number | null
    notification_type: $Enums.NotificationType
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    is_read?: boolean
    created_at?: boolean
    user_id?: boolean
    question_id?: boolean
    answer_id?: boolean
    notification_type?: boolean
    answer?: boolean | Notification$answerArgs<ExtArgs>
    question?: boolean | Notification$questionArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>



  export type NotificationSelectScalar = {
    id?: boolean
    content?: boolean
    is_read?: boolean
    created_at?: boolean
    user_id?: boolean
    question_id?: boolean
    answer_id?: boolean
    notification_type?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "is_read" | "created_at" | "user_id" | "question_id" | "answer_id" | "notification_type", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answer?: boolean | Notification$answerArgs<ExtArgs>
    question?: boolean | Notification$questionArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      answer: Prisma.$AnswerPayload<ExtArgs> | null
      question: Prisma.$QuestionPayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      content: string
      is_read: boolean
      created_at: Date
      user_id: number
      question_id: number | null
      answer_id: number | null
      notification_type: $Enums.NotificationType
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    answer<T extends Notification$answerArgs<ExtArgs> = {}>(args?: Subset<T, Notification$answerArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    question<T extends Notification$questionArgs<ExtArgs> = {}>(args?: Subset<T, Notification$questionArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'Int'>
    readonly content: FieldRef<"Notification", 'String'>
    readonly is_read: FieldRef<"Notification", 'Boolean'>
    readonly created_at: FieldRef<"Notification", 'DateTime'>
    readonly user_id: FieldRef<"Notification", 'Int'>
    readonly question_id: FieldRef<"Notification", 'Int'>
    readonly answer_id: FieldRef<"Notification", 'Int'>
    readonly notification_type: FieldRef<"Notification", 'NotificationType'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification.answer
   */
  export type Notification$answerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    where?: AnswerWhereInput
  }

  /**
   * Notification.question
   */
  export type Notification$questionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    where?: QuestionWhereInput
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Model Config
   */

  export type AggregateConfig = {
    _count: ConfigCountAggregateOutputType | null
    _avg: ConfigAvgAggregateOutputType | null
    _sum: ConfigSumAggregateOutputType | null
    _min: ConfigMinAggregateOutputType | null
    _max: ConfigMaxAggregateOutputType | null
  }

  export type ConfigAvgAggregateOutputType = {
    config_id: number | null
  }

  export type ConfigSumAggregateOutputType = {
    config_id: number | null
  }

  export type ConfigMinAggregateOutputType = {
    config_id: number | null
    name: string | null
    description: string | null
    status: boolean | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type ConfigMaxAggregateOutputType = {
    config_id: number | null
    name: string | null
    description: string | null
    status: boolean | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type ConfigCountAggregateOutputType = {
    config_id: number
    name: number
    value: number
    description: number
    status: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type ConfigAvgAggregateInputType = {
    config_id?: true
  }

  export type ConfigSumAggregateInputType = {
    config_id?: true
  }

  export type ConfigMinAggregateInputType = {
    config_id?: true
    name?: true
    description?: true
    status?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type ConfigMaxAggregateInputType = {
    config_id?: true
    name?: true
    description?: true
    status?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type ConfigCountAggregateInputType = {
    config_id?: true
    name?: true
    value?: true
    description?: true
    status?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type ConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Config to aggregate.
     */
    where?: ConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Configs to fetch.
     */
    orderBy?: ConfigOrderByWithRelationInput | ConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Configs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Configs
    **/
    _count?: true | ConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConfigAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConfigSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConfigMaxAggregateInputType
  }

  export type GetConfigAggregateType<T extends ConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConfig[P]>
      : GetScalarType<T[P], AggregateConfig[P]>
  }




  export type ConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConfigWhereInput
    orderBy?: ConfigOrderByWithAggregationInput | ConfigOrderByWithAggregationInput[]
    by: ConfigScalarFieldEnum[] | ConfigScalarFieldEnum
    having?: ConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConfigCountAggregateInputType | true
    _avg?: ConfigAvgAggregateInputType
    _sum?: ConfigSumAggregateInputType
    _min?: ConfigMinAggregateInputType
    _max?: ConfigMaxAggregateInputType
  }

  export type ConfigGroupByOutputType = {
    config_id: number
    name: string | null
    value: JsonValue | null
    description: string | null
    status: boolean
    created_at: Date
    updated_at: Date | null
    deleted_at: Date | null
    _count: ConfigCountAggregateOutputType | null
    _avg: ConfigAvgAggregateOutputType | null
    _sum: ConfigSumAggregateOutputType | null
    _min: ConfigMinAggregateOutputType | null
    _max: ConfigMaxAggregateOutputType | null
  }

  type GetConfigGroupByPayload<T extends ConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConfigGroupByOutputType[P]>
            : GetScalarType<T[P], ConfigGroupByOutputType[P]>
        }
      >
    >


  export type ConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    config_id?: boolean
    name?: boolean
    value?: boolean
    description?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["config"]>



  export type ConfigSelectScalar = {
    config_id?: boolean
    name?: boolean
    value?: boolean
    description?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type ConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"config_id" | "name" | "value" | "description" | "status" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["config"]>

  export type $ConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Config"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      config_id: number
      name: string | null
      value: Prisma.JsonValue | null
      description: string | null
      status: boolean
      created_at: Date
      updated_at: Date | null
      deleted_at: Date | null
    }, ExtArgs["result"]["config"]>
    composites: {}
  }

  type ConfigGetPayload<S extends boolean | null | undefined | ConfigDefaultArgs> = $Result.GetResult<Prisma.$ConfigPayload, S>

  type ConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConfigCountAggregateInputType | true
    }

  export interface ConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Config'], meta: { name: 'Config' } }
    /**
     * Find zero or one Config that matches the filter.
     * @param {ConfigFindUniqueArgs} args - Arguments to find a Config
     * @example
     * // Get one Config
     * const config = await prisma.config.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConfigFindUniqueArgs>(args: SelectSubset<T, ConfigFindUniqueArgs<ExtArgs>>): Prisma__ConfigClient<$Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Config that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConfigFindUniqueOrThrowArgs} args - Arguments to find a Config
     * @example
     * // Get one Config
     * const config = await prisma.config.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, ConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConfigClient<$Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Config that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigFindFirstArgs} args - Arguments to find a Config
     * @example
     * // Get one Config
     * const config = await prisma.config.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConfigFindFirstArgs>(args?: SelectSubset<T, ConfigFindFirstArgs<ExtArgs>>): Prisma__ConfigClient<$Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Config that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigFindFirstOrThrowArgs} args - Arguments to find a Config
     * @example
     * // Get one Config
     * const config = await prisma.config.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, ConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConfigClient<$Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Configs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Configs
     * const configs = await prisma.config.findMany()
     * 
     * // Get first 10 Configs
     * const configs = await prisma.config.findMany({ take: 10 })
     * 
     * // Only select the `config_id`
     * const configWithConfig_idOnly = await prisma.config.findMany({ select: { config_id: true } })
     * 
     */
    findMany<T extends ConfigFindManyArgs>(args?: SelectSubset<T, ConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Config.
     * @param {ConfigCreateArgs} args - Arguments to create a Config.
     * @example
     * // Create one Config
     * const Config = await prisma.config.create({
     *   data: {
     *     // ... data to create a Config
     *   }
     * })
     * 
     */
    create<T extends ConfigCreateArgs>(args: SelectSubset<T, ConfigCreateArgs<ExtArgs>>): Prisma__ConfigClient<$Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Configs.
     * @param {ConfigCreateManyArgs} args - Arguments to create many Configs.
     * @example
     * // Create many Configs
     * const config = await prisma.config.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConfigCreateManyArgs>(args?: SelectSubset<T, ConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Config.
     * @param {ConfigDeleteArgs} args - Arguments to delete one Config.
     * @example
     * // Delete one Config
     * const Config = await prisma.config.delete({
     *   where: {
     *     // ... filter to delete one Config
     *   }
     * })
     * 
     */
    delete<T extends ConfigDeleteArgs>(args: SelectSubset<T, ConfigDeleteArgs<ExtArgs>>): Prisma__ConfigClient<$Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Config.
     * @param {ConfigUpdateArgs} args - Arguments to update one Config.
     * @example
     * // Update one Config
     * const config = await prisma.config.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConfigUpdateArgs>(args: SelectSubset<T, ConfigUpdateArgs<ExtArgs>>): Prisma__ConfigClient<$Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Configs.
     * @param {ConfigDeleteManyArgs} args - Arguments to filter Configs to delete.
     * @example
     * // Delete a few Configs
     * const { count } = await prisma.config.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConfigDeleteManyArgs>(args?: SelectSubset<T, ConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Configs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Configs
     * const config = await prisma.config.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConfigUpdateManyArgs>(args: SelectSubset<T, ConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Config.
     * @param {ConfigUpsertArgs} args - Arguments to update or create a Config.
     * @example
     * // Update or create a Config
     * const config = await prisma.config.upsert({
     *   create: {
     *     // ... data to create a Config
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Config we want to update
     *   }
     * })
     */
    upsert<T extends ConfigUpsertArgs>(args: SelectSubset<T, ConfigUpsertArgs<ExtArgs>>): Prisma__ConfigClient<$Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Configs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigCountArgs} args - Arguments to filter Configs to count.
     * @example
     * // Count the number of Configs
     * const count = await prisma.config.count({
     *   where: {
     *     // ... the filter for the Configs we want to count
     *   }
     * })
    **/
    count<T extends ConfigCountArgs>(
      args?: Subset<T, ConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Config.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConfigAggregateArgs>(args: Subset<T, ConfigAggregateArgs>): Prisma.PrismaPromise<GetConfigAggregateType<T>>

    /**
     * Group by Config.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConfigGroupByArgs['orderBy'] }
        : { orderBy?: ConfigGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Config model
   */
  readonly fields: ConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Config.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Config model
   */
  interface ConfigFieldRefs {
    readonly config_id: FieldRef<"Config", 'Int'>
    readonly name: FieldRef<"Config", 'String'>
    readonly value: FieldRef<"Config", 'Json'>
    readonly description: FieldRef<"Config", 'String'>
    readonly status: FieldRef<"Config", 'Boolean'>
    readonly created_at: FieldRef<"Config", 'DateTime'>
    readonly updated_at: FieldRef<"Config", 'DateTime'>
    readonly deleted_at: FieldRef<"Config", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Config findUnique
   */
  export type ConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Config
     */
    omit?: ConfigOmit<ExtArgs> | null
    /**
     * Filter, which Config to fetch.
     */
    where: ConfigWhereUniqueInput
  }

  /**
   * Config findUniqueOrThrow
   */
  export type ConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Config
     */
    omit?: ConfigOmit<ExtArgs> | null
    /**
     * Filter, which Config to fetch.
     */
    where: ConfigWhereUniqueInput
  }

  /**
   * Config findFirst
   */
  export type ConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Config
     */
    omit?: ConfigOmit<ExtArgs> | null
    /**
     * Filter, which Config to fetch.
     */
    where?: ConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Configs to fetch.
     */
    orderBy?: ConfigOrderByWithRelationInput | ConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Configs.
     */
    cursor?: ConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Configs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Configs.
     */
    distinct?: ConfigScalarFieldEnum | ConfigScalarFieldEnum[]
  }

  /**
   * Config findFirstOrThrow
   */
  export type ConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Config
     */
    omit?: ConfigOmit<ExtArgs> | null
    /**
     * Filter, which Config to fetch.
     */
    where?: ConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Configs to fetch.
     */
    orderBy?: ConfigOrderByWithRelationInput | ConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Configs.
     */
    cursor?: ConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Configs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Configs.
     */
    distinct?: ConfigScalarFieldEnum | ConfigScalarFieldEnum[]
  }

  /**
   * Config findMany
   */
  export type ConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Config
     */
    omit?: ConfigOmit<ExtArgs> | null
    /**
     * Filter, which Configs to fetch.
     */
    where?: ConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Configs to fetch.
     */
    orderBy?: ConfigOrderByWithRelationInput | ConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Configs.
     */
    cursor?: ConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Configs.
     */
    skip?: number
    distinct?: ConfigScalarFieldEnum | ConfigScalarFieldEnum[]
  }

  /**
   * Config create
   */
  export type ConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Config
     */
    omit?: ConfigOmit<ExtArgs> | null
    /**
     * The data needed to create a Config.
     */
    data?: XOR<ConfigCreateInput, ConfigUncheckedCreateInput>
  }

  /**
   * Config createMany
   */
  export type ConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Configs.
     */
    data: ConfigCreateManyInput | ConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Config update
   */
  export type ConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Config
     */
    omit?: ConfigOmit<ExtArgs> | null
    /**
     * The data needed to update a Config.
     */
    data: XOR<ConfigUpdateInput, ConfigUncheckedUpdateInput>
    /**
     * Choose, which Config to update.
     */
    where: ConfigWhereUniqueInput
  }

  /**
   * Config updateMany
   */
  export type ConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Configs.
     */
    data: XOR<ConfigUpdateManyMutationInput, ConfigUncheckedUpdateManyInput>
    /**
     * Filter which Configs to update
     */
    where?: ConfigWhereInput
    /**
     * Limit how many Configs to update.
     */
    limit?: number
  }

  /**
   * Config upsert
   */
  export type ConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Config
     */
    omit?: ConfigOmit<ExtArgs> | null
    /**
     * The filter to search for the Config to update in case it exists.
     */
    where: ConfigWhereUniqueInput
    /**
     * In case the Config found by the `where` argument doesn't exist, create a new Config with this data.
     */
    create: XOR<ConfigCreateInput, ConfigUncheckedCreateInput>
    /**
     * In case the Config was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConfigUpdateInput, ConfigUncheckedUpdateInput>
  }

  /**
   * Config delete
   */
  export type ConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Config
     */
    omit?: ConfigOmit<ExtArgs> | null
    /**
     * Filter which Config to delete.
     */
    where: ConfigWhereUniqueInput
  }

  /**
   * Config deleteMany
   */
  export type ConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Configs to delete
     */
    where?: ConfigWhereInput
    /**
     * Limit how many Configs to delete.
     */
    limit?: number
  }

  /**
   * Config without action
   */
  export type ConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Config
     */
    omit?: ConfigOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
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

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const DivisionScalarFieldEnum: {
    id: 'id',
    division_name: 'division_name',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type DivisionScalarFieldEnum = (typeof DivisionScalarFieldEnum)[keyof typeof DivisionScalarFieldEnum]


  export const QuestionScalarFieldEnum: {
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

  export type QuestionScalarFieldEnum = (typeof QuestionScalarFieldEnum)[keyof typeof QuestionScalarFieldEnum]


  export const AttachmentScalarFieldEnum: {
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

  export type AttachmentScalarFieldEnum = (typeof AttachmentScalarFieldEnum)[keyof typeof AttachmentScalarFieldEnum]


  export const AnswerScalarFieldEnum: {
    answer_id: 'answer_id',
    content: 'content',
    is_accepted: 'is_accepted',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at',
    question_id: 'question_id',
    user_id: 'user_id'
  };

  export type AnswerScalarFieldEnum = (typeof AnswerScalarFieldEnum)[keyof typeof AnswerScalarFieldEnum]


  export const CommentScalarFieldEnum: {
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

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const LikeScalarFieldEnum: {
    user_id: 'user_id',
    answer_id: 'answer_id',
    created_at: 'created_at',
    like_id: 'like_id',
    question_id: 'question_id'
  };

  export type LikeScalarFieldEnum = (typeof LikeScalarFieldEnum)[keyof typeof LikeScalarFieldEnum]


  export const TagScalarFieldEnum: {
    tag_id: 'tag_id',
    name: 'name',
    created_at: 'created_at',
    deleted_at: 'deleted_at'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const TagsOnQuestionsScalarFieldEnum: {
    question_id: 'question_id',
    tag_id: 'tag_id',
    assigned_at: 'assigned_at',
    deleted_at: 'deleted_at'
  };

  export type TagsOnQuestionsScalarFieldEnum = (typeof TagsOnQuestionsScalarFieldEnum)[keyof typeof TagsOnQuestionsScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    content: 'content',
    is_read: 'is_read',
    created_at: 'created_at',
    user_id: 'user_id',
    question_id: 'question_id',
    answer_id: 'answer_id',
    notification_type: 'notification_type'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const ConfigScalarFieldEnum: {
    config_id: 'config_id',
    name: 'name',
    value: 'value',
    description: 'description',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type ConfigScalarFieldEnum = (typeof ConfigScalarFieldEnum)[keyof typeof ConfigScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    first_name: 'first_name',
    last_name: 'last_name',
    username: 'username',
    password: 'password',
    token: 'token',
    email: 'email',
    profile_picture: 'profile_picture'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const RoleOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type RoleOrderByRelevanceFieldEnum = (typeof RoleOrderByRelevanceFieldEnum)[keyof typeof RoleOrderByRelevanceFieldEnum]


  export const DivisionOrderByRelevanceFieldEnum: {
    division_name: 'division_name'
  };

  export type DivisionOrderByRelevanceFieldEnum = (typeof DivisionOrderByRelevanceFieldEnum)[keyof typeof DivisionOrderByRelevanceFieldEnum]


  export const QuestionOrderByRelevanceFieldEnum: {
    title: 'title',
    content: 'content'
  };

  export type QuestionOrderByRelevanceFieldEnum = (typeof QuestionOrderByRelevanceFieldEnum)[keyof typeof QuestionOrderByRelevanceFieldEnum]


  export const AttachmentOrderByRelevanceFieldEnum: {
    file_name: 'file_name',
    file_path: 'file_path'
  };

  export type AttachmentOrderByRelevanceFieldEnum = (typeof AttachmentOrderByRelevanceFieldEnum)[keyof typeof AttachmentOrderByRelevanceFieldEnum]


  export const AnswerOrderByRelevanceFieldEnum: {
    content: 'content'
  };

  export type AnswerOrderByRelevanceFieldEnum = (typeof AnswerOrderByRelevanceFieldEnum)[keyof typeof AnswerOrderByRelevanceFieldEnum]


  export const CommentOrderByRelevanceFieldEnum: {
    content: 'content'
  };

  export type CommentOrderByRelevanceFieldEnum = (typeof CommentOrderByRelevanceFieldEnum)[keyof typeof CommentOrderByRelevanceFieldEnum]


  export const TagOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type TagOrderByRelevanceFieldEnum = (typeof TagOrderByRelevanceFieldEnum)[keyof typeof TagOrderByRelevanceFieldEnum]


  export const NotificationOrderByRelevanceFieldEnum: {
    content: 'content'
  };

  export type NotificationOrderByRelevanceFieldEnum = (typeof NotificationOrderByRelevanceFieldEnum)[keyof typeof NotificationOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const ConfigOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description'
  };

  export type ConfigOrderByRelevanceFieldEnum = (typeof ConfigOrderByRelevanceFieldEnum)[keyof typeof ConfigOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'QuestionStatus'
   */
  export type EnumQuestionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuestionStatus'>
    


  /**
   * Reference to a field of type 'CollaboratorType'
   */
  export type EnumCollaboratorTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CollaboratorType'>
    


  /**
   * Reference to a field of type 'NotificationType'
   */
  export type EnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    first_name?: StringNullableFilter<"User"> | string | null
    last_name?: StringNullableFilter<"User"> | string | null
    username?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    token?: StringNullableFilter<"User"> | string | null
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeNullableFilter<"User"> | Date | string | null
    role_id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    division_id?: IntNullableFilter<"User"> | number | null
    user_id?: IntFilter<"User"> | number
    profile_picture?: StringNullableFilter<"User"> | string | null
    answers?: AnswerListRelationFilter
    comments?: CommentListRelationFilter
    likes?: LikeListRelationFilter
    notifications?: NotificationListRelationFilter
    assigned_questions?: QuestionListRelationFilter
    created_questions?: QuestionListRelationFilter
    division?: XOR<DivisionNullableScalarRelationFilter, DivisionWhereInput> | null
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
  }

  export type UserOrderByWithRelationInput = {
    first_name?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    password?: SortOrder
    token?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    role_id?: SortOrder
    email?: SortOrder
    division_id?: SortOrderInput | SortOrder
    user_id?: SortOrder
    profile_picture?: SortOrderInput | SortOrder
    answers?: AnswerOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    likes?: LikeOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
    assigned_questions?: QuestionOrderByRelationAggregateInput
    created_questions?: QuestionOrderByRelationAggregateInput
    division?: DivisionOrderByWithRelationInput
    role?: RoleOrderByWithRelationInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    token?: string
    email?: string
    user_id?: number
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    first_name?: StringNullableFilter<"User"> | string | null
    last_name?: StringNullableFilter<"User"> | string | null
    username?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeNullableFilter<"User"> | Date | string | null
    role_id?: IntFilter<"User"> | number
    division_id?: IntNullableFilter<"User"> | number | null
    profile_picture?: StringNullableFilter<"User"> | string | null
    answers?: AnswerListRelationFilter
    comments?: CommentListRelationFilter
    likes?: LikeListRelationFilter
    notifications?: NotificationListRelationFilter
    assigned_questions?: QuestionListRelationFilter
    created_questions?: QuestionListRelationFilter
    division?: XOR<DivisionNullableScalarRelationFilter, DivisionWhereInput> | null
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
  }, "user_id" | "token" | "email">

  export type UserOrderByWithAggregationInput = {
    first_name?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    password?: SortOrder
    token?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    role_id?: SortOrder
    email?: SortOrder
    division_id?: SortOrderInput | SortOrder
    user_id?: SortOrder
    profile_picture?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    first_name?: StringNullableWithAggregatesFilter<"User"> | string | null
    last_name?: StringNullableWithAggregatesFilter<"User"> | string | null
    username?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    token?: StringNullableWithAggregatesFilter<"User"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    role_id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    division_id?: IntNullableWithAggregatesFilter<"User"> | number | null
    user_id?: IntWithAggregatesFilter<"User"> | number
    profile_picture?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: IntFilter<"Role"> | number
    name?: StringFilter<"Role"> | string
    status?: BoolFilter<"Role"> | boolean
    created_at?: DateTimeFilter<"Role"> | Date | string
    updated_at?: DateTimeNullableFilter<"Role"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"Role"> | Date | string | null
    users?: UserListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    users?: UserOrderByRelationAggregateInput
    _relevance?: RoleOrderByRelevanceInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    status?: BoolFilter<"Role"> | boolean
    created_at?: DateTimeFilter<"Role"> | Date | string
    updated_at?: DateTimeNullableFilter<"Role"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"Role"> | Date | string | null
    users?: UserListRelationFilter
  }, "id" | "name">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: RoleCountOrderByAggregateInput
    _avg?: RoleAvgOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
    _sum?: RoleSumOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Role"> | number
    name?: StringWithAggregatesFilter<"Role"> | string
    status?: BoolWithAggregatesFilter<"Role"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"Role"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"Role"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"Role"> | Date | string | null
  }

  export type DivisionWhereInput = {
    AND?: DivisionWhereInput | DivisionWhereInput[]
    OR?: DivisionWhereInput[]
    NOT?: DivisionWhereInput | DivisionWhereInput[]
    id?: IntFilter<"Division"> | number
    division_name?: StringFilter<"Division"> | string
    created_at?: DateTimeFilter<"Division"> | Date | string
    updated_at?: DateTimeNullableFilter<"Division"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"Division"> | Date | string | null
    assigned_questions?: QuestionListRelationFilter
    users?: UserListRelationFilter
  }

  export type DivisionOrderByWithRelationInput = {
    id?: SortOrder
    division_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    assigned_questions?: QuestionOrderByRelationAggregateInput
    users?: UserOrderByRelationAggregateInput
    _relevance?: DivisionOrderByRelevanceInput
  }

  export type DivisionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DivisionWhereInput | DivisionWhereInput[]
    OR?: DivisionWhereInput[]
    NOT?: DivisionWhereInput | DivisionWhereInput[]
    division_name?: StringFilter<"Division"> | string
    created_at?: DateTimeFilter<"Division"> | Date | string
    updated_at?: DateTimeNullableFilter<"Division"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"Division"> | Date | string | null
    assigned_questions?: QuestionListRelationFilter
    users?: UserListRelationFilter
  }, "id">

  export type DivisionOrderByWithAggregationInput = {
    id?: SortOrder
    division_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: DivisionCountOrderByAggregateInput
    _avg?: DivisionAvgOrderByAggregateInput
    _max?: DivisionMaxOrderByAggregateInput
    _min?: DivisionMinOrderByAggregateInput
    _sum?: DivisionSumOrderByAggregateInput
  }

  export type DivisionScalarWhereWithAggregatesInput = {
    AND?: DivisionScalarWhereWithAggregatesInput | DivisionScalarWhereWithAggregatesInput[]
    OR?: DivisionScalarWhereWithAggregatesInput[]
    NOT?: DivisionScalarWhereWithAggregatesInput | DivisionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Division"> | number
    division_name?: StringWithAggregatesFilter<"Division"> | string
    created_at?: DateTimeWithAggregatesFilter<"Division"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"Division"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"Division"> | Date | string | null
  }

  export type QuestionWhereInput = {
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    question_id?: IntFilter<"Question"> | number
    title?: StringFilter<"Question"> | string
    content?: StringFilter<"Question"> | string
    status?: EnumQuestionStatusFilter<"Question"> | $Enums.QuestionStatus
    created_at?: DateTimeFilter<"Question"> | Date | string
    due_date?: DateTimeNullableFilter<"Question"> | Date | string | null
    is_published?: BoolFilter<"Question"> | boolean
    updated_at?: DateTimeNullableFilter<"Question"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"Question"> | Date | string | null
    collaborator_id?: IntNullableFilter<"Question"> | number | null
    collaborator_division_id?: IntNullableFilter<"Question"> | number | null
    collaborator_type?: EnumCollaboratorTypeFilter<"Question"> | $Enums.CollaboratorType
    creator_id?: IntFilter<"Question"> | number
    answers?: AnswerListRelationFilter
    comments?: CommentListRelationFilter
    likes?: LikeListRelationFilter
    notifications?: NotificationListRelationFilter
    collaborator_division?: XOR<DivisionNullableScalarRelationFilter, DivisionWhereInput> | null
    collaborator?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    tags?: TagsOnQuestionsListRelationFilter
    attachment?: AttachmentListRelationFilter
  }

  export type QuestionOrderByWithRelationInput = {
    question_id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    due_date?: SortOrderInput | SortOrder
    is_published?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    collaborator_id?: SortOrderInput | SortOrder
    collaborator_division_id?: SortOrderInput | SortOrder
    collaborator_type?: SortOrder
    creator_id?: SortOrder
    answers?: AnswerOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    likes?: LikeOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
    collaborator_division?: DivisionOrderByWithRelationInput
    collaborator?: UserOrderByWithRelationInput
    creator?: UserOrderByWithRelationInput
    tags?: TagsOnQuestionsOrderByRelationAggregateInput
    attachment?: AttachmentOrderByRelationAggregateInput
    _relevance?: QuestionOrderByRelevanceInput
  }

  export type QuestionWhereUniqueInput = Prisma.AtLeast<{
    question_id?: number
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    title?: StringFilter<"Question"> | string
    content?: StringFilter<"Question"> | string
    status?: EnumQuestionStatusFilter<"Question"> | $Enums.QuestionStatus
    created_at?: DateTimeFilter<"Question"> | Date | string
    due_date?: DateTimeNullableFilter<"Question"> | Date | string | null
    is_published?: BoolFilter<"Question"> | boolean
    updated_at?: DateTimeNullableFilter<"Question"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"Question"> | Date | string | null
    collaborator_id?: IntNullableFilter<"Question"> | number | null
    collaborator_division_id?: IntNullableFilter<"Question"> | number | null
    collaborator_type?: EnumCollaboratorTypeFilter<"Question"> | $Enums.CollaboratorType
    creator_id?: IntFilter<"Question"> | number
    answers?: AnswerListRelationFilter
    comments?: CommentListRelationFilter
    likes?: LikeListRelationFilter
    notifications?: NotificationListRelationFilter
    collaborator_division?: XOR<DivisionNullableScalarRelationFilter, DivisionWhereInput> | null
    collaborator?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    tags?: TagsOnQuestionsListRelationFilter
    attachment?: AttachmentListRelationFilter
  }, "question_id">

  export type QuestionOrderByWithAggregationInput = {
    question_id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    due_date?: SortOrderInput | SortOrder
    is_published?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    collaborator_id?: SortOrderInput | SortOrder
    collaborator_division_id?: SortOrderInput | SortOrder
    collaborator_type?: SortOrder
    creator_id?: SortOrder
    _count?: QuestionCountOrderByAggregateInput
    _avg?: QuestionAvgOrderByAggregateInput
    _max?: QuestionMaxOrderByAggregateInput
    _min?: QuestionMinOrderByAggregateInput
    _sum?: QuestionSumOrderByAggregateInput
  }

  export type QuestionScalarWhereWithAggregatesInput = {
    AND?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    OR?: QuestionScalarWhereWithAggregatesInput[]
    NOT?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    question_id?: IntWithAggregatesFilter<"Question"> | number
    title?: StringWithAggregatesFilter<"Question"> | string
    content?: StringWithAggregatesFilter<"Question"> | string
    status?: EnumQuestionStatusWithAggregatesFilter<"Question"> | $Enums.QuestionStatus
    created_at?: DateTimeWithAggregatesFilter<"Question"> | Date | string
    due_date?: DateTimeNullableWithAggregatesFilter<"Question"> | Date | string | null
    is_published?: BoolWithAggregatesFilter<"Question"> | boolean
    updated_at?: DateTimeNullableWithAggregatesFilter<"Question"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"Question"> | Date | string | null
    collaborator_id?: IntNullableWithAggregatesFilter<"Question"> | number | null
    collaborator_division_id?: IntNullableWithAggregatesFilter<"Question"> | number | null
    collaborator_type?: EnumCollaboratorTypeWithAggregatesFilter<"Question"> | $Enums.CollaboratorType
    creator_id?: IntWithAggregatesFilter<"Question"> | number
  }

  export type AttachmentWhereInput = {
    AND?: AttachmentWhereInput | AttachmentWhereInput[]
    OR?: AttachmentWhereInput[]
    NOT?: AttachmentWhereInput | AttachmentWhereInput[]
    attachment_id?: IntFilter<"Attachment"> | number
    file_name?: StringFilter<"Attachment"> | string
    file_path?: StringFilter<"Attachment"> | string
    created_at?: DateTimeFilter<"Attachment"> | Date | string
    updated_at?: DateTimeNullableFilter<"Attachment"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"Attachment"> | Date | string | null
    question_id?: IntNullableFilter<"Attachment"> | number | null
    answer_id?: IntNullableFilter<"Attachment"> | number | null
    comment_id?: IntNullableFilter<"Attachment"> | number | null
    question?: XOR<QuestionNullableScalarRelationFilter, QuestionWhereInput> | null
    answer?: XOR<AnswerNullableScalarRelationFilter, AnswerWhereInput> | null
    comment?: XOR<CommentNullableScalarRelationFilter, CommentWhereInput> | null
  }

  export type AttachmentOrderByWithRelationInput = {
    attachment_id?: SortOrder
    file_name?: SortOrder
    file_path?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    question_id?: SortOrderInput | SortOrder
    answer_id?: SortOrderInput | SortOrder
    comment_id?: SortOrderInput | SortOrder
    question?: QuestionOrderByWithRelationInput
    answer?: AnswerOrderByWithRelationInput
    comment?: CommentOrderByWithRelationInput
    _relevance?: AttachmentOrderByRelevanceInput
  }

  export type AttachmentWhereUniqueInput = Prisma.AtLeast<{
    attachment_id?: number
    AND?: AttachmentWhereInput | AttachmentWhereInput[]
    OR?: AttachmentWhereInput[]
    NOT?: AttachmentWhereInput | AttachmentWhereInput[]
    file_name?: StringFilter<"Attachment"> | string
    file_path?: StringFilter<"Attachment"> | string
    created_at?: DateTimeFilter<"Attachment"> | Date | string
    updated_at?: DateTimeNullableFilter<"Attachment"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"Attachment"> | Date | string | null
    question_id?: IntNullableFilter<"Attachment"> | number | null
    answer_id?: IntNullableFilter<"Attachment"> | number | null
    comment_id?: IntNullableFilter<"Attachment"> | number | null
    question?: XOR<QuestionNullableScalarRelationFilter, QuestionWhereInput> | null
    answer?: XOR<AnswerNullableScalarRelationFilter, AnswerWhereInput> | null
    comment?: XOR<CommentNullableScalarRelationFilter, CommentWhereInput> | null
  }, "attachment_id">

  export type AttachmentOrderByWithAggregationInput = {
    attachment_id?: SortOrder
    file_name?: SortOrder
    file_path?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    question_id?: SortOrderInput | SortOrder
    answer_id?: SortOrderInput | SortOrder
    comment_id?: SortOrderInput | SortOrder
    _count?: AttachmentCountOrderByAggregateInput
    _avg?: AttachmentAvgOrderByAggregateInput
    _max?: AttachmentMaxOrderByAggregateInput
    _min?: AttachmentMinOrderByAggregateInput
    _sum?: AttachmentSumOrderByAggregateInput
  }

  export type AttachmentScalarWhereWithAggregatesInput = {
    AND?: AttachmentScalarWhereWithAggregatesInput | AttachmentScalarWhereWithAggregatesInput[]
    OR?: AttachmentScalarWhereWithAggregatesInput[]
    NOT?: AttachmentScalarWhereWithAggregatesInput | AttachmentScalarWhereWithAggregatesInput[]
    attachment_id?: IntWithAggregatesFilter<"Attachment"> | number
    file_name?: StringWithAggregatesFilter<"Attachment"> | string
    file_path?: StringWithAggregatesFilter<"Attachment"> | string
    created_at?: DateTimeWithAggregatesFilter<"Attachment"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"Attachment"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"Attachment"> | Date | string | null
    question_id?: IntNullableWithAggregatesFilter<"Attachment"> | number | null
    answer_id?: IntNullableWithAggregatesFilter<"Attachment"> | number | null
    comment_id?: IntNullableWithAggregatesFilter<"Attachment"> | number | null
  }

  export type AnswerWhereInput = {
    AND?: AnswerWhereInput | AnswerWhereInput[]
    OR?: AnswerWhereInput[]
    NOT?: AnswerWhereInput | AnswerWhereInput[]
    answer_id?: IntFilter<"Answer"> | number
    content?: StringFilter<"Answer"> | string
    is_accepted?: BoolFilter<"Answer"> | boolean
    created_at?: DateTimeFilter<"Answer"> | Date | string
    updated_at?: DateTimeNullableFilter<"Answer"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"Answer"> | Date | string | null
    question_id?: IntFilter<"Answer"> | number
    user_id?: IntFilter<"Answer"> | number
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    comments?: CommentListRelationFilter
    likes?: LikeListRelationFilter
    notifications?: NotificationListRelationFilter
    attachment?: AttachmentListRelationFilter
  }

  export type AnswerOrderByWithRelationInput = {
    answer_id?: SortOrder
    content?: SortOrder
    is_accepted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    question_id?: SortOrder
    user_id?: SortOrder
    question?: QuestionOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    comments?: CommentOrderByRelationAggregateInput
    likes?: LikeOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
    attachment?: AttachmentOrderByRelationAggregateInput
    _relevance?: AnswerOrderByRelevanceInput
  }

  export type AnswerWhereUniqueInput = Prisma.AtLeast<{
    answer_id?: number
    AND?: AnswerWhereInput | AnswerWhereInput[]
    OR?: AnswerWhereInput[]
    NOT?: AnswerWhereInput | AnswerWhereInput[]
    content?: StringFilter<"Answer"> | string
    is_accepted?: BoolFilter<"Answer"> | boolean
    created_at?: DateTimeFilter<"Answer"> | Date | string
    updated_at?: DateTimeNullableFilter<"Answer"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"Answer"> | Date | string | null
    question_id?: IntFilter<"Answer"> | number
    user_id?: IntFilter<"Answer"> | number
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    comments?: CommentListRelationFilter
    likes?: LikeListRelationFilter
    notifications?: NotificationListRelationFilter
    attachment?: AttachmentListRelationFilter
  }, "answer_id">

  export type AnswerOrderByWithAggregationInput = {
    answer_id?: SortOrder
    content?: SortOrder
    is_accepted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    question_id?: SortOrder
    user_id?: SortOrder
    _count?: AnswerCountOrderByAggregateInput
    _avg?: AnswerAvgOrderByAggregateInput
    _max?: AnswerMaxOrderByAggregateInput
    _min?: AnswerMinOrderByAggregateInput
    _sum?: AnswerSumOrderByAggregateInput
  }

  export type AnswerScalarWhereWithAggregatesInput = {
    AND?: AnswerScalarWhereWithAggregatesInput | AnswerScalarWhereWithAggregatesInput[]
    OR?: AnswerScalarWhereWithAggregatesInput[]
    NOT?: AnswerScalarWhereWithAggregatesInput | AnswerScalarWhereWithAggregatesInput[]
    answer_id?: IntWithAggregatesFilter<"Answer"> | number
    content?: StringWithAggregatesFilter<"Answer"> | string
    is_accepted?: BoolWithAggregatesFilter<"Answer"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"Answer"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"Answer"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"Answer"> | Date | string | null
    question_id?: IntWithAggregatesFilter<"Answer"> | number
    user_id?: IntWithAggregatesFilter<"Answer"> | number
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    user_id?: IntFilter<"Comment"> | number
    answer_id?: IntNullableFilter<"Comment"> | number | null
    comment_id?: IntFilter<"Comment"> | number
    content?: StringFilter<"Comment"> | string
    created_at?: DateTimeFilter<"Comment"> | Date | string
    parent_id?: IntNullableFilter<"Comment"> | number | null
    question_id?: IntNullableFilter<"Comment"> | number | null
    updated_at?: DateTimeNullableFilter<"Comment"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"Comment"> | Date | string | null
    answer?: XOR<AnswerNullableScalarRelationFilter, AnswerWhereInput> | null
    parent?: XOR<CommentNullableScalarRelationFilter, CommentWhereInput> | null
    replies?: CommentListRelationFilter
    question?: XOR<QuestionNullableScalarRelationFilter, QuestionWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    Attachment?: AttachmentListRelationFilter
  }

  export type CommentOrderByWithRelationInput = {
    user_id?: SortOrder
    answer_id?: SortOrderInput | SortOrder
    comment_id?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    parent_id?: SortOrderInput | SortOrder
    question_id?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    answer?: AnswerOrderByWithRelationInput
    parent?: CommentOrderByWithRelationInput
    replies?: CommentOrderByRelationAggregateInput
    question?: QuestionOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    Attachment?: AttachmentOrderByRelationAggregateInput
    _relevance?: CommentOrderByRelevanceInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    comment_id?: number
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    user_id?: IntFilter<"Comment"> | number
    answer_id?: IntNullableFilter<"Comment"> | number | null
    content?: StringFilter<"Comment"> | string
    created_at?: DateTimeFilter<"Comment"> | Date | string
    parent_id?: IntNullableFilter<"Comment"> | number | null
    question_id?: IntNullableFilter<"Comment"> | number | null
    updated_at?: DateTimeNullableFilter<"Comment"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"Comment"> | Date | string | null
    answer?: XOR<AnswerNullableScalarRelationFilter, AnswerWhereInput> | null
    parent?: XOR<CommentNullableScalarRelationFilter, CommentWhereInput> | null
    replies?: CommentListRelationFilter
    question?: XOR<QuestionNullableScalarRelationFilter, QuestionWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    Attachment?: AttachmentListRelationFilter
  }, "comment_id">

  export type CommentOrderByWithAggregationInput = {
    user_id?: SortOrder
    answer_id?: SortOrderInput | SortOrder
    comment_id?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    parent_id?: SortOrderInput | SortOrder
    question_id?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: CommentCountOrderByAggregateInput
    _avg?: CommentAvgOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
    _sum?: CommentSumOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"Comment"> | number
    answer_id?: IntNullableWithAggregatesFilter<"Comment"> | number | null
    comment_id?: IntWithAggregatesFilter<"Comment"> | number
    content?: StringWithAggregatesFilter<"Comment"> | string
    created_at?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
    parent_id?: IntNullableWithAggregatesFilter<"Comment"> | number | null
    question_id?: IntNullableWithAggregatesFilter<"Comment"> | number | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"Comment"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"Comment"> | Date | string | null
  }

  export type LikeWhereInput = {
    AND?: LikeWhereInput | LikeWhereInput[]
    OR?: LikeWhereInput[]
    NOT?: LikeWhereInput | LikeWhereInput[]
    user_id?: IntFilter<"Like"> | number
    answer_id?: IntNullableFilter<"Like"> | number | null
    created_at?: DateTimeFilter<"Like"> | Date | string
    like_id?: IntFilter<"Like"> | number
    question_id?: IntNullableFilter<"Like"> | number | null
    answer?: XOR<AnswerNullableScalarRelationFilter, AnswerWhereInput> | null
    question?: XOR<QuestionNullableScalarRelationFilter, QuestionWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type LikeOrderByWithRelationInput = {
    user_id?: SortOrder
    answer_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    like_id?: SortOrder
    question_id?: SortOrderInput | SortOrder
    answer?: AnswerOrderByWithRelationInput
    question?: QuestionOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type LikeWhereUniqueInput = Prisma.AtLeast<{
    like_id?: number
    user_id_question_id_answer_id?: LikeUser_idQuestion_idAnswer_idCompoundUniqueInput
    AND?: LikeWhereInput | LikeWhereInput[]
    OR?: LikeWhereInput[]
    NOT?: LikeWhereInput | LikeWhereInput[]
    user_id?: IntFilter<"Like"> | number
    answer_id?: IntNullableFilter<"Like"> | number | null
    created_at?: DateTimeFilter<"Like"> | Date | string
    question_id?: IntNullableFilter<"Like"> | number | null
    answer?: XOR<AnswerNullableScalarRelationFilter, AnswerWhereInput> | null
    question?: XOR<QuestionNullableScalarRelationFilter, QuestionWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "like_id" | "user_id_question_id_answer_id">

  export type LikeOrderByWithAggregationInput = {
    user_id?: SortOrder
    answer_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    like_id?: SortOrder
    question_id?: SortOrderInput | SortOrder
    _count?: LikeCountOrderByAggregateInput
    _avg?: LikeAvgOrderByAggregateInput
    _max?: LikeMaxOrderByAggregateInput
    _min?: LikeMinOrderByAggregateInput
    _sum?: LikeSumOrderByAggregateInput
  }

  export type LikeScalarWhereWithAggregatesInput = {
    AND?: LikeScalarWhereWithAggregatesInput | LikeScalarWhereWithAggregatesInput[]
    OR?: LikeScalarWhereWithAggregatesInput[]
    NOT?: LikeScalarWhereWithAggregatesInput | LikeScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"Like"> | number
    answer_id?: IntNullableWithAggregatesFilter<"Like"> | number | null
    created_at?: DateTimeWithAggregatesFilter<"Like"> | Date | string
    like_id?: IntWithAggregatesFilter<"Like"> | number
    question_id?: IntNullableWithAggregatesFilter<"Like"> | number | null
  }

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    tag_id?: IntFilter<"Tag"> | number
    name?: StringFilter<"Tag"> | string
    created_at?: DateTimeFilter<"Tag"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Tag"> | Date | string | null
    questions?: TagsOnQuestionsListRelationFilter
  }

  export type TagOrderByWithRelationInput = {
    tag_id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    questions?: TagsOnQuestionsOrderByRelationAggregateInput
    _relevance?: TagOrderByRelevanceInput
  }

  export type TagWhereUniqueInput = Prisma.AtLeast<{
    tag_id?: number
    name?: string
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    created_at?: DateTimeFilter<"Tag"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Tag"> | Date | string | null
    questions?: TagsOnQuestionsListRelationFilter
  }, "tag_id" | "name">

  export type TagOrderByWithAggregationInput = {
    tag_id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: TagCountOrderByAggregateInput
    _avg?: TagAvgOrderByAggregateInput
    _max?: TagMaxOrderByAggregateInput
    _min?: TagMinOrderByAggregateInput
    _sum?: TagSumOrderByAggregateInput
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    OR?: TagScalarWhereWithAggregatesInput[]
    NOT?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    tag_id?: IntWithAggregatesFilter<"Tag"> | number
    name?: StringWithAggregatesFilter<"Tag"> | string
    created_at?: DateTimeWithAggregatesFilter<"Tag"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"Tag"> | Date | string | null
  }

  export type TagsOnQuestionsWhereInput = {
    AND?: TagsOnQuestionsWhereInput | TagsOnQuestionsWhereInput[]
    OR?: TagsOnQuestionsWhereInput[]
    NOT?: TagsOnQuestionsWhereInput | TagsOnQuestionsWhereInput[]
    question_id?: IntFilter<"TagsOnQuestions"> | number
    tag_id?: IntFilter<"TagsOnQuestions"> | number
    assigned_at?: DateTimeFilter<"TagsOnQuestions"> | Date | string
    deleted_at?: DateTimeNullableFilter<"TagsOnQuestions"> | Date | string | null
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }

  export type TagsOnQuestionsOrderByWithRelationInput = {
    question_id?: SortOrder
    tag_id?: SortOrder
    assigned_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    question?: QuestionOrderByWithRelationInput
    tag?: TagOrderByWithRelationInput
  }

  export type TagsOnQuestionsWhereUniqueInput = Prisma.AtLeast<{
    question_id_tag_id?: TagsOnQuestionsQuestion_idTag_idCompoundUniqueInput
    AND?: TagsOnQuestionsWhereInput | TagsOnQuestionsWhereInput[]
    OR?: TagsOnQuestionsWhereInput[]
    NOT?: TagsOnQuestionsWhereInput | TagsOnQuestionsWhereInput[]
    question_id?: IntFilter<"TagsOnQuestions"> | number
    tag_id?: IntFilter<"TagsOnQuestions"> | number
    assigned_at?: DateTimeFilter<"TagsOnQuestions"> | Date | string
    deleted_at?: DateTimeNullableFilter<"TagsOnQuestions"> | Date | string | null
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }, "question_id_tag_id">

  export type TagsOnQuestionsOrderByWithAggregationInput = {
    question_id?: SortOrder
    tag_id?: SortOrder
    assigned_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: TagsOnQuestionsCountOrderByAggregateInput
    _avg?: TagsOnQuestionsAvgOrderByAggregateInput
    _max?: TagsOnQuestionsMaxOrderByAggregateInput
    _min?: TagsOnQuestionsMinOrderByAggregateInput
    _sum?: TagsOnQuestionsSumOrderByAggregateInput
  }

  export type TagsOnQuestionsScalarWhereWithAggregatesInput = {
    AND?: TagsOnQuestionsScalarWhereWithAggregatesInput | TagsOnQuestionsScalarWhereWithAggregatesInput[]
    OR?: TagsOnQuestionsScalarWhereWithAggregatesInput[]
    NOT?: TagsOnQuestionsScalarWhereWithAggregatesInput | TagsOnQuestionsScalarWhereWithAggregatesInput[]
    question_id?: IntWithAggregatesFilter<"TagsOnQuestions"> | number
    tag_id?: IntWithAggregatesFilter<"TagsOnQuestions"> | number
    assigned_at?: DateTimeWithAggregatesFilter<"TagsOnQuestions"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"TagsOnQuestions"> | Date | string | null
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: IntFilter<"Notification"> | number
    content?: StringFilter<"Notification"> | string
    is_read?: BoolFilter<"Notification"> | boolean
    created_at?: DateTimeFilter<"Notification"> | Date | string
    user_id?: IntFilter<"Notification"> | number
    question_id?: IntNullableFilter<"Notification"> | number | null
    answer_id?: IntNullableFilter<"Notification"> | number | null
    notification_type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    answer?: XOR<AnswerNullableScalarRelationFilter, AnswerWhereInput> | null
    question?: XOR<QuestionNullableScalarRelationFilter, QuestionWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    is_read?: SortOrder
    created_at?: SortOrder
    user_id?: SortOrder
    question_id?: SortOrderInput | SortOrder
    answer_id?: SortOrderInput | SortOrder
    notification_type?: SortOrder
    answer?: AnswerOrderByWithRelationInput
    question?: QuestionOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    _relevance?: NotificationOrderByRelevanceInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    content?: StringFilter<"Notification"> | string
    is_read?: BoolFilter<"Notification"> | boolean
    created_at?: DateTimeFilter<"Notification"> | Date | string
    user_id?: IntFilter<"Notification"> | number
    question_id?: IntNullableFilter<"Notification"> | number | null
    answer_id?: IntNullableFilter<"Notification"> | number | null
    notification_type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    answer?: XOR<AnswerNullableScalarRelationFilter, AnswerWhereInput> | null
    question?: XOR<QuestionNullableScalarRelationFilter, QuestionWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    is_read?: SortOrder
    created_at?: SortOrder
    user_id?: SortOrder
    question_id?: SortOrderInput | SortOrder
    answer_id?: SortOrderInput | SortOrder
    notification_type?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _avg?: NotificationAvgOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
    _sum?: NotificationSumOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Notification"> | number
    content?: StringWithAggregatesFilter<"Notification"> | string
    is_read?: BoolWithAggregatesFilter<"Notification"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
    user_id?: IntWithAggregatesFilter<"Notification"> | number
    question_id?: IntNullableWithAggregatesFilter<"Notification"> | number | null
    answer_id?: IntNullableWithAggregatesFilter<"Notification"> | number | null
    notification_type?: EnumNotificationTypeWithAggregatesFilter<"Notification"> | $Enums.NotificationType
  }

  export type ConfigWhereInput = {
    AND?: ConfigWhereInput | ConfigWhereInput[]
    OR?: ConfigWhereInput[]
    NOT?: ConfigWhereInput | ConfigWhereInput[]
    config_id?: IntFilter<"Config"> | number
    name?: StringNullableFilter<"Config"> | string | null
    value?: JsonNullableFilter<"Config">
    description?: StringNullableFilter<"Config"> | string | null
    status?: BoolFilter<"Config"> | boolean
    created_at?: DateTimeFilter<"Config"> | Date | string
    updated_at?: DateTimeNullableFilter<"Config"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"Config"> | Date | string | null
  }

  export type ConfigOrderByWithRelationInput = {
    config_id?: SortOrder
    name?: SortOrderInput | SortOrder
    value?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _relevance?: ConfigOrderByRelevanceInput
  }

  export type ConfigWhereUniqueInput = Prisma.AtLeast<{
    config_id?: number
    name?: string
    AND?: ConfigWhereInput | ConfigWhereInput[]
    OR?: ConfigWhereInput[]
    NOT?: ConfigWhereInput | ConfigWhereInput[]
    value?: JsonNullableFilter<"Config">
    description?: StringNullableFilter<"Config"> | string | null
    status?: BoolFilter<"Config"> | boolean
    created_at?: DateTimeFilter<"Config"> | Date | string
    updated_at?: DateTimeNullableFilter<"Config"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"Config"> | Date | string | null
  }, "config_id" | "name">

  export type ConfigOrderByWithAggregationInput = {
    config_id?: SortOrder
    name?: SortOrderInput | SortOrder
    value?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: ConfigCountOrderByAggregateInput
    _avg?: ConfigAvgOrderByAggregateInput
    _max?: ConfigMaxOrderByAggregateInput
    _min?: ConfigMinOrderByAggregateInput
    _sum?: ConfigSumOrderByAggregateInput
  }

  export type ConfigScalarWhereWithAggregatesInput = {
    AND?: ConfigScalarWhereWithAggregatesInput | ConfigScalarWhereWithAggregatesInput[]
    OR?: ConfigScalarWhereWithAggregatesInput[]
    NOT?: ConfigScalarWhereWithAggregatesInput | ConfigScalarWhereWithAggregatesInput[]
    config_id?: IntWithAggregatesFilter<"Config"> | number
    name?: StringNullableWithAggregatesFilter<"Config"> | string | null
    value?: JsonNullableWithAggregatesFilter<"Config">
    description?: StringNullableWithAggregatesFilter<"Config"> | string | null
    status?: BoolWithAggregatesFilter<"Config"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"Config"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"Config"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"Config"> | Date | string | null
  }

  export type UserCreateInput = {
    first_name?: string | null
    last_name?: string | null
    username?: string | null
    password: string
    token?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    email: string
    profile_picture?: string | null
    answers?: AnswerCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    likes?: LikeCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    assigned_questions?: QuestionCreateNestedManyWithoutCollaboratorInput
    created_questions?: QuestionCreateNestedManyWithoutCreatorInput
    division?: DivisionCreateNestedOneWithoutUsersInput
    role: RoleCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateInput = {
    first_name?: string | null
    last_name?: string | null
    username?: string | null
    password: string
    token?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    role_id: number
    email: string
    division_id?: number | null
    user_id?: number
    profile_picture?: string | null
    answers?: AnswerUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    assigned_questions?: QuestionUncheckedCreateNestedManyWithoutCollaboratorInput
    created_questions?: QuestionUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserUpdateInput = {
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    answers?: AnswerUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    likes?: LikeUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    assigned_questions?: QuestionUpdateManyWithoutCollaboratorNestedInput
    created_questions?: QuestionUpdateManyWithoutCreatorNestedInput
    division?: DivisionUpdateOneWithoutUsersNestedInput
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    division_id?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: IntFieldUpdateOperationsInput | number
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    answers?: AnswerUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    assigned_questions?: QuestionUncheckedUpdateManyWithoutCollaboratorNestedInput
    created_questions?: QuestionUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type UserCreateManyInput = {
    first_name?: string | null
    last_name?: string | null
    username?: string | null
    password: string
    token?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    role_id: number
    email: string
    division_id?: number | null
    user_id?: number
    profile_picture?: string | null
  }

  export type UserUpdateManyMutationInput = {
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    division_id?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: IntFieldUpdateOperationsInput | number
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RoleCreateInput = {
    name: string
    status?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    users?: UserCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id?: number
    name: string
    status?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    users?: UserUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    id?: number
    name: string
    status?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type RoleUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DivisionCreateInput = {
    division_name: string
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    assigned_questions?: QuestionCreateNestedManyWithoutCollaborator_divisionInput
    users?: UserCreateNestedManyWithoutDivisionInput
  }

  export type DivisionUncheckedCreateInput = {
    id?: number
    division_name: string
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    assigned_questions?: QuestionUncheckedCreateNestedManyWithoutCollaborator_divisionInput
    users?: UserUncheckedCreateNestedManyWithoutDivisionInput
  }

  export type DivisionUpdateInput = {
    division_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assigned_questions?: QuestionUpdateManyWithoutCollaborator_divisionNestedInput
    users?: UserUpdateManyWithoutDivisionNestedInput
  }

  export type DivisionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    division_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assigned_questions?: QuestionUncheckedUpdateManyWithoutCollaborator_divisionNestedInput
    users?: UserUncheckedUpdateManyWithoutDivisionNestedInput
  }

  export type DivisionCreateManyInput = {
    id?: number
    division_name: string
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type DivisionUpdateManyMutationInput = {
    division_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DivisionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    division_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type QuestionCreateInput = {
    title: string
    content: string
    status?: $Enums.QuestionStatus
    created_at?: Date | string
    due_date?: Date | string | null
    is_published?: boolean
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    collaborator_type: $Enums.CollaboratorType
    answers?: AnswerCreateNestedManyWithoutQuestionInput
    comments?: CommentCreateNestedManyWithoutQuestionInput
    likes?: LikeCreateNestedManyWithoutQuestionInput
    notifications?: NotificationCreateNestedManyWithoutQuestionInput
    collaborator_division?: DivisionCreateNestedOneWithoutAssigned_questionsInput
    collaborator?: UserCreateNestedOneWithoutAssigned_questionsInput
    creator: UserCreateNestedOneWithoutCreated_questionsInput
    tags?: TagsOnQuestionsCreateNestedManyWithoutQuestionInput
    attachment?: AttachmentCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateInput = {
    question_id?: number
    title: string
    content: string
    status?: $Enums.QuestionStatus
    created_at?: Date | string
    due_date?: Date | string | null
    is_published?: boolean
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    collaborator_id?: number | null
    collaborator_division_id?: number | null
    collaborator_type: $Enums.CollaboratorType
    creator_id: number
    answers?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
    comments?: CommentUncheckedCreateNestedManyWithoutQuestionInput
    likes?: LikeUncheckedCreateNestedManyWithoutQuestionInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutQuestionInput
    tags?: TagsOnQuestionsUncheckedCreateNestedManyWithoutQuestionInput
    attachment?: AttachmentUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: EnumQuestionStatusFieldUpdateOperationsInput | $Enums.QuestionStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_published?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    collaborator_type?: EnumCollaboratorTypeFieldUpdateOperationsInput | $Enums.CollaboratorType
    answers?: AnswerUpdateManyWithoutQuestionNestedInput
    comments?: CommentUpdateManyWithoutQuestionNestedInput
    likes?: LikeUpdateManyWithoutQuestionNestedInput
    notifications?: NotificationUpdateManyWithoutQuestionNestedInput
    collaborator_division?: DivisionUpdateOneWithoutAssigned_questionsNestedInput
    collaborator?: UserUpdateOneWithoutAssigned_questionsNestedInput
    creator?: UserUpdateOneRequiredWithoutCreated_questionsNestedInput
    tags?: TagsOnQuestionsUpdateManyWithoutQuestionNestedInput
    attachment?: AttachmentUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateInput = {
    question_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: EnumQuestionStatusFieldUpdateOperationsInput | $Enums.QuestionStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_published?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    collaborator_id?: NullableIntFieldUpdateOperationsInput | number | null
    collaborator_division_id?: NullableIntFieldUpdateOperationsInput | number | null
    collaborator_type?: EnumCollaboratorTypeFieldUpdateOperationsInput | $Enums.CollaboratorType
    creator_id?: IntFieldUpdateOperationsInput | number
    answers?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput
    comments?: CommentUncheckedUpdateManyWithoutQuestionNestedInput
    likes?: LikeUncheckedUpdateManyWithoutQuestionNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutQuestionNestedInput
    tags?: TagsOnQuestionsUncheckedUpdateManyWithoutQuestionNestedInput
    attachment?: AttachmentUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionCreateManyInput = {
    question_id?: number
    title: string
    content: string
    status?: $Enums.QuestionStatus
    created_at?: Date | string
    due_date?: Date | string | null
    is_published?: boolean
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    collaborator_id?: number | null
    collaborator_division_id?: number | null
    collaborator_type: $Enums.CollaboratorType
    creator_id: number
  }

  export type QuestionUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: EnumQuestionStatusFieldUpdateOperationsInput | $Enums.QuestionStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_published?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    collaborator_type?: EnumCollaboratorTypeFieldUpdateOperationsInput | $Enums.CollaboratorType
  }

  export type QuestionUncheckedUpdateManyInput = {
    question_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: EnumQuestionStatusFieldUpdateOperationsInput | $Enums.QuestionStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_published?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    collaborator_id?: NullableIntFieldUpdateOperationsInput | number | null
    collaborator_division_id?: NullableIntFieldUpdateOperationsInput | number | null
    collaborator_type?: EnumCollaboratorTypeFieldUpdateOperationsInput | $Enums.CollaboratorType
    creator_id?: IntFieldUpdateOperationsInput | number
  }

  export type AttachmentCreateInput = {
    file_name: string
    file_path: string
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    question?: QuestionCreateNestedOneWithoutAttachmentInput
    answer?: AnswerCreateNestedOneWithoutAttachmentInput
    comment?: CommentCreateNestedOneWithoutAttachmentInput
  }

  export type AttachmentUncheckedCreateInput = {
    attachment_id?: number
    file_name: string
    file_path: string
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    question_id?: number | null
    answer_id?: number | null
    comment_id?: number | null
  }

  export type AttachmentUpdateInput = {
    file_name?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    question?: QuestionUpdateOneWithoutAttachmentNestedInput
    answer?: AnswerUpdateOneWithoutAttachmentNestedInput
    comment?: CommentUpdateOneWithoutAttachmentNestedInput
  }

  export type AttachmentUncheckedUpdateInput = {
    attachment_id?: IntFieldUpdateOperationsInput | number
    file_name?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    question_id?: NullableIntFieldUpdateOperationsInput | number | null
    answer_id?: NullableIntFieldUpdateOperationsInput | number | null
    comment_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AttachmentCreateManyInput = {
    attachment_id?: number
    file_name: string
    file_path: string
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    question_id?: number | null
    answer_id?: number | null
    comment_id?: number | null
  }

  export type AttachmentUpdateManyMutationInput = {
    file_name?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AttachmentUncheckedUpdateManyInput = {
    attachment_id?: IntFieldUpdateOperationsInput | number
    file_name?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    question_id?: NullableIntFieldUpdateOperationsInput | number | null
    answer_id?: NullableIntFieldUpdateOperationsInput | number | null
    comment_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AnswerCreateInput = {
    content: string
    is_accepted?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    question: QuestionCreateNestedOneWithoutAnswersInput
    user: UserCreateNestedOneWithoutAnswersInput
    comments?: CommentCreateNestedManyWithoutAnswerInput
    likes?: LikeCreateNestedManyWithoutAnswerInput
    notifications?: NotificationCreateNestedManyWithoutAnswerInput
    attachment?: AttachmentCreateNestedManyWithoutAnswerInput
  }

  export type AnswerUncheckedCreateInput = {
    answer_id?: number
    content: string
    is_accepted?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    question_id: number
    user_id: number
    comments?: CommentUncheckedCreateNestedManyWithoutAnswerInput
    likes?: LikeUncheckedCreateNestedManyWithoutAnswerInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutAnswerInput
    attachment?: AttachmentUncheckedCreateNestedManyWithoutAnswerInput
  }

  export type AnswerUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    is_accepted?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    question?: QuestionUpdateOneRequiredWithoutAnswersNestedInput
    user?: UserUpdateOneRequiredWithoutAnswersNestedInput
    comments?: CommentUpdateManyWithoutAnswerNestedInput
    likes?: LikeUpdateManyWithoutAnswerNestedInput
    notifications?: NotificationUpdateManyWithoutAnswerNestedInput
    attachment?: AttachmentUpdateManyWithoutAnswerNestedInput
  }

  export type AnswerUncheckedUpdateInput = {
    answer_id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    is_accepted?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    question_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    comments?: CommentUncheckedUpdateManyWithoutAnswerNestedInput
    likes?: LikeUncheckedUpdateManyWithoutAnswerNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutAnswerNestedInput
    attachment?: AttachmentUncheckedUpdateManyWithoutAnswerNestedInput
  }

  export type AnswerCreateManyInput = {
    answer_id?: number
    content: string
    is_accepted?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    question_id: number
    user_id: number
  }

  export type AnswerUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    is_accepted?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AnswerUncheckedUpdateManyInput = {
    answer_id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    is_accepted?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    question_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type CommentCreateInput = {
    content: string
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    answer?: AnswerCreateNestedOneWithoutCommentsInput
    parent?: CommentCreateNestedOneWithoutRepliesInput
    replies?: CommentCreateNestedManyWithoutParentInput
    question?: QuestionCreateNestedOneWithoutCommentsInput
    user: UserCreateNestedOneWithoutCommentsInput
    Attachment?: AttachmentCreateNestedManyWithoutCommentInput
  }

  export type CommentUncheckedCreateInput = {
    user_id: number
    answer_id?: number | null
    comment_id?: number
    content: string
    created_at?: Date | string
    parent_id?: number | null
    question_id?: number | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    replies?: CommentUncheckedCreateNestedManyWithoutParentInput
    Attachment?: AttachmentUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answer?: AnswerUpdateOneWithoutCommentsNestedInput
    parent?: CommentUpdateOneWithoutRepliesNestedInput
    replies?: CommentUpdateManyWithoutParentNestedInput
    question?: QuestionUpdateOneWithoutCommentsNestedInput
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
    Attachment?: AttachmentUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    answer_id?: NullableIntFieldUpdateOperationsInput | number | null
    comment_id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
    question_id?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replies?: CommentUncheckedUpdateManyWithoutParentNestedInput
    Attachment?: AttachmentUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type CommentCreateManyInput = {
    user_id: number
    answer_id?: number | null
    comment_id?: number
    content: string
    created_at?: Date | string
    parent_id?: number | null
    question_id?: number | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type CommentUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CommentUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    answer_id?: NullableIntFieldUpdateOperationsInput | number | null
    comment_id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
    question_id?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LikeCreateInput = {
    created_at?: Date | string
    answer?: AnswerCreateNestedOneWithoutLikesInput
    question?: QuestionCreateNestedOneWithoutLikesInput
    user: UserCreateNestedOneWithoutLikesInput
  }

  export type LikeUncheckedCreateInput = {
    user_id: number
    answer_id?: number | null
    created_at?: Date | string
    like_id?: number
    question_id?: number | null
  }

  export type LikeUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    answer?: AnswerUpdateOneWithoutLikesNestedInput
    question?: QuestionUpdateOneWithoutLikesNestedInput
    user?: UserUpdateOneRequiredWithoutLikesNestedInput
  }

  export type LikeUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    answer_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    like_id?: IntFieldUpdateOperationsInput | number
    question_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LikeCreateManyInput = {
    user_id: number
    answer_id?: number | null
    created_at?: Date | string
    like_id?: number
    question_id?: number | null
  }

  export type LikeUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    answer_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    like_id?: IntFieldUpdateOperationsInput | number
    question_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TagCreateInput = {
    name: string
    created_at?: Date | string
    deleted_at?: Date | string | null
    questions?: TagsOnQuestionsCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateInput = {
    tag_id?: number
    name: string
    created_at?: Date | string
    deleted_at?: Date | string | null
    questions?: TagsOnQuestionsUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    questions?: TagsOnQuestionsUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateInput = {
    tag_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    questions?: TagsOnQuestionsUncheckedUpdateManyWithoutTagNestedInput
  }

  export type TagCreateManyInput = {
    tag_id?: number
    name: string
    created_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type TagUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TagUncheckedUpdateManyInput = {
    tag_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TagsOnQuestionsCreateInput = {
    assigned_at?: Date | string
    deleted_at?: Date | string | null
    question: QuestionCreateNestedOneWithoutTagsInput
    tag: TagCreateNestedOneWithoutQuestionsInput
  }

  export type TagsOnQuestionsUncheckedCreateInput = {
    question_id: number
    tag_id: number
    assigned_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type TagsOnQuestionsUpdateInput = {
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    question?: QuestionUpdateOneRequiredWithoutTagsNestedInput
    tag?: TagUpdateOneRequiredWithoutQuestionsNestedInput
  }

  export type TagsOnQuestionsUncheckedUpdateInput = {
    question_id?: IntFieldUpdateOperationsInput | number
    tag_id?: IntFieldUpdateOperationsInput | number
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TagsOnQuestionsCreateManyInput = {
    question_id: number
    tag_id: number
    assigned_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type TagsOnQuestionsUpdateManyMutationInput = {
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TagsOnQuestionsUncheckedUpdateManyInput = {
    question_id?: IntFieldUpdateOperationsInput | number
    tag_id?: IntFieldUpdateOperationsInput | number
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NotificationCreateInput = {
    content: string
    is_read?: boolean
    created_at?: Date | string
    notification_type: $Enums.NotificationType
    answer?: AnswerCreateNestedOneWithoutNotificationsInput
    question?: QuestionCreateNestedOneWithoutNotificationsInput
    user: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: number
    content: string
    is_read?: boolean
    created_at?: Date | string
    user_id: number
    question_id?: number | null
    answer_id?: number | null
    notification_type: $Enums.NotificationType
  }

  export type NotificationUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    notification_type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    answer?: AnswerUpdateOneWithoutNotificationsNestedInput
    question?: QuestionUpdateOneWithoutNotificationsNestedInput
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: IntFieldUpdateOperationsInput | number
    question_id?: NullableIntFieldUpdateOperationsInput | number | null
    answer_id?: NullableIntFieldUpdateOperationsInput | number | null
    notification_type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
  }

  export type NotificationCreateManyInput = {
    id?: number
    content: string
    is_read?: boolean
    created_at?: Date | string
    user_id: number
    question_id?: number | null
    answer_id?: number | null
    notification_type: $Enums.NotificationType
  }

  export type NotificationUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    notification_type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: IntFieldUpdateOperationsInput | number
    question_id?: NullableIntFieldUpdateOperationsInput | number | null
    answer_id?: NullableIntFieldUpdateOperationsInput | number | null
    notification_type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
  }

  export type ConfigCreateInput = {
    name?: string | null
    value?: NullableJsonNullValueInput | InputJsonValue
    description?: string | null
    status?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type ConfigUncheckedCreateInput = {
    config_id?: number
    name?: string | null
    value?: NullableJsonNullValueInput | InputJsonValue
    description?: string | null
    status?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type ConfigUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableJsonNullValueInput | InputJsonValue
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ConfigUncheckedUpdateInput = {
    config_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableJsonNullValueInput | InputJsonValue
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ConfigCreateManyInput = {
    config_id?: number
    name?: string | null
    value?: NullableJsonNullValueInput | InputJsonValue
    description?: string | null
    status?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type ConfigUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableJsonNullValueInput | InputJsonValue
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ConfigUncheckedUpdateManyInput = {
    config_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableJsonNullValueInput | InputJsonValue
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type AnswerListRelationFilter = {
    every?: AnswerWhereInput
    some?: AnswerWhereInput
    none?: AnswerWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type LikeListRelationFilter = {
    every?: LikeWhereInput
    some?: LikeWhereInput
    none?: LikeWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type QuestionListRelationFilter = {
    every?: QuestionWhereInput
    some?: QuestionWhereInput
    none?: QuestionWhereInput
  }

  export type DivisionNullableScalarRelationFilter = {
    is?: DivisionWhereInput | null
    isNot?: DivisionWhereInput | null
  }

  export type RoleScalarRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AnswerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LikeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    first_name?: SortOrder
    last_name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    token?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    role_id?: SortOrder
    email?: SortOrder
    division_id?: SortOrder
    user_id?: SortOrder
    profile_picture?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    role_id?: SortOrder
    division_id?: SortOrder
    user_id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    first_name?: SortOrder
    last_name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    token?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    role_id?: SortOrder
    email?: SortOrder
    division_id?: SortOrder
    user_id?: SortOrder
    profile_picture?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    first_name?: SortOrder
    last_name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    token?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    role_id?: SortOrder
    email?: SortOrder
    division_id?: SortOrder
    user_id?: SortOrder
    profile_picture?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    role_id?: SortOrder
    division_id?: SortOrder
    user_id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleOrderByRelevanceInput = {
    fields: RoleOrderByRelevanceFieldEnum | RoleOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type RoleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type RoleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DivisionOrderByRelevanceInput = {
    fields: DivisionOrderByRelevanceFieldEnum | DivisionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DivisionCountOrderByAggregateInput = {
    id?: SortOrder
    division_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type DivisionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DivisionMaxOrderByAggregateInput = {
    id?: SortOrder
    division_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type DivisionMinOrderByAggregateInput = {
    id?: SortOrder
    division_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type DivisionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumQuestionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionStatus | EnumQuestionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionStatus[]
    notIn?: $Enums.QuestionStatus[]
    not?: NestedEnumQuestionStatusFilter<$PrismaModel> | $Enums.QuestionStatus
  }

  export type EnumCollaboratorTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CollaboratorType | EnumCollaboratorTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CollaboratorType[]
    notIn?: $Enums.CollaboratorType[]
    not?: NestedEnumCollaboratorTypeFilter<$PrismaModel> | $Enums.CollaboratorType
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TagsOnQuestionsListRelationFilter = {
    every?: TagsOnQuestionsWhereInput
    some?: TagsOnQuestionsWhereInput
    none?: TagsOnQuestionsWhereInput
  }

  export type AttachmentListRelationFilter = {
    every?: AttachmentWhereInput
    some?: AttachmentWhereInput
    none?: AttachmentWhereInput
  }

  export type TagsOnQuestionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AttachmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestionOrderByRelevanceInput = {
    fields: QuestionOrderByRelevanceFieldEnum | QuestionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type QuestionCountOrderByAggregateInput = {
    question_id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    due_date?: SortOrder
    is_published?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    collaborator_id?: SortOrder
    collaborator_division_id?: SortOrder
    collaborator_type?: SortOrder
    creator_id?: SortOrder
  }

  export type QuestionAvgOrderByAggregateInput = {
    question_id?: SortOrder
    collaborator_id?: SortOrder
    collaborator_division_id?: SortOrder
    creator_id?: SortOrder
  }

  export type QuestionMaxOrderByAggregateInput = {
    question_id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    due_date?: SortOrder
    is_published?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    collaborator_id?: SortOrder
    collaborator_division_id?: SortOrder
    collaborator_type?: SortOrder
    creator_id?: SortOrder
  }

  export type QuestionMinOrderByAggregateInput = {
    question_id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    due_date?: SortOrder
    is_published?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    collaborator_id?: SortOrder
    collaborator_division_id?: SortOrder
    collaborator_type?: SortOrder
    creator_id?: SortOrder
  }

  export type QuestionSumOrderByAggregateInput = {
    question_id?: SortOrder
    collaborator_id?: SortOrder
    collaborator_division_id?: SortOrder
    creator_id?: SortOrder
  }

  export type EnumQuestionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionStatus | EnumQuestionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionStatus[]
    notIn?: $Enums.QuestionStatus[]
    not?: NestedEnumQuestionStatusWithAggregatesFilter<$PrismaModel> | $Enums.QuestionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQuestionStatusFilter<$PrismaModel>
    _max?: NestedEnumQuestionStatusFilter<$PrismaModel>
  }

  export type EnumCollaboratorTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CollaboratorType | EnumCollaboratorTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CollaboratorType[]
    notIn?: $Enums.CollaboratorType[]
    not?: NestedEnumCollaboratorTypeWithAggregatesFilter<$PrismaModel> | $Enums.CollaboratorType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCollaboratorTypeFilter<$PrismaModel>
    _max?: NestedEnumCollaboratorTypeFilter<$PrismaModel>
  }

  export type QuestionNullableScalarRelationFilter = {
    is?: QuestionWhereInput | null
    isNot?: QuestionWhereInput | null
  }

  export type AnswerNullableScalarRelationFilter = {
    is?: AnswerWhereInput | null
    isNot?: AnswerWhereInput | null
  }

  export type CommentNullableScalarRelationFilter = {
    is?: CommentWhereInput | null
    isNot?: CommentWhereInput | null
  }

  export type AttachmentOrderByRelevanceInput = {
    fields: AttachmentOrderByRelevanceFieldEnum | AttachmentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AttachmentCountOrderByAggregateInput = {
    attachment_id?: SortOrder
    file_name?: SortOrder
    file_path?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    question_id?: SortOrder
    answer_id?: SortOrder
    comment_id?: SortOrder
  }

  export type AttachmentAvgOrderByAggregateInput = {
    attachment_id?: SortOrder
    question_id?: SortOrder
    answer_id?: SortOrder
    comment_id?: SortOrder
  }

  export type AttachmentMaxOrderByAggregateInput = {
    attachment_id?: SortOrder
    file_name?: SortOrder
    file_path?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    question_id?: SortOrder
    answer_id?: SortOrder
    comment_id?: SortOrder
  }

  export type AttachmentMinOrderByAggregateInput = {
    attachment_id?: SortOrder
    file_name?: SortOrder
    file_path?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    question_id?: SortOrder
    answer_id?: SortOrder
    comment_id?: SortOrder
  }

  export type AttachmentSumOrderByAggregateInput = {
    attachment_id?: SortOrder
    question_id?: SortOrder
    answer_id?: SortOrder
    comment_id?: SortOrder
  }

  export type QuestionScalarRelationFilter = {
    is?: QuestionWhereInput
    isNot?: QuestionWhereInput
  }

  export type AnswerOrderByRelevanceInput = {
    fields: AnswerOrderByRelevanceFieldEnum | AnswerOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AnswerCountOrderByAggregateInput = {
    answer_id?: SortOrder
    content?: SortOrder
    is_accepted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    question_id?: SortOrder
    user_id?: SortOrder
  }

  export type AnswerAvgOrderByAggregateInput = {
    answer_id?: SortOrder
    question_id?: SortOrder
    user_id?: SortOrder
  }

  export type AnswerMaxOrderByAggregateInput = {
    answer_id?: SortOrder
    content?: SortOrder
    is_accepted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    question_id?: SortOrder
    user_id?: SortOrder
  }

  export type AnswerMinOrderByAggregateInput = {
    answer_id?: SortOrder
    content?: SortOrder
    is_accepted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    question_id?: SortOrder
    user_id?: SortOrder
  }

  export type AnswerSumOrderByAggregateInput = {
    answer_id?: SortOrder
    question_id?: SortOrder
    user_id?: SortOrder
  }

  export type CommentOrderByRelevanceInput = {
    fields: CommentOrderByRelevanceFieldEnum | CommentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CommentCountOrderByAggregateInput = {
    user_id?: SortOrder
    answer_id?: SortOrder
    comment_id?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    parent_id?: SortOrder
    question_id?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type CommentAvgOrderByAggregateInput = {
    user_id?: SortOrder
    answer_id?: SortOrder
    comment_id?: SortOrder
    parent_id?: SortOrder
    question_id?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    user_id?: SortOrder
    answer_id?: SortOrder
    comment_id?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    parent_id?: SortOrder
    question_id?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    user_id?: SortOrder
    answer_id?: SortOrder
    comment_id?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    parent_id?: SortOrder
    question_id?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type CommentSumOrderByAggregateInput = {
    user_id?: SortOrder
    answer_id?: SortOrder
    comment_id?: SortOrder
    parent_id?: SortOrder
    question_id?: SortOrder
  }

  export type LikeUser_idQuestion_idAnswer_idCompoundUniqueInput = {
    user_id: number
    question_id: number
    answer_id: number
  }

  export type LikeCountOrderByAggregateInput = {
    user_id?: SortOrder
    answer_id?: SortOrder
    created_at?: SortOrder
    like_id?: SortOrder
    question_id?: SortOrder
  }

  export type LikeAvgOrderByAggregateInput = {
    user_id?: SortOrder
    answer_id?: SortOrder
    like_id?: SortOrder
    question_id?: SortOrder
  }

  export type LikeMaxOrderByAggregateInput = {
    user_id?: SortOrder
    answer_id?: SortOrder
    created_at?: SortOrder
    like_id?: SortOrder
    question_id?: SortOrder
  }

  export type LikeMinOrderByAggregateInput = {
    user_id?: SortOrder
    answer_id?: SortOrder
    created_at?: SortOrder
    like_id?: SortOrder
    question_id?: SortOrder
  }

  export type LikeSumOrderByAggregateInput = {
    user_id?: SortOrder
    answer_id?: SortOrder
    like_id?: SortOrder
    question_id?: SortOrder
  }

  export type TagOrderByRelevanceInput = {
    fields: TagOrderByRelevanceFieldEnum | TagOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TagCountOrderByAggregateInput = {
    tag_id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type TagAvgOrderByAggregateInput = {
    tag_id?: SortOrder
  }

  export type TagMaxOrderByAggregateInput = {
    tag_id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type TagMinOrderByAggregateInput = {
    tag_id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type TagSumOrderByAggregateInput = {
    tag_id?: SortOrder
  }

  export type TagScalarRelationFilter = {
    is?: TagWhereInput
    isNot?: TagWhereInput
  }

  export type TagsOnQuestionsQuestion_idTag_idCompoundUniqueInput = {
    question_id: number
    tag_id: number
  }

  export type TagsOnQuestionsCountOrderByAggregateInput = {
    question_id?: SortOrder
    tag_id?: SortOrder
    assigned_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type TagsOnQuestionsAvgOrderByAggregateInput = {
    question_id?: SortOrder
    tag_id?: SortOrder
  }

  export type TagsOnQuestionsMaxOrderByAggregateInput = {
    question_id?: SortOrder
    tag_id?: SortOrder
    assigned_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type TagsOnQuestionsMinOrderByAggregateInput = {
    question_id?: SortOrder
    tag_id?: SortOrder
    assigned_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type TagsOnQuestionsSumOrderByAggregateInput = {
    question_id?: SortOrder
    tag_id?: SortOrder
  }

  export type EnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[]
    notIn?: $Enums.NotificationType[]
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }

  export type NotificationOrderByRelevanceInput = {
    fields: NotificationOrderByRelevanceFieldEnum | NotificationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    is_read?: SortOrder
    created_at?: SortOrder
    user_id?: SortOrder
    question_id?: SortOrder
    answer_id?: SortOrder
    notification_type?: SortOrder
  }

  export type NotificationAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    question_id?: SortOrder
    answer_id?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    is_read?: SortOrder
    created_at?: SortOrder
    user_id?: SortOrder
    question_id?: SortOrder
    answer_id?: SortOrder
    notification_type?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    is_read?: SortOrder
    created_at?: SortOrder
    user_id?: SortOrder
    question_id?: SortOrder
    answer_id?: SortOrder
    notification_type?: SortOrder
  }

  export type NotificationSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    question_id?: SortOrder
    answer_id?: SortOrder
  }

  export type EnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[]
    notIn?: $Enums.NotificationType[]
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ConfigOrderByRelevanceInput = {
    fields: ConfigOrderByRelevanceFieldEnum | ConfigOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ConfigCountOrderByAggregateInput = {
    config_id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    description?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type ConfigAvgOrderByAggregateInput = {
    config_id?: SortOrder
  }

  export type ConfigMaxOrderByAggregateInput = {
    config_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type ConfigMinOrderByAggregateInput = {
    config_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type ConfigSumOrderByAggregateInput = {
    config_id?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type AnswerCreateNestedManyWithoutUserInput = {
    create?: XOR<AnswerCreateWithoutUserInput, AnswerUncheckedCreateWithoutUserInput> | AnswerCreateWithoutUserInput[] | AnswerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutUserInput | AnswerCreateOrConnectWithoutUserInput[]
    createMany?: AnswerCreateManyUserInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type LikeCreateNestedManyWithoutUserInput = {
    create?: XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput> | LikeCreateWithoutUserInput[] | LikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutUserInput | LikeCreateOrConnectWithoutUserInput[]
    createMany?: LikeCreateManyUserInputEnvelope
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type QuestionCreateNestedManyWithoutCollaboratorInput = {
    create?: XOR<QuestionCreateWithoutCollaboratorInput, QuestionUncheckedCreateWithoutCollaboratorInput> | QuestionCreateWithoutCollaboratorInput[] | QuestionUncheckedCreateWithoutCollaboratorInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutCollaboratorInput | QuestionCreateOrConnectWithoutCollaboratorInput[]
    createMany?: QuestionCreateManyCollaboratorInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type QuestionCreateNestedManyWithoutCreatorInput = {
    create?: XOR<QuestionCreateWithoutCreatorInput, QuestionUncheckedCreateWithoutCreatorInput> | QuestionCreateWithoutCreatorInput[] | QuestionUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutCreatorInput | QuestionCreateOrConnectWithoutCreatorInput[]
    createMany?: QuestionCreateManyCreatorInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type DivisionCreateNestedOneWithoutUsersInput = {
    create?: XOR<DivisionCreateWithoutUsersInput, DivisionUncheckedCreateWithoutUsersInput>
    connectOrCreate?: DivisionCreateOrConnectWithoutUsersInput
    connect?: DivisionWhereUniqueInput
  }

  export type RoleCreateNestedOneWithoutUsersInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    connect?: RoleWhereUniqueInput
  }

  export type AnswerUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AnswerCreateWithoutUserInput, AnswerUncheckedCreateWithoutUserInput> | AnswerCreateWithoutUserInput[] | AnswerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutUserInput | AnswerCreateOrConnectWithoutUserInput[]
    createMany?: AnswerCreateManyUserInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type LikeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput> | LikeCreateWithoutUserInput[] | LikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutUserInput | LikeCreateOrConnectWithoutUserInput[]
    createMany?: LikeCreateManyUserInputEnvelope
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type QuestionUncheckedCreateNestedManyWithoutCollaboratorInput = {
    create?: XOR<QuestionCreateWithoutCollaboratorInput, QuestionUncheckedCreateWithoutCollaboratorInput> | QuestionCreateWithoutCollaboratorInput[] | QuestionUncheckedCreateWithoutCollaboratorInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutCollaboratorInput | QuestionCreateOrConnectWithoutCollaboratorInput[]
    createMany?: QuestionCreateManyCollaboratorInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type QuestionUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<QuestionCreateWithoutCreatorInput, QuestionUncheckedCreateWithoutCreatorInput> | QuestionCreateWithoutCreatorInput[] | QuestionUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutCreatorInput | QuestionCreateOrConnectWithoutCreatorInput[]
    createMany?: QuestionCreateManyCreatorInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AnswerUpdateManyWithoutUserNestedInput = {
    create?: XOR<AnswerCreateWithoutUserInput, AnswerUncheckedCreateWithoutUserInput> | AnswerCreateWithoutUserInput[] | AnswerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutUserInput | AnswerCreateOrConnectWithoutUserInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutUserInput | AnswerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AnswerCreateManyUserInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutUserInput | AnswerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutUserInput | AnswerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type LikeUpdateManyWithoutUserNestedInput = {
    create?: XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput> | LikeCreateWithoutUserInput[] | LikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutUserInput | LikeCreateOrConnectWithoutUserInput[]
    upsert?: LikeUpsertWithWhereUniqueWithoutUserInput | LikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LikeCreateManyUserInputEnvelope
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    update?: LikeUpdateWithWhereUniqueWithoutUserInput | LikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LikeUpdateManyWithWhereWithoutUserInput | LikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type QuestionUpdateManyWithoutCollaboratorNestedInput = {
    create?: XOR<QuestionCreateWithoutCollaboratorInput, QuestionUncheckedCreateWithoutCollaboratorInput> | QuestionCreateWithoutCollaboratorInput[] | QuestionUncheckedCreateWithoutCollaboratorInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutCollaboratorInput | QuestionCreateOrConnectWithoutCollaboratorInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutCollaboratorInput | QuestionUpsertWithWhereUniqueWithoutCollaboratorInput[]
    createMany?: QuestionCreateManyCollaboratorInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutCollaboratorInput | QuestionUpdateWithWhereUniqueWithoutCollaboratorInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutCollaboratorInput | QuestionUpdateManyWithWhereWithoutCollaboratorInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type QuestionUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<QuestionCreateWithoutCreatorInput, QuestionUncheckedCreateWithoutCreatorInput> | QuestionCreateWithoutCreatorInput[] | QuestionUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutCreatorInput | QuestionCreateOrConnectWithoutCreatorInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutCreatorInput | QuestionUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: QuestionCreateManyCreatorInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutCreatorInput | QuestionUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutCreatorInput | QuestionUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type DivisionUpdateOneWithoutUsersNestedInput = {
    create?: XOR<DivisionCreateWithoutUsersInput, DivisionUncheckedCreateWithoutUsersInput>
    connectOrCreate?: DivisionCreateOrConnectWithoutUsersInput
    upsert?: DivisionUpsertWithoutUsersInput
    disconnect?: DivisionWhereInput | boolean
    delete?: DivisionWhereInput | boolean
    connect?: DivisionWhereUniqueInput
    update?: XOR<XOR<DivisionUpdateToOneWithWhereWithoutUsersInput, DivisionUpdateWithoutUsersInput>, DivisionUncheckedUpdateWithoutUsersInput>
  }

  export type RoleUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    upsert?: RoleUpsertWithoutUsersInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutUsersInput, RoleUpdateWithoutUsersInput>, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AnswerUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AnswerCreateWithoutUserInput, AnswerUncheckedCreateWithoutUserInput> | AnswerCreateWithoutUserInput[] | AnswerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutUserInput | AnswerCreateOrConnectWithoutUserInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutUserInput | AnswerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AnswerCreateManyUserInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutUserInput | AnswerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutUserInput | AnswerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type LikeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput> | LikeCreateWithoutUserInput[] | LikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutUserInput | LikeCreateOrConnectWithoutUserInput[]
    upsert?: LikeUpsertWithWhereUniqueWithoutUserInput | LikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LikeCreateManyUserInputEnvelope
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    update?: LikeUpdateWithWhereUniqueWithoutUserInput | LikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LikeUpdateManyWithWhereWithoutUserInput | LikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type QuestionUncheckedUpdateManyWithoutCollaboratorNestedInput = {
    create?: XOR<QuestionCreateWithoutCollaboratorInput, QuestionUncheckedCreateWithoutCollaboratorInput> | QuestionCreateWithoutCollaboratorInput[] | QuestionUncheckedCreateWithoutCollaboratorInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutCollaboratorInput | QuestionCreateOrConnectWithoutCollaboratorInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutCollaboratorInput | QuestionUpsertWithWhereUniqueWithoutCollaboratorInput[]
    createMany?: QuestionCreateManyCollaboratorInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutCollaboratorInput | QuestionUpdateWithWhereUniqueWithoutCollaboratorInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutCollaboratorInput | QuestionUpdateManyWithWhereWithoutCollaboratorInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type QuestionUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<QuestionCreateWithoutCreatorInput, QuestionUncheckedCreateWithoutCreatorInput> | QuestionCreateWithoutCreatorInput[] | QuestionUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutCreatorInput | QuestionCreateOrConnectWithoutCreatorInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutCreatorInput | QuestionUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: QuestionCreateManyCreatorInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutCreatorInput | QuestionUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutCreatorInput | QuestionUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type QuestionCreateNestedManyWithoutCollaborator_divisionInput = {
    create?: XOR<QuestionCreateWithoutCollaborator_divisionInput, QuestionUncheckedCreateWithoutCollaborator_divisionInput> | QuestionCreateWithoutCollaborator_divisionInput[] | QuestionUncheckedCreateWithoutCollaborator_divisionInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutCollaborator_divisionInput | QuestionCreateOrConnectWithoutCollaborator_divisionInput[]
    createMany?: QuestionCreateManyCollaborator_divisionInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutDivisionInput = {
    create?: XOR<UserCreateWithoutDivisionInput, UserUncheckedCreateWithoutDivisionInput> | UserCreateWithoutDivisionInput[] | UserUncheckedCreateWithoutDivisionInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDivisionInput | UserCreateOrConnectWithoutDivisionInput[]
    createMany?: UserCreateManyDivisionInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type QuestionUncheckedCreateNestedManyWithoutCollaborator_divisionInput = {
    create?: XOR<QuestionCreateWithoutCollaborator_divisionInput, QuestionUncheckedCreateWithoutCollaborator_divisionInput> | QuestionCreateWithoutCollaborator_divisionInput[] | QuestionUncheckedCreateWithoutCollaborator_divisionInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutCollaborator_divisionInput | QuestionCreateOrConnectWithoutCollaborator_divisionInput[]
    createMany?: QuestionCreateManyCollaborator_divisionInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutDivisionInput = {
    create?: XOR<UserCreateWithoutDivisionInput, UserUncheckedCreateWithoutDivisionInput> | UserCreateWithoutDivisionInput[] | UserUncheckedCreateWithoutDivisionInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDivisionInput | UserCreateOrConnectWithoutDivisionInput[]
    createMany?: UserCreateManyDivisionInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type QuestionUpdateManyWithoutCollaborator_divisionNestedInput = {
    create?: XOR<QuestionCreateWithoutCollaborator_divisionInput, QuestionUncheckedCreateWithoutCollaborator_divisionInput> | QuestionCreateWithoutCollaborator_divisionInput[] | QuestionUncheckedCreateWithoutCollaborator_divisionInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutCollaborator_divisionInput | QuestionCreateOrConnectWithoutCollaborator_divisionInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutCollaborator_divisionInput | QuestionUpsertWithWhereUniqueWithoutCollaborator_divisionInput[]
    createMany?: QuestionCreateManyCollaborator_divisionInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutCollaborator_divisionInput | QuestionUpdateWithWhereUniqueWithoutCollaborator_divisionInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutCollaborator_divisionInput | QuestionUpdateManyWithWhereWithoutCollaborator_divisionInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type UserUpdateManyWithoutDivisionNestedInput = {
    create?: XOR<UserCreateWithoutDivisionInput, UserUncheckedCreateWithoutDivisionInput> | UserCreateWithoutDivisionInput[] | UserUncheckedCreateWithoutDivisionInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDivisionInput | UserCreateOrConnectWithoutDivisionInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutDivisionInput | UserUpsertWithWhereUniqueWithoutDivisionInput[]
    createMany?: UserCreateManyDivisionInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutDivisionInput | UserUpdateWithWhereUniqueWithoutDivisionInput[]
    updateMany?: UserUpdateManyWithWhereWithoutDivisionInput | UserUpdateManyWithWhereWithoutDivisionInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type QuestionUncheckedUpdateManyWithoutCollaborator_divisionNestedInput = {
    create?: XOR<QuestionCreateWithoutCollaborator_divisionInput, QuestionUncheckedCreateWithoutCollaborator_divisionInput> | QuestionCreateWithoutCollaborator_divisionInput[] | QuestionUncheckedCreateWithoutCollaborator_divisionInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutCollaborator_divisionInput | QuestionCreateOrConnectWithoutCollaborator_divisionInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutCollaborator_divisionInput | QuestionUpsertWithWhereUniqueWithoutCollaborator_divisionInput[]
    createMany?: QuestionCreateManyCollaborator_divisionInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutCollaborator_divisionInput | QuestionUpdateWithWhereUniqueWithoutCollaborator_divisionInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutCollaborator_divisionInput | QuestionUpdateManyWithWhereWithoutCollaborator_divisionInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutDivisionNestedInput = {
    create?: XOR<UserCreateWithoutDivisionInput, UserUncheckedCreateWithoutDivisionInput> | UserCreateWithoutDivisionInput[] | UserUncheckedCreateWithoutDivisionInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDivisionInput | UserCreateOrConnectWithoutDivisionInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutDivisionInput | UserUpsertWithWhereUniqueWithoutDivisionInput[]
    createMany?: UserCreateManyDivisionInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutDivisionInput | UserUpdateWithWhereUniqueWithoutDivisionInput[]
    updateMany?: UserUpdateManyWithWhereWithoutDivisionInput | UserUpdateManyWithWhereWithoutDivisionInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type AnswerCreateNestedManyWithoutQuestionInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutQuestionInput = {
    create?: XOR<CommentCreateWithoutQuestionInput, CommentUncheckedCreateWithoutQuestionInput> | CommentCreateWithoutQuestionInput[] | CommentUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutQuestionInput | CommentCreateOrConnectWithoutQuestionInput[]
    createMany?: CommentCreateManyQuestionInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type LikeCreateNestedManyWithoutQuestionInput = {
    create?: XOR<LikeCreateWithoutQuestionInput, LikeUncheckedCreateWithoutQuestionInput> | LikeCreateWithoutQuestionInput[] | LikeUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutQuestionInput | LikeCreateOrConnectWithoutQuestionInput[]
    createMany?: LikeCreateManyQuestionInputEnvelope
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutQuestionInput = {
    create?: XOR<NotificationCreateWithoutQuestionInput, NotificationUncheckedCreateWithoutQuestionInput> | NotificationCreateWithoutQuestionInput[] | NotificationUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutQuestionInput | NotificationCreateOrConnectWithoutQuestionInput[]
    createMany?: NotificationCreateManyQuestionInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type DivisionCreateNestedOneWithoutAssigned_questionsInput = {
    create?: XOR<DivisionCreateWithoutAssigned_questionsInput, DivisionUncheckedCreateWithoutAssigned_questionsInput>
    connectOrCreate?: DivisionCreateOrConnectWithoutAssigned_questionsInput
    connect?: DivisionWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAssigned_questionsInput = {
    create?: XOR<UserCreateWithoutAssigned_questionsInput, UserUncheckedCreateWithoutAssigned_questionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssigned_questionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCreated_questionsInput = {
    create?: XOR<UserCreateWithoutCreated_questionsInput, UserUncheckedCreateWithoutCreated_questionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreated_questionsInput
    connect?: UserWhereUniqueInput
  }

  export type TagsOnQuestionsCreateNestedManyWithoutQuestionInput = {
    create?: XOR<TagsOnQuestionsCreateWithoutQuestionInput, TagsOnQuestionsUncheckedCreateWithoutQuestionInput> | TagsOnQuestionsCreateWithoutQuestionInput[] | TagsOnQuestionsUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: TagsOnQuestionsCreateOrConnectWithoutQuestionInput | TagsOnQuestionsCreateOrConnectWithoutQuestionInput[]
    createMany?: TagsOnQuestionsCreateManyQuestionInputEnvelope
    connect?: TagsOnQuestionsWhereUniqueInput | TagsOnQuestionsWhereUniqueInput[]
  }

  export type AttachmentCreateNestedManyWithoutQuestionInput = {
    create?: XOR<AttachmentCreateWithoutQuestionInput, AttachmentUncheckedCreateWithoutQuestionInput> | AttachmentCreateWithoutQuestionInput[] | AttachmentUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AttachmentCreateOrConnectWithoutQuestionInput | AttachmentCreateOrConnectWithoutQuestionInput[]
    createMany?: AttachmentCreateManyQuestionInputEnvelope
    connect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
  }

  export type AnswerUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<CommentCreateWithoutQuestionInput, CommentUncheckedCreateWithoutQuestionInput> | CommentCreateWithoutQuestionInput[] | CommentUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutQuestionInput | CommentCreateOrConnectWithoutQuestionInput[]
    createMany?: CommentCreateManyQuestionInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type LikeUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<LikeCreateWithoutQuestionInput, LikeUncheckedCreateWithoutQuestionInput> | LikeCreateWithoutQuestionInput[] | LikeUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutQuestionInput | LikeCreateOrConnectWithoutQuestionInput[]
    createMany?: LikeCreateManyQuestionInputEnvelope
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<NotificationCreateWithoutQuestionInput, NotificationUncheckedCreateWithoutQuestionInput> | NotificationCreateWithoutQuestionInput[] | NotificationUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutQuestionInput | NotificationCreateOrConnectWithoutQuestionInput[]
    createMany?: NotificationCreateManyQuestionInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type TagsOnQuestionsUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<TagsOnQuestionsCreateWithoutQuestionInput, TagsOnQuestionsUncheckedCreateWithoutQuestionInput> | TagsOnQuestionsCreateWithoutQuestionInput[] | TagsOnQuestionsUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: TagsOnQuestionsCreateOrConnectWithoutQuestionInput | TagsOnQuestionsCreateOrConnectWithoutQuestionInput[]
    createMany?: TagsOnQuestionsCreateManyQuestionInputEnvelope
    connect?: TagsOnQuestionsWhereUniqueInput | TagsOnQuestionsWhereUniqueInput[]
  }

  export type AttachmentUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<AttachmentCreateWithoutQuestionInput, AttachmentUncheckedCreateWithoutQuestionInput> | AttachmentCreateWithoutQuestionInput[] | AttachmentUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AttachmentCreateOrConnectWithoutQuestionInput | AttachmentCreateOrConnectWithoutQuestionInput[]
    createMany?: AttachmentCreateManyQuestionInputEnvelope
    connect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
  }

  export type EnumQuestionStatusFieldUpdateOperationsInput = {
    set?: $Enums.QuestionStatus
  }

  export type EnumCollaboratorTypeFieldUpdateOperationsInput = {
    set?: $Enums.CollaboratorType
  }

  export type AnswerUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutQuestionInput | AnswerUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutQuestionInput | AnswerUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutQuestionInput | AnswerUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<CommentCreateWithoutQuestionInput, CommentUncheckedCreateWithoutQuestionInput> | CommentCreateWithoutQuestionInput[] | CommentUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutQuestionInput | CommentCreateOrConnectWithoutQuestionInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutQuestionInput | CommentUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: CommentCreateManyQuestionInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutQuestionInput | CommentUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutQuestionInput | CommentUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type LikeUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<LikeCreateWithoutQuestionInput, LikeUncheckedCreateWithoutQuestionInput> | LikeCreateWithoutQuestionInput[] | LikeUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutQuestionInput | LikeCreateOrConnectWithoutQuestionInput[]
    upsert?: LikeUpsertWithWhereUniqueWithoutQuestionInput | LikeUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: LikeCreateManyQuestionInputEnvelope
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    update?: LikeUpdateWithWhereUniqueWithoutQuestionInput | LikeUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: LikeUpdateManyWithWhereWithoutQuestionInput | LikeUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<NotificationCreateWithoutQuestionInput, NotificationUncheckedCreateWithoutQuestionInput> | NotificationCreateWithoutQuestionInput[] | NotificationUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutQuestionInput | NotificationCreateOrConnectWithoutQuestionInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutQuestionInput | NotificationUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: NotificationCreateManyQuestionInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutQuestionInput | NotificationUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutQuestionInput | NotificationUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type DivisionUpdateOneWithoutAssigned_questionsNestedInput = {
    create?: XOR<DivisionCreateWithoutAssigned_questionsInput, DivisionUncheckedCreateWithoutAssigned_questionsInput>
    connectOrCreate?: DivisionCreateOrConnectWithoutAssigned_questionsInput
    upsert?: DivisionUpsertWithoutAssigned_questionsInput
    disconnect?: DivisionWhereInput | boolean
    delete?: DivisionWhereInput | boolean
    connect?: DivisionWhereUniqueInput
    update?: XOR<XOR<DivisionUpdateToOneWithWhereWithoutAssigned_questionsInput, DivisionUpdateWithoutAssigned_questionsInput>, DivisionUncheckedUpdateWithoutAssigned_questionsInput>
  }

  export type UserUpdateOneWithoutAssigned_questionsNestedInput = {
    create?: XOR<UserCreateWithoutAssigned_questionsInput, UserUncheckedCreateWithoutAssigned_questionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssigned_questionsInput
    upsert?: UserUpsertWithoutAssigned_questionsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAssigned_questionsInput, UserUpdateWithoutAssigned_questionsInput>, UserUncheckedUpdateWithoutAssigned_questionsInput>
  }

  export type UserUpdateOneRequiredWithoutCreated_questionsNestedInput = {
    create?: XOR<UserCreateWithoutCreated_questionsInput, UserUncheckedCreateWithoutCreated_questionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreated_questionsInput
    upsert?: UserUpsertWithoutCreated_questionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreated_questionsInput, UserUpdateWithoutCreated_questionsInput>, UserUncheckedUpdateWithoutCreated_questionsInput>
  }

  export type TagsOnQuestionsUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<TagsOnQuestionsCreateWithoutQuestionInput, TagsOnQuestionsUncheckedCreateWithoutQuestionInput> | TagsOnQuestionsCreateWithoutQuestionInput[] | TagsOnQuestionsUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: TagsOnQuestionsCreateOrConnectWithoutQuestionInput | TagsOnQuestionsCreateOrConnectWithoutQuestionInput[]
    upsert?: TagsOnQuestionsUpsertWithWhereUniqueWithoutQuestionInput | TagsOnQuestionsUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: TagsOnQuestionsCreateManyQuestionInputEnvelope
    set?: TagsOnQuestionsWhereUniqueInput | TagsOnQuestionsWhereUniqueInput[]
    disconnect?: TagsOnQuestionsWhereUniqueInput | TagsOnQuestionsWhereUniqueInput[]
    delete?: TagsOnQuestionsWhereUniqueInput | TagsOnQuestionsWhereUniqueInput[]
    connect?: TagsOnQuestionsWhereUniqueInput | TagsOnQuestionsWhereUniqueInput[]
    update?: TagsOnQuestionsUpdateWithWhereUniqueWithoutQuestionInput | TagsOnQuestionsUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: TagsOnQuestionsUpdateManyWithWhereWithoutQuestionInput | TagsOnQuestionsUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: TagsOnQuestionsScalarWhereInput | TagsOnQuestionsScalarWhereInput[]
  }

  export type AttachmentUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<AttachmentCreateWithoutQuestionInput, AttachmentUncheckedCreateWithoutQuestionInput> | AttachmentCreateWithoutQuestionInput[] | AttachmentUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AttachmentCreateOrConnectWithoutQuestionInput | AttachmentCreateOrConnectWithoutQuestionInput[]
    upsert?: AttachmentUpsertWithWhereUniqueWithoutQuestionInput | AttachmentUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: AttachmentCreateManyQuestionInputEnvelope
    set?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    disconnect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    delete?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    connect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    update?: AttachmentUpdateWithWhereUniqueWithoutQuestionInput | AttachmentUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: AttachmentUpdateManyWithWhereWithoutQuestionInput | AttachmentUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: AttachmentScalarWhereInput | AttachmentScalarWhereInput[]
  }

  export type AnswerUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutQuestionInput | AnswerUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutQuestionInput | AnswerUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutQuestionInput | AnswerUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<CommentCreateWithoutQuestionInput, CommentUncheckedCreateWithoutQuestionInput> | CommentCreateWithoutQuestionInput[] | CommentUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutQuestionInput | CommentCreateOrConnectWithoutQuestionInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutQuestionInput | CommentUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: CommentCreateManyQuestionInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutQuestionInput | CommentUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutQuestionInput | CommentUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type LikeUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<LikeCreateWithoutQuestionInput, LikeUncheckedCreateWithoutQuestionInput> | LikeCreateWithoutQuestionInput[] | LikeUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutQuestionInput | LikeCreateOrConnectWithoutQuestionInput[]
    upsert?: LikeUpsertWithWhereUniqueWithoutQuestionInput | LikeUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: LikeCreateManyQuestionInputEnvelope
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    update?: LikeUpdateWithWhereUniqueWithoutQuestionInput | LikeUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: LikeUpdateManyWithWhereWithoutQuestionInput | LikeUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<NotificationCreateWithoutQuestionInput, NotificationUncheckedCreateWithoutQuestionInput> | NotificationCreateWithoutQuestionInput[] | NotificationUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutQuestionInput | NotificationCreateOrConnectWithoutQuestionInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutQuestionInput | NotificationUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: NotificationCreateManyQuestionInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutQuestionInput | NotificationUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutQuestionInput | NotificationUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type TagsOnQuestionsUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<TagsOnQuestionsCreateWithoutQuestionInput, TagsOnQuestionsUncheckedCreateWithoutQuestionInput> | TagsOnQuestionsCreateWithoutQuestionInput[] | TagsOnQuestionsUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: TagsOnQuestionsCreateOrConnectWithoutQuestionInput | TagsOnQuestionsCreateOrConnectWithoutQuestionInput[]
    upsert?: TagsOnQuestionsUpsertWithWhereUniqueWithoutQuestionInput | TagsOnQuestionsUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: TagsOnQuestionsCreateManyQuestionInputEnvelope
    set?: TagsOnQuestionsWhereUniqueInput | TagsOnQuestionsWhereUniqueInput[]
    disconnect?: TagsOnQuestionsWhereUniqueInput | TagsOnQuestionsWhereUniqueInput[]
    delete?: TagsOnQuestionsWhereUniqueInput | TagsOnQuestionsWhereUniqueInput[]
    connect?: TagsOnQuestionsWhereUniqueInput | TagsOnQuestionsWhereUniqueInput[]
    update?: TagsOnQuestionsUpdateWithWhereUniqueWithoutQuestionInput | TagsOnQuestionsUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: TagsOnQuestionsUpdateManyWithWhereWithoutQuestionInput | TagsOnQuestionsUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: TagsOnQuestionsScalarWhereInput | TagsOnQuestionsScalarWhereInput[]
  }

  export type AttachmentUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<AttachmentCreateWithoutQuestionInput, AttachmentUncheckedCreateWithoutQuestionInput> | AttachmentCreateWithoutQuestionInput[] | AttachmentUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AttachmentCreateOrConnectWithoutQuestionInput | AttachmentCreateOrConnectWithoutQuestionInput[]
    upsert?: AttachmentUpsertWithWhereUniqueWithoutQuestionInput | AttachmentUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: AttachmentCreateManyQuestionInputEnvelope
    set?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    disconnect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    delete?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    connect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    update?: AttachmentUpdateWithWhereUniqueWithoutQuestionInput | AttachmentUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: AttachmentUpdateManyWithWhereWithoutQuestionInput | AttachmentUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: AttachmentScalarWhereInput | AttachmentScalarWhereInput[]
  }

  export type QuestionCreateNestedOneWithoutAttachmentInput = {
    create?: XOR<QuestionCreateWithoutAttachmentInput, QuestionUncheckedCreateWithoutAttachmentInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAttachmentInput
    connect?: QuestionWhereUniqueInput
  }

  export type AnswerCreateNestedOneWithoutAttachmentInput = {
    create?: XOR<AnswerCreateWithoutAttachmentInput, AnswerUncheckedCreateWithoutAttachmentInput>
    connectOrCreate?: AnswerCreateOrConnectWithoutAttachmentInput
    connect?: AnswerWhereUniqueInput
  }

  export type CommentCreateNestedOneWithoutAttachmentInput = {
    create?: XOR<CommentCreateWithoutAttachmentInput, CommentUncheckedCreateWithoutAttachmentInput>
    connectOrCreate?: CommentCreateOrConnectWithoutAttachmentInput
    connect?: CommentWhereUniqueInput
  }

  export type QuestionUpdateOneWithoutAttachmentNestedInput = {
    create?: XOR<QuestionCreateWithoutAttachmentInput, QuestionUncheckedCreateWithoutAttachmentInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAttachmentInput
    upsert?: QuestionUpsertWithoutAttachmentInput
    disconnect?: QuestionWhereInput | boolean
    delete?: QuestionWhereInput | boolean
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutAttachmentInput, QuestionUpdateWithoutAttachmentInput>, QuestionUncheckedUpdateWithoutAttachmentInput>
  }

  export type AnswerUpdateOneWithoutAttachmentNestedInput = {
    create?: XOR<AnswerCreateWithoutAttachmentInput, AnswerUncheckedCreateWithoutAttachmentInput>
    connectOrCreate?: AnswerCreateOrConnectWithoutAttachmentInput
    upsert?: AnswerUpsertWithoutAttachmentInput
    disconnect?: AnswerWhereInput | boolean
    delete?: AnswerWhereInput | boolean
    connect?: AnswerWhereUniqueInput
    update?: XOR<XOR<AnswerUpdateToOneWithWhereWithoutAttachmentInput, AnswerUpdateWithoutAttachmentInput>, AnswerUncheckedUpdateWithoutAttachmentInput>
  }

  export type CommentUpdateOneWithoutAttachmentNestedInput = {
    create?: XOR<CommentCreateWithoutAttachmentInput, CommentUncheckedCreateWithoutAttachmentInput>
    connectOrCreate?: CommentCreateOrConnectWithoutAttachmentInput
    upsert?: CommentUpsertWithoutAttachmentInput
    disconnect?: CommentWhereInput | boolean
    delete?: CommentWhereInput | boolean
    connect?: CommentWhereUniqueInput
    update?: XOR<XOR<CommentUpdateToOneWithWhereWithoutAttachmentInput, CommentUpdateWithoutAttachmentInput>, CommentUncheckedUpdateWithoutAttachmentInput>
  }

  export type QuestionCreateNestedOneWithoutAnswersInput = {
    create?: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAnswersInput
    connect?: QuestionWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAnswersInput = {
    create?: XOR<UserCreateWithoutAnswersInput, UserUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnswersInput
    connect?: UserWhereUniqueInput
  }

  export type CommentCreateNestedManyWithoutAnswerInput = {
    create?: XOR<CommentCreateWithoutAnswerInput, CommentUncheckedCreateWithoutAnswerInput> | CommentCreateWithoutAnswerInput[] | CommentUncheckedCreateWithoutAnswerInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAnswerInput | CommentCreateOrConnectWithoutAnswerInput[]
    createMany?: CommentCreateManyAnswerInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type LikeCreateNestedManyWithoutAnswerInput = {
    create?: XOR<LikeCreateWithoutAnswerInput, LikeUncheckedCreateWithoutAnswerInput> | LikeCreateWithoutAnswerInput[] | LikeUncheckedCreateWithoutAnswerInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutAnswerInput | LikeCreateOrConnectWithoutAnswerInput[]
    createMany?: LikeCreateManyAnswerInputEnvelope
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutAnswerInput = {
    create?: XOR<NotificationCreateWithoutAnswerInput, NotificationUncheckedCreateWithoutAnswerInput> | NotificationCreateWithoutAnswerInput[] | NotificationUncheckedCreateWithoutAnswerInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutAnswerInput | NotificationCreateOrConnectWithoutAnswerInput[]
    createMany?: NotificationCreateManyAnswerInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type AttachmentCreateNestedManyWithoutAnswerInput = {
    create?: XOR<AttachmentCreateWithoutAnswerInput, AttachmentUncheckedCreateWithoutAnswerInput> | AttachmentCreateWithoutAnswerInput[] | AttachmentUncheckedCreateWithoutAnswerInput[]
    connectOrCreate?: AttachmentCreateOrConnectWithoutAnswerInput | AttachmentCreateOrConnectWithoutAnswerInput[]
    createMany?: AttachmentCreateManyAnswerInputEnvelope
    connect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutAnswerInput = {
    create?: XOR<CommentCreateWithoutAnswerInput, CommentUncheckedCreateWithoutAnswerInput> | CommentCreateWithoutAnswerInput[] | CommentUncheckedCreateWithoutAnswerInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAnswerInput | CommentCreateOrConnectWithoutAnswerInput[]
    createMany?: CommentCreateManyAnswerInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type LikeUncheckedCreateNestedManyWithoutAnswerInput = {
    create?: XOR<LikeCreateWithoutAnswerInput, LikeUncheckedCreateWithoutAnswerInput> | LikeCreateWithoutAnswerInput[] | LikeUncheckedCreateWithoutAnswerInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutAnswerInput | LikeCreateOrConnectWithoutAnswerInput[]
    createMany?: LikeCreateManyAnswerInputEnvelope
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutAnswerInput = {
    create?: XOR<NotificationCreateWithoutAnswerInput, NotificationUncheckedCreateWithoutAnswerInput> | NotificationCreateWithoutAnswerInput[] | NotificationUncheckedCreateWithoutAnswerInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutAnswerInput | NotificationCreateOrConnectWithoutAnswerInput[]
    createMany?: NotificationCreateManyAnswerInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type AttachmentUncheckedCreateNestedManyWithoutAnswerInput = {
    create?: XOR<AttachmentCreateWithoutAnswerInput, AttachmentUncheckedCreateWithoutAnswerInput> | AttachmentCreateWithoutAnswerInput[] | AttachmentUncheckedCreateWithoutAnswerInput[]
    connectOrCreate?: AttachmentCreateOrConnectWithoutAnswerInput | AttachmentCreateOrConnectWithoutAnswerInput[]
    createMany?: AttachmentCreateManyAnswerInputEnvelope
    connect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
  }

  export type QuestionUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAnswersInput
    upsert?: QuestionUpsertWithoutAnswersInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutAnswersInput, QuestionUpdateWithoutAnswersInput>, QuestionUncheckedUpdateWithoutAnswersInput>
  }

  export type UserUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<UserCreateWithoutAnswersInput, UserUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnswersInput
    upsert?: UserUpsertWithoutAnswersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAnswersInput, UserUpdateWithoutAnswersInput>, UserUncheckedUpdateWithoutAnswersInput>
  }

  export type CommentUpdateManyWithoutAnswerNestedInput = {
    create?: XOR<CommentCreateWithoutAnswerInput, CommentUncheckedCreateWithoutAnswerInput> | CommentCreateWithoutAnswerInput[] | CommentUncheckedCreateWithoutAnswerInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAnswerInput | CommentCreateOrConnectWithoutAnswerInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutAnswerInput | CommentUpsertWithWhereUniqueWithoutAnswerInput[]
    createMany?: CommentCreateManyAnswerInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutAnswerInput | CommentUpdateWithWhereUniqueWithoutAnswerInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutAnswerInput | CommentUpdateManyWithWhereWithoutAnswerInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type LikeUpdateManyWithoutAnswerNestedInput = {
    create?: XOR<LikeCreateWithoutAnswerInput, LikeUncheckedCreateWithoutAnswerInput> | LikeCreateWithoutAnswerInput[] | LikeUncheckedCreateWithoutAnswerInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutAnswerInput | LikeCreateOrConnectWithoutAnswerInput[]
    upsert?: LikeUpsertWithWhereUniqueWithoutAnswerInput | LikeUpsertWithWhereUniqueWithoutAnswerInput[]
    createMany?: LikeCreateManyAnswerInputEnvelope
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    update?: LikeUpdateWithWhereUniqueWithoutAnswerInput | LikeUpdateWithWhereUniqueWithoutAnswerInput[]
    updateMany?: LikeUpdateManyWithWhereWithoutAnswerInput | LikeUpdateManyWithWhereWithoutAnswerInput[]
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutAnswerNestedInput = {
    create?: XOR<NotificationCreateWithoutAnswerInput, NotificationUncheckedCreateWithoutAnswerInput> | NotificationCreateWithoutAnswerInput[] | NotificationUncheckedCreateWithoutAnswerInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutAnswerInput | NotificationCreateOrConnectWithoutAnswerInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutAnswerInput | NotificationUpsertWithWhereUniqueWithoutAnswerInput[]
    createMany?: NotificationCreateManyAnswerInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutAnswerInput | NotificationUpdateWithWhereUniqueWithoutAnswerInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutAnswerInput | NotificationUpdateManyWithWhereWithoutAnswerInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type AttachmentUpdateManyWithoutAnswerNestedInput = {
    create?: XOR<AttachmentCreateWithoutAnswerInput, AttachmentUncheckedCreateWithoutAnswerInput> | AttachmentCreateWithoutAnswerInput[] | AttachmentUncheckedCreateWithoutAnswerInput[]
    connectOrCreate?: AttachmentCreateOrConnectWithoutAnswerInput | AttachmentCreateOrConnectWithoutAnswerInput[]
    upsert?: AttachmentUpsertWithWhereUniqueWithoutAnswerInput | AttachmentUpsertWithWhereUniqueWithoutAnswerInput[]
    createMany?: AttachmentCreateManyAnswerInputEnvelope
    set?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    disconnect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    delete?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    connect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    update?: AttachmentUpdateWithWhereUniqueWithoutAnswerInput | AttachmentUpdateWithWhereUniqueWithoutAnswerInput[]
    updateMany?: AttachmentUpdateManyWithWhereWithoutAnswerInput | AttachmentUpdateManyWithWhereWithoutAnswerInput[]
    deleteMany?: AttachmentScalarWhereInput | AttachmentScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutAnswerNestedInput = {
    create?: XOR<CommentCreateWithoutAnswerInput, CommentUncheckedCreateWithoutAnswerInput> | CommentCreateWithoutAnswerInput[] | CommentUncheckedCreateWithoutAnswerInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAnswerInput | CommentCreateOrConnectWithoutAnswerInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutAnswerInput | CommentUpsertWithWhereUniqueWithoutAnswerInput[]
    createMany?: CommentCreateManyAnswerInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutAnswerInput | CommentUpdateWithWhereUniqueWithoutAnswerInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutAnswerInput | CommentUpdateManyWithWhereWithoutAnswerInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type LikeUncheckedUpdateManyWithoutAnswerNestedInput = {
    create?: XOR<LikeCreateWithoutAnswerInput, LikeUncheckedCreateWithoutAnswerInput> | LikeCreateWithoutAnswerInput[] | LikeUncheckedCreateWithoutAnswerInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutAnswerInput | LikeCreateOrConnectWithoutAnswerInput[]
    upsert?: LikeUpsertWithWhereUniqueWithoutAnswerInput | LikeUpsertWithWhereUniqueWithoutAnswerInput[]
    createMany?: LikeCreateManyAnswerInputEnvelope
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    update?: LikeUpdateWithWhereUniqueWithoutAnswerInput | LikeUpdateWithWhereUniqueWithoutAnswerInput[]
    updateMany?: LikeUpdateManyWithWhereWithoutAnswerInput | LikeUpdateManyWithWhereWithoutAnswerInput[]
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutAnswerNestedInput = {
    create?: XOR<NotificationCreateWithoutAnswerInput, NotificationUncheckedCreateWithoutAnswerInput> | NotificationCreateWithoutAnswerInput[] | NotificationUncheckedCreateWithoutAnswerInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutAnswerInput | NotificationCreateOrConnectWithoutAnswerInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutAnswerInput | NotificationUpsertWithWhereUniqueWithoutAnswerInput[]
    createMany?: NotificationCreateManyAnswerInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutAnswerInput | NotificationUpdateWithWhereUniqueWithoutAnswerInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutAnswerInput | NotificationUpdateManyWithWhereWithoutAnswerInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type AttachmentUncheckedUpdateManyWithoutAnswerNestedInput = {
    create?: XOR<AttachmentCreateWithoutAnswerInput, AttachmentUncheckedCreateWithoutAnswerInput> | AttachmentCreateWithoutAnswerInput[] | AttachmentUncheckedCreateWithoutAnswerInput[]
    connectOrCreate?: AttachmentCreateOrConnectWithoutAnswerInput | AttachmentCreateOrConnectWithoutAnswerInput[]
    upsert?: AttachmentUpsertWithWhereUniqueWithoutAnswerInput | AttachmentUpsertWithWhereUniqueWithoutAnswerInput[]
    createMany?: AttachmentCreateManyAnswerInputEnvelope
    set?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    disconnect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    delete?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    connect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    update?: AttachmentUpdateWithWhereUniqueWithoutAnswerInput | AttachmentUpdateWithWhereUniqueWithoutAnswerInput[]
    updateMany?: AttachmentUpdateManyWithWhereWithoutAnswerInput | AttachmentUpdateManyWithWhereWithoutAnswerInput[]
    deleteMany?: AttachmentScalarWhereInput | AttachmentScalarWhereInput[]
  }

  export type AnswerCreateNestedOneWithoutCommentsInput = {
    create?: XOR<AnswerCreateWithoutCommentsInput, AnswerUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: AnswerCreateOrConnectWithoutCommentsInput
    connect?: AnswerWhereUniqueInput
  }

  export type CommentCreateNestedOneWithoutRepliesInput = {
    create?: XOR<CommentCreateWithoutRepliesInput, CommentUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: CommentCreateOrConnectWithoutRepliesInput
    connect?: CommentWhereUniqueInput
  }

  export type CommentCreateNestedManyWithoutParentInput = {
    create?: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput> | CommentCreateWithoutParentInput[] | CommentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutParentInput | CommentCreateOrConnectWithoutParentInput[]
    createMany?: CommentCreateManyParentInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type QuestionCreateNestedOneWithoutCommentsInput = {
    create?: XOR<QuestionCreateWithoutCommentsInput, QuestionUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutCommentsInput
    connect?: QuestionWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type AttachmentCreateNestedManyWithoutCommentInput = {
    create?: XOR<AttachmentCreateWithoutCommentInput, AttachmentUncheckedCreateWithoutCommentInput> | AttachmentCreateWithoutCommentInput[] | AttachmentUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: AttachmentCreateOrConnectWithoutCommentInput | AttachmentCreateOrConnectWithoutCommentInput[]
    createMany?: AttachmentCreateManyCommentInputEnvelope
    connect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput> | CommentCreateWithoutParentInput[] | CommentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutParentInput | CommentCreateOrConnectWithoutParentInput[]
    createMany?: CommentCreateManyParentInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type AttachmentUncheckedCreateNestedManyWithoutCommentInput = {
    create?: XOR<AttachmentCreateWithoutCommentInput, AttachmentUncheckedCreateWithoutCommentInput> | AttachmentCreateWithoutCommentInput[] | AttachmentUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: AttachmentCreateOrConnectWithoutCommentInput | AttachmentCreateOrConnectWithoutCommentInput[]
    createMany?: AttachmentCreateManyCommentInputEnvelope
    connect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
  }

  export type AnswerUpdateOneWithoutCommentsNestedInput = {
    create?: XOR<AnswerCreateWithoutCommentsInput, AnswerUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: AnswerCreateOrConnectWithoutCommentsInput
    upsert?: AnswerUpsertWithoutCommentsInput
    disconnect?: AnswerWhereInput | boolean
    delete?: AnswerWhereInput | boolean
    connect?: AnswerWhereUniqueInput
    update?: XOR<XOR<AnswerUpdateToOneWithWhereWithoutCommentsInput, AnswerUpdateWithoutCommentsInput>, AnswerUncheckedUpdateWithoutCommentsInput>
  }

  export type CommentUpdateOneWithoutRepliesNestedInput = {
    create?: XOR<CommentCreateWithoutRepliesInput, CommentUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: CommentCreateOrConnectWithoutRepliesInput
    upsert?: CommentUpsertWithoutRepliesInput
    disconnect?: CommentWhereInput | boolean
    delete?: CommentWhereInput | boolean
    connect?: CommentWhereUniqueInput
    update?: XOR<XOR<CommentUpdateToOneWithWhereWithoutRepliesInput, CommentUpdateWithoutRepliesInput>, CommentUncheckedUpdateWithoutRepliesInput>
  }

  export type CommentUpdateManyWithoutParentNestedInput = {
    create?: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput> | CommentCreateWithoutParentInput[] | CommentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutParentInput | CommentCreateOrConnectWithoutParentInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutParentInput | CommentUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: CommentCreateManyParentInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutParentInput | CommentUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutParentInput | CommentUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type QuestionUpdateOneWithoutCommentsNestedInput = {
    create?: XOR<QuestionCreateWithoutCommentsInput, QuestionUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutCommentsInput
    upsert?: QuestionUpsertWithoutCommentsInput
    disconnect?: QuestionWhereInput | boolean
    delete?: QuestionWhereInput | boolean
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutCommentsInput, QuestionUpdateWithoutCommentsInput>, QuestionUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    upsert?: UserUpsertWithoutCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentsInput, UserUpdateWithoutCommentsInput>, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type AttachmentUpdateManyWithoutCommentNestedInput = {
    create?: XOR<AttachmentCreateWithoutCommentInput, AttachmentUncheckedCreateWithoutCommentInput> | AttachmentCreateWithoutCommentInput[] | AttachmentUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: AttachmentCreateOrConnectWithoutCommentInput | AttachmentCreateOrConnectWithoutCommentInput[]
    upsert?: AttachmentUpsertWithWhereUniqueWithoutCommentInput | AttachmentUpsertWithWhereUniqueWithoutCommentInput[]
    createMany?: AttachmentCreateManyCommentInputEnvelope
    set?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    disconnect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    delete?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    connect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    update?: AttachmentUpdateWithWhereUniqueWithoutCommentInput | AttachmentUpdateWithWhereUniqueWithoutCommentInput[]
    updateMany?: AttachmentUpdateManyWithWhereWithoutCommentInput | AttachmentUpdateManyWithWhereWithoutCommentInput[]
    deleteMany?: AttachmentScalarWhereInput | AttachmentScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput> | CommentCreateWithoutParentInput[] | CommentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutParentInput | CommentCreateOrConnectWithoutParentInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutParentInput | CommentUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: CommentCreateManyParentInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutParentInput | CommentUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutParentInput | CommentUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type AttachmentUncheckedUpdateManyWithoutCommentNestedInput = {
    create?: XOR<AttachmentCreateWithoutCommentInput, AttachmentUncheckedCreateWithoutCommentInput> | AttachmentCreateWithoutCommentInput[] | AttachmentUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: AttachmentCreateOrConnectWithoutCommentInput | AttachmentCreateOrConnectWithoutCommentInput[]
    upsert?: AttachmentUpsertWithWhereUniqueWithoutCommentInput | AttachmentUpsertWithWhereUniqueWithoutCommentInput[]
    createMany?: AttachmentCreateManyCommentInputEnvelope
    set?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    disconnect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    delete?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    connect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    update?: AttachmentUpdateWithWhereUniqueWithoutCommentInput | AttachmentUpdateWithWhereUniqueWithoutCommentInput[]
    updateMany?: AttachmentUpdateManyWithWhereWithoutCommentInput | AttachmentUpdateManyWithWhereWithoutCommentInput[]
    deleteMany?: AttachmentScalarWhereInput | AttachmentScalarWhereInput[]
  }

  export type AnswerCreateNestedOneWithoutLikesInput = {
    create?: XOR<AnswerCreateWithoutLikesInput, AnswerUncheckedCreateWithoutLikesInput>
    connectOrCreate?: AnswerCreateOrConnectWithoutLikesInput
    connect?: AnswerWhereUniqueInput
  }

  export type QuestionCreateNestedOneWithoutLikesInput = {
    create?: XOR<QuestionCreateWithoutLikesInput, QuestionUncheckedCreateWithoutLikesInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutLikesInput
    connect?: QuestionWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutLikesInput = {
    create?: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikesInput
    connect?: UserWhereUniqueInput
  }

  export type AnswerUpdateOneWithoutLikesNestedInput = {
    create?: XOR<AnswerCreateWithoutLikesInput, AnswerUncheckedCreateWithoutLikesInput>
    connectOrCreate?: AnswerCreateOrConnectWithoutLikesInput
    upsert?: AnswerUpsertWithoutLikesInput
    disconnect?: AnswerWhereInput | boolean
    delete?: AnswerWhereInput | boolean
    connect?: AnswerWhereUniqueInput
    update?: XOR<XOR<AnswerUpdateToOneWithWhereWithoutLikesInput, AnswerUpdateWithoutLikesInput>, AnswerUncheckedUpdateWithoutLikesInput>
  }

  export type QuestionUpdateOneWithoutLikesNestedInput = {
    create?: XOR<QuestionCreateWithoutLikesInput, QuestionUncheckedCreateWithoutLikesInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutLikesInput
    upsert?: QuestionUpsertWithoutLikesInput
    disconnect?: QuestionWhereInput | boolean
    delete?: QuestionWhereInput | boolean
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutLikesInput, QuestionUpdateWithoutLikesInput>, QuestionUncheckedUpdateWithoutLikesInput>
  }

  export type UserUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikesInput
    upsert?: UserUpsertWithoutLikesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLikesInput, UserUpdateWithoutLikesInput>, UserUncheckedUpdateWithoutLikesInput>
  }

  export type TagsOnQuestionsCreateNestedManyWithoutTagInput = {
    create?: XOR<TagsOnQuestionsCreateWithoutTagInput, TagsOnQuestionsUncheckedCreateWithoutTagInput> | TagsOnQuestionsCreateWithoutTagInput[] | TagsOnQuestionsUncheckedCreateWithoutTagInput[]
    connectOrCreate?: TagsOnQuestionsCreateOrConnectWithoutTagInput | TagsOnQuestionsCreateOrConnectWithoutTagInput[]
    createMany?: TagsOnQuestionsCreateManyTagInputEnvelope
    connect?: TagsOnQuestionsWhereUniqueInput | TagsOnQuestionsWhereUniqueInput[]
  }

  export type TagsOnQuestionsUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<TagsOnQuestionsCreateWithoutTagInput, TagsOnQuestionsUncheckedCreateWithoutTagInput> | TagsOnQuestionsCreateWithoutTagInput[] | TagsOnQuestionsUncheckedCreateWithoutTagInput[]
    connectOrCreate?: TagsOnQuestionsCreateOrConnectWithoutTagInput | TagsOnQuestionsCreateOrConnectWithoutTagInput[]
    createMany?: TagsOnQuestionsCreateManyTagInputEnvelope
    connect?: TagsOnQuestionsWhereUniqueInput | TagsOnQuestionsWhereUniqueInput[]
  }

  export type TagsOnQuestionsUpdateManyWithoutTagNestedInput = {
    create?: XOR<TagsOnQuestionsCreateWithoutTagInput, TagsOnQuestionsUncheckedCreateWithoutTagInput> | TagsOnQuestionsCreateWithoutTagInput[] | TagsOnQuestionsUncheckedCreateWithoutTagInput[]
    connectOrCreate?: TagsOnQuestionsCreateOrConnectWithoutTagInput | TagsOnQuestionsCreateOrConnectWithoutTagInput[]
    upsert?: TagsOnQuestionsUpsertWithWhereUniqueWithoutTagInput | TagsOnQuestionsUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: TagsOnQuestionsCreateManyTagInputEnvelope
    set?: TagsOnQuestionsWhereUniqueInput | TagsOnQuestionsWhereUniqueInput[]
    disconnect?: TagsOnQuestionsWhereUniqueInput | TagsOnQuestionsWhereUniqueInput[]
    delete?: TagsOnQuestionsWhereUniqueInput | TagsOnQuestionsWhereUniqueInput[]
    connect?: TagsOnQuestionsWhereUniqueInput | TagsOnQuestionsWhereUniqueInput[]
    update?: TagsOnQuestionsUpdateWithWhereUniqueWithoutTagInput | TagsOnQuestionsUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: TagsOnQuestionsUpdateManyWithWhereWithoutTagInput | TagsOnQuestionsUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: TagsOnQuestionsScalarWhereInput | TagsOnQuestionsScalarWhereInput[]
  }

  export type TagsOnQuestionsUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<TagsOnQuestionsCreateWithoutTagInput, TagsOnQuestionsUncheckedCreateWithoutTagInput> | TagsOnQuestionsCreateWithoutTagInput[] | TagsOnQuestionsUncheckedCreateWithoutTagInput[]
    connectOrCreate?: TagsOnQuestionsCreateOrConnectWithoutTagInput | TagsOnQuestionsCreateOrConnectWithoutTagInput[]
    upsert?: TagsOnQuestionsUpsertWithWhereUniqueWithoutTagInput | TagsOnQuestionsUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: TagsOnQuestionsCreateManyTagInputEnvelope
    set?: TagsOnQuestionsWhereUniqueInput | TagsOnQuestionsWhereUniqueInput[]
    disconnect?: TagsOnQuestionsWhereUniqueInput | TagsOnQuestionsWhereUniqueInput[]
    delete?: TagsOnQuestionsWhereUniqueInput | TagsOnQuestionsWhereUniqueInput[]
    connect?: TagsOnQuestionsWhereUniqueInput | TagsOnQuestionsWhereUniqueInput[]
    update?: TagsOnQuestionsUpdateWithWhereUniqueWithoutTagInput | TagsOnQuestionsUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: TagsOnQuestionsUpdateManyWithWhereWithoutTagInput | TagsOnQuestionsUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: TagsOnQuestionsScalarWhereInput | TagsOnQuestionsScalarWhereInput[]
  }

  export type QuestionCreateNestedOneWithoutTagsInput = {
    create?: XOR<QuestionCreateWithoutTagsInput, QuestionUncheckedCreateWithoutTagsInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutTagsInput
    connect?: QuestionWhereUniqueInput
  }

  export type TagCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<TagCreateWithoutQuestionsInput, TagUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: TagCreateOrConnectWithoutQuestionsInput
    connect?: TagWhereUniqueInput
  }

  export type QuestionUpdateOneRequiredWithoutTagsNestedInput = {
    create?: XOR<QuestionCreateWithoutTagsInput, QuestionUncheckedCreateWithoutTagsInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutTagsInput
    upsert?: QuestionUpsertWithoutTagsInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutTagsInput, QuestionUpdateWithoutTagsInput>, QuestionUncheckedUpdateWithoutTagsInput>
  }

  export type TagUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<TagCreateWithoutQuestionsInput, TagUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: TagCreateOrConnectWithoutQuestionsInput
    upsert?: TagUpsertWithoutQuestionsInput
    connect?: TagWhereUniqueInput
    update?: XOR<XOR<TagUpdateToOneWithWhereWithoutQuestionsInput, TagUpdateWithoutQuestionsInput>, TagUncheckedUpdateWithoutQuestionsInput>
  }

  export type AnswerCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<AnswerCreateWithoutNotificationsInput, AnswerUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: AnswerCreateOrConnectWithoutNotificationsInput
    connect?: AnswerWhereUniqueInput
  }

  export type QuestionCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<QuestionCreateWithoutNotificationsInput, QuestionUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutNotificationsInput
    connect?: QuestionWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumNotificationTypeFieldUpdateOperationsInput = {
    set?: $Enums.NotificationType
  }

  export type AnswerUpdateOneWithoutNotificationsNestedInput = {
    create?: XOR<AnswerCreateWithoutNotificationsInput, AnswerUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: AnswerCreateOrConnectWithoutNotificationsInput
    upsert?: AnswerUpsertWithoutNotificationsInput
    disconnect?: AnswerWhereInput | boolean
    delete?: AnswerWhereInput | boolean
    connect?: AnswerWhereUniqueInput
    update?: XOR<XOR<AnswerUpdateToOneWithWhereWithoutNotificationsInput, AnswerUpdateWithoutNotificationsInput>, AnswerUncheckedUpdateWithoutNotificationsInput>
  }

  export type QuestionUpdateOneWithoutNotificationsNestedInput = {
    create?: XOR<QuestionCreateWithoutNotificationsInput, QuestionUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutNotificationsInput
    upsert?: QuestionUpsertWithoutNotificationsInput
    disconnect?: QuestionWhereInput | boolean
    delete?: QuestionWhereInput | boolean
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutNotificationsInput, QuestionUpdateWithoutNotificationsInput>, QuestionUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumQuestionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionStatus | EnumQuestionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionStatus[]
    notIn?: $Enums.QuestionStatus[]
    not?: NestedEnumQuestionStatusFilter<$PrismaModel> | $Enums.QuestionStatus
  }

  export type NestedEnumCollaboratorTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CollaboratorType | EnumCollaboratorTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CollaboratorType[]
    notIn?: $Enums.CollaboratorType[]
    not?: NestedEnumCollaboratorTypeFilter<$PrismaModel> | $Enums.CollaboratorType
  }

  export type NestedEnumQuestionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionStatus | EnumQuestionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionStatus[]
    notIn?: $Enums.QuestionStatus[]
    not?: NestedEnumQuestionStatusWithAggregatesFilter<$PrismaModel> | $Enums.QuestionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQuestionStatusFilter<$PrismaModel>
    _max?: NestedEnumQuestionStatusFilter<$PrismaModel>
  }

  export type NestedEnumCollaboratorTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CollaboratorType | EnumCollaboratorTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CollaboratorType[]
    notIn?: $Enums.CollaboratorType[]
    not?: NestedEnumCollaboratorTypeWithAggregatesFilter<$PrismaModel> | $Enums.CollaboratorType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCollaboratorTypeFilter<$PrismaModel>
    _max?: NestedEnumCollaboratorTypeFilter<$PrismaModel>
  }

  export type NestedEnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[]
    notIn?: $Enums.NotificationType[]
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }

  export type NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[]
    notIn?: $Enums.NotificationType[]
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AnswerCreateWithoutUserInput = {
    content: string
    is_accepted?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    question: QuestionCreateNestedOneWithoutAnswersInput
    comments?: CommentCreateNestedManyWithoutAnswerInput
    likes?: LikeCreateNestedManyWithoutAnswerInput
    notifications?: NotificationCreateNestedManyWithoutAnswerInput
    attachment?: AttachmentCreateNestedManyWithoutAnswerInput
  }

  export type AnswerUncheckedCreateWithoutUserInput = {
    answer_id?: number
    content: string
    is_accepted?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    question_id: number
    comments?: CommentUncheckedCreateNestedManyWithoutAnswerInput
    likes?: LikeUncheckedCreateNestedManyWithoutAnswerInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutAnswerInput
    attachment?: AttachmentUncheckedCreateNestedManyWithoutAnswerInput
  }

  export type AnswerCreateOrConnectWithoutUserInput = {
    where: AnswerWhereUniqueInput
    create: XOR<AnswerCreateWithoutUserInput, AnswerUncheckedCreateWithoutUserInput>
  }

  export type AnswerCreateManyUserInputEnvelope = {
    data: AnswerCreateManyUserInput | AnswerCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutUserInput = {
    content: string
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    answer?: AnswerCreateNestedOneWithoutCommentsInput
    parent?: CommentCreateNestedOneWithoutRepliesInput
    replies?: CommentCreateNestedManyWithoutParentInput
    question?: QuestionCreateNestedOneWithoutCommentsInput
    Attachment?: AttachmentCreateNestedManyWithoutCommentInput
  }

  export type CommentUncheckedCreateWithoutUserInput = {
    answer_id?: number | null
    comment_id?: number
    content: string
    created_at?: Date | string
    parent_id?: number | null
    question_id?: number | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    replies?: CommentUncheckedCreateNestedManyWithoutParentInput
    Attachment?: AttachmentUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentCreateOrConnectWithoutUserInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentCreateManyUserInputEnvelope = {
    data: CommentCreateManyUserInput | CommentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LikeCreateWithoutUserInput = {
    created_at?: Date | string
    answer?: AnswerCreateNestedOneWithoutLikesInput
    question?: QuestionCreateNestedOneWithoutLikesInput
  }

  export type LikeUncheckedCreateWithoutUserInput = {
    answer_id?: number | null
    created_at?: Date | string
    like_id?: number
    question_id?: number | null
  }

  export type LikeCreateOrConnectWithoutUserInput = {
    where: LikeWhereUniqueInput
    create: XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput>
  }

  export type LikeCreateManyUserInputEnvelope = {
    data: LikeCreateManyUserInput | LikeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutUserInput = {
    content: string
    is_read?: boolean
    created_at?: Date | string
    notification_type: $Enums.NotificationType
    answer?: AnswerCreateNestedOneWithoutNotificationsInput
    question?: QuestionCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: number
    content: string
    is_read?: boolean
    created_at?: Date | string
    question_id?: number | null
    answer_id?: number | null
    notification_type: $Enums.NotificationType
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type QuestionCreateWithoutCollaboratorInput = {
    title: string
    content: string
    status?: $Enums.QuestionStatus
    created_at?: Date | string
    due_date?: Date | string | null
    is_published?: boolean
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    collaborator_type: $Enums.CollaboratorType
    answers?: AnswerCreateNestedManyWithoutQuestionInput
    comments?: CommentCreateNestedManyWithoutQuestionInput
    likes?: LikeCreateNestedManyWithoutQuestionInput
    notifications?: NotificationCreateNestedManyWithoutQuestionInput
    collaborator_division?: DivisionCreateNestedOneWithoutAssigned_questionsInput
    creator: UserCreateNestedOneWithoutCreated_questionsInput
    tags?: TagsOnQuestionsCreateNestedManyWithoutQuestionInput
    attachment?: AttachmentCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutCollaboratorInput = {
    question_id?: number
    title: string
    content: string
    status?: $Enums.QuestionStatus
    created_at?: Date | string
    due_date?: Date | string | null
    is_published?: boolean
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    collaborator_division_id?: number | null
    collaborator_type: $Enums.CollaboratorType
    creator_id: number
    answers?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
    comments?: CommentUncheckedCreateNestedManyWithoutQuestionInput
    likes?: LikeUncheckedCreateNestedManyWithoutQuestionInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutQuestionInput
    tags?: TagsOnQuestionsUncheckedCreateNestedManyWithoutQuestionInput
    attachment?: AttachmentUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutCollaboratorInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutCollaboratorInput, QuestionUncheckedCreateWithoutCollaboratorInput>
  }

  export type QuestionCreateManyCollaboratorInputEnvelope = {
    data: QuestionCreateManyCollaboratorInput | QuestionCreateManyCollaboratorInput[]
    skipDuplicates?: boolean
  }

  export type QuestionCreateWithoutCreatorInput = {
    title: string
    content: string
    status?: $Enums.QuestionStatus
    created_at?: Date | string
    due_date?: Date | string | null
    is_published?: boolean
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    collaborator_type: $Enums.CollaboratorType
    answers?: AnswerCreateNestedManyWithoutQuestionInput
    comments?: CommentCreateNestedManyWithoutQuestionInput
    likes?: LikeCreateNestedManyWithoutQuestionInput
    notifications?: NotificationCreateNestedManyWithoutQuestionInput
    collaborator_division?: DivisionCreateNestedOneWithoutAssigned_questionsInput
    collaborator?: UserCreateNestedOneWithoutAssigned_questionsInput
    tags?: TagsOnQuestionsCreateNestedManyWithoutQuestionInput
    attachment?: AttachmentCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutCreatorInput = {
    question_id?: number
    title: string
    content: string
    status?: $Enums.QuestionStatus
    created_at?: Date | string
    due_date?: Date | string | null
    is_published?: boolean
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    collaborator_id?: number | null
    collaborator_division_id?: number | null
    collaborator_type: $Enums.CollaboratorType
    answers?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
    comments?: CommentUncheckedCreateNestedManyWithoutQuestionInput
    likes?: LikeUncheckedCreateNestedManyWithoutQuestionInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutQuestionInput
    tags?: TagsOnQuestionsUncheckedCreateNestedManyWithoutQuestionInput
    attachment?: AttachmentUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutCreatorInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutCreatorInput, QuestionUncheckedCreateWithoutCreatorInput>
  }

  export type QuestionCreateManyCreatorInputEnvelope = {
    data: QuestionCreateManyCreatorInput | QuestionCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type DivisionCreateWithoutUsersInput = {
    division_name: string
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    assigned_questions?: QuestionCreateNestedManyWithoutCollaborator_divisionInput
  }

  export type DivisionUncheckedCreateWithoutUsersInput = {
    id?: number
    division_name: string
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    assigned_questions?: QuestionUncheckedCreateNestedManyWithoutCollaborator_divisionInput
  }

  export type DivisionCreateOrConnectWithoutUsersInput = {
    where: DivisionWhereUniqueInput
    create: XOR<DivisionCreateWithoutUsersInput, DivisionUncheckedCreateWithoutUsersInput>
  }

  export type RoleCreateWithoutUsersInput = {
    name: string
    status?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type RoleUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    status?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type RoleCreateOrConnectWithoutUsersInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
  }

  export type AnswerUpsertWithWhereUniqueWithoutUserInput = {
    where: AnswerWhereUniqueInput
    update: XOR<AnswerUpdateWithoutUserInput, AnswerUncheckedUpdateWithoutUserInput>
    create: XOR<AnswerCreateWithoutUserInput, AnswerUncheckedCreateWithoutUserInput>
  }

  export type AnswerUpdateWithWhereUniqueWithoutUserInput = {
    where: AnswerWhereUniqueInput
    data: XOR<AnswerUpdateWithoutUserInput, AnswerUncheckedUpdateWithoutUserInput>
  }

  export type AnswerUpdateManyWithWhereWithoutUserInput = {
    where: AnswerScalarWhereInput
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyWithoutUserInput>
  }

  export type AnswerScalarWhereInput = {
    AND?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
    OR?: AnswerScalarWhereInput[]
    NOT?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
    answer_id?: IntFilter<"Answer"> | number
    content?: StringFilter<"Answer"> | string
    is_accepted?: BoolFilter<"Answer"> | boolean
    created_at?: DateTimeFilter<"Answer"> | Date | string
    updated_at?: DateTimeNullableFilter<"Answer"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"Answer"> | Date | string | null
    question_id?: IntFilter<"Answer"> | number
    user_id?: IntFilter<"Answer"> | number
  }

  export type CommentUpsertWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
  }

  export type CommentUpdateManyWithWhereWithoutUserInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutUserInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    user_id?: IntFilter<"Comment"> | number
    answer_id?: IntNullableFilter<"Comment"> | number | null
    comment_id?: IntFilter<"Comment"> | number
    content?: StringFilter<"Comment"> | string
    created_at?: DateTimeFilter<"Comment"> | Date | string
    parent_id?: IntNullableFilter<"Comment"> | number | null
    question_id?: IntNullableFilter<"Comment"> | number | null
    updated_at?: DateTimeNullableFilter<"Comment"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"Comment"> | Date | string | null
  }

  export type LikeUpsertWithWhereUniqueWithoutUserInput = {
    where: LikeWhereUniqueInput
    update: XOR<LikeUpdateWithoutUserInput, LikeUncheckedUpdateWithoutUserInput>
    create: XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput>
  }

  export type LikeUpdateWithWhereUniqueWithoutUserInput = {
    where: LikeWhereUniqueInput
    data: XOR<LikeUpdateWithoutUserInput, LikeUncheckedUpdateWithoutUserInput>
  }

  export type LikeUpdateManyWithWhereWithoutUserInput = {
    where: LikeScalarWhereInput
    data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyWithoutUserInput>
  }

  export type LikeScalarWhereInput = {
    AND?: LikeScalarWhereInput | LikeScalarWhereInput[]
    OR?: LikeScalarWhereInput[]
    NOT?: LikeScalarWhereInput | LikeScalarWhereInput[]
    user_id?: IntFilter<"Like"> | number
    answer_id?: IntNullableFilter<"Like"> | number | null
    created_at?: DateTimeFilter<"Like"> | Date | string
    like_id?: IntFilter<"Like"> | number
    question_id?: IntNullableFilter<"Like"> | number | null
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: IntFilter<"Notification"> | number
    content?: StringFilter<"Notification"> | string
    is_read?: BoolFilter<"Notification"> | boolean
    created_at?: DateTimeFilter<"Notification"> | Date | string
    user_id?: IntFilter<"Notification"> | number
    question_id?: IntNullableFilter<"Notification"> | number | null
    answer_id?: IntNullableFilter<"Notification"> | number | null
    notification_type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
  }

  export type QuestionUpsertWithWhereUniqueWithoutCollaboratorInput = {
    where: QuestionWhereUniqueInput
    update: XOR<QuestionUpdateWithoutCollaboratorInput, QuestionUncheckedUpdateWithoutCollaboratorInput>
    create: XOR<QuestionCreateWithoutCollaboratorInput, QuestionUncheckedCreateWithoutCollaboratorInput>
  }

  export type QuestionUpdateWithWhereUniqueWithoutCollaboratorInput = {
    where: QuestionWhereUniqueInput
    data: XOR<QuestionUpdateWithoutCollaboratorInput, QuestionUncheckedUpdateWithoutCollaboratorInput>
  }

  export type QuestionUpdateManyWithWhereWithoutCollaboratorInput = {
    where: QuestionScalarWhereInput
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyWithoutCollaboratorInput>
  }

  export type QuestionScalarWhereInput = {
    AND?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    OR?: QuestionScalarWhereInput[]
    NOT?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    question_id?: IntFilter<"Question"> | number
    title?: StringFilter<"Question"> | string
    content?: StringFilter<"Question"> | string
    status?: EnumQuestionStatusFilter<"Question"> | $Enums.QuestionStatus
    created_at?: DateTimeFilter<"Question"> | Date | string
    due_date?: DateTimeNullableFilter<"Question"> | Date | string | null
    is_published?: BoolFilter<"Question"> | boolean
    updated_at?: DateTimeNullableFilter<"Question"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"Question"> | Date | string | null
    collaborator_id?: IntNullableFilter<"Question"> | number | null
    collaborator_division_id?: IntNullableFilter<"Question"> | number | null
    collaborator_type?: EnumCollaboratorTypeFilter<"Question"> | $Enums.CollaboratorType
    creator_id?: IntFilter<"Question"> | number
  }

  export type QuestionUpsertWithWhereUniqueWithoutCreatorInput = {
    where: QuestionWhereUniqueInput
    update: XOR<QuestionUpdateWithoutCreatorInput, QuestionUncheckedUpdateWithoutCreatorInput>
    create: XOR<QuestionCreateWithoutCreatorInput, QuestionUncheckedCreateWithoutCreatorInput>
  }

  export type QuestionUpdateWithWhereUniqueWithoutCreatorInput = {
    where: QuestionWhereUniqueInput
    data: XOR<QuestionUpdateWithoutCreatorInput, QuestionUncheckedUpdateWithoutCreatorInput>
  }

  export type QuestionUpdateManyWithWhereWithoutCreatorInput = {
    where: QuestionScalarWhereInput
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyWithoutCreatorInput>
  }

  export type DivisionUpsertWithoutUsersInput = {
    update: XOR<DivisionUpdateWithoutUsersInput, DivisionUncheckedUpdateWithoutUsersInput>
    create: XOR<DivisionCreateWithoutUsersInput, DivisionUncheckedCreateWithoutUsersInput>
    where?: DivisionWhereInput
  }

  export type DivisionUpdateToOneWithWhereWithoutUsersInput = {
    where?: DivisionWhereInput
    data: XOR<DivisionUpdateWithoutUsersInput, DivisionUncheckedUpdateWithoutUsersInput>
  }

  export type DivisionUpdateWithoutUsersInput = {
    division_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assigned_questions?: QuestionUpdateManyWithoutCollaborator_divisionNestedInput
  }

  export type DivisionUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    division_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assigned_questions?: QuestionUncheckedUpdateManyWithoutCollaborator_divisionNestedInput
  }

  export type RoleUpsertWithoutUsersInput = {
    update: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutUsersInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type RoleUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RoleUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCreateWithoutRoleInput = {
    first_name?: string | null
    last_name?: string | null
    username?: string | null
    password: string
    token?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    email: string
    profile_picture?: string | null
    answers?: AnswerCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    likes?: LikeCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    assigned_questions?: QuestionCreateNestedManyWithoutCollaboratorInput
    created_questions?: QuestionCreateNestedManyWithoutCreatorInput
    division?: DivisionCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutRoleInput = {
    first_name?: string | null
    last_name?: string | null
    username?: string | null
    password: string
    token?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    email: string
    division_id?: number | null
    user_id?: number
    profile_picture?: string | null
    answers?: AnswerUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    assigned_questions?: QuestionUncheckedCreateNestedManyWithoutCollaboratorInput
    created_questions?: QuestionUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutRoleInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserCreateManyRoleInputEnvelope = {
    data: UserCreateManyRoleInput | UserCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
  }

  export type UserUpdateManyWithWhereWithoutRoleInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRoleInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    first_name?: StringNullableFilter<"User"> | string | null
    last_name?: StringNullableFilter<"User"> | string | null
    username?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    token?: StringNullableFilter<"User"> | string | null
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeNullableFilter<"User"> | Date | string | null
    role_id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    division_id?: IntNullableFilter<"User"> | number | null
    user_id?: IntFilter<"User"> | number
    profile_picture?: StringNullableFilter<"User"> | string | null
  }

  export type QuestionCreateWithoutCollaborator_divisionInput = {
    title: string
    content: string
    status?: $Enums.QuestionStatus
    created_at?: Date | string
    due_date?: Date | string | null
    is_published?: boolean
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    collaborator_type: $Enums.CollaboratorType
    answers?: AnswerCreateNestedManyWithoutQuestionInput
    comments?: CommentCreateNestedManyWithoutQuestionInput
    likes?: LikeCreateNestedManyWithoutQuestionInput
    notifications?: NotificationCreateNestedManyWithoutQuestionInput
    collaborator?: UserCreateNestedOneWithoutAssigned_questionsInput
    creator: UserCreateNestedOneWithoutCreated_questionsInput
    tags?: TagsOnQuestionsCreateNestedManyWithoutQuestionInput
    attachment?: AttachmentCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutCollaborator_divisionInput = {
    question_id?: number
    title: string
    content: string
    status?: $Enums.QuestionStatus
    created_at?: Date | string
    due_date?: Date | string | null
    is_published?: boolean
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    collaborator_id?: number | null
    collaborator_type: $Enums.CollaboratorType
    creator_id: number
    answers?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
    comments?: CommentUncheckedCreateNestedManyWithoutQuestionInput
    likes?: LikeUncheckedCreateNestedManyWithoutQuestionInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutQuestionInput
    tags?: TagsOnQuestionsUncheckedCreateNestedManyWithoutQuestionInput
    attachment?: AttachmentUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutCollaborator_divisionInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutCollaborator_divisionInput, QuestionUncheckedCreateWithoutCollaborator_divisionInput>
  }

  export type QuestionCreateManyCollaborator_divisionInputEnvelope = {
    data: QuestionCreateManyCollaborator_divisionInput | QuestionCreateManyCollaborator_divisionInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutDivisionInput = {
    first_name?: string | null
    last_name?: string | null
    username?: string | null
    password: string
    token?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    email: string
    profile_picture?: string | null
    answers?: AnswerCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    likes?: LikeCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    assigned_questions?: QuestionCreateNestedManyWithoutCollaboratorInput
    created_questions?: QuestionCreateNestedManyWithoutCreatorInput
    role: RoleCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutDivisionInput = {
    first_name?: string | null
    last_name?: string | null
    username?: string | null
    password: string
    token?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    role_id: number
    email: string
    user_id?: number
    profile_picture?: string | null
    answers?: AnswerUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    assigned_questions?: QuestionUncheckedCreateNestedManyWithoutCollaboratorInput
    created_questions?: QuestionUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutDivisionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDivisionInput, UserUncheckedCreateWithoutDivisionInput>
  }

  export type UserCreateManyDivisionInputEnvelope = {
    data: UserCreateManyDivisionInput | UserCreateManyDivisionInput[]
    skipDuplicates?: boolean
  }

  export type QuestionUpsertWithWhereUniqueWithoutCollaborator_divisionInput = {
    where: QuestionWhereUniqueInput
    update: XOR<QuestionUpdateWithoutCollaborator_divisionInput, QuestionUncheckedUpdateWithoutCollaborator_divisionInput>
    create: XOR<QuestionCreateWithoutCollaborator_divisionInput, QuestionUncheckedCreateWithoutCollaborator_divisionInput>
  }

  export type QuestionUpdateWithWhereUniqueWithoutCollaborator_divisionInput = {
    where: QuestionWhereUniqueInput
    data: XOR<QuestionUpdateWithoutCollaborator_divisionInput, QuestionUncheckedUpdateWithoutCollaborator_divisionInput>
  }

  export type QuestionUpdateManyWithWhereWithoutCollaborator_divisionInput = {
    where: QuestionScalarWhereInput
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyWithoutCollaborator_divisionInput>
  }

  export type UserUpsertWithWhereUniqueWithoutDivisionInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutDivisionInput, UserUncheckedUpdateWithoutDivisionInput>
    create: XOR<UserCreateWithoutDivisionInput, UserUncheckedCreateWithoutDivisionInput>
  }

  export type UserUpdateWithWhereUniqueWithoutDivisionInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutDivisionInput, UserUncheckedUpdateWithoutDivisionInput>
  }

  export type UserUpdateManyWithWhereWithoutDivisionInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutDivisionInput>
  }

  export type AnswerCreateWithoutQuestionInput = {
    content: string
    is_accepted?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    user: UserCreateNestedOneWithoutAnswersInput
    comments?: CommentCreateNestedManyWithoutAnswerInput
    likes?: LikeCreateNestedManyWithoutAnswerInput
    notifications?: NotificationCreateNestedManyWithoutAnswerInput
    attachment?: AttachmentCreateNestedManyWithoutAnswerInput
  }

  export type AnswerUncheckedCreateWithoutQuestionInput = {
    answer_id?: number
    content: string
    is_accepted?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    user_id: number
    comments?: CommentUncheckedCreateNestedManyWithoutAnswerInput
    likes?: LikeUncheckedCreateNestedManyWithoutAnswerInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutAnswerInput
    attachment?: AttachmentUncheckedCreateNestedManyWithoutAnswerInput
  }

  export type AnswerCreateOrConnectWithoutQuestionInput = {
    where: AnswerWhereUniqueInput
    create: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput>
  }

  export type AnswerCreateManyQuestionInputEnvelope = {
    data: AnswerCreateManyQuestionInput | AnswerCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutQuestionInput = {
    content: string
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    answer?: AnswerCreateNestedOneWithoutCommentsInput
    parent?: CommentCreateNestedOneWithoutRepliesInput
    replies?: CommentCreateNestedManyWithoutParentInput
    user: UserCreateNestedOneWithoutCommentsInput
    Attachment?: AttachmentCreateNestedManyWithoutCommentInput
  }

  export type CommentUncheckedCreateWithoutQuestionInput = {
    user_id: number
    answer_id?: number | null
    comment_id?: number
    content: string
    created_at?: Date | string
    parent_id?: number | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    replies?: CommentUncheckedCreateNestedManyWithoutParentInput
    Attachment?: AttachmentUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentCreateOrConnectWithoutQuestionInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutQuestionInput, CommentUncheckedCreateWithoutQuestionInput>
  }

  export type CommentCreateManyQuestionInputEnvelope = {
    data: CommentCreateManyQuestionInput | CommentCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type LikeCreateWithoutQuestionInput = {
    created_at?: Date | string
    answer?: AnswerCreateNestedOneWithoutLikesInput
    user: UserCreateNestedOneWithoutLikesInput
  }

  export type LikeUncheckedCreateWithoutQuestionInput = {
    user_id: number
    answer_id?: number | null
    created_at?: Date | string
    like_id?: number
  }

  export type LikeCreateOrConnectWithoutQuestionInput = {
    where: LikeWhereUniqueInput
    create: XOR<LikeCreateWithoutQuestionInput, LikeUncheckedCreateWithoutQuestionInput>
  }

  export type LikeCreateManyQuestionInputEnvelope = {
    data: LikeCreateManyQuestionInput | LikeCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutQuestionInput = {
    content: string
    is_read?: boolean
    created_at?: Date | string
    notification_type: $Enums.NotificationType
    answer?: AnswerCreateNestedOneWithoutNotificationsInput
    user: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateWithoutQuestionInput = {
    id?: number
    content: string
    is_read?: boolean
    created_at?: Date | string
    user_id: number
    answer_id?: number | null
    notification_type: $Enums.NotificationType
  }

  export type NotificationCreateOrConnectWithoutQuestionInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutQuestionInput, NotificationUncheckedCreateWithoutQuestionInput>
  }

  export type NotificationCreateManyQuestionInputEnvelope = {
    data: NotificationCreateManyQuestionInput | NotificationCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type DivisionCreateWithoutAssigned_questionsInput = {
    division_name: string
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    users?: UserCreateNestedManyWithoutDivisionInput
  }

  export type DivisionUncheckedCreateWithoutAssigned_questionsInput = {
    id?: number
    division_name: string
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    users?: UserUncheckedCreateNestedManyWithoutDivisionInput
  }

  export type DivisionCreateOrConnectWithoutAssigned_questionsInput = {
    where: DivisionWhereUniqueInput
    create: XOR<DivisionCreateWithoutAssigned_questionsInput, DivisionUncheckedCreateWithoutAssigned_questionsInput>
  }

  export type UserCreateWithoutAssigned_questionsInput = {
    first_name?: string | null
    last_name?: string | null
    username?: string | null
    password: string
    token?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    email: string
    profile_picture?: string | null
    answers?: AnswerCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    likes?: LikeCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    created_questions?: QuestionCreateNestedManyWithoutCreatorInput
    division?: DivisionCreateNestedOneWithoutUsersInput
    role: RoleCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutAssigned_questionsInput = {
    first_name?: string | null
    last_name?: string | null
    username?: string | null
    password: string
    token?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    role_id: number
    email: string
    division_id?: number | null
    user_id?: number
    profile_picture?: string | null
    answers?: AnswerUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    created_questions?: QuestionUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutAssigned_questionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAssigned_questionsInput, UserUncheckedCreateWithoutAssigned_questionsInput>
  }

  export type UserCreateWithoutCreated_questionsInput = {
    first_name?: string | null
    last_name?: string | null
    username?: string | null
    password: string
    token?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    email: string
    profile_picture?: string | null
    answers?: AnswerCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    likes?: LikeCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    assigned_questions?: QuestionCreateNestedManyWithoutCollaboratorInput
    division?: DivisionCreateNestedOneWithoutUsersInput
    role: RoleCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutCreated_questionsInput = {
    first_name?: string | null
    last_name?: string | null
    username?: string | null
    password: string
    token?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    role_id: number
    email: string
    division_id?: number | null
    user_id?: number
    profile_picture?: string | null
    answers?: AnswerUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    assigned_questions?: QuestionUncheckedCreateNestedManyWithoutCollaboratorInput
  }

  export type UserCreateOrConnectWithoutCreated_questionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreated_questionsInput, UserUncheckedCreateWithoutCreated_questionsInput>
  }

  export type TagsOnQuestionsCreateWithoutQuestionInput = {
    assigned_at?: Date | string
    deleted_at?: Date | string | null
    tag: TagCreateNestedOneWithoutQuestionsInput
  }

  export type TagsOnQuestionsUncheckedCreateWithoutQuestionInput = {
    tag_id: number
    assigned_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type TagsOnQuestionsCreateOrConnectWithoutQuestionInput = {
    where: TagsOnQuestionsWhereUniqueInput
    create: XOR<TagsOnQuestionsCreateWithoutQuestionInput, TagsOnQuestionsUncheckedCreateWithoutQuestionInput>
  }

  export type TagsOnQuestionsCreateManyQuestionInputEnvelope = {
    data: TagsOnQuestionsCreateManyQuestionInput | TagsOnQuestionsCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type AttachmentCreateWithoutQuestionInput = {
    file_name: string
    file_path: string
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    answer?: AnswerCreateNestedOneWithoutAttachmentInput
    comment?: CommentCreateNestedOneWithoutAttachmentInput
  }

  export type AttachmentUncheckedCreateWithoutQuestionInput = {
    attachment_id?: number
    file_name: string
    file_path: string
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    answer_id?: number | null
    comment_id?: number | null
  }

  export type AttachmentCreateOrConnectWithoutQuestionInput = {
    where: AttachmentWhereUniqueInput
    create: XOR<AttachmentCreateWithoutQuestionInput, AttachmentUncheckedCreateWithoutQuestionInput>
  }

  export type AttachmentCreateManyQuestionInputEnvelope = {
    data: AttachmentCreateManyQuestionInput | AttachmentCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type AnswerUpsertWithWhereUniqueWithoutQuestionInput = {
    where: AnswerWhereUniqueInput
    update: XOR<AnswerUpdateWithoutQuestionInput, AnswerUncheckedUpdateWithoutQuestionInput>
    create: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput>
  }

  export type AnswerUpdateWithWhereUniqueWithoutQuestionInput = {
    where: AnswerWhereUniqueInput
    data: XOR<AnswerUpdateWithoutQuestionInput, AnswerUncheckedUpdateWithoutQuestionInput>
  }

  export type AnswerUpdateManyWithWhereWithoutQuestionInput = {
    where: AnswerScalarWhereInput
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyWithoutQuestionInput>
  }

  export type CommentUpsertWithWhereUniqueWithoutQuestionInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutQuestionInput, CommentUncheckedUpdateWithoutQuestionInput>
    create: XOR<CommentCreateWithoutQuestionInput, CommentUncheckedCreateWithoutQuestionInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutQuestionInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutQuestionInput, CommentUncheckedUpdateWithoutQuestionInput>
  }

  export type CommentUpdateManyWithWhereWithoutQuestionInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutQuestionInput>
  }

  export type LikeUpsertWithWhereUniqueWithoutQuestionInput = {
    where: LikeWhereUniqueInput
    update: XOR<LikeUpdateWithoutQuestionInput, LikeUncheckedUpdateWithoutQuestionInput>
    create: XOR<LikeCreateWithoutQuestionInput, LikeUncheckedCreateWithoutQuestionInput>
  }

  export type LikeUpdateWithWhereUniqueWithoutQuestionInput = {
    where: LikeWhereUniqueInput
    data: XOR<LikeUpdateWithoutQuestionInput, LikeUncheckedUpdateWithoutQuestionInput>
  }

  export type LikeUpdateManyWithWhereWithoutQuestionInput = {
    where: LikeScalarWhereInput
    data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyWithoutQuestionInput>
  }

  export type NotificationUpsertWithWhereUniqueWithoutQuestionInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutQuestionInput, NotificationUncheckedUpdateWithoutQuestionInput>
    create: XOR<NotificationCreateWithoutQuestionInput, NotificationUncheckedCreateWithoutQuestionInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutQuestionInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutQuestionInput, NotificationUncheckedUpdateWithoutQuestionInput>
  }

  export type NotificationUpdateManyWithWhereWithoutQuestionInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutQuestionInput>
  }

  export type DivisionUpsertWithoutAssigned_questionsInput = {
    update: XOR<DivisionUpdateWithoutAssigned_questionsInput, DivisionUncheckedUpdateWithoutAssigned_questionsInput>
    create: XOR<DivisionCreateWithoutAssigned_questionsInput, DivisionUncheckedCreateWithoutAssigned_questionsInput>
    where?: DivisionWhereInput
  }

  export type DivisionUpdateToOneWithWhereWithoutAssigned_questionsInput = {
    where?: DivisionWhereInput
    data: XOR<DivisionUpdateWithoutAssigned_questionsInput, DivisionUncheckedUpdateWithoutAssigned_questionsInput>
  }

  export type DivisionUpdateWithoutAssigned_questionsInput = {
    division_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUpdateManyWithoutDivisionNestedInput
  }

  export type DivisionUncheckedUpdateWithoutAssigned_questionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    division_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUncheckedUpdateManyWithoutDivisionNestedInput
  }

  export type UserUpsertWithoutAssigned_questionsInput = {
    update: XOR<UserUpdateWithoutAssigned_questionsInput, UserUncheckedUpdateWithoutAssigned_questionsInput>
    create: XOR<UserCreateWithoutAssigned_questionsInput, UserUncheckedCreateWithoutAssigned_questionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAssigned_questionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAssigned_questionsInput, UserUncheckedUpdateWithoutAssigned_questionsInput>
  }

  export type UserUpdateWithoutAssigned_questionsInput = {
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    answers?: AnswerUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    likes?: LikeUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    created_questions?: QuestionUpdateManyWithoutCreatorNestedInput
    division?: DivisionUpdateOneWithoutUsersNestedInput
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutAssigned_questionsInput = {
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    division_id?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: IntFieldUpdateOperationsInput | number
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    answers?: AnswerUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    created_questions?: QuestionUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type UserUpsertWithoutCreated_questionsInput = {
    update: XOR<UserUpdateWithoutCreated_questionsInput, UserUncheckedUpdateWithoutCreated_questionsInput>
    create: XOR<UserCreateWithoutCreated_questionsInput, UserUncheckedCreateWithoutCreated_questionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreated_questionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreated_questionsInput, UserUncheckedUpdateWithoutCreated_questionsInput>
  }

  export type UserUpdateWithoutCreated_questionsInput = {
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    answers?: AnswerUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    likes?: LikeUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    assigned_questions?: QuestionUpdateManyWithoutCollaboratorNestedInput
    division?: DivisionUpdateOneWithoutUsersNestedInput
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutCreated_questionsInput = {
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    division_id?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: IntFieldUpdateOperationsInput | number
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    answers?: AnswerUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    assigned_questions?: QuestionUncheckedUpdateManyWithoutCollaboratorNestedInput
  }

  export type TagsOnQuestionsUpsertWithWhereUniqueWithoutQuestionInput = {
    where: TagsOnQuestionsWhereUniqueInput
    update: XOR<TagsOnQuestionsUpdateWithoutQuestionInput, TagsOnQuestionsUncheckedUpdateWithoutQuestionInput>
    create: XOR<TagsOnQuestionsCreateWithoutQuestionInput, TagsOnQuestionsUncheckedCreateWithoutQuestionInput>
  }

  export type TagsOnQuestionsUpdateWithWhereUniqueWithoutQuestionInput = {
    where: TagsOnQuestionsWhereUniqueInput
    data: XOR<TagsOnQuestionsUpdateWithoutQuestionInput, TagsOnQuestionsUncheckedUpdateWithoutQuestionInput>
  }

  export type TagsOnQuestionsUpdateManyWithWhereWithoutQuestionInput = {
    where: TagsOnQuestionsScalarWhereInput
    data: XOR<TagsOnQuestionsUpdateManyMutationInput, TagsOnQuestionsUncheckedUpdateManyWithoutQuestionInput>
  }

  export type TagsOnQuestionsScalarWhereInput = {
    AND?: TagsOnQuestionsScalarWhereInput | TagsOnQuestionsScalarWhereInput[]
    OR?: TagsOnQuestionsScalarWhereInput[]
    NOT?: TagsOnQuestionsScalarWhereInput | TagsOnQuestionsScalarWhereInput[]
    question_id?: IntFilter<"TagsOnQuestions"> | number
    tag_id?: IntFilter<"TagsOnQuestions"> | number
    assigned_at?: DateTimeFilter<"TagsOnQuestions"> | Date | string
    deleted_at?: DateTimeNullableFilter<"TagsOnQuestions"> | Date | string | null
  }

  export type AttachmentUpsertWithWhereUniqueWithoutQuestionInput = {
    where: AttachmentWhereUniqueInput
    update: XOR<AttachmentUpdateWithoutQuestionInput, AttachmentUncheckedUpdateWithoutQuestionInput>
    create: XOR<AttachmentCreateWithoutQuestionInput, AttachmentUncheckedCreateWithoutQuestionInput>
  }

  export type AttachmentUpdateWithWhereUniqueWithoutQuestionInput = {
    where: AttachmentWhereUniqueInput
    data: XOR<AttachmentUpdateWithoutQuestionInput, AttachmentUncheckedUpdateWithoutQuestionInput>
  }

  export type AttachmentUpdateManyWithWhereWithoutQuestionInput = {
    where: AttachmentScalarWhereInput
    data: XOR<AttachmentUpdateManyMutationInput, AttachmentUncheckedUpdateManyWithoutQuestionInput>
  }

  export type AttachmentScalarWhereInput = {
    AND?: AttachmentScalarWhereInput | AttachmentScalarWhereInput[]
    OR?: AttachmentScalarWhereInput[]
    NOT?: AttachmentScalarWhereInput | AttachmentScalarWhereInput[]
    attachment_id?: IntFilter<"Attachment"> | number
    file_name?: StringFilter<"Attachment"> | string
    file_path?: StringFilter<"Attachment"> | string
    created_at?: DateTimeFilter<"Attachment"> | Date | string
    updated_at?: DateTimeNullableFilter<"Attachment"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"Attachment"> | Date | string | null
    question_id?: IntNullableFilter<"Attachment"> | number | null
    answer_id?: IntNullableFilter<"Attachment"> | number | null
    comment_id?: IntNullableFilter<"Attachment"> | number | null
  }

  export type QuestionCreateWithoutAttachmentInput = {
    title: string
    content: string
    status?: $Enums.QuestionStatus
    created_at?: Date | string
    due_date?: Date | string | null
    is_published?: boolean
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    collaborator_type: $Enums.CollaboratorType
    answers?: AnswerCreateNestedManyWithoutQuestionInput
    comments?: CommentCreateNestedManyWithoutQuestionInput
    likes?: LikeCreateNestedManyWithoutQuestionInput
    notifications?: NotificationCreateNestedManyWithoutQuestionInput
    collaborator_division?: DivisionCreateNestedOneWithoutAssigned_questionsInput
    collaborator?: UserCreateNestedOneWithoutAssigned_questionsInput
    creator: UserCreateNestedOneWithoutCreated_questionsInput
    tags?: TagsOnQuestionsCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutAttachmentInput = {
    question_id?: number
    title: string
    content: string
    status?: $Enums.QuestionStatus
    created_at?: Date | string
    due_date?: Date | string | null
    is_published?: boolean
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    collaborator_id?: number | null
    collaborator_division_id?: number | null
    collaborator_type: $Enums.CollaboratorType
    creator_id: number
    answers?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
    comments?: CommentUncheckedCreateNestedManyWithoutQuestionInput
    likes?: LikeUncheckedCreateNestedManyWithoutQuestionInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutQuestionInput
    tags?: TagsOnQuestionsUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutAttachmentInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutAttachmentInput, QuestionUncheckedCreateWithoutAttachmentInput>
  }

  export type AnswerCreateWithoutAttachmentInput = {
    content: string
    is_accepted?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    question: QuestionCreateNestedOneWithoutAnswersInput
    user: UserCreateNestedOneWithoutAnswersInput
    comments?: CommentCreateNestedManyWithoutAnswerInput
    likes?: LikeCreateNestedManyWithoutAnswerInput
    notifications?: NotificationCreateNestedManyWithoutAnswerInput
  }

  export type AnswerUncheckedCreateWithoutAttachmentInput = {
    answer_id?: number
    content: string
    is_accepted?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    question_id: number
    user_id: number
    comments?: CommentUncheckedCreateNestedManyWithoutAnswerInput
    likes?: LikeUncheckedCreateNestedManyWithoutAnswerInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutAnswerInput
  }

  export type AnswerCreateOrConnectWithoutAttachmentInput = {
    where: AnswerWhereUniqueInput
    create: XOR<AnswerCreateWithoutAttachmentInput, AnswerUncheckedCreateWithoutAttachmentInput>
  }

  export type CommentCreateWithoutAttachmentInput = {
    content: string
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    answer?: AnswerCreateNestedOneWithoutCommentsInput
    parent?: CommentCreateNestedOneWithoutRepliesInput
    replies?: CommentCreateNestedManyWithoutParentInput
    question?: QuestionCreateNestedOneWithoutCommentsInput
    user: UserCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutAttachmentInput = {
    user_id: number
    answer_id?: number | null
    comment_id?: number
    content: string
    created_at?: Date | string
    parent_id?: number | null
    question_id?: number | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    replies?: CommentUncheckedCreateNestedManyWithoutParentInput
  }

  export type CommentCreateOrConnectWithoutAttachmentInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutAttachmentInput, CommentUncheckedCreateWithoutAttachmentInput>
  }

  export type QuestionUpsertWithoutAttachmentInput = {
    update: XOR<QuestionUpdateWithoutAttachmentInput, QuestionUncheckedUpdateWithoutAttachmentInput>
    create: XOR<QuestionCreateWithoutAttachmentInput, QuestionUncheckedCreateWithoutAttachmentInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutAttachmentInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutAttachmentInput, QuestionUncheckedUpdateWithoutAttachmentInput>
  }

  export type QuestionUpdateWithoutAttachmentInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: EnumQuestionStatusFieldUpdateOperationsInput | $Enums.QuestionStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_published?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    collaborator_type?: EnumCollaboratorTypeFieldUpdateOperationsInput | $Enums.CollaboratorType
    answers?: AnswerUpdateManyWithoutQuestionNestedInput
    comments?: CommentUpdateManyWithoutQuestionNestedInput
    likes?: LikeUpdateManyWithoutQuestionNestedInput
    notifications?: NotificationUpdateManyWithoutQuestionNestedInput
    collaborator_division?: DivisionUpdateOneWithoutAssigned_questionsNestedInput
    collaborator?: UserUpdateOneWithoutAssigned_questionsNestedInput
    creator?: UserUpdateOneRequiredWithoutCreated_questionsNestedInput
    tags?: TagsOnQuestionsUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutAttachmentInput = {
    question_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: EnumQuestionStatusFieldUpdateOperationsInput | $Enums.QuestionStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_published?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    collaborator_id?: NullableIntFieldUpdateOperationsInput | number | null
    collaborator_division_id?: NullableIntFieldUpdateOperationsInput | number | null
    collaborator_type?: EnumCollaboratorTypeFieldUpdateOperationsInput | $Enums.CollaboratorType
    creator_id?: IntFieldUpdateOperationsInput | number
    answers?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput
    comments?: CommentUncheckedUpdateManyWithoutQuestionNestedInput
    likes?: LikeUncheckedUpdateManyWithoutQuestionNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutQuestionNestedInput
    tags?: TagsOnQuestionsUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type AnswerUpsertWithoutAttachmentInput = {
    update: XOR<AnswerUpdateWithoutAttachmentInput, AnswerUncheckedUpdateWithoutAttachmentInput>
    create: XOR<AnswerCreateWithoutAttachmentInput, AnswerUncheckedCreateWithoutAttachmentInput>
    where?: AnswerWhereInput
  }

  export type AnswerUpdateToOneWithWhereWithoutAttachmentInput = {
    where?: AnswerWhereInput
    data: XOR<AnswerUpdateWithoutAttachmentInput, AnswerUncheckedUpdateWithoutAttachmentInput>
  }

  export type AnswerUpdateWithoutAttachmentInput = {
    content?: StringFieldUpdateOperationsInput | string
    is_accepted?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    question?: QuestionUpdateOneRequiredWithoutAnswersNestedInput
    user?: UserUpdateOneRequiredWithoutAnswersNestedInput
    comments?: CommentUpdateManyWithoutAnswerNestedInput
    likes?: LikeUpdateManyWithoutAnswerNestedInput
    notifications?: NotificationUpdateManyWithoutAnswerNestedInput
  }

  export type AnswerUncheckedUpdateWithoutAttachmentInput = {
    answer_id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    is_accepted?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    question_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    comments?: CommentUncheckedUpdateManyWithoutAnswerNestedInput
    likes?: LikeUncheckedUpdateManyWithoutAnswerNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutAnswerNestedInput
  }

  export type CommentUpsertWithoutAttachmentInput = {
    update: XOR<CommentUpdateWithoutAttachmentInput, CommentUncheckedUpdateWithoutAttachmentInput>
    create: XOR<CommentCreateWithoutAttachmentInput, CommentUncheckedCreateWithoutAttachmentInput>
    where?: CommentWhereInput
  }

  export type CommentUpdateToOneWithWhereWithoutAttachmentInput = {
    where?: CommentWhereInput
    data: XOR<CommentUpdateWithoutAttachmentInput, CommentUncheckedUpdateWithoutAttachmentInput>
  }

  export type CommentUpdateWithoutAttachmentInput = {
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answer?: AnswerUpdateOneWithoutCommentsNestedInput
    parent?: CommentUpdateOneWithoutRepliesNestedInput
    replies?: CommentUpdateManyWithoutParentNestedInput
    question?: QuestionUpdateOneWithoutCommentsNestedInput
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutAttachmentInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    answer_id?: NullableIntFieldUpdateOperationsInput | number | null
    comment_id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
    question_id?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replies?: CommentUncheckedUpdateManyWithoutParentNestedInput
  }

  export type QuestionCreateWithoutAnswersInput = {
    title: string
    content: string
    status?: $Enums.QuestionStatus
    created_at?: Date | string
    due_date?: Date | string | null
    is_published?: boolean
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    collaborator_type: $Enums.CollaboratorType
    comments?: CommentCreateNestedManyWithoutQuestionInput
    likes?: LikeCreateNestedManyWithoutQuestionInput
    notifications?: NotificationCreateNestedManyWithoutQuestionInput
    collaborator_division?: DivisionCreateNestedOneWithoutAssigned_questionsInput
    collaborator?: UserCreateNestedOneWithoutAssigned_questionsInput
    creator: UserCreateNestedOneWithoutCreated_questionsInput
    tags?: TagsOnQuestionsCreateNestedManyWithoutQuestionInput
    attachment?: AttachmentCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutAnswersInput = {
    question_id?: number
    title: string
    content: string
    status?: $Enums.QuestionStatus
    created_at?: Date | string
    due_date?: Date | string | null
    is_published?: boolean
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    collaborator_id?: number | null
    collaborator_division_id?: number | null
    collaborator_type: $Enums.CollaboratorType
    creator_id: number
    comments?: CommentUncheckedCreateNestedManyWithoutQuestionInput
    likes?: LikeUncheckedCreateNestedManyWithoutQuestionInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutQuestionInput
    tags?: TagsOnQuestionsUncheckedCreateNestedManyWithoutQuestionInput
    attachment?: AttachmentUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutAnswersInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
  }

  export type UserCreateWithoutAnswersInput = {
    first_name?: string | null
    last_name?: string | null
    username?: string | null
    password: string
    token?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    email: string
    profile_picture?: string | null
    comments?: CommentCreateNestedManyWithoutUserInput
    likes?: LikeCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    assigned_questions?: QuestionCreateNestedManyWithoutCollaboratorInput
    created_questions?: QuestionCreateNestedManyWithoutCreatorInput
    division?: DivisionCreateNestedOneWithoutUsersInput
    role: RoleCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutAnswersInput = {
    first_name?: string | null
    last_name?: string | null
    username?: string | null
    password: string
    token?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    role_id: number
    email: string
    division_id?: number | null
    user_id?: number
    profile_picture?: string | null
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    assigned_questions?: QuestionUncheckedCreateNestedManyWithoutCollaboratorInput
    created_questions?: QuestionUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutAnswersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAnswersInput, UserUncheckedCreateWithoutAnswersInput>
  }

  export type CommentCreateWithoutAnswerInput = {
    content: string
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    parent?: CommentCreateNestedOneWithoutRepliesInput
    replies?: CommentCreateNestedManyWithoutParentInput
    question?: QuestionCreateNestedOneWithoutCommentsInput
    user: UserCreateNestedOneWithoutCommentsInput
    Attachment?: AttachmentCreateNestedManyWithoutCommentInput
  }

  export type CommentUncheckedCreateWithoutAnswerInput = {
    user_id: number
    comment_id?: number
    content: string
    created_at?: Date | string
    parent_id?: number | null
    question_id?: number | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    replies?: CommentUncheckedCreateNestedManyWithoutParentInput
    Attachment?: AttachmentUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentCreateOrConnectWithoutAnswerInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutAnswerInput, CommentUncheckedCreateWithoutAnswerInput>
  }

  export type CommentCreateManyAnswerInputEnvelope = {
    data: CommentCreateManyAnswerInput | CommentCreateManyAnswerInput[]
    skipDuplicates?: boolean
  }

  export type LikeCreateWithoutAnswerInput = {
    created_at?: Date | string
    question?: QuestionCreateNestedOneWithoutLikesInput
    user: UserCreateNestedOneWithoutLikesInput
  }

  export type LikeUncheckedCreateWithoutAnswerInput = {
    user_id: number
    created_at?: Date | string
    like_id?: number
    question_id?: number | null
  }

  export type LikeCreateOrConnectWithoutAnswerInput = {
    where: LikeWhereUniqueInput
    create: XOR<LikeCreateWithoutAnswerInput, LikeUncheckedCreateWithoutAnswerInput>
  }

  export type LikeCreateManyAnswerInputEnvelope = {
    data: LikeCreateManyAnswerInput | LikeCreateManyAnswerInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutAnswerInput = {
    content: string
    is_read?: boolean
    created_at?: Date | string
    notification_type: $Enums.NotificationType
    question?: QuestionCreateNestedOneWithoutNotificationsInput
    user: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateWithoutAnswerInput = {
    id?: number
    content: string
    is_read?: boolean
    created_at?: Date | string
    user_id: number
    question_id?: number | null
    notification_type: $Enums.NotificationType
  }

  export type NotificationCreateOrConnectWithoutAnswerInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutAnswerInput, NotificationUncheckedCreateWithoutAnswerInput>
  }

  export type NotificationCreateManyAnswerInputEnvelope = {
    data: NotificationCreateManyAnswerInput | NotificationCreateManyAnswerInput[]
    skipDuplicates?: boolean
  }

  export type AttachmentCreateWithoutAnswerInput = {
    file_name: string
    file_path: string
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    question?: QuestionCreateNestedOneWithoutAttachmentInput
    comment?: CommentCreateNestedOneWithoutAttachmentInput
  }

  export type AttachmentUncheckedCreateWithoutAnswerInput = {
    attachment_id?: number
    file_name: string
    file_path: string
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    question_id?: number | null
    comment_id?: number | null
  }

  export type AttachmentCreateOrConnectWithoutAnswerInput = {
    where: AttachmentWhereUniqueInput
    create: XOR<AttachmentCreateWithoutAnswerInput, AttachmentUncheckedCreateWithoutAnswerInput>
  }

  export type AttachmentCreateManyAnswerInputEnvelope = {
    data: AttachmentCreateManyAnswerInput | AttachmentCreateManyAnswerInput[]
    skipDuplicates?: boolean
  }

  export type QuestionUpsertWithoutAnswersInput = {
    update: XOR<QuestionUpdateWithoutAnswersInput, QuestionUncheckedUpdateWithoutAnswersInput>
    create: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutAnswersInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutAnswersInput, QuestionUncheckedUpdateWithoutAnswersInput>
  }

  export type QuestionUpdateWithoutAnswersInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: EnumQuestionStatusFieldUpdateOperationsInput | $Enums.QuestionStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_published?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    collaborator_type?: EnumCollaboratorTypeFieldUpdateOperationsInput | $Enums.CollaboratorType
    comments?: CommentUpdateManyWithoutQuestionNestedInput
    likes?: LikeUpdateManyWithoutQuestionNestedInput
    notifications?: NotificationUpdateManyWithoutQuestionNestedInput
    collaborator_division?: DivisionUpdateOneWithoutAssigned_questionsNestedInput
    collaborator?: UserUpdateOneWithoutAssigned_questionsNestedInput
    creator?: UserUpdateOneRequiredWithoutCreated_questionsNestedInput
    tags?: TagsOnQuestionsUpdateManyWithoutQuestionNestedInput
    attachment?: AttachmentUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutAnswersInput = {
    question_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: EnumQuestionStatusFieldUpdateOperationsInput | $Enums.QuestionStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_published?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    collaborator_id?: NullableIntFieldUpdateOperationsInput | number | null
    collaborator_division_id?: NullableIntFieldUpdateOperationsInput | number | null
    collaborator_type?: EnumCollaboratorTypeFieldUpdateOperationsInput | $Enums.CollaboratorType
    creator_id?: IntFieldUpdateOperationsInput | number
    comments?: CommentUncheckedUpdateManyWithoutQuestionNestedInput
    likes?: LikeUncheckedUpdateManyWithoutQuestionNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutQuestionNestedInput
    tags?: TagsOnQuestionsUncheckedUpdateManyWithoutQuestionNestedInput
    attachment?: AttachmentUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type UserUpsertWithoutAnswersInput = {
    update: XOR<UserUpdateWithoutAnswersInput, UserUncheckedUpdateWithoutAnswersInput>
    create: XOR<UserCreateWithoutAnswersInput, UserUncheckedCreateWithoutAnswersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAnswersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAnswersInput, UserUncheckedUpdateWithoutAnswersInput>
  }

  export type UserUpdateWithoutAnswersInput = {
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: CommentUpdateManyWithoutUserNestedInput
    likes?: LikeUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    assigned_questions?: QuestionUpdateManyWithoutCollaboratorNestedInput
    created_questions?: QuestionUpdateManyWithoutCreatorNestedInput
    division?: DivisionUpdateOneWithoutUsersNestedInput
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutAnswersInput = {
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    division_id?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: IntFieldUpdateOperationsInput | number
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    assigned_questions?: QuestionUncheckedUpdateManyWithoutCollaboratorNestedInput
    created_questions?: QuestionUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type CommentUpsertWithWhereUniqueWithoutAnswerInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutAnswerInput, CommentUncheckedUpdateWithoutAnswerInput>
    create: XOR<CommentCreateWithoutAnswerInput, CommentUncheckedCreateWithoutAnswerInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutAnswerInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutAnswerInput, CommentUncheckedUpdateWithoutAnswerInput>
  }

  export type CommentUpdateManyWithWhereWithoutAnswerInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutAnswerInput>
  }

  export type LikeUpsertWithWhereUniqueWithoutAnswerInput = {
    where: LikeWhereUniqueInput
    update: XOR<LikeUpdateWithoutAnswerInput, LikeUncheckedUpdateWithoutAnswerInput>
    create: XOR<LikeCreateWithoutAnswerInput, LikeUncheckedCreateWithoutAnswerInput>
  }

  export type LikeUpdateWithWhereUniqueWithoutAnswerInput = {
    where: LikeWhereUniqueInput
    data: XOR<LikeUpdateWithoutAnswerInput, LikeUncheckedUpdateWithoutAnswerInput>
  }

  export type LikeUpdateManyWithWhereWithoutAnswerInput = {
    where: LikeScalarWhereInput
    data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyWithoutAnswerInput>
  }

  export type NotificationUpsertWithWhereUniqueWithoutAnswerInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutAnswerInput, NotificationUncheckedUpdateWithoutAnswerInput>
    create: XOR<NotificationCreateWithoutAnswerInput, NotificationUncheckedCreateWithoutAnswerInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutAnswerInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutAnswerInput, NotificationUncheckedUpdateWithoutAnswerInput>
  }

  export type NotificationUpdateManyWithWhereWithoutAnswerInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutAnswerInput>
  }

  export type AttachmentUpsertWithWhereUniqueWithoutAnswerInput = {
    where: AttachmentWhereUniqueInput
    update: XOR<AttachmentUpdateWithoutAnswerInput, AttachmentUncheckedUpdateWithoutAnswerInput>
    create: XOR<AttachmentCreateWithoutAnswerInput, AttachmentUncheckedCreateWithoutAnswerInput>
  }

  export type AttachmentUpdateWithWhereUniqueWithoutAnswerInput = {
    where: AttachmentWhereUniqueInput
    data: XOR<AttachmentUpdateWithoutAnswerInput, AttachmentUncheckedUpdateWithoutAnswerInput>
  }

  export type AttachmentUpdateManyWithWhereWithoutAnswerInput = {
    where: AttachmentScalarWhereInput
    data: XOR<AttachmentUpdateManyMutationInput, AttachmentUncheckedUpdateManyWithoutAnswerInput>
  }

  export type AnswerCreateWithoutCommentsInput = {
    content: string
    is_accepted?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    question: QuestionCreateNestedOneWithoutAnswersInput
    user: UserCreateNestedOneWithoutAnswersInput
    likes?: LikeCreateNestedManyWithoutAnswerInput
    notifications?: NotificationCreateNestedManyWithoutAnswerInput
    attachment?: AttachmentCreateNestedManyWithoutAnswerInput
  }

  export type AnswerUncheckedCreateWithoutCommentsInput = {
    answer_id?: number
    content: string
    is_accepted?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    question_id: number
    user_id: number
    likes?: LikeUncheckedCreateNestedManyWithoutAnswerInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutAnswerInput
    attachment?: AttachmentUncheckedCreateNestedManyWithoutAnswerInput
  }

  export type AnswerCreateOrConnectWithoutCommentsInput = {
    where: AnswerWhereUniqueInput
    create: XOR<AnswerCreateWithoutCommentsInput, AnswerUncheckedCreateWithoutCommentsInput>
  }

  export type CommentCreateWithoutRepliesInput = {
    content: string
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    answer?: AnswerCreateNestedOneWithoutCommentsInput
    parent?: CommentCreateNestedOneWithoutRepliesInput
    question?: QuestionCreateNestedOneWithoutCommentsInput
    user: UserCreateNestedOneWithoutCommentsInput
    Attachment?: AttachmentCreateNestedManyWithoutCommentInput
  }

  export type CommentUncheckedCreateWithoutRepliesInput = {
    user_id: number
    answer_id?: number | null
    comment_id?: number
    content: string
    created_at?: Date | string
    parent_id?: number | null
    question_id?: number | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    Attachment?: AttachmentUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentCreateOrConnectWithoutRepliesInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutRepliesInput, CommentUncheckedCreateWithoutRepliesInput>
  }

  export type CommentCreateWithoutParentInput = {
    content: string
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    answer?: AnswerCreateNestedOneWithoutCommentsInput
    replies?: CommentCreateNestedManyWithoutParentInput
    question?: QuestionCreateNestedOneWithoutCommentsInput
    user: UserCreateNestedOneWithoutCommentsInput
    Attachment?: AttachmentCreateNestedManyWithoutCommentInput
  }

  export type CommentUncheckedCreateWithoutParentInput = {
    user_id: number
    answer_id?: number | null
    comment_id?: number
    content: string
    created_at?: Date | string
    question_id?: number | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    replies?: CommentUncheckedCreateNestedManyWithoutParentInput
    Attachment?: AttachmentUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentCreateOrConnectWithoutParentInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput>
  }

  export type CommentCreateManyParentInputEnvelope = {
    data: CommentCreateManyParentInput | CommentCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type QuestionCreateWithoutCommentsInput = {
    title: string
    content: string
    status?: $Enums.QuestionStatus
    created_at?: Date | string
    due_date?: Date | string | null
    is_published?: boolean
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    collaborator_type: $Enums.CollaboratorType
    answers?: AnswerCreateNestedManyWithoutQuestionInput
    likes?: LikeCreateNestedManyWithoutQuestionInput
    notifications?: NotificationCreateNestedManyWithoutQuestionInput
    collaborator_division?: DivisionCreateNestedOneWithoutAssigned_questionsInput
    collaborator?: UserCreateNestedOneWithoutAssigned_questionsInput
    creator: UserCreateNestedOneWithoutCreated_questionsInput
    tags?: TagsOnQuestionsCreateNestedManyWithoutQuestionInput
    attachment?: AttachmentCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutCommentsInput = {
    question_id?: number
    title: string
    content: string
    status?: $Enums.QuestionStatus
    created_at?: Date | string
    due_date?: Date | string | null
    is_published?: boolean
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    collaborator_id?: number | null
    collaborator_division_id?: number | null
    collaborator_type: $Enums.CollaboratorType
    creator_id: number
    answers?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
    likes?: LikeUncheckedCreateNestedManyWithoutQuestionInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutQuestionInput
    tags?: TagsOnQuestionsUncheckedCreateNestedManyWithoutQuestionInput
    attachment?: AttachmentUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutCommentsInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutCommentsInput, QuestionUncheckedCreateWithoutCommentsInput>
  }

  export type UserCreateWithoutCommentsInput = {
    first_name?: string | null
    last_name?: string | null
    username?: string | null
    password: string
    token?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    email: string
    profile_picture?: string | null
    answers?: AnswerCreateNestedManyWithoutUserInput
    likes?: LikeCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    assigned_questions?: QuestionCreateNestedManyWithoutCollaboratorInput
    created_questions?: QuestionCreateNestedManyWithoutCreatorInput
    division?: DivisionCreateNestedOneWithoutUsersInput
    role: RoleCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutCommentsInput = {
    first_name?: string | null
    last_name?: string | null
    username?: string | null
    password: string
    token?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    role_id: number
    email: string
    division_id?: number | null
    user_id?: number
    profile_picture?: string | null
    answers?: AnswerUncheckedCreateNestedManyWithoutUserInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    assigned_questions?: QuestionUncheckedCreateNestedManyWithoutCollaboratorInput
    created_questions?: QuestionUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
  }

  export type AttachmentCreateWithoutCommentInput = {
    file_name: string
    file_path: string
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    question?: QuestionCreateNestedOneWithoutAttachmentInput
    answer?: AnswerCreateNestedOneWithoutAttachmentInput
  }

  export type AttachmentUncheckedCreateWithoutCommentInput = {
    attachment_id?: number
    file_name: string
    file_path: string
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    question_id?: number | null
    answer_id?: number | null
  }

  export type AttachmentCreateOrConnectWithoutCommentInput = {
    where: AttachmentWhereUniqueInput
    create: XOR<AttachmentCreateWithoutCommentInput, AttachmentUncheckedCreateWithoutCommentInput>
  }

  export type AttachmentCreateManyCommentInputEnvelope = {
    data: AttachmentCreateManyCommentInput | AttachmentCreateManyCommentInput[]
    skipDuplicates?: boolean
  }

  export type AnswerUpsertWithoutCommentsInput = {
    update: XOR<AnswerUpdateWithoutCommentsInput, AnswerUncheckedUpdateWithoutCommentsInput>
    create: XOR<AnswerCreateWithoutCommentsInput, AnswerUncheckedCreateWithoutCommentsInput>
    where?: AnswerWhereInput
  }

  export type AnswerUpdateToOneWithWhereWithoutCommentsInput = {
    where?: AnswerWhereInput
    data: XOR<AnswerUpdateWithoutCommentsInput, AnswerUncheckedUpdateWithoutCommentsInput>
  }

  export type AnswerUpdateWithoutCommentsInput = {
    content?: StringFieldUpdateOperationsInput | string
    is_accepted?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    question?: QuestionUpdateOneRequiredWithoutAnswersNestedInput
    user?: UserUpdateOneRequiredWithoutAnswersNestedInput
    likes?: LikeUpdateManyWithoutAnswerNestedInput
    notifications?: NotificationUpdateManyWithoutAnswerNestedInput
    attachment?: AttachmentUpdateManyWithoutAnswerNestedInput
  }

  export type AnswerUncheckedUpdateWithoutCommentsInput = {
    answer_id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    is_accepted?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    question_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    likes?: LikeUncheckedUpdateManyWithoutAnswerNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutAnswerNestedInput
    attachment?: AttachmentUncheckedUpdateManyWithoutAnswerNestedInput
  }

  export type CommentUpsertWithoutRepliesInput = {
    update: XOR<CommentUpdateWithoutRepliesInput, CommentUncheckedUpdateWithoutRepliesInput>
    create: XOR<CommentCreateWithoutRepliesInput, CommentUncheckedCreateWithoutRepliesInput>
    where?: CommentWhereInput
  }

  export type CommentUpdateToOneWithWhereWithoutRepliesInput = {
    where?: CommentWhereInput
    data: XOR<CommentUpdateWithoutRepliesInput, CommentUncheckedUpdateWithoutRepliesInput>
  }

  export type CommentUpdateWithoutRepliesInput = {
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answer?: AnswerUpdateOneWithoutCommentsNestedInput
    parent?: CommentUpdateOneWithoutRepliesNestedInput
    question?: QuestionUpdateOneWithoutCommentsNestedInput
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
    Attachment?: AttachmentUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateWithoutRepliesInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    answer_id?: NullableIntFieldUpdateOperationsInput | number | null
    comment_id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
    question_id?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Attachment?: AttachmentUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type CommentUpsertWithWhereUniqueWithoutParentInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutParentInput, CommentUncheckedUpdateWithoutParentInput>
    create: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutParentInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutParentInput, CommentUncheckedUpdateWithoutParentInput>
  }

  export type CommentUpdateManyWithWhereWithoutParentInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutParentInput>
  }

  export type QuestionUpsertWithoutCommentsInput = {
    update: XOR<QuestionUpdateWithoutCommentsInput, QuestionUncheckedUpdateWithoutCommentsInput>
    create: XOR<QuestionCreateWithoutCommentsInput, QuestionUncheckedCreateWithoutCommentsInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutCommentsInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutCommentsInput, QuestionUncheckedUpdateWithoutCommentsInput>
  }

  export type QuestionUpdateWithoutCommentsInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: EnumQuestionStatusFieldUpdateOperationsInput | $Enums.QuestionStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_published?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    collaborator_type?: EnumCollaboratorTypeFieldUpdateOperationsInput | $Enums.CollaboratorType
    answers?: AnswerUpdateManyWithoutQuestionNestedInput
    likes?: LikeUpdateManyWithoutQuestionNestedInput
    notifications?: NotificationUpdateManyWithoutQuestionNestedInput
    collaborator_division?: DivisionUpdateOneWithoutAssigned_questionsNestedInput
    collaborator?: UserUpdateOneWithoutAssigned_questionsNestedInput
    creator?: UserUpdateOneRequiredWithoutCreated_questionsNestedInput
    tags?: TagsOnQuestionsUpdateManyWithoutQuestionNestedInput
    attachment?: AttachmentUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutCommentsInput = {
    question_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: EnumQuestionStatusFieldUpdateOperationsInput | $Enums.QuestionStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_published?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    collaborator_id?: NullableIntFieldUpdateOperationsInput | number | null
    collaborator_division_id?: NullableIntFieldUpdateOperationsInput | number | null
    collaborator_type?: EnumCollaboratorTypeFieldUpdateOperationsInput | $Enums.CollaboratorType
    creator_id?: IntFieldUpdateOperationsInput | number
    answers?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput
    likes?: LikeUncheckedUpdateManyWithoutQuestionNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutQuestionNestedInput
    tags?: TagsOnQuestionsUncheckedUpdateManyWithoutQuestionNestedInput
    attachment?: AttachmentUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type UserUpsertWithoutCommentsInput = {
    update: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateWithoutCommentsInput = {
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    answers?: AnswerUpdateManyWithoutUserNestedInput
    likes?: LikeUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    assigned_questions?: QuestionUpdateManyWithoutCollaboratorNestedInput
    created_questions?: QuestionUpdateManyWithoutCreatorNestedInput
    division?: DivisionUpdateOneWithoutUsersNestedInput
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentsInput = {
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    division_id?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: IntFieldUpdateOperationsInput | number
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    answers?: AnswerUncheckedUpdateManyWithoutUserNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    assigned_questions?: QuestionUncheckedUpdateManyWithoutCollaboratorNestedInput
    created_questions?: QuestionUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type AttachmentUpsertWithWhereUniqueWithoutCommentInput = {
    where: AttachmentWhereUniqueInput
    update: XOR<AttachmentUpdateWithoutCommentInput, AttachmentUncheckedUpdateWithoutCommentInput>
    create: XOR<AttachmentCreateWithoutCommentInput, AttachmentUncheckedCreateWithoutCommentInput>
  }

  export type AttachmentUpdateWithWhereUniqueWithoutCommentInput = {
    where: AttachmentWhereUniqueInput
    data: XOR<AttachmentUpdateWithoutCommentInput, AttachmentUncheckedUpdateWithoutCommentInput>
  }

  export type AttachmentUpdateManyWithWhereWithoutCommentInput = {
    where: AttachmentScalarWhereInput
    data: XOR<AttachmentUpdateManyMutationInput, AttachmentUncheckedUpdateManyWithoutCommentInput>
  }

  export type AnswerCreateWithoutLikesInput = {
    content: string
    is_accepted?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    question: QuestionCreateNestedOneWithoutAnswersInput
    user: UserCreateNestedOneWithoutAnswersInput
    comments?: CommentCreateNestedManyWithoutAnswerInput
    notifications?: NotificationCreateNestedManyWithoutAnswerInput
    attachment?: AttachmentCreateNestedManyWithoutAnswerInput
  }

  export type AnswerUncheckedCreateWithoutLikesInput = {
    answer_id?: number
    content: string
    is_accepted?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    question_id: number
    user_id: number
    comments?: CommentUncheckedCreateNestedManyWithoutAnswerInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutAnswerInput
    attachment?: AttachmentUncheckedCreateNestedManyWithoutAnswerInput
  }

  export type AnswerCreateOrConnectWithoutLikesInput = {
    where: AnswerWhereUniqueInput
    create: XOR<AnswerCreateWithoutLikesInput, AnswerUncheckedCreateWithoutLikesInput>
  }

  export type QuestionCreateWithoutLikesInput = {
    title: string
    content: string
    status?: $Enums.QuestionStatus
    created_at?: Date | string
    due_date?: Date | string | null
    is_published?: boolean
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    collaborator_type: $Enums.CollaboratorType
    answers?: AnswerCreateNestedManyWithoutQuestionInput
    comments?: CommentCreateNestedManyWithoutQuestionInput
    notifications?: NotificationCreateNestedManyWithoutQuestionInput
    collaborator_division?: DivisionCreateNestedOneWithoutAssigned_questionsInput
    collaborator?: UserCreateNestedOneWithoutAssigned_questionsInput
    creator: UserCreateNestedOneWithoutCreated_questionsInput
    tags?: TagsOnQuestionsCreateNestedManyWithoutQuestionInput
    attachment?: AttachmentCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutLikesInput = {
    question_id?: number
    title: string
    content: string
    status?: $Enums.QuestionStatus
    created_at?: Date | string
    due_date?: Date | string | null
    is_published?: boolean
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    collaborator_id?: number | null
    collaborator_division_id?: number | null
    collaborator_type: $Enums.CollaboratorType
    creator_id: number
    answers?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
    comments?: CommentUncheckedCreateNestedManyWithoutQuestionInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutQuestionInput
    tags?: TagsOnQuestionsUncheckedCreateNestedManyWithoutQuestionInput
    attachment?: AttachmentUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutLikesInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutLikesInput, QuestionUncheckedCreateWithoutLikesInput>
  }

  export type UserCreateWithoutLikesInput = {
    first_name?: string | null
    last_name?: string | null
    username?: string | null
    password: string
    token?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    email: string
    profile_picture?: string | null
    answers?: AnswerCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    assigned_questions?: QuestionCreateNestedManyWithoutCollaboratorInput
    created_questions?: QuestionCreateNestedManyWithoutCreatorInput
    division?: DivisionCreateNestedOneWithoutUsersInput
    role: RoleCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutLikesInput = {
    first_name?: string | null
    last_name?: string | null
    username?: string | null
    password: string
    token?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    role_id: number
    email: string
    division_id?: number | null
    user_id?: number
    profile_picture?: string | null
    answers?: AnswerUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    assigned_questions?: QuestionUncheckedCreateNestedManyWithoutCollaboratorInput
    created_questions?: QuestionUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutLikesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
  }

  export type AnswerUpsertWithoutLikesInput = {
    update: XOR<AnswerUpdateWithoutLikesInput, AnswerUncheckedUpdateWithoutLikesInput>
    create: XOR<AnswerCreateWithoutLikesInput, AnswerUncheckedCreateWithoutLikesInput>
    where?: AnswerWhereInput
  }

  export type AnswerUpdateToOneWithWhereWithoutLikesInput = {
    where?: AnswerWhereInput
    data: XOR<AnswerUpdateWithoutLikesInput, AnswerUncheckedUpdateWithoutLikesInput>
  }

  export type AnswerUpdateWithoutLikesInput = {
    content?: StringFieldUpdateOperationsInput | string
    is_accepted?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    question?: QuestionUpdateOneRequiredWithoutAnswersNestedInput
    user?: UserUpdateOneRequiredWithoutAnswersNestedInput
    comments?: CommentUpdateManyWithoutAnswerNestedInput
    notifications?: NotificationUpdateManyWithoutAnswerNestedInput
    attachment?: AttachmentUpdateManyWithoutAnswerNestedInput
  }

  export type AnswerUncheckedUpdateWithoutLikesInput = {
    answer_id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    is_accepted?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    question_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    comments?: CommentUncheckedUpdateManyWithoutAnswerNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutAnswerNestedInput
    attachment?: AttachmentUncheckedUpdateManyWithoutAnswerNestedInput
  }

  export type QuestionUpsertWithoutLikesInput = {
    update: XOR<QuestionUpdateWithoutLikesInput, QuestionUncheckedUpdateWithoutLikesInput>
    create: XOR<QuestionCreateWithoutLikesInput, QuestionUncheckedCreateWithoutLikesInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutLikesInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutLikesInput, QuestionUncheckedUpdateWithoutLikesInput>
  }

  export type QuestionUpdateWithoutLikesInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: EnumQuestionStatusFieldUpdateOperationsInput | $Enums.QuestionStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_published?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    collaborator_type?: EnumCollaboratorTypeFieldUpdateOperationsInput | $Enums.CollaboratorType
    answers?: AnswerUpdateManyWithoutQuestionNestedInput
    comments?: CommentUpdateManyWithoutQuestionNestedInput
    notifications?: NotificationUpdateManyWithoutQuestionNestedInput
    collaborator_division?: DivisionUpdateOneWithoutAssigned_questionsNestedInput
    collaborator?: UserUpdateOneWithoutAssigned_questionsNestedInput
    creator?: UserUpdateOneRequiredWithoutCreated_questionsNestedInput
    tags?: TagsOnQuestionsUpdateManyWithoutQuestionNestedInput
    attachment?: AttachmentUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutLikesInput = {
    question_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: EnumQuestionStatusFieldUpdateOperationsInput | $Enums.QuestionStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_published?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    collaborator_id?: NullableIntFieldUpdateOperationsInput | number | null
    collaborator_division_id?: NullableIntFieldUpdateOperationsInput | number | null
    collaborator_type?: EnumCollaboratorTypeFieldUpdateOperationsInput | $Enums.CollaboratorType
    creator_id?: IntFieldUpdateOperationsInput | number
    answers?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput
    comments?: CommentUncheckedUpdateManyWithoutQuestionNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutQuestionNestedInput
    tags?: TagsOnQuestionsUncheckedUpdateManyWithoutQuestionNestedInput
    attachment?: AttachmentUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type UserUpsertWithoutLikesInput = {
    update: XOR<UserUpdateWithoutLikesInput, UserUncheckedUpdateWithoutLikesInput>
    create: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLikesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLikesInput, UserUncheckedUpdateWithoutLikesInput>
  }

  export type UserUpdateWithoutLikesInput = {
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    answers?: AnswerUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    assigned_questions?: QuestionUpdateManyWithoutCollaboratorNestedInput
    created_questions?: QuestionUpdateManyWithoutCreatorNestedInput
    division?: DivisionUpdateOneWithoutUsersNestedInput
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutLikesInput = {
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    division_id?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: IntFieldUpdateOperationsInput | number
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    answers?: AnswerUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    assigned_questions?: QuestionUncheckedUpdateManyWithoutCollaboratorNestedInput
    created_questions?: QuestionUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type TagsOnQuestionsCreateWithoutTagInput = {
    assigned_at?: Date | string
    deleted_at?: Date | string | null
    question: QuestionCreateNestedOneWithoutTagsInput
  }

  export type TagsOnQuestionsUncheckedCreateWithoutTagInput = {
    question_id: number
    assigned_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type TagsOnQuestionsCreateOrConnectWithoutTagInput = {
    where: TagsOnQuestionsWhereUniqueInput
    create: XOR<TagsOnQuestionsCreateWithoutTagInput, TagsOnQuestionsUncheckedCreateWithoutTagInput>
  }

  export type TagsOnQuestionsCreateManyTagInputEnvelope = {
    data: TagsOnQuestionsCreateManyTagInput | TagsOnQuestionsCreateManyTagInput[]
    skipDuplicates?: boolean
  }

  export type TagsOnQuestionsUpsertWithWhereUniqueWithoutTagInput = {
    where: TagsOnQuestionsWhereUniqueInput
    update: XOR<TagsOnQuestionsUpdateWithoutTagInput, TagsOnQuestionsUncheckedUpdateWithoutTagInput>
    create: XOR<TagsOnQuestionsCreateWithoutTagInput, TagsOnQuestionsUncheckedCreateWithoutTagInput>
  }

  export type TagsOnQuestionsUpdateWithWhereUniqueWithoutTagInput = {
    where: TagsOnQuestionsWhereUniqueInput
    data: XOR<TagsOnQuestionsUpdateWithoutTagInput, TagsOnQuestionsUncheckedUpdateWithoutTagInput>
  }

  export type TagsOnQuestionsUpdateManyWithWhereWithoutTagInput = {
    where: TagsOnQuestionsScalarWhereInput
    data: XOR<TagsOnQuestionsUpdateManyMutationInput, TagsOnQuestionsUncheckedUpdateManyWithoutTagInput>
  }

  export type QuestionCreateWithoutTagsInput = {
    title: string
    content: string
    status?: $Enums.QuestionStatus
    created_at?: Date | string
    due_date?: Date | string | null
    is_published?: boolean
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    collaborator_type: $Enums.CollaboratorType
    answers?: AnswerCreateNestedManyWithoutQuestionInput
    comments?: CommentCreateNestedManyWithoutQuestionInput
    likes?: LikeCreateNestedManyWithoutQuestionInput
    notifications?: NotificationCreateNestedManyWithoutQuestionInput
    collaborator_division?: DivisionCreateNestedOneWithoutAssigned_questionsInput
    collaborator?: UserCreateNestedOneWithoutAssigned_questionsInput
    creator: UserCreateNestedOneWithoutCreated_questionsInput
    attachment?: AttachmentCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutTagsInput = {
    question_id?: number
    title: string
    content: string
    status?: $Enums.QuestionStatus
    created_at?: Date | string
    due_date?: Date | string | null
    is_published?: boolean
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    collaborator_id?: number | null
    collaborator_division_id?: number | null
    collaborator_type: $Enums.CollaboratorType
    creator_id: number
    answers?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
    comments?: CommentUncheckedCreateNestedManyWithoutQuestionInput
    likes?: LikeUncheckedCreateNestedManyWithoutQuestionInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutQuestionInput
    attachment?: AttachmentUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutTagsInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutTagsInput, QuestionUncheckedCreateWithoutTagsInput>
  }

  export type TagCreateWithoutQuestionsInput = {
    name: string
    created_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type TagUncheckedCreateWithoutQuestionsInput = {
    tag_id?: number
    name: string
    created_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type TagCreateOrConnectWithoutQuestionsInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutQuestionsInput, TagUncheckedCreateWithoutQuestionsInput>
  }

  export type QuestionUpsertWithoutTagsInput = {
    update: XOR<QuestionUpdateWithoutTagsInput, QuestionUncheckedUpdateWithoutTagsInput>
    create: XOR<QuestionCreateWithoutTagsInput, QuestionUncheckedCreateWithoutTagsInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutTagsInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutTagsInput, QuestionUncheckedUpdateWithoutTagsInput>
  }

  export type QuestionUpdateWithoutTagsInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: EnumQuestionStatusFieldUpdateOperationsInput | $Enums.QuestionStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_published?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    collaborator_type?: EnumCollaboratorTypeFieldUpdateOperationsInput | $Enums.CollaboratorType
    answers?: AnswerUpdateManyWithoutQuestionNestedInput
    comments?: CommentUpdateManyWithoutQuestionNestedInput
    likes?: LikeUpdateManyWithoutQuestionNestedInput
    notifications?: NotificationUpdateManyWithoutQuestionNestedInput
    collaborator_division?: DivisionUpdateOneWithoutAssigned_questionsNestedInput
    collaborator?: UserUpdateOneWithoutAssigned_questionsNestedInput
    creator?: UserUpdateOneRequiredWithoutCreated_questionsNestedInput
    attachment?: AttachmentUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutTagsInput = {
    question_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: EnumQuestionStatusFieldUpdateOperationsInput | $Enums.QuestionStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_published?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    collaborator_id?: NullableIntFieldUpdateOperationsInput | number | null
    collaborator_division_id?: NullableIntFieldUpdateOperationsInput | number | null
    collaborator_type?: EnumCollaboratorTypeFieldUpdateOperationsInput | $Enums.CollaboratorType
    creator_id?: IntFieldUpdateOperationsInput | number
    answers?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput
    comments?: CommentUncheckedUpdateManyWithoutQuestionNestedInput
    likes?: LikeUncheckedUpdateManyWithoutQuestionNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutQuestionNestedInput
    attachment?: AttachmentUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type TagUpsertWithoutQuestionsInput = {
    update: XOR<TagUpdateWithoutQuestionsInput, TagUncheckedUpdateWithoutQuestionsInput>
    create: XOR<TagCreateWithoutQuestionsInput, TagUncheckedCreateWithoutQuestionsInput>
    where?: TagWhereInput
  }

  export type TagUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: TagWhereInput
    data: XOR<TagUpdateWithoutQuestionsInput, TagUncheckedUpdateWithoutQuestionsInput>
  }

  export type TagUpdateWithoutQuestionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TagUncheckedUpdateWithoutQuestionsInput = {
    tag_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AnswerCreateWithoutNotificationsInput = {
    content: string
    is_accepted?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    question: QuestionCreateNestedOneWithoutAnswersInput
    user: UserCreateNestedOneWithoutAnswersInput
    comments?: CommentCreateNestedManyWithoutAnswerInput
    likes?: LikeCreateNestedManyWithoutAnswerInput
    attachment?: AttachmentCreateNestedManyWithoutAnswerInput
  }

  export type AnswerUncheckedCreateWithoutNotificationsInput = {
    answer_id?: number
    content: string
    is_accepted?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    question_id: number
    user_id: number
    comments?: CommentUncheckedCreateNestedManyWithoutAnswerInput
    likes?: LikeUncheckedCreateNestedManyWithoutAnswerInput
    attachment?: AttachmentUncheckedCreateNestedManyWithoutAnswerInput
  }

  export type AnswerCreateOrConnectWithoutNotificationsInput = {
    where: AnswerWhereUniqueInput
    create: XOR<AnswerCreateWithoutNotificationsInput, AnswerUncheckedCreateWithoutNotificationsInput>
  }

  export type QuestionCreateWithoutNotificationsInput = {
    title: string
    content: string
    status?: $Enums.QuestionStatus
    created_at?: Date | string
    due_date?: Date | string | null
    is_published?: boolean
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    collaborator_type: $Enums.CollaboratorType
    answers?: AnswerCreateNestedManyWithoutQuestionInput
    comments?: CommentCreateNestedManyWithoutQuestionInput
    likes?: LikeCreateNestedManyWithoutQuestionInput
    collaborator_division?: DivisionCreateNestedOneWithoutAssigned_questionsInput
    collaborator?: UserCreateNestedOneWithoutAssigned_questionsInput
    creator: UserCreateNestedOneWithoutCreated_questionsInput
    tags?: TagsOnQuestionsCreateNestedManyWithoutQuestionInput
    attachment?: AttachmentCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutNotificationsInput = {
    question_id?: number
    title: string
    content: string
    status?: $Enums.QuestionStatus
    created_at?: Date | string
    due_date?: Date | string | null
    is_published?: boolean
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    collaborator_id?: number | null
    collaborator_division_id?: number | null
    collaborator_type: $Enums.CollaboratorType
    creator_id: number
    answers?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
    comments?: CommentUncheckedCreateNestedManyWithoutQuestionInput
    likes?: LikeUncheckedCreateNestedManyWithoutQuestionInput
    tags?: TagsOnQuestionsUncheckedCreateNestedManyWithoutQuestionInput
    attachment?: AttachmentUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutNotificationsInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutNotificationsInput, QuestionUncheckedCreateWithoutNotificationsInput>
  }

  export type UserCreateWithoutNotificationsInput = {
    first_name?: string | null
    last_name?: string | null
    username?: string | null
    password: string
    token?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    email: string
    profile_picture?: string | null
    answers?: AnswerCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    likes?: LikeCreateNestedManyWithoutUserInput
    assigned_questions?: QuestionCreateNestedManyWithoutCollaboratorInput
    created_questions?: QuestionCreateNestedManyWithoutCreatorInput
    division?: DivisionCreateNestedOneWithoutUsersInput
    role: RoleCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    first_name?: string | null
    last_name?: string | null
    username?: string | null
    password: string
    token?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    role_id: number
    email: string
    division_id?: number | null
    user_id?: number
    profile_picture?: string | null
    answers?: AnswerUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    assigned_questions?: QuestionUncheckedCreateNestedManyWithoutCollaboratorInput
    created_questions?: QuestionUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type AnswerUpsertWithoutNotificationsInput = {
    update: XOR<AnswerUpdateWithoutNotificationsInput, AnswerUncheckedUpdateWithoutNotificationsInput>
    create: XOR<AnswerCreateWithoutNotificationsInput, AnswerUncheckedCreateWithoutNotificationsInput>
    where?: AnswerWhereInput
  }

  export type AnswerUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: AnswerWhereInput
    data: XOR<AnswerUpdateWithoutNotificationsInput, AnswerUncheckedUpdateWithoutNotificationsInput>
  }

  export type AnswerUpdateWithoutNotificationsInput = {
    content?: StringFieldUpdateOperationsInput | string
    is_accepted?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    question?: QuestionUpdateOneRequiredWithoutAnswersNestedInput
    user?: UserUpdateOneRequiredWithoutAnswersNestedInput
    comments?: CommentUpdateManyWithoutAnswerNestedInput
    likes?: LikeUpdateManyWithoutAnswerNestedInput
    attachment?: AttachmentUpdateManyWithoutAnswerNestedInput
  }

  export type AnswerUncheckedUpdateWithoutNotificationsInput = {
    answer_id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    is_accepted?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    question_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    comments?: CommentUncheckedUpdateManyWithoutAnswerNestedInput
    likes?: LikeUncheckedUpdateManyWithoutAnswerNestedInput
    attachment?: AttachmentUncheckedUpdateManyWithoutAnswerNestedInput
  }

  export type QuestionUpsertWithoutNotificationsInput = {
    update: XOR<QuestionUpdateWithoutNotificationsInput, QuestionUncheckedUpdateWithoutNotificationsInput>
    create: XOR<QuestionCreateWithoutNotificationsInput, QuestionUncheckedCreateWithoutNotificationsInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutNotificationsInput, QuestionUncheckedUpdateWithoutNotificationsInput>
  }

  export type QuestionUpdateWithoutNotificationsInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: EnumQuestionStatusFieldUpdateOperationsInput | $Enums.QuestionStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_published?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    collaborator_type?: EnumCollaboratorTypeFieldUpdateOperationsInput | $Enums.CollaboratorType
    answers?: AnswerUpdateManyWithoutQuestionNestedInput
    comments?: CommentUpdateManyWithoutQuestionNestedInput
    likes?: LikeUpdateManyWithoutQuestionNestedInput
    collaborator_division?: DivisionUpdateOneWithoutAssigned_questionsNestedInput
    collaborator?: UserUpdateOneWithoutAssigned_questionsNestedInput
    creator?: UserUpdateOneRequiredWithoutCreated_questionsNestedInput
    tags?: TagsOnQuestionsUpdateManyWithoutQuestionNestedInput
    attachment?: AttachmentUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutNotificationsInput = {
    question_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: EnumQuestionStatusFieldUpdateOperationsInput | $Enums.QuestionStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_published?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    collaborator_id?: NullableIntFieldUpdateOperationsInput | number | null
    collaborator_division_id?: NullableIntFieldUpdateOperationsInput | number | null
    collaborator_type?: EnumCollaboratorTypeFieldUpdateOperationsInput | $Enums.CollaboratorType
    creator_id?: IntFieldUpdateOperationsInput | number
    answers?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput
    comments?: CommentUncheckedUpdateManyWithoutQuestionNestedInput
    likes?: LikeUncheckedUpdateManyWithoutQuestionNestedInput
    tags?: TagsOnQuestionsUncheckedUpdateManyWithoutQuestionNestedInput
    attachment?: AttachmentUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    answers?: AnswerUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    likes?: LikeUpdateManyWithoutUserNestedInput
    assigned_questions?: QuestionUpdateManyWithoutCollaboratorNestedInput
    created_questions?: QuestionUpdateManyWithoutCreatorNestedInput
    division?: DivisionUpdateOneWithoutUsersNestedInput
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    division_id?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: IntFieldUpdateOperationsInput | number
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    answers?: AnswerUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    assigned_questions?: QuestionUncheckedUpdateManyWithoutCollaboratorNestedInput
    created_questions?: QuestionUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type AnswerCreateManyUserInput = {
    answer_id?: number
    content: string
    is_accepted?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    question_id: number
  }

  export type CommentCreateManyUserInput = {
    answer_id?: number | null
    comment_id?: number
    content: string
    created_at?: Date | string
    parent_id?: number | null
    question_id?: number | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type LikeCreateManyUserInput = {
    answer_id?: number | null
    created_at?: Date | string
    like_id?: number
    question_id?: number | null
  }

  export type NotificationCreateManyUserInput = {
    id?: number
    content: string
    is_read?: boolean
    created_at?: Date | string
    question_id?: number | null
    answer_id?: number | null
    notification_type: $Enums.NotificationType
  }

  export type QuestionCreateManyCollaboratorInput = {
    question_id?: number
    title: string
    content: string
    status?: $Enums.QuestionStatus
    created_at?: Date | string
    due_date?: Date | string | null
    is_published?: boolean
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    collaborator_division_id?: number | null
    collaborator_type: $Enums.CollaboratorType
    creator_id: number
  }

  export type QuestionCreateManyCreatorInput = {
    question_id?: number
    title: string
    content: string
    status?: $Enums.QuestionStatus
    created_at?: Date | string
    due_date?: Date | string | null
    is_published?: boolean
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    collaborator_id?: number | null
    collaborator_division_id?: number | null
    collaborator_type: $Enums.CollaboratorType
  }

  export type AnswerUpdateWithoutUserInput = {
    content?: StringFieldUpdateOperationsInput | string
    is_accepted?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    question?: QuestionUpdateOneRequiredWithoutAnswersNestedInput
    comments?: CommentUpdateManyWithoutAnswerNestedInput
    likes?: LikeUpdateManyWithoutAnswerNestedInput
    notifications?: NotificationUpdateManyWithoutAnswerNestedInput
    attachment?: AttachmentUpdateManyWithoutAnswerNestedInput
  }

  export type AnswerUncheckedUpdateWithoutUserInput = {
    answer_id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    is_accepted?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    question_id?: IntFieldUpdateOperationsInput | number
    comments?: CommentUncheckedUpdateManyWithoutAnswerNestedInput
    likes?: LikeUncheckedUpdateManyWithoutAnswerNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutAnswerNestedInput
    attachment?: AttachmentUncheckedUpdateManyWithoutAnswerNestedInput
  }

  export type AnswerUncheckedUpdateManyWithoutUserInput = {
    answer_id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    is_accepted?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    question_id?: IntFieldUpdateOperationsInput | number
  }

  export type CommentUpdateWithoutUserInput = {
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answer?: AnswerUpdateOneWithoutCommentsNestedInput
    parent?: CommentUpdateOneWithoutRepliesNestedInput
    replies?: CommentUpdateManyWithoutParentNestedInput
    question?: QuestionUpdateOneWithoutCommentsNestedInput
    Attachment?: AttachmentUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateWithoutUserInput = {
    answer_id?: NullableIntFieldUpdateOperationsInput | number | null
    comment_id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
    question_id?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replies?: CommentUncheckedUpdateManyWithoutParentNestedInput
    Attachment?: AttachmentUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateManyWithoutUserInput = {
    answer_id?: NullableIntFieldUpdateOperationsInput | number | null
    comment_id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
    question_id?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LikeUpdateWithoutUserInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    answer?: AnswerUpdateOneWithoutLikesNestedInput
    question?: QuestionUpdateOneWithoutLikesNestedInput
  }

  export type LikeUncheckedUpdateWithoutUserInput = {
    answer_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    like_id?: IntFieldUpdateOperationsInput | number
    question_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LikeUncheckedUpdateManyWithoutUserInput = {
    answer_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    like_id?: IntFieldUpdateOperationsInput | number
    question_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type NotificationUpdateWithoutUserInput = {
    content?: StringFieldUpdateOperationsInput | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    notification_type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    answer?: AnswerUpdateOneWithoutNotificationsNestedInput
    question?: QuestionUpdateOneWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    question_id?: NullableIntFieldUpdateOperationsInput | number | null
    answer_id?: NullableIntFieldUpdateOperationsInput | number | null
    notification_type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    question_id?: NullableIntFieldUpdateOperationsInput | number | null
    answer_id?: NullableIntFieldUpdateOperationsInput | number | null
    notification_type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
  }

  export type QuestionUpdateWithoutCollaboratorInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: EnumQuestionStatusFieldUpdateOperationsInput | $Enums.QuestionStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_published?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    collaborator_type?: EnumCollaboratorTypeFieldUpdateOperationsInput | $Enums.CollaboratorType
    answers?: AnswerUpdateManyWithoutQuestionNestedInput
    comments?: CommentUpdateManyWithoutQuestionNestedInput
    likes?: LikeUpdateManyWithoutQuestionNestedInput
    notifications?: NotificationUpdateManyWithoutQuestionNestedInput
    collaborator_division?: DivisionUpdateOneWithoutAssigned_questionsNestedInput
    creator?: UserUpdateOneRequiredWithoutCreated_questionsNestedInput
    tags?: TagsOnQuestionsUpdateManyWithoutQuestionNestedInput
    attachment?: AttachmentUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutCollaboratorInput = {
    question_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: EnumQuestionStatusFieldUpdateOperationsInput | $Enums.QuestionStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_published?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    collaborator_division_id?: NullableIntFieldUpdateOperationsInput | number | null
    collaborator_type?: EnumCollaboratorTypeFieldUpdateOperationsInput | $Enums.CollaboratorType
    creator_id?: IntFieldUpdateOperationsInput | number
    answers?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput
    comments?: CommentUncheckedUpdateManyWithoutQuestionNestedInput
    likes?: LikeUncheckedUpdateManyWithoutQuestionNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutQuestionNestedInput
    tags?: TagsOnQuestionsUncheckedUpdateManyWithoutQuestionNestedInput
    attachment?: AttachmentUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateManyWithoutCollaboratorInput = {
    question_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: EnumQuestionStatusFieldUpdateOperationsInput | $Enums.QuestionStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_published?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    collaborator_division_id?: NullableIntFieldUpdateOperationsInput | number | null
    collaborator_type?: EnumCollaboratorTypeFieldUpdateOperationsInput | $Enums.CollaboratorType
    creator_id?: IntFieldUpdateOperationsInput | number
  }

  export type QuestionUpdateWithoutCreatorInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: EnumQuestionStatusFieldUpdateOperationsInput | $Enums.QuestionStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_published?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    collaborator_type?: EnumCollaboratorTypeFieldUpdateOperationsInput | $Enums.CollaboratorType
    answers?: AnswerUpdateManyWithoutQuestionNestedInput
    comments?: CommentUpdateManyWithoutQuestionNestedInput
    likes?: LikeUpdateManyWithoutQuestionNestedInput
    notifications?: NotificationUpdateManyWithoutQuestionNestedInput
    collaborator_division?: DivisionUpdateOneWithoutAssigned_questionsNestedInput
    collaborator?: UserUpdateOneWithoutAssigned_questionsNestedInput
    tags?: TagsOnQuestionsUpdateManyWithoutQuestionNestedInput
    attachment?: AttachmentUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutCreatorInput = {
    question_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: EnumQuestionStatusFieldUpdateOperationsInput | $Enums.QuestionStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_published?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    collaborator_id?: NullableIntFieldUpdateOperationsInput | number | null
    collaborator_division_id?: NullableIntFieldUpdateOperationsInput | number | null
    collaborator_type?: EnumCollaboratorTypeFieldUpdateOperationsInput | $Enums.CollaboratorType
    answers?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput
    comments?: CommentUncheckedUpdateManyWithoutQuestionNestedInput
    likes?: LikeUncheckedUpdateManyWithoutQuestionNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutQuestionNestedInput
    tags?: TagsOnQuestionsUncheckedUpdateManyWithoutQuestionNestedInput
    attachment?: AttachmentUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateManyWithoutCreatorInput = {
    question_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: EnumQuestionStatusFieldUpdateOperationsInput | $Enums.QuestionStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_published?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    collaborator_id?: NullableIntFieldUpdateOperationsInput | number | null
    collaborator_division_id?: NullableIntFieldUpdateOperationsInput | number | null
    collaborator_type?: EnumCollaboratorTypeFieldUpdateOperationsInput | $Enums.CollaboratorType
  }

  export type UserCreateManyRoleInput = {
    first_name?: string | null
    last_name?: string | null
    username?: string | null
    password: string
    token?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    email: string
    division_id?: number | null
    user_id?: number
    profile_picture?: string | null
  }

  export type UserUpdateWithoutRoleInput = {
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    answers?: AnswerUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    likes?: LikeUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    assigned_questions?: QuestionUpdateManyWithoutCollaboratorNestedInput
    created_questions?: QuestionUpdateManyWithoutCreatorNestedInput
    division?: DivisionUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutRoleInput = {
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    division_id?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: IntFieldUpdateOperationsInput | number
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    answers?: AnswerUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    assigned_questions?: QuestionUncheckedUpdateManyWithoutCollaboratorNestedInput
    created_questions?: QuestionUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateManyWithoutRoleInput = {
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    division_id?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: IntFieldUpdateOperationsInput | number
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QuestionCreateManyCollaborator_divisionInput = {
    question_id?: number
    title: string
    content: string
    status?: $Enums.QuestionStatus
    created_at?: Date | string
    due_date?: Date | string | null
    is_published?: boolean
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    collaborator_id?: number | null
    collaborator_type: $Enums.CollaboratorType
    creator_id: number
  }

  export type UserCreateManyDivisionInput = {
    first_name?: string | null
    last_name?: string | null
    username?: string | null
    password: string
    token?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    role_id: number
    email: string
    user_id?: number
    profile_picture?: string | null
  }

  export type QuestionUpdateWithoutCollaborator_divisionInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: EnumQuestionStatusFieldUpdateOperationsInput | $Enums.QuestionStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_published?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    collaborator_type?: EnumCollaboratorTypeFieldUpdateOperationsInput | $Enums.CollaboratorType
    answers?: AnswerUpdateManyWithoutQuestionNestedInput
    comments?: CommentUpdateManyWithoutQuestionNestedInput
    likes?: LikeUpdateManyWithoutQuestionNestedInput
    notifications?: NotificationUpdateManyWithoutQuestionNestedInput
    collaborator?: UserUpdateOneWithoutAssigned_questionsNestedInput
    creator?: UserUpdateOneRequiredWithoutCreated_questionsNestedInput
    tags?: TagsOnQuestionsUpdateManyWithoutQuestionNestedInput
    attachment?: AttachmentUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutCollaborator_divisionInput = {
    question_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: EnumQuestionStatusFieldUpdateOperationsInput | $Enums.QuestionStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_published?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    collaborator_id?: NullableIntFieldUpdateOperationsInput | number | null
    collaborator_type?: EnumCollaboratorTypeFieldUpdateOperationsInput | $Enums.CollaboratorType
    creator_id?: IntFieldUpdateOperationsInput | number
    answers?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput
    comments?: CommentUncheckedUpdateManyWithoutQuestionNestedInput
    likes?: LikeUncheckedUpdateManyWithoutQuestionNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutQuestionNestedInput
    tags?: TagsOnQuestionsUncheckedUpdateManyWithoutQuestionNestedInput
    attachment?: AttachmentUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateManyWithoutCollaborator_divisionInput = {
    question_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: EnumQuestionStatusFieldUpdateOperationsInput | $Enums.QuestionStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_published?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    collaborator_id?: NullableIntFieldUpdateOperationsInput | number | null
    collaborator_type?: EnumCollaboratorTypeFieldUpdateOperationsInput | $Enums.CollaboratorType
    creator_id?: IntFieldUpdateOperationsInput | number
  }

  export type UserUpdateWithoutDivisionInput = {
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    answers?: AnswerUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    likes?: LikeUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    assigned_questions?: QuestionUpdateManyWithoutCollaboratorNestedInput
    created_questions?: QuestionUpdateManyWithoutCreatorNestedInput
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutDivisionInput = {
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    answers?: AnswerUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    assigned_questions?: QuestionUncheckedUpdateManyWithoutCollaboratorNestedInput
    created_questions?: QuestionUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateManyWithoutDivisionInput = {
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AnswerCreateManyQuestionInput = {
    answer_id?: number
    content: string
    is_accepted?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    user_id: number
  }

  export type CommentCreateManyQuestionInput = {
    user_id: number
    answer_id?: number | null
    comment_id?: number
    content: string
    created_at?: Date | string
    parent_id?: number | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type LikeCreateManyQuestionInput = {
    user_id: number
    answer_id?: number | null
    created_at?: Date | string
    like_id?: number
  }

  export type NotificationCreateManyQuestionInput = {
    id?: number
    content: string
    is_read?: boolean
    created_at?: Date | string
    user_id: number
    answer_id?: number | null
    notification_type: $Enums.NotificationType
  }

  export type TagsOnQuestionsCreateManyQuestionInput = {
    tag_id: number
    assigned_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type AttachmentCreateManyQuestionInput = {
    attachment_id?: number
    file_name: string
    file_path: string
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    answer_id?: number | null
    comment_id?: number | null
  }

  export type AnswerUpdateWithoutQuestionInput = {
    content?: StringFieldUpdateOperationsInput | string
    is_accepted?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutAnswersNestedInput
    comments?: CommentUpdateManyWithoutAnswerNestedInput
    likes?: LikeUpdateManyWithoutAnswerNestedInput
    notifications?: NotificationUpdateManyWithoutAnswerNestedInput
    attachment?: AttachmentUpdateManyWithoutAnswerNestedInput
  }

  export type AnswerUncheckedUpdateWithoutQuestionInput = {
    answer_id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    is_accepted?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    comments?: CommentUncheckedUpdateManyWithoutAnswerNestedInput
    likes?: LikeUncheckedUpdateManyWithoutAnswerNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutAnswerNestedInput
    attachment?: AttachmentUncheckedUpdateManyWithoutAnswerNestedInput
  }

  export type AnswerUncheckedUpdateManyWithoutQuestionInput = {
    answer_id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    is_accepted?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type CommentUpdateWithoutQuestionInput = {
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answer?: AnswerUpdateOneWithoutCommentsNestedInput
    parent?: CommentUpdateOneWithoutRepliesNestedInput
    replies?: CommentUpdateManyWithoutParentNestedInput
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
    Attachment?: AttachmentUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateWithoutQuestionInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    answer_id?: NullableIntFieldUpdateOperationsInput | number | null
    comment_id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replies?: CommentUncheckedUpdateManyWithoutParentNestedInput
    Attachment?: AttachmentUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateManyWithoutQuestionInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    answer_id?: NullableIntFieldUpdateOperationsInput | number | null
    comment_id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LikeUpdateWithoutQuestionInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    answer?: AnswerUpdateOneWithoutLikesNestedInput
    user?: UserUpdateOneRequiredWithoutLikesNestedInput
  }

  export type LikeUncheckedUpdateWithoutQuestionInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    answer_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    like_id?: IntFieldUpdateOperationsInput | number
  }

  export type LikeUncheckedUpdateManyWithoutQuestionInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    answer_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    like_id?: IntFieldUpdateOperationsInput | number
  }

  export type NotificationUpdateWithoutQuestionInput = {
    content?: StringFieldUpdateOperationsInput | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    notification_type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    answer?: AnswerUpdateOneWithoutNotificationsNestedInput
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateWithoutQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: IntFieldUpdateOperationsInput | number
    answer_id?: NullableIntFieldUpdateOperationsInput | number | null
    notification_type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
  }

  export type NotificationUncheckedUpdateManyWithoutQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: IntFieldUpdateOperationsInput | number
    answer_id?: NullableIntFieldUpdateOperationsInput | number | null
    notification_type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
  }

  export type TagsOnQuestionsUpdateWithoutQuestionInput = {
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tag?: TagUpdateOneRequiredWithoutQuestionsNestedInput
  }

  export type TagsOnQuestionsUncheckedUpdateWithoutQuestionInput = {
    tag_id?: IntFieldUpdateOperationsInput | number
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TagsOnQuestionsUncheckedUpdateManyWithoutQuestionInput = {
    tag_id?: IntFieldUpdateOperationsInput | number
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AttachmentUpdateWithoutQuestionInput = {
    file_name?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answer?: AnswerUpdateOneWithoutAttachmentNestedInput
    comment?: CommentUpdateOneWithoutAttachmentNestedInput
  }

  export type AttachmentUncheckedUpdateWithoutQuestionInput = {
    attachment_id?: IntFieldUpdateOperationsInput | number
    file_name?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answer_id?: NullableIntFieldUpdateOperationsInput | number | null
    comment_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AttachmentUncheckedUpdateManyWithoutQuestionInput = {
    attachment_id?: IntFieldUpdateOperationsInput | number
    file_name?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answer_id?: NullableIntFieldUpdateOperationsInput | number | null
    comment_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CommentCreateManyAnswerInput = {
    user_id: number
    comment_id?: number
    content: string
    created_at?: Date | string
    parent_id?: number | null
    question_id?: number | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type LikeCreateManyAnswerInput = {
    user_id: number
    created_at?: Date | string
    like_id?: number
    question_id?: number | null
  }

  export type NotificationCreateManyAnswerInput = {
    id?: number
    content: string
    is_read?: boolean
    created_at?: Date | string
    user_id: number
    question_id?: number | null
    notification_type: $Enums.NotificationType
  }

  export type AttachmentCreateManyAnswerInput = {
    attachment_id?: number
    file_name: string
    file_path: string
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    question_id?: number | null
    comment_id?: number | null
  }

  export type CommentUpdateWithoutAnswerInput = {
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    parent?: CommentUpdateOneWithoutRepliesNestedInput
    replies?: CommentUpdateManyWithoutParentNestedInput
    question?: QuestionUpdateOneWithoutCommentsNestedInput
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
    Attachment?: AttachmentUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateWithoutAnswerInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    comment_id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
    question_id?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replies?: CommentUncheckedUpdateManyWithoutParentNestedInput
    Attachment?: AttachmentUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateManyWithoutAnswerInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    comment_id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
    question_id?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LikeUpdateWithoutAnswerInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: QuestionUpdateOneWithoutLikesNestedInput
    user?: UserUpdateOneRequiredWithoutLikesNestedInput
  }

  export type LikeUncheckedUpdateWithoutAnswerInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    like_id?: IntFieldUpdateOperationsInput | number
    question_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LikeUncheckedUpdateManyWithoutAnswerInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    like_id?: IntFieldUpdateOperationsInput | number
    question_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type NotificationUpdateWithoutAnswerInput = {
    content?: StringFieldUpdateOperationsInput | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    notification_type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    question?: QuestionUpdateOneWithoutNotificationsNestedInput
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateWithoutAnswerInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: IntFieldUpdateOperationsInput | number
    question_id?: NullableIntFieldUpdateOperationsInput | number | null
    notification_type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
  }

  export type NotificationUncheckedUpdateManyWithoutAnswerInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: IntFieldUpdateOperationsInput | number
    question_id?: NullableIntFieldUpdateOperationsInput | number | null
    notification_type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
  }

  export type AttachmentUpdateWithoutAnswerInput = {
    file_name?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    question?: QuestionUpdateOneWithoutAttachmentNestedInput
    comment?: CommentUpdateOneWithoutAttachmentNestedInput
  }

  export type AttachmentUncheckedUpdateWithoutAnswerInput = {
    attachment_id?: IntFieldUpdateOperationsInput | number
    file_name?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    question_id?: NullableIntFieldUpdateOperationsInput | number | null
    comment_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AttachmentUncheckedUpdateManyWithoutAnswerInput = {
    attachment_id?: IntFieldUpdateOperationsInput | number
    file_name?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    question_id?: NullableIntFieldUpdateOperationsInput | number | null
    comment_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CommentCreateManyParentInput = {
    user_id: number
    answer_id?: number | null
    comment_id?: number
    content: string
    created_at?: Date | string
    question_id?: number | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type AttachmentCreateManyCommentInput = {
    attachment_id?: number
    file_name: string
    file_path: string
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    question_id?: number | null
    answer_id?: number | null
  }

  export type CommentUpdateWithoutParentInput = {
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answer?: AnswerUpdateOneWithoutCommentsNestedInput
    replies?: CommentUpdateManyWithoutParentNestedInput
    question?: QuestionUpdateOneWithoutCommentsNestedInput
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
    Attachment?: AttachmentUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateWithoutParentInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    answer_id?: NullableIntFieldUpdateOperationsInput | number | null
    comment_id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    question_id?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replies?: CommentUncheckedUpdateManyWithoutParentNestedInput
    Attachment?: AttachmentUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateManyWithoutParentInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    answer_id?: NullableIntFieldUpdateOperationsInput | number | null
    comment_id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    question_id?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AttachmentUpdateWithoutCommentInput = {
    file_name?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    question?: QuestionUpdateOneWithoutAttachmentNestedInput
    answer?: AnswerUpdateOneWithoutAttachmentNestedInput
  }

  export type AttachmentUncheckedUpdateWithoutCommentInput = {
    attachment_id?: IntFieldUpdateOperationsInput | number
    file_name?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    question_id?: NullableIntFieldUpdateOperationsInput | number | null
    answer_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AttachmentUncheckedUpdateManyWithoutCommentInput = {
    attachment_id?: IntFieldUpdateOperationsInput | number
    file_name?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    question_id?: NullableIntFieldUpdateOperationsInput | number | null
    answer_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TagsOnQuestionsCreateManyTagInput = {
    question_id: number
    assigned_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type TagsOnQuestionsUpdateWithoutTagInput = {
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    question?: QuestionUpdateOneRequiredWithoutTagsNestedInput
  }

  export type TagsOnQuestionsUncheckedUpdateWithoutTagInput = {
    question_id?: IntFieldUpdateOperationsInput | number
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TagsOnQuestionsUncheckedUpdateManyWithoutTagInput = {
    question_id?: IntFieldUpdateOperationsInput | number
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}