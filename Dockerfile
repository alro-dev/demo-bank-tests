# Use official Playwright base image
FROM mcr.microsoft.com/playwright:v1.43.1

# Set working directory
WORKDIR /app

# Copy project files
COPY . .

# Install dependencies
RUN npm install

# Run Playwright install to ensure browsers are available
RUN npx playwright install --with-deps

# Default command: run tests
CMD ["npx", "playwright", "test"]