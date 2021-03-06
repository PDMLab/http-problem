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

    type DocumentConstructor = new (options: IDocumentOptions, extension?: IExtension) => IDocument;
    type ExtensionConstructor = new (options: IExtensionOptions) => IExtension;

    type BadRequestProblem = IHttpProblem
    type ForbiddenProblem = IHttpProblem
    type InternalServerErrorProblem = IHttpProblem
    type NotFoundProblem = IHttpProblem
    type UnauthorizedProblem = IHttpProblem

    const _: {
        Document: DocumentConstructor,
        StatusCodeProblems: {
            BadRequestProblem: BadRequestProblem,
            ForbiddenProblem: ForbiddenProblem,
            InternalServerErrorProblem: InternalServerErrorProblem,
            NotFoundProblem: NotFoundProblem,
            UnauthorizedProblem: UnauthorizedProblem
        },
        Extension: ExtensionConstructor
    };

    export = _;
}
