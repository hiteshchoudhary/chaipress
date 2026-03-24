import { registerAstroComponent } from '@cloudcannon/editable-regions/astro';

// Import all global components
import Hero from '../components/global/hero/hero.astro';
import HeroCentered from '../components/global/hero-centered/hero-centered.astro';
import FeaturesGrid from '../components/global/features-grid/features-grid.astro';
import FeaturesAlternating from '../components/global/features-alternating/features-alternating.astro';
import Testimonials from '../components/global/testimonials/testimonials.astro';
import PricingTable from '../components/global/pricing-table/pricing-table.astro';
import Faq from '../components/global/faq/faq.astro';
import Cta from '../components/global/cta/cta.astro';
import CtaSplit from '../components/global/cta-split/cta-split.astro';
import LogoCloud from '../components/global/logo-cloud/logo-cloud.astro';
import TeamGrid from '../components/global/team-grid/team-grid.astro';
import Stats from '../components/global/stats/stats.astro';
import ContentBlock from '../components/global/content-block/content-block.astro';
import ImageText from '../components/global/image-text/image-text.astro';
import VideoEmbed from '../components/global/video-embed/video-embed.astro';
import SectionHeader from '../components/global/section-header/section-header.astro';
import Form from '../components/global/form/form.astro';
import Countdown from '../components/global/countdown/countdown.astro';
import Curriculum from '../components/global/curriculum/curriculum.astro';
import Instructor from '../components/global/instructor/instructor.astro';
import DocsGrid from '../components/global/docs-grid/docs-grid.astro';

// Register all global components
registerAstroComponent('global/hero', Hero);
registerAstroComponent('global/hero-centered', HeroCentered);
registerAstroComponent('global/features-grid', FeaturesGrid);
registerAstroComponent('global/features-alternating', FeaturesAlternating);
registerAstroComponent('global/testimonials', Testimonials);
registerAstroComponent('global/pricing-table', PricingTable);
registerAstroComponent('global/faq', Faq);
registerAstroComponent('global/cta', Cta);
registerAstroComponent('global/cta-split', CtaSplit);
registerAstroComponent('global/logo-cloud', LogoCloud);
registerAstroComponent('global/team-grid', TeamGrid);
registerAstroComponent('global/stats', Stats);
registerAstroComponent('global/content-block', ContentBlock);
registerAstroComponent('global/image-text', ImageText);
registerAstroComponent('global/video-embed', VideoEmbed);
registerAstroComponent('global/section-header', SectionHeader);
registerAstroComponent('global/form', Form);
registerAstroComponent('global/countdown', Countdown);
registerAstroComponent('global/curriculum', Curriculum);
registerAstroComponent('global/instructor', Instructor);
registerAstroComponent('global/docs-grid', DocsGrid);
