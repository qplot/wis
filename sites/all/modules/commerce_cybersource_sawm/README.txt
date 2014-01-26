
CONTENTS OF THIS FILE
---------------------

 * Introduction
 * Installation

INTRODUCTION
------------

Commerce CyberSource SAWM (Secure Acceptance Silent Order POST) integration
for the Drupal Commerce payment and checkout system.

INSTALLATION
------------

 * Install the CyberSource SAWM module.
 * Then enable the Payment Rule for CyberSource SASOP via Store > Configuration >
   Payment settings and edit the enabling action to use your CyberSource API
   credentials.

TOKENS
------

If you enable the Commerce Card on File module, Commerce CyberSource SAWM
will attempt to request payment tokens for card re-use. The profile for your
Secure Acceptance general settings in the CyberSource business center *must*
have "Payment Tokenization" as an added value service. By enabling Card on File
without Payment Tokenaization in the CyberSource business center, any attempt
to redirect to CyberSource to perform payment will fail.
