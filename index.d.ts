declare module "httpproblem" {

    interface IDocument {
        title: string,
        type?: string,
        detail?: string,
        instance?: string,
        status: number,
        extension?: IExtension | null
    }

    interface IDocumentOptions {
        title?: string,
        type?: string,
        detail?: string,
        instance?: string,
        status?: number,
        extension?: IExtension | null
    }

    interface IExtension {

    }

    interface IExtensionOptions {

    }

    interface IHttpProblem extends IDocument {

    }

    type Document = (options: IDocumentOptions, extension?: IExtension) => IDocument;
    type Extension = (options: IExtensionOptions) => IExtension;

    type BadRequestProblem = IHttpProblem
    type ForbiddenProblem = IHttpProblem
    type InternalServerErrorProblem = IHttpProblem
    type NotFoundProblem = IHttpProblem
    type UnauthorizedProblem = IHttpProblem

    const _: {
        Document: Document,
        StatusCodeProblems: {
            BadRequestProblem: BadRequestProblem,
            ForbiddenProblem: ForbiddenProblem,
            InternalServerErrorProblem: InternalServerErrorProblem,
            NotFoundProblem: NotFoundProblem,
            UnauthorizedProblem: UnauthorizedProblem
        },
        Extension: Extension
    };

    export = _;
}
