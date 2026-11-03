# Security Policy

## Scope

This repository contains the source for the Purgi Dictionary public website, a static site hosted through GitHub Pages.

## Reporting a security issue

If you discover a security vulnerability affecting the website or this repository, please do not publish the details in a public issue.

Please report the issue privately to the site maintainer through the contact form on the website or through GitHub's private security reporting features if enabled for the repository.

When reporting an issue, please include:

- the affected page or repository file;
- a clear description of the problem;
- steps needed to reproduce it, if applicable;
- the potential impact; and
- any suggested remediation.

## Security priorities

The project uses a static GitHub Pages architecture and does not use PHP, a server-side application, or a project database. Security work therefore focuses primarily on:

- protecting the GitHub account and repository from unauthorized changes;
- protecting the domain and DNS account from takeover;
- enforcing HTTPS;
- reducing client-side injection risk through a Content Security Policy and external JavaScript;
- limiting unnecessary browser capabilities;
- protecting the contact form from automated abuse; and
- keeping dependencies and third-party services under review.

## Disclosure

Please allow reasonable time for investigation and remediation before publicly disclosing a vulnerability.
